const express = require('express');
const app = express();
const router = require('./routes/routes')
const cors = require('cors');
const port = process.env.PORT || 5000

app.use(cors());
app.use('/',router)

app.listen(port, ()=>{
    console.log('http://localhost:5000')
})