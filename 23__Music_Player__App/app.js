const playbtn = document.getElementById('play')
const audio = document.querySelector('audio')
const image = document.querySelector('img')
const prev = document.querySelector('#prev')
const title = document.querySelector('.title')
const forward = document.getElementById('next')
const artist = document.querySelector('.Artist')


const songs = [{
    name : 'Gulam1' ,
    title : 'Srivalli',
    artist : 'Arijit Singh'
},
{
    name : 'Gulam3' ,
    title : 'Teri Meri Gallan',
    artist : 'Stebin ben'
},
{
    name : 'Gulam4' ,
    title : 'Mage Hitte',
    artist : 'Star-Girl'
},
{
    name : 'Gulam5' ,
    title : 'Kesariya',
    artist : 'Arijit Singh'
}]

let isplaying  = false

const playMusic = () =>{
    isplaying = true
    audio.play()

    playbtn.classList.replace('fa-circle-play' ,'fa-pause' )
    image.classList.add('anime')
}

const pauseMusic = () =>{
    isplaying = false
    audio.pause()

    playbtn.classList.replace('fa-pause' , 'fa-circle-play')
    image.classList.remove('anime')
}
playbtn.addEventListener('click' , () =>{
    if(isplaying){
        pauseMusic()
    }else{
        playMusic()
    }
})


const loadData = (songs) =>{
    title.textContent = songs.title
    artist.textContent = songs.artist
    audio.src = songs.name + '.mp3'
    image.src = songs.name + '.webp'
    

}
songIndex = 0
const nextSong = () =>{
    songIndex =( songIndex + 1) % songs.length
    loadData(songs[songIndex])
}
const prevSong = () =>{
    songIndex =( songIndex - 1 + songs.length) % songs.length
    loadData(songs[songIndex])
}


forward.addEventListener('click' , nextSong)
prev.addEventListener('click' , prevSong)