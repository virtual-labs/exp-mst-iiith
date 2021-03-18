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
            question: "1. What is the time complexity of Kruskal's algorithm? ", ///// Write the question inside double quotes
            answers: {
                a: "Best case is when given graph is a tree it self ", ///// Write the option 1 inside double quotes
                b: " Best case O(n<sup>2</sup>) ", ///// Write the option 2 inside double quotes
 		c: "Worst case is when all edges are to be checked.  ", ///// Write the option 3 inside double quotes
                d: "Average case O(Nlog(E)+Nlog(N)) ", ///// Write the option 4 inside double quotes
		e: "a,b and c ", ///// Write the option 4 inside double quotes
            },
            correctAnswer: "e" ///// Write the correct option inside double quotes
        },

    {
      question: "2. Does Kruskal's need more than one MST ?",  ///// Write the question inside double quotes
      answers: {
        a: "Yes  ",                  ///// Write the option 1 inside double quotes
        b: "No",                  ///// Write the option 2 inside double quotes
	c: "Depend ", ///// Write the option 3 inside double quotes
        d: "Can't say", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

{
      question: "3. Which case is the best case Time Complexity of Kruskal's ? ",  ///// Write the question inside double quotes
      answers: {
        a: "Max.no of edges and many cycles  ",                  ///// Write the option 1 inside double quotes
        b: "Min.no of edges and minimum cycles ",                  ///// Write the option 2 inside double quotes
	c: "Min No.of edges with max no of cycles ", ///// Write the option 3 inside double quotes
        d: "Can't Say ", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

{
      question: "4. If Kruskal’s algorithm is used for finding a minimum spanning tree of a weighted graph G with n vertices and m edges and edge weights are already given in a sorted list, then, What will be the time complexity to compute the minimum cost spanning tree given that union and find operations take amortized O(1) ?  ",  ///// Write the question inside double quotes
      answers: {
        a: "O(m logn)  ",                  ///// Write the option 1 inside double quotes
        b: "O(n) ",                  ///// Write the option 2 inside double quotes
	c: "O(m)", ///// Write the option 3 inside double quotes
        d: "O(n logm)", ///// Write the option 4 inside double quotes
	 
              },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

{
      question: "5. What is the best case Time Complexity of Kruskal's?",  ///// Write the question inside double quotes
      answers: {
        a: "O((N-1)log(E)+Elog(E))",                  ///// Write the option 1 inside double quotes
        b: "O((N)log(N)+Elog(E))  ",                  ///// Write the option 2 inside double quotes
	c: " O((N)log(E)+Elog(E))  ", ///// Write the option 3 inside double quotes
        d: "Cannot Determine  ", ///// Write the option 4 inside double quotes
	 
              },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
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
