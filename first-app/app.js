const os=require('os');
var totalMemory=os.totalmem();
var freeMemory=os.freemem();
console.log("total Memory: "+totalMemory);
console.log(`Total Memory: ${totalMemory}`);
console.log(`free Memory: ${freeMemory}`);