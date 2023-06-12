const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

const shipmentController = require('./shipmentTracking.controller');

const port = 3000;

app.use(bodyParser.json());


app.get('/shipmentTracking', (req, res) => {
    let status = req.query.status;
    let startDate = req.query.startDate;
    let endDate = req.query.endDate;
    shipmentController.getShipments(status, startDate, endDate).then(data => res.json(data));
});

app.get('/shipmentTracking/:id', (req, res) => {
    let id = req.params.id;
    shipmentController.getShipment(id).then(data => res.json(data));
});

app.post('/shipmentTracking', (req, res) => {
    shipmentController.createShipment(req.body.shipment).then(data => res.json(data));
});

app.patch('shipmentTracking/:id', (req, res) => {
    let id = req.params.id;
    let val = req.body.value;
    shipmentController.updateShipment(id, val).then(data => res.json(data));
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});