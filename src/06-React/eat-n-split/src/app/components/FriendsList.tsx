import Friend from './Friend';

type FriendsListProps = {
  friends: Friend[];
  selectedFriend: Friend | null;
  onSelection: (friend: Friend) => void;
};

const FriendsList = ({
  friends,
  selectedFriend,
  onSelection,
}: FriendsListProps) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
