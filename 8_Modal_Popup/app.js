const openbtn = document.querySelector('button')
const closebtn = document.querySelector('#Multiply')

const modal =document.querySelector('.Modal')

openbtn.addEventListener('click',openmodal)

function openmodal(){
    modal.style.display = 'grid';

}
closebtn.addEventListener('click',closemodal)
function closemodal(){
    modal.style.display = 'none'
}

modal.addEventListener('click', function(e){
    if(e.target.classList.contains('modal')){
        closemodal();
    }
})