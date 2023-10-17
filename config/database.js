const mongoose = require('mongoose');
require('dotenv').config;

exports.connect = ()=>{
    mongoose.connect(process.env.MONGO_URL,
       { useNewUrlParser:true,
        useUnifiedTopology:true
       }).then(()=>{
        console.log('DB connected Successfully');
       })
       .catch((error) =>
       {
        console.log('DB connection Issue');
        console.log(error);
        process.exit(1);
       } )
       

}