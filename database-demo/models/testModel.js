const mongoose=require('mongoose');
//how the model is gonna look in mongo
const testSchema=mongoose.Schema({
    title:
    {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }});
    //name of model in database
module.exports=mongoose.model('ok',testSchema);