const app = document.querySelector('.app')

let inactiveTime = 3000
let moveLastTime = new Date()

document.addEventListener('mousemove',() =>{
    moveLastTime = new Date() 
    app.classList.remove('inactive')
})

function deActivate(){
    let now = new Date()
    let Deltatime = now - moveLastTime

    if(Deltatime>=inactiveTime){
        app.classList.add('inactive')
    }
    requestAnimationFrame(deActivate)
}

deActivate()