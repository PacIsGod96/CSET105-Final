let quiz = [ //a variable that is an array that holds all of the questions, options for the question, and the correct answer
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
];

let questionNum = 0; //a variable that tracks which question it is, since it is an array 0 is technically the first question
let score = 0; //a variable to track how many questions you het right 
let timer = document.getElementsByClassName(`timer`)[0]; //a variable that gets the text/first item inside of the timer class
let seconds = 0; //a varible that tracks the seconds/time
let timerInterval; //a blank variable that will have something in it later

function updateTimer(){ //a function to update the timer 
    seconds++; //will add 1 to the seconds variable hen the function runs 
    let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, `0`); //a variable that calculates how may minutes have passed from the total seconds and formats it so that it always shows 2 digits and turns it into a string 
    let secs = String(seconds % 60).padStart(2, `0`); //a variable that calculates how many sconds have passed from the total seconds and formats it so that it it always shows2 digits and turns it into a string 
    timer.textContent = `${mins}:${secs}`; //will grab the timer variable and replaces the text with the minutes and seconds 
}

function startTimer(){ //a function that will start the timer 
    if(!timerInterval){ //test if the timer isnt already running 
        timerInterval = setInterval(updateTimer, 1000); //updates the timer interval, every 1000 mili seconds 
    }
}

function stopTimer(){ //function to stop the timer 
    clearInterval(timerInterval); //will clear the time interval
    timerInterval = null; //reset it so we know the timer is not running 
}

function start(){ //function to start the game 
    let startBtn = document.getElementsByClassName(`srtBtn`)[0]; //a variable that grabs the start button and specifically the button
    startBtn.style.display = `none`; //sets the display of the start button to none after the button is pressed cause it is not needed
    document.querySelector(`.body`).style.display = `flex`; //sets the body of the quiz to flex so you can see the quiz 
    document.querySelector(`.quizFooter`).style.display = `flex`; //sets the footer to flex to see the submit button
    document.querySelector(`.back`).style.display = `none`; //sets the button to go back to the grocery list manager to none 
    document.querySelector(`.timer`).style.display = `block`; //sets the timer to block so you can ee the timer
    document.querySelector(`.backAndTimer`).style.justifyContent = `flex-end`; //makes the button goto the right of the screen
    seconds = 0; //sets the second variable to 0
    timer.textContent = `00:00`; //will set the text content of the timer to this 
    stopTimer() //will stop the timer icase it is running 
    startTimer() //will start the timer 
    questions() //called here to grab the first question 
}

function questions(){ //function to grab the question, options, and answers
    let qn = quiz[questionNum]; //a variable that will grab a question and whatever number questionNum is will be the index of what it grabs 
    document.querySelector(`.quizHeader h2`).textContent = `${questionNum + 1}. ${qn.question}`; //will grab the tag that holds the question and sets it the questionNum an the +1 is because t is technically behind because if the index starting at 0 and gets the current question of th current index

    let answers = document.querySelectorAll(`.answers`); //a variable that grabs all of the .answer classes

    for(let i = 0; i < qn.options.length; i++){ //a for loop that will run through all of the options and put the option of the current question into 4 answer tags 
        let input = answers[i].querySelector(`input`); //a variable that will grab the current answer class and grab the input in that class
        let text = answers[i].querySelector(`p`); //a variable that will grab the current answer class and grab the p tag in that class
        text.textContent = qn.options[i]; //will make the p tag text the option 
        input.value = qn.options[i]; //sets input value correctly
        answers[i].style.borderColor = ``; //will set the border color of the current answer div to nothing
        input.checked = false; //will make sure that the current input is unchecked 
    }
    document.querySelector(`.submit`).disabled = true; //will grab the submit button and disabled it so that it cant be pressed yet
    document.querySelector(`.next`).style.display = `none`; //will grab the next button and make the display none so that it is not visble yet 
}
function submitBtnUnlock(){ //function to make the submit button unlock 
    document.querySelector(`.submit`).disabled = false; //makes the submit button avialible to press
}
function submit(){ //funation for when the submit button is pressed 
    document.querySelector(`.submit`).style.display = `none`; //will grab the submit button and make it dissapear after it is hit 
    let selected = document.querySelector(`input[name="quiz"]:checked`); //a variable that will grab the input that has been checked 
    let nextBtn = document.getElementsByClassName(`next`)[0]; //a variable that grabs the next button 
    let correctAnswer = quiz[questionNum].answer; //a variable that will grab the answer of the current problem
    if(selected.value == correctAnswer){ //will run if the value of the selected option is equal to the correct answer
        score++; //will add 1 to score 
        let optDiv = selected.closest(`.answers`); //a variable that grabs the closest answer tag the value is in 
        optDiv.style.borderColor = `#39FF14`; //will turn the border of that answer class green marking that it is correct 
    }else{//will run if the value of the selected option is is not equal to the correct answer
        let optDiv = selected.closest(`.answers`); //a variable that grabs the closest answer tag the value is in 
        optDiv.style.borderColor = `red`; //will turn the border of that answer class red marking that it is wrong 
        let rightQuestion = document.querySelectorAll(`input[name="quiz"]`); // a variable that grabs all of the inputs 
        for(let x = 0; x < rightQuestion.length; x++){ //a for loop that goes through each input
            let input = rightQuestion[x]; //a variable that will grab the current input 
            let text = input.parentElement.textContent; //a variable that grabs the parent elements text 
            if(input.value == correctAnswer){ //runs if the input value is equal to the correct answer
                input.closest(`.answers`).style.borderColor = `#39FF14`; //will make that answer class green to show what the right answer was when you get one wrong
            }
        }
    }
    let inputs = document.querySelectorAll(`input[name="quiz"]`); //a variable that will grab all of the inputs 
    for(let i = 0; i < inputs.length; i++){ //a for loop that goes through each input 
        inputs[i].disabled = true; //will disable each input 
    }
    nextBtn.style.display = `block`; //displays the next button
}
 
