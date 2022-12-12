import LogRepository from "~/Infra/repositories/LogRepository";
import type { LogProps } from "~/Shared/PropTypes/LogProps";

const CreateLog = {
  async execute(props: LogProps) {
    try {
      return await LogRepository.insert(props);
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
};

export default CreateLog;
