//Import core modules
import { Component, OnInit } from '@angular/core';
//Import forms modules
import { FormControl, FormGroup, Validators } from '@angular/forms';
//Import auth service
import { AuthService } from '../auth.service';
//Import router
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private authService: AuthService,
        private router: Router) { }
  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'pass': new FormControl(null, Validators.required),
    });
  }
  signup(){
    this.authService.signUp(this.signupForm.value.email, this.signupForm.value.pass);
  this.router.navigate(['/sign-in']);
  }
}
