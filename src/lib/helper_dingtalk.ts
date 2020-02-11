import { IReturnValue } from "nodejs-kit";
import { httpCall } from "./httpcall";
import { Application } from "egg";
import { IDingtalkConfig } from "./interface/dingtalk_config";

/**
 * 获取相关函数
 * @param app Application
 * @param options 配置文件
 */
export function getHelper(app: Application, options: IDingtalkConfig) {
    return {
        get options(): IDingtalkConfig {
            return options;
        },
        /**
         * 发送文本消息
         * @param text 消息内容
         */
        async sendText(text: string, atArr: string[] = [], atAll: boolean = false): Promise<IReturnValue> {
            const retVal: IReturnValue = await httpCall(app, options.webhook, {
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
