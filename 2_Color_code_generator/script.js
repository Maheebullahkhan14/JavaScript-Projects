const getcolor = () =>{
    const randomnumber = Math.floor(Math.random()*16777215);
    const randomcode ='#' +randomnumber.toString(16);
    console.log(randomnumber ,randomcode)
    document.body.style.backgroundColor = randomcode;
    document.getElementById('code').innerHTML = randomcode;

    navigator.clipboard.writeText(randomcode);
}

document.getElementById('btn').addEventListener(
    'click' , getcolor
)
 
getcolor()

