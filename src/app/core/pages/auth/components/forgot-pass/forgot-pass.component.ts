import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthApiService } from '../../../../../../../projects/auth-api/src/lib/auth-api.service';
import { CommonModule } from '@angular/common';
import { VerifyCodeComponent } from "../verify-code/verify-code.component";
import { Router } from '@angular/router';
import { SetpassComponent } from "../setpass/setpass.component";
import { CustomInputComponent } from "../../../../../shared/components/ui/custom-input/custom-input.component";

@Component({
  selector: 'app-forgot-pass',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CustomInputComponent],
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent {
  Forget_passForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  emailNotFound: boolean = false;


  constructor(private _AuthApiService: AuthApiService) { }
  @Output() changeComponent = new EventEmitter<string>();

  goToVerifycode() {
    this.changeComponent.emit('verify-code');
  }
  Forget_pass() {
    if (this.Forget_passForm.invalid) {
      this.Forget_passForm.markAllAsTouched();
      return;
    }
    if (this.Forget_passForm.valid) {
      this._AuthApiService.Forgetpass(this.Forget_passForm.value).subscribe({
        next: (res) => {
          this.emailNotFound = false;
          this.goToVerifycode();
        },
        error: (err) => {
          this.emailNotFound = true;
          console.error('Error sending reset code:', err);
        }
      });
    }
  }
  


}
