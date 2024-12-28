---
next: false
prev: false
---

# Contacte moi !

<form name="contact" action="/success" data-netlify="true" data-netlify-recaptcha="true">
  <div class="row">
    <p class="column">
      <label>Ton nom: <span style="color:red">*</span> </label><br>
      <input class="val__inputName" placeholder="met ton nom" type="text" name="name" required />
    </p>
    <p class="column">
      <label>Ton prénom: <span style="color:red">*</span></label><br>
      <input class="val__input" type="text" name="prenom" />
    </p>
  </div>
  <p>
    <label>Ton adresse mail: <span style="color:red">*</span><input class="val__input" type="email" name="email" required/></label>
  </p>
  <p>
    <label>Ton message: <span style="color:red">*</span><textarea class="val__message" name="message" required></textarea></label>
  </p>
  <div data-netlify-recaptcha="true" required></div>
  <p>
    <button class="buttonstyle" type="submit">Envoyer</button>
  </p>
</form>

