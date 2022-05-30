// set up const for express 
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//set up consts for node 
const fs = require('fs');
const path = require('path');

//set up consts for routes 
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//set up apps
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server port ${PORT} is on online now!`);
});