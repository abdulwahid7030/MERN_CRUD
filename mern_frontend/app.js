const express = require('express');
const brouter = require('./routes/rout');

const connectMongo = require('./db/db');
connectMongo();
const app=express();

const cors = require('cors');
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/blog",brouter);

app.listen(4040,()=>{
    console.log("backend is running");
    
})