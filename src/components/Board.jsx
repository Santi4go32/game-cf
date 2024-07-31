import React, { useState, useEffect } from 'react';
import Square from './Square';
import Modal from './Modal';
import ResultModal from './ResultModal';
import InvestmentModal from './InvestmentModal';
import questions from './question';
import { boards } from './boards';
import { handleSquareActions } from './squareActions';

const specialIndices = [4, 6, 8];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Board = () => {
  const [firstDieResult, setFirstDieResult] = useState(1);
  const [position, setPosition] = useState(0);
  const [stepsRemaining, setStepsRemaining] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  const [total, setTotal] = useState(10000);
  const [lives, setLives] = useState(3);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  const [isInvestmentModalOpen, setIsInvestmentModalOpen] = useState(false);
  const [investmentMessage, setInvestmentMessage] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState(null);
  const [colorText, setColorText] = useState('black');
  const [bgColor, setBgColor] = useState('white');

  const [questionQueue, setQuestionQueue] = useState(shuffleArray([...questions]));

  const [currentBoardIndex, setCurrentBoardIndex] = useState(0);
  const [lastTotalAtGo, setLastTotalAtGo] = useState(total); 
  const [isWinner, setIsWinner] = useState(false);

  const currentBoard = boards[currentBoardIndex];
  const questionIndices = currentBoard.questionIndices;

  useEffect(() => {
    if (stepsRemaining > 0) {
      setIsMoving(true);

      const intervalId = setInterval(() => {
        setPosition((prevPosition) => {
          let newPosition;

          if (specialIndices.includes(prevPosition)) {
            newPosition = (prevPosition + 2) % currentBoard.squares.length;
          } else if (prevPosition === 10) {
            newPosition = 15;
          } else if (prevPosition === 15) {
            newPosition = (prevPosition - 1 + currentBoard.squares.length) % currentBoard.squares.length;
          } else if (prevPosition > 11 && prevPosition < 15) {
            newPosition = (prevPosition - 1 + currentBoard.squares.length) % currentBoard.squares.length;
          } else if (prevPosition === 11) {
            newPosition = 9;
          } else if (prevPosition > 5 && prevPosition <= 9) {
            newPosition = (prevPosition - 2 + currentBoard.squares.length) % currentBoard.squares.length;
          } else if (prevPosition === 5) {
            newPosition = 0;
          } else {
            newPosition = (prevPosition + 1) % currentBoard.squares.length;
          }

          if (newPosition === 0 && prevPosition !== 0) {
            if (currentBoardIndex < boards.length - 1) {
              if (total < lastTotalAtGo + lastTotalAtGo * 0.1) {
                setLives((prevLives) => prevLives - 1);
              }
              else
              {
                setCurrentBoardIndex((prevIndex) => prevIndex + 1);
                setIsMoving(false);
                setLastTotalAtGo(total);
                setStepsRemaining(0);
                setLives(3);
              }
            } else {
              if (total >= lastTotalAtGo + lastTotalAtGo * 0.1) {
                setIsWinner(true);
                setIsMoving(false);
                setStepsRemaining(0);
              }
              return newPosition;
            }
          }

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
    setFirstDieResult(newFirstDie);
    setStepsRemaining(newFirstDie);
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

  const handleInvestmentDecision = (decision) => {
    if (investmentMessage === '¿Deseas invertir en Capital Fund?') {
      if (decision === 'yes') {
        setTotal((prevTotal) => prevTotal * 1.05);
      }
    } else {
      if (decision === 'yes') {
        if (investmentMessage === '¿Deseas entrar al Cine?') {
          setTotal((prevTotal) => prevTotal - 30);
        } else if (investmentMessage === '¿Te encantaría comprar vestimenta?') {
          setTotal((prevTotal) => prevTotal - 300);
        }
      }
    }
    setIsInvestmentModalOpen(false);
  };

  useEffect(() => {
    if (lives === 0) {
      alert('Has perdido todas tus vidas. El nivel se reiniciará.');
      setIsMoving(false);
      setStepsRemaining(0);
      setLives(3);
      setTotal(lastTotalAtGo);
    }
  }, [lives]);

  useEffect(() => {
    if (!isMoving) {
      const currentSquare = currentBoard.squares[position];
      handleSquareActions(currentSquare, setTotal, setColorText, setBgColor, setIsInvestmentModalOpen, setInvestmentMessage, setAdditionalInfo);
    }
  }, [isMoving, position, currentBoard.squares]);

  const renderSquares = (count, type, startIndex) => {
    return [...Array(count)].map((_, index) => (
      <Square
        key={startIndex + index}
        type={type}
        message={currentBoard.squares[startIndex + index]}
        isPlayerHere={startIndex + index === position}
        index={startIndex + index}
      />
    ));
  };

  const renderHearts = () => {
    return [...Array(lives)].map((_, index) => (
      <img key={index} src="/heart.png" alt="Heart" style={{ width: '30px', marginRight: '5px' }} />
    ));
  };

  return (
    <>
      <div className="mb-2 font-bold flex flex-row">
        <h1 className='mr-16'>Nivel: {(currentBoardIndex+1).toLocaleString()}</h1>
        <h1>Total: ${total.toLocaleString()} de ${(lastTotalAtGo + lastTotalAtGo * 0.1).toLocaleString()}</h1>
        <div className="ml-16" style={{ display: 'flex', justifyContent: 'center' }}>
          {renderHearts()}
        </div>
      </div>

      {isWinner ? (
        <div>
          <h1 style={{ color: 'gold', fontSize: '3em', textAlign: 'center' }}>¡Eres un ganador!</h1>
          <p style={{ fontSize: '1.5em', textAlign: 'center' }}>Has completado todos los niveles y alcanzado el objetivo final. ¡Felicidades!</p>
        </div>
      ) : (
        <div className="board">
          <div className="corner top-left">{renderSquares(1, 'corner', 0)}</div>
          <div className="top-row">{renderSquares(3, 'horizontal', 1)}</div>
          <div className="corner top-right">{renderSquares(1, 'corner', 4)}</div>
          <div className="left-column">{renderSquares(3, 'vertical', 5)}</div>
          <div className="center">
            <div className="extra-square top-left">
              <img src="/chest.jpg" alt="Chest" />
            </div>
            <div className="extra-square bottom-right">
              <img src="/chance.webp" alt="Chance" />
            </div>
            <div className="dice-container">
              <div className="dice">
                <img src={`/${firstDieResult}.png`} alt="First Die" className="die" />
              </div>
              <div className="controls">
                <span style={{ fontSize: 'calc(16px + 2vmin)', fontWeight: 'bold', color: 'white' }}>
                  {firstDieResult}
                </span>
                <button onClick={rollDice} className="button" disabled={isMoving}>
                  Roll
                </button>
              </div>
            </div>
          </div>
          <div className="right-column">{renderSquares(3, 'vertical', 8)}</div>
          <div className="corner bottom-left">{renderSquares(1, 'corner', 11)}</div>
          <div className="bottom-row">{renderSquares(3, 'horizontal', 12)}</div>
          <div className="corner bottom-right">{renderSquares(1, 'corner', 15)}</div>
        </div>
    )}
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
        <InvestmentModal
          isInvestmentModalOpen={isInvestmentModalOpen}
          message={investmentMessage}
          additionalInfo={additionalInfo}
          colorText={colorText}
          bgColor={bgColor}
          handleInvestmentDecision={handleInvestmentDecision}
        />
    </>
  );
};

export default Board;
