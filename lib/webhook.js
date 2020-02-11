"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dingtalkHelper = __importStar(require("./helper_dingtalk"));
/**
 *
 * @param app Application
 * @param options webhook配置
 */
function createWebhook(app, options) {
    return {
        /**
         * 钉钉
         */
        dingtalk: dingtalkHelper.getHelper(app, options.dingtalk)
    };
}
exports.createWebhook = createWebhook;
