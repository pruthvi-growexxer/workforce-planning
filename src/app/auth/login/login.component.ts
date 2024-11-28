import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private router: Router) {}
  getRequiredError(key: any): any {
    return this.loginForm.controls[key].hasError('required');
  }

  getValidationErrors(key: any): any {
    return (
      (this.loginForm.controls[key].touched ||
        this.loginForm.controls[key].dirty) &&
      this.loginForm.controls[key].errors
    );
  }

  getFormControlValue(key: any): any {
    return this.loginForm.get(key)?.value;
  }

  login(): void {
    let userData: any = {
      email: this.getFormControlValue('email'),
      password: this.getFormControlValue('password'),
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    this.router.navigate(['/project/list']);
  }
}
