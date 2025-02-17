import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MobileSidebarComponent } from "./components/mobile-sidebar/mobile-sidebar.component";
import { AuthComponent } from '../../pages/auth/auth.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink, 
    RouterLinkActive, 
    CommonModule, 
    MobileSidebarComponent, 
    AuthComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  isLoggedIn = false;
  showModal = false;
  activeComponent = 'login'; 

  ngOnInit() {
    this.checkAuthStatus();
    window.addEventListener('storage', () => this.checkAuthStatus());
  }

  private checkAuthStatus() {
    const token = localStorage.getItem('token');
    this.isLoggedIn = !!token;
  }

  openModal(component: string) {
    this.activeComponent = component;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
