const Rockbtn = document.getElementById('Rock')
const paperbtn = document.getElementById('Paper')
const Scissorbtn = document.getElementById('Scissor')
const img = document.getElementById('player-choose')
const img2 = document.getElementById('Comp-choose')

const Resetbtn = document.getElementById('reset')
const Output = document.getElementById('Output')
const check = document.getElementById('check')

var Sign

Rockbtn.addEventListener('click', () => {
    Sign = 'Rock'
    img.src = 'Rock.png'

})
paperbtn.addEventListener('click', () => {
    Sign = 'Paper'
    img.src = 'Paper.png'

})
Scissorbtn.addEventListener('click', () => {
    Sign = 'Scissor'
    img.src = 'Scissor.png'

})
var P_Score = 0
var C_Score = 0



check.addEventListener('click', () => {
    var Random = Math.floor(Math.random() * 3)

    var Computer = obj[Random]
    img2.src = Computer + '.png'
    function User(input) {

        if (input === Computer) {
            Output.innerText = 'Draw'
            return;
        }
        if (input === 'Rock') {
            if (Computer === 'Paper') {
                Output.innerHTML = ('Computer Wins')
                C_Score++
                updateScore()
            }
            else {
                Output.innerHTML = ('Player Wins')
                P_Score++
                updateScore()
            }
        }
        if (input === 'Paper') {
            if (Computer === 'Scissor') {
                Output.innerHTML = ('Computer Wins')
                C_Score++
                updateScore()

            }
            else {
                Output.innerHTML = ('Player Wins')
                P_Score++
                updateScore()
            }
        }
        if (input === 'Scissor') {
            if (Computer === 'Rock') {
                Output.innerHTML = ('Computer Wins')
                C_Score++
                updateScore()
            }
            else {
                Output.innerHTML = ('Player Wins')
                P_Score++
                updateScore()
            }
        }
        
    }
    console.log(Computer)
    User(Sign)
})

function updateScore() {
    const playerScore = document.getElementById('Player-Score')
    const ComputerScore = document.getElementById('Comp-Score')

    playerScore.innerText = P_Score
    ComputerScore.innerText = C_Score

}

Resetbtn.addEventListener('click', () => {
    setTimeout(() => {
        window.location.reload(true)
    }, 200)
})



var obj = { 0: 'Rock', 1: 'Paper', 2: 'Scissor' }


