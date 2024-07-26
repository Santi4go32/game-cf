import React from 'react';

const Square = ({ type, message, isPlayerHere, index }) => {
  return (
    <div className={`square ${type} ${isPlayerHere ? 'player-here' : ''}`}>
      <span>{message}</span>
    </div>
  );
};

export default Square;
