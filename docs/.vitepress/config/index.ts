import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { fr } from './fr'
import { en } from './en'

export default defineConfig({
    ...shared,
    locales: {
        root: { 
            label: 'Français',
            lang: 'fr-FR',
            link: '/fr/',
            ...fr
        },
        en: { 
            label: 'English',
            lang: 'en-US',
            link: '/en/',
            ...en 
        }
    }
})