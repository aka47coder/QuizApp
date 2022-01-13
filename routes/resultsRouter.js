const express = require('express');
const router = express.Router();
const db = require('../db/dbConnection.js');

//GET /results/live
router.get('/live', (req, res) => {
    const templateVars = {};
    res.render('liveResults', templateVars);
});

//GET /results/quizzes/:id READ (userID)
router.get('/quizzes/:id', (req, res) => {
    //req.params.id
    console.log("here are the names of all the quizzes userID has taken", req.path.slice(9));
    db.query(`SELECT quizzes.title, quizzes.id
    FROM quizzes
    JOIN quiz_attempts ON quiz_attempts.quiz_id = quizzes.id
    WHERE quiz_attempts.user_id = $1`, [req.path.slice(9)])
    .then((data)=>{
        console.log("these are the quizzes you've taken", data.rows);
        res.send(data.rows);
    });
});

//GET /results/all READ
router.get('/all', (req, res) => {
    console.log("and now for results!")
    db.query(`SELECT quizzes.title, quiz_attempt_results.total
    FROM quiz_attempt_results
    JOIN quiz_attempts ON quiz_attempts.id = quiz_attempt_results.quiz_attempt_id
    JOIN quizzes ON quizzes.id = quiz_attempts.quiz_id
    WHERE quiz_attempts.user_id = $1`, [1])
    .then((data)=>{
        console.log("these are the quizzes you've taken", data.rows);
        res.send(data.rows);
    });
});

//GET /results/api/:id READ
router.get('/api/:id', (req, res) => {
    db.query(`SELECT quizzes.title, quiz_attempt_results.total
    FROM quizzes
    JOIN quiz_attempts ON quiz_attempts.quiz_id = quizzes.id
    JOIN quiz_attempt_results ON quiz_attempt_results.quiz_attempt_id = quiz_attempts.id
    WHERE quiz_attempts.user_id = $1 AND quizzes.id = $2`, [1, req.params.id])
    .then((data)=>{
        res.send(data.rows);
    });
});

//GET /results/:id READ
router.get('/:id', (req, res) => {
    db.query(`SELECT quizzes.title, quiz_attempt_results.total
    FROM quizzes
    JOIN quiz_attempts ON quiz_attempts.quiz_id = quizzes.id
    JOIN quiz_attempt_results ON quiz_attempt_results.quiz_attempt_id = quiz_attempts.id
    WHERE quiz_attempts.id = $1`, [req.params.id])
    .then((data)=>{
        console.log("is this the right quiz data?", data.rows[0]);
        const templateVars = {
            user_id: req.session.user_id,
            name: req.session.name,
            results: data.rows[0]
        };
        res.render('trophyCase', templateVars);
    });
});

//POST /results/:id EDIT
router.post('/:id', (req, res) => {
    console.log("total score updated to", req.body.totalPoints, "attempt number", req.body.attemptNumber);
    db.query(`UPDATE quiz_attempt_results
    SET total = $1
    WHERE quiz_attempt_id = $2;`, [req.body.totalPoints, req.body.attemptNumber]);
    res.end();
});

//POST /results/ DELETE
router.post('/:id/delete', (req, res) => {

});

//POST /results/ ADD
router.post('/', (req, res) => {
    console.log("you have started this quiz", req.body.quizID);
    db.query(`INSERT INTO quiz_attempts (user_id, quiz_id) VALUES (1,$1)
    RETURNING quiz_attempts.id`, [req.body.quizID])
    .then((attempID)=>{
        console.log("wtf is this?", attempID.rows[0].id);
        db.query(`INSERT INTO quiz_attempt_results (quiz_attempt_id, question_id, answer_id, total) VALUES ($1,1,1,0);`, [attempID.rows[0].id]);
        res.send(attempID);
    });

});

//GET /results/ BROWSE
router.get('/', (req, res) => {
    const templateVars = {user_id: req.session.user_id, name: req.session.name,};
    res.render('trophyCase', templateVars);
});



module.exports = router;
