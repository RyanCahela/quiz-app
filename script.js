console.log('JS Connected');

const questionBank = [
    {
        question: "Where did Perogies come from?",
        answers: {
            answer1: {text: "Russia",
                    isCorrect: false
                    },
            answer2: {text: "Poland",
                    isCorrect: false
                    },
            answer3: {text: "Ukraine",
                    isCorrect: true
                    },
            answer4: {text: "Hungary",
                    isCorrect: false
                    },
        },
        answerDetail: `(Ukraine) Some contend that pierogi were brought to Poland by Saint Hyacinth of Poland, 
        who brought them back from Kiev (the center of Kievan Rus', nowadays the capital of Ukraine).`,
        imageUrl: `img/perogi2.jpg`,
        imageAlt: `white, round plate with seven perogi with light browning.`,
    },
    {
        question: "Where did cheeseburgers come from?",
        answers: {
            answer1: {text: "Germany",
                    isCorrect: false
                    },
            answer2: {text: "United States",
                    isCorrect: true
                    },
            answer3: {text: "Canada",
                    isCorrect: false
                    },
            answer4: {text: "Mexico",
                    isCorrect: false
                    },
        },
        answerDetail: `(US) Lionel Sternberger is reputed to have introduced the 
        cheeseburger in 1926 at the age of 16 when he was working as a 
        fry cook at his father's Pasadena, California sandwich shop, "The Rite Spot",
         and experimentally dropped a slab of American cheese on a sizzling hamburger.`,
        imageUrl: `img/cheeseburger1.jpg`,
        imageAlt: `cheeseburger with a sesame seed bun, lettuce, tomato, and onion.`,
    },
    {
        question: "Who invented Tofu?",
        answers: {
            answer1: {text: "Japan",
                    isCorrect: false
                    },
            answer2: {text: "Italy",
                    isCorrect: false
                    },
            answer3: {text: "1960's Hippies",
                    isCorrect: false
                    },
            answer4: {text: "China",
                    isCorrect: true
                    },
        },
        answerDetail: `(China) Tofu has been consumed for more than 2000 years in China.`,
        imageUrl: `img/tofu2.jpg`,
        imageAlt: `a block of solid tofu on a wooden cutting boar. A small pile of greens and a small pile 
        of cubed tofu are also on the cutting board.`,
    },
    {
        question: "Where was the first pizza made according to pizza lore?",
        answers: {
            answer1: {text: "Italy",
                    isCorrect: true
                    },
            answer2: {text: "New York, USA",
                    isCorrect: false
                    },
            answer3: {text: "Greece",
                    isCorrect: false
                    },
            answer4: {text: "Japan",
                    isCorrect: false
                    },
        },
        answerDetail: `An often recounted story holds that on 11 June 1889, to honour the Queen consort 
        of Italy, Margherita of Savoy, the Neapolitan pizza maker Raffaele Esposito created the "Pizza Margherita"
        , a pizza garnished with tomatoes, mozzarella, and basil, to represent the national colours of Italy as 
        on the Italian flag.`,
        imageUrl: `img/pizza1.jpg`,
        imageAlt: `A large New York style cheese pizza on a wooden cutting board, one slice removed.`,
    },
    {
        question: "Who started making the donuts in their round with a hole form?",
        answers: {
            answer1: {text: "France",
                    isCorrect: false
                    },
            answer2: {text: "Germany",
                    isCorrect: false
                    },
            answer3: {text: "England",
                    isCorrect: false
                    },
            answer4: {text: "United States",
                    isCorrect: true
                    },
        },
        answerDetail: `(US) Hanson Gregory, an American, claimed to have invented the ring-shaped doughnut 
        in 1847 aboard a lime-trading ship when he was 16 years old. Gregory was dissatisfied with the 
        greasiness of doughnuts twisted into various shapes and with the raw center of regular doughnuts.`,
        imageUrl: `img/donuts2.jpg`,
        imageAlt: `A variety of donuts on a wire cooling rack. Some have glazes or frosting, while others have crunchy bits.`,
    },
    {
        question: "Cupcakes are not just for elementary school-but where did they first appear?",
        answers: {
            answer1: {text: "United States",
                    isCorrect: true
                    },
            answer2: {text: "England",
                    isCorrect: false
                    },
            answer3: {text: "Finland",
                    isCorrect: false
                    },
            answer4: {text: "Scotland",
                    isCorrect: false
                    },
        },
        answerDetail: `(US) The earliest extant description of what is now often called a cupcake was in 1796,
        when a recipe for "a light cake to bake in small cups" was written in American Cookery by Amelia Simmons`,
        imageUrl: `img/cupcake1.jpg`,
        imageAlt: `a yellow cupcake cunt in half on a plate. The frosting is white with tinges of blue and spilling from the center are sprinkles and candy pieces`,
    },
    {
        question: "Curry is a favorite in many countries but what country started the trend?",
        answers: {
            answer1: {text: "England",
                    isCorrect: false
                    },
            answer2: {text: "India",
                    isCorrect: true
                    },
            answer3: {text: "Russia",
                    isCorrect: false
                    },
            answer4: {text: "Canada",
                    isCorrect: false
                    },
        },
        answerDetail: `(India) Curry (plural curries) is a variety of dishes originating in the Indian subcontinent 
        that use a complex combination of spices or herbs, usually including ground turmeric, cumin, coriander,
         ginger, and fresh or dried chilies.`,
        imageUrl: `img/curry3.jpg`,
        imageAlt: `Red curried chicken with green vegtable in a ceramic, two handled pot.`,
    },
    {
        question: "Nothing beats Scotch Eggs as bar food but who came up with it?",
        answers: {
            answer1: {text: "Scotland",
                    isCorrect: false
                    },
            answer2: {text: "Ireland",
                    isCorrect: false
                    },
            answer3: {text: "England",
                    isCorrect: true
                    },
            answer4: {text: "Canada",
                    isCorrect: false
                    },
        },
        answerDetail: `(England) The London department store Fortnum & Mason claims to have invented Scotch eggs in 
        1851 but the name for the snack was supposedly derived from a nickname used by Londoners who lived 
        around Wellington Barracks after Officers of the Scots Guards stationed there developed a taste for the snack`,
        imageUrl: `img/scotcheggs2.jpg`,
        imageAlt: `Three Scotch egg halvs yolk up and one half down on a wooden cutting board with a cup 
        of mustard. Scotch eggs are medium hard eggs wrapped in sausage, rolled in breadcrumbs and fried.`,
    },
    {
        question: "Hamburgers might surprise you-who enjoyed the first?",
        answers: {
            answer1: {text: "United States",
                    isCorrect: true
                    },
            answer2: {text: "Germany",
                    isCorrect: false
                    },
            answer3: {text: "Scotland",
                    isCorrect: false
                    },
            answer4: {text: "Sweden",
                    isCorrect: false
                    },
        },
        answerDetail: `(US) The term hamburger originally derives from Hamburg, Germany's s
        econd-largest city but the actual sandwich may have been done first in New Haven CT, 
        in 1900 Louis Lassen, a Danish immigrant, owner of Louis' Lunch.`,
        imageUrl: `img/hamburger2.jpg`,
        imageAlt: `grilled beef patty on a sesame seed bun with ketchup and pickles.`,
    },
    {
        question: "Mix your soy and Wasabi-who brought us Sushi?",
        answers: {
            answer1: {text: "South East Asia",
                    isCorrect: true
                    },
            answer2: {text: "India",
                    isCorrect: false
                    },
            answer3: {text: "South America",
                    isCorrect: false
                    },
            answer4: {text: "Norway",
                    isCorrect: false
                    },
        },
        answerDetail: `(South East Asia) The earliest form of sushi, a dish today known as narezushi, 
        has its probable origin with paddy fields along the Mekong river in Southeast Asia. 
        The prototypical narezushi is made by lacto-fermenting fish with salt and rice in
         order to control putrefaction.`,
        imageUrl: `img/sushi3.jpg`,
        imageAlt: `An oval platter with sliced nori wrapped sushi rolls stacked.Chopsticks lay across the platter.`,
    }
]

