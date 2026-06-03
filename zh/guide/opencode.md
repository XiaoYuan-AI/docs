# OpenCode

在小源 AI 中使用 OpenCode 开源 AI 编程助手。

## 前提条件

- 已安装 OpenCode
- 从 [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk) 获取 API 密钥

## 配置

OpenCode 提供灵活的配置选项来对接自定义 API 端点。

### 步骤 1：进入设置

打开 OpenCode 设置：
- 命令：`Ctrl/Cmd + ,`
- 菜单：**File** → **Preferences** → **Settings**
- 或搜索："OpenCode Settings"

### 步骤 2：配置 API

导航到 **API Configuration** 并设置：

| 设置 | 值 |
|---------|-------|
| **Provider** | Custom / OpenAI Compatible |
| **Base URL** | `https://ai.xiaoyuan.co.uk/v1` |
| **API Key** | 你的小源 API 密钥 |
| **Model** | `claude-opus-4-8` |

### 配置文件方式

编辑 OpenCode 的配置文件：

::: code-group

```json [~/.config/opencode/settings.json]
{
  "opencode.api.provider": "custom",
  "opencode.api.baseUrl": "https://ai.xiaoyuan.co.uk/v1",
  "opencode.api.key": "your-api-key-here",
  "opencode.api.model": "claude-opus-4-8",
  "opencode.api.timeout": 60000
}
```

```yaml [~/.config/opencode/config.yaml]
api:
  provider: custom
  baseUrl: https://ai.xiaoyuan.co.uk/v1
  key: your-api-key-here
  model: claude-opus-4-8
  timeout: 60000
```

:::

### 环境变量

使用环境变量提高安全性：

```bash
# 添加到 ~/.bashrc 或 ~/.zshrc
export OPENCODE_API_KEY="your-xiaoyuan-api-key"
export OPENCODE_BASE_URL="https://ai.xiaoyuan.co.uk/v1"
export OPENCODE_MODEL="claude-opus-4-8"
```

在 OpenCode 设置中引用：

```json
{
  "opencode.api.baseUrl": "${OPENCODE_BASE_URL}",
  "opencode.api.key": "${OPENCODE_API_KEY}",
  "opencode.api.model": "${OPENCODE_MODEL}"
}
```

## 使用

### 对话界面

访问 OpenCode 的对话界面：
- 快捷键：`Ctrl/Cmd + Shift + L`
- 侧边栏：点击 AI 图标
- 命令："OpenCode: Open Chat"

示例对话：
```
你：解释这个函数
Claude：这个函数实现了……
```

### 行内代码补全

OpenCode 在你输入时提供行内建议：
1. 开始输入代码
2. 等待建议（或按 `Ctrl + Space`）
3. 按 `Tab` 或 `Enter` 接受
4. 使用方向键导航

### 代码操作

右键点击代码访问 AI 操作：
- **Explain Code** - 获取详细解释
- **Refactor** - 改善代码结构
- **Add Documentation** - 生成注释
- **Fix Issues** - 建议修复 bug
- **Optimize** - 提升性能

### 命令面板

按 `Ctrl/Cmd + Shift + P` 搜索：
- `OpenCode: Ask AI`
- `OpenCode: Generate Code`
- `OpenCode: Review Code`
- `OpenCode: Write Tests`

## 功能

### 多文件上下文

OpenCode 可以分析多个文件：

1. 在资源管理器中选中文件
2. 右键 → **Include in AI Context**
3. 就选中的文件提问

### Git 集成

OpenCode 与 Git 集成：
- **查看变更** - 分析 git diff
- **生成提交信息** - AI 驱动的 commit
- **解释历史** - 理解代码演变

配置：
```json
{
  "opencode.git.enabled": true,
  "opencode.git.autoGenerateCommits": true,
  "opencode.git.includeContext": true
}
```

### 终端集成

在集成终端中使用 AI：

```bash
# 向 Claude 询问 Shell 命令
$ opencode ask "如何查找大文件？"

# 生成 Shell 脚本
$ opencode generate "备份数据库的脚本"

# 解释错误
$ opencode explain "$(npm run build 2>&1)"
```

## 高级配置

### 自定义模型参数

微调 Claude 的行为：

```json
{
  "opencode.api.model": "claude-opus-4-8",
  "opencode.api.parameters": {
    "temperature": 0.7,
    "max_tokens": 8192,
    "top_p": 0.9,
    "top_k": 40,
    "stream": true
  }
}
```

### 上下文窗口

配置发送多少上下文：

```json
{
  "opencode.context.maxTokens": 150000,
  "opencode.context.includeImports": true,
  "opencode.context.includeDocstrings": true,
  "opencode.context.scanDepth": 3
}
```

### 自定义提示词

创建可复用的提示词：

```json
{
  "opencode.customPrompts": [
    {
      "name": "代码审查",
      "prompt": "审查以下代码：\n1. Bug 和边界情况\n2. 性能问题\n3. 安全漏洞\n4. 代码风格和最佳实践",
      "shortcut": "Ctrl+Shift+R"
    },
    {
      "name": "添加测试",
      "prompt": "为此代码生成全面的单元测试，包括边界情况和错误场景。",
      "shortcut": "Ctrl+Shift+T"
    }
  ]
}
```

### 工作区设置

在 `.vscode/settings.json` 中创建项目级设置：

```json
{
  "opencode.api.baseUrl": "https://ai.xiaoyuan.co.uk/v1",
  "opencode.api.key": "${XIAOYUAN_API_KEY}",
  "opencode.api.model": "claude-opus-4-8",
  "opencode.project.context": {
    "framework": "React",
    "language": "TypeScript",
    "style": "functional"
  }
}
```

