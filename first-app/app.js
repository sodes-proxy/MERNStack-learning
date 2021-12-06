const EventEmiter=require('events');
const emitter= new EventEmiter();
/*
* Arrow function 
* function(arg){
*
* }
(arg){
    
}
*/
//register listener
emitter.addListener('messageLogged',function(arg){
    console.log('listener called',arg);
});
//raise event
emitter.emit('messageLogged',{id:1,url:'https://'});