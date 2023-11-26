import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router:Router, private authService:AuthService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
  onSubmit() {
    console.log(this.loginForm.value)
    if (this.loginForm.valid) {
      // Implement your login logic here
      console.log('Login button clicked!');
      console.log('Form values:', this.loginForm.value);
      this.router.navigate(['/dashboard'])
      this.authService.login()
    } else {
      // Mark the form controls as touched to trigger validation messages
      this.loginForm.markAllAsTouched();
    }
  }
}
