require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const connectDB = require("./configs/db");
const userRouter = require("./routes/user");
const router = require("./routes/router");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
	origin:"*"
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")));

// routes
app.use("/api/",userRouter);
app.use("/api/",router);

connectDB()
	.then(() => {
		console.log("DB connected");
		app.listen(PORT,() => {
			console.log("Server running on port....",PORT);
		})
	})
	.catch(error => console.error(error))