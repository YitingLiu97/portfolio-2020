---
layout: default
title: Contact Me
permalink: /contact
---

<section class="container">
  <h1>Contact Me</h1>
  <form 
    id="contact-form">
    <fieldset>
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
        type="text" 
        id="subjectField" 
        name="entry.645715719" 
        required>
        <label for="messageField">Message</label>
       <textarea 
        id="messageField" 
        name="entry.378702278" 
        required></textarea>
        <input 
        id="submit-button"
        class="button-primary" 
        type="submit" 
        value="Send Message">
    </fieldset>
  </form>

   <div id="success-message" style="display: none;" class="message success">
    Thanks! Your message has been sent successfully.
  </div>

  <!-- Error message (hidden by default) -->
  <div id="error-message" style="display: none;" class="message error">
    Oops! Something went wrong. Please try again.
  </div>

</section>

<script>
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting normally
    
    const submitButton = document.getElementById('submit-button');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = 'Sending...';
    submitButton.classList.add('loading');
    
    // Hide any existing messages
    document.getElementById('success-message').style.display = 'none';
    document.getElementById('error-message').style.display = 'none';
    
    // Get form data
    const formData = new FormData(this);
    
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSfo_jZecxU8FtYGniXLRnjWKQjUCP4FVM_HlDABhd3gwcr6RQ/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // This is important
    })
    .then(() => {
        // Show success message
        document.getElementById('success-message').style.display = 'block';
        // Reset form
        this.reset();
    })
    .catch(() => {
        // Show error message
        document.getElementById('error-message').style.display = 'block';
    })
    .finally(() => {
        // Reset button
        submitButton.innerHTML = originalButtonText;
        submitButton.classList.remove('loading');
    });
});
</script>