## 扩展

### 语言特定扩展

OpenCode 支持语言特定的 AI 功能：

**Python：**
```json
{
  "opencode.python.analyzeTypes": true,
  "opencode.python.suggestTypeHints": true,
  "opencode.python.lintIntegration": "ruff"
}
```

**JavaScript/TypeScript：**
```json
{
  "opencode.typescript.suggestTypes": true,
  "opencode.typescript.refactorToHooks": true,
  "opencode.typescript.modernSyntax": true
}
```

### AI 驱动的调试

启用 AI 调试辅助：

```json
{
  "opencode.debug.enabled": true,
  "opencode.debug.explainErrors": true,
  "opencode.debug.suggestFixes": true
}
```

## 验证

测试你的配置：

1. 打开 OpenCode
2. 按 `Ctrl/Cmd + Shift + L` 打开对话
3. 输入："你好！你是什么模型？"
4. 确认 Claude 回复为 Opus 4.8

或测试代码生成：
```
生成一个计算斐波那契数列的函数
```

## 故障排除

### 连接问题

**错误：**`Failed to connect to API`

解决方案：
1. 验证 Base URL：`https://ai.xiaoyuan.co.uk/v1`
2. 检查 API 密钥是否有效
3. 测试连接：

```bash
curl https://ai.xiaoyuan.co.uk/v1/models \
  -H "Authorization: Bearer your-api-key-here"
```

4. 如果在公司防火墙后，检查代理设置

### 认证失败

**错误：**`401 Unauthorized`

解决方案：
- 确认 API 密钥正确
- 检查是否有多余空格或换行
- 在 [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk) 重新生成 API 密钥
- 验证环境变量设置正确：
  ```bash
  echo $OPENCODE_API_KEY
  ```

### 找不到模型

**错误：**`Model 'claude-opus-4-8' not found`

解决方案：
- 使用精确模型名称：`claude-opus-4-8`
- 替代格式：`claude-opus-4.8` 或 `claude-opus-4-latest`
- 查看 API 服务状态

### 响应速度慢

如果响应较慢：

1. **减少上下文大小：**
   ```json
   {
     "opencode.context.maxTokens": 50000
   }
   ```

2. **禁用不必要的功能：**
   ```json
   {
     "opencode.inlineCompletion.enabled": false,
     "opencode.autoExplain.enabled": false
   }
   ```

3. **启用流式传输：**
   ```json
   {
     "opencode.api.parameters.stream": true
   }
   ```

### 速率限制错误

**错误：**`429 Too Many Requests`

解决方案：
- 降低请求频率
- 增加防抖延迟：
  ```json
  {
    "opencode.debounce.delay": 1000
  }
  ```
- 检查你的 API 等级和限制
- 如需要，升级账户

## 提示与最佳实践

### 1. 使用键盘快捷键

学习关键快捷键以提高效率：
- `Ctrl/Cmd + L` - 快速对话
- `Ctrl/Cmd + K` - 生成代码
- `Ctrl/Cmd + .` - 快速操作
- `Ctrl/Cmd + /` - 切换 AI 建议

### 2. 提供项目上下文

帮助 Claude 理解你的项目：

创建 `.opencode/context.md`：
```markdown
# 项目上下文

- 框架：Next.js 14
- 数据库：PostgreSQL + Prisma
- 认证：NextAuth.js
- 样式：Tailwind CSS
- 测试：Vitest + Testing Library
```

### 3. 迭代开发

采用迭代方式工作：
1. 生成初始实现
2. 测试和审查
3. 请求具体改进
4. 完善直至完成

### 4. 使用注释引导 AI

用注释引导 AI：
```typescript
// 生成一个函数：
// 1. 从 API 获取用户数据
// 2. 验证响应
// 3. 缓存结果 5 分钟
// 4. 优雅处理错误
```

### 5. 利用对话历史

在之前上下文的基础上继续：
```
你：创建一个用户服务
Claude：[生成代码]
你：现在添加认证
Claude：[在现有代码基础上添加认证]
你：添加速率限制
Claude：[增强速率限制功能]
```

## 集成示例

### 从 GitHub Copilot 迁移

从 GitHub Copilot 切换？OpenCode + 小源 AI 提供类似功能：

| Copilot 功能 | OpenCode 对应功能 |
|----------------|---------------------|
| 行内补全 | `opencode.inlineCompletion` |
| 对话 | `Ctrl/Cmd + Shift + L` |
| 修复问题 | 代码操作菜单 |
| 解释代码 | 右键 → Explain |

### CI/CD 集成

在 CI 流水线中使用 OpenCode：

```yaml
# .github/workflows/code-review.yml
name: AI 代码审查
on: [pull_request]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: 安装 OpenCode CLI
        run: npm install -g opencode-cli
      - name: 审查变更
        env:
          OPENCODE_API_KEY: ${{ secrets.XIAOYUAN_API_KEY }}
          OPENCODE_BASE_URL: https://ai.xiaoyuan.co.uk/v1
        run: opencode review --diff
```

### VS Code 开发容器

在开发容器中使用：

```json
// .devcontainer/devcontainer.json
{
  "extensions": ["opencode.vscode-opencode"],
  "settings": {
    "opencode.api.baseUrl": "https://ai.xiaoyuan.co.uk/v1",
    "opencode.api.key": "${localEnv:XIAOYUAN_API_KEY}"
  }
}
```

## 支持

需要帮助？

1. 查看 [快速开始](/zh/guide/getting-started)
2. 查阅 [API 密钥指南](/zh/guide/api-key)
3. 访问 OpenCode 文档
4. 联系小源 AI 支持：[https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk)
