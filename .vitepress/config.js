import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/',
  title: 'XiaoYuan AI',
  description: 'Use Claude 4.8 in your favorite coding tools',
  srcExclude: ['README.md', 'USAGE.md'],

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'XiaoYuan AI',
      description: 'Use Claude 4.8 in your favorite coding tools',

      themeConfig: {
        logo: '/logo.svg',

        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/getting-started' },
          { text: 'AI Service', link: 'https://ai.xiaoyuan.co.uk' }
        ],

        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Introduction', link: '/guide/getting-started' },
              { text: 'API Key', link: '/guide/api-key' }
            ]
          },
          {
            text: 'Integration Guides',
            items: [
              { text: 'Claude Code', link: '/guide/claude-code' },
              { text: 'Codex', link: '/guide/codex' },
              { text: 'OpenCode', link: '/guide/opencode' }
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/XiaoYuan-AI' }
        ],

        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2026 XiaoYuan AI'
        }
      }
    },

    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '小源 AI',
      description: '在你喜爱的编程工具中使用 Claude 4.8',

      themeConfig: {
        logo: '/logo.svg',

        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/getting-started' },
          { text: 'AI 服务', link: 'https://ai.xiaoyuan.co.uk' }
        ],

        sidebar: [
          {
            text: '快速入门',
            items: [
              { text: '介绍', link: '/zh/guide/getting-started' },
              { text: 'API 密钥', link: '/zh/guide/api-key' }
            ]
          },
          {
            text: '集成指南',
            items: [
              { text: 'Claude Code', link: '/zh/guide/claude-code' },
              { text: 'Codex', link: '/zh/guide/codex' },
              { text: 'OpenCode', link: '/zh/guide/opencode' }
            ]
          }
        ],

        socialLinks: [
          { icon: 'github', link: 'https://github.com/XiaoYuan-AI' }
        ],

        footer: {
          message: '基于 MIT 许可证发布。',
          copyright: 'Copyright © 2026 小源 AI'
        }
      }
    }
  }
})
