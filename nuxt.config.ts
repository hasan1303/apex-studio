export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  nitro: {
    preset: 'github-pages'
  },
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: '/apex-studio/',
    head: {
      title: 'Apex Studio — Bold Digital Agency',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0' },
        { name: 'description', content: 'Strategy-led design studio helping ambitious brands build products people love.' },
        { property: 'og:title', content: 'Apex Studio — Bold Digital Agency' },
        { property: 'og:description', content: 'We craft bold digital experiences that move people and drive results.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap'
        }
      ]
    }
  }
})
