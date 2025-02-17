// setpass.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from '../../../../../../../dist/auth-api';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from "../../../../../shared/components/ui/custom-input/custom-input.component";

@Component({
  selector: 'app-setpass',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CustomInputComponent],
  templateUrl: './setpass.component.html',
  styleUrls: ['./setpass.component.scss']
})
export class SetpassComponent {
  isLoading: boolean = false;
  errorMessage: string | null = null;

  resetpassForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    newPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ])
  });

  constructor(
    private _AuthApiService: AuthApiService,
  ) { }
  Resetpass() {
    this.errorMessage = null;
  
    if (this.resetpassForm.invalid) {
      this.resetpassForm.markAllAsTouched();
      return;
    }
  
    this.isLoading = true;
    if (this.resetpassForm.valid) {
      this._AuthApiService.resetpass(this.resetpassForm.value).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.goToLogin();
        },
        error: (err) => {
          this.isLoading = false;
          this.errorMessage = err.error?.message || 'Password reset failed. Please try again.';
          console.error('Password reset error:', err);
  
          this.resetpassForm.get('newPassword')?.reset();
        }
      });
    }
  }
  
  @Output() changeComponent = new EventEmitter<string>();

  goToLogin() {
    this.changeComponent.emit('login');
  }
}