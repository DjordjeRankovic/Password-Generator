let passwordArray = [];
let passwordString =
  '1234567890!@#$%^&*()~[]QWERTYUIOPASDFGHJKL:;ZXCVBNM<>?,./qwertyuiopasdfghjklzxcvbnm';
let passwordHolderString;

for (let i = 0; i < passwordString.length; i++) {
  passwordArray[i] = passwordString.substring(i, i + 1); // take elements from string and store it in array
}

function randomPassword() {
  passwordHolderString = '';
  let passLength = document.getElementById('pass-length').value;

  if (passLength > 22) {
    return 'Maximum 22 characters';
  } else if (passLength != '') {
    for (let i = 0; i < passLength; i++) {
      passwordHolderString =
        passwordHolderString +
        passwordArray[Math.floor(Math.random() * passwordString.length)];
    }
    return passwordHolderString;
  } else if (passLength == '') {
    for (let i = 0; i < 12; i++) {
      passwordHolderString =
        passwordHolderString +
        passwordArray[Math.floor(Math.random() * passwordString.length)];
    }
    return passwordHolderString;
  }
}

function generatePassword() {
  document.getElementById('pass1').textContent = randomPassword();
  document.getElementById('pass2').textContent = randomPassword();
  document.getElementById('pass3').textContent = randomPassword();
  document.getElementById('pass4').textContent = randomPassword();
}
