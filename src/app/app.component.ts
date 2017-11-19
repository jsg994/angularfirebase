//Import core modules
import { Component, OnInit } from '@angular/core';
//Import firebase and it's all required dependencies
import * as firebase from 'firebase';
//Import auth service
import { AuthService } from './auth/auth.service';
//Import router
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Sign in Form';
  token: string;

  constructor(private authService: AuthService,
          private router: Router){
  }
  ngOnInit() {
        //Initialize firebase app that we can use in Angular 4 Firebase Authentication App
    firebase.initializeApp({
      apiKey: "//API KEY FROM FIREBASE HERE//",
                 authDomain: "//AUTH DOMAIN FROM FIREBASE WILL BE HERE//"
    });
  }
  //Logout method
  onLogout(){
    this.authService.logout();
  }
  //Check use is logged in
  checkUserLoggedIn(){
    return localStorage.getItem('isLoggedIn') ? true : false;
  }
}
