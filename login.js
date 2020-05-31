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
  
  
   if (name.value.length <= 6) {
    messages.push('Name must be longer than 6 characters')
  }
  
  

  if (password.value.length <= 6) {
    messages.push('Das Passwort ist falsch. Versuchen Sie es noch einmal')
  }

  

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }

  if (messages.length > 0) {
	  e.preventDefault();
    errorElement.innerText = messages.join(', ')
  }
});