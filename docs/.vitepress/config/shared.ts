import { defineConfig } from 'vitepress'

export const shared = defineConfig({
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
        ['meta', { name: 'theme-color', content: '#5f67ee' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', {rel: 'icon', href: '/ValtechLogo.ico'}],
        //preconnect
        ['link', {rel: 'preconnect', href:'https://media.discordapp.net'}],
        ['link', {rel: 'stylesheet', href:'/css/valtech.css'}]
    ],
    ignoreDeadLinks: true,
    cleanUrls: true,
    lastUpdated: true,
    appearance: true,
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo:'ValtechLogo.png',
        lastUpdated: {
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },
        search: {
          provider: 'local',
          options: {
              locales: {
                  root: { // pour le français
                      translations: {
                          button: {
                              buttonText: 'Rechercher',
                              buttonAriaLabel: 'Rechercher'
                          },
                          modal: {
                              displayDetails: 'Afficher la liste détaillée',
                              resetButtonTitle: 'Réinitialiser la recherche',
                              backButtonTitle: 'Fermer la recherche',
                              noResultsText: 'Aucun résultat',
                              footer: {
                                  selectText: 'Sélectionner',
                                  selectKeyAriaLabel: 'Entrer',
                                  navigateText: 'Navigation',
                                  navigateUpKeyAriaLabel: 'Flèche du haut',
                                  navigateDownKeyAriaLabel: 'Flèche du bas',
                                  closeText: 'Fermer',
                                  closeKeyAriaLabel: 'esc'
                              }
                          }
                      }
                  },
                  en: { // pour l'anglais
                      translations: {
                          button: {
                              buttonText: 'Search',
                              buttonAriaLabel: 'Search'
                          },
                          modal: {
                              displayDetails: 'Show detailed list',
                              resetButtonTitle: 'Reset search',
                              backButtonTitle: 'Close search',
                              noResultsText: 'No results',
                              footer: {
                                  selectText: 'Select',
                                  selectKeyAriaLabel: 'Enter',
                                  navigateText: 'Navigation',
                                  navigateUpKeyAriaLabel: 'Arrow up',
                                  navigateDownKeyAriaLabel: 'Arrow down',
                                  closeText: 'Close',
                                  closeKeyAriaLabel: 'esc'
                              }
                          }
                      }
                  }
              }
          }
      },
        darkModeSwitchLabel: 'Appearance',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ValentinBrebion' }
          ],
    },
})