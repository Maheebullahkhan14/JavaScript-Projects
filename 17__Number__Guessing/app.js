// selectors
const input_number = document.getElementById('input-Number')
const PrevGuess = document.getElementById('Prev-guess')
const chances_Input = document.getElementById('Remain-Guess')
const output_msg = document.getElementById('Output')
const button = document.getElementById('btn')
const promptbox  = document.querySelector('.Exitbox')
const result = document.querySelector('.Result')


let randomnumber = Math.floor(Math.random() * 2)
let TotalGuesses = 10
let Chances = 3 ;
let number ;

function checkNumber(input){
    if(input == randomnumber){
        display("Win")
    }else if(input == '' && input == 0){
        output_msg.innerText = 'InValid Input'
    }
    else if(input > randomnumber){
        output_msg.innerText = 'Enter Small Number'
    }else{
        output_msg.innerHTML = 'Enter Large Number'
    }
}

function display(e){
    promptbox.classList.add('active')
    result.innerHTML = 'YOu Have '+ e + ' Game'
}

// RandomNumberGuess(inputvalue,randomnumber)
button.addEventListener('click', function(e){
    e.preventDefault()
    console.log(input_number.value);
    Chances--;
    chances_Input.innerText = "Chances :- " + Chances

    if(Chances==0){
        display('Loss')
    }
    number = input_number.value
    checkNumber(number)
    input_number.value = ''

      
})

function playAgain(){
    promptbox.classList.remove('active')
    Chances = 3
    input_number.innerText ='';
    chances_Input.innerText = "Chances :- " + Chances;


}