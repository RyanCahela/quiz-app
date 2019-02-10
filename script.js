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
            correctDetail: `Others contend that pierogi were brought to Poland by Saint Hyacinth of Poland, 
            who brought them back from Kiev (the center of Kievan Rus', nowadays the capital of Ukraine).`
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
      },
      {
        question: "Who invented Tofu?",
        answers: {
            answer1: "China",
            answer2: "Italy",
            answer3: "1960's hippies",
            answer4: "Iceland",
            getCorrect:  function() {
                return this.answer1;
            },
            correctDetail: "Tofu has been consumed for more than 2000 years in China"
        },
        imageUrl: "img/tofu2.jpg",
        imageAlt: `a block of solid tofu on a wooden cutting boar. A small pile of greens and a small pile 
        of cubed tofu are also on the cutting board.`
      },
      {
        question: "Where was the first pizza made according to pizza lore?",
        answers: {
            answer1: "Italy",
            answer2: "New York, USA",
            answer3: "Greece",
            answer4: "Japan",
            getCorrect:  function() {
                return this.answer1;
            },
            correctDetail: `An often recounted story holds that on 11 June 1889, to honour the Queen consort 
            of Italy, Margherita of Savoy, the Neapolitan pizza maker Raffaele Esposito created the "Pizza Margherita"
            , a pizza garnished with tomatoes, mozzarella, and basil, to represent the national colours of Italy as 
            on the Italian flag.`
        },
        imageUrl: "img/pizza1.jpg",
        imageAlt: "A large New York style cheese pizza on a wooden cutting board, one slice removed."
      },
      {
        question: "Who started making the donuts in their round with a hole form?",
        answers: {
            answer1: "United States",
            answer2: "Germany",
            answer3: "England",
            answer4: "Iran",
            getCorrect:  function() {
                return this.answer1;
            },
            correctDetail: `Hanson Gregory, an American, claimed to have invented the ring-shaped doughnut 
            in 1847 aboard a lime-trading ship when he was 16 years old. Gregory was dissatisfied with the 
            greasiness of doughnuts twisted into various shapes and with the raw center of regular doughnuts.`
        },
        imageUrl: "img/donuts2.jpg",
        imageAlt: "A variety of donuts on a wire cooling rack. Some have glazes or frosting, while others have crunchy bits."
      },
      {
        question: "Cupcakes are not just for elementary school-but where did they first appear?",
        answers: {
            answer1: "United States",
            answer2: "England",
            answer3: "Finland",
            answer4: "Scotland",
            getCorrect:  function() {
                return this.answer1;
            },
            correctDetail: `The earliest extant description of what is now often called a cupcake was in 1796,
             when a recipe for "a light cake to bake in small cups" was written in American Cookery by Amelia Simmons`
        },
        imageUrl: "img/cupcake1.jpg",
        imageAlt: "a yellow cupcake cunt in half on a plate. The frosting is white with tinges of blue and spilling from the center are sprinkles and candy pieces"
      },
      {
        question: "Curry is a favorite in many countries but what country started the trend?",
        answers: {
            answer1: "India",
            answer2: "England",
            answer3: "Russia",
            answer4: "Canada",
            getCorrect:  function() {
                return this.answer1;
            },
            correctDetail: `Curry (plural curries) is a variety of dishes originating in the Indian subcontinent 
            that use a complex combination of spices or herbs, usually including ground turmeric, cumin, coriander,
             ginger, and fresh or dried chilies.`
            },
        imageUrl: "img/curry3.jpg",
        imageAlt: "Red curried chicken with green vegtable in a ceramic, two handled pot."
      },
      {
        question: "Nothing beats Scotch Eggs as bar food but who came up with it?",
        answers: {
            answer1: "England",
            answer2: "Ireland",
            answer3: "Scotland",
            answer4: "Canada",
            getCorrect:  function() {
                return this.answer1;
            },
            correctDetail: `The London department store Fortnum & Mason claims to have invented Scotch eggs in 
            1851 but the name for the snack was supposedly derived from a nickname used by Londoners who lived 
            around Wellington Barracks after Officers of the Scots Guards stationed there developed a taste for the snack`
        },
        imageUrl: "img/scotcheggs2.jpg",
        imageAlt: `Three Scotch egg halvs yolk up and one half down on a wooden cutting board with a cup 
        of mustard. Scotch eggs are medium hard eggs wrapped in sausage, rolled in breadcrumbs and fried.`
      },
      {
        question: "Hamburgers might surprise you-who enjoyed the first?",
        answers: {
            answer1: "United States",
            answer2: "Germany",
            answer3: "Scotland",
            answer4: "Sweden",
            getCorrect:  function() {
                return this.answer1;
            },
            correctDetail: `The term hamburger originally derives from Hamburg,[1] Germany's s
            econd-largest city but the actual sandwich may have been done first in New Haven CT, 
            in 1900 Louis Lassen, a Danish immigrant, owner of Louis' Lunch.`
        },
        imageUrl: "img/hamburger2.jpg",
        imageAlt: "grilled beef patty on e sesame seed bun with ketchup and pickles."
      },
      {
        question: "Mix your soy and Wasabi-who brought us Sushi?",
        answers: {
            answer1: "South East Asia",
            answer2: "India",
            answer3: "South America",
            answer4: "Norway",
            getCorrect:  function() {
                return this.answer1;
            },
            correctDetail: `The earliest form of sushi, a dish today known as narezushi, 
            has its probable origin with paddy fields along the Mekong river in Southeast Asia. 
            The prototypical narezushi is made by lacto-fermenting fish with salt and rice in
             order to control putrefaction.( Southeast Asia)`
        },
        imageUrl: "img/sushi3.jpg",
        imageAlt: "An oval platter with sliced nori wrapped sushi rolls stacked.Chopsticks lay across the platter."
      }

];


