const quizDB = [
    {
        question : 'Q1 What is the Full form of HTML ?',
        a : 'Hello To My Land',
        b : 'Hey Text Markup Language',
        c : 'HyperText Markup Language',
        d : "HyperText Markup Language",
        ans : "ans4"
    },

    {
        question : 'Q2 What is the Full form of CSS ?',
        a : 'Cascading Style Sheets',
        b : 'Cascading Style Sheep',
        c : 'cartoon Style Sheets',
        d : "Cascading Super Sheets",
        ans : "ans1"
    },

    {
        question : 'Q3 What is the Full form of HTTP ?',
        a : 'HyperText Transfer Product',
        b : 'Hey Text Test Protocol',
        c : 'Hey Transfer Protocol',
        d : "HyperText Transfer Protocol",
        ans : "ans4"
    }

]

const question = document.querySelector('.Question')

const Option1 = document.querySelector('#option1')
const Option2 = document.querySelector('#option2')
const Option3 = document.querySelector('#option3')
const Option4 = document.querySelector('#option4')
const Submit  = document.querySelector('#submit')
const answers= document.querySelectorAll('.answer')
const showscore = document.querySelector('#showscore')

let questionCount = 0;
let score = 0 ;

// Function for LOading the Question
const loadQuestion = () =>{
    const questList = quizDB[questionCount]

    question.innerHTML = (questList.question)
    Option1.innerHTML = questList.a
    Option2.innerHTML = questList.b
    Option3.innerHTML = questList.c
    Option4.innerHTML = questList.d
}

// Function for getting the checked ans from the user
const getAnswer = () =>{

    let answer;
    answers.forEach((curElem) => {
        if(curElem.checked){
            answer = curElem.id
            
        }
        
    })
    return answer;
}


// Function for deSelecting the current checked boxes
const deSelect = () =>{
    answers.forEach((curElem) =>{
        curElem.checked = false
    })
}

loadQuestion()



Submit.addEventListener('click',() =>{
    const checkedAnswer = getAnswer()
    console.log(checkedAnswer)
    
    if(checkedAnswer === quizDB[questionCount].ans){
        score++
    }
    questionCount++ ;

    deSelect()


    if(questionCount < quizDB.length){
        loadQuestion()
    }
    else{
        showscore.innerHTML = `
        <h3>You had Scored ${score} out of ${quizDB.length} ✌ </h3>
        <button class = 'btn' onclick = "location.reload()">Play Again </button>
        
        `
        showscore.classList.remove('ScoreArea')

    }
})