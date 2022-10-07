var startPage = document.getElementById("start-page");
var quizPage = document.getElementById("quiz-container");
var endPage = document.getElementById("end-page");
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");

var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

var correctCount = 0;
var selected 
function answerHandler(event){
    selected = event.target.id
    updateScore()
}
answer1.addEventListener("click", answerHandler)
answer2.addEventListener("click", answerHandler)
answer3.addEventListener("click",answerHandler )
answer4.addEventListener("click", answerHandler)

nextButton.addEventListener("click", function(){
if(selected)
    populateQuizContents(index);
})

var index 
var correctCount = 0;
var score = correctCount + "/" + quizData.length;
var secondsLeft = 51;

function startQuiz(){
    startButton.removeEventListener
    startPage.setAttribute("style", "display: none");
    quizPage.setAttribute("style", "display: block");
    countdown();
    index = 0;
    correctCount=0;

    if(quizData[index]){
        populateQuizContents(index);

   }     
     
}
function populateQuizContents(i){
    if(index > quizData.length - 1 ){
        endQuiz()
    }
    
    question.innerHTML = quizData[i].question;
    answer1.innerHTML = quizData[i].answer1;
    answer2.innerHTML = quizData[i].answer2;
    answer3.innerHTML = quizData[i].answer3;
    answer4.innerHTML = quizData[i].answer4;
    
    
}
function countdown(){

}

function endQuiz(){
    endPage.setAttribute("style", "display: block");
    quizPage.setAttribute("style", "display: none");
}

function updateScore(){
    console.log(selected)
    console.log(quizData[index].correct)
    
    if(quizData[index].correct === selected){
        correctCount++;
        
    }
    console.log(correctCount)
    index++;
}



startButton.addEventListener("click", startQuiz)

//high scores event listener to toggle high scores display

//store high score in local storage
//append high score
//start button

//next button
//iterate through quiz questions 
//end quiz when time = 0 or no more questions
