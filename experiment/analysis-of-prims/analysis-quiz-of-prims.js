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
	answerContainers.forEach(e => e.style.color = "black");

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
            question: "1. What is the time complexity of Prim's algorithm? ", ///// Write the question inside double quotes
            answers: {
                a: "O((V+E)log(V))", ///// Write the option 1 inside double quotes
                b: " O(Vlog(V)+Elog(E)) ", ///// Write the option 2 inside double quotes
 		c: "O(Vlog(E)+Elog(E)) ", ///// Write the option 3 inside double quotes
                d: " O(Elog(V)+Elog(E)) ", ///// Write the option 4 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

    {
      question: "2. Is Prim's algorithm always better than Kruskal's algorithm?",  ///// Write the question inside double quotes
      answers: {
        a: "Yes ",                  ///// Write the option 1 inside double quotes
        b: "No",                  ///// Write the option 2 inside double quotes
	c: "Depend  ", ///// Write the option 3 inside double quotes
        d: "Can't say ", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

{
      question: "3. What is the best case Time Complexity of Prim's algorithm?",  ///// Write the question inside double quotes
      answers: {
        a: "O(V)  ",                  ///// Write the option 1 inside double quotes
        b: "O(n<Sup>2</sup>)",                  ///// Write the option 2 inside double quotes
	c: "Somewhere in between N and N<sup>2</sup> ", ///// Write the option 3 inside double quotes
        d: "None of the above ", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "4. What is the worst case Time Complexity of Prim’s algorithm if adjacency matrix is used? ",  ///// Write the question inside double quotes
      answers: {
        a: "O(log V) ",                  ///// Write the option 1 inside double quotes
        b: "O(V<sup>2</sup>)",                  ///// Write the option 2 inside double quotes
	c: " O(E<sup>2</sup>) ", ///// Write the option 3 inside double quotes
        d: "O(V log(E)) ", ///// Write the option 4 inside double quotes
	 
              },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

{
      question: "5.  Which of the following statements is true<br>S1 . Prim’s algorithm resembles Dijkstra’s algorithm.<br>S2 . Kruskal’s algorithm is best suited for the sparse graphs than the prim’s algorithm. ",  ///// Write the question inside double quotes
      answers: {
        a: " S1 and S2 both are false  ",                  ///// Write the option 1 inside double quotes
        b: " S1 is false and S2 is true  ",                  ///// Write the option 2 inside double quotes
	c: " Both S1 and S2 are true   ", ///// Write the option 3 inside double quotes
        d: "S2 is false and S1 is true", ///// Write the option 4 inside double quotes
	 
              },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
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
