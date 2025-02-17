import { Component, EventEmitter, Input, Output, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalFormComponent } from "../../../shared/components/ui/modal-form/modal-form.component";
import { ForgotPassComponent } from "./components/forgot-pass/forgot-pass.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { VerifyCodeComponent } from "./components/verify-code/verify-code.component";
import { SetpassComponent } from "./components/setpass/setpass.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    CommonModule,
    ModalFormComponent,
    ForgotPassComponent,
    LoginComponent,
    RegisterComponent,
    VerifyCodeComponent,
    SetpassComponent
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthComponent implements OnInit {
  @Input() activeComponent = 'login';
  @Input() ismodalOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  ngOnInit() {
    this.activeComponent = 'login';
  }

  handleComponentChange(componentName: string) {
    this.activeComponent = componentName;
  }

  closeModal() {
    this.ismodalOpen = false;
    this.close.emit(); // Emit close event to parent component
  }

  closeAllModals() {
    this.ismodalOpen = false;
    this.close.emit();
  }

}
