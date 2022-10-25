const btn = document.querySelector('button')
const body = document.querySelector('body')

btn.addEventListener('click',changecolor)

var color = ['yellow' ,'orange' , 'black' ,'red' , 'dimgrey' ,'blue']

function changecolor(){
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}