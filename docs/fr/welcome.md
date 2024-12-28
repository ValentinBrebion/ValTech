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
    desc: '<a class="buttonstyle" style="color:white;" href="/fr/language/PHP/Symfony/HistoireSymfony">Découvrir</a>'
  },
  {
    avatar: '/devtools.jpg',
    name: 'DevTools',
    title: 'Retrouvez une liste de tous mes outils intéréssants !',
    desc: '<a class="buttonstyle" style="color:white;" href="/fr/DevTools/DevSite">Découvrir</a>'
  },
  {
    avatar: '/cybersecurite.jpg',
    name: 'Cybersécurité',
    title: 'Retrouvez une liste de recommandations pour le dev',
    desc: '<a class="buttonstyle" style="color:white;" href="/fr/cybersecurite/OWASP">Découvrir</a>'
  },
  {
    avatar: '/design.webp',
    name: 'Design',
    title: 'Retrouvez des cours de design',
    desc: '<a class="buttonstyle" style="color:white;" href="/fr/design/introductionDesign">En cliquant ici :</a>'
  }
]
</script>


<VPTeamPage style="margin:0px">
  <VPTeamPageTitle style="padding-top:60px">
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