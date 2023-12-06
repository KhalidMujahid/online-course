import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const courseApi = createApi({
  reducerPath: "courseApi",
  tagTypes: ["Course"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:3000" }),
  endpoints: (builder) => ({
  	getCourses: builder.query({
  		query: () => "/api/courses",
      providesTags: [{ type: "Course" }],
  	}),
  	getSingleCourse: builder.query({
  		query: (id) => `/api/courses/${id}`
  	}),
    // /add/course/:id
    updateCourse: builder.mutation({
      query: (val) => ({
        method: "PUT",
        url: "/api/add/course",
        body: val
      }),
      invalidatesTags: [{ type: "Course" }],
    })
  }),
});

export const { useGetCoursesQuery,useGetSingleCourseQuery,useUpdateCourseMutation } = courseApi;