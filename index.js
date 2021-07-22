const express = require('express');

const app = express();
const port = 3000;

app.post('/', (req, res) => {
    console.log(req);
    res.status(201).send('ok');
});

app.listen(port);