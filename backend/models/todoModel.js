// Document - an instance of a model ( stored in mongodb )
// schema - structure of the document
// model - interface to interact with a mongodb collection

import mongoose from "mongoose";

const todoSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }

})


const Todos = mongoose.model('todos' , todoSchema)


export default Todos