var timeLeft = 60;

document.getElementById("begin-quiz").addEventListener("click", function () {
  var countdown = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(countdown);
      document.getElementById("timer").innerHTML = "Time's Up!";
    } else {
      document.getElementById("timer").innerHTML = timeLeft;
    }
    timeLeft -= 1;
  }, 1000);
});

// questions and answers
var questions = [
  {
    question: "What tag do you use to insert JavaScript into HTML?",
    answers: ["<js>", "<javascript>", "<script>", "<style>"],
    correctAnswer: "<script>",
  },
  {
    question:
      "Where is the best place to insert the JavaScript file into HTML?",
    answers: ["head", "top of body", "footer", "bottom of body"],
    correctAnswer: "bottom of body",
  },
  {
    question: "How do you call a function named 'myFunction'",
    answers: [
      "call function",
      "myFunction()",
      "call myFunction()",
      "run myFunction()",
    ],
    correctAnswer: "myFunction()",
  },
  {
    question: "How do you write a comment in JavaScript",
    answers: [
      "<!-- this is a comment -->",
      "{this is a comment}",
      "// this is a comment",
      "' this is a comment '",
    ],
    correctAnswer: "// this is a comment",
  },
  {
    question: "Which value is used to assign a value to a variable?",
    answers: ["=", "+", "-", "#"],
    correctAnswer: "=",
  },
];

// begin quiz
