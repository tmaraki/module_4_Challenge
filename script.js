var body = document.body;
var currentQuestionIndex = -1;
var quizData = [
    {
        question: "Commonly used data types DO NOT include",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAns: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is...",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correctAns: 4
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables",
        answers: ["commas", "curly brackets", "quotes", "paranthesis"],
        correctAns: 3
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        answers: ["numbers and strings", "other arrays", "booleans", "All of the above"],
        correctAns: 4
    },
    {
        question: "The condition in an if/else statement is enclosed within ________.",
        answers: ["brackets", "paranthesis", "quotes", "commas"],
        correctAns: 1
    }
];


var startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", function () {
    startTimer(59, document.getElementById("time"));
    startQuiz();
});

var timeInterval;
var timer;

function startTimer(duration, display) {
    timer = duration; // Initialize the timer
    var minutes, seconds;
    timeInterval = setInterval(function () {
    
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = seconds;
        

    if (--timer < 0) {
        timer = duration;
        clearInterval(timeInterval);
        doneGame();
    }
 }, 1000);
}


function startQuiz() {
    var firstMessage = document.getElementById("quizchallenge");
    firstMessage.style.display = "none";
    showQuestion();

}

function showQuestion() {
    currentQuestionIndex++; // Move to the next question

  if (currentQuestionIndex < quizData.length) {
    var currentQuestionData = quizData[currentQuestionIndex];

        var dataTypes = document.createElement('h1');
        var listEl = document.createElement('ol');
        listEl.addEventListener("click", function (e) {
            checkChoice(e);
    });
    var li1 = document.createElement('li');
    li1.setAttribute("id", "choice1");
    var li2 = document.createElement('li');
    li2.setAttribute("id", "choice2");
    var li3 = document.createElement('li');
    li3.setAttribute("id", "choice3");
    var li4 = document.createElement('li');
    li4.setAttribute("id", "choice4");

    dataTypes.textContent = currentQuestionData.question;
    li1.textContent = currentQuestionData.answers[0];
    li2.textContent = currentQuestionData.answers[1];
    li3.textContent = currentQuestionData.answers[2];
    li4.textContent = currentQuestionData.answers[3];


    var questionContainer = document.getElementById("questionContainer");
    questionContainer.innerHTML = "";
    questionContainer.appendChild(dataTypes);
    dataTypes.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
} else {
        stopTimer();
        showResults();
      }
    }

var correctAnswerCounter = 0;

function checkChoice(e) {
        let currentQuestionData = quizData[currentQuestionIndex];
        let correctChoiceIndex = currentQuestionData.correctAns;
        let correctChoiceText = currentQuestionData.answers[correctChoiceIndex];
        let result = document.createElement('p');
        var questionContainer = document.getElementById("questionContainer");
            questionContainer.appendChild(result);

        if (e.target.textContent === currentQuestionData.answers[correctChoiceIndex]) {
            correctAnswerCounter++;
            result.textContent = "Correct!";
        } else {
            result.textContent = "Wrong!";
        }

        setTimeout(function () {
            if (questionContainer.contains(result)) {
                questionContainer.removeChild(result);
            } else{
                console.warn("result element not found in questionContainer.");
            }

            currentQuestionData++;

            if (allQuestionsAnswered()) {
                stopTimer();
                showResults ();
            } else{
                showQuestion();
            }
        }, 1000);
}


function allQuestionsAnswered() {
    return currentQuestionIndex === quizData.length - 1;
}


function stopTimer() {
    clearInterval(timeInterval);
}

function showResults() {

    var questionContainer = document.getElementById("questionContainer");
    questionContainer.innerHTML = "";

    var resultsMessage = document.createElement('h1');
    resultsMessage.textContent = "Quiz Completed";
    questionContainer.appendChild(resultsMessage);

    var results = document.createElement('p');
    results.textContent = "You answered " + correctAnswerCounter + " out of " + quizData.length + " questions correctly.";
    questionContainer.appendChild(results);
}

function doneGame() {
if (allQuestionsAnswered() || timer===0) {
    stopTimer();
    showResults;
    }
}




