const mongoose = require('mongoose');

const connectMongo = () =>{
    mongoose.connect('mongodb://localhost:27017/demo_Mern')
    .then(()=> console.log('connnected '))
    .catch((err)=>console.log(err))
}

module.exports= connectMongo