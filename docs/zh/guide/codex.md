# Codex

在小源 AI 中使用 Codex AI 编程助手。

## 前提条件

- 已安装 Codex
- 从 [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk) 获取 API 密钥

## 配置

Codex 支持 OpenAI 兼容的 API 端点，可轻松对接小源 AI。

### 步骤 1：打开 Codex 设置

通过以下方式访问 Codex 设置：
- 菜单：**Preferences** → **Settings**
- 快捷键：`Cmd/Ctrl + ,`
- 命令面板：搜索 "Settings"

### 步骤 2：配置 API 设置

找到 API 配置部分并设置：

| 设置 | 值 |
|---------|-------|
| **API Provider** | OpenAI Compatible / Custom |
| **Base URL** | `https://ai.xiaoyuan.co.uk/v1` |
| **API Key** | 你的小源 API 密钥 |
| **Model** | `claude-opus-4-8` |

### 配置文件方式

直接编辑 Codex 配置文件：

::: code-group

```json [Linux/Mac：~/.config/codex/config.json]
{
  "api": {
    "provider": "openai-compatible",
    "baseUrl": "https://ai.xiaoyuan.co.uk/v1",
    "apiKey": "your-api-key-here",
    "model": "claude-opus-4-8"
  }
}
```

```json [Windows：%APPDATA%/codex/config.json]
{
  "api": {
    "provider": "openai-compatible",
    "baseUrl": "https://ai.xiaoyuan.co.uk/v1",
    "apiKey": "your-api-key-here",
    "model": "claude-opus-4-8"
  }
}
```

:::

### 使用环境变量

为提高安全性，推荐使用环境变量：

```bash
export CODEX_API_KEY="your-xiaoyuan-api-key"
export CODEX_BASE_URL="https://ai.xiaoyuan.co.uk/v1"
export CODEX_MODEL="claude-opus-4-8"
```

在配置中引用：

```json
{
  "api": {
    "provider": "openai-compatible",
    "baseUrl": "${CODEX_BASE_URL}",
    "apiKey": "${CODEX_API_KEY}",
    "model": "${CODEX_MODEL}"
  }
}
```

## 使用

配置完成后，Codex 将使用 Claude 4.8 进行所有 AI 交互：

### 对话界面

```
向 Claude 询问任何关于代码的问题……
```

### 代码生成

使用 Codex 命令生成代码：
- `Cmd/Ctrl + K` - 生成代码
- `Cmd/Ctrl + I` - 行内建议
- `Cmd/Ctrl + Shift + P` - 命令面板

### 代码解释

选中代码后让 Codex 解释：
1. 高亮选中代码
2. 右键 → **Codex: Explain**
3. 获得 Claude 4.8 的解释

### 代码重构

让 Codex 重构代码：
1. 选中要重构的代码
2. 右键 → **Codex: Refactor**
3. 描述你想要的改动

## 高级功能

### 自定义提示词

在 Codex 设置中创建自定义提示词：

```json
{
  "customPrompts": [
    {
      "name": "生成文档",
      "prompt": "为此函数添加完整文档，包括 JSDoc 注释、参数说明、返回值和用法示例。"
    },
    {
      "name": "性能优化",
      "prompt": "分析此代码的性能问题并提出优化建议。"
    }
  ]
}
```

### 模型参数

微调 Claude 的行为：

```json
{
  "api": {
    "baseUrl": "https://ai.xiaoyuan.co.uk/v1",
    "apiKey": "your-api-key-here",
    "model": "claude-opus-4-8",
    "parameters": {
      "temperature": 0.7,
      "max_tokens": 4096,
      "top_p": 0.9
    }
  }
}
```

### 上下文管理

配置 Codex 发送多少代码上下文：

```json
{
  "context": {
    "includeOpenFiles": true,
    "includeGitDiff": true,
    "maxTokens": 100000
  }
}
```

## 验证

测试你的配置：

1. 打开 Codex
2. 开启新对话
3. 询问："你是什么模型？"
4. Claude 应识别为 Opus 4.8

或运行代码生成任务验证是否正常工作。

## 故障排除

### 连接失败

如果 Codex 无法连接到小源 AI：

1. 检查 Base URL：`https://ai.xiaoyuan.co.uk/v1`
2. 验证 API 密钥
3. 使用 curl 测试：

```bash
curl https://ai.xiaoyuan.co.uk/v1/models \
  -H "Authorization: Bearer your-api-key-here"
```

### 响应速度慢

如果响应较慢：

1. 检查网络连接
2. 在设置中减少上下文大小
3. 降低 `max_tokens` 参数
4. 在 [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk) 查看 API 状态

### 认证错误

```
Error: Invalid API key
```

解决方案：
- 验证 API 密钥是否正确
- 在 [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk) 重新生成 API 密钥
- 检查配置中是否有多余空格
- 确认密钥未过期

### 模型不可用

```
Error: Model not found
```

确保模型名称完全正确：
- `claude-opus-4-8`（推荐）
- `claude-opus-4.8`
- `claude-opus-4-latest`

## 提示与最佳实践

### 1. 使用具体的提示词

不要只说：
> "修一下"

尝试：
> "重构这个函数以提高可读性，添加错误处理，遵循 Python PEP 8 代码风格"

### 2. 提供项目上下文

让 Claude 了解你的项目：
- 选中相关代码文件
- 描述项目结构
- 提及使用的框架和库

### 3. 迭代优化

采用迭代方式工作：
1. 生成初始代码
2. 审查和测试
3. 请求具体改进
4. 重复直到满意

### 4. 利用对话历史

Claude 会保持对话上下文：
- 引用之前的交流
- 在之前的建议基础上继续
- 提出后续问题

## IDE 集成

### VS Code

安装 Codex VS Code 扩展：

```bash
code --install-extension codex.vscode-codex
```

在 VS Code settings.json 中配置：

```json
{
  "codex.api.baseUrl": "https://ai.xiaoyuan.co.uk/v1",
  "codex.api.apiKey": "your-api-key-here",
  "codex.api.model": "claude-opus-4-8"
}
```

### Neovim

在 Neovim 配置中添加：

```lua
require('codex').setup({
  api = {
    base_url = 'https://ai.xiaoyuan.co.uk/v1',
    api_key = os.getenv('XIAOYUAN_API_KEY'),
    model = 'claude-opus-4-8'
  }
})
```

## 支持

需要帮助？

1. 查看 [快速开始](/zh/guide/getting-started)
2. 查阅 [API 密钥指南](/zh/guide/api-key)
3. 访问 [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk) 获取支持
