import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Ermes",
  description: "Edge-to-Cloud Resource Management for Enhanced Session-based Applications",

  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '48x48' }],
    // ['link', { rel: 'icon', href: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' }],
    // ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ffffff' }],
    ['meta', { name: 'author', content: 'Paolo Longo' }],
    ['meta', {
      name: 'keywords',
      content: 'Ermes, Ermes-Labs, framework, distributed, edge, cloud, resource, management, session, session-based, application, applications, session-based-applications, session-based-application, session-based-app, session-based-apps, session',
    }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Ermes' }],
    // ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:description', content: 'Edge-to-Cloud Resource Management for Enhanced Session-based Applications' }],
    // ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { name: 'twitter:description', content: 'Edge-to-Cloud Resource Management for Enhanced Session-based Applications' }],
    ['meta', { name: 'twitter:title', content: 'Ermes' }],
    // ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    // ['meta', { name: 'twitter:image', content: ogImage }],
    // ['meta', { name: 'twitter:site', content: '@ermes-labs' }],
    // ['meta', { name: 'twitter:url', content: ogUrl }],
    // ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
  ],
  srcExclude: ['README.md', 'CONTRIBUTING.md'],
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/examples/markdown-examples' },
          { text: 'Runtime API Examples', link: '/examples/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ermes-labs' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-PRESENT Ermes-Labs',
    },

    logo: '/hermes.png',
  }
})
