const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Enumerator = require('../../config/enumerator.js');

let todoSchema = new Schema({
    text: String,
    done: Boolean,
    date: {type: Date, default: Date.now},
    priorityLevel: { type: Number, default: Enumerator.priorityLevel().LOW},
});

module.exports = mongoose.model('Todo', todoSchema);