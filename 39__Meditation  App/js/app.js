const pausebtn = document.querySelector('.pause')
const playbtn = document.querySelector('.play')

const audio = document.querySelector('.audio audio')

pausebtn.addEventListener('click', () =>{
    audio.pause()
})
playbtn.addEventListener('click', () =>{
    audio.play()
    update()
})

// Seasons Change
const seasons = document.querySelectorAll(".season"),
  video = document.querySelector(".video video");
// CHANGE VIDEO
seasons.forEach((season) => {
  season.addEventListener("click", () => {
    video.src = season.getAttribute("video-src");
  });
});

// Change Duration
const durations = document.querySelectorAll('.duration')
let audioDuration = 120

durations.forEach(duration => {
    duration.addEventListener('click',()=>{
        audioDuration = duration.getAttribute('audio-duration')
        update()
    })
})

const path = document.querySelector('.rect')
const remainingtime = document.querySelector('.time')

const pathLength = path.getTotalLength()
path.style.strokeDasharray = pathLength

function update(){

    if(audio.currentTime > audioDuration){
        audio.pause()
        audio.currentTime = 0
    }
    let portionPlayed = audio.currentTime/audioDuration

    path.style.strokeDashoffset = -portionPlayed * pathLength

    let RemainingTimeinSec = audioDuration - audio.currentTime

    RenderRemainingTime(RemainingTimeinSec)

    if(!audio.paused){
        requestAnimationFrame(update)
        console.log('update')
    }
    
}

update()

function RenderRemainingTime(timeinSec){
    let min = Math.floor(timeinSec/60)
    let sec = Math.floor(timeinSec%60)

    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;
    remainingtime.innerHTML = `${min}:${sec}`

}