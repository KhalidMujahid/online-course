const { Router } = require("express");
const User = require("../models/User");
const Course = require("../models/Course");


const userRouter = Router();

//login
userRouter.post("/login",async (req,res,next) => {
	try{

		const { email, password } = req.body;

		if(!email || !password) return res.status(400).send({ message: "All fields are required!"});

		const user = await User.findOne({ email });

		if(!user) return res.status(401).send({ message: "Invalid email or password"});

		if(user.password === password){
			const { password, ...others } = user._doc;
			return res.status(200).send(others);
		} else {
			return res.status(401).send({ message: "Invalid email or password" });
		}

	} catch(error){
		next(error);
	}
})


// register
userRouter.post("/register",async (req,res,next) => {
	try{

		const { fname,lname,email,password } = req.body;

		if(!fname || !lname || !email || !password){
			return res.status(400).send({ message: "All fields are required" });
		}

		const user = await User.create({
			fname,
			lname,
			email,
			password
		})

		if(user){
			return res.status(201).send({ message: "Account created!" });
		} else {
			return res.status(400).send({ message: "An error occured while creating account please try again later"});
		}

	} catch(error){
		next(error);
	}
});

// add course for user
userRouter.put("/add/course", async (req,res,next) => {
	try {
		const { userId,courseId } = req.body;

		// find user
		const user = await User.findById(userId);

		// if user
		if(user){
			// find course
			const course = await Course.findById(courseId);
			if(course){
				await User.findByIdAndUpdate(userId,{
					$push: { courses: course }
				},{ new:true })
				.then((d) => res.status(201).send(d))
				.catch(error => res.status(400).send(error));
			} else {
				return res.sendStatus(404);
			}
		} else {
			return res.sendStatus(404);
		}

	} catch(error){
		next(error);
	}
});

// delete course by user ID
userRouter.delete("/remove/course/", async (req, res, next) => {
  try {
    const { id,courseId } = req.body;
    const course = await Course.findByIdAndDelete(id,{
      $pop: {
        course: courseId
      }
    }, { new:true });
    return res.status(200).send(course);
  } catch (error) {
    next(error);
  }
});


module.exports = userRouter;