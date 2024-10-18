import { Router } from 'express';
import { getCollection } from '../db/db.js';

const router = Router();

// API 路由：查询 info，根据 name 字段过滤
router.get('/', async (req, res) => {
  try {
    const collection = getCollection("info"); // 获取指定的集合
    
    // 获取查询参数，如果没有提供则默认为空对象
    const nameQuery = req.query.name ? { name: req.query.name } : {};
    
    // 查询文档
    const documents = await collection.find(nameQuery).toArray();
    
    // 返回查询到的文档
    res.status(200).json(documents);
  } catch (error) {
    console.error("查询失败:", error);
    res.status(500).json({ error: "查询失败" });
  }
});

export default router;
