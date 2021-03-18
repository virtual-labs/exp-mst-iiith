/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1. When do we add vertex adjacent to newly added vertex to MST into Min-heap? ", ///// Write the question inside double quotes
            answers: {
                a: "If its present in Min-heap ", ///// Write the option 1 inside double quotes
                b: " If its neither in MSt nor in Min-heap.", ///// Write the option 2 inside double quotes
 		c: "If its already in MSt  ", ///// Write the option 3 inside double quotes
                d: "  If its in Min-heap and MSt ", ///// Write the option 4 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2. How many edges are present in MST after k iterations",  ///// Write the question inside double quotes
      answers: {
        a: "exactly K ",                  ///// Write the option 1 inside double quotes
        b: "Less than K and atmost k",                  ///// Write the option 2 inside double quotes
	c: "More than k and atleast k", ///// Write the option 3 inside double quotes
        d: "Can't Say ", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "3. Which of the following statements are false ?",  ///// Write the question inside double quotes
      answers: {
        a: "Prim's algo must be started from any vertex ",                  ///// Write the option 1 inside double quotes
        b: "Prim's algo defenitely takes N-1 iterations to find MST ",                  ///// Write the option 2 inside double quotes
	c: "Prim's algo started from a diferent vertices may give different MSts  ", ///// Write the option 3 inside double quotes
        d: "None of the above are false ", ///// Write the option 4 inside double quotes
	e: "One of a,b,c is false", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "e"                ///// Write the correct option inside double quotes
    },

{
      question: "4. Prim’s algorithm can be efficiently implemented using _____ for graphs with greater density. ",  ///// Write the question inside double quotes
      answers: {
        a: "d-array heap ",                  ///// Write the option 1 inside double quotes
        b: "linear search ",                  ///// Write the option 2 inside double quotes
	c: "fibonacci heap ", ///// Write the option 3 inside double quotes
        d: "binary search  ", ///// Write the option 4 inside double quotes
	 
              },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "5.  Which of the following is false about Prim’s algorithm?",  ///// Write the question inside double quotes
      answers: {
        a: " It is a greedy algorithm ",                  ///// Write the option 1 inside double quotes
        b: " It constructs MST by selecting edges in increasing order of their weights  ",                  ///// Write the option 2 inside double quotes
	c: "  It never accepts cycles in the MST  ", ///// Write the option 3 inside double quotes
        d: " It can be implemented using the Fibonacci heap", ///// Write the option 4 inside double quotes
	 
              },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },
        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
