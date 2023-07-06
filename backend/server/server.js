const express = require('express');
const port = 5000;
const app = express();
const dotenv = require('dotenv');
const schema = require('./model/schema');
const cors = require('cors');
dotenv.config({path: '../config.env'});
const router = require('./controller/router');

const db = require('./db/conn');
db();

app.use(express.json());

app.use(
    cors({
    origin: [process.env.Frontend_Url],
    methods:['GET','POST','DELETE','PUT'],
    credentials:true
})
);

app.use('/api', router);
app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(port , ()=>{
    console.log(` server hast started at port ${port}`);
})