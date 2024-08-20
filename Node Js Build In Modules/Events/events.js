const EventEmitter = require('events') //this module returns a class

const emitter = new EventEmitter() // making object of that class

//Registering a listener for bellring event

emitter.on('bellRing', ({period, text}) => {
    console.log("We neen to get out from the class, " + period + " " + text);
})

//rasing an event
// emitter.emit('bellRing')

//rasing event after some times -->
// setTimeout(() => {
//     emitter.emit('bellRing')
// }, 2000) //after 2 sec

//passing Parameter-->
// setTimeout(() => {
//     emitter.emit('bellRing', 'second period ended')
// }, 2000)

//any type of data can be use as a parameter-->
setTimeout(() => {
    emitter.emit('bellRing', {
        period : 'second',
        text : 'period ended',
    })
}, 2000)
