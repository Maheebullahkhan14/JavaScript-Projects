var difficulties = {
    easy : 5 ,
    medium : 3,
    hard : 2
}



let time = difficulties.medium;
let score = 0;
let isPlaying ;

window.addEventListener('load' , init)


const currentWord = document.getElementById('words')
const timeEl = document.getElementById('Time')
const scoreEl = document.getElementById('score')
const Message  = document.getElementById('op')
const seconds = document.getElementById('five')
const Input = document.getElementById('input')


var words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition',
    'champion',
    'ghost',
    'fierce'
  ];


function init(){

   ShowWord(words)

    Input.addEventListener('input' , startMatch)
   
   setInterval(countdown , 1000)

   setInterval(checkstatus , 50)
}
function startMatch(){
    if(matchword()){
       
        isPlaying = true
        time = difficulties.medium + 1
        ShowWord(words)
        Input.value = ''
        score++ ;
    }
    if(score === -1){
        scoreEl.innerHTML = 0

    }else{
    scoreEl.innerHTML = score
    }
}

function matchword(){
    if(Input.value === currentWord.innerHTML){
        Message.innerHTML = 'Correct!!!'
        return true
    }else{
        Message.innerHTML = '';
        return false
    }
}




function ShowWord(words){
    const randomIndex = Math.floor(Math.random()*words.length)
    currentWord.innerHTML = words[randomIndex]
}

function countdown(){
    if(time > 0){
        time--
    }else if(time === 0){
        isPlaying = false
    }
    timeEl.innerText = time
}


function checkstatus(){
    if(!isPlaying && time === 0){
        Message.innerHTML = 'Game Over 😢'
        score = -1
    }
}