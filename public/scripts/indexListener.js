$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: `/quiz/all/public`
  })
  .then((rows) => {
    console.log("PUBLIC QUIZZES", rows[0].title);
    for (const row in rows) {
      $(document.getElementById("public-name-of-quiz")).append(rows[row].title);
      $(document.getElementById("public-name-of-quiz")).append("<br>");
      $(document.getElementById("public-category-of-quiz")).append(rows[row].category);
      $(document.getElementById("public-category-of-quiz")).append("<br>");
      let link = document.createElement('a');
      link.setAttribute('href', `/quiz/:${rows[row].id}`);
      link.innerHTML = rows[row].id;
      $(document.getElementById("public-quiz-id-number")).append(link);
      $(document.getElementById("public-quiz-id-number")).append("<br>");
    }
  })

  $.ajax({
    method: 'GET',
    url: `/quiz/all/user`
  })
  .then((userQuizzes) => {
    console.log("USER QUIZZES", userQuizzes.data[0].title);
    if (!userQuizzes.user_id) {
      $("#user-made-quizzes").hide()
    } else {
        for (const userQuiz of userQuizzes.data) {
        $(document.getElementById("user-name-of-quiz")).append(userQuiz.title);
        $(document.getElementById("user-name-of-quiz")).append("<br>");
        $(document.getElementById("user-category-of-quiz")).append(userQuiz.category);
        $(document.getElementById("user-category-of-quiz")).append("<br>");
        let userLink = document.createElement('a');
        userLink.setAttribute('href', `/quiz/:${userQuiz.id}`);
        userLink.innerHTML = userQuiz.id;
        $(document.getElementById("user-quiz-id-number")).append(userLink);
        $(document.getElementById("user-quiz-id-number")).append("<br>");
      }
    }
  })

  $.ajax({
    method: 'GET',
    url: `/quiz/all/user/private`
  })
  .then((userPrivate) => {
    console.log("USERPRIVATE", userPrivate)
    console.log("PRIVATE USER QUIZZES", userPrivate.data[0].title);
    if (!userPrivate.user_id) {
      $("#private-data").hide()
    } else {
      for (const userPriv of userPrivate.data) {
        $(document.getElementById("user-private-name-of-quiz")).append(userPriv.title);
        $(document.getElementById("user-private-name-of-quiz")).append("<br>");
        $(document.getElementById("user-private-cat-of-quiz")).append(userPriv.category);
        $(document.getElementById("user-private-cat-of-quiz")).append("<br>");
        let privLink = document.createElement('a');
        privLink.setAttribute('href', `/quiz/:${userPriv.id}`);
        privLink.innerHTML = userPriv.id;
        $(document.getElementById("user-private-quiz-id-number")).append(privLink);
        $(document.getElementById("user-private-quiz-id-number")).append("<br>");
      }
    }
  })

});

