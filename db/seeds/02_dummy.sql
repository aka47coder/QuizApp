INSERT INTO users (name, password, email) VALUES ('Caden', 'password', 'caden@choi.ca');
INSERT INTO users (name, password, email) VALUES ('Kira', 'password', 'kira@hotmale.com');
INSERT INTO users (name, password, email) VALUES ('Terry', 'password', 'terry@hotmale.com');

INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Lighthouse Labs Quiz', 'Miscellaneous', 1);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Supreme Video Game Quiz', 'Video Games', 2);
-- delete these quizzes afterwards, only for making my quizzes table
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Mario Adventure', 'Video Games', 1);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Valorant Agents', 'Video Games', 2);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Oscar Nominations', 'Movies', 1);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Overwatch Lore', 'Video Games', 2);
INSERT INTO quizzes (public, title, category, user_id) VALUES (false, 'Computers', 'Technology', 1);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Andy Lindsay Secret Quiz', 'Secret', 2);

INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Garys Warcraft III Trivia', 'Video Games', 2);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Greatest Hockey Teams', 'Sports', 1);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Best Football Players of All Time', 'Sports', 1);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Golfers Unite', 'Sports', 1);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Bradleys Hockey QUIZ!', 'Sports', 2);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'F1 QUIZ!', 'Sports', 1);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'WAR HISTORY!!!', 'History', 1);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Sydanias Music History Quiz', 'Music', 2);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Greatest Movies of the 21st Century', 'Movies', 1);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Cats Quiz On Movies', 'Movies', 2);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Geography Travel Quiz', 'Geography', 1);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Anagrams!', 'Geography', 1);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'South Korea Quiz!', 'Geography', 1);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'Greatest Action Movies!', 'Movies', 1);
INSERT INTO quizzes (public, title, category, user_id) VALUES (true, 'DO YOU KNOW ROCK?', 'Music', 1);


-- Questions for LHL quiz!
INSERT INTO questions (question, quiz_id) VALUES ('Which Program Are We In?', 1);
INSERT INTO questions (question, quiz_id) VALUES ('Which Cohort Are We?', 1);
INSERT INTO questions (question, quiz_id) VALUES ('Who Named Our Cohort "Cookie Monsters?"', 1);
INSERT INTO questions (question, quiz_id) VALUES ('Which Island Does Nally Live On?', 1);
INSERT INTO questions (question, quiz_id) VALUES ('Which Person SQL Injected Themself on Stream?', 1);


INSERT INTO answers (correct_answer, incorrect_answers, question_id) VALUES ('Web Development', ARRAY ['Data Science','Gaming','Wrestling'], 1);
INSERT INTO answers (correct_answer, incorrect_answers, question_id) VALUES ('March 1st', ARRAY ['March 29th','January 1st','February 1st'], 2);
INSERT INTO answers (correct_answer, incorrect_answers, question_id) VALUES ('Nally', ARRAY ['Andy','Cat','Khurram'], 3);
INSERT INTO answers (correct_answer, incorrect_answers, question_id) VALUES ('Galiano Island', ARRAY ['Denman Island','Salt Spring Island','Vancouver Island'], 4);
INSERT INTO answers (correct_answer, incorrect_answers, question_id) VALUES ('NALLY!?', ARRAY ['ANDY!?','GARRY!?','SYDANIA!?'], 5);

INSERT INTO quiz_attempts (user_id, quiz_id) VALUES (1,1);
INSERT INTO quiz_attempts (user_id, quiz_id) VALUES (1,2);

INSERT INTO quiz_attempt_results (quiz_attempt_id, question_id, answer_id, total) VALUES (1,1,1,6);
INSERT INTO quiz_attempt_results (quiz_attempt_id, question_id, answer_id, total) VALUES (2,1,1,10);
