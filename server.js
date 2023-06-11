const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

const taskController = require('./task.controller');

const port = 3000;

app.use(bodyParser.json());


app.get('/shipmentTracking', (req, res) => {
    taskController.getTasks().then(data => res.json(data));
});

app.get('/shipmentTracking/:id', (req, res) => {
    let id = req.params.id;
    taskController.getTasks(id).then(data => res.json(data));
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});