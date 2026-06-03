# Claude Code

Use XiaoYuan AI with Claude Code CLI, Desktop App, or IDE extensions.

## Prerequisites

- Claude Code installed ([Download here](https://claude.ai/download))
- API key from [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk)

## Configuration

Claude Code can be configured to use custom API endpoints through the settings.

### Method 1: Using Claude Code Settings (Recommended)

1. Open Claude Code
2. Type `/config` or access settings
3. Navigate to API settings
4. Configure:
   - **API Base URL**: `https://ai.xiaoyuan.co.uk/v1`
   - **API Key**: Your XiaoYuan API key
   - **Model**: `claude-opus-4-8`

### Method 2: Manual Configuration File

Edit the Claude Code settings file directly:

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

```json [.claude/settings.json (Project)]
{
  "api": {
    "baseUrl": "https://ai.xiaoyuan.co.uk/v1",
    "apiKey": "${XIAOYUAN_API_KEY}",
    "defaultModel": "claude-opus-4-8"
  }
}
```

:::

### Method 3: Environment Variables

Set environment variables before launching Claude Code:

```bash
export ANTHROPIC_API_KEY="your-xiaoyuan-api-key"
export ANTHROPIC_BASE_URL="https://ai.xiaoyuan.co.uk/v1"
```

Then launch Claude Code:

```bash
claude
```

## Usage

Once configured, Claude Code will automatically use the XiaoYuan AI endpoint:

```bash
# Start a conversation
claude chat

# Run in a project directory
cd /path/to/your/project
claude

# Use specific model
claude --model claude-opus-4-8
```

## Desktop App

For Claude Code Desktop:

1. Open **Preferences** / **Settings**
2. Navigate to **API Configuration**
3. Set:
   - Base URL: `https://ai.xiaoyuan.co.uk/v1`
   - API Key: Your XiaoYuan API key
4. Click **Save** and restart the app

## IDE Extensions

### VS Code

1. Install the Claude Code extension
2. Open VS Code settings (`Cmd/Ctrl + ,`)
3. Search for "Claude Code"
4. Configure:
   ```json
   {
     "claudeCode.api.baseUrl": "https://ai.xiaoyuan.co.uk/v1",
     "claudeCode.api.apiKey": "your-api-key-here",
     "claudeCode.model": "claude-opus-4-8"
   }
   ```

### JetBrains IDEs

1. Install the Claude Code plugin
2. Open **Settings** → **Tools** → **Claude Code**
3. Set:
   - API Base URL: `https://ai.xiaoyuan.co.uk/v1`
   - API Key: Your XiaoYuan API key
   - Model: `claude-opus-4-8`

## Verification

Test your configuration:

```bash
claude --version
claude chat "Hello! Are you using Claude 4.8?"
```

You should see responses from Claude Opus 4.8.

## Troubleshooting

### Connection Issues

If Claude Code can't connect:

1. Verify the base URL is exactly: `https://ai.xiaoyuan.co.uk/v1`
2. Check your API key is valid
3. Test the endpoint with curl:

```bash
curl https://ai.xiaoyuan.co.uk/v1/models \
  -H "Authorization: Bearer your-api-key-here"
```

### Model Not Found

Ensure you're using one of these model names:
- `claude-opus-4-8`
- `claude-opus-4.8`
- `claude-opus-4-latest`

### Authentication Errors

- Double-check your API key
- Ensure there are no extra spaces in the configuration
- Try regenerating your API key at [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk)

## Advanced Usage

### Project-Specific Configuration

Create `.claude/settings.json` in your project:

```json
{
  "api": {
    "baseUrl": "https://ai.xiaoyuan.co.uk/v1",
    "apiKey": "${XIAOYUAN_API_KEY}",
    "defaultModel": "claude-opus-4-8"
  },
  "projectContext": {
    "name": "My Project",
    "description": "Using XiaoYuan AI"
  }
}
```

### Using with MCP Servers

Claude Code's Model Context Protocol (MCP) works seamlessly with XiaoYuan AI:

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

## Support

If you encounter issues:

1. Check the [API Key guide](/guide/api-key)
2. Review Claude Code documentation
3. Contact XiaoYuan AI support
