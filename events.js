const EventEmitter = require('events');

const door = new EventEmitter();

door.on('start', (start, end) => {
    console.log('started', `${start}`, `${end}`);   
})

door.once('one time', () => {
    console.log('dn')
})

door.emit('start', 1, 100);
door.emit('one time');

door.removeAllListeners(); 
door.removeListener('listener') // for specific listener

door.prependListener('listener') // or prependOnceListener('listener')
//When you add a listener using on or addListener, 
//it's added last in the queue of listeners, and called last. Using prependListener it's added, and called, before other listeners.

console.log(door.eventNames());
console.log(door.getMaxListeners());
console.log(door.listenerCount('start'))