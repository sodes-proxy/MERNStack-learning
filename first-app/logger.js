const EventEmiter=require('events');
var url='https://youtube.com';
class Logger extends EventEmiter{
    log(msg){
        console.log(msg);
        this.emit('messageLogged',{id:1,url:'https://'});
    
    }
}
module.exports=Logger; //exporting method
//module.exports.log=log; exporting object with log method
//module.exports.endPoint=url;