function nextQuestion(){ //a function that will got to the next question 
    let inputs = document.querySelectorAll(`input[name="quiz"]`); //a variable that gets all of the inputs 
    for(let i = 0; i < inputs.length; i++){ //a for loop that will got through each input 
        inputs[i].disabled = false; //will enable each button 
    }
    document.querySelector(`.submit`).style.display = `block`; //will grab the submit button and make it appear 
    questionNum++; //will add 1 to the questionNum marking that it will go to the next question 
    if(questionNum < quiz.length){ //will run if the question number is less then all of the questions meaning seeing if it is at the end of the questions 
        questions();//runs the question function 
    }else{ //will run if the last question was answered 
       document.querySelector(`.body`).style.display = `none`; //will grab the body class and make the display none so it disappears 
       document.querySelector(`.quizFooter`).style.display = `none`; //will grab the quiz footer class and make the display none so it disappears 
       document.querySelector(`.endDiv`).style.display = `flex`; //will grab the end div and make it appear 
       let scoreText = document.querySelectorAll(`.score`)[0]; //a variable that will grab the score class
       scoreText.textContent = `${score}/10`; //will make the score text content that actual score 
       document.querySelector(`.timer`).style.display = `none`; //will grab the timer class and make the display none so it disappears 
       let finalTime = document.getElementsByClassName(`timer`)[0].textContent; //a variable that grabs the timer text content 
       let finalTimeContainer = document.getElementsByClassName(`finalTimeDisplay`)[0]; //a variable that grabs the first element in the the final display time and stores the time 
       finalTimeContainer.textContent = finalTime; //will make the the container the final text
       stopTimer() //will run the stop timer function 
    }
}

function retake(){ //a function for when the retake button is pressed
    questionNum = 0; //resets the questionNum variable to 0
    score = 0; //resets the score variable to 0
    seconds = 0; //resets the timer to 0
    timer.textContent = "00:00"
    document.querySelector(`.srtBtn`).style.display = `block`; //sets the start button display to block so it reapears 
    document.querySelector(`.body`).style.display = `none`; //sets the body class display to none so it disappears 
    document.querySelector(`.quizFooter`).style.display = `none`; //sets the quiz footer class display to none so it disappears 
    document.querySelector(`.endDiv`).style.display = `none`; //sets the end div class display to none so it disappears 
    document.querySelector(`.back`).style.display = `block`; //sets the back class to block so it reapears 
    document.querySelector(`.timer`).style.display = `none`; //sets the timer display to none so it disappears
    document.querySelector(`.backAndTimer`).style.justifyContent = `space-between`; //sets the back and timer to space between so that the a tag and the timer are on opposite sides
    stopTimer()
}