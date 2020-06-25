import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../../components/home/home.component';
import { SignInComponent } from '../../components/sign-in/sign-in.component';
import { SignUpComponent } from '../../components/sign-up/sign-up.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../../components/verify-email/verify-email.component';

import { AuthGuard } from "../../shared/guard/auth.guard";
import { TestComponent } from '../../components/test/test.component';
import { StartComponent } from '../../start/start.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent},
  { path: 'register-user', component: SignUpComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent, canActivate: [AuthGuard]},
  { path: 'start', component: HomeComponent },
  {
    path        : '**',
    pathMatch   : 'full',
    component   : HomeComponent
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
  }),
  
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
