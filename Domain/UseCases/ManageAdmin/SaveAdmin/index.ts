import AdminRepository from "../../../../Infra/repositories/AdminRepository";

const saveAdmin = {
  async save(props) {
    try {
      return AdminRepository.insert(props);
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

export default saveAdmin;
