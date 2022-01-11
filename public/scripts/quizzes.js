let q = [];
fetch('https://opentdb.com/api.php?amount=1&category=15&type=multiple')
.then((res) => {
return res.json();
})
.then((aq) => {
// transform into format we want
q = aq.results.map((aqq) => {
// this creates object we store our question into
const fq = {
question: aqq.question,
};
// this gets the answers, spread operator to get an array of incorrect answers
const answerChoices = [...aqq.incorrect_answers];
// this will put the answer in a random position
fq.answer = Math.floor(Math.random() * 3) + 1;
// this will put the correct answer at the right indexzzz
answerChoices.splice(
fq.answer - 1,
0,
aqq.correct_answer
);
// this iterates through the answer choices and references each choice
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

