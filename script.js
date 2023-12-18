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


var startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", function () {
    startTimer(60, document.getElementById("time"));
    startQuiz();
});


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var timeInterval = setInterval(function () {
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
    var currentQuestionData = quizData[currentQuestionIndex + 1];
    if (currentQuestionData) {
            console.log("Displaying question:", currentQuestionData);
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

    } else{
        console.log("no more questions. Game over.");
        doneGame();
    }
}

function checkChoice(e) {
        let currentQuestionData = quizData[currentQuestionIndex + 1];
        let correctChoiceIndex = currentQuestionData.correctAns;
        let correctChoiceText = currentQuestionData.answers[correctChoiceIndex];
        let result = document.createElement('p');
        var questionContainer = document.getElementById("questionContainer");
            questionContainer.appendChild(result);

        var correctAnswerCounter = 0;

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
            showQuestion();
    }, 1000);
}

function doneGame() {

}

function showResults() {

}




