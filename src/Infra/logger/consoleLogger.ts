import Logger from "~/Infra/logger/Logger";

const {
  transports: { Console },
} = require("winston");

const { consoleConfiguration } = require("../config/logger");

const consoleTransport = new Console(consoleConfiguration);
//ts-ignore
// module.exports = new Logger(consoleTransport);
