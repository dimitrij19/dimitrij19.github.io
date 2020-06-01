const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

var submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', function(e) {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('Name is required')
  }
  
  
   if (name.value.length <= 16) {
    messages.push('Bitte geben Sie eine gültige Adresse in der Form nachname@IhreDomain.com ein!');
	name.style.border = "1px solid red";
  }
  
  

  if (password.value.length <= 7) {
    messages.push('Ihr Passwort muss mindestens 8 Zeichen lang sein. Versuchen Sie es noch einmal.')
	password.style.border = "1px solid red";
  }

 

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
	  e.preventDefault();
    errorElement.innerText = messages.join(', ')
  }
});