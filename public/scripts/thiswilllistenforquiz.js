//listens during the quiz

$(document).ready(function() {
  $(document.getElementById("qb")).hide();
  const quizID = window.location.pathname.slice(7);
  console.log("is this a string ?", quizID);
  let cq = -1;
  let questionTime = 5;
  let totalPoints = 0;
  let answer = null;
  let attemptNumber = 0;

  
  

  

  const questionTimer = (quiz) => {
    questionTime -= 1;
    document.getElementById("question-timer").innerHTML = questionTime;
    if (questionTime === 0) {
      $(document.getElementById("qb")).show();
      try {
        //obtain the id of the selected response
        answer = document.getElementsByClassName("clicked")[0].id;
        console.log("answer picked:", answer);
        //reset buttons
        $(document.getElementsByClassName("clicked")).removeClass("clicked");
      }
      catch (err) {answer = null;};
      //If the answer is accurate, add points to the total.
      if (answer === 'a') {
        totalPoints += 10;
        document.getElementById("score").innerText = totalPoints;
        //(UPDATE quiz attempt results SET total = #newTotalPoints#) send an update to the database
        $.ajax({
          method:'POST',
          url: `/results/${quizID}`,
          data: {totalPoints, attemptNumber}
        });
      };
      //reset the timer and ask a new question
      questionTime = 10;
      cq++;
      //Check to see if the quiz is completed; if so, proceed to the results page.
      if ((cq) === quiz.length) {
        // Before going to the results page, there's one more score update.
        $.ajax({
          method:'POST',
          url: `/results/${quizID}`,
          data: {totalPoints, attemptNumber}
        })
        .then(()=>{
          console.log("go! be free!");
          window.location.href = `/results/${attemptNumber}`;
        })

        
      } else {
        document.getElementById("title").innerText = quiz[0].title;
        document.getElementById("quiz-length-bar-label").innerText = `${cq+1}/${quiz.length}`;
        $(document.getElementById("quiz-length-bar")).val(cq+1);
        document.getElementById("quiz-length-bar").max = quiz.length;
        console.log("how long is this>",quiz.length);
        //switch up the questions and answers
        document.getElementById("question").innerHTML = quiz[cq].question;
        $(document.getElementById("ab1")).shuffleChildren();
        document.getElementById("a").innerHTML = quiz[cq].correct_answer;
        document.getElementById("b").innerHTML = quiz[cq].incorrect_answers[0];
        document.getElementById("c").innerHTML = quiz[cq].incorrect_answers[1];
        document.getElementById("d").innerHTML = quiz[cq].incorrect_answers[2];
        //gives the selected answer a class
        $("button").on("click", function(event) {
          event.preventDefault();
          $(this).parent().children().removeClass("clicked");
          $(this).addClass("clicked");
        });
      }
    }
  };
  $.fn.shuffleChildren = function() {
    $.each(this.get(), function(index, el) {
      var $el = $(el);
      var $find = $el.children();
  
      $find.sort(function() {
        return 0.5 - Math.random();
      });
  
      $el.empty();
      $find.appendTo($el);
    });
  };
  const getQuiz = (id)=>{
    $.ajax({
      method:'get',
      url: `/quiz/${id}/data`
    })
    .then((quiz)=>{
      console.log("here is your new quiz", quiz);
      let myVar = setInterval(()=>{questionTimer(quiz)}, 1000);
    })
    .catch((err)=>{
      console.log(err.message);
    });
  };
  getQuiz(quizID);
  $.ajax({
    method:'POST',
    url: `/results`,
    data: {quizID}
  })
  .then((data)=>{
    console.log("This is the number of the attempt", data.rows[0].id);
    attemptNumber = data.rows[0].id;
  });
  

});