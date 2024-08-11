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
    lineNumbers: true,
    lazyLoading: true
  },
  
  title: "ValTech",
  description: "Site personnel et professionel dans lequel sera documenté les différents langages que je verrais ou que j'ai vu ainsi qu'une partie cybersécurité et devtools",
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

          {text: '<div class="inline-content"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"/></svg><span>Git</span></div>',
          
           collapsed: true,
          items: [
            {text: 'Introduction', link:'/language/git/git'},
            {text: 'Commandes', link:'/language/git/CommandeGit'}
          ]
        },
        {
          text: '<div class="inline-content"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/></svg><span>Javascript</span></div>',
          collapsed: true,
          items: [
            {text: '<div class="inline-content"><svg viewBox="0 0 256 221" width="16" height="16" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z" fill="#41B883"/><path d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z" fill="#41B883"/><path d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z" fill="#35495E"/></svg><span>VueJs</span></div>', 
              collapsed: true, 
              items: [
                {text: 'Introduction à Vuejs', link:'/language/js/vuejs/IntroductionVuejs'},
                {text: 'Vuejs 2', 
                  collapsed: true, 
                    items: [
                      {text: 'Intro Vuejs2', link: '/language/js/vuejs/vuejs2/IntroVuejs2'}
                    ]
                },
                {text: 'Vuejs 3',
                  collapsed: true, 
                    items: [
                      {text: 'Intro Vuejs3', link:'/language/js/vuejs/vuejs3/IntroVuejs3'}
                    ]
              },
              {text: '✅ les bonnes pratiques', link:'/language/js/vuejs/BonnePratiquesVueJS'},
              ]
            },
            {
              text: '<div class="inline-content"><svg viewBox="0 0 256 228" width="16" height="16" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF"/></svg><span>React</span></div>',
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
            text:'<div class="inline-content"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 -1 100 50"><path d="M7.579 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36l-2.014 10.07H0l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053h-1.113l.053-.053M41.093 0h7.314L46.34 10.123h6.572c3.604.071 6.289.813 8.056 2.226 1.802 1.413 2.332 4.099 1.59 8.056l-3.551 17.649h-7.42L54.979 21.2c.353-1.767.247-3.021-.318-3.763s-1.784-1.113-3.657-1.113l-5.883-.053-4.346 21.783h-7.314L41.093 0M70.412 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36L70.2 48.124h-7.367l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053H76.56l.053-.053"/></svg><span>PHP</span></div> ',
            collapsed: true,
            items: [
              {text :'<div class="inline-content"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 264"><path d="m255.9 59.6.1 1.1v56.6c0 1.4-.8 2.8-2 3.5l-47.6 27.4v54.2c0 1.4-.7 2.8-2 3.5l-99.1 57-.7.4-.3.1c-.7.2-1.4.2-2.1 0l-.4-.1-.6-.3L2 206c-1.3-.8-2.1-2.2-2.1-3.6V32.7l.1-1.1.2-.4.3-.6.2-.4.4-.5.4-.3c.2 0 .3-.2.5-.3L51.6.6c1.3-.8 2.9-.8 4.1 0L105.3 29c.2 0 .3.2.4.3l.5.3c0 .2.2.4.3.5l.3.4.3.6.1.4.2 1v106l41.2-23.7V60.7c0-.4 0-.7.2-1l.1-.4.3-.7.3-.3.3-.5.5-.3.4-.4 49.6-28.5c1.2-.7 2.8-.7 4 0L254 57l.5.4.4.3.4.5.2.3c.2.2.2.5.3.7l.2.3Zm-8.2 55.3v-47l-17.3 10-24 13.7v47l41.3-23.7Zm-49.5 85v-47l-23.6 13.5-67.2 38.4v47.5l90.8-52.3ZM8.2 39.9V200l90.9 52.3v-47.5l-47.5-26.9-.4-.4c-.2 0-.3-.1-.4-.3l-.4-.4-.3-.4-.2-.5-.2-.5v-.6l-.2-.5V63.6L25.6 49.8l-17.3-10Zm45.5-31L12.4 32.8l41.3 23.7 41.2-23.7L53.7 8.9ZM75 157.3l24-13.8V39.8l-17.3 10-24 13.8v103.6l17.3-10ZM202.3 36.9 161 60.7l41.3 23.8 41.3-23.8-41.3-23.8Zm-4.1 54.7-24-13.8-17.3-10v47l24 13.9 17.3 10v-47Zm-95 106 60.6-34.5 30.2-17.3-41.2-23.8-47.5 27.4L62 174.3l41.2 23.3Z" fill="#FF2D20"/></svg><span>Laravel</span></div>', link:'/language/php/Laravel/Laravel'},
              {text: 'MVC', link:'/language/php/MVC'},
              {text: '<div class="inline-content"><?xml version="1.0"  encoding="utf-8"?><svg version="1.1" width="16" height="16" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 122.88" style="enable-background:new 0 0 122.88 122.88" xml:space="preserve"><g><path d="M122.88,61.44c0,33.93-27.51,61.44-61.44,61.44C27.51,122.88,0,95.37,0,61.44C0,27.51,27.51,0,61.44,0 C95.37,0,122.88,27.51,122.88,61.44L122.88,61.44z M88.3,22.73c-6.24,0.21-11.69,3.66-15.75,8.41c-4.49,5.22-7.48,11.41-9.63,17.72 c-3.85-3.16-6.82-7.24-13-9.02c-4.78-1.37-9.79-0.81-14.4,2.63c-2.18,1.63-3.69,4.09-4.4,6.42c-1.85,6.02,1.95,11.39,3.67,13.31 l3.77,4.04c0.78,0.79,2.65,2.86,1.74,5.83c-0.99,3.23-4.88,5.31-8.87,4.09c-1.78-0.55-4.34-1.87-3.77-3.74 c0.24-0.77,0.78-1.34,1.08-1.99c0.27-0.57,0.4-0.99,0.48-1.25c0.73-2.38-0.27-5.47-2.81-6.26c-2.38-0.73-4.81-0.15-5.75,2.91 c-1.07,3.48,0.6,9.79,9.51,12.53c10.44,3.22,19.28-2.47,20.53-9.89c0.79-4.64-1.31-8.1-5.15-12.53l-3.13-3.47 c-1.89-1.89-2.55-5.12-0.58-7.6c1.66-2.1,4.01-2.99,7.88-1.94c5.64,1.53,8.15,5.44,12.35,8.6c-1.73,5.68-2.86,11.39-3.89,16.5 l-0.63,3.81c-3,15.72-5.29,24.36-11.24,29.32c-1.2,0.85-2.91,2.13-5.49,2.22c-1.36,0.04-1.79-0.89-1.81-1.3 c-0.03-0.95,0.77-1.39,1.3-1.81c0.8-0.43,2-1.15,1.91-3.46c-0.08-2.72-2.34-5.08-5.6-4.97c-2.44,0.08-6.16,2.38-6.02,6.58 c0.14,4.35,4.19,7.6,10.3,7.4c3.26-0.11,10.55-1.44,17.73-9.98C67,86.07,69.34,74.85,71.1,66.64l1.96-10.84 c1.09,0.13,2.26,0.22,3.53,0.25c10.41,0.22,15.62-5.17,15.7-9.1c0.05-2.37-1.56-4.71-3.81-4.66c-1.61,0.04-3.64,1.12-4.12,3.35 c-0.48,2.18,3.31,4.16,0.35,6.08c-2.1,1.36-5.87,2.32-11.18,1.54l0.97-5.34c1.97-10.12,4.4-22.57,13.62-22.87 c0.67-0.03,3.13,0.03,3.19,1.66c0.02,0.54-0.12,0.68-0.76,1.93c-0.65,0.97-0.89,1.8-0.86,2.74c0.09,2.58,2.05,4.28,4.9,4.18 c3.8-0.13,4.9-3.83,4.83-5.73C99.25,25.35,94.54,22.53,88.3,22.73L88.3,22.73z"/></g></svg> Symfony</div>', 
              collapsed: true, 
              items: [
                {
                  text:'📜 Histoire', link:'/language/PHP/Symfony/HistoireSymfony'
                },
                {
                  text:'⚙️ Installation', link: '/language/PHP/Symfony/InstallationSymfony'
                },
                { 
                  text: '📎 Hiérarchie', link: '/language/PHP/Symfony/HierarchieSymfony'
                }
              ]},
              {
                text: '<div class="inline-content"><svg viewBox="0 0 122.52 122.523" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="#21759b"><path d="m8.708 61.26c0 20.802 12.089 38.779 29.619 47.298l-25.069-68.686c-2.916 6.536-4.55 13.769-4.55 21.388z"/><path d="m96.74 58.608c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501l19.138 56.925 11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z"/><path d="m62.184 65.857-15.768 45.819c4.708 1.384 9.687 2.141 14.846 2.141 6.12 0 11.989-1.058 17.452-2.979-.141-.225-.269-.464-.374-.724z"/><path d="m107.376 36.046c.226 1.674.354 3.471.354 5.404 0 5.333-.996 11.328-3.996 18.824l-16.053 46.413c15.624-9.111 26.133-26.038 26.133-45.426.001-9.137-2.333-17.729-6.438-25.215z"/><path d="m61.262 0c-33.779 0-61.262 27.481-61.262 61.26 0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263-.001-33.779-27.487-61.26-61.265-61.26zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z"/></g></svg><span>Wordpress</span></div>', 
                collapsed: true, 
                items: [
                  {
                    text:'📜 Introduction Wordpress', link:'/language/PHP/Wordpress/IntroWordpress'
                  },
                  {
                    text:'👶 Thème enfant', link:'/language/PHP/Wordpress/Childrentheme'
                  },
                ]
              }
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
      },
      {
        text: 'DevOps',
        items: [
            {
              text: 'CI/CD',
              collapsed:true,
              items: [
                {
                  text: 'WorkFlow', link: '/devOps/workFlow/WorkFlow'
                }
              ]
            }
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