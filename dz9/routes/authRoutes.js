import express from 'express';
import {
  register,
  changePassword,
  deleteAccount,
  changeEmail
} from '../controllers/authController.js';

import auth from '../middleware/authMiddleware.js';
import admin from '../middleware/roleMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/change-password', auth, changePassword);
router.post('/delete-account', auth, deleteAccount);
router.post('/change-email', auth, changeEmail);
router.get('/admin', auth, admin, (req, res) => {
  res.json({ message: 'Admin access granted' });
});

export default router;
