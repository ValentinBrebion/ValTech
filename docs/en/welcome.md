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
    name: 'Development',
    title: 'Find the latest published article',
    desc: '<a class="buttonstyle" style="color:white;" href="/en/language/PHP/Symfony/HistoireSymfony">Discover</a>'
  },
  {
    avatar: '/devtools.jpg',
    name: 'DevTools',
    title: 'Find a list of all my interesting tools!',
    desc: '<a class="buttonstyle" style="color:white;" href="/en/DevTools/DevSite">Discover</a>'
  },
  {
    avatar: '/cybersecurite.jpg',
    name: 'Cybersecurity',
    title: 'Find a list of recommendations for development',
    desc: '<a class="buttonstyle" style="color:white;" href="/en/cybersecurite/OWASP">Discover</a>'
  },
  {
    avatar: '/design.jpg',
    name: 'Design',
    title: 'Find design courses',
    desc: '<a class="buttonstyle" style="color:white;" href="/en/design/introductionDesign">Click here:</a>'
  }
]
</script>

<VPTeamPage style="margin:0px">
  <VPTeamPageTitle style="padding-top:60px">
    <template #title>
      Welcome to Valtech
    </template>
    <template #lead>
      Discover a multitude of resources and tools to help you become a great developer
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage> 