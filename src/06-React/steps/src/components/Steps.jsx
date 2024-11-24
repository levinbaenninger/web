import { useState } from 'react';
import Button from './Button.jsx';
import StepMessage from './StepMessage.jsx';
import messages from '../data/messages.js';

export const Steps = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNext = () => {
    setStep((s) => Math.min(s + 1, 3));
  };

  const handlePrevious = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  return (
    <>
      <button
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
        className="close"
      >
        {isOpen ? '\u00D7' : '\u002b'}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button
              backgroundColor="#7950f2"
              textColor="#ffffff"
              onClick={handlePrevious}
            >
              👈 Previous
            </Button>
            <Button
              backgroundColor="#7950f2"
              textColor="#ffffff"
              onClick={handleNext}
            >
              Next 👉
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Steps;
