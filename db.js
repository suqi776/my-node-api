import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;

// 创建 MongoClient 实例
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// 连接到数据库
async function connectDB() {
  try {
    await client.connect();
    console.log("成功连接到 MongoDB！");
  } catch (error) {
    console.error("连接 MongoDB 失败:", error);
  }
}

// 获取指定数据库和集合
function getCollection(collectionName) {
  //暂时指定数据库
  const database = client.db('tab');
  return database.collection(collectionName);
}

// 导出连接和获取集合的函数
export { connectDB, getCollection };
