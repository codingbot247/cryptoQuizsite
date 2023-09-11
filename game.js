function game(){
//selecting the question 
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
    
    question: "What are Smart wallets?",
    option1:"m",
    option2:"n",
    option3:"o",
    option4:"p",
    answer:1
},
   {
    question: "What is the difference between a testnet and a mainnet ?",
    option1:"m",
    option2:"n",
    option3:"o",
    option4:"p",
    answer:1

},

   {

    question: "Which of the following are a testnet?",
    option1:"m",
    option2:"n",
    option3:"o",
    option4:"p",
    answer:1
}

,

   {

    question: "How do you put a project on chain?",
    option1:"m",
    option2:"n",
    option3:"o",
    option4:"p",
    answer:1
}
,

   {

    question: "What are rollups?",
    option1:"m",
    option2:"n",
    option3:"o",
    option4:"p",
    answer:1
}

,

   {

    question: "What is a chain fork?",
    option1:"m",
    option2:"n",
    option3:"o",
    option4:"p",
    answer:1
}

,

   {

    question: "What does BIP stand for?",
    option1:"m",
    option2:"n",
    option3:"o",
    option4:"p",
    answer:1
}

,

   {

    question: "How are onchain transactions different from offchain transactions?",
    option1:"m",
    option2:"n",
    option3:"o",
    option4:"p",
    answer:1
}

,

   {

    question: "Which of the below is an off chain transaction?",
    option1:"m",
    option2:"n",
    option3:"o",
    option4:"p",
    answer:1
}

,

   {

    question: "What is a block in a blockchain?",
    option1:"m",
    option2:"n",
    option3:"o",
    option4:"p",
    answer:1
}

];

const correct_answer = 10;
const max_questions = 10;

 InitGame = () => {

    questionCounter = 1; // To keep record of the number of questions
    score = 0;
    availableQuestions = [...questions]; // To keep track of the total number of available questions
    getNewQuestion();
};


 getNewQuestion = () => {


    // just in case you have hardcoded more than 10 but you want the user to answer only 10

    if (availableQuestions.length === 0 ||questionCounter >= max_questions){
        return window.location.assign("/end.html");
    }
// To update and show the current number of the question we will picking up the class 
    document.querySelector(".hud-text").innerHTML = questionCounter++;


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

    //To mark the answer as correct or incorrect 
    
    const classtoapply = selectedAnswer == currentquestion.answer ? 'correct': 'incorrect' 

    selectedChoice.parentElement.classList.add(classtoapply);

    //Updating the score 

    if (selectedAnswer==currentquestion.answer){
        score++;
        document.querySelector("#score").innerHTML= score;
    }
    
    setTimeout( ()=> {
        selectedChoice.parentElement.classList.remove(classtoapply);
        getNewQuestion();
    }, 1000) 
   

   });
 });


 InitGame();
}

game();



 
