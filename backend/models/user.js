const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true}
});


userSchema.plugin(uniqueValidator);

// created so that we can use user details in other files
module.exports = mongoose.model("user", userSchema);
