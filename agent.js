"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const os = __importStar(require("os"));
function existLib(name) {
    const index = ['dingtalk'].indexOf(name);
    return index >= 0;
}
module.exports = (agent) => {
    agent.ready(async () => {
        var _a;
        const config = agent.config.webhook;
        // agent.logger.debug('agent ready config', config);
        for (let key in config) {
            const cfg = config[key];
            if (!cfg.startmsg || !existLib(key)) {
                continue;
            }
            const helper = require(`./lib/helper_${key}`);
            helper
                .getHelper(agent)
                .sendText(`应用启动通知：主机 ${os.hostname()} 上的应用 ${agent.name}[${(_a = agent.config.pkg) === null || _a === void 0 ? void 0 : _a.version}] 以环境 ${agent.config.env} 启动`);
        }
    });
};
