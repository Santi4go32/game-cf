import React from 'react';

const Square = ({ type, message, isPlayerHere, index }) => {
  return (
    <div className={`square ${type} ${isPlayerHere ? 'player-here' : ''}`}>
      {message.image ? (
        <img src={`/${message.image}`} alt="Special" className="square-image" />
      ) : (
        <span>{message.text}</span>
      )}
    </div>
  );
};

export default Square;
