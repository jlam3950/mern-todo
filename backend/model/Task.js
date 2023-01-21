const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task: {
        type: String, 
        required: [true, 'you forgot to enter a task']
    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    },
    id: String
})

module.exports = mongoose.model('Task', taskSchema)
// collection name is Task
//function takes in the name of the model, pass it the schema, which would be task, you want to export this

