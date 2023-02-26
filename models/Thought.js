const mongoose = require('mongoose');
const User = require('./User');
const Reaction = require('./reaction');

const Schema = mongoose.Schema;

//Reaction Schema
const reactionSchema = new Schema({
    reactionID: {
      type: Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // using the getter method on this field to format the timestamp using the `toLocaleString` when the document is retrieved from the database
      get: function(value) {
        return new Date(value).toLocaleString();
      }
    }
});



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

    reactions: [reactionSchema]
});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', ThoughtSchema);

module.exports = Thought;
