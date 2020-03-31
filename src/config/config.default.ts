// 开发配置
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (_appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.webhook = {
    dingtalk: {
      url: '',
    },
    weixin: {},
  };

  return config;
};
