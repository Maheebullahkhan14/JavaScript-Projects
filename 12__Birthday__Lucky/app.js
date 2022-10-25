const dateOfBirth =document.querySelector('#date')
const luckyNumber = document.querySelector('#lucky')
const CheckNumberBtn = document.querySelector('#luckyNumberbtn')
const Output_msg = document.querySelector('#output-text')


function checkBirthdateisLucky(){
    const dob =dateOfBirth.value
    const sum = calculate(dob)

    if (sum && luckyNumber){
    if(sum % luckyNumber.value===0){
        Output_msg.innerText = 'YourBirthday is Lucky 😍🎉'
        console.log('Zero Remainder')
        

    }else{
        Output_msg.innerText = 'Your Birthdauy is not Lucky😢'
        console.log('Not a Zero')
        
      }

        }else{
            Output_msg.innerText = 'Plz Enter Both the Fields'
        }
}
function calculate(dob){
    dob = dob.replaceAll('-',"")
    let sum = 0
    for (let i=0;i<dob.length ; i++){
        sum +=  +dob[i]
    }return sum
}

CheckNumberBtn.addEventListener('click',checkBirthdateisLucky)