//Import browser module
import { BrowserModule } from '@angular/platform-browser';
//Import Ng module
import { NgModule } from '@angular/core';
//Import forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Imports router modules
import { Routes, RouterModule } from '@angular/router';
//Import our App Component
import { AppComponent } from './app.component';
//Import sign up component
import { SignUpComponent } from './auth/sign-up/sign-up.component';
//Import sign in component
import { SignInComponent } from './auth/sign-in/sign-in.component';
//Import auth service
import { AuthService } from './auth/auth.service';
//Import auth guard
import { AuthGaurd } from './auth/authguard.service';
//Import home component
import { HomeComponent } from './home/home.component';
//Define the routes
const appRoutes: Routes = [
  //If no path then it would redirected to sign-in
  {path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  //Sign-in
  {path: 'sign-in', component: SignInComponent},
  //Sign-up
  {path: 'sign-up', component: SignUpComponent},
  //Home
  {path: 'home', component: HomeComponent, canActivate:[AuthGaurd]}
]
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
