const StartGamebtn = document.getElementById('Startnewgame')
const PauseBtn = document.getElementById('pauseGame')
const Squares = document.querySelectorAll('.square')
const ScoreEl = document.querySelector('#score')
const TimeLeftEl = document.getElementById('Time')
let score
let Timeleft
let MoleidInterval = null
let TimeridInterval = null
let hitPosition = null
let GameMusic = new Audio('Assets_gameMusic.mp3')
let hitMusic = new Audio('Assets_hitMusic.mp3')

function randomMole() {
    Squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSquare = Squares[Math.floor(Math.random() * Squares.length)];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id
}


function CountDown() {
    Timeleft--
    TimeLeftEl.innerHTML = Timeleft
    if (Timeleft === 0) {
        StartGamebtn.textContent= 'New Game'
        StartGamebtn.style.opacity = 1
        clearInterval(MoleidInterval)
        clearInterval(TimeridInterval)
        GameMusic.pause()
        hitMusic.pause()
        return
    }
}
randomMole()

function StartGame() {
    score = 0
    Timeleft = 10
    ScoreEl.innerHTML = score
    TimeLeftEl.innerHTML = Timeleft

    GameMusic.play()
    MoleidInterval = setInterval(randomMole, 1000)
    TimeridInterval = setInterval(CountDown, 1000)
    
    StartGamebtn.style.opacity = 0.3
}

function Pausegame() {
    if (PauseBtn.textContent === 'Pause') {
        GameMusic.pause()
        clearInterval(MoleidInterval);
        clearInterval(TimeridInterval);
        MoleidInterval = null
        TimeridInterval = null
        PauseBtn.textContent = 'Resume'
    }
    else {
        GameMusic.play()
        MoleidInterval = setInterval(randomMole, 1000)
        TimeridInterval = setInterval(CountDown, 1000)
        PauseBtn.textContent = 'Pause'
        
    }
}


Squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(MoleidInterval !== null ){
            if (square.id === hitPosition) {
                score++
                hitMusic.play()
    
                ScoreEl.innerHTML = score
                hitPosition = null
            }
        }
       
    })
})

StartGamebtn.addEventListener('click', StartGame)
PauseBtn.addEventListener('click', Pausegame)

// console.log(Math.floor(Math.random()*Squares.length))