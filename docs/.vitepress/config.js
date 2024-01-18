import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  cleanUrls: true,
 lastUpdated: true,
  lang: 'en-FR',
  markdown: {
    lineNumbers: true
  },
  
  title: "ValTech",
  description: "Site personnel et professionel dans lequel sera documenter les différents langages que je verrais ou que j'ai vu ainsi qu'une partie cybersécurité et devtools",
 /* head: [
    'link', {href: '/logo-ico-valtech'}
  ],*/
  themeConfig: {
    
    smoothScroll: true,
    outlineTitle: 'Références',
    logo:'/logo-valtech.svg',
    lastUpdatedText: 'Updated Date',
    returnToTopLabel: 'en haut',
    search: {
      provider: 'local'
    },
    darkModeSwitchLabel: 'Apparance',

    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
     // { text: 'Home', link: '/' },
      //{ text: 'Examples', link: '/markdown-examples' },
      {text: 'Cybersécurité', link: '/cybersecurite/OWASP'},
      {text: 'DevTools', link: '/DevTools/DevSite'},
      {text: 'Langage', items: [ {text: 'Git', link: 'language/git/git'}, {text: 'Laravel', link:'language/PHP/Laravel/Laravel'} ]}
    ],

    sidebar: [
      /*{
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },*/
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
            
            text: 'VueJs', 
            collapsed: true,
            items: [
              {text:'✅ les bonnes pratiques', link:'/language/js/vuejs/BonnePratiquesVueJS'},
              { text: 'Javascript',
              collapsed: true,
              item: [
                {text: 'VueJs 2',
                collapsed: true,
                items: [
                  {text:'Intro VueJs', link:'/language/js/vuejs/vuejs2/IntroVuejs'}
                ]}
              ]
                
            
            },
              {text: 'Vuejs 3'}
            ],
              
          },
          {
            text:' PHP ',
            collapsed: true,
            items: [
              {text :' Laravel', link:'/language/PHP/Laravel/Laravel'},
              {text: 'MVC', link:'/language/PHP/MVC'}
            ]
          }

        ]
      },
      {
        text: 'DevTools',
        items: [
          {text: 'Outils Dev', link:'/DevTools/DevSite'}
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
