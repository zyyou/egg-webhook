import { Application } from 'egg';
import { IReturnValue } from 'nodejs-kit';
import { httpCall } from './httpcall';

/**
 * 获取相关函数
 * @param app Application
 * @param options 配置文件
 */
export function getHelper(app: Application) {
  const url = app.config.webhook?.dingtalk?.url;
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
      const retVal: IReturnValue = await httpCall(app, url, {
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
