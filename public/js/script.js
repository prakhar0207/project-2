// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for form submissions
    
    // Login form submission
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        // Perform login authentication here (send data to server or handle locally)
        console.log('Login form submitted:', { username, password });
      });
    }
  
    // Signup form submission
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        // Perform signup authentication here (send data to server or handle locally)
        console.log('Signup form submitted:', { username, email, password });
      });
    }
  });
  