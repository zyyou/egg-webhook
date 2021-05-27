"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
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
