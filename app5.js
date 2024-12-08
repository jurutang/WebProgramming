const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('첫번째 미들웨어에서의 요청 처리');
    res.send({name:'JRT', age:23});
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})