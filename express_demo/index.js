import express from 'express'
import courses from './routes/courses'

const app = express()

app.use(express.json())
app.use('/api/courses', courses)

const port = process.env.PORT || 5000
app.listen(port, ()=>console.log('Listing on port ', port))