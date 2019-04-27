import Events from 'events'

class Logger extends Events{

    log(message){
        console.log(`Message is ${message}`);
        this.emit('logged', { id:1, name: 'test'})
    }

}

export default Logger