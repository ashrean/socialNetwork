const mongoose = require('mongoose');
const User = require('./User')

const Schema = mongoose.Schema;

const ThoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 200
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
    username: [userSchema],

    reactions: {
        
    }
});

const Thought = mongoose.model('Thought', ThoughtSchema)

module.exports = Thought;
