var startPage = document.getElementById("start-page");
var quizPage = document.getElementById("quiz-container");
var endPage = document.getElementById("end-page");
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var submitButton = document.getElementById("submit");
var highScoresButton = document.getElementById("show-high-scores");
var secondsLeftEl = document.getElementById("seconds-left");
var scoreEl = document.getElementById("score-string");
var userInputEl = document.getElementById("user-input");
var highScoresList = document.getElementById("high-scores-list");
var highScoresEl = document.getElementById("high-scores");

var question = document.getElementById("question");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

var correctCount = 0;
var score = correctCount/quizData.length;
var selected;
var secondsLeft = 51; 


// function selectionHandler(event){
//     selected = event.target.id
//     removeSelection();
//     event.target.classList.add("selected");
    
// }
function selectionHandler(event){
    if(selected == event.target.id){
        removeSelection();
        selected = 0;
    }
    else{
        selected = event.target.id
        removeSelection();
        event.target.classList.add("selected");
    }
 }

 highScoresButton.addEventListener("click", function(){
    toggleHighScores()
 });

function removeSelection(){
    answer1.classList.remove("selected");
    answer2.classList.remove("selected");
    answer3.classList.remove("selected");
    answer4.classList.remove("selected");

    
}
startButton.addEventListener("click", startQuiz);

answer1.addEventListener("click", selectionHandler);
answer2.addEventListener("click", selectionHandler);
answer3.addEventListener("click", selectionHandler);
answer4.addEventListener("click", selectionHandler);

submitButton.addEventListener("click", function(){
    var userScore = {
        name: userInputEl.value,
        score: score,
    }
    localStorage.setItem("userScore", JSON.stringify(userScore));
    var listItem = document.createElement("li")
    listItem.textContent = userScore.name + ": " + userScore.score*100 + "%";
    highScoresList.appendChild(listItem);
    
})

// function toggleHighScores(){
//     if(highScoresEl.getAttribute("style") == "display: none;"){
//         highScoresEl.setAttribute("style", "display: block;")
//     }
//     else{
//         highScoresEl.setAttribute("style", "dipalay: none;");
//     }
//     if(JSON.parse(localStorage.userScore != null)){
//         var lastScore = JSON.parse(localStorage.userScore);
//         var storedUserScore = document.createElement("li")
//         highScoresList.appendChild(storedUserScore);
//     }
//     else{
//         return
//     }
// }


nextButton.addEventListener("click", function(){

    if(selected){
        updateScore()
        if(index > quizData.length - 1 ){
            endQuiz();
            return 
        }
        populateQuizContents(index);
    }
    selected = 0;
    removeSelection();

    
})

var index 
var correctCount = 0;
var score 
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
    
    
    question.innerHTML = quizData[i].question;
    answer1.innerHTML = quizData[i].answer1;
    answer2.innerHTML = quizData[i].answer2;
    answer3.innerHTML = quizData[i].answer3;
    answer4.innerHTML = quizData[i].answer4;
    
    
}
function countdown(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        secondsLeftEl.textContent = secondsLeft;
        
        if(secondsLeft == 0){
            endQuiz();
            clearInterval(timerInterval);
            secondsLeft = 51;
        }
    }, 1000); 
}

function endQuiz(){
    endPage.setAttribute("style", "display: block");
    quizPage.setAttribute("style", "display: none");
    scoreEl.textContent = "congratulations! your score was " + correctCount + "/" + quizData.length + "     " + 100*score + "%";
}

function updateScore(){
    console.log(selected)
    console.log(quizData[index].correct)
    
    if(quizData[index].correct === selected){
        correctCount++;
        
    }
    console.log(correctCount)
    index++;
    score = correctCount/quizData.length;
}




//store high score in local storage
//append high score
