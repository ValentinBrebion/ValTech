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
        [
      'script',
          { id: 'check-dark-mode' },
          `(()=>{function n(e){const t=document.createElement("style");t.appendChild(document.createTextNode("*,*::before,*::after{transition:none!important}")),document.head.appendChild(t),document.documentElement.classList.toggle("dark",e);const a=getComputedStyle(t).opacity;document.head.removeChild(t)}const o=window.matchMedia("(prefers-color-scheme: dark)");o.addEventListener("change",e=>n(e.matches)),n(o.matches)})();`
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
    markdown: {
        lineNumbers: true
    },
    appearance: false,
    themeConfig: {
        logo:'ValtechLogo.png',
        lastUpdated: {
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },
        search: {
            provider: 'local'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ValentinBrebion' }
          ],
    },
    
})