import { Router } from 'express';
import { getCollection } from '../db/db.js';
import { ObjectId } from 'mongodb'; // 导入 ObjectId
import authenticateToken from '../middleware/auth.js';

const router = Router();

// API 路由：查询 info，根据 name 字段过滤
router.get('/', authenticateToken, async (req, res) => {
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

// 创建一条新的 info 记录
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { userId, weight, selectedDate, food, content } = req.body;

    const collection = getCollection('user'); // 获取用户集合

    // 查询用户的名称
    const name = await collection.findOne({ _id: new ObjectId(userId)});

    if (!name) {
      return res.status(404).json({ error: 'name not found' }); // 用户不存在时返回 404
    }

    // 验证必填字段
    if (!userId || !name || !weight || !selectedDate ) {
      return res.status(400).json({ error: '缺少必要的字段' });
    }

    const infoCollection = getCollection('info'); // 获取指定的 info 集合

    // 查询是否存在

    const info = await infoCollection.findOne({ name_Id: new ObjectId(userId), date: selectedDate});


    if(info){
      //更新
      await infoCollection.updateOne({ _id: info._id }, { $set: { weight, food, content } });
      return res.status(200).json({ message: '记录已存在', info });
    }
    // 创建新文档
    const newDocument = {
      name_Id: new ObjectId(userId), // 确保 name_Id 是一个 ObjectId 类型
      name: name.username,
      weight,
      date: selectedDate, // 转换为 Date 类型
      food,
      content: content || '' // 如果没有提供 content，则设置为空字符串
    };

    // 插入新文档到集合中
    const result = await infoCollection.insertOne(newDocument);

    // 返回插入成功的文档
    res.status(200).json({ ...newDocument, _id: result.insertedId });
  } catch (error) {
    console.error('添加失败:', error);
    res.status(500).json({ error: '添加失败' });
  }
});

// 根据日期查询 info 的 API 路由
router.post('/getInfoByDate', authenticateToken, async (req, res) => {
  try {
    const { userId, date } = req.body;

    // 验证查询参数
    if (!userId || !date) {
      return res.status(400).json({ error: '缺少必要的查询参数' });
    }

    const infoCollection = getCollection('info'); // 获取指定的 info 集合

    // 查询指定用户在指定日期的记录
    const documents = await infoCollection.findOne({
      name_Id: new ObjectId(userId),
      date: date,
    });

    // 返回查询到的文档
    res.status(200).json({
      weight: documents.weight,
      food: documents.food,
      content: documents.content,
    });
  } catch (error) {
    console.error('查询失败:', error);
    res.status(500).json({ error: '查询失败' });
  }
});

// 根据日期范围查询 info 的 API 路由
router.post('/getInfoByDateRange', authenticateToken, async (req, res) => {
  try {
    const { userId, fromDate, toDate } = req.body;

    // 验证查询参数
    if (!userId || !fromDate || !toDate) {
      return res.status(400).json({ error: '缺少必要的查询参数' });
    }

    const infoCollection = getCollection('info'); // 获取指定的 info 集合

    // 查询指定用户在 fromDate 到 toDate 的记录
    const documents = await infoCollection.find({
      name_Id: new ObjectId(userId),
      date: {
        $gte: fromDate, // 大于或等于 fromDate
        $lte: toDate, // 小于或等于 toDate
      },
    }).sort({ date: 1 }).toArray(); // 使用 toArray() 获取多个结果

    // 返回查询到的文档
    res.status(200).json(documents);
  } catch (error) {
    console.error('查询失败:', error);
    res.status(500).json({ error: '查询失败' });
  }
});

// 饮食top
router.post('/getInfoFoodByUserId', authenticateToken, async (req, res) => {
  try {
    const { userId } = req.body;

    const infoCollection = getCollection('info'); // 获取指定的 info 集合

    // 查询指定用户的所有记录
    const documents = await infoCollection.find({
      name_Id: new ObjectId(userId),
    }).toArray();

    // 提取所有的 food 字段
    const foods = documents.map(doc => doc.food);
    
    // 返回查询到的 food 字段
    res.status(200).json({
      food: foods,
    });
  } catch (error) {
    console.error('查询失败:', error);
    res.status(500).json({ error: '查询失败' });
  }
});


