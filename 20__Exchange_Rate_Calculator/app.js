const currency_Input1 = document.getElementById('currency-one')
const currency_Input2 = document.getElementById('currency-two')
const amount_one = document.getElementById('amount-one')
const amount_two = document.getElementById('amount-two')
const swapbtn = document.getElementById('swap')
const rate1 = document.getElementById('rate')


currency_Input1.addEventListener('change' , calculate)
currency_Input2.addEventListener('change' ,calculate)
amount_one.addEventListener('input' ,calculate)
amount_two.addEventListener('input',calculate)



function calculate(){
    const currency_value = currency_Input1.value
    const currency_value2 = currency_Input2.value

    fetch(`https://v6.exchangerate-api.com/v6/b71ba5a6f69833fe3ac900ec/latest/${currency_value}`)
    .then((res) => res.json())
    .then((data) =>{ 

        const rate = data.conversion_rates[currency_value2]
        rate1.innerHTML = `1${currency_value} = ${rate} ${currency_value2}`

        amount_two.value = (amount_one.value * rate ).toFixed(2)
    })
}

swapbtn.addEventListener('click' , () =>{
    const temp = currency_Input1.value
    currency_Input1.value = currency_Input2.value
    currency_Input2.value = temp;

    calculate()
})

calculate()


calculate()
