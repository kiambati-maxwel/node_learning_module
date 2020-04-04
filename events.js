const events = require('events');
const util = require('util');

// let emmiter = new events.EventEmitter();

// emmiter.on('myEvent', message =>{
//     console.log(message);
// });

// emmiter.emit('myEvent', 'heey is me event haha watch out --- !!!');

let person = function(name){
    this.name = name;
}

util.inherits('person', events.EventEmitter);

let james = new person('james');
let ann = new person('ann');
let peter = new person('peter');

let people = [james,ann, peter];

people.forEach(person => {
    person.on('speak', message => {
        console.log(`${person.name} said ${message}`);
    })
} )

ann.emit('speak', 'hey maahhn damn node my home ');
