-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS answers CASCADE;

CREATE TABLE answers (
  id SERIAL PRIMARY KEY NOT NULL,
  correct_answer VARCHAR(255) NOT NULL,
  incorrect_answers TEXT [] NOT NULL,
  question_id INTEGER REFERENCES questions(id)
);
