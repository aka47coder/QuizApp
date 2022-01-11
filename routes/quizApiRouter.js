const express = require('express');
const router = express.Router();
const hello = require('he');
const feed = require("node-fetch");


//GET /quizzes
router.get('/', (req, res) => {
  let q = [];
  feed('https://opentdb.com/api.php?amount=1&category=15&type=multiple')
  .then((res) => {
    return res.json();
  })
  .then((aq) => {
    // transform into format we want
    q = aq.results.map((ap1) => {
      // this creates object we store our question into
        const fq = {
            question: ap1.question,
        };
        // this gets the answers, spread operator to get an array of incorrect answers
        const ac = [...ap1.incorrect_answers];
        // this will put the answer in a random position
        fq.answer = Math.floor(Math.random() * 3) + 1;
        // this will put the correct answer at the right index
        ac.splice(
            fq.answer - 1,
            0,
            ap1.correct_answer
        );
        // this iterates through the answer choices and references each choice
        ac.forEach((answer, index) => {
            fq['Answer' + (index + 1)] = answer;
        });
        // console.log(fq)
        const templateVars = {
          question: hello.decode(fq.question),
          answer: fq.answer,
          Answer1: fq.Answer1,
          Answer2: fq.Answer2,
          Answer3: hello.decode(fq.Answer3),
          Answer4: fq.Answer4
        };
        res.render('../views/quizAPItest', templateVars);
        console.log(fq);
        return fq;
    });
  })
});

// router.post(/api/quizzes), (req, res) => {
//   db.query(
//     `INSERT INTO quizzes (public, category, user_id) VALUES ($1, $2, $3);
//     `
//   ), [query.category, query.question, query.];
// }

module.exports = router;
