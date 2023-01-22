const express = require('express');
const router = express.Router();
const Task = require ('../model/Task')
const { getTasks, postTasks, deleteTasks, updateTasks } = require('../controllers/taskControllers')

router.get('/', getTasks);
router.post('/', postTasks)
router.put('/:id', updateTasks)
router.delete('/:id', deleteTasks)

module.exports = router; 

