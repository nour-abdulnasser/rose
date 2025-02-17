import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from '../../../../../../../projects/auth-api/src/public-api';
import { CustomInputComponent } from '../../../../../shared/components/ui/custom-input/custom-input.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, CustomInputComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup(
    {

      firstName: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+$/),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+$/),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6), // على الأقل 8 حروف
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
        ), // حروف وأرقام
      ]),
      rePassword: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\+201[0-9]{9}$/), // رقم هاتف مصري
      ]),
      gender: new FormControl(null, [Validators.required]),
    },
    { validators: this.checkRepasswwordMatch }
  );

  constructor(
    private _AuthApiService: AuthApiService,
  ) { }

  Register() {
    if (this.registerForm.valid) {
      this._AuthApiService.Regester(this.registerForm.value).subscribe({
        next: (res) => {
          this.goToLogin(); 
        },
        error: (err) => {
          console.error('Error registering user:', err);
        }
      });
    }
  }
  

  checkRepasswwordMatch(g: AbstractControl) {
    if (g.get('password')?.value === g.get('rePassword')?.value) {
      return null;
    } else {
      g.get('rePassword')?.setErrors({ mismatch: true });
      return { mismatch: true };
    }
  }
  @Output() changeComponent = new EventEmitter<string>();

  goToLogin() {
    this.changeComponent.emit('login');
  }
}