# Codex

Use XiaoYuan AI with Codex, the AI coding assistant.

## Prerequisites

- Codex installed
- API key from [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk)

## Configuration

Codex supports OpenAI-compatible API endpoints, making it easy to use with XiaoYuan AI.

### Step 1: Open Codex Settings

Access Codex settings through:
- Menu: **Preferences** → **Settings**
- Keyboard: `Cmd/Ctrl + ,`
- Command palette: Search for "Settings"

### Step 2: Configure API Settings

Find the API configuration section and set:

| Setting | Value |
|---------|-------|
| **API Provider** | OpenAI Compatible / Custom |
| **Base URL** | `https://ai.xiaoyuan.co.uk/v1` |
| **API Key** | Your XiaoYuan API key |
| **Model** | `claude-opus-4-8` |

### Configuration File

Alternatively, edit Codex's configuration file directly:

::: code-group

```json [Linux/Mac: ~/.config/codex/config.json]
{
  "api": {
    "provider": "openai-compatible",
    "baseUrl": "https://ai.xiaoyuan.co.uk/v1",
    "apiKey": "your-api-key-here",
    "model": "claude-opus-4-8"
  }
}
```

```json [Windows: %APPDATA%/codex/config.json]
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

### Using Environment Variables

For better security, use environment variables:

```bash
export CODEX_API_KEY="your-xiaoyuan-api-key"
export CODEX_BASE_URL="https://ai.xiaoyuan.co.uk/v1"
export CODEX_MODEL="claude-opus-4-8"
```

Then in config:

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

## Usage

Once configured, Codex will use Claude 4.8 for all AI interactions:

### Chat Interface

```
Ask Claude anything about your code...
```

### Code Generation

Use Codex commands to generate code:
- `Cmd/Ctrl + K` - Generate code
- `Cmd/Ctrl + I` - Inline suggestions
- `Cmd/Ctrl + Shift + P` - Command palette

### Code Explanation

Select code and ask Codex to explain it:
1. Highlight code
2. Right-click → **Codex: Explain**
3. Get explanation from Claude 4.8

### Refactoring

Ask Codex to refactor code:
1. Select code to refactor
2. Right-click → **Codex: Refactor**
3. Describe desired changes

## Advanced Features

### Custom Prompts

Create custom prompts in Codex settings:

```json
{
  "customPrompts": [
    {
      "name": "Document Function",
      "prompt": "Add comprehensive documentation to this function including JSDoc comments, parameter descriptions, return value, and usage examples."
    },
    {
      "name": "Optimize Performance",
      "prompt": "Analyze this code for performance issues and suggest optimizations."
    }
  ]
}
```

### Model Parameters

Fine-tune Claude's behavior:

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

### Context Management

Configure how much code context Codex sends:

```json
{
  "context": {
    "includeOpenFiles": true,
    "includeGitDiff": true,
    "maxTokens": 100000
  }
}
```

## Verification

Test your setup:

1. Open Codex
2. Start a new chat
3. Ask: "What model are you?"
4. Claude should identify as Opus 4.8

Or run a code generation task to verify it's working.

## Troubleshooting

### Connection Failed

If Codex can't connect to XiaoYuan AI:

1. Check the base URL: `https://ai.xiaoyuan.co.uk/v1`
2. Verify your API key
3. Test with curl:

```bash
curl https://ai.xiaoyuan.co.uk/v1/models \
  -H "Authorization: Bearer your-api-key-here"
```

### Slow Response Times

If responses are slow:

1. Check your internet connection
2. Reduce context size in settings
3. Lower `max_tokens` parameter
4. Check API status at [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk)

### Authentication Errors

```
Error: Invalid API key
```

Solutions:
- Verify API key is correct
- Regenerate API key at [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk)
- Check for extra spaces in configuration
- Ensure key hasn't expired

### Model Not Available

```
Error: Model not found
```

Ensure model name is exactly:
- `claude-opus-4-8` (recommended)
- `claude-opus-4.8`
- `claude-opus-4-latest`

## Tips & Best Practices

### 1. Use Specific Prompts

Instead of:
> "Fix this"

Try:
> "Refactor this function to improve readability, add error handling, and follow Python PEP 8 style guidelines"

### 2. Provide Context

Give Claude context about your project:
- Select relevant code files
- Describe the project structure
- Mention frameworks and libraries used

### 3. Iterative Refinement

Work iteratively:
1. Generate initial code
2. Review and test
3. Ask for specific improvements
4. Repeat until satisfied

### 4. Leverage Chat History

Claude maintains conversation context:
- Reference previous exchanges
- Build on earlier suggestions
- Ask follow-up questions

## Integration with IDEs

### VS Code

Install Codex extension for VS Code:

```bash
code --install-extension codex.vscode-codex
```

Configure in VS Code settings.json:

```json
{
  "codex.api.baseUrl": "https://ai.xiaoyuan.co.uk/v1",
  "codex.api.apiKey": "your-api-key-here",
  "codex.api.model": "claude-opus-4-8"
}
```

### Neovim

Add to your Neovim config:

```lua
require('codex').setup({
  api = {
    base_url = 'https://ai.xiaoyuan.co.uk/v1',
    api_key = os.getenv('XIAOYUAN_API_KEY'),
    model = 'claude-opus-4-8'
  }
})
```

## Support

Need help?

1. Check [Getting Started](/guide/getting-started)
2. Review [API Key guide](/guide/api-key)
3. Visit [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk) for support
