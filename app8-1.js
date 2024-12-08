const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) => {
    const paramId = req.body.id || req.query.id;
    const paramPassword = req.body.password || req.query.password;

    res.status(200).send(
        `<h1>서버에서 응답한 결과</h1>
        <div><p>Param id : ${paramId}</p></div>
        <div><p>Param password: ${paramPassword}</p></div>
        <div><br><a href="/login1.html">로그인 페이지로 돌아가기</div>`
    );
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})