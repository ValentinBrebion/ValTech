import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    [
        'script',
        { id: 'register-sw' },
        `;(() => {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/pwa/sw.js')
            }
        })()`
    ],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', {rel: 'icon', href: '/logo-ico-valtech.ico'}],
    //preconnect
    ['link', {rel: 'preconnect', href:'https://media.discordapp.net'}],
    ['link', {rel: 'stylesheet', href:'/css/valtech.css'}]
],
  ignoreDeadLinks: true,
  cleanUrls: true,
 lastUpdated: true,
  lang: 'fr',
  markdown: {
    lineNumbers: true
  },
  
  title: "ValTech",
  description: "Site personnel et professionel dans lequel sera documenter les différents langages que je verrais ou que j'ai vu ainsi qu'une partie cybersécurité et devtools",
  themeConfig: {
    smoothScroll: true,
    outlineTitle: 'Références',
    logo:'https://media.discordapp.net/attachments/1035253366995030166/1083390653897125938/logo_sans_texte-removebg-preview.png?ex=65bba5ac&is=65a930ac&hm=41c7f0f7753ced3c316d6ac84755dac82472533e56a2a8090a77cfc1457ce96c&=&format=webp&quality=lossless',
    lastUpdatedText: 'Mis à jour le ',
    lastUpdated: {
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    returnToTopLabel: 'en haut',
    search: {
      provider: 'local'
    },
    darkModeSwitchLabel: 'Apparance',

    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Cybersécurité', link: '/cybersecurite/OWASP'},
      {text: 'DevTools', link: '/DevTools/DevSite'},
      {text: 'Langage', items: [ {text: 'Git', link: 'language/git/git'}, {text: 'Laravel', link:'language/PHP/Laravel/Laravel'} ]}
    ],

    sidebar: [
      {
        text: 'langage de programmation',
        items: [

          {text: 'Git',
          
           collapsed: true,
          items: [
            {text: 'Introduction', link:'/language/git/git'},
            {text: 'Commandes', link:'/language/git/CommandeGit'}
          ]
        },
        {
          text: 'Javascript',
          collapsed: true,
          items: [
            {text: 'VueJs', 
              collapsed: true, 
              items: [
                {text: '✅ les bonnes pratiques', link:'/language/js/vuejs/BonnePratiquesVueJS'},
                {text: 'Vuejs 2', 
                  collapsed: true, 
                    items: [
                      {text: 'Intro Vuejs2', link: '/language/js/vuejs/vuejs2/IntroVuejs'}
                    ]
                },
                {text: 'Vuejs 3',
                  collapsed: true, 
                    items: [
                      {text: 'Intro Vuejs3'}
                    ]
              }
              ]
            },
            {
              text: 'React',
              collapsed: true,
              items: [
                {text: 'Introduction React', link: '/language/js/react/IntroReact'},
                {text: 'Les composants', link: '/language/js/react/Composants'},
                {text: 'Les hooks', link: '/language/js/react/hook'}
              ]
            },
          ]
        },
          {
            text:' PHP ',
            collapsed: true,
            items: [
              {text :' Laravel', link:'/language/PHP/Laravel/Laravel'},
              {text: 'MVC', link:'/language/PHP/MVC'},
              {text: 'Symfony'},
              {text: 'Wordpress'}
            ]
          }

        ]
      },
      {
        text: 'DevTools',
        items: [
          {text: 'Outils Dev', link:'/DevTools/DevSite'},
          {text: 'PWA', link:'/DevTools/PWA'}
        ]
      },
      {
        text: 'Cybersécurité',
        items: [
          {text: 'Règle OWASP 2021', link:'/cybersecurite/OWASP'}
        ]
      }
    ],
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ValentinBrebion' }
    ],
   
    displayAllHeaders: true,
    
    footer: {
      message: 'Réalisé par <a href="https://github.com/ValentinBrebion">Valentin Brebion</a>'
    }
  }
  
})
