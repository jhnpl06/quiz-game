const quizData = [
  {
    question: "1.What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "2.Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
    
  }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;

function displayQuestion() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const currentQuizData = quizData[currentQuestion];

  questionElement.innerHTML = currentQuizData.question;

  optionsElement.innerHTML = "";
  currentQuizData.options.forEach(option => {
    const button = document.createElement("button");
    button.innerHTML = option;
    button.onclick = () => checkAnswer(option);
    optionsElement.appendChild(button);
  });
}

function checkAnswer(answer) {
  const currentQuizData = quizData[currentQuestion];
  if (answer === currentQuizData.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  const quizContainer = document.querySelector(".quiz-container");
  quizContainer.innerHTML = `<h2 class="ys">Your score: ${score}/2</h2><p class="ty">Thank you for playing our game hope you enjoy it.</p> <a class="back" href="">Back</a>`;
}

function countdown() {
  const timerElement = document.getElementById("time");
  const timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    } else {
      timeLeft--;
      timerElement.textContent = `${timeLeft}s`;
    }
  }, 1000);
}

displayQuestion();
countdown();