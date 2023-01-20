const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task: String,  
    completed: Boolean,
    id: Number,
})

module.exports = mongoose.model('Task', taskSchema)
// collection name is Task
//function takes in the name of the model, pass it the schema, which would be task, you want to export this

