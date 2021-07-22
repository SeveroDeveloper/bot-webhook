const express = require('express');

const app = express();
const port = 3000;

app.get('/start', (req, res) => {
    return res.json({"works":"true"});
});

app.post('/', (req, res) => {
    console.log(req);
    res.status(201).send('ok');
});

app.listen(port);

//now trying heroku