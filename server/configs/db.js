const mongoose = require("mongoose");

async function connectDB(){
	return await mongoose.connect("mongodb://127.0.0.1/onlineCourses");
}

module.exports = connectDB;