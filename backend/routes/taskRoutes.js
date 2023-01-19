const express = require('express');
const router = express.Router();
// const { getTasks } = require('./controllers/taskControllers')

router.get('/', (req,res) => {
    res.send({task: 'run for fun'})
})

router.post('/', (req,res) => {
    res.status(200).send({message: 'set Task'})
})

router.put('/:id', (req,res) => {
    res.status(200).send({message: `update Task ${req.params.id}`})
})

router.delete('/:id', (req,res) => {
    res.status(200).send({message: `delete Task ${req.params.id}`})
})

module.exports = router; 

