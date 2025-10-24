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
        answer: `potassium`
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

function questions(){
    let qn = quiz[questionNum]
    document.querySelector(`.quizHeader h2`).textContent = qn.question
    let mcOptions = document.querySelector(`.answers p`)
    mcOptions.innerHTML = ``

    for(let i = 0; i < qn.options.length; i++){
        let label = document.createElement(`label`)
        label.classList.add(`options`)
        label.innerHTML = `<input type="radio" name="quiz" value="${option}" ${option}`
        mcOptions.appendChild(label)
    }
}

function submit(){
    let selected = document.querySelector(`input[name="quiz"]:checked`)
    if(selected.value = quiz[questionNum].answer){
        score++
        let optDiv = selected.closest(`.answers`)
        optDiv.style.borderColor = `green`
    }else{
        let optDiv = selected.closest(`.answers`)
        optDiv.style.borderColor = `green`
    }
}