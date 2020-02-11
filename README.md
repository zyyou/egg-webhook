# egg-webhook

- egg webhook 插件
- typescript

# 支持

- 钉钉机器人

# 配置

```
# config.default.js

config.webhook={
    dingtalk:{
        webhook:''
    },
    weixin:{}
}
```

# 调用

```
this.ctx.webhook.dingtalk.sendText(text:string,attList:string[],atAll:boolean);
```