// 根据userid查询 目标体重 的 API 路由
router.post('/getTargetWeight', authenticateToken, async (req, res) => {
  try {
    const { userId } = req.body;

    // 验证查询参数
    if (!userId) {
      return res.status(400).json({ error: '缺少必要的查询参数' });
    }

    const infoCollection = getCollection('user'); // 获取指定的 info 集合

    // 查询指定用户在指定日期的记录
    const documents = await infoCollection.findOne({
      _id: new ObjectId(userId),
    });

    res.status(200).json({
      target: documents.target,
    });

  } catch (error) {
    console.error('查询失败:', error);
    res.status(500).json({ error: '查询失败' });
  }
});

// 根据userid查询 头像
router.post('/getUserAvatar', authenticateToken, async (req, res) => {
  try {
    const { userId } = req.body;

    // 验证查询参数
    if (!userId) {
      return res.status(400).json({ error: '缺少必要的查询参数' });
    }

    const infoCollection = getCollection('user'); // 获取指定的 info 集合

    // 查询指定用户在指定日期的记录
    const documents = await infoCollection.findOne({
      _id: new ObjectId(userId),
    });

    res.status(200).json({
      avatar: documents.avatar,
    });

  } catch (error) {
    console.error('查询失败:', error);
    res.status(500).json({ error: '查询失败' });
  }
});

// 设置目标体重的 API 路由
router.post('/setTargetWeight', authenticateToken, async (req, res) => {
  try {
    const { userId, targetWeight } = req.body;

    // 验证查询参数
    if (!userId || !targetWeight) {
      return res.status(400).json({ error: '缺少必要的查询参数' });
    }

    const infoCollection = getCollection('user'); // 获取指定的 user 集合

    // 更新用户的目标体重
    const result = await infoCollection.updateOne(
      { _id: new ObjectId(userId) }, // 根据用户ID查找
      { $set: { target: targetWeight } } // 更新目标体重
    );

    if (result.modifiedCount > 0) {
      res.status(200).json({ message: '目标体重更新成功' });
    } else {
      res.status(404).json({ error: '用户未找到或未更新' });
    }
  } catch (error) {
    console.error('更新失败:', error);
    res.status(500).json({ error: '更新失败' });
  }
});

// 查询所有用户的用户信息的 API 路由
router.post('/getAllUserInfo', authenticateToken, async (req, res) => {
  try {
    const userCollection = getCollection('user'); // 获取指定的 user 集合
    const infoCollection = getCollection('info'); // 获取指定的 info 集合

    // 查询所有用户的信息
    const userDocuments = await userCollection.find().toArray();

    // 处理每个用户的信息
    const usersInfo = await Promise.all(userDocuments.map(async (user) => {
      // 查询用户在 info 集合中的最新记录
      const latestInfo = await infoCollection.find({
        name_Id: user._id
      }).sort({ date: -1 }).limit(1).toArray(); // 限制只获取最新的一条记录

      const latestWeight = latestInfo.length > 0 ? latestInfo[0].weight : '-';
      const targetWeight = user.target || '-';
      const difference = (latestWeight !== '-' && targetWeight !== '-') ? 
                          (latestWeight - targetWeight).toFixed(2) : '-';

      return {
        userId: user._id,
        name: user.username,
        target: targetWeight,
        latestDate: latestInfo.length > 0 ? latestInfo[0].date : '-', // 取最新记录的日期
        latestWeight: latestWeight,
        difference: difference
      };
    }));

    // 根据 difference 排序，小的排前面
    usersInfo.sort((a, b) => {
      if (a.difference === '-') return 1; // 将没有差值的放到后面
      if (b.difference === '-') return -1; // 将没有差值的放到后面
      return parseFloat(a.difference) - parseFloat(b.difference); // 数值排序
    });

    // 返回所有用户信息
    res.status(200).json(usersInfo);
  } catch (error) {
    console.error('查询失败:', error);
    res.status(500).json({ error: '查询失败' });
  }
});

  // 查询所有体重 info 的 API 路由
  router.post('/getInfoByAllWeight', authenticateToken, async (req, res) => {
    try {
      const { userId } = req.body;
  
      // 验证查询参数
      if (!userId ) {
        return res.status(400).json({ error: '缺少必要的查询参数' });
      }
  
      const infoCollection = getCollection('info'); // 获取指定的 info 集合
  
      // 查询指定用户在 fromDate 到 toDate 的记录
      const documents = await infoCollection.find({
        name_Id: new ObjectId(userId),
      }).sort({ date: 1 }).toArray(); // 使用 toArray() 获取多个结果
  
      // 返回查询到的文档
      res.status(200).json(documents);
    } catch (error) {
      console.error('查询失败:', error);
      res.status(500).json({ error: '查询失败' });
    }
  });

export default router;
