const express = require('express');
const {addblog,showblogs,showblog,updateblogs,deleteblogs} = require('../controll/controll');

const brouter=express.Router();

brouter.post("/add",addblog);
brouter.get("/",showblogs);
brouter.get("/blog/:id",showblog);
brouter.put("/:id",updateblogs);
brouter.delete("/:id",deleteblogs);

module.exports=brouter;