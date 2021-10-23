import { User } from "../../auth/model/user.model";
import { login, logout } from "./auth.actions";
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from "@ngrx/store";
import AuthActionTypes from "./auth.types";

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state, action) => {
    return {
      ...state,
      user: action.payload.user,
    };
  }),

  on(logout, (state, action) => {
    return {
      ...state,
      user: undefined,
    };
  })
);
