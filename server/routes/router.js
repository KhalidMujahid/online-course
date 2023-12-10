const { Router } = require("express");
const Course = require("../models/Course");

const router = Router();

// get all courses
router.get("/courses", async (req, res, next) => {
  try {
    const courses = await Course.find();
    return res.status(200).send(courses);
  } catch (error) {
    next(error);
  }
});

// add course
router.post("/add", async (req, res, next) => {
  try {
    const { title, descriptions, price, vidLink } = req.body;

    const course = await Course.create({
      title,
      descriptions,
      price,
      vidLink,
    });

    if (course) return res.status(201).send(course);
  } catch (error) {
    next(error);
  }
});

// get course by user ID
router.get("/courses/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const course = await Course.findById(id);
    return res.status(200).send(course);
  } catch (error) {
    next(error);
  }
});


// migraions
router.get("/pop", async (req, res, next) => {
  const done = await Course.insertMany([
    {
      title: "React",
      descriptions: "React course",
      price: 200,
      author: "Khalid",
      authorAvater: "http://127.0.0.1:3000/avater.jpg",
      vidLink: "",
    },
    {
      title: "Angular",
      descriptions: "Angular course",
      price: 20,
      author: "Khalid",
      authorAvater: "http://127.0.0.1:3000/avater.jpg",
      vidLink: "",
    },
    {
      title: "Vue",
      descriptions: "Vue course",
      price: 209,
      author: "Khalid",
      authorAvater: "http://127.0.0.1:3000/avater.jpg",
      vidLink: "",
    },
    {
      title: "JavaScript",
      descriptions: "JavaScript course",
      price: 500,
      author: "Khalid",
      authorAvater: "http://127.0.0.1:3000/avater.jpg",
      vidLink: "",
    },
  ]);
  console.log(done);
});

module.exports = router;
