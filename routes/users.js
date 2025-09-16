import express from 'express';

const router = express.Router();

// Mock user data
const mockUsers = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@vitimo.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    joinDate: '2024-01-01'
  }
];

// Get user profile
router.get('/profile', (req, res) => {
  res.json(mockUsers[0]);
});

export default router;