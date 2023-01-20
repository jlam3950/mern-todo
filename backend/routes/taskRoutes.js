const express = require('express');
const router = express.Router();
const Task = require ('../schema/Task')
// const { getTasks } = require('./controllers/taskControllers')

router.get('/', (req,res) => {
    Task.find({}, (err, result) => {
        if(err) {
       res.send(err)
        } else {
            res.send(result)
        }
    })
})

router.post('/', async (req,res) => {
    const taskInput = req.body;
    const newTask = new Task(taskInput); //pass req.body, using schema 
    await newTask.save(); //make sure that this is async/await 
    res.json(taskInput); //won't be using, but to display data to front end 
})

router.put('/:id', (req,res) => {
    res.status(200).send({message: `update Task ${req.params.id}`})
})

router.delete('/:id', (req,res) => {
    res.status(200).send({message: `delete Task ${req.params.id}`})
})

module.exports = router; 

