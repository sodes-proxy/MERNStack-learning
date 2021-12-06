const fs=require('fs');
console.log('syncronous');
//synchronous
const files=fs.readdirSync('./');
console.log(files);
//Async
console.log('Asyncronous');
fs.readdir('./',function(err,files){
    if(err){
        console.log('Error',err);
    }
    else{
        console.log('Result',files);
    }
});