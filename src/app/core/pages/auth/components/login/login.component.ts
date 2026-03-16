import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from '../../../../../../../projects/auth-api/src/public-api';
import { CustomInputComponent } from '../../../../../shared/components/ui/custom-input/custom-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, CustomInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/ // حروف وأرقام
      ),
    ]),
  });

  constructor(private _AuthApiService: AuthApiService) { }
  @Output() closeModal = new EventEmitter<void>();

  Login() {
    if (this.loginForm.valid) {
      this._AuthApiService.Login(this.loginForm.value).subscribe({
        next: (res: any) => {
          if (res?.token) {
            localStorage.setItem('userToken', res.token);
            this.closeModal.emit(); 
            console.log("done")
          } else {
            console.error('Token not found in response!');
            alert('Login failed: Token not found');
          }
        },
        error: (err) => {
          console.error('Login failed:', err);
        },
      });
    }
  }

  
  @Output() changeComponent = new EventEmitter<string>();

  goToForgotPass() {
    this.changeComponent.emit('forgot-pass');
  }
  goToRegister() {
    this.changeComponent.emit('register');
  }
}
