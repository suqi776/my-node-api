import { Router } from 'express';
import bcrypt from 'bcrypt';
import { getCollection } from '../db/db.js';
import jwt from 'jsonwebtoken';

const router = Router();

// 登录
router.post('/', async (req, res) => {
  const { username, password } = req.body;
  const collection = getCollection('user');
  const user = await collection.findOne({ username });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.json({ token, userId: user._id });
});

export default router;