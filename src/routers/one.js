// import { Router } from 'express';
// import { getCollection } from '../db/db.js';
// import authenticateToken from '../middleware/auth.js';

// const router = Router();

// // API 路由：插入文档
// router.post('/', authenticateToken, async (req, res) => {
//   try {
//     const collection = getCollection("one"); // 获取指定的集合
    
//     // 获取请求体中的文档数据
//     const doc = req.body; // 假设请求体中包含要插入的文档
//     const result = await collection.insertOne(doc);
    
//     // 返回插入的文档 ID
//     res.status(201).json({ insertedId: result.insertedId });
//   } catch (error) {
//     console.error("插入文档失败:", error);
//     res.status(500).json({ error: "插入文档失败" });
//   }
// });

// // API 路由：查询所有文档
// router.get('/', authenticateToken, async (req, res) => {
//   try {
//     const collection = getCollection("one"); // 获取指定的集合
    
//     // 查询所有文档
//     const documents = await collection.find().toArray();
    
//     // 返回查询到的文档
//     res.status(200).json(documents);
//   } catch (error) {
//     console.error("查询文档失败:", error);
//     res.status(500).json({ error: "查询文档失败" });
//   }
// });

// export default router;
