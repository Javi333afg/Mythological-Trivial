document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-game");
    startButton.addEventListener("click", startGame);

    const answerButtons = document.querySelectorAll(".answer-button");
    answerButtons.forEach(button => {
        button.addEventListener("click", handleAnswer);
    });
});

/**Questions and Answers */
const Questions = [
{
    question: "Who is the king of thinder in norse mythology?",
    answers: ["Thor", "Odin", "Loki", "Freya"],
    correct: "Thor",
},
{
    question: "What a mortal son of god died when seeing his reflection?",
    answers: ["Edipos", "Narcissus", "Teseus", "Cadmus"],
    correct: "Narcissus",
}
{
    question: "What is the name of the god of the sea?",
    answers: ["Poseidon", "Zeus", "Ares", "Hades"],
    correct: "Poseidon",
}
{
    question: "How is the goddess of hunting?",
    answers: ["Hera", "Athena", "Hestia","Artemis"],
    correct: "Artemis",
}
{
    question: "Which mythical monster did Theseus defeat?",
    answers: ["Minotaur", "Cyclops", "Chimera", "Sphinx"],
    correct: "Minotaur",
}
{
    question: "What is the name of the goddess of love?",
    answers: ["Hera", "Athena","Aphrodite", "Artemis"],
    correct: "Aphrodite",
}
{
    question: "Which of these gods is NOT the brother of Ares, the god of war?",
    answers: ["Hermes", "Athena", "Hades", "Dionysus"],
    correct: "Hades",
}
{
    question: "What is the name of the god of the sun?",
    answers: ["Apollo", "Ares", "Zeus", "Hades"],
    correct: "Apollo",
}
{
    question: "Which of these is NOT a Greek god?",
    answers: ["Hades", "Zeus", "Ares", "Hera"],
    correct: "Hera",
}
{
    question: "What is the name of the goddess of wisdom?",
    answers: ["Athena", "Hera", "Aphrodite", "Artemis"],
    correct: "Athena",
}
];

let currentQuestionIndex = 0;
let score = 0;

// Reset variables
function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score").textContent = "Score: ${score}";
    loadQuestion();
}

// Load the current question
function loadQuestion() {
    if (currentQuestionIndex < questions,length) {
        const question = questions[currentQuestionIndex];
        document.getElementById("question").textContent = question.question;

        const buttons = document.querySelectorAll(".answer-button");
        buttons.forEach((button, index) => {
            button.textContent = question.answers[index];
        });
    } else {
        endgame();
    }
    
}

// Handle the answer selection
function handleAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const correctAnswer = questions[currentQuestionIndex].correct;

    if (selectedAnswer === correctAnswer) {
        alert("Very Good! You answer is Correct!");
        score++;
        document.getElementById("score").textContent = "Score: ${score}";
    } else {
        alert("Sorry, that's incorrect. The correct answer is: ${correctAnswer}");
    }
    
    currentQuestionIndex++;
    loadQuestion();
}
