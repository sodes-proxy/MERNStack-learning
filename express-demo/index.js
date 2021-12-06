const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('hello world');
});
app.get('/api/courses',(req,res)=>{
    res.send([1,2,3]);
});
app.get('/api/courses/:id',(req,res)=>{
    //res.send(req.params.id);
    res.send(req.query);
});
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});