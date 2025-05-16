---
next: false
prev: false
---

# Contact me!

<form name="contact" action="/success" data-netlify="true" data-netlify-recaptcha="true">
  <div class="row">
    <p class="column">
      <label>Your last name: <span style="color:red">*</span> </label><br>
      <input class="val__inputName" placeholder="enter your last name" type="text" name="name" required />
    </p>
    <p class="column">
      <label>Your first name: <span style="color:red">*</span></label><br>
      <input class="val__input" type="text" name="prenom" />
    </p>
  </div>
  <p>
    <label>Your email address: <span style="color:red">*</span><input class="val__input" type="email" name="email" required/></label>
  </p>
  <p>
    <label>Your message: <span style="color:red">*</span><textarea class="val__message" name="message" required></textarea></label>
  </p>
  <div data-netlify-recaptcha="true" required></div>
  <p>
    <button class="buttonstyle" type="submit">Send</button>
  </p>
</form> 