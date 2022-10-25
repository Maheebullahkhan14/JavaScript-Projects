const button = document.querySelector('button');
const body = document.querySelector('body')
 

const color = ['yellow' , 'red' , 'pink' ,'blue', 'violet' , 'orange' ,'grey']

body.style.backgroundColor = 'violet'

button.addEventListener('click' ,changeB)


function changeB(){
    const colorIndex1 = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex1];
}