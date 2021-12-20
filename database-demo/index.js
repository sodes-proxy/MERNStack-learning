const express=require('express');
const Joi=require('joi');
const mongoose=require('mongoose');
const app=express();
const connectDB=require('./config/dbConn');
require('dotenv/config');
//import routes
const createRoute=require('./routes/create');
app.use(express.json());
const port=process.env.PORT || 3000; //check if there is an env variable for port
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
//Routes
app.get('/',(req,res)=>{
    res.send('welcome to index');
});
//get routes with middleware
app.use('/create',createRoute);