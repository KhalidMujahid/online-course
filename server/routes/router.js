const { Router } = require("express");
const Course = require("../models/Course");

const router = Router();

// get all courses
router.get("/courses", async (req,res,next) => {
	try {
		const courses = await Course.find();
		return res.status(200).send(courses);
	} catch(error){
		next(error);
	}
});

// add course
router.post("/add", async (req,res,next) => {
	try {
		const { title, descriptions,price,vidLink } = req.body;

		const course = await Course.create({
			title,
			descriptions,
			price,
			vidLink
		})

		if(course)
			return res.status(201).send(course);

	} catch(error){
		next(error);
	}
});

// get course by user ID
router.get("/course/:id", async (req,res,next) => {
	try {
		// const 

	} catch(error){
		next(error);
	}
});

module.exports = router;