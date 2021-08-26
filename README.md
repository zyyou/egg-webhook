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
    // 钉钉通知：注意机器人配置关键字、IP、签名，启动通知配置关键字中文冒号
    dingtalk: {
      url: '',
      startmsg: false,  // 应用启动通知，false=不通知，true=所有主机启动都通知，Array=只有配置的主机启动才通知
    },
  };

```

# 调用

```
const retVal = await ctx.helper.getWebhook().dingtalk.sendText('zyy: unit test');
```

# 启动通知示例

```
应用启动通知：主机 xxx 上的应用 xxxx[1.0.0] 以环境 local 启动
```
