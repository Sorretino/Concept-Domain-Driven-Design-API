import { Entity } from "~/Core/Domain/Entity";
import type { LogProps } from "~/Shared/PropTypes/LogProps";

export class Log extends Entity<LogProps> {
  private constructor(props: LogProps, id?: string) {
    super(props, id);
  }

  static create(props: LogProps, id?: string) {
    const log = new Log(props, id);
    return log.props;
  }
}

export default Log;
