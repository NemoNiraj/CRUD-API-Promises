const express = require('express');
const mongoose = require('mongoose');

const app = express();

var db_name='promise_db'
mongoose.connect('mongodb://localhost/'+db_name);

// listen for requests
app.listen(4000, function(){
    console.log('Ready to Go');
});

app.use(express.json());
app.use('/api',require('./router/api'));

