var body = document.body;
var currentQuestionIndex = -1;
var quizData = [
    {
        question: "Commonly used data types DO NOT include",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAns: 2
    },
    {
        question: "Commonly used data types DO NOT include",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAns: 2
    },
    {
        question: "Commonly used data types DO NOT include",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAns: 2
    },
    {
        question: "Commonly used data types DO NOT include",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAns: 2
    },
    {
        question: "Commonly used data types DO NOT include",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        correctAns: 2
    }
];

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
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

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

function showQuestion() {
    currentQuestionIndex++;
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

}

function displayNextQuestion() {
    if (currentQuestionIndex < quizData.length) {
        var currentQuestionData = quizData[currentQuestionIndex];
        currentQuestionIndex++;
    } else {
        doneGame();
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
    if (e.target.textContent === correctChoiceText) {
        correctAnswerCounter++;
        result.textContent = "Correct!";
    } else {
        result.textContent = "Wrong!";
    }
    setTimeout(showQuestion, 3000);
}

function doneGame() {

}

var startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    var firstMessage = document.getElementById("start-quiz");
    firstMessage.style.display = "none";
    displayNextQuestion();
}
