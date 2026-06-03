# API 密钥

## 获取 API 密钥

访问 [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk) 获取你的 API 密钥。

## 安全最佳实践

::: warning
切勿将 API 密钥提交到版本控制系统或公开发布。
:::

### 安全存储密钥

- 使用环境变量
- 使用已被 gitignore 的配置文件
- 使用安全的密钥管理工具

### 环境变量示例

```bash
export XIAOYUAN_API_KEY="your-api-key-here"
```

## 使用 API 密钥

你的 API 密钥用于认证对小源 AI 服务的请求。每种工具的密钥配置方式不同——请参阅对应工具的指南：

- [Claude Code 配置](/zh/guide/claude-code)
- [Codex 配置](/zh/guide/codex)
- [OpenCode 配置](/zh/guide/opencode)

## 故障排除

### API 密钥无效错误

如果遇到认证错误：

1. 确认 API 密钥正确
2. 检查是否完整复制了密钥
3. 确认密钥未过期
4. 如问题持续，联系支持

### 速率限制

API 使用可能受到账户等级对应的速率限制。如果遇到速率限制错误，请考虑：

- 降低请求频率
- 升级账户等级
- 实现带退避的重试逻辑
