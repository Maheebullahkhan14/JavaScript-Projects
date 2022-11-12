const WordEl = document.querySelector('#word')
const HintEl = document.querySelector('#Hint')
const Refreshbtn = document.querySelector('#Refresh')
const Checkbtn = document.querySelector('#Check')
const InputEl = document.querySelector('input')
const Timetext = document.querySelector('#Time')

let correctword ,timer

const initTimer = maxtime => {
    clearInterval(timer)
    timer = setInterval(() => {
        if(maxtime > 0){
            maxtime-- ;
            Timetext.innerText = maxtime
        }
        else{
        alert(`Time up!! ${correctword} is correct word`)
        initGame()
        }
},1000)
}

const initGame = () =>{
    initTimer(30);
    let RandomWord = wordList[Math.floor(Math.random()*wordList.length)]
    let wordArray = RandomWord.word.split('')
    for(let i = wordArray.length - 1 ; i > 0 ; i--){
        let j = Math.floor(Math.random()* (i+1))
        let temp = wordArray[i]
        wordArray[i] = wordArray[j]
        wordArray[j] = temp
    }
   WordEl.innerHTML = wordArray.join('')
   HintEl.innerHTML = RandomWord.hint
   correctword = RandomWord.word.toLocaleLowerCase()
   InputEl.value = ''
   InputEl.setAttribute('maxlength',correctword.length)
   

}

initGame()
const checkword = () =>{
    const inputword = InputEl.value.toLocaleLowerCase()

    if(!inputword){
        alert('Plz Enter word in the input')
        return
    }

    if(inputword!==correctword){
        alert(`oops${inputword} is not correct word`)
    }else{
        alert(`Congratulation ${inputword} is a correct word`)
    }
    initGame()

}


Refreshbtn.addEventListener('click',initGame)
Checkbtn.addEventListener('click',checkword)