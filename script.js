


var startPage = document.getElementById("start-page");
var quizPage = document.getElementById("quiz-container");
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");

var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

var selected
// answer1.addEventListener("click", function(){
//     selected = answer1
// })
// answer2.addEventListener("click", function(){
//     selected = answer2
// })
// answer3.addEventListener("click", function(){
//     selected = answer3
// })
// answer4.addEventListener("click", function(){
//     selected = answer4
// })

var correctCount
var secondsLeft = 51;

function startQuiz(){
    startButton.removeEventListener
    startPage.setAttribute("style", "display: none");
    quizPage.setAttribute("style", "display: block");
    countdown();
    correctCount = 0;
    
    let i=0;
    while(i<quizData.length){
        question.innerHTML = quizData[i].question;
        answer1.innerHTML = quizData[i].answer1;
        answer2.innerHTML = quizData[i].answer2;
        answer3.innerHTML = quizData[i].answer3;
        answer4.innerHTML = quizData[i].answer4;
    }

    endQuiz()
}

function countdown(){

}

function endQuiz(){

}

startButton.addEventListener("click", function(){
    startQuiz();
});

//high scores event listener to toggle high scores display

//store high score in local storage
//append high score
//start button

//next button
//iterate through quiz questions 
//end quiz when time = 0 or no more questions
