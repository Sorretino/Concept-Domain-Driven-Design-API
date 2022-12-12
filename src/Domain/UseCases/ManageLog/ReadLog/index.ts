import LogRepository from "~/Infra/repositories/LogRepository";

const GetLog = {
  async all() {
    try {
      return await LogRepository.getAll();
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
  async byId(id: string) {
    try {
      return await LogRepository.getOneById(id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
};

export default GetLog;
