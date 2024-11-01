import express from 'express';
import dotenv from 'dotenv';
import infoRouter from './routers/info.js'; // 引入信息路由
import loginRouter from './routers/login.js'; // 引入信息路由
import registerRouter from './routers/register.js'; // 引入信息路由
import openapiRouter from './routers/openapi.js'; // 引入信息路由
import uploadRouter from './routers/upload.js';
import path from 'path';

dotenv.config();

// 创建一个新的 Express 应用
const app = express();
const port = process.env.PORT || 3333; // 设置服务器端口

// 中间件，用于解析 JSON 请求体
app.use(express.json());

// API 路由
app.use('/api/info', infoRouter);
app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);
app.use('/api/openapi', openapiRouter);
app.use('/api/upload', uploadRouter);
//将html为主页
// app.get('/', (req, res) => {
//   res.sendFile(path.join(process.cwd(), 'public', 'index.html'));
// });
// 静态文件目录，例如 Vite 打包后的文件
app.use(express.static(path.join(process.cwd(), 'public')));

// 添加 catch-all 路由，将所有请求重定向到 `index.html`
app.get('/', (req, res) => {
  res.sendFile(path.resolve(process.cwd(), 'public', 'index.html'));
});

// 启动服务器
app.listen(port, () => {
  console.log(`API 服务器正在运行，访问 http://localhost:${port}`);
});

export default app;