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
        $(document.getElementById("userpricquiz12")).append(priv.title);
        $(document.getElementById("userpricquiz12")).append("<br>");
        $(document.getElementById("usercatquiz")).append(priv.category);
        $(document.getElementById("usercatquiz")).append("<br>");
        let privLink = document.createElement('a');
        privLink.setAttribute('href', `/quiz/:${priv.id}`);
        privLink.innerHTML = priv.id;
        $(document.getElementById("userprivatequiznum12")).append(privLink);
        $(document.getElementById("userprivatequiznum12")).append("<br>");
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
        $(document.getElementById("usernamequiz")).append(userQuiz.title);
        $(document.getElementById("usernamequiz")).append("<br>");
        $(document.getElementById("usercatogory")).append(userQuiz.category);
        $(document.getElementById("usercatogory")).append("<br>");
        let userLink = document.createElement('a');
        userLink.setAttribute('href', `/quiz/:${userQuiz.id}`);
        userLink.innerHTML = userQuiz.id;
        $(document.getElementById("quizid")).append(userLink);
        $(document.getElementById("quizid")).append("<br>");
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
      $(document.getElementById("nameofquiz")).append(rowarethese[row].title);
      $(document.getElementById("nameofquiz")).append("<br>");
      $(document.getElementById("publiccatquiz1")).append(rowarethese[row].category);
      $(document.getElementById("publiccatquiz1")).append("<br>");
      let link = document.createElement('a');
      link.setAttribute('href', `/quiz/:${rowarethese[row].id}`);
      link.innerHTML = rowarethese[row].id;
      $(document.getElementById("pubquizid")).append(link);
      $(document.getElementById("pubquizid")).append("<br>");
    }
  })
});

