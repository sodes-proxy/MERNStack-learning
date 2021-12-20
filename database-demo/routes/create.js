const express=require('express');
const router =express.Router();
router.get('/',(req,res)=>{
    res.send('we are on create');
});
router.get('/prueba',(req,res)=>{
    res.send('we are on prueba');
});
module.exports=router;