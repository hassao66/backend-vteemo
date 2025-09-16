import express from 'express';

const router = express.Router();

// Mock data for videos
const mockVideos = [
  {
    id: '1',
    title: 'Introduction to React',
    description: 'Learn the basics of React development',
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '15:30',
    views: 1250,
    uploadDate: '2024-01-15',
    category: 'Programming'
  },
  {
    id: '2',
    title: 'Advanced JavaScript Concepts',
    description: 'Deep dive into JavaScript advanced features',
    thumbnail: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '22:45',
    views: 890,
    uploadDate: '2024-01-10',
    category: 'Programming'
  }
];

// Get all videos
router.get('/', (req, res) => {
  res.json(mockVideos);
});

// Get video by ID
router.get('/:id', (req, res) => {
  const video = mockVideos.find(v => v.id === req.params.id);
  if (!video) {
    return res.status(404).json({ message: 'Video not found' });
  }
  res.json(video);
});

export default router;