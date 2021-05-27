import { Application } from 'egg';
import { IReturnValue } from 'nodejs-kit';
import { httpCall } from './httpcall';

/**
 * 获取相关函数
 * @param app Application
 * @param url 地址，默认使用配置
 */
export function getHelper(app: Application, url?: string) {
  url = url || app.config.webhook?.dingtalk?.url;
  // key = key || app.config.webhook?.dingtalk?.key;
  if (!url) {
    app.logger.warn('没有配置webhook地址：config.webhook.dingtalk.url');
    return;
  }

  return {
    /**
     * 发送文本消息
     * @param text 消息内容
     */
    async sendText(text: string, atArr: string[] = [], atAll: boolean = false): Promise<IReturnValue> {
      const retVal: IReturnValue = await httpCall(app, url as string, {
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