const STORE = {
    question: "",
    answers: {},
    answerDetail: ``,
    imageUrl: "",
    imageAlt: "",
    score: 0,
    answerIsCorrect: null,
    appState: "",
    resultMessage: null,
    currentQuestionNum: 0,
    getCorrect: function() {
        for(let answer in this.answers) {
            if(this.answers[answer].isCorrect) {
                return this.answers[answer].text;
            }
        } 
    },
    getAnswers: function() {
        return this.answers;
    },
    setAnswers: function(obj) {
        this.answers.answer1 = obj.answer1;
        this.answers.answer2 = obj.answer2;
        this.answers.answer3 = obj.answer3;
        this.answers.answer4 = obj.answer4;
    },
    getQuestion: function() {
        return this.question;
    },
    setQuestion: function(newQuestion) {
        this.question = newQuestion;
    },
    setAnswerDetail: function(newDetail) {
        this.answerDetail = newDetail;
    },
    getAnswerDetail: function() {
        return this.answerDetail;
    },
    getImageUrl: function() {
        return this.imageUrl;
    },
    setImageUrl: function(newUrl) {
        this.imageUrl = newUrl;
    },
    getImageAlt: function() {
        return this.imageAlt;
    },
    setImageAlt: function(newAltText) {
        this.imageAlt = newAltText;
    },
    getScore: function() {
        return this.score;
    },
    increaseScore: function(newScore) {
        this.score++;
    },
    resetScore: function() {
        this.score = 0;
    },
    getAnswerIsCorrect: function() {
        return this.answerIsCorrect;
    },
    setAnswerIsCorrect: function(newValue) {
        this.answerIsCorrect  = newValue;
    },
    getAppState: function() {
        return this.appState;
    },
    setAppState: function(newState) {
        this.appState = newState;
    },
    getResultMessage: function() {
        return this.resultMessage;
    },
    setResultMessage: function(newMessage) {
        this.resultMessage = newMessage; 
    },
    getCurrentQuestionNum: function() {
        return this.currentQuestionNum;
    },
    increaseCurrentQuesitonNum: function() {
        this.currentQuestionNum++;
    },
    resetCurrentQuestionNum: function() {
        this.currentQuestionNum = 0;
    },
  }


