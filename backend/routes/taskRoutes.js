const express = require('express');
const router = express.Router();
const Task = require ('../model/Task')
const { getTasks, postTasks, deleteTasks } = require('../controllers/taskControllers')

router.get('/', getTasks);

router.post('/', postTasks)

router.put('/:id', async (req,res) => {
    // res.status(200).send({message: `update Task ${req.params.id}`})
    try{
        const { id } = req.params;
        const updatedTask = await Task.findByIdAndUpdate(
            {_id: id}, req.body, {new: true}) 
            // new:true lets db know you are saving 
            res.status(200).send(updatedTask)
    } catch (e) {
        res.status(500).send(e);
    }
})

router.delete('/:id', deleteTasks)

module.exports = router; 

