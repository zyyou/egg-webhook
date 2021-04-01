import { Agent } from 'egg';

import * as os from 'os';

function existLib(name: string): boolean {
  const index = ['dingtalk'].indexOf(name);
  return index >= 0;
}

module.exports = (agent: Agent) => {
  agent.ready(async () => {
    const config: any = agent.config.webhook;
    // agent.logger.debug('agent ready config', config);

    for (let key in config) {
      const cfg = config[key];
      if (!cfg.startmsg || !existLib(key)) {
        continue;
      }

      const helper = require(`./lib/helper_${key}`);

      helper
        .getHelper(agent)
        .sendText(
          `应用启动通知：主机 ${os.hostname()} 上的应用 ${agent.name}[${agent.config.pkg?.version}] 以环境 ${
            agent.config.env
          } 启动`,
        );
    }
  });
};
