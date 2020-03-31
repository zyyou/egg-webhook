"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpcall_1 = require("./httpcall");
/**
 * 获取相关函数
 * @param app Application
 * @param options 配置文件
 */
function getHelper(app) {
    var _a, _b;
    const url = (_b = (_a = app.config.webhook) === null || _a === void 0 ? void 0 : _a.dingtalk) === null || _b === void 0 ? void 0 : _b.url;
    if (!url) {
        app.logger.warn('没有配置webhook地址：config.webhook.dingtalk.url');
        return;
    }
    return {
        /**
         * 发送文本消息
         * @param text 消息内容
         */
        async sendText(text, atArr = [], atAll = false) {
            const retVal = await httpcall_1.httpCall(app, url, {
                msgtype: 'text',
                text: {
                    content: text,
                },
                at: {
                    atMobiles: atArr,
                    isAtAll: atAll,
                },
            });
            return retVal;
        },
    };
}
exports.getHelper = getHelper;
