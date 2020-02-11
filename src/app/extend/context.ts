import { IHelper } from "egg";
import * as webhook from "../../lib/webhook";

export default {
  /**
   * webhook
   */
  get webhook(this: IHelper): any {
    return webhook.createWebhook(this.app, this.config.webhook);
  }
};
