const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcome!!</h1>');
});
app.get('/about', (req, res) => {
    res.status(200).send('<h2>Here is JRT home.</h2>');
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})