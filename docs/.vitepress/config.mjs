import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "CN Psych Ward Wiki",
  description: "Quis custodiet ipsos custodes?",
  lastUpdated: true,

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

    docFooter: {
      prev: false,
      next: false
    },

    footer: {
      message: '由于各受访者的背景不同，我们强烈建议您在其他平台上<strong>不要引用全部内容</strong>。<br>Due to the background of our various interviewees, we urge you <strong>not to cite our content in whole</strong> to other platforms.',
      copyright: 'Copyright © 2025 <a href="https://wiki.psychreview.su">CN Psych Ward Wiki</a>. All rights reserved.'
    },
    
    search: {
      provider: 'local'
    },
    
    nav: [
      { text: 'Home', link: '/' },
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
      { icon: 'github', link: 'https://github.com/PsychReviewArchives/CNPsychWardWiki' }
    ]
  }
})
