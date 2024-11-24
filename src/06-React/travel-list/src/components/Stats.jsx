import PropTypes from 'prop-types';

export const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  const numOfItems = items.length;
  const numOfPackedItems = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numOfPackedItems / numOfItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? 'You got everything! Ready to go ✈'
          : `?? You have ${numOfItems} items on your list, and you already packed ${numOfPackedItems} (${percentagePacked}%)`}
      </em>
    </footer>
  );
};

Stats.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      packed: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
