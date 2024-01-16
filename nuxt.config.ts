// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  modules: ['dayjs-nuxt', '@pinia/nuxt', '@nuxtjs/eslint-module'],
  ssr: false,
  app: {
    baseURL: '/nuxt3-starter-template',
    head: {
      title: 'title',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon'
        }
      ],
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, user-scalable=no'
        },
        {
          name: 'google',
          content: 'notranslate'
        },
        {
          charset: 'utf-8'
        }
      ]
    }
  }
});
