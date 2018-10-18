
module.exports = function (){
    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
    const db = require('../libs/db-connections')();

    const Task = new Schema({
        title: String,
        description: String,
        status: Boolean
    }); 

    return mongoose.model('tasks', Task);
}