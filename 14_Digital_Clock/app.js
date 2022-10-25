window.addEventListener('load',Calculatetime)
function Calculatetime(){
    var date = new Date()
    var daynumbers = date.getDay()
    var hours = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()
    var ampm = hours >12 ? 'PM' :'AM'
    var dayname = ['SUN' ,'MON' ,'TUES' ,'WED' ,'THUR' ,'FRI' ,'SAT']

    hours = hours % 12
    hours = hours ? hours : '12'
    hours = hours < 10 ? '0' + hours : hours
    min = min <10 ? '0' + min : min
    sec = sec<10 ? '0' + sec : sec

    document.getElementById('Day').innerHTML = dayname[daynumbers]
    document.getElementById('Hours').innerHTML = hours + ' :'
    document.getElementById('Minutes').innerHTML = min + ' :'
    document.getElementById('AmPm').innerHTML = ampm
    document.getElementById('Sec').innerHTML = sec

setTimeout(Calculatetime , 200)

}

// var date = new Date()
// var hours = date.getHours()
// hours = hours % 12
// console.log(hours)

// var min = '5'

// if (min < 10){
//     min ='0' + min
//     console.log(min)
// }
// min = min <10 ? '0' + min : min ;
// console.log(min)