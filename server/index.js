const express = require('express');
const cors = require('cors');
const breadcrumbs = require('./data/breadcrumbsdata.json');

const app = express();  //creates an express application

const port = 5000;

app.use(cors({ origin: 'http://localhost:3000'}));

app.get('/breadcrumbs', (req,res) => {
    res.json(breadcrumbs);
});

app.listen(port, () => console.log(`Listening on port ${port}`));