const { Router } = require("express");
const User = require("../models/User");


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


module.exports = userRouter;