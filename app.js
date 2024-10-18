import express from 'express';
import dotenv from 'dotenv';
import { connectDB, getCollection } from './db.js'; // 引入数据库模块

dotenv.config();

// 创建一个新的 Express 应用
const app = express();
const port = process.env.PORT || 3333; // 设置服务器端口

// 中间件，用于解析 JSON 请求体
app.use(express.json());

connectDB()

// API 路由：插入文档
app.post('/api/documents', async (req, res) => {
  try {
    const collection = getCollection("one"); // 获取指定的集合
    
    // 获取请求体中的文档数据
    const doc = req.body; // 假设请求体中包含要插入的文档
    const result = await collection.insertOne(doc);
    
    // 返回插入的文档 ID
    res.status(201).json({ insertedId: result.insertedId });
  } catch (error) {
    console.error("插入文档失败:", error);
    res.status(500).json({ error: "插入文档失败" });
  }
});

// API 路由：查询文档
app.get('/api/documents', async (req, res) => {
  try {
    const collection = getCollection("one"); // 获取指定的集合
    
    // 查询所有文档
    const documents = await collection.find().toArray();
    
    // 返回查询到的文档
    res.status(200).json(documents);
  } catch (error) {
    console.error("查询文档失败:", error);
    res.status(500).json({ error: "查询文档失败" });
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`API 服务器正在运行，访问 http://localhost:${port}`);
});
