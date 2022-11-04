
const checkbtn = document.getElementById('btn')
checkbtn.addEventListener('click' ,
function Palindrome(mystring){
    var Input = document.getElementById('input')
    mystring = Input.value
    const result = document.getElementById('Result')
    var removeChar = mystring.replace(/[^A-Z0-9]/ig, "").toLowerCase()

var RevStr = removeChar.split('').reverse().join('')

if(RevStr === removeChar){
    result.innerText = 'The String is a Palindrome 😍'
}
else{
    result.innerText = 'The String is not a  Palindrome 😢'
}
Palindrome(mystring)
}

)

