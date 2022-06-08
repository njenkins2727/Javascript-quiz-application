//get all required elements:
const startBtn = document.getElementById("start-button");
const timer = document.getElementById("timer-section");
const quiz = document.getElementById("quiz-questions");
const questionTitle = document.getElementById("question-title");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");


let questionIndex = 0

const question = [
{ 
    questionTitle: 'What is the syntax for commenting out in Javascript?', 
    choices: ['<!-- -->', '/*  */', '//', '" "'],
    answer: '//'
}, 
{ 
    questionTitle: 'What is an Array?', 
    choices: ['series of data', 'A variable', '<li>', 'An index'],
    answer: 'series of data'
},
{ 
    questionTitle: 'How do you show something in your web developer tool?', 
    choices: ['console("text")', '("text").console.log', 'console.textcontent("text")', 'console.log("text")'],
    answer: 'console.log("text")'
},
{ 
    questionTitle: 'What is the for loop process', 
    choices: ['answer m', 'answer n', 'answer o', 'answer p'],
    answer: 'answer n'
},
{ 
    questionTitle: 'An API is..', 
    choices: ['Appliance Program Interface', 'Applied Programming Intuition', 'Applied Programming Interface', ''],
    answer: 'Applied Programming Interface'
},
{ 
    questionTitle: 'What method lets you turn a string into an array?', 
    choices: ['answer i', 'answer j', 'split()', 'answer l'],
    answer: 'split()'
},
{ 
    questionTitle: 'question 7', 
    choices: ['answer i', 'answer j', 'answer k', 'answer l'],
    answer: 'answer k'
},
{ 
    questionTitle: 'question 8', 
    choices: ['answer i', 'answer j', 'answer k', 'answer l'],
    answer: 'answer k'
}
]

function nextQuestion (){
 questionIndex = questionIndex + 1
 displayQuestions();

 }

function displayQuestions (){
    questionTitle.textContent = question[questionIndex].questionTitle;
    choice1.textContent = question[questionIndex].choices[0];
    choice2.textContent = question[questionIndex].choices[1];
    choice3.textContent = question[questionIndex].choices[2];
    choice4.textContent = question[questionIndex].choices[3];

    choice1.addEventListener("click", nextQuestion)
    choice2.addEventListener("click", nextQuestion)
    choice3.addEventListener("click", nextQuestion)
    choice4.addEventListener("click", nextQuestion)
}


let timeLeft = 45;

 
function startTimer(){

const timerId = setInterval(function (){

timeLeft = timeLeft - 1;

timer.textContent = timeLeft;


 if (timeLeft === 0) {
  quiz.textContent = "Game Over!" 
  
 
 clearInterval(timerId); 
 }

}, 1000);
}


// when i click start game 
startBtn.addEventListener("click", function(event){
//remove start button
 startBtn.classList.add("hide");

// 1. start timer 
//  a. if timer runs out show game over and return to start button
timer.classList.remove("hide");
timer.textContent = timeLeft;
startTimer();


// 2. start game ***
 // a. show question + 4 answers 
 quiz.classList.remove("hide");
 displayQuestions();

})

// when i answer question 
// show next question
function nextQuestion (){
    questionIndex = questionIndex + 1
    displayQuestions();
    }




 // a. if user is correct = feedback correct 
 // b. if user is wrong subtract 10 sec from the clock + feedback incorrect


 function optionSelected(question){
    let userAns = question[questionIndex].choices
    let correctAns = question[questionIndex].answer
    console.log(userAns)
}

    optionSelected();

 //when all questions are answered or timer runs out i receieve
 // 1. "Game Over!"

//when user clicks final question 
//show end game screen


 // 2. score + save initial and score 
  //user hit enter key 
  // get user initial and highscore
  //save


