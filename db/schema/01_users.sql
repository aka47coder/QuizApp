-- Drop and recreate Users table (Example)
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(400) NOT NULL,
  password VARCHAR(400) NOT NULL,
  email VARCHAR(400) NOT NULL
);
