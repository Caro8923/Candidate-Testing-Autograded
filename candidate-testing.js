const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2

let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers =[];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //;
  candidateName = input.question("Candidate Name: ");
};


function askQuestion() {

  for (i = 0; i < questions.length; i++) {
    let candidateTestAnswer = input.question((i+1) + ") " + questions[i]);
    candidateAnswers.push(candidateTestAnswer);
    console.log(`Your Answer: ${candidateTestAnswer} \nCorrect Answer: ${correctAnswers[i]} \n`);
  };
};
  
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

/* Part 1 Answer
candidateAnswer = input.question(question);
*/

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
 /* Part 1.2c Answer
  if (candidateAnswer === correctAnswer) {
console.log("Correct");
  } else {
    console.log("Incorrect");
  };
    */



  let grade ;  //TODO 3.2 use this variable to calculate the candidates score.
  let numCorrectAnswers = 0;

  for (i = 0; i < questions.length; i++) {
    if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      numCorrectAnswers += 1
    };
  };
  grade = numCorrectAnswers / questions.length * 100;

  console.log(`>>> Overall Grade: ${grade}% (${numCorrectAnswers} of ${questions.length} responses correct) <<<`);

  if (grade >= 80){
    console.log(">>> Status: PASSED <<<");
  } else {
    console.log(">>> Status: FAILED <<<");
  };

  

  return grade;
};

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello " + candidateName);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
};

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};