// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nathanchase/nuxt-dayjs-module'],
  dayjs: {
    plugins: ['dayOfYear'],
  },
});
