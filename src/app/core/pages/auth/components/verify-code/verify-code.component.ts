import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from '../../../../../../../dist/auth-api';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from "../../../../../shared/components/ui/custom-input/custom-input.component";

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CustomInputComponent],
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss']
})

export class VerifyCodeComponent {
  verify_codeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required]),
  });


  constructor(
    private _AuthApiService: AuthApiService,
  ) { }
  @Output() changeComponent = new EventEmitter<string>();

  goToSetpass() {
    this.changeComponent.emit('setpass');
  }
  verify_code() {
    if (this.verify_codeForm.invalid) {
      this.verify_codeForm.markAllAsTouched();
      return;
    }

    if (this.verify_codeForm.valid) {
      this._AuthApiService.VerifyCode(this.verify_codeForm.value).subscribe({
        next: (res) => {
          this.goToSetpass();
        },
        error: (err) => {
          console.error('Error verifying code:', err);

          if (err.error?.message) {
            console.log('Server message:', err.error.message);
          }
        }
      });
    }
  }
}