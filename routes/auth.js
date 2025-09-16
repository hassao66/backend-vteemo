import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { mockUsers } from '../data/mockData.js';

const router = express.Router();

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'ایمیل و رمز عبور الزامی است' });
    }

    // Find user in mock data
    const user = mockUsers.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({ message: 'ایمیل یا رمز عبور نادرست است' });
    }

    // Check password (in real app, use bcrypt.compare)
    const isValidPassword = password === 'password123'; // Mock password
    if (!isValidPassword) {
      return res.status(401).json({ message: 'ایمیل یا رمز عبور نادرست است' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    // Remove password from user object
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      user: userWithoutPassword,
      token,
      message: 'ورود موفقیت‌آمیز بود'
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'خطای داخلی سرور' });
  }
});

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: 'تمام فیلدها الزامی هستند' });
    }

    // Check if user already exists
    const existingUser = mockUsers.find(u => u.email === email || u.username === username);
    if (existingUser) {
      return res.status(409).json({ message: 'کاربر با این ایمیل یا نام کاربری وجود دارد' });
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      email,
      username,
      password, // In real app, hash with bcrypt
      avatar: '',
      isAdmin: false,
      walletBalance: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Add to mock data
    mockUsers.push(newUser);

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser.id, email: newUser.email },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    // Remove password from response
    const { password: _, ...userWithoutPassword } = newUser;

    res.status(201).json({
      user: userWithoutPassword,
      token,
      message: 'ثبت‌نام موفقیت‌آمیز بود'
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ message: 'خطای داخلی سرور' });
  }
});

// Get current user profile
router.get('/profile', (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'توکن احراز هویت یافت نشد' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
    const user = mockUsers.find(u => u.id === decoded.userId);

    if (!user) {
      return res.status(404).json({ message: 'کاربر یافت نشد' });
    }

    const { password: _, ...userWithoutPassword } = user;
    res.json(userWithoutPassword);
  } catch (error) {
    console.error('Profile error:', error);
    res.status(401).json({ message: 'توکن نامعتبر است' });
  }
});

export default router;