const mongoose = require('mongoose');

const blogsch=mongoose.Schema(
    {
        title:String,
        content:String,
        imageUrl:String,
        author:String,
    },
    {
        timestamps:true
    }
);

const blogmodel=mongoose.model("blogscon",blogsch);

module.exports=blogmodel;