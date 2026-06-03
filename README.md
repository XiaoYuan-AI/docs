# XiaoYuan AI Documentation / 小源 AI 文档

Documentation website for using https://ai.xiaoyuan.co.uk in Claude Code, Codex, and OpenCode.

在 Claude Code、Codex 和 OpenCode 中使用 https://ai.xiaoyuan.co.uk 的文档网站。

> 中文文档位于 [`docs/zh/`](docs/zh/) 目录 | Chinese docs at [`docs/zh/`](docs/zh/)

## Quick Start / 快速开始

```bash
# Install dependencies / 安装依赖
npm install

# Start development server / 启动开发服务器
npm run docs:dev

# Build for production / 构建生产版本
npm run docs:build

# Preview production build / 预览生产构建
npm run docs:preview
```

## Development / 开发

The documentation is built with [VitePress](https://vitepress.dev/).

文档使用 [VitePress](https://vitepress.dev/) 构建。

### Project Structure / 项目结构

```
docs/
├── .vitepress/
│   └── config.js          # VitePress configuration / 配置文件
├── guide/
│   ├── getting-started.md # Introduction / 介绍
│   ├── api-key.md         # API key guide / API 密钥指南
│   ├── claude-code.md     # Claude Code setup / Claude Code 配置
│   ├── codex.md           # Codex setup / Codex 配置
│   └── opencode.md        # OpenCode setup / OpenCode 配置
├── zh/                    # Chinese docs / 中文文档
│   ├── index.md           # 首页
│   └── guide/             # 指南
├── public/                # Static assets / 静态资源
└── index.md               # Homepage / 首页
```

### Adding Content / 添加内容

1. Create a new markdown file in the appropriate directory / 在对应目录创建新的 Markdown 文件
2. Add it to the sidebar configuration in `.vitepress/config.js` / 添加到 `.vitepress/config.js` 的侧边栏配置中
3. Test locally with `npm run docs:dev` / 使用 `npm run docs:dev` 本地测试

## Deployment / 部署

The site can be deployed to any static hosting service / 站点可以部署到任何静态托管服务：

- **GitHub Pages**: Use `.github/workflows/deploy.yml`
- **Vercel**: Import repository and build with `npm run docs:build`
- **Netlify**: Build command: `npm run docs:build`, publish directory: `docs/.vitepress/dist`

## License / 许可证

MIT License - see [LICENSE](LICENSE) for details
