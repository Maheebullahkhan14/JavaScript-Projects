const end_date = '18 October 2022 4:49 pm'

document.getElementById('end-date').innerText = end_date
const inputs = document.querySelectorAll('input')
function clock(){
    const end = new Date(end_date)
    const now = new Date()
    const diff = (end - now)/1000

    if (diff <0) return;
    inputs[0].value = Math.floor(diff/86400) ;
    inputs[1].value = Math.floor(diff/3600)%24 ;
    inputs[2].value = Math.floor(diff/60) % 60 ;
    inputs[3].value = Math.floor(diff) %60;
}
clock()

setInterval(
    () =>{
        clock()
    },1000
)

