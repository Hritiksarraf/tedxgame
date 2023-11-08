let tog = 1;
let rollingSound = new Audio("rpg-dice-rolling-95182.mp3");
let winSound = new Audio("winharpsichord-39642.mp3");

let p1sum = 0;
let p2sum = 0;

// make the variable to use in the  function
const quizModal = document.getElementById("quizModal");
const questionElement = document.getElementById("question");
const options = document.querySelectorAll('input[name="answer"]');
const submitButton = document.getElementById("submitAnswer");
const quizModalsnake = document.getElementById("quizModalsnake");
const submitButtons = document.getElementById("submitAnswers");
const questionElements = document.getElementById("questions");




// these are the question for the quick quize
const ladderQuestions = {
  1: {
    question: "What is the capital of France?",
    option1: "mani",
    option2: "hritik",
    option3: "sarraf",
    option3: "stranger",
    correctAnswer: "hritik",
  },
  2: {
    question: "Which planet is known as the Red Planet?",
    option1: "Mars",
    option2: "Venus",
    option3: "Jupiter",
    option4: "Saturn",
    correctAnswer: "Mars",
  },
  3: {
    question: "What is the largest mammal on Earth?",
    option1: "Blue Whale",
    option2: "African Elephant",
    option3: "Giraffe",
    option4: "Hippopotamus",
    correctAnswer: "Blue Whale",
  },
  4: {
    question: 'Who wrote the play "Romeo and Juliet"?',
    option1: "William Shakespeare",
    option2: "Leo Tolstoy",
    option3: "Charles Dickens",
    option4: "Jane Austen",
    correctAnswer: "William Shakespeare",
  },
  5: {
    question: "What is the chemical symbol for gold?",
    option1: "Au",
    option2: "Ag",
    option3: "Fe",
    option4: "Cu",
    correctAnswer: "Au",
  },
  6: {
    question: "Which gas do plants absorb from the atmosphere?",
    option1: "Carbon Dioxide",
    option2: "Oxygen",
    option3: "Methane",
    option4: "Hydrogen",
    correctAnswer: "Carbon Dioxide",
  },
  7: {
    question: "What is the largest organ in the human body?",
    option1: "Skin",
    option2: "Heart",
    option3: "Brain",
    option4: "Liver",
    correctAnswer: "Skin",
  },
  8: {
    question: "Who painted the Mona Lisa?",
    option1: "Leonardo da Vinci",
    option2: "Pablo Picasso",
    option3: "Vincent van Gogh",
    option4: "Michelangelo",
    correctAnswer: "Leonardo da Vinci",
  },
  9: {
    question: "What is the capital of Japan?",
    option1: "Tokyo",
    option2: "Beijing",
    option3: "Seoul",
    option4: "Bangkok",
    correctAnswer: "Tokyo",
  },
  10: {
    question: "Which gas is most abundant in Earth's atmosphere?",
    option1: "Nitrogen",
    option2: "Oxygen",
    option3: "Carbon Dioxide",
    option4: "Argon",
    correctAnswer: "Nitrogen",
  },
};

let currentLadderSquare = 14; // Initialize currentLadderSquare as a global variable.

// this is the function to display the question if player steps on a ladder
function displayQuizQuestion(squareNumber) {
  const question = ladderQuestions[squareNumber];

  if (question) {
    questionElement.textContent = question.question;
    document.getElementById("button1").value = question.option1;
    document.getElementById("button2").value = question.option2;
    document.getElementById("button3").value = question.option3;
    document.getElementById("button4").value = question.option4;
    document.getElementById("option1Text").textContent = question.option1;
    document.getElementById("option2Text").textContent = question.option2;
    document.getElementById("option3Text").textContent = question.option3;
    document.getElementById("option4Text").textContent = question.option4;
    quizModal.style.display = "block";
  }
}



// this is the function to display the question if player steps on a snake 
function displayQuizQuestionsnake(squareNumber) {
  const question = ladderQuestions[squareNumber];

  if (question) {
    questionElements.textContent = question.question;
    document.getElementById("button1s").value = question.option1;
    document.getElementById("button2s").value = question.option2;
    document.getElementById("button3s").value = question.option3;
    document.getElementById("button4s").value = question.option4;
    document.getElementById("option1Texts").textContent = question.option1;
    document.getElementById("option2Texts").textContent = question.option2;
    document.getElementById("option3Texts").textContent = question.option3;
    document.getElementById("option4Texts").textContent = question.option4;
    console.log(document.getElementById("button1s").value)
    quizModalsnake.style.display = "block";
  }
}





