import { useState } from 'react';
import messages from './data/messages';

const App = () => {
  return (
    <>
      <Steps />
    </>
  );
};

function Steps() {
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
}

type ButtonProps = {
  textColor: string;
  backgroundColor: string;
  onClick: () => void;
  children: React.ReactNode;
};

function Button({
  textColor,
  backgroundColor,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      {children}
    </button>
  );
}

type StepMessageProps = {
  step: number;
  children: React.ReactNode;
};

function StepMessage({ step, children }: StepMessageProps) {
  return (
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  );
}

export default App;
