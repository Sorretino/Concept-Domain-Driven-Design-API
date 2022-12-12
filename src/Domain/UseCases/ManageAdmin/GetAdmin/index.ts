import AdminRepository from "~/Infra/repositories/AdminRepository";

const GetAdmin = {
  async all() {
    try {
      return await AdminRepository.getAll();
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  async byId(id: string) {
    try {
      return await AdminRepository.getOneById(id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
};

export default GetAdmin;
