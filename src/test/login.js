fetch('http://localhost:3333/api/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: 'su',
    password: '123qwe'
  })
})
.then(response => {
  if (!response.ok) {
    // 打印状态码和错误信息
    console.error('请求失败:', response.status, response.statusText);
    throw new Error('网络响应不是 OK');
  }
  return response.json();
})
.then(data => {
  console.log('成功:', data);
})
.catch(error => {
  console.error('错误:', error);
});
