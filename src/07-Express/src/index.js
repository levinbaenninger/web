import express from 'express';
import {
  checkSchema,
  matchedData,
  query,
  validationResult
} from 'express-validator';
import {
  userCreateSchema,
  userPatchSchema,
  userUpdateSchema
} from './schemas/validation/userValidation.schema.js';

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

export default mockUsers;

const resolveIndexByUserId = (req, res, next) => {
  const { id } = req.params;
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId)) return res.status(400).json({ error: 'Invalid ID' });

  const userIndex = mockUsers.findIndex((user) => user.id === parsedId);
  if (userIndex === -1)
    return res.status(404).json({ error: 'User not found' });

  req.userIndex = userIndex;
  next();
};

app.get(
  '/api/users',
  query('filter')
    .optional()
    .notEmpty()
    .withMessage("Filter mustn't be empty")
    .isIn(['firstName', 'lastName'])
    .withMessage('Filter must be either "firstName" or "lastName"'),
  query('value')
    .optional()
    .notEmpty()
    .withMessage("Value mustn't be empty")
    .isString()
    .withMessage('Value must be a string'),
  (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty())
      return res.status(400).json({ errors: result.array() });

    const { filter, value } = req.query;

    if (!filter && !value) return res.json(mockUsers);
    if (!filter || !value)
      return res.status(400).json({ error: 'Invalid query' });

    const filteredUsers = mockUsers.filter((user) =>
      user[filter]?.toLowerCase().includes(value.toLowerCase())
    );
    return res.json(filteredUsers);
  }
);

app.get('/api/users/:id', resolveIndexByUserId, (req, res) => {
  const { userIndex } = req;
  res.json(mockUsers[userIndex]);
});

app.post('/api/users', checkSchema(userCreateSchema), (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty())
    return res.status(400).json({ errors: result.array() });

  const { firstName, lastName } = matchedData(req);
  const user = {
    id: mockUsers.at(-1).id + 1,
    firstName,
    lastName
  };

  mockUsers.push(user);
  return res.status(201).json(user);
});

app.put(
  '/api/users/:id',
  resolveIndexByUserId,
  checkSchema(userUpdateSchema),
  (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty())
      return res.status(400).json({ errors: result.array() });

    const { userIndex } = req;
    const data = matchedData(req);

    const updatedUser = (mockUsers[userIndex] = {
      id: mockUsers[userIndex].id,
      ...data
    });
    return res.json(updatedUser);
  }
);

app.patch(
  '/api/users/:id',
  resolveIndexByUserId,
  checkSchema(userPatchSchema),
  (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty())
      return res.status(400).json({ errors: result.array() });

    const { userIndex } = req;
    const data = matchedData(req);

    const updatedUser = (mockUsers[userIndex] = {
      ...mockUsers[userIndex],
      ...data
    });
    return res.json(updatedUser);
  }
);

app.delete('/api/users/:id', resolveIndexByUserId, (req, res) => {
  const { userIndex } = req;

  mockUsers.splice(userIndex, 1);
  return res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
