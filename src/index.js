import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Presentation from './components/title/Title'
import Quiz from './components/quiz/Quiz';

const root = ReactDOM.createRoot(document.getElementById('root'));

const questions = [
  {
    question: '¿Cuál es nuestro lugar?',
    options: ['La Casa', 'La U', 'El mirador del aeropuerto', 'La Cicloruta'],
    correctAnswer: 'El mirador del aeropuerto',
  },
  {
    question: '¿Donde queda "nuestra banca"?',
    options: ['En la U', 'En el parque de tu casa', 'Plaza Mayor', 'En el conjunto de tus nonos'],
    correctAnswer: 'Plaza Mayor',
  },
  {
    question: '¿La primera vez que salimos fue a:?',
    options: ['Comer Pizza', 'Ir a cicloruta', 'Tu casa', 'Home Center'],
    correctAnswer: 'Comer Pizza',
  },
  {
    question: '¿Nuestro primer plan especial fue a:?',
    options: ['La hacienda napoles', 'Una Cascada', 'Jardin Botanico', 'Salir de compras juntos'],
    correctAnswer: 'Jardin Botanico',
  },
];

root.render(
  <React.StrictMode>
    <Presentation/>
    <Quiz questions={questions} />
  </React.StrictMode>
);
