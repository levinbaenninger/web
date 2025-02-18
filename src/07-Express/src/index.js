import express from 'express';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, firstName: 'John', lastName: 'Doe' },
  { id: 2, firstName: 'Brad', lastName: 'Traversy' },
  { id: 3, firstName: 'Mary', lastName: 'Swanson' },
  { id: 4, firstName: 'Jill', lastName: 'Jackson' },
  { id: 5, firstName: 'Sara', lastName: 'Smith' },
  { id: 6, firstName: 'Steve', lastName: 'Brown' },
  { id: 7, firstName: 'Sarah', lastName: 'Lee' },
  { id: 8, lastName: 'Doe' }
];

app.get('/api/users', (req, res) => {
  const { filter, value } = req.query;

  if (!filter && !value) return res.json(mockUsers);
  if (!filter || !value)
    return res.status(400).json({ error: 'Invalid query' });

  if (mockUsers.some((user) => filter in user)) {
    const filteredUsers = mockUsers.filter((user) =>
      user[filter]?.toLowerCase().includes(value.toLowerCase())
    );
    return res.json(filteredUsers);
  } else {
    return res.status(400).json({ error: 'Invalid filter' });
  }
});

app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) return res.status(400).json({ error: 'Invalid ID' });

  const user = mockUsers.find((user) => user.id === parsedId);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

app.post('/api/users', (req, res) => {
  const { firstName, lastName } = req.body;

  const user = {
    id: mockUsers.at(-1).id + 1,
    firstName,
    lastName
  };

  mockUsers.push(user);
  return res.status(201).json(user);
});

app.put('/api/users/:id', (req, res) => {
  const {
    body,
    params: { id }
  } = req;
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) return res.status(400).json({ error: 'Invalid ID' });

  const userIndex = mockUsers.findIndex((user) => user.id === parsedId);
  if (userIndex === -1)
    return res.status(404).json({ error: 'User not found' });

  const updatedUser = (mockUsers[userIndex] = { id: parsedId, ...body });
  return res.json(updatedUser);
});

app.patch('/api/users/:id', (req, res) => {
  const {
    body,
    params: { id }
  } = req;

  const parsedId = parseInt(id, 10);
  if (isNaN(parsedId)) return res.status(400).json({ error: 'Invalid ID' });

  const userIndex = mockUsers.findIndex((user) => user.id === parsedId);
  if (userIndex === -1)
    return res.status(404).json({ error: 'User not found' });

  const updatedUser = (mockUsers[userIndex] = {
    ...mockUsers[userIndex],
    ...body
  });
  return res.json(updatedUser);
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) return res.status(400).json({ error: 'Invalid ID' });

  const userIndex = mockUsers.findIndex((user) => user.id === parsedId);
  if (userIndex === -1)
    return res.status(404).json({ error: 'User not found' });

  mockUsers.splice(userIndex, 1);
  return res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
