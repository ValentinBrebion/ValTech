---
next: false
prev: false
---

# Contacte moi !

<form name="contact" action="POST" action="/success" data-netlify="true" data-netlify-recaptcha="true">
  <div class="row">
    <p class="column">
      <label>Ton nom: </label><br>
      <input class="val__inputName" placeholder="met ton nom" type="text" name="name" required />
    </p>
    <p class="column">
      <label>Ton prénom: </label><br>
      <input class="val__input" type="text" name="prenom" />
    </p>
  </div>
  <p>
    <label>Ton adresse mail: <input class="val__input" type="email" name="email" required/></label>
  </p>
  <p>
    <label>Ton message: <textarea class="val__message" name="message" required></textarea></label>
  </p>
  <div data-netlify-recaptcha="true" required></div>
  <p>
    <button class="buttonstyle" type="submit">Envoyer</button>
  </p>
</form>
