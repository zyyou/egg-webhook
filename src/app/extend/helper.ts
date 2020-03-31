import { IHelper } from 'egg';
import * as dingtalk from '../../lib/helper_dingtalk';

export default {
  get webhook(this: IHelper) {
    return {
      dingtalk: dingtalk.getHelper(this.app),
    };
  },
};
