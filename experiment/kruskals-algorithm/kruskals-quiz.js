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
            question: "1. When do we add an edge to MST while running Kruskals ? ", ///// Write the question inside double quotes
            answers: {
                a: "When circle is formed by the new edge", ///// Write the option 1 inside double quotes
                b: "when the added edge dosen't create a circle", ///// Write the option 2 inside double quotes
 		c: "when there is no circle at all  ", ///// Write the option 3 inside double quotes
                d: " if any circle exists  ", ///// Write the option 4 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2. Which edge gets judged if it should or shouldn't be in MST after n iterations?",  ///// Write the question inside double quotes
      answers: {
        a: " Smallest edge  ",                  ///// Write the option 1 inside double quotes
        b: "Largest Edge",                  ///// Write the option 2 inside double quotes
	c: "Middle Edge in inc order ", ///// Write the option 3 inside double quotes
        d: " No element", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "3. How many minimum edges should we add to MST to stop checking?",  ///// Write the question inside double quotes
      answers: {
        a: " V edges ",                  ///// Write the option 1 inside double quotes
        b: "V-1 edges",                  ///// Write the option 2 inside double quotes
	c: "E edges ", ///// Write the option 3 inside double quotes
        d: "E-1 edges ", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

{
      question: "4. Consider the following statements.<br>S1. Kruskals algorithm might produce a non-minimal spanning tree.<br>S2. Kruskals algorithm can efficiently implemented using the disjoint-set data structure. ",  ///// Write the question inside double quotes
      answers: {
        a: "S1 is true but S2 is false  ",                  ///// Write the option 1 inside double quotes
        b: "Both S1 and S2 are false",                  ///// Write the option 2 inside double quotes
	c: " Both S1 and S2 are true ", ///// Write the option 3 inside double quotes
        d: "S2 is true but S1 is false  ", ///// Write the option 4 inside double quotes
	 
              },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

{
      question: "5. Which of the following is false about the Kruskals algorithm?",  ///// Write the question inside double quotes
      answers: {
        a: "  It is a greedy algorithm  ",                  ///// Write the option 1 inside double quotes
        b: "It constructs MST by selecting edges in increasing order of their weights  ",                  ///// Write the option 2 inside double quotes
	c: " It can accept cycles in the MST  ", ///// Write the option 3 inside double quotes
        d: "It uses union-find data structure ", ///// Write the option 4 inside double quotes
	 
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
