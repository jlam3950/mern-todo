const Task = require('../model/Task')

const getTasks = (req,res) => {
        Task.find({}, (err, result) => {
            if(err) {
           res.send(err)
            } else {
                res.send(result)
            }
        })
}

const postTasks = async (req,res) => {
    try{
        const taskInput = req.body;
        const newTask = new Task(taskInput); //pass req.body, using schema 
        await newTask.save(); //make sure that this is async/await 
        res.json(taskInput); //won't be using, but to display data to front end 
    } catch(e) {
        res.send(e)
    }
}

const updateTasks = async (req,res) => {
    try{
        const { id } = req.params;
        const updatedTask = await Task.findByIdAndUpdate(
            {_id: id}, req.body, {new: true}) 
            // new:true lets db know you are saving 
            res.status(200).send(updatedTask)
    } catch (e) {
        res.status(500).send(e);
    }
}

const deleteTasks = async(req,res) => {
    try{
    const id = req.params.id; 
    await Task.findByIdAndRemove(id)
    res.status(200).send('task deleted')
    } catch(e){
        res.send(e)
    }
    }

module.exports = {
    getTasks, postTasks, deleteTasks, updateTasks
}