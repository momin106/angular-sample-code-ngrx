import { createAction, props } from "@ngrx/store";
import CourseActionTypes from "./courses.types";
import { Course } from "../../courses/model/course";
import { Update } from "@ngrx/entity";

export const loadAllCourses = createAction(CourseActionTypes.CoursesResolver);

export const allCoursesLoaded = createAction(
  CourseActionTypes.LoadCoursesEffect,
  props<{ payload: { courses: Course[] } }>()
);

export const courseUpdated = createAction(
  CourseActionTypes.EditCourseDialog,
  props<{ update: Update<Course> }>()
);
