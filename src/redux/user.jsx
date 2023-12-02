import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    users: [{ email: "test@test.com", password: "1", courses: [] }],
    user: { email: "test@test.com", password: "1", courses: [] },
  },
  reducers: {
    loginUser: (state, { payload }) => {
      console.log("login Payload", payload);
      const user = state.users.find((user) => user.email === payload.email);

      if (user.password) {
        return { ...state, isLoggedIn: true, user: { ...payload } };
      } else {
        alert("Invalid email or password!");
      }
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
