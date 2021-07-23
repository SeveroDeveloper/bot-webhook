const express = require('express');

const app = express();
const port = 'https://challenge-take.herokuapp.com/';

app.get('/', (req, res) => {
    return res.json({"works":"true"});
});

app.post('/', (req, res) => {
    console.log(req);
    res.status(201).send('ok');
});

app.listen(port);

//now trying heroku