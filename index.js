const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

var data;

app.post('/', (req, res) => {
    console.log(req.body);
    data = req.body;
    res.status(200).send('ok');
});

app.get('/', (req, res) => {
    return res.json(data);
});



app.listen(port, () => {console.log(`Running: ${port}`)});

//now trying heroku 