function loadQuestion(bankIndex) {
    bankObj = questionBank[bankIndex];
    STORE.setQuestion(bankObj.question);
    STORE.setAnswers(bankObj.answers);
    STORE.setAnswerDetail(bankObj.answerDetail);
    STORE.setImageUrl(bankObj.imageUrl);
    STORE.setImageAlt(bankObj.imageAlt);
}


// As a user, I should be able to start the quiz
// this function will listen for teh start button to be clicked
function startQuiz(){
    STORE.setAppState('start-view');
    loadQuestion(STORE.currentQuestionNum);
    renderView(STORE.getAppState());
    $startButton = $('.start-button');

    $startButton.on('click', function() {
        STORE.setAppState("question-view");
        renderView(STORE.getAppState());
    });
     console.log('startQuiz ran');
}

function buildStartView() {
    return $(`<section id="start-view" class="">
    <header role="banner" class="header">
        <h1 class="heading">Food Origin Master</h1>
    </header>
    <main role="main" class="container main">
        <h3 class="text-center">Are YOU a food origin master?</h3>
        <button class="btn-red start-button">Start Quiz</button>
    </main>
</section>`);
}

function buildQuestionView(STORE) {
    let question = STORE.getQuestion();
    let answers = STORE.getAnswers();
    let answer1 = answers.answer1.text;
    let answer2 = answers.answer2.text;
    let answer3 = answers.answer3.text;
    let answer4 = answers.answer4.text;
    let imageUrl = STORE.getImageUrl();
    let imageAlt = STORE.getImageAlt();

    let builtQuestionView = $(`<section id="question-view" class="">
    <header role="banner" class="header">
        <h1 class="heading">Food Origin Master</h1>
        <h2 class="question-number">${STORE.getCurrentQuestionNum() + 1} of 10</h2>
        <h2 class="score">Score: <span class="score-number">${STORE.getScore()}</span></h2>
    </header>
        <main role="main" class="container">
            <section class="question">
                <img class="js-question-image question-image" src="${imageUrl}" alt="${imageAlt}">
                <h5 class="js-question-text question-text">${question}</h5>
            </section>
            <form class="js-answer-form answer-form" action="">
                <label for="${answer1}" class="hide">${answer1}</label>
                <input class="btn-red" type="button" name="${answer1}" data-answer="1" value="${answer1}"></input>

                <label for="${answer2}" class="hide">${answer2}</label>
                <input class="btn-red" type="button" name="${answer2}" data-answer="2" value="${answer2}"></input>

                <label for="${answer3}" class="hide">${answer3}</label>
                <input class="btn-red" type="button" name="${answer3}" data-answer="3" value="${answer3}"></input>

                <label for="${answer4}" class="hide">${answer4}</label>
                <input class="btn-red" type="button" name="${answer4}" data-answer="4" value="${answer4}"></input>
            </form>
        </main>
    </section>`
    );
    return builtQuestionView; 
}

