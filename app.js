const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

require('./models/db');

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000','http://localhost:8080']
}
));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

//to connect routes to app
app.use(require('./routes/index'));
app.use(require('./routes/user'))

app.listen(PORT,(req,res)=> {
    console.log("Server Connected")
})