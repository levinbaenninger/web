import { FormEvent, useState } from 'react';
import Button from './Button';

type SplitBillFormProps = {
  selectedFriend: Friend;
  onSplitBill: (value: number) => void;
};

const SplitBillForm = ({ selectedFriend, onSplitBill }: SplitBillFormProps) => {
  const [totalBill, setTotalBill] = useState(0);
  const [userExpense, setUserExpense] = useState(0);
  const friendExpense = totalBill - userExpense;
  const [payingFriend, setPayingFriend] = useState<'user' | 'friend'>('user');

  const handleSubmit = (e: FormEvent) => {
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

      <label>👨🏼‍🤝‍👨🏻 {selectedFriend.name}'s expense</label>
      <input type="text" value={friendExpense} disabled />

      <label>🤑 Who's paying the bill</label>
      <select
        value={payingFriend}
        onChange={(e) => setPayingFriend(e.target.value as 'user' | 'friend')}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

export default SplitBillForm;
