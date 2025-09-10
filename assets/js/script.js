document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("start-game");
    startButton.addEventListener("click", startGame);

    const answerButtons = document.querySelectorAll(".answer-button");
    answerButtons.forEach(button => {
        button.addEventListener("click", handleAnswer);
        button.disabled = true; 
    });
});

/**====
 * Questions Array
 * Stores all quiz questions, answer options and the correct answer
 ===**/

const questions = [
{
    question: "Who is the king of thunder in norse mythology?",
    answers: ["Thor", "Odin", "Loki", "Freya"],
    correct: "Thor",
},
{
    question: "What a mortal son of god died when seeing his reflection?",
    answers: ["Edipos", "Narcissus", "Teseus", "Cadmus"],
    correct: "Narcissus",
},
{
    question: "What is the name of the god of the sea?",
    answers: ["Poseidon", "Zeus", "Ares", "Hades"],
    correct: "Poseidon",
},
{
    question: "How is the goddess of hunting?",
    answers: ["Hera", "Athena", "Hestia","Artemis"],
    correct: "Artemis",
},
{
    question: "Which mythical monster did Theseus defeat?",
    answers: ["Minotaur", "Cyclops", "Chimera", "Sphinx"],
    correct: "Minotaur",
},
{
    question: "What is the name of the goddess of love?",
    answers: ["Hera", "Athena","Aphrodite", "Artemis"],
    correct: "Aphrodite",
},
{
    question: "Which of these gods is NOT the brother of Ares (the god of war)?",
    answers: ["Hermes", "Athena", "Hades", "Dionysus"],
    correct: "Hades",
},
{
    question: "What is the name of the god of the sun?",
    answers: ["Apollo", "Ares", "Zeus", "Hades"],
    correct: "Apollo",
},
{
    question: "Which of these is NOT a Greek god?",
    answers: ["Hades", "Zeus", "Ares", "Ra"],
    correct: "Ra",
},
{
    question: "What is the name of the goddess of wisdom?",
    answers: ["Athena", "Hera", "Aphrodite", "Artemis"],
    correct: "Athena",
}
];

let currentQuestionIndex = 0;
let score = 0;
let gameActive = false;

/** =====
 * Start Game
 * Resets variables, enables buttons, loads first question
 ====*/
function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    gameActive = true;
    document.getElementById("score").textContent = `Score: ${score}`;
    loadQuestion();
document.querySelectorAll(".answer-button").forEach((b) => (b.disabled = false));
    loadQuestion();
}

// Load the current question
function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById("question").textContent = question.question;

        const buttons = document.querySelectorAll(".answer-button");
        buttons.forEach((button, index) => {
            button.textContent = question.answers[index];
            button.dataset.correct = question.answers[index] === question.correct ? "true" : "false";
        });
    } else {
        endgame();
    }
}

// Handle the answer selection
function handleAnswer(event) {
    if (!gameActive) return;

    const isCorrect = event.target.dataset.correct === "true";
    if (isCorrect) {
        alert("Very good! Your answer is correct!");
        score++;
        document.getElementById("score").textContent = `Score: ${score}`;
    } else {
        const correctAnswer = questions[currentQuestionIndex].correct;
        alert(`Sorry, that's incorrect. The correct answer is: ${correctAnswer}`);
    }

    currentQuestionIndex++;
    loadQuestion();
}

// End the game function
function endgame() {
    gameActive = false;
    alert(`Game Over! Your final score is: ${score}`);
    document.getElementById("question").textContent = "Press Start to play again!";
    const buttons = document.querySelectorAll(".answer-button");
    buttons.forEach((button) => {
        button.textContent = "";
        button.disabled = true;
        delete button.dataset.correct;
    });
}