import Logger from './logger'

const logger = new Logger()

logger.on('logged', ()=>{
    console.log('Come here');
})

logger.log('test')