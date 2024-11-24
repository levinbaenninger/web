import PropTypes from 'prop-types';

export const StepMessage = ({ step, children }) => {
  return (
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  );
};

StepMessage.propTypes = {
  step: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default StepMessage;
