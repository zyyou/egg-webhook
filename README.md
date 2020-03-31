# egg-webhook

- egg webhook 插件
- typescript

# 支持

- 钉钉机器人

# plugin.js 配置

```

  webhook: {
    enable: true,
    package: 'egg-webhook',
  },
```

# config.default.js 配置

```
config.webhook = {
    dingtalk: {
      url: '',
    },
  };

```

# 调用

```
const retVal = await ctx.helper.webhook.dingtalk.sendText('zyy: unit test');
```
