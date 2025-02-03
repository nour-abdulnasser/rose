import { FormsModule } from '@angular/forms';
import { Component, OnInit,} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MobileSidebarComponent } from "./components/mobile-sidebar/mobile-sidebar.component";
import { ModalFormComponent } from "../../../shared/components/ui/modal-form/modal-form.component";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule, MobileSidebarComponent, ModalFormComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  isLoggedIn = false;

  ngOnInit() {
    this.checkAuthStatus();
    window.addEventListener('storage', () => this.checkAuthStatus()); // تحديث الحالة عند تغيير الـ localStorage
  }

  private checkAuthStatus() {
    const token = localStorage.getItem('token');
    this.isLoggedIn = !!token;
  }

  handleLoginSuccess(token: string) {
    localStorage.setItem('token', token);
    this.checkAuthStatus();
  }

}
