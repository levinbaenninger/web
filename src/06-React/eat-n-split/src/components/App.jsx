import { useState } from 'react';
import initialFriends from '../data/friends.js';
import FriendsList from './FriendsList.jsx';
import AddFriendForm from './AddFriendForm.jsx';
import Button from './Button.jsx';
import SplitBillForm from './SplitBillForm.jsx';

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleAddFriend = (friend) => {
    setFriends((prevFriends) => [...prevFriends, friend]);
    setShowAddFriendForm(false);
  };

  const handleSelection = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriendForm(false);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriendForm && <AddFriendForm onAddFriend={handleAddFriend} />}

        <Button onClick={() => setShowAddFriendForm((show) => !show)}>
          {showAddFriendForm ? 'Close' : 'Add friend'}
        </Button>
      </div>
      {selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
