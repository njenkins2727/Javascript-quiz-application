//get all required elements:
const startBtn = document.getElementById("start-button");
const timer = document.getElementById("timer-section");
const quizSection = document.getElementById("quiz-questions");
const questionTitle = document.getElementById("question-title");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");
const endGameSection = document.getElementById("scoreboard");
const resultSpan = document.getElementById("result-span");
const highscores = document.getElementById("highscore-section");

//Questions for quiz
const question = [
    {
        title: "What is the syntax for commenting out in Javascript?",
        answers: [
          { text: "<!-- -->", correct: false },
          { text: "/*  */", correct: false },
          { text: "//", correct: true },
          { text: "''", correct: false }
        ]
      },

      {
        title: "What is an Array?",
        answers: [
          { text: "series of data", correct: false },
          { text: "A variable", correct: false },
          { text: "<li>", correct: true },
          { text: "An index", correct: false }
        ]
      },
      
      {
        title: "How do you show something in your web developer tool?",
        answers: [
          { text: "<!-- -->", correct: false },
          { text: "/*  */", correct: false },
          { text: "//", correct: true },
          { text: "''", correct: false }
        ]
      },
      
      {
        title: "What is the for loop process",
        answers: [
          { text: "<!-- -->", correct: false },
          { text: "/*  */", correct: false },
          { text: "//", correct: true },
          { text: "''", correct: false }
        ]
      },
      
      {
        title: "An API is..",
        answers: [
          { text: "<!-- -->", correct: false },
          { text: "/*  */", correct: false },
          { text: "//", correct: true },
          { text: "''", correct: false }
        ]
      },
      
      {
        title: "What is the == operator?",
        answers: [
          { text: "Equal to types and values", correct: false },
          { text: "Equal to values", correct: false },
          { text: "and", correct: true },
          { text: "or", correct: false }
        ]
      },
      
      {
        title: "Who created Javascript",
        answers: [
          { text: "World Wide Web Consortium", correct: false },
          { text: "Tim Berners-Lee", correct: false },
          { text: "Brendan Eich", correct: true },
          { text: "Guido van Rossum", correct: false }
        ]
      },
      {
        title: "what is the result of: console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());",
        answers: [
          { text: "banana", correct: false },
          { text: "baaa", correct: false },
          { text: "ananas", correct: true },
          { text: "bananaa", correct: false }
        ]
      },
    ]
    
//quiz functionality
// let questionIndex = 0

// function nextQuestion (){
//  questionIndex = questionIndex + 1
//  displayQuestions();
//  }

// function displayQuestions (){
//     questionTitle.textContent = question[questionIndex].questionTitle;
//     answers.textContent = question[questionIndex].answers[0];
//     choice2.textContent = question[questionIndex].choices[1];
//     choice3.textContent = question[questionIndex].choices[2];
//     choice4.textContent = question[questionIndex].choices[3];


//     answers.addEventListener("click", nextQuestion, function(event) {
//         if (answers != question[questionIndex].answer){
//             timeLeft = timeLeft - 10;
//         }
//         console.log(answers);
//    });

//    choice2.addEventListener("click", nextQuestion, function(event) {
//     choice2.textContent = choice2;
// })

//    choice3.addEventListener("click",nextQuestion, function(event) {
//    choice3.textContent = choice3;
// })

//    choice4.addEventListener("click",nextQuestion, function(event) {
//    choice4.textContent = choice4;
// })

// }

//help
// function userSelection(question){
//     let userAns = question[questionIndex].choices
//     let correctAns = question[questionIndex].answer
//     console.log(userAns);
// }

    // userSelection();

//Endgame function
function endGame(){
    //show end game screen 
    endGameSection.classList.remove("hide");
    //hide questions 
    questionTitle.classList.add("hide");
    quizSection.classList.add("hide");
    //hide timer
    timer.classList.add("hide");
    //stop timer
    clearInterval(timerId);
}

let timeLeft = 45;

 //Timer
function startTimer(){

const timerId = setInterval(function (){

timeLeft = timeLeft - 1;

timer.textContent = timeLeft;


 if (timeLeft === 0) { 
  endGame();
// highscores.classList.remove("hide");
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
 quizSection.classList.remove("hide");
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



 //when all questions are answered or timer runs out i receieve
 // 1. "Game Over!"

//when user clicks final question 
//show end game screen


 // 2. score + save initial and score 
  //user hit enter key 
  // get user initial and highscore
  //save

  