const EventEmiter=require('events');
const Logger=require('./logger');
const logger=new Logger();
logger.addListener('messageLogged',function(arg){
    console.log('listener called',arg);
});
logger.log('message');