# OpenCode

Use XiaoYuan AI with OpenCode, the open source AI coding assistant.

## Prerequisites

- OpenCode installed
- API key from [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk)

## Configuration

OpenCode provides flexible configuration options for custom API endpoints.

### Step 1: Access Settings

Open OpenCode settings:
- Command: `Ctrl/Cmd + ,`
- Menu: **File** → **Preferences** → **Settings**
- Or search: "OpenCode Settings"

### Step 2: Configure API

Navigate to **API Configuration** and set:

| Setting | Value |
|---------|-------|
| **Provider** | Custom / OpenAI Compatible |
| **Base URL** | `https://ai.xiaoyuan.co.uk/v1` |
| **API Key** | Your XiaoYuan API key |
| **Model** | `claude-opus-4-8` |

### Configuration File Method

Edit OpenCode's configuration file:

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

### Environment Variables

Use environment variables for security:

```bash
# Add to ~/.bashrc or ~/.zshrc
export OPENCODE_API_KEY="your-xiaoyuan-api-key"
export OPENCODE_BASE_URL="https://ai.xiaoyuan.co.uk/v1"
export OPENCODE_MODEL="claude-opus-4-8"
```

Then in OpenCode settings:

```json
{
  "opencode.api.baseUrl": "${OPENCODE_BASE_URL}",
  "opencode.api.key": "${OPENCODE_API_KEY}",
  "opencode.api.model": "${OPENCODE_MODEL}"
}
```

## Usage

### Chat Interface

Access OpenCode's chat interface:
- Keyboard: `Ctrl/Cmd + Shift + L`
- Sidebar: Click AI icon
- Command: "OpenCode: Open Chat"

Example conversation:
```
You: Explain this function
Claude: This function implements...
```

### Inline Code Completion

OpenCode provides inline suggestions as you type:
1. Start typing code
2. Wait for suggestions (or press `Ctrl + Space`)
3. Accept with `Tab` or `Enter`
4. Navigate with arrow keys

### Code Actions

Right-click on code to access AI actions:
- **Explain Code** - Get detailed explanation
- **Refactor** - Improve code structure
- **Add Documentation** - Generate comments
- **Fix Issues** - Suggest bug fixes
- **Optimize** - Improve performance

### Command Palette

Press `Ctrl/Cmd + Shift + P` and search for:
- `OpenCode: Ask AI`
- `OpenCode: Generate Code`
- `OpenCode: Review Code`
- `OpenCode: Write Tests`

## Features

### Multi-File Context

OpenCode can analyze multiple files:

1. Select files in explorer
2. Right-click → **Include in AI Context**
3. Ask questions about the selected files

### Git Integration

OpenCode integrates with Git:
- **Review Changes** - Analyze git diff
- **Generate Commit Messages** - AI-powered commits
- **Explain History** - Understand code evolution

Configuration:
```json
{
  "opencode.git.enabled": true,
  "opencode.git.autoGenerateCommits": true,
  "opencode.git.includeContext": true
}
```

### Terminal Integration

Use AI in the integrated terminal:

```bash
# Ask Claude about shell commands
$ opencode ask "How do I find large files?"

# Generate shell scripts
$ opencode generate "script to backup database"

# Explain errors
$ opencode explain "$(npm run build 2>&1)"
```

## Advanced Configuration

### Custom Model Parameters

Fine-tune Claude's behavior:

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

### Context Windows

Configure how much context to send:

```json
{
  "opencode.context.maxTokens": 150000,
  "opencode.context.includeImports": true,
  "opencode.context.includeDocstrings": true,
  "opencode.context.scanDepth": 3
}
```

### Custom Prompts

Create reusable prompts:

```json
{
  "opencode.customPrompts": [
    {
      "name": "Code Review",
      "prompt": "Review this code for:\n1. Bugs and edge cases\n2. Performance issues\n3. Security vulnerabilities\n4. Code style and best practices",
      "shortcut": "Ctrl+Shift+R"
    },
    {
      "name": "Add Tests",
      "prompt": "Generate comprehensive unit tests for this code, including edge cases and error scenarios.",
      "shortcut": "Ctrl+Shift+T"
    }
  ]
}
```

### Workspace Settings

Create project-specific settings in `.vscode/settings.json`:

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

## Extensions

### Language-Specific Extensions

OpenCode supports language-specific AI features:

**Python:**
```json
{
  "opencode.python.analyzeTypes": true,
  "opencode.python.suggestTypeHints": true,
  "opencode.python.lintIntegration": "ruff"
}
```

**JavaScript/TypeScript:**
```json
{
  "opencode.typescript.suggestTypes": true,
  "opencode.typescript.refactorToHooks": true,
  "opencode.typescript.modernSyntax": true
}
```

