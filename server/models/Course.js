const mongoose = require("mongoose");

// const CourseSchema = new mongoose.Schema({
// 	user_id: {
// 		type: mongoose.Schema.Types.ObjectId,
// 		ref: "User",
// 		required: true
// 	},
// 	course_id: {
// 		type: mongoose.Schema.Types.ObjectId,
// 		ref: "Course",
// 		required: true
// 	},
// });

const CourseSchema = new mongoose.Schema({
  title: { type: String, trim: true },
  descriptions: { type: String, trim: true },
  price: { type: Number },
  author: { type: String, trim: true },
  authorAvater: { type: String, default: "avater.png" },
  vidLink: { type: String },
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
