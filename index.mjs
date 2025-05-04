import pino from "pino";

const logger = pino();
logger.trace("this is trace log");
logger.debug("this is debug log");
logger.info("this is info log");
logger.warn("this is warn log");
logger.error("this is error log");
logger.fatal("this is error log");