import React, { useState, useEffect } from 'react';
import Square from './Square';

const messages = [
  'Go', '#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8', '#9', 'Jail',
  '#10', '#11', '#12', '#13', '#14', '#15', '#16', '#17', '#18', '#19',
  '#20', '#21', '#22', '#23', '#24', '#25', '#26', '#27', '#28', '#29',
  '#30', '#31', '#32', '#33', '#34', '#35', '#36', '#37', '#38',
];

const specialIndices = [10, 12, 14, 16, 18, 20, 22, 24, 26];

const Board = () => {
  const [firstDieResult, setFirstDieResult] = useState(1);
  const [secondDieResult, setSecondDieResult] = useState(6);
  const [position, setPosition] = useState(0);
  const [stepsRemaining, setStepsRemaining] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    if (stepsRemaining > 0) {
      setIsMoving(true); // Activar el estado de movimiento

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

          return newPosition;
        });

        setStepsRemaining((prevSteps) => {
          const updatedSteps = prevSteps - 1;
          if (updatedSteps <= 0) {
            setIsMoving(false); // Desactivar el estado de movimiento
          }
          return updatedSteps;
        });
      }, 500);

      return () => clearInterval(intervalId);
    }
  }, [stepsRemaining]);

  const rollDice = () => {
    const newFirstDie = Math.floor(Math.random() * 6) + 1;
    const newSecondDie = Math.floor(Math.random() * 6) + 1;
    setFirstDieResult(newFirstDie);
    setSecondDieResult(newSecondDie);
    setStepsRemaining(newFirstDie + newSecondDie);
  };

  const renderSquares = (count, type, startIndex) => {
    return [...Array(count)].map((_, index) => (
      <Square key={startIndex + index} type={type} message={messages[startIndex + index]} isPlayerHere={startIndex + index === position} index={startIndex+index} />
    ));
  };

  return (
    <>
      <div className="mb-2 font-bold" style={{ marginLeft: '52%' }}>
        <h1>Total: $10,000</h1>
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
          <div className="dice-container flex-col">
            <div className="dice">
              <img src={`/${firstDieResult}.png`} alt="First Die" className='die'/>
              <img src={`/${secondDieResult}.png`} alt="Second Die" className="die" />
            </div>
            <div className="controls">
              <span style={{ fontSize: 'calc(16px + 2vmin)', fontWeight: 'bold', color: 'white' }}>{firstDieResult + secondDieResult}</span>
              <button onClick={rollDice} className='button' disabled={isMoving}>Roll</button>
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
    </>
  );
};

export default Board;
