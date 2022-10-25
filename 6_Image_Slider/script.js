(function (){
    const pictures =[
        "1",
        "2",
        "3","4" ,"5"];
    
    const buttons = document.querySelectorAll('.btn')
    const imgdiv = document.querySelector('.imgcontainer')
    let counter = 0
    buttons.forEach(function(button){
        button.addEventListener('click' , function(e){
            if (button.classList.contains('btnleft')){
                counter--
                if (counter <0){
                    counter = pictures.length-1
            }
                imgdiv.style.background = `url('img/${pictures[counter]}.jpg')`;
        }
        if (button.classList.contains('btnright')){
                counter++
                if (counter > pictures.length-1){
                    counter = 0
            }
                imgdiv.style.background = `url('img/${pictures[counter]}.jpg')`;
        }

    })
})
})()
