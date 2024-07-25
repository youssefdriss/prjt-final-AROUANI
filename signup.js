document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');
    const messageDiv = document.getElementById('message');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Perform simple client-side validation
      if (usernameInput.value.trim() === '' || emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
        messageDiv.textContent = 'Please fill out all fields.';
        messageDiv.style.color = '#dc3545'; // Red color for error message
      } else {
        // Simulate form submission (replace with actual backend integration)
        messageDiv.textContent = 'Form submitted successfully!';
        messageDiv.style.color = '#28a745'; // Green color for success message
        form.reset(); // Clear the form inputs
      }
    });
  
    // Optional: Reset the message on input change
    usernameInput.addEventListener('input', function() {
      messageDiv.textContent = '';
    });
  
    emailInput.addEventListener('input', function() {
      messageDiv.textContent = '';
    });
  
    passwordInput.addEventListener('input', function() {
      messageDiv.textContent = '';
    });
  });
  