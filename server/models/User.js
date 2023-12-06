const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	fname: { type: String, required: true, trim: true },
	lname: { type: String, required: true, trim: true },
	email: { type: String, required: true, trim: true },
	password: { type: String, required: true },
	courses: { type: Array }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;