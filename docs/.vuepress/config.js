import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  title: 'wanting',
  description: "welcome to wanting's blog",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  bundler: viteBundler(),
  theme: plumeTheme({
    // plume 特有配置
  })
})
