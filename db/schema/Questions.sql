CREATE TABLE Questions(
  id INTEGER NOT NULL,
  description TEXT NOT NULL,
  created_on TIMESTAMP(0) NOT NULL,
  Quizzes_id INTEGER NOT NULL,
  PRIMARY KEY (id)
);
