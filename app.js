const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');

require('./models/db');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//to connect routes to app
app.use(require('./routes/index'));

app.listen(PORT,(req,res)=> {
    console.log("Server Connected")
})