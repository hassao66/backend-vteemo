import express from 'express';

const router = express.Router();

// Mock wallet data
const mockWallet = {
  balance: 1250,
  currency: 'VTC',
  transactions: [
    {
      id: '1',
      type: 'earned',
      amount: 50,
      description: 'Video upload reward',
      date: '2024-01-15'
    }
  ]
};

// Get wallet info
router.get('/', (req, res) => {
  res.json(mockWallet);
});

export default router;