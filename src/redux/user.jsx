import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    users: [{ email: "test@test.com", password: "1", courses: [] }],
    user: {},
  },
  reducers: {
    loginUser: (state, { payload }) => {
      return { ...state, isLoggedIn: true, user: { ...payload } };
    },
    createUser: (state, { payload }) => {
      console.log("Create accoiunt Payload", payload);
      state.users.push({ ...payload, courses: [] });
    },
    addCourse: (state, { payload }) => {
      console.log("Add course Payload", payload);
      return {
        ...state,
        user: {
          ...state.user,
          courses: [payload.courses],
        },
      };
    },
  },
});

export const { createUser, loginUser, addCourse } = userReducer.actions;

export default userReducer;
