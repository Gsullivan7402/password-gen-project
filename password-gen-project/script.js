document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const passwordField = document.getElementById('password');
    const lengthField = document.getElementById('length');
  
    generateBtn.addEventListener('click', function() {
      const passwordLength = parseInt(lengthField.value);
      const password = generatePassword(passwordLength);
      passwordField.value = password;
    });
  
    function generatePassword(length) {
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
      let password = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
      return password;
    }
  });