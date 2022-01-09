const express = require('express');
const router = express.Router();
const db = require('../db/dbConnection.js');

//GET to href link quiz ID to the actual start of quiz
router.get(`/all/public/:id`, (req, res) => {
  db.query(`
  SELECT *
  FROM quizzes
  JOIN questions ON quiz_id = quizzes.id
  WHERE quizzes.id = $1
  `, [req.params.id])
  .then((data) => {
    console.log("ID HREF", data.rows)
    res.render("takeQuiz", {data: data.rows})
  })
})

//GET all quizzes made by user that are PRIVATE
router.get('/all/user/private', (req, res) => {
  console.log("private quizzes", req.session.user_id)
  db.query(
    `SELECT quizzes.title, quizzes.category, quizzes.id
    FROM quizzes
    WHERE quizzes.public = false
    `)
    .then((data) => {
      console.log("User Private Quizzes", data.rows);
      res.send({ data: data.rows, user_id: req.session.user_id });
    })
})

//GET all quizzes made by user
router.get('/all/user', (req, res) => {
  console.log("999999", req.session.user_id)
  db.query(
    `SELECT quizzes.title, quizzes.category, quizzes.id
    FROM quizzes
    WHERE quizzes.user_id = 1;
    `)
    .then((data) => {
      console.log("User Quizzes", data.rows);
      res.send({ data: data.rows, user_id: req.session.user_id });
    })
});

//GET all public quizzes
router.get('/all/public', (req, res) => {
  db.query(
  `SELECT quizzes.title, quizzes.category, quizzes.id
  FROM quizzes
  WHERE quizzes.public = true;
  `)
  .then((data)=>{
      console.log("All public quizzes!", data.rows);
      res.send(data.rows);
  });
});

//GET /quiz/create
router.get('/create', (req, res) => {
  const templateVars = {user_id: req.session.user_id, name: req.session.name}
    res.render('../views/createQuiz', templateVars);
});

router.post('/create', (req, res) => {
  // will probably need to add some type of user_id to this field at some point
  console.log("you're in the route!")
  let quizID = '';
  let questionID = ''; //maybe call it currentQuesitionID
  console.log("1111", req.body);
  db.query(`
  INSERT INTO quizzes (public, title, category, user_id)
  VALUES ($1, $2, $3, $4)
  RETURNING id;
  `, [req.body.public, req.body.title, req.body.category, 1]) //quiz created
  .then((qqq) => {
    quizID = qqq;
    return quizID; //global quiz id varirable created
  })
  .then((quiz) => {
    console.log("Line 27", quiz)
    quizID = quiz.rows[0].id;
    console.log("QUIZID", quizID)
    db.query(`
    INSERT INTO questions (question, quiz_id)
    VALUES ($1, $2)
    RETURNING id;
    `, [req.body.q1, quizID]) // Question 1 created
    .then((question) => {
      questionID = question.rows[0].id;
      console.log("QUESTIONID", questionID)
      db.query(`
      INSERT INTO answers (correct_answer, incorrect_answers, question_id)
      VALUES ($1, $2, $3)
      RETURNING *;
      `, [req.body.q1a1, [req.body.q1a2, req.body.q1a3, req.body.q1a4], questionID]) // Q1 Answer created
      .then(() => {
        console.log("QUIZID22222", quizID)
        db.query(`
        INSERT INTO questions (question, quiz_id)
        VALUES ($1, $2)
        RETURNING id;
        `, [req.body.q2, quizID]) // Question 2 created
        .then((question2) => {
          questionID = question2.rows[0].id
          return questionID; //question id from last question created (Question 2)
        })
        .then(() => {
          console.log("QUESTIONID2222", questionID)
          db.query(`
          INSERT INTO answers (correct_answer, incorrect_answers, question_id)
          VALUES ($1, $2, $3)
          RETURNING *;
          `, [req.body.q2a1, [req.body.q2a2, req.body.q2a3, req.body.q2a4], questionID]) // Q2 Answer created
          .then(() => {
            console.log("QUIZID3333", quizID)
            db.query(`
            INSERT INTO questions (question, quiz_id)
            VALUES ($1, $2)
            RETURNING id;
            `, [req.body.q3, quizID]) // Question 3 created
            .then((question3) => {
              questionID = question3.rows[0].id
              return questionID; //question id from last question created (Question 3)
            })
            .then(() => {
              console.log("QUESTIONID33333", questionID)
              db.query(`
              INSERT INTO answers (correct_answer, incorrect_answers, question_id)
              VALUES ($1, $2, $3)
              RETURNING *;
              `, [req.body.q3a1, [req.body.q3a2, req.body.q3a3, req.body.q3a4], questionID]) // Q3 Answer created
              .then(() => {
                console.log("QUIZID44444", quizID)
                db.query(`
                INSERT INTO questions (question, quiz_id)
                VALUES ($1, $2)
                RETURNING id;
                `, [req.body.q4, quizID]) // Question 4 created
                .then((question4) => {
                  questionID = question4.rows[0].id
                  return questionID; //question id from last question created (Question 4)
                })
                .then(() => {
                  console.log("QUESTIONID33333", questionID)
                  db.query(`
                  INSERT INTO answers (correct_answer, incorrect_answers, question_id)
                  VALUES ($1, $2, $3)
                  RETURNING *;
                  `, [req.body.q4a1, [req.body.q4a2, req.body.q4a3, req.body.q4a4], questionID]) // Q4 Answer created
                  .then(() => {
                    console.log("QUIZID5555", quizID)
                    db.query(`
                    INSERT INTO questions (question, quiz_id)
                    VALUES ($1, $2)
                    RETURNING id;
                    `, [req.body.q5, quizID]) // Question 5 created
                    .then((question5) => {
                      questionID = question5.rows[0].id
                      return questionID; //question id from last question created (Question 5)
                    })
                    .then(() => {
                      console.log("QUESTIONID33333", questionID)
                      db.query(`
                      INSERT INTO answers (correct_answer, incorrect_answers, question_id)
                      VALUES ($1, $2, $3)
                      RETURNING *;
                      `, [req.body.q5a1, [req.body.q5a2, req.body.q5a3, req.body.q5a4], questionID]) // Q5 Answer created
                      .then(() => {
                        // this should redirect to a page showing the created quiz
                        res.redirect('/');
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})


//GET /quiz/:id/data
router.get('/:id/data', (req, res) => {
  db.query(`
  SELECT questions.*, answers.*, quizzes.title
  FROM quizzes
  JOIN questions ON quizzes.id = questions.quiz_id
  JOIN answers ON questions.id = answers.question_id
  WHERE quizzes.id = $1;`, [req.params.id])
  .then((result)=>{
    res.send(result.rows);
  })
  .catch((err)=>{
    console.log(err.message);
  })
});

//GET /quiz/:id
router.get('/:id', (req, res) => {
  const templateVars = {user_id: req.session.user_id, name: req.session.name};
    res.render('takeQuiz', templateVars);
});


//get the public quizzes
router.get("/", (req, res) => {
    db.query(`SELECT * FROM quizzes;`)
    .then(data => {
        const quizzes = data.rows;
        res.json({ quizzes });
    })
    .catch(err => {
        res
        .status(500)
        .json({ error: err.message });
    });
});


module.exports = router;
