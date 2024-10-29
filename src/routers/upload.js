import { Router } from 'express'
import { getCollection } from '../db/db.js'
import { ObjectId } from 'mongodb' // 导入 ObjectId
import authenticateToken from '../middleware/auth.js'
import multer from 'multer'
import axios from 'axios'
import FormData from 'form-data'
import dotenv from 'dotenv';

dotenv.config();

const SMMS_TOKEN = process.env.SMMS_TOKEN;

const router = Router()
const upload = multer() // 配置 multer，不指定 `dest` 以避免保存到本地

const SMMS_API_URL = 'https://sm.ms/api/v2/upload'

// 文件上传到 SM.MS
router.post('/', authenticateToken ,upload.single('file'), async (req, res) => {
  try {
    const { userId } = req.body;

    // 验证用户 ID 是否存在
    if (!userId) {
      return res.status(400).json({ error: '缺少用户 ID' });
    }

    // 将文件数据添加到 FormData 中
    const formData = new FormData();
    formData.append('smfile', req.file.buffer, req.file.originalname);

    // 发送 POST 请求到 SM.MS
    const response = await axios.post(SMMS_API_URL, formData, {
      headers: {
        Authorization: SMMS_TOKEN,
        ...formData.getHeaders(),
      },
    });
    // 验证上传结果
    if (response.data.error && response.data.error.includes('Image upload repeated limit')) {
      // 图片已经存在，获取现有的 URL
      const existingUrl = response.data.error.match(/this image exists at: (.+)$/)[1];

      // 更新数据库中的头像 URL
      const infoCollection = getCollection('user');
      const result = await infoCollection.updateOne(
        { _id: new ObjectId(userId) },
        { $set: { avatar: existingUrl } }
      );

      if (result.modifiedCount > 0) {
        return res.status(200).json({ message: '头像更新成功', avatarUrl: existingUrl });
      } else {
        return res.status(404).json({ error: '头像未更新，用户未找到' });
      }
    }

    // 检查上传成功并获取新 URL
    if (response.data.success && response.data.data.url) {
      const newAvatarUrl = response.data.data.url;

      // 更新数据库中的头像 URL
      const infoCollection = getCollection('user');
      const result = await infoCollection.updateOne(
        { _id: new ObjectId(userId) },
        { $set: { avatar: newAvatarUrl } }
      );

      if (result.modifiedCount > 0) {
        return res.status(200).json({ message: '头像更新成功', avatarUrl: newAvatarUrl });
      } else {
        return res.status(404).json({ error: '头像未更新，用户未找到' });
      }
    }
  } catch (error) {
    console.error('上传错误:', error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router
