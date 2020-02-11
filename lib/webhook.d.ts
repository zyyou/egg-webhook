import { Application } from "egg";
import { IDingtalkConfig } from "./interface/dingtalk_config";
/**
 *
 * @param app Application
 * @param options webhook配置
 */
export declare function createWebhook(app: Application, options: {
    dingtalk: IDingtalkConfig;
}): {
    /**
     * 钉钉
     */
    dingtalk: {
        readonly options: IDingtalkConfig;
        sendText(text: string, atArr?: string[], atAll?: boolean): Promise<import("nodejs-kit").IReturnValue>;
    };
};
