const express=require('express');
const Joi=require('joi');
const mongoose=require('mongoose');
const app=express();
const connectDB=require('./config/dbConn');
require('dotenv/config');
app.use(express.json());
const port=process.env.PORT || 3000; //check if there is an env variable for port
//import routes

//connect to mongo DB
connectDB();
//check if is connected
mongoose.connection.once('open',()=>{
    console.log('connected to mongo DB'); 
    //server listener
    app.listen(port,()=>{
        console.log(`listening on port ${port}`);
    });
});