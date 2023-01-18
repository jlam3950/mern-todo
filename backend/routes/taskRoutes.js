const express = require('express');
const app = express();
const router = express.Router;
const { getTasks } = require('./controllers/taskControllers')

router.get('/', getTasks);

router.put('/', (req,res) => {
    res.status(200).send({message: 'set Task'})
})

router.update('/:id', (req,res) => {
    res.status(200).send({message: `update Task ${req.params.id}`})
})

router.delete('/:id', (req,res) => {
    res.status(200).send({message: `delete Task ${req.params.id}`})
})

module.exports = router; 

