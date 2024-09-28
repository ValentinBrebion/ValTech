# par Email
---
<form 
  name="contact" 
  method="POST" 
  data-netlify="true"
  onSubmit="submit"
  >
  <p>
    <label for="name">Votre nom <input type="text" name="name" /></label>
  </p>
  <p>
    <label for="prename">Your prénom: <input type="text" name="prename" /></label>
  </p>
  <p>
    <label for="email">Your Email: <input type="email" name="email" id="email"/></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>