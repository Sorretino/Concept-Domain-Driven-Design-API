//@ts-ignore
const dependencies = { Logger: require("winston") };

class Logger {
  constructor(transport, injection) {
    Object.assign(this, {
      error: this.callLogger.bind(this, "error"),
      warn: this.callLogger.bind(this, "warn"),
      info: this.callLogger.bind(this, "info"),
      verbose: this.callLogger.bind(this, "verbose"),
      debug: this.callLogger.bind(this, "debug"),
      silly: this.callLogger.bind(this, "silly"),
    });

    const { Logger } = Object.assign({}, dependencies, injection);
    //@ts-ignore
    this.transport = transport;
    //@ts-ignore
    this.loggerInstance = Logger.createLogger({ transports: [this.transport] });
  }

  getExecution(deep) {
    const stack = new Error().stack;
    //@ts-ignore
    return stack.split("\n")[deep];
  }

  callLogger(level, message, contents) {
    const execution = this.getExecution(3);
    const logObject = { execution, message, contents };
    //@ts-ignore
    this.loggerInstance.log(level, logObject);
  }
}

module.exports = Logger;
