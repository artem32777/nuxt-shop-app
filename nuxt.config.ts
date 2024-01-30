// https://nuxt.com/docs/api/configuration/nuxt-config
import { readFileSync, existsSync } from 'node:fs';

export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    baseURL: '/nuxt-shop-app/',
    buildAssetsDir: 'assets',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    'nuxt-icon',
    '@pinia/nuxt',
  ],
  shadcn: {
    prefix: 'Ui',
    componentDir: './components/ui'
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },
})