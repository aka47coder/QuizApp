
$(document).ready(function() {
    const user_id = 1;
    //fill main box with all time results by defult
    if(!document.getElementById("ourflag")) {
      $.ajax({
          method:'GET',
          url: `/results/all`
        })
        .then((data)=>{
          for (const record in data) {
              $(document.getElementById("rc")).append(data[record].title);
              $(document.getElementById("rc")).append('<br>');
              $(document.getElementById("rc")).append(`${data[record].total}/50`);
              $(document.getElementById("rc")).append('<br>');
          };
          $(document.getElementById("all-time")).addClass("clicked");
        });
    }
      //populate the menu box with all quizzes taken
     

      //clicking the all time button grabs all quiz results and displays them
      $("#all-time").on("click", function(event) {
        $.ajax({
            method:'GET',
            url: `/results/all`
          })
          .then((data)=>{
            $(document.getElementById("rc")).empty();
            for (const record in data) {
                $(document.getElementById("rc")).append(data[record].title);
                $(document.getElementById("rc")).append('<br>');
                $(document.getElementById("rc")).append(`${data[record].total}/50`);
                $(document.getElementById("rc")).append('<br>');
            };
            $(this).parent().children().removeClass("clicked");
            $(document.getElementById("all-time")).addClass("clicked");
          });
      });
      $.ajax({
        method:'GET',
        url: `/results/quizzes/${user_id}`
      })
      .then((quizzes)=>{
          for (const record in quizzes) {
            $(document.getElementById("quizzes-done")).append(`<p class="quizzes-completed" data="${quizzes[record].id}">${quizzes[record].title}</p>`);
          }
      })
      .then(()=>{
        //listener for clicking quizzes on left side. displays them in main box
        $(".quizzes-completed").on("click", function(event) {
            $(this).parent().children().removeClass("clicked");
            $(this).addClass("clicked");
            let quizNumber = $(this)[0].getAttribute('data');
            $.ajax({
                method:'GET',
                url: `/results/api/${quizNumber}`
            })
            .then((data)=>{
                for (const record in data) {
                    $(document.getElementById("rc")).empty();
                    $(document.getElementById("rc")).append(data[record].title);
                    $(document.getElementById("rc")).append('<br>');
                    $(document.getElementById("rc")).append(`${data[record].total}/50`);
                    $(document.getElementById("rc")).append('<br>');
                }; 
            });
        });
      })
});