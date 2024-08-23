const EventEmitter = require('events')

class School extends EventEmitter{
    startPeriod() {
        console.log("Class Started");
    
    
        //rase event when bell rings-->
        setTimeout(() => {
            this.emit('bellRing', {
                period : 'second',
                text : 'period ended',
            })
        }, 2000)
    }
}

module.exports = School;