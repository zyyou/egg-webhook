// 开发配置
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (_appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.webhook = {
    dingtalk: {
      url: '',
      startmsg: false, // 启动通知，false=不通知，true=所有主机启动都通知，Array=只有配置的主机启动才通知
    },
    weixin: {},
  };

  return config;
};
