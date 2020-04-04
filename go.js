// ----- global object -----
console.log('really global object');

//  --- set time out 
let time = 0
setTimeout(() => {
    time += 2;
    console.log(`i have delayes ${time} seconds`);
},2000);

//  --- set interval
let timeInt = 0
let timer = setInterval(() => {
    timeInt += 2;
    console.log(`i have delayes ${timeInt} seconds`);
    if(timeInt > 5){
        clearInterval(timer);
    }
}, 2000);

// ------ 
console.log(__dirname);
console.log(__filename);

// ----- events 