function buildResultView(STORE) {
    let imageUrl = STORE.getImageUrl();
    let imageAlt = STORE.getImageAlt();
    let correctDetail = STORE.getAnswerDetail();
    let resultMessage = STORE.getResultMessage();
    let filterAmount = STORE.getAnswerIsCorrect() ? 0 : 1;

    let builtHtml = $(`<section id="results-view" class="">
    <div class="shadow">
        <main role="main" class="lightbox">
            <img style="filter:grayscale(${filterAmount})" src="${imageUrl}" alt="${imageAlt}">
            <h5 class="result">${resultMessage}</h5>
            <p class="expanded-answer">${correctDetail}</p>
            <button class="btn-red next-question-btn" aria-label="next question">Next Question</button>
        </main>
    </div>
</section>`);

    return builtHtml;

}

function buildEndView(STORE) {
    let score = STORE.getScore();
    let didWin = STORE.getScore() >= 7;
    let image = didWin ? "img/you-win.gif" : "img/you-lose.gif";
    let imageAlt = didWin ? "dancing captain picard" : "willy wonka you lose";
    let resultText = didWin ? "You won! Congratulations" : "You lose sir! Good day!"
    


    return $(`<section id="end-view" class="">
    <header role="banner" class="header">
        <h1>Food Origin Master</h1>
    </header>
    <main role="main" class="container">
        <h3 class="score">Score: ${score}/10</h3>
        <img class="result-image" src="${image}" alt="${imageAlt}">
        <p class="result-text">${resultText}</p>
        <button class="js-retake-quiz btn-red" aria-label="retake quiz">Retake Quiz</button>
    </main>
</section>`);   
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

    if(appState === "result-view") {
        let finishedHtml = buildResultView(STORE);
        $('.body').html(finishedHtml);
    }

    if(appState === "end-view") {
        let finishedHtml = buildEndView(STORE);
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
    return answerToEvaluate === STORE.getCorrect();
    }

  $('.js-answer-form').on('click', function(event) {
    let answerText;
    event.preventDefault();
    console.log('`checkAnswer` ran');
    //grab inner text of button that was clicked
    answerText = event.target.value;

    //compare button text to correct: in STORE
    STORE.setAnswerIsCorrect(evaluateAnswer(answerText));
    showAnswerResult();
  });
  console.log('`checkAnswer` ran');
}

// As a user, I should be able to find out if that answer was correct.
// this function renders the question result page showing the correct answer 
function showAnswerResult(){
  //determine if answer was correct or not
  if(STORE.getAnswerIsCorrect()) {
      //assign result sentence "correct" or "not correct"
      STORE.setResultMessage("Correct!");
      //adjust score accordingly
      STORE.increaseScore();
  } else {
      //assign result sentence "correct" or "not correct"
      STORE.setResultMessage("Nope");
  }

  //render resultspage
  STORE.setAppState('result-view');
  renderView(STORE.getAppState());

  moveToNextQuestion();
  console.log('showAnswerResult ran');
}

// As a user, I should be able to move to the next question.
// this function listens for the next button to be activated & moves to next 
// question page
function moveToNextQuestion(){
    STORE.increaseCurrentQuesitonNum();
    if(STORE.getCurrentQuestionNum() <= 9) {
        loadQuestion(STORE.getCurrentQuestionNum());
    }
     //detect click on next question button
    $('.next-question-btn').on('click', function(event) {
        if(STORE.getCurrentQuestionNum() <= 9) {
            STORE.setAppState('question-view');
            renderView(STORE.getAppState());
        }
        
        if(STORE.getCurrentQuestionNum() === 10) {
            showFinalScore()
        }
        console.log('next-quesiton clicked');
    
    });
  console.log('`moveToNextQuestion` ran');
}

// As a user, I should be able to view my score at the end.
// this function displays the final score with a restart button to play again
function showFinalScore(){
    STORE.setAppState('end-view');
    renderView(STORE.getAppState());
    replayQuiz();
    console.log('`showFinalScore` ran');
}

// As a user, I should have the option of restarting.
// this function listens for the quiz restart button and restarts if needed 
function replayQuiz(){
    $('.js-retake-quiz').on('click',function(event){
        STORE.resetCurrentQuestionNum();
        STORE.resetScore();
        startQuiz();
    });
  console.log('`replayQuiz` ran');
}

// this function runs all functions below to rerender DOM as needed
function foodQuizFunctions(){
  startQuiz();
}

$(foodQuizFunctions());