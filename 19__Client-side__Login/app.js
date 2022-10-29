const form = document.getElementById('form')
const Username = document.getElementById('Username')
const Email = document.getElementById('Email')
const password1 = document.getElementById('password')
const password2 = document.getElementById('password2')


form.addEventListener('submit',(e) => {
    e.preventDefault()
    checkInput()
})

function checkInput(){
  const Usernamevalue =  Username.value.trim()
  const EmailValue =  Email.value.trim()
  const password1Value =  password1.value.trim()
  const password2Value =  password2.value.trim()

  if(Usernamevalue === ''){
    setError(Username , 'Username Cannot be blank')
  }
  else{
    setSuccess(Username)
  }
  if(EmailValue === ''){
    setError(Email , 'Email Cannot be blank')
  }else if(!isEmail(EmailValue)){
    setError(Email , 'Email is not Valid')
  }
  else{
    setSuccess(Email)
  }
  if(password1Value === ''){
    setError(password1 , 'Password Cannot be blank')
  }
  else{
    setSuccess(password1)
  }
  if(password2Value === ''){
    setError(password2 , 'Password Cannot be blank')
  }else if(password1Value !== password2Value){
    setError(password2,'password does not Matched')

  }
  else{
    setSuccess(password2)
  }

}

function setError(input ,Message){
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  formControl.className = 'form-control error'
  small.innerText = Message
}

function setSuccess(input,Message){
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
