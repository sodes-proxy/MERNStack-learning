const express=require('express');
const Test=require('../models/testModel');
const router =express.Router();
//gets all the info of the collection (Read)
router.get('/', async (req,res)=>{
    try{
       const posts = await Test.find();
       res.status(200).json(posts);
    }catch(err){
        res.status(400).json({message:err});
    }
});
//gets a specific post (Read)
router.get('/:postID', async (req,res)=>{
    try{
       const post = await Test.findById(req.params.postID);
       res.status(200).json(post);
    }catch(err){
        res.status(400).json({message:err});
    }
});
//delete a specific post (Delete)
router.delete('/:postID', async (req,res)=>{
    try{
       const delPost = await Test.remove({_id:req.params.postID});
       res.status(200).json(delPost);
    }catch(err){
        res.status(400).json({message:err});
    }
});
//update a specific post (Update), can also be done with patch
router.put('/:postID', async (req,res)=>{
    try{
       const updatePost = await Test.updateOne({_id:req.params.postID},{$set:{title:req.body.title}});
       res.status(200).json(updatePost);
    }catch(err){
        res.status(400).json({message:err});
    }
});
//sends the data to the mongoDB (Create)
router.post('/',async (req,res)=>{
    const post=new Test({title:req.body.title,description:req.body.description});
    try{
        const savedPost=await post.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(400).json({message:err});
    }
});

module.exports=router;