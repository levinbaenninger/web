import PropTypes from 'prop-types';

export const Order = ({ openHour, closeHour }) => {
  return (
    <div className="order">
      <p>
        We&apos;re open from ${openHour}:00 until ${closeHour}:00. Come visit us
        or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

Order.propTypes = {
  openHour: PropTypes.number.isRequired,
  closeHour: PropTypes.number.isRequired,
};

export default Order;
