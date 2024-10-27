import { useState } from 'react';
import AddFriendForm from './components/AddFriendForm';
import Button from './components/Button';
import Friend from './components/Friend';
import FriendsList from './components/FriendsList';
import SplitBillForm from './components/SplitBillForm';
import initialFriends from './data/friends';

export function App() {
  const [friends, setFriends] = useState<Friend[]>(initialFriends);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<Friend | null>(null);

  const handleAddFriend = (friend: Friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriendForm(false);
  };

  const handleSelection = (friend: Friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriendForm(false);
  };

  const handleSplitBill = (value: number) => {
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

        {showAddFriendForm && <AddFriendForm onAddFriends={handleAddFriend} />}

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
