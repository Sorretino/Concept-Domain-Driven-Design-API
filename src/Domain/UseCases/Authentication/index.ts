import { compare, hash } from "bcryptjs";
import { secret } from "~/Infra/config/auth";
import AdminRepository from "~/Infra/repositories/AdminRepository";
import { sign } from "jsonwebtoken";
import { AdminProps } from "~/Shared/PropTypes/AdminProps";
import { AuthProps } from "~/Shared/PropTypes/AuthProps";

const Authentication = {
  async execute(props: AuthProps) {
    try {
      const admin: AdminProps = await AdminRepository.getOneByEmailToLogin(props.email);
      if (!admin) throw new Error("User not found");
      if (!(await compare(props.password, admin.password))) throw new Error("Access not permited");
      admin.password = "";
      const token = sign({ id: admin.id }, secret, {
        expiresIn: 86400,
      });

      const result = {
        user: admin,
        token: token,
        session: admin.id,
      };
      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
};

export default Authentication;
