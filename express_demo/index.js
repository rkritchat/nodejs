import express from 'express'
import Joi from 'joi'

const app = express()

const courses =[
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
]

app.use(express.json())

app.get('/api/courses', (req,res)=>{
    res.send(courses)
})

app.get('/api/courses/:id', (req,res)=>{
    const course = courses.find(e => e.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given id not found')
    else res.send(course)
})

app.post('/api/courses', (req,res)=>{
    const { error } = validateCource(req.body) // result.error
    if(error) {
        res.status(400).send(error.details[0].message)
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})

app.put('/api/courses/:id', (req,res)=>{
    const course = courses.find(e => e.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given id not found')
    else{
        const { error } = validateCource(req.body) // result.error
        if(error) {
            res.status(400).send(error.details[0].message)
            return;
        }
        course.name = req.body.name
        res.send(course)
    }
})

app.delete('/api/courses/:id', (req,res)=>{
    const course = courses.find(e => e.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given id not found')
    else{
        const index = courses.indexOf(course)
        courses.splice(index, 1)
        res.send(course)
    }
})

let validateCource = (course)=>{
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course, schema)
}

const port = process.env.PORT || 5000
app.listen(port, ()=>console.log('Listing on port ', port))