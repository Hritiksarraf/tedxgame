let tog = 1
let rollingSound = new Audio('rpg-dice-rolling-95182.mp3')
let winSound = new Audio('winharpsichord-39642.mp3')



let p1sum = 0
let p2sum = 0
 

// starting a new chat gpt code 
const quizModal = document.getElementById('quizModal');
const questionElement = document.getElementById('question');
const options = document.querySelectorAll('input[name="answer"]');
const submitButton = document.getElementById('submitAnswer');


const ladderQuestions = {
  1: {
    question: 'What is the capital of France?',
    option1:"mani",
    option2:"hritik",
    option3:"sarraf",
    option3:"stranger",
    correctAnswer: 'hritik',
  },
  2: {
    question: 'Which planet is known as the Red Planet?',
    option1: 'Mars',
    option2: 'Venus',
    option3: 'Jupiter',
    option4: 'Saturn',
    correctAnswer: 'Mars',
  },
  3: {
    question: 'What is the largest mammal on Earth?',
    option1: 'Blue Whale',
    option2: 'African Elephant',
    option3: 'Giraffe',
    option4: 'Hippopotamus',
    correctAnswer: 'Blue Whale',
  },
  4: {
    question: 'Who wrote the play "Romeo and Juliet"?',
    option1: 'William Shakespeare',
    option2: 'Leo Tolstoy',
    option3: 'Charles Dickens',
    option4: 'Jane Austen',
    correctAnswer: 'William Shakespeare',
  },
  5: {
    question: 'What is the chemical symbol for gold?',
    option1: 'Au',
    option2: 'Ag',
    option3: 'Fe',
    option4: 'Cu',
    correctAnswer: 'Au',
  },
  6: {
    question: 'Which gas do plants absorb from the atmosphere?',
    option1: 'Carbon Dioxide',
    option2: 'Oxygen',
    option3: 'Methane',
    option4: 'Hydrogen',
    correctAnswer: 'Carbon Dioxide',
  },
  7: {
    question: 'What is the largest organ in the human body?',
    option1: 'Skin',
    option2: 'Heart',
    option3: 'Brain',
    option4: 'Liver',
    correctAnswer: 'Skin',
  },
  8: {
    question: 'Who painted the Mona Lisa?',
    option1: 'Leonardo da Vinci',
    option2: 'Pablo Picasso',
    option3: 'Vincent van Gogh',
    option4: 'Michelangelo',
    correctAnswer: 'Leonardo da Vinci',
  },
  9: {
    question: 'What is the capital of Japan?',
    option1: 'Tokyo',
    option2: 'Beijing',
    option3: 'Seoul',
    option4: 'Bangkok',
    correctAnswer: 'Tokyo',
  },
  10: {
    question: 'Which gas is most abundant in Earth\'s atmosphere?',
    option1: 'Nitrogen',
    option2: 'Oxygen',
    option3: 'Carbon Dioxide',
    option4: 'Argon',
    correctAnswer: 'Nitrogen',
  },
};





let currentLadderSquare = 14; // Initialize currentLadderSquare as a global variable.


function displayQuizQuestion(squareNumber) {
  const question = ladderQuestions[squareNumber];

  if (question) {
    questionElement.textContent = question.question;
    document.getElementById("button1").value = question.option1;
    document.getElementById("button2").value = question.option2;
    document.getElementById("button3").value = question.option3;
    document.getElementById("button4").value = question.option4;
    document.getElementById('option1').innerText = question.option1;
    document.getElementById('option2').innerText = question.option2;
    document.getElementById('option3').innerText = question.option3;
    document.getElementById('option4').innerText = question.option4;
    quizModal.style.display = 'block';
  }
}





function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
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
        

        sum = p1sum



    }

   


    document.getElementById(`${player}`).style.transition = `linear all .7s`





    if (sum < 10) {

        document.getElementById(`${player}`).style.left = `${(sum - 1) * 60}px`
        document.getElementById(`${player}`).style.top = `${-0 * 60 - correction}px`


    }

    else if (sum == 100) {
        winSound.play()
        alert("Hey you won and your score is:_____")
        location.reload()
    }

    else {

        numarr = Array.from(String(sum))
        n1 = eval(numarr.shift())
        n2 = eval(numarr.pop())
        console.log(n1, n2)

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {

                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }

        }



    }
}


document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    num = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    
    document.getElementById("dice").innerText = num
    document.getElementById('tog').innerText = "Walk on your career journey"
        play('p1', 'p1sum', -7, num)





})






  submitButton.addEventListener('click', () => {
    const selectedAnswer = Array.from(options).find(option => option.checked);

    console.log(document.getElementById("button1").value)
  
    if (selectedAnswer) {
      if (selectedAnswer.value === ladderQuestions[squareNumber].correctAnswer) {
        // alert('Correct answer! You can climb the ladder.');
        p1sum = currentLadderSquare; // Update the player's position.
        play('p1', 'p1sum', -7, 0); // You might need to adjust these values.
      } else {
        alert('Incorrect answer! You stay where you are.');
      }
  
      quizModal.style.display = 'none';
    }
  });