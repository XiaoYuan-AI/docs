# API Key

## Getting Your API Key

Visit [https://ai.xiaoyuan.co.uk](https://ai.xiaoyuan.co.uk) to obtain your API key.

## Security Best Practices

::: warning
Never commit your API key to version control or share it publicly.
:::

### Store Keys Securely

- Use environment variables
- Use configuration files that are gitignored
- Use secure key management tools

### Example Environment Variable

```bash
export XIAOYUAN_API_KEY="your-api-key-here"
```

## Using Your API Key

Your API key is used to authenticate requests to the XiaoYuan AI service. Each tool has a different way of configuring the API key - see the specific guide for your tool:

- [Claude Code Configuration](/guide/claude-code)
- [Codex Configuration](/guide/codex)
- [OpenCode Configuration](/guide/opencode)

## Troubleshooting

### Invalid API Key Error

If you receive an authentication error:

1. Verify your API key is correct
2. Check that you've copied the entire key
3. Ensure the key hasn't expired
4. Contact support if issues persist

### Rate Limits

API usage may be subject to rate limits depending on your account tier. If you encounter rate limit errors, consider:

- Reducing request frequency
- Upgrading your account tier
- Implementing retry logic with backoff
