document.querySelector('.Btn').addEventListener('click', generatePassword);

function generatePassword() {
  const length = document.getElementById('length').value;
  const uppercase = document.getElementById('uppercase').checked;
  const lowercase = document.getElementById('lowercase').checked;
  const numbers = document.getElementById('numbers').checked;
  const special = document.getElementById('special').checked;

  const charset = generateCharset(uppercase, lowercase, numbers, special);
  const password = generateRandomPassword(length, charset);

  document.querySelector('.password1').value = password;
}

function generateCharset(upper, lower, nums, spec) {
  let charset = '';
  if (upper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (lower) charset += 'abcdefghijklmnopqrstuvwxyz';
  if (nums) charset += '0123456789';
  if (spec) charset += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  return charset;
}

function generateRandomPassword(length, charset) {
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}