let score
let answerIsCorrect = true;
let appState = "start-view";
let resultMessage;
let currentQuestion = 0;

const STORE = {
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
        getCorrect: function() {
            let answers = Object.values(this);
            
            console.log(answers);    
        },
    },
    correctDetail: `Others contend that pierogi were brought 
        to Poland by Saint Hyacinth of Poland, who brought them back 
        from Kiev (the center of Kievan Rus', nowadays the capital of Ukraine).`
    ,
    getAnswers: function() {
        return this.answers;
    },
    setAnswers: function(array) {
        this.answers.answer1 = array[0];
        this.answers.answer2 = array[1];
        this.answers.answer3 = array[2];
        this.answers.answer4 = array[3];
    },

    imageUrl: "img/perogi2.jpg",
    imageAlt: "white, round plate with seven perogi with light browning."
  }




console.log(STORE.getAnswers());











// As a user, I should be able to start the quiz
// this function will listen for teh start button to be clicked
// function startQuiz(){
//     renderView('start-view');
//     $('.start-button').on('click', function() {
//         appState = "question-view";
//         renderView(appState);
//     });
//   console.log('`startQuiz` ran');
//     //listen for answer 
// }

// function buildStartView() {
//     return $(`<section id="start-view" class="">
//     <header role="banner">
//         <h1>Push Food Origin Master</h1>
//     </header>
//     <main role="main">
//         <h3>Are YOU a Food Origin Master?</h3>
//         <button class="start-button" aria-label="start quiz">Start Quiz</button>
//     </main>
// </section>`);
// }

// function buildQuestionView(STORE) {
//     let question = STORE.question;
//     let answer1 = STORE.answers.answer1;
//     let answer2 = STORE.answers.answer2;
//     let answer3 = STORE.answers.answer3;
//     let answer4 = STORE.answers.answer4;
//     let imageUrl = STORE.imageUrl;
//     let imageAlt = STORE.imageAlt;

//     let builtQuestionView = $(`<section id="question-view">
//             <header role="banner">
//                 <h1>Push Food Origin Master</h1>
//                 <h2 class="js-score">Score</h2>
//             </header>
//             <main role="main">
//                 <section>
//                     <img class="js-question-image" src="${imageUrl}" alt="${imageAlt}">
//                     <h5 class="js-question-text">${question}</h5>
//                 </section>
//                 <form class="js-answer-form" action="">
//                     <label for="${answer1}" class="hide">${answer1}</label>
//                     <input type="button" name="${answer1}" data-answer="1" value="${answer1}"></input>

//                     <label for="${answer2}" class="hide">${answer2}</label>
//                     <input type="button" name="${answer2}" data-answer="2" value="${answer2}"></input>

//                     <label for="${answer3}" class="hide">${answer3}</label>
//                     <input type="button" name="${answer3}" data-answer="3" value="${answer3}"></input>

//                     <label for="${answer4}" class="hide">${answer4}</label>
//                     <input type="button" name="${answer4}" data-answer="4" value="${answer4}"></input>
//                 </form>
//             </main>
//         </section>`
//     );
//     return builtQuestionView; 
// }

