// Modal.jsx
import React from 'react';

const Modal = ({ isModalOpen, currentQuestion, selectedAnswer, isCorrect, handleAnswerSelect }) => {
  if (!isModalOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        {currentQuestion && (
          <>
            <h2>{currentQuestion.question}</h2>
            <ul style={{marginTop:'20px'}}>
              {currentQuestion.answers.map((answer, index) => (
                <li
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  style={{
                    color: 'black',
                    cursor: 'pointer',
                    marginBottom: '10px',
                    border:'1px solid #000',
                    borderRadius:'15px',
                    padding:'10px',
                    backgroundColor: 'white'
                  }}
                >
                  {answer}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
