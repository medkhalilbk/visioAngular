import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
const passwordMatchValidator = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (!password || !confirmPassword) {
    return null;
  }

  return password.value === confirmPassword.value ? null : { notMatch: true };
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  loginForm: FormGroup;
  errorMsg = null
  successMsg = null 
  timeCounter = 6 
  constructor(private fb: FormBuilder,private auth:AuthService, private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      fullName: ['', [Validators.required]]
    }, {
      validators: passwordMatchValidator
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get confirmPassword() {
    return this.loginForm.get('confirmPassword');
  }

  get fullName() {
    return this.loginForm.get('fullName');
  }

 redirectionAfterTenSeconds(){
  setInterval(() => {
    this.timeCounter=this.timeCounter -1
    if(this.timeCounter === 0){
      this.router.navigate(['/connexion'])
    }
  }, 1000);
 }

  onSubmit() {
    if (this.loginForm.valid) {  
      this.auth.signUp(this.loginForm.value).pipe(
       ).subscribe(
        (result) => { 
          this.successMsg = result.message
          this.redirectionAfterTenSeconds()
        },
        (err) => {
          this.errorMsg=err.error.message 
        }
      );
    } else { 
      this.loginForm.markAllAsTouched();
    }
  }
}
