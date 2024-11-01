---
layout: default
title: Contact Me
permalink: /contact
---

<section class="container">
  <h1>Contact Me</h1>
  <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"></iframe>
  
  <form 
    id="contact-form"
    action="https://docs.google.com/forms/d/e/1FAIpQLSfo_jZecxU8FtYGniXLRnjWKQjUCP4FVM_HlDABhd3gwcr6RQ/formResponse" 
    method="post" 
    target="hidden_iframe"
    onsubmit="return handleSubmit();">
    <fieldset>
      <!-- Replace the entry.XXXXXX with your actual Google Form field IDs -->
      <label for="nameField">Name</label>
      <input 
        type="text" 
        id="nameField" 
        name="entry.1380783930" 
        required>
      <label for="emailField">Email</label>
      <input 
        type="email" 
        id="emailField" 
        name="entry.342934552" 
        required>
     <label for="subjectField">Subject</label>
      <input 
        id="subjectField" 
        name="entry.645715719" 
        required>
        <label for="messageField">Message</label>
      <textarea 
        id="messageField" 
        name="entry.378702278" 
        required></textarea>
        <input 
        class="button-primary" 
        type="submit" 
        value="Send Message">
    </fieldset>
  </form>
</section>

<!-- Add this script to handle the form submission -->
<script>
function handleSubmit() {
    // Submit the form
    document.getElementById('contact-form').submit();
    
    // Wait a brief moment, then show success message and reset form
    setTimeout(function() {
        document.getElementById('contact-form').reset();
        alert('Thanks! Your message has been sent.');
        // Or use a nicer notification instead of alert
    }, 1000);
    
    // Prevent page reload
    return false;
}
</script>