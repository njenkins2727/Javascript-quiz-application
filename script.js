//get all required elements:
const startBtn = document.getElementById("start-button");
const quizSection = document.getElementById("quiz-questions");
const timer = document.getElementById("timer-section");
const endGameSection = document.getElementById("scoreboard");
const highscores = document.getElementById("highscore-section");

const startQuiz = document.getElementById("start-quiz");
const questionTitle = document.getElementById("question-title");
const questionChoices = document.getElementById("question-choices")
const resultSpan = document.getElementById("result-span");
const saveBtn = document.getElementById("save-button");
const clearButton = document.querySelector("#clear-button");
const initialInput = document.getElementById("initial-input");


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
          { text: "series of data", correct: true },
          { text: "A variable", correct: false },
          { text: "<li>", correct: false },
          { text: "An index", correct: false }
        ]
      },
      
      {
        title: "How do you print something in your web developer tool?",
        answers: [
          { text: "console()", correct: false },
          { text: "console.log()", correct: true },
          { text: "log().console", correct: false },
          { text: "cons.log()", correct: false }
        ]
      },
      
      {
        title: "To insert a JavaScript into an HTML page, which tag is used?",
        answers: [
          { text: "<java>", correct: false },
          { text: "<js>", correct: false },
          { text: "<javascript>", correct: false },
          { text: "<script>", correct: true }
        ]
      },
      
      {
        title: "An API is..",
        answers: [
          { text: "Application Programming Interface", correct: false },
          { text: "Another Practice Interior", correct: false },
          { text: "Application Programming Initiator", correct: true },
          { text: "''", correct: false }
        ]
      },
      
      {
        title: "What is the == operator?",
        answers: [
          { text: "Equal to types and values", correct: false },
          { text: "Equal to values", correct: true },
          { text: "and", correct: false },
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
          { text: "banana", correct: true },
          { text: "baaa", correct: false },
          { text: "ananas", correct: true },
          { text: "bananaa", correct: false }
        ]
      },
    ]


//Quiz functionality
 function renderQuestion(questionIndex){

//get question 
const questions = question[questionIndex]

//create structure
//set question title 
questionTitle.textContent = questions.title;

//set choices 
const choices = questions.answers;
questionChoices.textContent = ""
for (let index = 0; index < choices.length; index++) {
    const choice = choices[index];

    
const li = document.createElement('li');

const button = document.createElement('button');

button.setAttribute('class', 'quiz-choice');

button.textContent = choice.text;

button.addEventListener("click", function(event){

// when i answer question 

if(choice.correct === true){
 // a. if user is correct = feedback correct 
 console.log("right");

}else{
 // b. if user is wrong subtract 10 sec from the clock + feedback incorrect
 timeLeft = timeLeft - 10;
 console.log("wrong");
}

//when user clicks final question 
const nextQuestionIndex = questionIndex + 1 ;

if (nextQuestionIndex >= question.length){
    //show end game screen
    return endGame();
}

// show next question
renderQuestion(nextQuestionIndex);

});

li.appendChild(button);

questionChoices.append(li);
    


}
 }


//Endgame function
function endGame(){
    //show end game screen 
    endGameSection.classList.remove("hide");
    //hide questions 
    questionTitle.classList.add("hide");
    quizSection.classList.add("hide");
    //hide timer
    timer.classList.add("hide");   

    //users score + showing in result span 
    if(timeLeft <= 0 ){
      timeLeft = 0;
    }
    resultSpan.textContent = timeLeft;

    //save button maybe make function(event store score)
    saveBtn.addEventListener("click", storeScore);
}

//storing scores
function storeScore(event){

  event.preventDefault();


  //check for input 
  if (!initialInput.value){
    alert('Please enter your initials to save your highscore!');
    return;
  }

  //store scores and initals in object 
  let highscoreItems = {
    initials: initialInput.value,
    score: timeLeft,
  };
  if(highscoreItems.score <= 0 ){
    highscoreItems.score = 0;
  }

  updatedHighscore(highscoreItems);

  highscoreSection();

}

//updates leaderboard stored in local storage 
function updatedHighscore(highscoreItems){
  let highscoreArray = getHighscore();
  //append new highscore item to highscore array 
  highscoreArray.push(highscoreItems);
  localStorage.setItem("highscoreArray", JSON.stringify(highscoreArray));
}

function getHighscore(){
  let storedHighscore = localStorage.getItem("highscoreArray");
    if (storedHighscore !== null) {
      let highscoreArray = JSON.parse(storedHighscore);
      return highscoreArray;
    } else {
      highscoreArray = [];
    }
    return highscoreArray;
}


 //Timer
 let timeLeft = 55;

function startTimer(){

const timerId = setInterval(function (){

timeLeft = timeLeft - 1;

timer.textContent = timeLeft;


 if (timeLeft <= 0) { 

  endGame();

  clearInterval(timerId);

 }

 
}, 1000);
}

// When I click start game 
startBtn.addEventListener("click", function(event){
//remove start button
 startQuiz.classList.add("hide");

// 1. start timer 
//  a. if timer runs out show game over and return to start button
timer.classList.remove("hide");
timer.textContent = timeLeft;
startTimer();


// 2. start game ***
 // a. show question + 4 answers 
 quizSection.classList.remove("hide");
renderQuestion(0);
})


function highscoreSection(){
    endGameSection.classList.add("hide");
    highscores.classList.remove("hide");

    
    //display users highscore (get from local storage)

    const sortedHighscoreArray= sortHighscores();

    const highscoreList = document.querySelector("highscore-list")

    for (let i = 0; i < sortedHighscoreArray.length; i++) {
      let highscoreEntry = sortedHighscoreArray[i];
      let newListItem = document.createElement("li");

      newListItem.initialInput + " - " +  highscoreEntry.score;

      highscoreList.append(newListItem);

    }

}


 // display from highest to lowest 
 function sortHighscores(){
   let highscoreArray = getHighscore();
   highscoreArray.sort((a, b) => b.score - a.score);

   return highscoreArray;

 }
 
 clearButton.addEventListener("click", clearHighscores);

 function clearHighscores(){
   localStorage.clear();
   highscoreSection;
 }

 const restartButton = document.getElementById("#restart-button");

 restartButton.addEventListener("click", restart);

 function restart(){
   addHide();
    startQuiz.classList.remove("hide");    
   }

   function addHide(){
    startQuiz.classList.add("hide");
    quizSection.classList.add("hide");
    timer.classList.add("hide");
    endGameSection.classList.add("hide"); 
    highscores.classList.add("hide");
   }