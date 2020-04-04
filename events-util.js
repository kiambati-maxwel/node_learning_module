const events =  require('events');
const util = require('util');

let Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

let james = new Person('james');
let ann = new Person('ann');
let peter = new Person('peter');

let people = [james, ann, peter];

people.forEach(function(person){
    person.on('speak', function(message){
        console.log(`${person.name} said -- ${message}`);
    });
});

james.emit('speak', 'hey wat happend ');