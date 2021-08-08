const express = require('express');
const app = express();
const router = require('./routes/routes');
const cors = require('cors');
const port = process.env.PORT || 5000;
const path = require('path');
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());
app.use('/',router)

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, ()=>{
    console.log('http://localhost:5000')
})