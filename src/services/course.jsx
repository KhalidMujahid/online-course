import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
  reducerPath: "courseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3000" }),
  endpoints: (builder) => ({
  	getCourses: builder.query({
  		query: () => "/api/courses"
  	}),
  	getSingleCourse: builder.query({
  		query: (id) => `/api/courses/${id}`
  	}),
  }),
});

export const { useGetCoursesQuery,useGetSingleCourseQuery } = courseApi;