const mongoose = require('mongoose');
const User = require('./User');
const Reaction = require('./reaction');

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

    username: {
        type: String,
        required: true,
        ref: 'User'
    },

    reactions: [Reaction.schema]
});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', ThoughtSchema);

module.exports = Thought;

