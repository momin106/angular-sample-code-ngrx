import { areCoursesLoaded } from "./courses.selectors";
import { select, Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { filter, finalize, first, tap } from "rxjs/operators";
import { loadAllCourses } from "./courses.actions";
import { AppState } from "./../../redux/root.reducer";

@Injectable()
export class CoursesResolver implements Resolve<any> {
  loading = false;

  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areCoursesLoaded),
      tap((coursesLoaded: boolean) => {
        if (!this.loading && !coursesLoaded) {
          this.loading = true;
          this.store.dispatch(loadAllCourses());
        }
      }),
      filter((coursesLoaded) => coursesLoaded),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
