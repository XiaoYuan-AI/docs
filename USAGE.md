# How to Use https://ai.xiaoyuan.co.uk

## Quick Overview

XiaoYuan AI provides access to Claude 4.8 (Opus) through an OpenAI-compatible API endpoint at **https://ai.xiaoyuan.co.uk**

## Getting Started

1. **Get your API key** from https://ai.xiaoyuan.co.uk
2. **Configure your tool** (see below)
3. **Start coding** with Claude 4.8!

---

## Claude Code

### Quick Setup

**Option 1: Settings File**
```json
// ~/.claude/settings.json or .claude/settings.json
{
  "api": {
    "baseUrl": "https://ai.xiaoyuan.co.uk/v1",
    "apiKey": "your-api-key-here",
    "defaultModel": "claude-opus-4-8"
  }
}
```

**Option 2: Environment Variables**
```bash
export ANTHROPIC_API_KEY="your-xiaoyuan-api-key"
export ANTHROPIC_BASE_URL="https://ai.xiaoyuan.co.uk/v1"
```

### Usage
```bash
claude chat
claude --model claude-opus-4-8
```

---

## Codex

### Configuration

Edit `~/.config/codex/config.json`:

```json
{
  "api": {
    "provider": "openai-compatible",
    "baseUrl": "https://ai.xiaoyuan.co.uk/v1",
    "apiKey": "your-api-key-here",
    "model": "claude-opus-4-8"
  }
}
```

### Usage
- `Cmd/Ctrl + K` - Generate code
- `Cmd/Ctrl + I` - Inline suggestions
- Right-click → Codex menu for AI actions

---

## OpenCode

### Configuration

Edit `~/.config/opencode/settings.json`:

```json
{
  "opencode.api.provider": "custom",
  "opencode.api.baseUrl": "https://ai.xiaoyuan.co.uk/v1",
  "opencode.api.key": "your-api-key-here",
  "opencode.api.model": "claude-opus-4-8"
}
```

### Usage
- `Ctrl/Cmd + Shift + L` - Open chat
- `Ctrl/Cmd + Space` - Inline completion
- Right-click → OpenCode AI actions

---

## Available Models

- `claude-opus-4-8` (recommended)
- `claude-opus-4.8`
- `claude-opus-4-latest`

---

## Documentation Site

Full documentation is available at: **http://localhost:5173/**

The site includes:
- ✅ Getting Started guide
- ✅ API Key setup
- ✅ Claude Code detailed guide
- ✅ Codex integration guide
- ✅ OpenCode setup instructions
- ✅ Troubleshooting tips

---

## Project Structure

```
docs/
├── README.md                  # This file
├── package.json              # VitePress scripts
├── .vitepress/
│   └── config.js             # Site configuration
├── guide/
│   ├── getting-started.md
│   ├── api-key.md
│   ├── claude-code.md
│   ├── codex.md
│   └── opencode.md
├── zh/
│   ├── index.md
│   └── guide/
├── public/                   # Static assets
└── index.md                  # Homepage
```

---

## Development Commands

```bash
# Start dev server (already running)
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

---

## Next Steps

1. **View the documentation** at http://localhost:5173/
2. **Choose your tool** and follow the specific guide
3. **Test your setup** with a simple query
4. **Deploy the docs** to GitHub Pages, Vercel, or Netlify

---

## Support

- API Service: https://ai.xiaoyuan.co.uk
- Documentation: http://localhost:5173/
- Repository: https://github.com/XiaoYuan-AI/docs
