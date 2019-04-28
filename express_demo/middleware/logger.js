let logger = (req, res, next)=>{
    console.log('This is custom middleware')
    next()
}

export default logger