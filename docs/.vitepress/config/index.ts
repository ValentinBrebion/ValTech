import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { fr } from './fr'

export default defineConfig({
    ...shared,
    locales: {
        root: { label: 'Français', ...fr}
    }
})