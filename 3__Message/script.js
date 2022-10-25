(function(){
    form = document.querySelector('#message-form')

    form.addEventListener('submit',function(e){
        e.preventDefault()

        const message = document.querySelector("#message")
        const feed_back = document.querySelector('.feedback')
        const message_content = document.querySelector(".message-content")

        if(message.value === ''){
            feed_back.classList.add('show')
            setTimeout(function(){
                feed_back.classList.remove('show')
            },4000)
        }else{
            message_content.textContent = message.value
            message.value = ''
        }
    })

})()