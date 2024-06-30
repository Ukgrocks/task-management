    //create a schema
    const mongoose = require('mongoose');

    const taskSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        date:{ 
            type: Date,
            default: Date.now()
        }
    });
    //create a model
    const Task = mongoose.model('Task', taskSchema);
    module.exports = Task;