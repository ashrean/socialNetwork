const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

module.exports = mongoose.model('Reaction', reactionSchema);
