import React, { useState, useEffect } from 'react';
import Square from './Square';
import Modal from './Modal';
import ResultModal from './ResultModal';
import questions from './question';

const messages = [
  { text: 'Go', image: null },
  { text: '#1', image: null },
  { text: '#2', image: 'question.gif' },
  { text: '#3', image: null },
  { text: '#4', image: null },
  { text: '#5', image: null },
  { text: '#6', image: 'chest.webp' },
  { text: '#7', image: null },
  { text: '#8', image: 'water.jpg' },
  { text: '#9', image: null },
  { text: 'Jail', image: null},
  { text: '#10', image: null },
  { text: '#11', image: null },
  { text: '#12', image: null },
  { text: '#13', image: null },
  { text: '#14', image: 'chest2.webp' },
  { text: '#15', image: 'chest3.webp' },
  { text: '#16', image: 'question2.gif'  },
  { text: '#17', image: null },
  { text: '#18', image: null },
  { text: '#19', image: null },
  { text: '#20', image: null },
  { text: '#21', image: 'question3.gif'  },
  { text: '#22', image: null },
  { text: '#23', image: null },
  { text: '#24', image: 'electric.jpg' },
  { text: '#25', image: 'luxur.webp' },
  { text: '#26', image: null },
  { text: '#27', image: null },
  { text: '#28', image: null },
  { text: '#29', image: null },
  { text: '#30', image: null },
  { text: '#31', image: 'question.gif'  },
  { text: '#32', image: null },
  { text: '#33', image: null },
  { text: '#34', image: 'tax.png' },
  { text: '#35', image: null },
  { text: '#36', image: 'chest.webp' },
  { text: '#37', image: null },
  { text: '#38', image: null },
];

const specialIndices = [10, 12, 14, 16, 18, 20, 22, 24, 26];
const questionIndices = [2, 17, 22, 32];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Board = () => {
  const [firstDieResult, setFirstDieResult] = useState(1);
  const [secondDieResult, setSecondDieResult] = useState(6);
  const [position, setPosition] = useState(0);
  const [stepsRemaining, setStepsRemaining] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [total, setTotal] = useState(10000);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  const [questionQueue, setQuestionQueue] = useState(shuffleArray([...questions]));

  useEffect(() => {
    console.log(questionQueue);
    if (stepsRemaining > 0) {
      setIsMoving(true);

      const intervalId = setInterval(() => {
        setPosition((prevPosition) => {
          let newPosition;

          if (specialIndices.includes(prevPosition)) {
            newPosition = (prevPosition + 2) % messages.length;
          } else if (prevPosition === 28) {
            newPosition = 39;
          } else if (prevPosition === 39) {
            newPosition = (prevPosition - 1 + messages.length) % messages.length;
          } else if (prevPosition > 29 && prevPosition < 39) {
            newPosition = (prevPosition - 1 + messages.length) % messages.length;
          } else if (prevPosition > 11 && prevPosition <= 29) {
            newPosition = (prevPosition - 2 + messages.length) % messages.length;
          } else if (prevPosition === 11) {
            newPosition = 0;
          } else {
            newPosition = (prevPosition + 1) % messages.length;
          }
          console.log(newPosition);
          return newPosition;
        });
        

        setStepsRemaining((prevSteps) => {
          const updatedSteps = prevSteps - 1;
          if (updatedSteps <= 0) {
            setIsMoving(false); 
          }
          return updatedSteps;
        });
      }, 500);

      return () => clearInterval(intervalId);
    } else if (stepsRemaining === 0 && questionIndices.includes(position)) {
      setCurrentQuestion(questionQueue[0]);
      setIsModalOpen(true);
    }
  }, [stepsRemaining]);

  const rollDice = () => {
    const newFirstDie = Math.floor(Math.random() * 6) + 1;
    const newSecondDie = Math.floor(Math.random() * 6) + 1;
    setFirstDieResult(1);
    setSecondDieResult(1);
    setStepsRemaining(2);
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    const correct = index === currentQuestion.correct;
    setIsCorrect(correct);

    if (correct) {
      setTotal(total + 100);
      setResultMessage('¡Felicitaciones, acabas de ganar $100!');
    } else {
      setTotal(total - 100);
      setResultMessage('Respuesta incorrecta. Se restarán $100.');
    }

    setTimeout(() => {
      setIsModalOpen(false);
      setIsResultModalOpen(true);
      setQuestionQueue((prevQueue) => {
        const newQueue = [...prevQueue.slice(1), prevQueue[0]];
        return newQueue;
      });
    }, 100);
  };

  const closeResultModal = () => {
    setIsResultModalOpen(false);
  };
  

  const renderSquares = (count, type, startIndex) => {
    return [...Array(count)].map((_, index) => (
      <Square 
        key={startIndex + index} 
        type={type} 
        message={messages[startIndex + index]} 
        isPlayerHere={startIndex + index === position} 
        index={startIndex + index} 
      />
    ));
  };

  return (
    <>
      <div className="mb-2 font-bold" style={{ marginLeft: '42%' }}>
        <h1>Total: ${total.toLocaleString()}</h1>
      </div>
      <div className="board">
        <div className="corner top-left">{renderSquares(1, 'corner', 0)}</div>
        <div className="top-row">
          {renderSquares(9, 'horizontal', 1)}
        </div>
        <div className="corner top-right">{renderSquares(1, 'corner', 10)}</div>
        <div className="left-column">
          {renderSquares(9, 'vertical', 11)}
        </div>
        <div className="center">
          <div className="extra-square top-left">
            <img src="/chest.jpg" alt="Chest" />
          </div>
          <div className="extra-square bottom-right">
            <img src="/chance.webp" alt="Chance" />
          </div>
          <div className="dice-container flex-col">
            <div className="dice">
              <img src={`/${firstDieResult}.png`} alt="First Die" className='die'/>
              <img src={`/${secondDieResult}.png`} alt="Second Die" className="die" />
            </div>
            <div className="controls">
              <span style={{ fontSize: 'calc(16px + 2vmin)', fontWeight: 'bold', color: 'white' }}>{firstDieResult + secondDieResult}</span>
              <button onClick={rollDice} className='button' disabled={stepsRemaining > 0}>Roll</button>
            </div>
          </div>
        </div>
        <div className="right-column">
          {renderSquares(9, 'vertical', 20)}
        </div>
        <div className="corner bottom-left">{renderSquares(1, 'corner', 29)}</div>
        <div className="bottom-row">
          {renderSquares(9, 'horizontal', 30)}
        </div>
        <div className="corner bottom-right">{renderSquares(1, 'corner', 39)}</div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        currentQuestion={currentQuestion}
        selectedAnswer={selectedAnswer}
        isCorrect={isCorrect}
        handleAnswerSelect={handleAnswerSelect}
      />
      <ResultModal
        isResultModalOpen={isResultModalOpen}
        resultMessage={resultMessage}
        closeResultModal={closeResultModal}
      />
    </>
  );
};

export default Board;
