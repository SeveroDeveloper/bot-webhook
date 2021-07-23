const express = require('express');

const app = express();
const PORT = 'https://challenge-take.herokuapp.com/';

app.get('/', (req, res) => {
    return res.json({"works":"true"});
});

app.post('/', (req, res) => {
    console.log(req);
    res.status(201).send('ok');
});

app.listen(PORT);

//now trying heroku