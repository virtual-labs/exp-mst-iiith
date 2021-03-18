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
            question: "1. Let G be an undirected connected graph with distinct edge weight. Let emax be the edge with maximum weight and emin the edge with minimum weight. Which of the following statements is false? ", ///// Write the question inside double quotes
            answers: {
                a: "Every minimum spanning tree of G must contain emin.", ///// Write the option 1 inside double quotes
                b: " If emax is in a minimum spanning tree, then its removal must disconnect G", ///// Write the option 2 inside double quotes
 		c: "No minimum spanning tree contains emax ", ///// Write the option 3 inside double quotes
                d: " G has a unique minimum spanning tree ", ///// Write the option 4 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

    {
      question: "2. What is the best case Time Complexity of Kruskal's?",  ///// Write the question inside double quotes
      answers: {
        a: "O((N-1)log(E)+Elog(E)) ",                  ///// Write the option 1 inside double quotes
        b: "O((N)log(N)+Elog(E))",                  ///// Write the option 2 inside double quotes
	c: "O((N)log(E)+Elog(E)) ", ///// Write the option 3 inside double quotes
        d: "Cannot Determine", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "3. How many iterations of MST are required to run Kruskal's algorithm on a non-cyclic graph ?",  ///// Write the question inside double quotes
      answers: {
        a: "V ",                  ///// Write the option 1 inside double quotes
        b: "V-1",                  ///// Write the option 2 inside double quotes
	c: "E ", ///// Write the option 3 inside double quotes
        d: "E-1", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

{
      question: "4. What is the minimum and maximum number of MST's possible for a given connected undirected non cyclic graph? ",  ///// Write the question inside double quotes
      answers: {
        a: "Min : 1, Max: 1 ",                  ///// Write the option 1 inside double quotes
        b: "Min : 1, Max :N ",                  ///// Write the option 2 inside double quotes
	c: "Min : N, MAx : N", ///// Write the option 3 inside double quotes
        d: "MIN : 1, Max : E ", ///// Write the option 4 inside double quotes
	 
              },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "5.  Which of the following is false about Prim’s algorithm?",  ///// Write the question inside double quotes
      answers: {
        a: " It is started from an edge ",                  ///// Write the option 1 inside double quotes
        b: "It constructs MSt in increasing order of their weights ",                  ///// Write the option 2 inside double quotes
	c: " It never accepts cycles in MST  ", ///// Write the option 3 inside double quotes
        d: "It can be implemented using heaps ", ///// Write the option 4 inside double quotes
	 
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
