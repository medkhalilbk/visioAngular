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
  errorMsg: any;
  successMsg:any; 
  constructor(private fb: FormBuilder, private router:Router, private authService:AuthService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
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
      this.authService.login(this.loginForm.value).pipe(
        ).subscribe(
         (result:any) => {  
          console.log(result)
          this.successMsg = result.message
         },
         (err) => {
          this.errorMsg=err.error.message 
         }
       );
    /*   this.router.navigate(['/dashboard']) */
   /*    this.authService.login() */
    } else { 
      this.loginForm.markAllAsTouched();
    }
  }
}
