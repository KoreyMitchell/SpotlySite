import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';

// Reactive Form

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {RouterModule} from '@angular/router';
// Auth service
import { AuthService } from "./shared/services/auth.service";
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent,
    TestComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    HttpClientJsonpModule,
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }