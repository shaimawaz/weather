import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm, FormControl } from '@angular/forms';
import { PasswordStrengthValidator } from "./../../password-strength.validators";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm : FormGroup;

  constructor(private fb: FormBuilder, private router : Router) { 
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(180),
        Validators.email,
        Validators.pattern("[A-Za-z0-9._%+-]+@pseu.edu")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
        PasswordStrengthValidator
      ])
    });
  }
  login(){
    this.router.navigateByUrl('/home');
  }
  ngOnInit() {
  }

}
