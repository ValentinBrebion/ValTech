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
        ['link', {rel: 'icon', href: '/logo-ico-valtech.ico'}],
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
        logo:'https://media.discordapp.net/attachments/1035253366995030166/1083390653897125938/logo_sans_texte-removebg-preview.png?ex=65bba5ac&is=65a930ac&hm=41c7f0f7753ced3c316d6ac84755dac82472533e56a2a8090a77cfc1457ce96c&=&format=webp&quality=lossless',
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