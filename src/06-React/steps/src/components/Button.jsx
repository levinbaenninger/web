import PropTypes from 'prop-types';

export const Button = ({ textColor, backgroundColor, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
