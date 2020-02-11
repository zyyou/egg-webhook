/**
 * webhook模型
 */
export interface IDingtalkConfig {
    /**
     * 参考：https://oapi.dingtalk.com/robot/send?access_token=XXXXXXXXXXXXXXX
     */
    webhook: string;
    [propName: string]: any;
}
