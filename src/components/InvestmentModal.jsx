import React from 'react';

const InvestmentModal = ({ isInvestmentModalOpen, message, additionalInfo, colorText, bgColor, handleInvestmentDecision }) => {
  if (!isInvestmentModalOpen) return null;

  return (
    <div className="modal">
      <div className="investment-modal-content" style={{backgroundColor:bgColor, color: colorText}}>
        <h2 className="font-bold">{message}</h2>
        {additionalInfo && <p>{additionalInfo}</p>}
        <button className="button mr-3" onClick={() => handleInvestmentDecision('yes')}>Sí</button>
        <button className="button" onClick={() => handleInvestmentDecision('no')}>No</button>
      </div>
    </div>
  );
};

export default InvestmentModal;
