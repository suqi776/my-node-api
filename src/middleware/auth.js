import jwt from 'jsonwebtoken';

// 身份验证中间件
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // 获取 token

  if (!token) return res.sendStatus(401); // 如果没有 token，返回 401

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // 如果 token 不合法，返回 403
    req.user = user; // 将用户信息存储在请求对象中
    next(); // 继续处理请求
  });
};

export default authenticateToken;
