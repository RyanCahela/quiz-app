console.log('JS Connected');
// As a user, I should be able to start the quiz
// this function will listen for teh start button to be clicked
function startQuiz(){
  console.log('`startQuiz` ran');
}

// As a user, I should be able to view the questions and answers.
// This function will render the quiz question with answers to select
function renderQuestion(){
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