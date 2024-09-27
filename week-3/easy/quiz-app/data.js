//  use this quizData in your app.
const quizData = [{
    "question": "Which language runs in a web browser?",
    "a": "Java",
    "b": "C",
    "c": "Python",
    "d": "JavaScript",
    "correct": "d",
},
{
    "question": "What does CSS stand for?",
    "a": "Central Style Sheets",
    "b": "Cascading Style Sheets",
    "c": "Cascading Simple Sheets",
    "d": "Cars SUVs Sailboats",
    "correct": "b",
},
{
    "question": "What does HTML stand for?",
    "a": "Hypertext Markup Language",
    "b": "Hypertext Markdown Language",
    "c": "Hyperloop Machine Language",
    "d": "Helicopters Terminals Motorboats Lamborghini",
    "correct": "a",
},
{
    "question": "What year was JavaScript launched?",
    "a": "1996",
    "b": "1995",
    "c": "1994",
    "d": "none of the above",
    "correct": "b",
},
// you can add more quiz here
]

// Get the HTML elements
const questionElement = document.querySelector("#question");
const optionsElement = document.querySelector("#options");
const submitButton = document.querySelector("#submit");
const resultElement = document.querySelector("#result");
const retakeButton = document.querySelector("#retake");

// Initialize the current question index
let currentQuestionIndex = 0;
let score = 0;

// Function to render the current question
function renderQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Clear the options list
    optionsElement.innerHTML = "";

    // Create the options list
    for (let option in currentQuestion) {
        if (option !== "question" && option !== "correct") {
            const optionElement = document.createElement("li");
            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.name = "option";
            radioInput.id = option;
            const label = document.createElement("label");
            label.textContent = currentQuestion[option];
            label.htmlFor = option;
      
            optionElement.appendChild(radioInput);
            optionElement.appendChild(label);
            optionsElement.appendChild(optionElement);
        }
    }
}

// Function to check the answer
function checkAnswer() {
    const currentQuestion = quizData[currentQuestionIndex];
    const selectedOption = document.querySelector("input[name='option']:checked");
    if (selectedOption) {
        optionSelected = true;
        const userAnswer = selectedOption.id;
        if (userAnswer === currentQuestion.correct) {
            resultElement.textContent = "Correct!";
            resultElement.style.color = "green";
            score++;
        } else {
            resultElement.textContent = `Incorrect. The correct answer is ${currentQuestion.correct}.`;
            resultElement.style.color = "red";
        }
    } else {
        resultElement.textContent = "Please select an option.";
        resultElement.style.color = "orange";
    }
}

// Function to navigate to the next question
function nextQuestion() {
    if (optionSelected) {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            renderQuestion();
            optionSelected = false;
        } else {
            resultElement.textContent = `Quiz completed! Your score is ${score} out of ${quizData.length}.`;
            retakeButton.style.display = "block";
        }
    }
}

// Function to retake the quiz
function retakeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.textContent = "";
    retakeButton.style.display = "center";
    renderQuestion();
}

// Render the first question
renderQuestion();
  
// Add event listeners
submitButton.addEventListener("click", function() {
    checkAnswer();
    nextQuestion();
});
retakeButton.addEventListener("click", retakeQuiz);