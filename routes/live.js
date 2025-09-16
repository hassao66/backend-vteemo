import express from 'express';

const router = express.Router();

// Mock data for live streams
const mockLiveStreams = [
  {
    id: '1',
    title: 'Live Coding Session',
    description: 'Building a React app live',
    thumbnail: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800',
    viewers: 45,
    isLive: true,
    startTime: new Date().toISOString()
  }
];

// Get all live streams
router.get('/', (req, res) => {
  res.json(mockLiveStreams);
});

export default router;