//the function to check where the player is and act acordingly
function play(player, psum, correction, num) {
  let sum;
  if (psum == "p1sum") {
    p1sum = p1sum + num;

    if (p1sum > 100) {
      p1sum = p1sum - num;
      // sum = p1sum
    }

    if (p1sum == 5) {
      squareNumber = Math.floor(Math.random() * 10) + 1;
      currentLadderSquare = 25;
      displayQuizQuestion(squareNumber);
    }
    if (p1sum == 14) {
      squareNumber = Math.floor(Math.random() * 10) + 1;
      currentLadderSquare = 29;
      displayQuizQuestion(squareNumber);
    }
    if (p1sum == 18) {
      squareNumber = Math.floor(Math.random() * 10) + 1;
      currentLadderSquare = 39;
      displayQuizQuestion(squareNumber);
    }
    if (p1sum == 34) {
      squareNumber = Math.floor(Math.random() * 10) + 1;
      currentLadderSquare = 53;
      displayQuizQuestion(squareNumber);
    }
    if (p1sum == 37) {
      squareNumber = Math.floor(Math.random() * 10) + 1;
      currentLadderSquare = 58;
      displayQuizQuestion(squareNumber);
    }
    if (p1sum == 55) {
      squareNumber = Math.floor(Math.random() * 10) + 1;
      currentLadderSquare = 76;
      displayQuizQuestion(squareNumber);
    }
    if (p1sum == 64) {
      squareNumber = Math.floor(Math.random() * 10) + 1;
      currentLadderSquare = 82;
      displayQuizQuestion(squareNumber);
    }
    if (p1sum == 67) {
      squareNumber = Math.floor(Math.random() * 10) + 1;
      currentLadderSquare = 89;
      displayQuizQuestion(squareNumber);
    }
    if (p1sum == 21) {
      squareNumber = Math.floor(Math.random() * 10) + 1;
      currentLadderSquare = 3;
      displayQuizQuestionsanke(squareNumber);
    }
    if (p1sum == 27) {
      squareNumber = Math.floor(Math.random() * 10) + 1;
      currentLadderSquare = 9;
      displayQuizQuestionsnake(squareNumber);
    }
    if (p1sum == 59) {
      squareNumber = Math.floor(Math.random() * 10) + 1;
      currentLadderSquare = 4;
      displayQuizQuestionsnake(squareNumber);
    }
    if (p1sum == 56) {
      squareNumber = Math.floor(Math.random() * 10) + 1;
      currentLadderSquare = 26;
      displayQuizQuestionsnake(squareNumber);
  }if (p1sum == 69) {
    squareNumber = Math.floor(Math.random() * 10) + 1;
    currentLadderSquare = 31;
    displayQuizQuestionsnake(squareNumber);
}
if (p1sum == 80) {
  squareNumber = Math.floor(Math.random() * 10) + 1;
  currentLadderSquare = 58;
  displayQuizQuestionsnake(squareNumber);
}
if (p1sum == 95) {
  squareNumber = Math.floor(Math.random() * 10) + 1;
  currentLadderSquare = 73;
  displayQuizQuestionsnake(squareNumber);
}
if (p1sum == 97) {
  squareNumber = Math.floor(Math.random() * 10) + 1;
  currentLadderSquare = 75;
  displayQuizQuestionsnake(squareNumber);
}
if (p1sum == 99) {
  squareNumber = Math.floor(Math.random() * 10) + 1;
  currentLadderSquare = 44;
  displayQuizQuestionsnake(squareNumber);
}

    sum = p1sum;
  }

  document.getElementById(`${player}`).style.transition = `linear all .7s`;

  if (sum < 10) {
    document.getElementById(`${player}`).style.left = `${(sum - 1) * 60}px`;
    document.getElementById(`${player}`).style.top = `${
      -0 * 60 - correction
    }px`;
  } else if (sum == 100) {
    winSound.play();
    alert("Hey you won and your score is:_____");
    location.reload();
  } else {
    numarr = Array.from(String(sum));
    n1 = eval(numarr.shift());
    n2 = eval(numarr.pop());
    console.log(n1, n2);

    if (n1 % 2 != 0) {
      if (n2 == 0) {
        document.getElementById(`${player}`).style.left = `${9 * 62}px`;
        document.getElementById(`${player}`).style.top = `${
          (-n1 + 1) * 62 - correction
        }px`;
      } else {
        document.getElementById(`${player}`).style.left = `${
          (9 - (n2 - 1)) * 62
        }px`;
        document.getElementById(`${player}`).style.top = `${
          -n1 * 62 - correction
        }px`;
      }
    } else if (n1 % 2 == 0) {
      if (n2 == 0) {
        document.getElementById(`${player}`).style.left = `${0 * 62}px`;
        document.getElementById(`${player}`).style.top = `${
          (-n1 + 1) * 62 - correction
        }px`;
      } else {
        document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`;
        document.getElementById(`${player}`).style.top = `${
          -n1 * 62 - correction
        }px`;
      }
    }
  }
}

//this is the function to roll the dice
document.getElementById("diceBtn").addEventListener("click", function () {
  rollingSound.play();
  // num = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  num=27

  document.getElementById("dice").innerText = num;
  document.getElementById("tog").innerText = "Walk on your career journey";
  play("p1", "p1sum", -7, num);
});













//this is the function to check the ans for ladder question and act acordingly
submitButton.addEventListener("click", () => {
  const selectedAnswer = Array.from(options).find((option) => option.checked);

  console.log(document.getElementById("button1").value);

  if (selectedAnswer) {
    if (selectedAnswer.value === ladderQuestions[squareNumber].correctAnswer) {
      // alert('Correct answer! You can climb the ladder.');
      p1sum = currentLadderSquare; // Update the player's position.
      play("p1", "p1sum", -7, 0); // You might need to adjust these values.
    } else {
      alert("Incorrect answer! You stay wher");
    }

    quizModal.style.display = "none";
  }
});


//this the the function to the ans for the snake question and act accordingly 
submitButtons.addEventListener("click", () => {
  const selectedAnswer = Array.from(options).find((option) => option.checked);

  console.log(document.getElementById("button1").value);

  if (selectedAnswer) {
    if (selectedAnswer.value !== ladderQuestions[squareNumber].correctAnswer) {
      // alert('Correct answer! You can climb the ladder.');
      p1sum = currentLadderSquare; // Update the player's position.
      play("p1", "p1sum", -7, 0); // You might need to adjust these values.
    } else {
      alert("correct ans stay where you are");
    }

    quizModalsnake.style.display = "none";
  }
});



//this is used for slecting the options
function selectOption(inputId) {
  var input = document.getElementById(inputId);
  input.checked = true;
}
