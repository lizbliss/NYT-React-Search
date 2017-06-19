var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var nytreactSchema = new Schema({
  location: {
    type: String
  },
  date: {
    type: Date
  },
  url: {
    type: String
  }
});

var nytreact = mongoose.model("nytreact", nytreactSchema);
module.exports = nytreact;
