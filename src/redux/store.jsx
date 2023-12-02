import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/user";
import courses from "./courses";
import user from "./user";

const store = configureStore({
  reducer: {
    courses: courses.reducer,
    users: user.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

export default store;
