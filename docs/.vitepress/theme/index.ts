import DefaultTheme from 'vitepress/theme'
import { withBase } from 'vitepress'
import { watch } from 'vue'
import { useRoute } from 'vitepress'
import './custom.css'

export default {
    ...DefaultTheme,
    setup() {
        const route = useRoute()
        
        watch(() => route.path, (path) => {
            const currentLang = path.split('/')[1]
            if (currentLang) {
                localStorage.setItem('vitepress-language', currentLang)
            }
        })
    }
}