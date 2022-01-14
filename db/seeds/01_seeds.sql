INSERT INTO users (name, password, email) VALUES ('John', 'password', 'j1@j.ca');
INSERT INTO users (name, password, email) VALUES ('Jane', 'password', 'j2@j.com');

INSERT INTO quizzes (title, category, public, user_id) VALUES ( 'All Around The World', 'Geography', TRUE, 1);
INSERT INTO quizzes (title, category, public, user_id) VALUES ( 'Lighthouse Labs', 'Courses',TRUE, 1);
INSERT INTO quizzes (title, category, public, user_id) VALUES ('Language Arts', 'English', TRUE, 1);
INSERT INTO quizzes (title, category, public, user_id) VALUES ('Additon', 'Math', TRUE,1);


INSERT INTO questions (question,quiz_id) VALUES ('What is the capital city of Canada',1);
INSERT INTO questions (question,quiz_id) VALUES ('Which country is the largest in the world',1);
INSERT INTO questions (question,quiz_id) VALUES ('Which country has the longest coastline ',1);
INSERT INTO questions (question,quiz_id) VALUES ('Which country has on average the highest temperatures?',1);
INSERT INTO questions (question,quiz_id) VALUES ('How many countiries in Africa?',1);

INSERT INTO questions (question,quiz_id) VALUES ('What program are we in?',2);
INSERT INTO questions (question,quiz_id) VALUES ('How many weeks is this program?',2);
INSERT INTO questions (question,quiz_id) VALUES ('Which month did we start?',2);
INSERT INTO questions (question,quiz_id) VALUES ('When will this course end?',2);
INSERT INTO questions (question,quiz_id) VALUES ('How many tests did we have?',2);

INSERT INTO questions (question, quiz_id) VALUES ('Which of these is a palindrome',3);
INSERT INTO questions (question, quiz_id) VALUES ('How many official languages do we have in Canada?',3);
INSERT INTO questions (question, quiz_id) VALUES ('How do you say hi in Spanish',3);
INSERT INTO questions (question, quiz_id) VALUES ('Which of these is considered the hardest language',3);
INSERT INTO questions (question, quiz_id) VALUES ('Which of the following is not a Germanic language',3);


/*quiz 1*/
INSERT INTO answers (correct_answer,incorrect_answers, question_id) VALUES ('Ottawa', ARRAY ['Toronto','Vancouver','Kitchener'],1);
INSERT INTO answers (correct_answer,incorrect_answers, question_id) VALUES ('Russia', ARRAY ['Canada','USA','China'], 2);
INSERT INTO answers (correct_answer,incorrect_answers, question_id) VALUES ('Somalia', ARRAY ['Gambia','South Africa','Brazil'], 3);
INSERT INTO answers (correct_answer,incorrect_answers, question_id) VALUES ('Mali', ARRAY ['Ghana','Qatar','Bahrain'], 4);
INSERT INTO answers (correct_answer,incorrect_answers, question_id) VALUES ('54', ARRAY ['6','8','134'], 5);

/*quiz 2*/
INSERT INTO answers (correct_answer,incorrect_answers, question_id) VALUES('Web Development', ARRAY ['Data Science','Cybersecurity','Fashion Design'], 1);
INSERT INTO answers (correct_answer,incorrect_answers, question_id) VALUES('12', ARRAY [30,20,50], 2);
INSERT INTO answers (correct_answer,incorrect_answers, question_id) VALUES('November', ARRAY ['January','September','October'], 3);
INSERT INTO answers (correct_answer,incorrect_answers, question_id) VALUES('February', ARRAY ['March','April','May'], 4);
INSERT INTO answers (correct_answer,incorrect_answers, question_id) VALUES ('5', ARRAY ['6','9','7'], 5);

/*quiz 3*/
INSERT INTO answers(correct_answer,incorrect_answers, question_id) VALUES('Racecar', ARRAY ['Rear','Output','Calculator'], 1);
INSERT INTO answers(correct_answer,incorrect_answers, question_id) VALUES(2, ARRAY [1,4,5],2);
INSERT INTO answers(correct_answer,incorrect_answers, question_id) VALUES('Hola', ARRAY ['Ciao','Bonjour','Nǐ hǎo'], 3);
INSERT INTO answers(correct_answer,incorrect_answers, question_id) VALUES('Mandarin', ARRAY ['Polish','French','Spanish'], 4);
INSERT INTO answers(correct_answer,incorrect_answers, question_id) VALUES('French', ARRAY ['Polish','Dutch','Swedish'], 5);

INSERT INTO quiz_attempts (user_id, quiz_id) VALUES (1,1);
INSERT INTO quiz_attempts (user_id, quiz_id) VALUES (1,2);
INSERT INTO quiz_attempts (user_id, quiz_id) VALUES (1,3);
INSERT INTO quiz_attempts (user_id, quiz_id) VALUES (1,4);

