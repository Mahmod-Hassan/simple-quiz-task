import React, { useState } from 'react';
import { questions } from './questions'; // Assuming you have a file with questions

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 <= questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <div className="quiz-container">
      {currentQuestion < questions.length ? (
        <>
          <h1>Question {currentQuestion + 1}</h1>
          <h2>{questions[currentQuestion].question}</h2>
          <ol style={{display: "grid", gap: '10px'}}>
            {questions[currentQuestion].options.map((option, index) => (
              <li style={{border: '1px solid black', width: '300px', cursor:'pointer'}} key={index} onClick={() => handleAnswerClick(option.isCorrect)}>
                {option.text}
              </li>
            ))}
          </ol>
        </>
      ) : (
        <div className="quiz-results">
          <h1>Quiz Completed!</h1>
          <p>Your score: {score} / {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;