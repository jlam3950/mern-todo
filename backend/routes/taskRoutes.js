const express = require('express');
const router = express.Router();
const Task = require ('../model/Task')
const { getTasks, postTasks, deleteTasks } = require('.././controllers/taskControllers')

router.get('/', getTasks);

router.post('/', postTasks)

router.put('/:id', async(req,res) => {
    // res.status(200).send({message: `update Task ${req.params.id}`})
    try{
        const id = req.params.id;
        const task = await Task.findOneAndUpdate(
           { _id: id },
           {$set: {completed: !completed}}
        );
        // task.complete = !complete;
        await task.save();
        res.send(console.log('task completion toggled'))
    } catch (e) {
        res.send(e);
    }
})

router.delete('/:id', deleteTasks)

module.exports = router; 

