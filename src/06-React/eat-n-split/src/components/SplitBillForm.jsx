import PropTypes from 'prop-types';
import Button from './Button.jsx';
import { useState } from 'react';

export const SplitBillForm = ({ selectedFriend, onSplitBill }) => {
  const [totalBill, setTotalBill] = useState(0);
  const [userExpense, setUserExpense] = useState(0);
  const friendExpense = totalBill - userExpense;
  const [payingFriend, setPayingFriend] = useState('user');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!totalBill || !userExpense) return;
    onSplitBill(payingFriend === 'user' ? friendExpense : -userExpense);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💸 Total bill</label>
      <input
        type="text"
        value={totalBill}
        onChange={(e) => setTotalBill(Number(e.target.value))}
      />

      <label>👉 Your expense</label>
      <input
        type="text"
        value={userExpense}
        onChange={(e) =>
          setUserExpense(
            Number(e.target.value) > totalBill
              ? userExpense
              : Number(e.target.value)
          )
        }
      />

      <label>👨🏼‍🤝‍👨🏻 {selectedFriend.name}&apos;s expense</label>
      <input type="text" value={friendExpense} disabled />

      <label>🤑 Who&apos;s paying the bill</label>
      <select
        value={payingFriend}
        onChange={(e) => setPayingFriend(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

SplitBillForm.propTypes = {
  selectedFriend: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  }).isRequired,
  onSplitBill: PropTypes.func.isRequired,
};

export default SplitBillForm;
