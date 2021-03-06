const express=require('express');
const mongoose=require('mongoose');
const app=express();
const connectDB=require('./config/dbConn');
const bodyParser=require('body-parser');
require('dotenv/config');
//import routes
const crudRoute=require('./routes/CRUD');
//middlewares
app.use(express.json());
app.use(bodyParser.json());
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
//crud dir
app.use('/crud',crudRoute);