let q = [];
fetch('https://opentdb.com/api.php?amount=1&category=15&type=multiple')
.then((res) => {
return res.json();
})
.then((aq) => {
// transcode into the desired format
q = aq.results.map((aqq) => {
// This generates an object in which we can store our inquiry.
const fq = {
question: aqq.question,
};
// This retrieves the answers and uses the spread operator to generate an array of wrong responses.
const answerChoices = [...aqq.incorrect_answers];
// The response will be placed in a random position as a result of this.
fq.answer = Math.floor(Math.random() * 3) + 1;
// This will place the correct answer in the appropriate indexzzz.
answerChoices.splice(
fq.answer - 1,
0,
aqq.correct_answer
);
//This loops through the answer options, referencing each one.
answerChoices.forEach((answer, index) => {
fq['Answer' + (index + 1)] = answer;
});
console.log(fq)

return fq;
});
})
.catch((err) => {
console.error(err);
});

