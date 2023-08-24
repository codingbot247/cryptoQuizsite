
const question = document.getElementById("question");
//Take the choices and then convert them into an array to perform different actions on them
const choices = Array.from(document.getElementsByClassName("choice-text"));
let currentquestion = {};
// to add a delay for the next question
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [

   { 
    
    question: "x?",
    option1:"m",
    option2:"n",
    option3:"o",
    option4:"p",
    answer:1
},
   {
    question: "x?",
    option1:"m",
    option2:"n",
    option3:"o",
    option4:"p",
    answer:1

},

   {

    question: "x?",
    option1:"m",
    option2:"n",
    option3:"o",
    option4:"p",
    answer:1
}

];

const correct_answer = 10;
const max_questions = 3;

 InitGame = () => {

    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};


 getNewQuestion = () => {

    questionCounter++;
   const questionIndex= Math.floor(Math.random() * availableQuestions.length);
    currentquestion = availableQuestions[questionIndex];
    question.innerText = currentquestion.question; 

choices.forEach( choice => {
const number = choice.dataset["number"];
choice.innerText = currentquestion["choice"+number];


});

availableQuestions.splice(questionIndex, 1);
 acceptingAnswers = true;

 };

 choices.forEach( choice=> {
   choice.addEventListener("click", e => {
    if(!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    console.log(selectedAnswer);
    getNewQuestion();
   });
 });

 InitGame();