// function buildResultView(STORE) {
//     let imageUrl = STORE.imageUrl;
//     let imageAlt = STORE.imageAlt;
//     let correctDetail = STORE.answers.correctDetail;

//     let builtHtml = $(`<section id="results-view" class="">
//     <img src="${imageUrl}" alt="${imageAlt}">
//     <h1>${resultMessage}</h1>
//     <p>${correctDetail}</p>
//     <button class="next-question-btn" aria-label="next question">Next Question</button>
// </section>`);

//     return builtHtml;

// }

// function buildEndView() {
//     return $(`<section id="end-view" class="">
//     <header role="banner">
//         <h1>Push Food Origin Master</h1>
//     </header>
//     <main role="main">
//         <h3>${score}</h3>
//         <img src="" alt="">
//         <button class="js-retake-quiz" aria-label="retake quiz">Retake Quiz</button>
//     </main>
//     </section>`);   
// }

// // As a user, I should be able to view the questions and answers.
// // This function will render the quiz question with answers to select
// function renderView(appState){
//     //grab information from store

//     if(appState === "start-view") {
//         let finishedHtml = buildStartView(STORE);
//         $('.body').html(finishedHtml);
//     }

//     if(appState === "question-view") {
//         let finishedHtml = buildQuestionView(STORE);
//         $('.body').html(finishedHtml);
//         checkAnswer();
//     }

//     if(appState === "results-view") {
//         let finishedHtml = buildResultView(STORE);
//         $('.body').html(finishedHtml);
//     }

//     if(appState === "end-view") {
//         let finishedHtml = buildEndView(STORE);
//         $('.body').html(finishedHtml);
//     }

//   console.log(`currentQustion${currentQuestion}`);  
//   console.log('`renderView` ran');
    
// }

// // As a user, I should be able to select an answer.
// // this function compares the checked answer to the correct answer for a T/F
// function checkAnswer(){
//   //listen for click on anwser button
//   let answerText;

//   function evaluateAnswer(answerToEvaluate) {
//     return answerToEvaluate === STORE.answers.getCorrect();
//     }

//   $('.js-answer-form').on('click', function(event) {
//     event.preventDefault();
//     console.log('`checkAnswer` ran');
//     //grab inner text of button that was clicked
//     answerText = event.target.value;

//     //compare button text to correct: in STORE
//     answerIsCorrect = evaluateAnswer(answerText);
//     showAnswerResult();
//   });
// }

// // As a user, I should be able to find out if that answer was correct.
// // this function renders the question result page showing the correct answer 
// function showAnswerResult(){
//   console.log('showAnswerResult ran');
//   //determine if answer was correct or not
//   if(answerIsCorrect) {
//       //assign result sentence "correct" or "not correct"
//       resultMessage = "Yaaay! You got it right!";
//       //adjust score accordingly
//       score++;
//   } else {
//       //assign result sentence "correct" or "not correct"
//       resultMessage = "Awww, you got it wrong";
//   }

//   //render resultspage
//   appState = "results-view";
//   renderView(appState);
//   moveToNextQuestion();
//   currentQuestion++
//   console.log(`score:${score}`);
// }

// // As a user, I should be able to move to the next question.
// // this function listens for the next button to be activated & moves to next 
// // question page
// function moveToNextQuestion(){
//      //detect click on next question button
//     $('.next-question-btn').on('click', function(event) {
//         if(currentQuestion <= 9) {
//             STORE.pop();
//             STORE.push(questionBank[currentQuestion]);
//             appState = "question-view";
//             renderView(appState);
//         }

//         if(currentQuestion > 9) {
//             appState = "end-view";
//             showFinalScore(); 
//         }

    
//     });
//   console.log('`moveToNextQuestion` ran');
// }

// // As a user, I should be able to view my score at the end.
// // this function displays the final score with a restart button to play again
// function showFinalScore(){
//     renderView(appState);
//     replayQuiz();
//     console.log('`showFinalScore` ran');
// }

// // As a user, I should have the option of restarting.
// // this function listens for the quiz restart button and restarts if needed 
// function replayQuiz(){
//     $('.js-retake-quiz').on('click',function(event){
//         score =
//         currentQuestion =
//         appState = "start-view";
//         STORE.pop();
//         STORE.push(questionBank[currentQuestion]);
//         startQuiz();
//     });
//   console.log('`replayQuiz` ran');
// }

// // this function runs all functions below to rerender DOM as needed
// function foodQuizFunctions(){
//   startQuiz();
// }

// $(foodQuizFunctions());