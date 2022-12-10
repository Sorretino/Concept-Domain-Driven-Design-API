import AdminRepository from "../../../../Infra/repositories/AdminRepository";

const getAdmins = {
  async all() {
    try {
      return AdminRepository.getAll();
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default getAdmins;
