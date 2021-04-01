import { IHelper } from 'egg';
import * as dingtalk from '../../lib/helper_dingtalk';

export function getWebhook(this: IHelper) {
  return {
    dingtalk: dingtalk.getHelper(this.app),
  };
}
