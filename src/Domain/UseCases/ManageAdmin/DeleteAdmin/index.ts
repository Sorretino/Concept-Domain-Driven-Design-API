import AdminRepository from "~/Infra/repositories/AdminRepository";

const delteAdmin = {
  async execute(id: string) {
    try {
      return await AdminRepository.delete(id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
};

export default delteAdmin;
