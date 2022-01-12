INSERT INTO users (name, password, email) VALUES ('Caden', 'password', 'caden@choi.ca');
INSERT INTO users (name, password, email) VALUES ('Kira', 'password', 'kira@hotmale.com');
INSERT INTO users (name, password, email) VALUES ('Terry', 'password', 'terry@hotmale.com');

INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Lighthouse Labs Quiz', 'Miscellaneous', 1);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'memequiz', 'bullet', 2);




-- Questions for LHL quiz!
INSERT INTO questions (question, quiz_id) VALUES ('Which Program Are We In?', 1);
INSERT INTO questions (question, quiz_id) VALUES ('Which Cohort Are We?', 1);
INSERT INTO questions (question, quiz_id) VALUES ('who are you', 1);
INSERT INTO questions (question, quiz_id) VALUES ('what are you?', 1);
INSERT INTO questions (question, quiz_id) VALUES ('nub', 1);


INSERT INTO answers (correct_answer, incorrect_answers, question_id) VALUES ('Web Development', ARRAY ['Data Science','Gaming','Wrestling'], 1);
INSERT INTO answers (correct_answer, incorrect_answers, question_id) VALUES ('Oct 1st', ARRAY ['March 15th','January 1st','February 6st'], 2);
INSERT INTO answers (correct_answer, incorrect_answers, question_id) VALUES ('hamza', ARRAY ['yeef','hgfd','gfd'], 3);
INSERT INTO answers (correct_answer, incorrect_answers, question_id) VALUES ('hamza', ARRAY ['no','no','np'], 4);
INSERT INTO answers (correct_answer, incorrect_answers, question_id) VALUES ('hamza', ARRAY ['rip','ripp','ripp'], 5);

INSERT INTO quiz_attempts (user_id, quiz_id) VALUES (1,1);
INSERT INTO quiz_attempts (user_id, quiz_id) VALUES (1,2);

INSERT INTO quiz_attempt_results (quiz_attempt_id, question_id, answer_id, total) VALUES (1,1,1,6);
INSERT INTO quiz_attempt_results (quiz_attempt_id, question_id, answer_id, total) VALUES (2,1,1,10);
