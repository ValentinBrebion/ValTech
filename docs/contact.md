---
next: false
prev: false
---

# Contacte moi !

<form name="contact" action="POST" data-netlify="true">
  <div class="row">
    <p class="column">
      <label>Ton nom: </label><br>
      <input class="val__inputName" placeholder="met ton nom" type="text" name="name" />
    </p>
    <p class="column">
      <label>Ton prénom: </label><br>
      <input class="val__input" type="text" name="prename" />
    </p>
  </div>
  <p>
    <label>Ton adresse mail: <input class="val__input" type="email" name="email" /></label>
  </p>
  <p>
    <label>Ton message: <textarea class="val__message" name="message"></textarea></label>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button class="buttonstyle" type="submit">Send</button>
  </p>
</form>
