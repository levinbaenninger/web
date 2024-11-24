import PropTypes from 'prop-types';

export const Button = ({ onClick, children }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
