function init(){
    const playerTitle = document.querySelector('.Heading')
    const rematchBtn = document.querySelector('.rematch')
    const items = document.querySelectorAll('.item1')
    const Gridarray = Array.from(items)
    let currentplayer = 'playerX'
    // console.log(Gridarray)
    let tracking = [ 1,2,3,4,5,6,7,8,9]
    items.forEach(item =>{
        item.addEventListener('click',(e) =>{
            const index = Gridarray.indexOf(e.target)
            // console.log(index)
            if(
                items[index].classList.contains('playerX') ||
                items[index].classList.contains('computer')
            ){
                return ;
            }

            items[index].classList.add('playerX')
            const spliceNr = tracking.indexOf(index + 1)
            tracking.splice(spliceNr,1)
            console.log(tracking)

            if(wincheck('playerX',items)){
                playerTitle.innerHTML = 'PlayerXwins'
                document.body.classList.add('over')
                return
            }

            const random = Math.floor(Math.random()*tracking.length)
            const ComputerIndex = tracking[random]

            items[ComputerIndex - 1].classList.add('computer')
            tracking.splice(random,1)

            if(wincheck('computer',items)){
                playerTitle.innerHTML = 'ComputerWins'
                document.body.classList.add('over')
                return ;
            }
        })
        rematchBtn.addEventListener('click' ,() =>{
            location.reload()
        })
    })
}
init()

function wincheck(playerName , items){
    function check(pos1,pos2,pos3){
        if(
            items[pos1].classList.contains(playerName) &
            items[pos2].classList.contains(playerName) &
            items[pos3].classList.contains(playerName) 
        ){
            return true
        }else{
            return false
        }
        
    }
    if( check( 0,3,6) ){
        return true
    }
    else if(check (1 ,4 ,7)){
        return true
    }
    else if(check (2 ,5 ,8)){
        return true
    }
    else if(check (0 , 1 , 2)){
        return true
    }
    else if(check (3 ,4 , 5 )){
        return true
    }
    else if(check (0 , 4 , 8)){
        return true
    }
    else if(check (2 ,4 ,6)){
        return true
    }
         
}