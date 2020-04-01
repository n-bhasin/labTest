const event = require('events');
const eventEmitter = new event.EventEmitter();
const moment = require('moment');

var currentTimeCallback = () =>{
    let time = moment().format('HH:mm:ss');
    console.log(time);
}

eventEmitter.on('currentTime', currentTimeCallback)
eventEmitter.emit('currentTime')