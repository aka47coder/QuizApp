CREATE TABLE Users (
  id INTEGER NOT NULL,
  email VARCHAR(100) NOT NULL,
  password TEXT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Quizzes (
  id INTEGER NOT NULL,
  description TEXT NOT NULL,
  is_public SMALLINT NOT NULL DEFAULT 0,
  Users_id INTEGER NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Questions(
  id INTEGER NOT NULL,
  description TEXT NOT NULL,
  created_on TIMESTAMP(0) NOT NULL,
  Quizzes_id INTEGER NOT NULL,
  PRIMARY KEY (id)
);



CREATE TABLE Options (
  id INTEGER NOT NULL,
  description TEXT NOT NULL,
  correct SMALLINT NOT NULL,
  Questions_id INTEGER NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE User_Attempts (
  id INTEGER NOT NULL,
  score INTEGER NOT NULL DEFAULT 0,
  attempt_date TIMESTAMP(0) NOT NULL,
  Quizzes_id INTEGER NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE User_Answers (
  User_Attempts_id INTEGER NOT NULL,
  Questions_id INTEGER NOT NULL,
  Options_id INTEGER NOT NULL
);