const initialPriceEl= document.getElementById('initial-price')
const CurrentPriceEl = document.getElementById('Current-price')
const StocksEl = document.getElementById('stocks-quantity')
const OutputBoxEl  = document.querySelector('.outputBox')
const CheckBtn = document.getElementById('Checkbtn')

function SubmitHandler(){
    let InitialPrice = +initialPriceEl.value
    let CurrentPrice = +CurrentPriceEl.value
    let  Quantity = +StocksEl.value
    
    if(InitialPrice > 0 && CurrentPrice > 0 && CurrentPrice >= 0){
        CalculateProfitAndLoss(InitialPrice,Quantity,CurrentPrice)
    }else{
        alert('plz Enter Valid Value')
        document.body.classList.remove('lossBg')
        document.body.classList.remove('profitBg')
    }
}

function CalculateProfitAndLoss(initial,quantity,current){
    if(initial > current){

        let losspercentage = (((initial-current)/initial)*100).toFixed(2)
        showOutput(`The Loss is ${(initial-current)*quantity} Rs and the LossPercentage is ${losspercentage}%`)

        OutputBoxEl.style.color = 'white'
        OutputBoxEl.style.fontSize = 'xx-large'
        document.body.classList.remove('profitBg')
        document.body.classList.add('lossBg')
    }
    else if(current > initial){
        let profitpercentage = (((current-initial)/current)*100).toFixed(2)
        showOutput(`the Profit is ${(current-initial)*quantity} Rs and the Profit Percentage is ${profitpercentage}%`)

        OutputBoxEl.style.color = 'white'
        OutputBoxEl.style.fontSize = 'xx-large'
        document.body.classList.add('profitBg')
        document.body.classList.remove('lossBg')
    }
}

function showOutput(message){
    OutputBoxEl.innerHTML = message
}

CheckBtn.addEventListener('click' ,SubmitHandler)
