import { AuthEffects } from "../redux/auth/auth.effects";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { StoreModule } from "@ngrx/store";
import { AuthService } from "./auth.service";
import { EffectsModule } from "@ngrx/effects";
import * as fromAuth from "../redux/auth/auth.reducer";
import { AuthGuard } from "./auth.guard";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([{ path: "", component: LoginComponent }]),
    StoreModule.forFeature("auth", fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [AuthService, AuthGuard],
    };
  }
}
function authReducers(
  arg0: string,
  authReducers: any
): any[] | import("@angular/core").Type<any> | ModuleWithProviders<{}> {
  throw new Error("Function not implemented.");
}
