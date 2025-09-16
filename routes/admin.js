import express from 'express';

const router = express.Router();

// Mock admin data
const mockStats = {
  totalUsers: 1250,
  totalVideos: 450,
  totalViews: 125000,
  revenue: 5500
};

// Get admin stats
router.get('/stats', (req, res) => {
  res.json(mockStats);
});

export default router;