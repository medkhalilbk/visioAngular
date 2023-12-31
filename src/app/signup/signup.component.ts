import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
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

  constructor(private fb: FormBuilder) {
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

  onSubmit() {
    if (this.loginForm.valid) { 
      console.log('Login button clicked!');
      console.log('Form values:', this.loginForm.value);
    } else { 
      this.loginForm.markAllAsTouched();
    }
  }
}
