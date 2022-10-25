const MathsInput = document.getElementById('Maths')
const Hist_Input =document.getElementById('History')
const Sci_Input = document.getElementById('Science')
const Eng_Input =document.getElementById('English')
const Button = document.getElementById('Btn')


function calculate(){
    
    let MathsValue = +MathsInput.value
    let HistValue = +Hist_Input.value
    let SciValue = +Sci_Input.value
    let EngValue = +Eng_Input.value
    let grades = ''

    if (MathsValue > 100 || MathsValue < 0) {
        alert('plz enter valid Marks')
    } 
    if(HistValue > 100 || HistValue < 0 ){
        alert('plz enter valid Marks')
    }
    if(SciValue > 100 || SciValue < 0){
        alert('plz enter valid Marks')
    }
    if(EngValue > 100 || EngValue < 0){
        alert('plz enter valid Marks')
    }
    else{
        let totalGrades = (MathsValue + HistValue + SciValue + EngValue)
        let percentage = (totalGrades/400)*100

        console.log(percentage)
    

    if(percentage <= 100 && percentage >= 80){
        grades = 'A'
    }
    else if(percentage <= 79 && percentage >=60){
        grades = 'B'
    }
    else if(percentage <= 59 && percentage >=50){
        grades = 'C'
    }
    else{
        grades = 'D'
    }
    
    if(percentage >=  39.5){
        document.getElementById('showdata').innerHTML =
        ` Out of 400 your total is  ${totalGrades} and percentage is ${percentage}%. <br> Your grade is ${grades}. You are Pass 😍. `
    }
    else{
        document.getElementById('showdata').innerHTML =
        ` Out of 400 your total is  ${totalGrades} and percentage is ${percentage}%. <br> Your grade is ${grades}. You are Fail 😢`

    }



}
}

