const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const photoSchema = mongoose.Schema({
  username: String,
  password: String
});
photoSchema.plugin(uniqueValidator);
module.exports = mongoose.model("Photo", photoSchema);
