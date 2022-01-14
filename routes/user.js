const express = require('express');
const router = express.Router();
const db = require('../db/dbConnection.js');


// //GET /profile/
// router.get('/', (req, res) => {
//     const templateVars = {};
//     res.render('../views/editProfile', templateVars);
// });


router.get('/login', (req, res) => {
  res.redirect('/');
});

router.post('/login', (req, res) => {
  // res.redirect('/');
  window.location.replace("/index")
});

router.post('/logout', (req, res) => {
  req.session = null;
  res.redirect('/');
});

const getUserByEmail = (email) => {
  return db.query(`SELECT * FROM users WHERE email = $1;`, [email])
    .then(data => data.rows[0])
    .catch(err => err.message);
};

router.post('/', (req, res) => {
  // this console log shows the form being passed from the login button
  console.log("1234", req.body)

  getUserByEmail(req.body.email)
    .then(user => {
      // this console log shows the whole user object pulled from database
      console.log("56789", user);
      req.session.user_id = user.id;
      req.session.name = user.name;
      // another templatevars in server.js is attached to this
      const templateVars = {user_id: user.id, name: user.name}
      // return res.render('../views/index', templateVars);
      res.redirect('/');
    })
})


module.exports = router;
