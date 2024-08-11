---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/developpementLogo.jpg',
    name: 'Développement',
    title: 'Retrouvez le dernier article mis en ligne',
    desc: '<a class="buttonstyle" style="color:white;" href="/language/PHP/Symfony/HistoireSymfony">Découvrir</a>'
  },
  {
    avatar: '/devtools.jpg',
    name: 'DevTools',
    title: 'Retrouvez une liste de tous mes outils intéréssants !',
    desc: '<a class="buttonstyle" style="color:white;" href="/DevTools/DevSite">Découvrir</a>'
  },
  {
    avatar: '/cybersecurite.jpg',
    name: 'Cybersécurité',
    title: 'Retrouvez une liste de recommandations pour le dev',
    desc: '<a class="buttonstyle" style="color:white;" href="/cybersecurite/OWASP">Découvrir</a>'
  }
]
</script>


<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Bienvenue sur Valtech
    </template>
    <template #lead>
      Découvrez une multitude de ressources et d'outils pour vous aider à devenir un bon développeur
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>