const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.port || 3000;


app.get('/', (req, res) => {
    res.send('working');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})