### AI-Powered Debugging

Enable AI debugging assistance:

```json
{
  "opencode.debug.enabled": true,
  "opencode.debug.explainErrors": true,
  "opencode.debug.suggestFixes": true
}
```

## Verification

Test your setup:

1. Open OpenCode
2. Press `Ctrl/Cmd + Shift + L` to open chat
3. Type: "Hello! What model are you?"
4. Verify Claude responds as Opus 4.8

Or test code generation:
```
Generate a function to calculate fibonacci numbers
```

## Troubleshooting

### Connection Issues

**Error:** `Failed to connect to API`

Solutions:
1. Verify base URL: `https://ai.xiaoyuan.co.uk/v1`
2. Check API key is valid
3. Test connection:

```bash
curl https://ai.xiaoyuan.co.uk/v1/models \
  -H "Authorization: Bearer your-api-key-here"
```

4. Check proxy settings if behind corporate firewall

### Authentication Failed

**Error:** `401 Unauthorized`

Solutions:
- Confirm API key is correct
- Check for extra spaces or newlines
- Regenerate API key at [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk)
- Verify environment variable is set correctly:
  ```bash
  echo $OPENCODE_API_KEY
  ```

### Model Not Found

**Error:** `Model 'claude-opus-4-8' not found`

Solutions:
- Use exact model name: `claude-opus-4-8`
- Alternative formats: `claude-opus-4.8` or `claude-opus-4-latest`
- Check API service status

### Slow Performance

If responses are slow:

1. **Reduce context size:**
   ```json
   {
     "opencode.context.maxTokens": 50000
   }
   ```

2. **Disable unnecessary features:**
   ```json
   {
     "opencode.inlineCompletion.enabled": false,
     "opencode.autoExplain.enabled": false
   }
   ```

3. **Enable streaming:**
   ```json
   {
     "opencode.api.parameters.stream": true
   }
   ```

### Rate Limit Errors

**Error:** `429 Too Many Requests`

Solutions:
- Reduce request frequency
- Increase debounce delay:
  ```json
  {
    "opencode.debounce.delay": 1000
  }
  ```
- Check your API tier and limits
- Upgrade account if needed

## Tips & Best Practices

### 1. Use Keyboard Shortcuts

Learn key shortcuts for faster workflow:
- `Ctrl/Cmd + L` - Quick chat
- `Ctrl/Cmd + K` - Generate code
- `Ctrl/Cmd + .` - Quick actions
- `Ctrl/Cmd + /` - Toggle AI suggestions

### 2. Provide Project Context

Help Claude understand your project:

Create `.opencode/context.md`:
```markdown
# Project Context

- Framework: Next.js 14
- Database: PostgreSQL with Prisma
- Auth: NextAuth.js
- Styling: Tailwind CSS
- Testing: Vitest + Testing Library
```

### 3. Iterative Development

Work in iterations:
1. Generate initial implementation
2. Test and review
3. Ask for specific improvements
4. Refine until complete

### 4. Use Comments for Guidance

Guide AI with comments:
```typescript
// Generate a function that:
// 1. Fetches user data from API
// 2. Validates the response
// 3. Caches result for 5 minutes
// 4. Handles errors gracefully
```

### 5. Leverage Chat History

Build on previous context:
```
You: Create a user service
Claude: [generates code]
You: Now add authentication
Claude: [adds auth to existing code]
You: Add rate limiting
Claude: [enhances with rate limiting]
```

## Integration Examples

### GitHub Copilot Migration

Switching from GitHub Copilot? OpenCode with XiaoYuan AI provides similar features:

| Copilot Feature | OpenCode Equivalent |
|----------------|---------------------|
| Inline completions | `opencode.inlineCompletion` |
| Chat | `Ctrl/Cmd + Shift + L` |
| Fix issues | Code actions menu |
| Explain code | Right-click → Explain |

### CI/CD Integration

Use OpenCode in CI pipelines:

```yaml
# .github/workflows/code-review.yml
name: AI Code Review
on: [pull_request]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install OpenCode CLI
        run: npm install -g opencode-cli
      - name: Review Changes
        env:
          OPENCODE_API_KEY: ${{ secrets.XIAOYUAN_API_KEY }}
          OPENCODE_BASE_URL: https://ai.xiaoyuan.co.uk/v1
        run: opencode review --diff
```

### VS Code Devcontainer

Use in development containers:

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

## Support

Need help?

1. Check [Getting Started](/guide/getting-started)
2. Review [API Key guide](/guide/api-key)
3. Visit OpenCode documentation
4. Contact XiaoYuan AI support at [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk)
