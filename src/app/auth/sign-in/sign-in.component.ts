//Import core modules
import { Component, OnInit } from '@angular/core';
//Import form modules for Angular 4 Firebase Authentication
import { FormControl, FormGroup, Validators } from '@angular/forms';
//Import auth service for Angular 4 Firebase Authentication
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup;
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.signinForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'pass': new FormControl(null, Validators.required),
    });
  }
  signin(){
    this.authService.signIn(this.signinForm.value.email, this.signinForm.value.pass);
  }
}
