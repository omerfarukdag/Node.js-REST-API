const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

const routes = require('./routes');
const port = process.env.PORT || 8000;

app.use(express.json());
app.use('/api', routes);

app.all('*', (req, res) => {
    res.status(404).send('404 Not Found');
});

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('MongoDB connected');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch(err => {
    console.log(err);
});