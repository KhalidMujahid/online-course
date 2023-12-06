import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/user";
import { courseApi } from "../services/course";
import courses from "./courses";
import user from "./user";

const store = configureStore({
  reducer: {
    courses: courses.reducer,
    users: user.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [courseApi.reducerPath]: courseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware,courseApi.middleware),
});

export default store;
