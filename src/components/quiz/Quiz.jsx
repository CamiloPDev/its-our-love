import React, { useState } from 'react';
import './Quiz.css'

const Quiz = ({questions}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (answer) => {
    setAnswered(true);
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setAnswered(false);
    setSelectedAnswer('');
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="container">
      <div className='container-quiz'>
        <h1 className='title-quiz letter'>Preguntas de nuestra historia</h1>
        {!quizFinished ? (
          <div>
            <h2 className='letter center'>{questions[currentQuestionIndex].question}</h2>
            <div className='quiz-options'>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={answered}
                  style={{ backgroundColor: answered && option === selectedAnswer ? (option === questions[currentQuestionIndex].correctAnswer ? 'green' : 'red') : '' }}
                >
                  {option}
                </button>
              ))}
            </div>
            {answered && <button onClick={handleNextQuestion}>Siguiente pregunta</button>}
          </div>
        ) : (
          <div>
            <p className='letter'>Tu puntuación es: {score}/{questions.length}</p>
            {score === questions.length ? (
              <div>
                <h3 className='letter'>¡Premio! Has respondido todas las preguntas correctamente.</h3>
                <div className="invitation">
                  <h2>Estas invitada a una cita con el amor de tu vida</h2>
                  <h3>Hora: 8:30 PM</h3>
                  <img src={`${process.env.PUBLIC_URL}/cat.jpg`} alt="cat" />
                </div>
              </div>
            ) : (
              <div>
                <h3 className='letter'>Amor sin palabras jajajajajaj</h3>
                <p className='letter'>actualiza y vuelve a intentar.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
