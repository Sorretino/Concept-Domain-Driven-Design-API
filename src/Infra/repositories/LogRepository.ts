import type { LogProps } from "~/Shared/PropTypes/LogProps";
import Log from "~/Domain/Entities/Log";
import LogDB from "~/Infra/database/schemas/LogSchema";

const LogRepository = {
  async insert(props: LogProps) {
    new LogDB({});

    const log = Log.create(props);
    const result = await LogDB.create(log);
    return result;
  },

  async getOneById(id: string) {
    new LogDB({});
    const result = await LogDB.findById(id);
    return Log.create(result);
  },

  async getAll() {
    new LogDB({});
    const result = await LogDB.find();
    return result;
  },
};

export default LogRepository;
