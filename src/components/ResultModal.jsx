import React from 'react';

const ResultModal = ({ isResultModalOpen, resultMessage, closeResultModal }) => {
  if (!isResultModalOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content" style={{textAlign:'center'}}>
        <p className="font-bold text-white">{resultMessage}</p>
        <button className="button" onClick={closeResultModal}>Cerrar</button>
      </div>
    </div>
  );
};

export default ResultModal;
