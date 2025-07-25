import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  title: '我的 Plume 博客',
  description: '使用 plume 主题',
  bundler: viteBundler(),
  theme: plumeTheme({
    // plume 特有配置
  })
})
