-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS quizzes CASCADE;

CREATE TABLE quizzes (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(100) NOT NULL,
  category VARCHAR(255) NOT NULL,
  public BOOLEAN NOT NULL,
  user_id INTEGER REFERENCES users(id)
);
