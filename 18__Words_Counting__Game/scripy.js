const Input = document.getElementById('Input');
const btn = document.getElementById('btn')
const Let_count = document.getElementById('LetterOutput')
const Word_count = document.getElementById('WordsOutput')


function myFunction(){
   
    var Input_Value = Input.value
    var Value = Input_Value.replace(/\s+/g, ' ').trim()
    

    var wordcount = 0 ;
    var LetterCount = 0 ;

    if(Value === ''){
        wordcount = 0
        console.log(wordcount)
        alert('Plz Enter the Values')
    }
    else{
    var arr1 = Value.split(' ')
    var arr2 = arr1.join('')

    LetterCount +=arr2.length
    wordcount += arr1.length
    
    Word_count.innerHTML = +wordcount
    Let_count.innerHTML = LetterCount

    console.log(typeof(Value))
}

}



