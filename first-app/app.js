const EventEmiter=require('events');
const emitter= new EventEmiter();
//register listener
emitter.addListener('messageLogged',function(){
    console.log('listener called');
});
//raise event
emitter.emit('messageLogged');