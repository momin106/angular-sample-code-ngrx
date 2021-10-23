import { createAction, props } from "@ngrx/store";
import UserActionTypes from "./auth.types";
import { User } from "../../auth/model/user.model";

export const login = createAction(
  UserActionTypes.LoginPage,
  props<{ payload: { user: User } }>()
);

export const logout = createAction(UserActionTypes.TopMenu);
