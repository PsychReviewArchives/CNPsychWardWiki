import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CN Psych Ward Wiki",
  description: "Quis custodiet ipsos custodes?",

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    },
    en: {
      label: 'English',
      lang: 'en'
    }
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/About' },
      { text: 'Wiki', link: 'Wiki'}
    ],

    sidebar: {
      '/Wiki': [
        {
          text: '江苏',
          items: [
            {
              text: '南京',
              items: [
                { text: '南京脑科医院', link: '/Wiki/Jiangsu/Nanjing/NBH' }
              ]
            }
          ]
        },
      ],

      '/en/Wiki': [
        {
          text: 'Jiangsu',
          items: [
            {
              text: 'Nanjing',
              items: [
                { text: 'Nanjing Brain Hospital', link: '/en/Wiki/Jiangsu/Nanjing/NBH' }
              ]
            }
          ]
        },
        {
          text: 'Shanghai',
          items: [
            {text: 'Shanghai Mental Health Centre', link: '/en/Wiki/Shanghai/SMHC' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PsychReviewArchives' }
    ]
  }
})
