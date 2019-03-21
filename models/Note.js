var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
var NoteSchema = new Schema({
  // `title` is of type String
  // title: String,
  // trim: true,
  // // `body` is of type String
  // body: String
  username: {
    type: String,
    trim: true,
    default: 'anonymous'
  },
  message: {
    type: String,
    trim: true,
    required: true
  },
  posted: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;