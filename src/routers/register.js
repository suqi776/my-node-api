import { Router } from 'express';
import bcrypt from 'bcrypt';
import { getCollection } from '../db/db.js';

const router = Router();

// 注册
router.post('/', async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password)
  if (!username || !password) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const collection = getCollection('user');
  const result = await collection.insertOne({ username, password: hashedPassword });

  res.status(201).json({ userId: result.insertedId });
});


export default router;