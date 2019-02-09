console.log('JS Connected');

const questionBank = [
    {
        question: "Where did Perogies come from?",
        answers: {
            answer1: "Russia",
            answer2: "Poland",
            answer3: "Ukraine",
            answer4: "Hungary",
            getCorrect: function() {
                return this.answer3;
            },
            correctDetail: "Others contend that pierogi were brought to Poland by Saint Hyacinth of Poland, who brought them back from Kiev (the center of Kievan Rus', nowadays the capital of Ukraine)."
        },
        imageUrl: "img/perogi2.jpg",
        imageAlt: "white, round plate with seven perogi with light browning."
      },
      {
        question: "Where did cheeseburgers come from>",
        answers: {
            answer1: "Germany",
            answer2: "United States",
            answer3: "Canada",
            answer4: "Mexico",
            getCorrect:  function() {
                return this.answer2;
            },
            correctDetail: `Lionel Sternberger is reputed to have introduced the 
            cheeseburger in 1926 at the age of 16 when he was working as a 
            fry cook at his father's Pasadena, California sandwich shop, "The Rite Spot",
             and experimentally dropped a slab of American cheese on a sizzling hamburger.`
        },
        imageUrl: "img/cheeseburger1.jpg",
        imageAlt: "cheeseburger with a sesame seed bun, lettuce, tomato, and onion."
      }

];

let score;
let answerIsCorrect = true;
let appState = "start-view";
let resultMessage;
let currentQuestion = 0;

const STORE = [{
    question: "Where did Perogies come from?",
    answers: {
        answer1: "Russia",
        answer2: "Poland",
        answer3: "Ukraine",
        answer4: "Hungary",
        getCorrect: function() {
            return this.answer3;
        },
        correctDetail: "Others contend that pierogi were brought to Poland by Saint Hyacinth of Poland, who brought them back from Kiev (the center of Kievan Rus', nowadays the capital of Ukraine)."
    },
    imageUrl: "img/perogi2.jpg",
    imageAlt: "white, round plate with seven perogi with light browning."
  }];
// As a user, I should be able to start the quiz
// this function will listen for teh start button to be clicked
function startQuiz(){
    renderView('start-view');
    $('.start-button').on('click', function() {
        appState = "question-view";
        renderView(appState);
    });
  console.log('`startQuiz` ran');
    //listen for answer 
}

function buildStartView() {
    return $(`<section id="start-view" class="">
    <header role="banner">
        <h1>Push Food Origin Master</h1>
    </header>
    <main role="main">
        <h3>Are YOU a Food Origin Master?</h3>
        <button class="start-button">Start Quiz</button>
    </main>
</section>`);
}

function buildQuestionView(STORE) {
    let question = STORE[0].question;
    let answer1 = STORE[0].answers.answer1;
    let answer2 = STORE[0].answers.answer2;
    let answer3 = STORE[0].answers.answer3;
    let answer4 = STORE[0].answers.answer4;
    let imageUrl = STORE[0].imageUrl;
    let imageAlt = STORE[0].imageAlt;

    let builtQuestionView = $(`<section id="question-view">
            <header role="banner">
                <h1>Push Food Origin Master</h1>
                <h2 class="js-score">Score</h2>
            </header>
            <main role="main">
                <section>
                    <img class="js-question-image" src="${imageUrl}" alt="${imageAlt}">
                    <h5 class="js-question-text">${question}</h5>
                </section>
                <form class="js-answer-form" action="">
                    <button type="button" data-answer="1">${answer1}</button>
                    <button type="button" data-answer="2">${answer2}</button>
                    <button type="button" data-answer="3">${answer3}</button>
                    <button type="button" data-answer="4">${answer4}</button>
                </form>
            </main>
        </section>`
    );
    return builtQuestionView; 
}

function buildResultView(STORE) {
    let imageUrl = STORE[0].imageUrl;
    let imageAlt = STORE[0].imageAlt;

    let builtHtml = $(`<section id="results-view" class="">
    <img src="${imageUrl}" alt="${imageAlt}">
    <h1>${resultMessage}</h1>
    <button class="next-question-btn">Next Question</button>
</section>`);

    return builtHtml;

}

// As a user, I should be able to view the questions and answers.
// This function will render the quiz question with answers to select
function renderView(appState){
    //grab information from store

    if(appState === "start-view") {
        let finishedHtml = buildStartView(STORE);
        $('.body').html(finishedHtml);
    }

    if(appState === "question-view") {
        let finishedHtml = buildQuestionView(STORE);
        $('.body').html(finishedHtml);
        checkAnswer();
    }

    if(appState === "results-view") {
        let finishedHtml = buildResultView(STORE);
        $('.body').html(finishedHtml);
    }

  console.log('`renderView` ran');
    
}

// As a user, I should be able to select an answer.
// this function compares the checked answer to the correct answer for a T/F
function checkAnswer(){
  //listen for click on anwser button
  let answerText;

  function evaluateAnswer(answerToEvaluate) {
    return answerToEvaluate === STORE[0].answers.getCorrect();
    }

  $('.js-answer-form').on('click', function(event) {
    event.preventDefault();
    console.log('`checkAnswer` ran');
    //grab inner text of button that was clicked
    answerText = event.target.textContent;

    //compare button text to correct: in STORE
    answerIsCorrect = evaluateAnswer(answerText);
    showAnswerResult();
  });
}

// As a user, I should be able to find out if that answer was correct.
// this function renders the question result page showing the correct answer 
function showAnswerResult(){
  console.log('showAnswerResult ran');
  //determine if answer was correct or not
  if(answerIsCorrect) {
      //assign result sentence "correct" or "not correct"
      resultMessage = "Yaaay! You got it right!";
      //adjust score accordingly
      score++;
  } else {
      //assign result sentence "correct" or "not correct"
      resultMessage = "Awww, you got it wrong";
  }

  //render resultspage
  appState = "results-view";
  renderView(appState);
  moveToNextQuestion();
}

// As a user, I should be able to move to the next question.
// this function listens for the next button to be activated & moves to next 
// question page
function moveToNextQuestion(){
     //detect click on next question button
    $('.next-question-btn').on('click', function(event) {
        currentQuestion++
        STORE.pop();
        STORE.push(questionBank[currentQuestion]);
        console.log(STORE);
        appState = "question-view";
        renderView(appState);
    });
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
}

$(foodQuizFunctions());