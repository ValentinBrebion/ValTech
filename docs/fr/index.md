---
notification: "nouvel article"
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "ValTech"
  tagline: Un site personnel et professionnel de langage informatique
  image:
        src: /ValtechLogo.png
  actions:
    - theme: brand
      text: découvrir
      link: /fr/welcome
    - theme: alts
      text: GitHub
      link: https://github.com/ValentinBrebion
 
features:
  - icon: 💡  
    title: Dernières actualités
    details: Jetez un coup d'oeil au tout dernier article mis en ligne, n'ayez pas peur et cliquez !
    link: '/fr/language/PHP/POOandSolid'
  - icon: 👀  
    title: Curiosité
    details: La curiosité pour un développeur est un élément essentiel pour son évolution. Des devtools seront mis en ligne par catégories.
  - icon: 📝
    title: Langage
    details: Les langages informatiques évoluent tous les jours. Un développeur ce doit être rigoureux quant à la qualité et à la maintenabilité de son code.
  - icon: 📖
    title: Droits informatique
    details: Internet est vaste... et des limitations doivent être mises en place pour réglementer son utilisation et protéger les utilisateurs.
    link: '/fr/laws/definitions/preuveElectronique'
---

<script setup>
import { ref } from 'vue';
import { VPTeamPage } from 'vitepress/theme';
import informations from '../TechInfo'

const randomInformation = ref(getRandomInformation());

function getRandomInformation() {
  const randomIndex = Math.floor(Math.random() * informations.length);
  return informations[randomIndex];
}

function changeInformation() {
  randomInformation.value = getRandomInformation();
}
</script>

  <h1 style="text-align: center; margin-top: 2rem; background: -webkit-linear-gradient(10deg, #ae00ff, #18a7d6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-size: 3.2rem;">
    Tech' Infos
  </h1>
  <VPTeamPage style="margin:1rem">
    <section class="textcenter" style="line-height:3rem">
      <div v-for="info in [randomInformation]" :key="info.id">
        <h2>{{ info.titre }}</h2>
        <blockquote style="border-left:0px;">{{ info.contenu }}</blockquote>
      </div>
      <button class="button-random-info" @click="changeInformation">changer d'information</button>
    </section>
  </VPTeamPage>

  <Badge class="feature-badge-overlay badge-success" text="Nouvel article: 19/04/2026" />

<style scoped>
  .textcenter {
    text-align: center;
  }
  .button-random-info {
    background-color: #684DEC; 
    padding: 2px 20px; 
    border-radius: 0.5rem;
  }
 
.feature-badge-overlay {
  position: absolute;
  margin-top: -40rem;
  margin-left: 6.2rem;
}
.badge-success {
  background-color: green;
  color: white;
}
</style>