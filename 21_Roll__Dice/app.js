function ludo(){
    const dicevalue = Math.floor(Math.random() * 6 )+1
    const dicevalue2 = Math.floor(Math.random() * 6 )+1

    const output2 = document.getElementById('output')

    
    const playdice = `dice${dicevalue}.png`
    const playdice2 = `dice${dicevalue2}.png`
    document.getElementById('check').setAttribute('src' ,playdice)
    document.getElementById('check2').setAttribute('src' ,playdice2)

    if(playdice === playdice2){
        output2.innerHTML = 'DRAW'
        
        
    }else if(playdice > playdice2){
        output2.innerHTML = 'Player 1 Won' 
    }else{
        output2.innerHTML = 'Player 2 Win'
    }


}
ludo()
