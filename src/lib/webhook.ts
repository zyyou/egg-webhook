import { Application } from "egg";
import { IDingtalkConfig } from "./interface/dingtalk_config";

import * as dingtalkHelper from "./helper_dingtalk";

/**
 * 
 * @param app Application
 * @param options webhook配置
 */
export function createWebhook(app: Application, options: { dingtalk: IDingtalkConfig }) {
    return {
        /**
         * 钉钉
         */
        dingtalk: dingtalkHelper.getHelper(app, options.dingtalk)
    }
}
