 const seasons1 = document.querySelector('.seasons')
 const openbtn = document.querySelector('.toggle-menu')

 openbtn.addEventListener('click',() =>{
    seasons1.classList.toggle('open')
    openbtn.classList.toggle('rotate')
 })

