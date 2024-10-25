import { Router } from 'express';
import axios from 'axios';

const router = Router();
const url = 'https://api.52vmy.cn';

router.post('/hot', async (req, res) => {
  const { type } = req.body; // 从请求体中获取类型

  try {
    // 根据 type 动态请求不同的 API
    const response = await axios.get(`${url}/hot/api/wl/hot?type=${type}`);
    res.json(response.data); // 将 API 返回的数据发送到客户端
  } catch (error) {
    console.error('请求出错:', error);
    res.status(500).send('服务器错误');
  }
});

export default router;
