import { useState } from 'react';
import messages from './data/messages';

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  return (
    <>
      <button onClick={() => setIsOpen((is) => !is)} className="close">
        {isOpen ? '\u00D7' : '\u002b'}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: '#7950f2', color: '#ffffff' }}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: '#7950f2', color: '#ffffff' }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
