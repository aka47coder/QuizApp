$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: `/quiz/all/user/private`
  })
  .then((usepriv) => {
    console.log("USERPRIVATE", usepriv)
    console.log("PRIVATE USER QUIZZES", usepriv.data[0].title);
    if (!usepriv.user_id) {
      $("#private-data").hide()
    } else {
      for (const priv of usepriv.data) {
        $(document.getElementById("user-private-name-of-quiz")).append(priv.title);
        $(document.getElementById("user-private-name-of-quiz")).append("<br>");
        $(document.getElementById("user-private-cat-of-quiz")).append(priv.category);
        $(document.getElementById("user-private-cat-of-quiz")).append("<br>");
        let privLink = document.createElement('a');
        privLink.setAttribute('href', `/quiz/:${priv.id}`);
        privLink.innerHTML = priv.id;
        $(document.getElementById("user-private-quiz-id-number")).append(privLink);
        $(document.getElementById("user-private-quiz-id-number")).append("<br>");
      }
    }
  })

  $.ajax({
    method: 'GET',
    url: `/quiz/all/user`
  })
  .then((quzuser) => {
    console.log("USER QUIZZES", quzuser.data[0].title);
    if (!quzuser.user_id) {
      $("#user-made-quizzes").hide()
    } else {
        for (const userQuiz of quzuser.data) {
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
    url: `/quiz/all/public`
  })
  .then((rowarethese) => {
    console.log("PUBLIC QUIZZES", rowarethese[0].title);
    for (const row in rowarethese) {
      $(document.getElementById("public-name-of-quiz")).append(rowarethese[row].title);
      $(document.getElementById("public-name-of-quiz")).append("<br>");
      $(document.getElementById("public-category-of-quiz")).append(rowarethese[row].category);
      $(document.getElementById("public-category-of-quiz")).append("<br>");
      let link = document.createElement('a');
      link.setAttribute('href', `/quiz/:${rowarethese[row].id}`);
      link.innerHTML = rowarethese[row].id;
      $(document.getElementById("public-quiz-id-number")).append(link);
      $(document.getElementById("public-quiz-id-number")).append("<br>");
    }
  })
});

