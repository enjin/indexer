"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const node_1 = require("@logtail/node");
const logger_1 = require("@subsquid/logger");
const config_1 = __importDefault(require("./config"));
class Logger {
    constructor(namespace) {
        this.sqdLogger = (0, logger_1.createLogger)(namespace);
        if (config_1.default.logtail.host && config_1.default.logtail.token) {
            console.log(config_1.default.logtail);
            this.logtail = new node_1.Logtail(config_1.default.logtail.token, {
                endpoint: config_1.default.logtail.host,
            });
        }
    }
    info(msg) {
        this.sqdLogger.info(msg);
        if (this.logtail) {
            void this.logtail.info(msg);
        }
    }
    debug(msg) {
        this.sqdLogger.debug(msg);
        if (this.logtail) {
            void this.logtail.debug(msg);
        }
    }
    warn(msg) {
        this.sqdLogger.warn(msg);
        if (this.logtail) {
            void this.logtail.warn(msg);
        }
    }
    error(msg) {
        this.sqdLogger.error(msg);
        if (this.logtail) {
            void this.logtail.error(msg);
        }
    }
    trace(msg) {
        if (typeof this.sqdLogger.trace === 'function') {
            this.sqdLogger.trace(msg);
        }
        if (this.logtail) {
            void this.logtail.debug(msg);
        }
    }
    fatal(msg) {
        if (typeof this.sqdLogger.fatal === 'function') {
            this.sqdLogger.fatal(msg);
        }
        if (this.logtail) {
            void this.logtail.error(msg);
        }
    }
}
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map