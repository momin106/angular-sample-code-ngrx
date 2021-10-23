import { allCoursesLoaded, courseUpdated } from "./courses.actions";
import { compareCourses, Course } from "../../courses/model/course";
import { createEntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";

export interface CoursesState extends EntityState<Course> {
  allCoursesLoaded: boolean;
}

export const adapter = createEntityAdapter<Course>({
  sortComparer: compareCourses,
});

export const initialCousesState = adapter.getInitialState({
  allCoursesLoaded: false,
});

export const coursesReducer = createReducer(
  initialCousesState,
  on(allCoursesLoaded, (state, action) =>
    adapter.addMany(action.payload.courses, {
      ...state,
      allCoursesLoaded: true,
    })
  ),
  on(courseUpdated, (state, action) => adapter.updateOne(action.update, state))
);

export const { selectAll } = adapter.getSelectors();
