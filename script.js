console.log('JS Connected');

const questionBank = [];


const STORE = [{
    question: "A random question",
    answers: {
        answer1: "answer1",
        answer2: "answer2",
        answer3: "answer3",
        answer4: "answer4",
        correct: this.answer1,
        correctDetail: "more detail about the answer"
    },
    imageUrl: "img/nameofimage.jpg",
    imageAlt: "value for alt tag"
}];
// As a user, I should be able to start the quiz
// this function will listen for teh start button to be clicked
function startQuiz(){
    $('.start-button').on('click', renderQuestion);
  console.log('`startQuiz` ran');
    //listen for answer 
}

function buildQuestion(STORE) {
    let question = STORE[0].question;
    let answer1 = STORE[0].answers.answer1;
    let answer2 = STORE[0].answers.answer2;
    let answer3 = STORE[0].answers.answer3;
    let answer4 = STORE[0].answers.answer4;
    let imageUrl = STORE[0].imageUrl;
    let imageAlt = STORE[0].imageAlt;

    let builtQuestion = $(`<section id="question-view">
            <header role="banner">
                <h1>Push Food Origin Master</h1>
                <h2 class="js-score">Score</h2>
            </header>
            <main role="main">
                <section>
                    <img class="js-question-image" src="${imageUrl}" alt="${imageAlt}">
                    <h5 class="js-question-text">${question}</h5>
                </section>
                <form action="">
                    <button data-answer="1">${answer1}</button>
                    <button data-answer="2">${answer2}</button>
                    <button data-answer="3">${answer3}</button>
                    <button data-answer="4">${answer4}</button>
                </form>
            </main>
        </section>`
    );
    return builtQuestion; 
}

// As a user, I should be able to view the questions and answers.
// This function will render the quiz question with answers to select
function renderQuestion(){
    //grab information from store
    let finishedHtml = buildQuestion(STORE);
    $('.body').html(finishedHtml);

  console.log('`renderQuestion` ran');
    
}

// As a user, I should be able to select an answer.
// this function compares the checked answer to the correct answer for a T/F
function checkAnswer(){
  console.log('`checkAnswer` ran');
}

// As a user, I should be able to find out if that answer was correct.
// this function renders the question result page showing the correct answer 
function showAnswerResult(){
  console.log('showAnswerResult ran');
}

// As a user, I should be able to move to the next question.
// this function listens for the next button to be activated & moves to next 
// question page
function moveToNextQuestion(){
  console.log('`moveToNextQuestion` ran');
}

// As a user, I should be able to view my score at the end.
// this function displays the final score with a restart button to play again
function renderFinalScore(){
  console.log('`renderFinalScore` ran');
}

// As a user, I should have the option of restarting.
// this function listens for the quiz restart button and restarts if needed 
function replayQuiz(){
  console.log('`replayQuiz` ran');
}

// this function runs all functions below to rerender DOM as needed
function foodQuizFunctions(){
  startQuiz();
  renderQuestion();
  checkAnswer();
  showAnswerResult();
  moveToNextQuestion();
  renderFinalScore();
  replayQuiz();
}

$(foodQuizFunctions());