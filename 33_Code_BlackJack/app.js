var Playersum = 0;
var DealerSum = 0;

var playerAceCount = 0;
var DealerAceCount = 0;

var hidden 
var deck

var canHit = true
window.onload = function(){
    buildDeck()
    Shuffledeck()
    StartGame()
}

function buildDeck(){
    let cardvalue = ['A','2','3','4','5','6', '7' ,'8','9','10','J','K','Q']
    let faceCards = ['C','D','S','H']
    deck = []

    for(let i = 0 ; i<faceCards.length ; i++){
        for(let j = 0 ; j<cardvalue.length ; j++){
            deck.push(cardvalue[j] + '-' + faceCards[i])
        }
    }
    // console.log(deck)
}

function Shuffledeck(){
    for(let i = 0 ; i<deck.length ; i++){
        let j = Math.floor(Math.random()*deck.length )
        let temp = deck[i]
        deck[i] = deck[j]
        deck[j] = temp
        // console.log(deck[j])
    }  
    // console.log(deck)
}

function StartGame(){
    hidden = deck.pop()
    DealerSum +=getCardValue(hidden)
    DealerAceCount += checkAceCard(hidden)
    
    while(DealerSum < 17){
        let cardimg = document.createElement('img')
        card = deck.pop()
        cardimg.src = './cards/' + card + '.png'
        DealerSum += getCardValue(card)
        DealerAceCount += checkAceCard(card)
        document.getElementById('DealerCard').append(cardimg)
        
    }
    for(let i = 0 ; i < 2 ;i++){
        let cardimg = document.createElement('img')
        card = deck.pop()
        cardimg.src = './cards/' + card + '.png'
        Playersum += getCardValue(card)
        playerAceCount += checkAceCard(card)
        document.getElementById('playercard').append(cardimg)
        
    }
    document.getElementById('Hit').addEventListener('click' ,hit)
    document.getElementById('Stay').addEventListener('click' ,stay)
}

function hit(){
    if(!canHit){
        return
    }
    let cardimg = document.createElement('img')
        card = deck.pop()
        cardimg.src = './cards/' + card + '.png'
        Playersum += getCardValue(card)
        playerAceCount += checkAceCard(card)
        document.getElementById('playercard').append(cardimg)
    
        // console.log(card)

    if(reduceAce(Playersum,playerAceCount) > 21 ){
        canHit = false
        // console.log(Playersum)
    }
}

function stay(){
    DealerSum = reduceAce(DealerSum,DealerAceCount)
    Playersum = reduceAce(Playersum,playerAceCount)

    canHit = false
    document.getElementById('hidden').src = './cards/' + hidden + '.png'
    let message = ''

    if(Playersum > 21){
        message = 'You loose 🎃'
    }
    else if(DealerSum > 21){
        message = 'You Win 🎉🎊'
    }
    else if(Playersum === DealerSum){
        message = 'Its a Tie 😶'
    }
    else if(Playersum > DealerSum){
        message = 'You Win 😎😍'
    }
    else if(DealerSum > Playersum){
        message = 'You loose 😭'
    }
    document.getElementById('DealerSum').innerText = DealerSum
    document.getElementById('playerSum').innerText = Playersum
    document.getElementById('output').innerText = message
    

    
}

function reduceAce(Playersum,playerAceCount){
    while(Playersum > 21 && playerAceCount > 0){
        Playersum -= 10
        playerAceCount -= 1
    }
    return Playersum
}

function getCardValue(card){
    let data = card.split('-')
    let value = data[0]

    if(isNaN(value)){
        if(value == 'A'){
            return 11
        }
        return 10
    }
    return parseInt(value)
}

function checkAceCard(card){
    let data = card.split('-')
    let value = data[0]

    if(value === 'A'){
        return 1
    }else{
        return 0
    }
    
}
