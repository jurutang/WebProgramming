const express = require('express');
const app = express();

app.use((req,res,next) => {
    console.log('First Middleware...');
    req.user = 'jrt';
    next();
});

app.use((req,res,next) => {
    console.log('Second Middleware...');
    res.status(200).send(`<h1>${req.user} responds at Express Server</h1>`);
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})