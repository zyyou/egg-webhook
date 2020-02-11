"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpcall_1 = require("./httpcall");
/**
 * 获取相关函数
 * @param app Application
 * @param options 配置文件
 */
function getHelper(app, options) {
    return {
        get options() {
            return options;
        },
        /**
         * 发送文本消息
         * @param text 消息内容
         */
        async sendText(text, atArr = [], atAll = false) {
            const retVal = await httpcall_1.httpCall(app, options.webhook, {
                msgtype: 'text',
                text: {
                    content: text
                },
                "at": {
                    atMobiles: atArr,
                    isAtAll: atAll
                }
            });
            return retVal;
        }
    };
}
exports.getHelper = getHelper;
