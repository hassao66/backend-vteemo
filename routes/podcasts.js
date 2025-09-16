import express from 'express';
import { mockPodcasts } from '../data/mockData.js';

const router = express.Router();

// Get all podcasts
router.get('/', (req, res) => {
  try {
    res.json(mockPodcasts);
  } catch (error) {
    console.error('Get podcasts error:', error);
    res.status(500).json({ message: 'خطای داخلی سرور' });
  }
});

// Get podcast by ID
router.get('/:id', (req, res) => {
  try {
    const podcast = mockPodcasts.find(p => p.id === req.params.id);
    if (!podcast) {
      return res.status(404).json({ message: 'پادکست یافت نشد' });
    }
    res.json(podcast);
  } catch (error) {
    console.error('Get podcast by ID error:', error);
    res.status(500).json({ message: 'خطای داخلی سرور' });
  }
});

export default router;