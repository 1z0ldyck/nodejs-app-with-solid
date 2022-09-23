import winston from 'winston'

export default winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
  ],
});
