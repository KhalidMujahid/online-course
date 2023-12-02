import { createSlice } from "@reduxjs/toolkit";

const coursesReducer = createSlice({
  name: "courses",
  initialState: [
    {
      id: 1,
      title: "React",
      descriptions: "React course",
      price: 200,
      vidLink: "",
    },
    {
      id: 2,
      title: "Angular",
      descriptions: "Angular course",
      price: 20,
      vidLink: "",
    },
    {
      id: 3,
      title: "Vue",
      descriptions: "Vue course",
      price: 209,
      vidLink: "",
    },
    {
      id: 4,
      title: "JavaScript",
      descriptions: "JavaScript course",
      price: 500,
      vidLink: "",
    },
  ],
  reducers: {},
});

// export const {} = coursesReducer.actions;

export default coursesReducer;
