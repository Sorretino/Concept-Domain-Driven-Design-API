import AdminRepository from "~/Infra/repositories/AdminRepository";
import type { AdminProps } from "~/Shared/PropTypes/AdminProps";
//Shared/PropTypes/AdminProps
const CreateAdmin = {
  async execute(props: AdminProps) {
    try {
      return await AdminRepository.insert(props);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
};

export default CreateAdmin;
