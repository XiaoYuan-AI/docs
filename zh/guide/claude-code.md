# Claude Code

在小源 AI 中使用 Claude Code CLI、桌面应用或 IDE 扩展。

## 前提条件

- 已安装 Claude Code（[在此下载](https://claude.ai/download)）
- 从 [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk) 获取 API 密钥

## 配置

Claude Code 可以通过设置配置为使用自定义 API 端点。

### 方法一：使用 Claude Code 设置（推荐）

1. 打开 Claude Code
2. 输入 `/config` 或进入设置
3. 导航到 API 设置
4. 配置：
   - **API Base URL**：`https://ai.xiaoyuan.co.uk/v1`
   - **API Key**：你的小源 API 密钥
   - **Model**：`claude-opus-4-8`

### 方法二：手动配置文件

直接编辑 Claude Code 设置文件：

::: code-group

```json [~/.claude/settings.json]
{
  "api": {
    "baseUrl": "https://ai.xiaoyuan.co.uk/v1",
    "apiKey": "your-api-key-here",
    "defaultModel": "claude-opus-4-8"
  }
}
```

```json [.claude/settings.json（项目级）]
{
  "api": {
    "baseUrl": "https://ai.xiaoyuan.co.uk/v1",
    "apiKey": "${XIAOYUAN_API_KEY}",
    "defaultModel": "claude-opus-4-8"
  }
}
```

:::

### 方法三：环境变量

在启动 Claude Code 前设置环境变量：

```bash
export ANTHROPIC_API_KEY="your-xiaoyuan-api-key"
export ANTHROPIC_BASE_URL="https://ai.xiaoyuan.co.uk/v1"
```

然后启动 Claude Code：

```bash
claude
```

## 使用

配置完成后，Claude Code 将自动使用小源 AI 端点：

```bash
# 开始对话
claude chat

# 在项目目录中运行
cd /path/to/your/project
claude

# 使用指定模型
claude --model claude-opus-4-8
```

## 桌面应用

Claude Code 桌面版：

1. 打开 **Preferences** / **Settings**
2. 导航到 **API Configuration**
3. 设置：
   - Base URL：`https://ai.xiaoyuan.co.uk/v1`
   - API Key：你的小源 API 密钥
4. 点击 **Save** 并重启应用

## IDE 扩展

### VS Code

1. 安装 Claude Code 扩展
2. 打开 VS Code 设置（`Cmd/Ctrl + ,`）
3. 搜索 "Claude Code"
4. 配置：
   ```json
   {
     "claudeCode.api.baseUrl": "https://ai.xiaoyuan.co.uk/v1",
     "claudeCode.api.apiKey": "your-api-key-here",
     "claudeCode.model": "claude-opus-4-8"
   }
   ```

### JetBrains IDE

1. 安装 Claude Code 插件
2. 打开 **Settings** → **Tools** → **Claude Code**
3. 设置：
   - API Base URL：`https://ai.xiaoyuan.co.uk/v1`
   - API Key：你的小源 API 密钥
   - Model：`claude-opus-4-8`

## 验证

测试配置：

```bash
claude --version
claude chat "你好！你使用的是 Claude 4.8 吗？"
```

你应该能看到来自 Claude Opus 4.8 的回复。

## 故障排除

### 连接问题

如果 Claude Code 无法连接：

1. 确认 Base URL 完全一致：`https://ai.xiaoyuan.co.uk/v1`
2. 检查 API 密钥是否有效
3. 使用 curl 测试端点：

```bash
curl https://ai.xiaoyuan.co.uk/v1/models \
  -H "Authorization: Bearer your-api-key-here"
```

### 找不到模型

请确保使用以下模型名称之一：
- `claude-opus-4-8`
- `claude-opus-4.8`
- `claude-opus-4-latest`

### 认证错误

- 仔细核对 API 密钥
- 确保配置中没有多余空格
- 尝试在 [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk) 重新生成 API 密钥

## 高级用法

### 项目级配置

在项目中创建 `.claude/settings.json`：

```json
{
  "api": {
    "baseUrl": "https://ai.xiaoyuan.co.uk/v1",
    "apiKey": "${XIAOYUAN_API_KEY}",
    "defaultModel": "claude-opus-4-8"
  },
  "projectContext": {
    "name": "我的项目",
    "description": "使用小源 AI"
  }
}
```

### 使用 MCP 服务器

Claude Code 的模型上下文协议 (MCP) 可与小源 AI 无缝配合：

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/server-filesystem", "/path/to/project"]
    }
  },
  "api": {
    "baseUrl": "https://ai.xiaoyuan.co.uk/v1",
    "apiKey": "your-api-key-here"
  }
}
```

## 支持

如有问题：

1. 查看 [API 密钥指南](/zh/guide/api-key)
2. 查阅 Claude Code 文档
3. 联系小源 AI 支持
