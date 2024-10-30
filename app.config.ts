import { defineConfig } from '@tanstack/start/config'

export default defineConfig({
  server: {
    preset: 'bun',
    prerender: {
      routes: ['/'],
      crawlLinks: true,
    },
  },
})