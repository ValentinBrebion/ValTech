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
        ['link', {rel: 'icon', href: '/iconeb.ico'}],
        //preconnect
        ['link', {rel: 'preconnect', href:'https://media.discordapp.net'}],
        ['link', {rel: 'stylesheet', href:'/css/valtech.css'}]
    ],
    ignoreDeadLinks: true,
    cleanUrls: true,
    lastUpdated: true,
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo:'valtechLogo.png',
        lastUpdated: {
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },
        search: {
            provider: 'local'
        },
        darkModeSwitchLabel: 'Apparance',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ValentinBrebion' }
          ],
    }
})