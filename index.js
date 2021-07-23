const express = require('express');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.json({"works":"true"});
});

app.post('/', (req, res) => {
    console.log(req);
    res.status(201).send('ok');
});

app.listen(port, () => {console.log(`Running: ${port}`)});

//now trying heroku 