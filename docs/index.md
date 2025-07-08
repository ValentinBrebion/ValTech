---
layout: home
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

const router = useRouter()

onMounted(() => {
  var lang=navigator.language.substr(0,2);

  if (window.location.pathname === '/') {
    router.go(`/${lang}/`)
  }
})

</script>