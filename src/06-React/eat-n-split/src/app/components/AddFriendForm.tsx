import { FormEvent, useState } from 'react';
import Button from './Button';

type AddFriendFormProps = {
  onAddFriends: (friend: Friend) => void;
};

const AddFriendForm = ({ onAddFriends }: AddFriendFormProps) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !image.trim()) return;

    const id = crypto.randomUUID();
    const friend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };

    onAddFriends(friend);

    setName('');
    setImage('https://i.pravatar.cc/48');
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👨🏼‍🤝‍👨🏻 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>📷 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
};

export default AddFriendForm;
