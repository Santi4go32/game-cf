import React from 'react';

const Square = ({ type, message, isPlayerHere, index }) => {
  return (
    <div className={`square ${type}`}>
      {message.image ? (
        <img src={`/${message.image}`} alt="Special" className="square-image" />
      ) : (
        <span>{message.text}</span>
      )}
      {isPlayerHere && <img src="/player.png" alt="Player" className="player-image" />}
    </div>
  );
};

export default Square;
