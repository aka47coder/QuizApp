// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const cookieSession = require('cookie-session');
app.use(bodyParser.urlencoded({ extended: true }));
const db = require('./db/dbConnection.js');

const userRouter = require('./routes/userRouter');
const quizRouter = require('./routes/quizRouter');
const resultsRouter = require('./routes/resultsRouter');
const quizAPI = require('./routes/quizApiRouter');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

app.use(cookieSession({
  name: 'session',
  keys: ['guestID', 'userID'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

//our routes
app.use('/quiz', quizRouter);
app.use('/login', userRouter);
app.use('/results', resultsRouter);
app.use('/quizzes', quizAPI);

//homepage
app.get("/", (req, res) => {
  const templateVars = {user_id: req.session.user_id, name: req.session.name}
  res.render("index", templateVars)
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
