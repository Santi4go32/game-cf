import React from 'react';

const InvestmentModal = ({ isInvestmentModalOpen, handleInvestmentDecision }) => {
  if (!isInvestmentModalOpen) return null;

  return (
    <div className="modal">
      <div className="investment-modal-content">
        <h2 className="font-bold">¿Deseas invertir en Capital Fund?</h2>
        <p className="mb-2">Gana un 5% adicional sobre tu total actual.</p>
        <button className="button mr-3" onClick={() => handleInvestmentDecision('yes')}>Sí</button>
        <button className="button" onClick={() => handleInvestmentDecision('no')}>No</button>
      </div>
    </div>
  );
};

export default InvestmentModal;