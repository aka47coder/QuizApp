let questions = [];
  fetch('https://opentdb.com/api.php?amount=1&category=15&type=multiple')
  .then((res) => {
    return res.json();
  })
  .then((apiQuestions) => {
    // transform into format we want
    questions = apiQuestions.results.map((apiQuestion) => {
      // this creates object we store our question into
        const formattedQuestion = {
            question: apiQuestion.question,
        };
        // this gets the answers, spread operator to get an array of incorrect answers
        const answerChoices = [...apiQuestion.incorrect_answers];
        // this will put the answer in a random position
        formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
        // this will put the correct answer at the right index
        answerChoices.splice(
            formattedQuestion.answer - 1,
            0,
            apiQuestion.correct_answer
        );
        // this iterates through the answer choices and references each choice
        answerChoices.forEach((answer, index) => {
            formattedQuestion['Answer' + (index + 1)] = answer;
        });
        console.log(formattedQuestion)

        return formattedQuestion;
    });
  })
.catch((err) => {
    console.error(err);
});

