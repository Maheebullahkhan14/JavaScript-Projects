(function () {
    const buttons =document.querySelectorAll('.counterbtn')
    let count = 0

    buttons.forEach(function(button){
        button.addEventListener('click',function(){
            if (button.classList.contains('btn1')){
                count--
            }else if(button.classList.contains('btn2')){
                count++
            }
            const counter= document.querySelector('.counter')
            counter.textContent= count

            if(count<0){
                counter.style.color ='yellow'
            }

           else if(count>0){
                counter.style.color ='white'
            }

            else{
                counter.style.color ='black'
            }
    })
})

}) ()