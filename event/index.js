import Logger from './logger'

const logger = new Logger()

logger.on('logged', (log)=>{
    console.log('Event emit is ', log);
})

logger.log('send message')