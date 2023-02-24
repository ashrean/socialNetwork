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
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: function(value) {
      return new Date(value).toLocaleString();
    }
  }
});

module.exports = mongoose.model('Reaction', reactionSchema);

