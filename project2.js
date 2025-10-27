let quiz = [
    {
        question: `What is 9 + 10?`,
        options: [`21`, `12`, `19`, `15`],
        answer: `19`
    },
    {
        question: `what is the Greek God of the sea?`,
        options: [`Poseidon`, `Zeus`, `Athena`, `Achilles`],
        answer: `Poseidon`
    },
    {
        question: `What is the worst team here?`,
        options: [`Cowboys`, `Chiefs`, `Panthers`, `All of the Above`],
        answer: `All of the Above`
    },
    {
        question: `What is the capital of North Dakota?`,
        options: [`Harrisburg`, `Bismarck`, `Pierre`,`Atlanta`],
        answer: `Bismarck`
    },
    {
        question: `what is 34 + 33?`,
        options: [`69`, `56`, `73`, `67`],
        answer: `67`
    },
    {
        question: `How many hearts does an Octupus have?`,
        options:  [`1`, `2`, `3`, `4`],
        answer: `3`
    },
    {
        question: `What planet had the "Great Red Spot"?`,
        options: [`Mars`, `venus`, `Earth`, `Jupiter`],
        answer: `Jupiter`
    },
    {
        question: `What is the element that has the symbol K?`,
        options: [`Gold`, `Krypton`, `Magnesium`, `Potassium`],
        answer: `Potassium`
    },
    {
        question: `Where are the Manitou Springs Steps?`,
        options: [`Colorado`, `Arizona`, `Utah`, `California`],
        answer: `Colorado`
    },
    {
        question: `What is the best class?`,
        options: [`Business`, `Public Speaking`, `CSET`, `Math`],
        answer: `CSET`
    }
]

let questionNum = 0
let score = 0
let timer = document.getElementsByClassName(`timer`)[0]
let seconds = 0
let timerInterval

function updateTimer(){
    seconds++
    let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, `0`)
    let secs = String(seconds % 60).padStart(2, `0`)
    timer.textContent = `${mins}:${secs}`
}

function startTimer(){
    if(!timerInterval){
        timerInterval = setInterval(updateTimer, 1000)
    }
}

function stopTimer(){
    clearInterval(timerInterval)
    timerInterval = null
}

function start(){
    let startBtn = document.getElementsByClassName(`srtBtn`)[0]
    startBtn.style.display = `none`
    document.querySelector(`.body`).style.display = `flex`
    document.querySelector(`.quizFooter`).style.display = `flex`
    document.querySelector(`.back`).style.display = `none`
    document.querySelector(`.timer`).style.display = `block`
    
    seconds = 0
    timer.textContent = `00:00`
    stopTimer()
    startTimer()
    questions()
}

function questions(){
    let qn = quiz[questionNum]
    document.querySelector(`.quizHeader h2`).textContent = `${questionNum + 1}. ${qn.question}`

    let answers = document.querySelectorAll(`.answers`)

    for(let i = 0; i < qn.options.length; i++){
        let input = answers[i].querySelector(`input`)
        let text = answers[i].querySelector(`p`)
        input.value = qn.options[i]
        text.textContent = qn.options[i]
        answers[i].style.borderColor = ``
        input.checked = false
    }
    document.querySelector(`.submit`).disabled = true
    document.querySelector(`.next`).style.display = `none`
}
function submitBtnUnlock(){
    document.querySelector(`.submit`).disabled = false
}
function submit(){

    document.querySelector(`.submit`).style.display = `none`
    let selected = document.querySelector(`input[name="quiz"]:checked`)
    let nextBtn = document.getElementsByClassName(`next`)[0]
    nextBtn.style.display = `block`
    let correctAnswer = quiz[questionNum].answer
    if(selected.value == correctAnswer){
        score++
        let optDiv = selected.closest(`.answers`)
        optDiv.style.borderColor = `#39FF14`
    }else{
        let optDiv = selected.closest(`.answers`)
        optDiv.style.borderColor = `red`
        let rightQuestion = document.querySelectorAll(`input[name="quiz"]`)
        for(let x = 0; x < rightQuestion.length; x++){
            let input = rightQuestion[x]
            let text = input.parentElement.textContent
            if(input.value == correctAnswer){
                input.closest(`.answers`).style.borderColor = `#39FF14`
            }
        }
    }

    document.querySelectorAll('input[name="quiz"]').forEach(input => {
        input.disabled = true
    })
}
 
function nextQuestion(){
    document.querySelectorAll('input[name="quiz"]').forEach(input => {
        input.disabled = false
    })
    document.querySelector(`.submit`).style.display = `block`
    questionNum++
    if(questionNum < quiz.length){
        questions()
    }else{
       document.querySelector(`.body`).style.display = `none`
       document.querySelector(`.quizFooter`).style.display = `none`
       document.querySelector(`.endDiv`).style.display = `flex`
       let scoreText = document.querySelectorAll(`.score`)[0]
       scoreText.textContent = `${score}/10`
       document.querySelector(`.timer`).style.display = `none`
       stopTimer()
    }
}

function retake(){
    questionNum = 0
    score = 0
    document.querySelector(`.srtBtn`).style.display = `block`
    document.querySelector(`.body`).style.display = `none`
    document.querySelector(`.quizFooter`).style.display = `none`
    document.querySelector(`.endDiv`).style.display = `none`
    document.querySelector(`.back`).style.display = `block`
    document.querySelector(`.timer`).style.display = `none`
}