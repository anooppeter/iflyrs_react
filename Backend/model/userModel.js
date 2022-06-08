const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, trim: true, lowercase: true, unique: true, required: "Email address is required" },
    adhaarnumber : {type: Number, required:"Adhaar number is required"},
    password : {type: String, require: "Password is required" },
    confirmpassword : {type: String, require: "Confirm password is required"}
});

const User = mongoose.model('user', userSchema);

module.exports = User;
