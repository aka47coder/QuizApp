-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS quiz_attempt_results CASCADE;

CREATE TABLE quiz_attempt_results (
  id SERIAL PRIMARY KEY NOT NULL,
  quiz_attempt_id INTEGER REFERENCES quiz_attempts(id),
  question_id INTEGER REFERENCES questions(id),
  answer_id INTEGER REFERENCES answers(id),
  total INTEGER
);
