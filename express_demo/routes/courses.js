import express from 'express'
import Joi from 'joi'
const route = express.Router()

const courses =[
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
]

route.get('/', (req,res)=>{
    res.send(courses)
})

route.get('/:id', (req,res)=>{
    const course = courses.find(e => e.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given id not found')
    res.send(course)
})

route.post('/', (req,res)=>{
    const { error } = validateCource(req.body) // result.error
    if(error) return res.status(400).send(error.details[0].message)
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course)
    res.send(course)
})

route.put('/:id', (req,res)=>{
    const course = courses.find(e => e.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given id not found')
    const { error } = validateCource(req.body) // result.error
    if(error) return res.status(400).send(error.details[0].message)
    course.name = req.body.name
    res.send(course)
})

route.delete('/:id', (req,res)=>{
    const course = courses.find(e => e.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with the given id not found')
    const index = courses.indexOf(course)
    courses.splice(index, 1)
    res.send(course)
})

let validateCource = (course)=>{
    const schema = {
        name: Joi.string().min(3).required()
    }
    return Joi.validate(course, schema)
}

export default route