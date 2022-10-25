const quoteText = document.querySelector('.quote'),
quotebtn = document.querySelector('button')
authorname = document.querySelector('.author')

function randomquote(){ 

    quotebtn.innerHTML = 'Loading Quote....'
    quotebtn.classList.add('loading')
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerHTML = result.content;
        authorname.innerHTML = result.author;
        quotebtn.innerHTML = 'New Quote'
        quotebtn.classList.remove('loading')
        navigator.clipboard.writeText(quoteText.innerHTML )
        

        
    } );
}



quotebtn.addEventListener('click' , randomquote)
