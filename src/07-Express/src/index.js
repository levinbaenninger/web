import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

const mockUsers = [
  { id: 1, firstName: 'John', lastName: 'Doe' },
  { id: 2, firstName: 'Brad', lastName: 'Traversy' },
  { id: 3, firstName: 'Mary', lastName: 'Swanson' },
  { id: 4, firstName: 'Jill', lastName: 'Jackson' },
  { id: 5, firstName: 'Sara', lastName: 'Smith' },
  { id: 6, firstName: 'Steve', lastName: 'Brown' },
  { id: 7, firstName: 'Sarah', lastName: 'Lee' },
  { id: 8, firstName: 'Jane', lastName: 'Doe' }
];

app.get('/api/users', (_, res) => {
  res.json(mockUsers);
});

app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) return res.status(400).json({ error: 'Invalid ID' });

  const user = mockUsers.find((user) => user.id === parsedId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  res.json(user);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
