const express=require('express');
const Test=require('../models/testModel');
const router =express.Router();
router.get('/',(req,res)=>{
    res.send('we are on create');
});
router.get('/prueba',(req,res)=>{
    res.send('we are on prueba');
});
router.post('/',(req,res)=>{
    const post=new Test({title:req.body.title,description:req.body.description});
    post.save()
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(err=>{
        res.status(400).json({message:err});
    })
});
module.exports=router;