// var vowelcount = document.querySelector('.count')

// function countvowel(str){
//     str =str.toLowerCase();
//     let vowArr = ['a' ,'i','e','o','u'];
//     counter = 0

//     for (let letter of str){
//         if(vowArr.includes(letter)){
//             counter++
//         }
//     }vowelcount.innerHTML = counter;


// }

var vowelcount = document.querySelector('#count')

function countvowel(str){
    str = str.toLowerCase()

    var vowelarr = ['a','e' ,'i','o','u']
    counter = 0

    for (let letter of str){
        if(vowelarr.includes(letter)){
            counter++;
            vowelcount.classList.add('blink')
        }else{
            vowelcount.classList.remove('blink')
        }
    }
    vowelcount.innerHTML = counter
}
