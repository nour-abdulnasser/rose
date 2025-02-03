import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mobile-sidebar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './mobile-sidebar.component.html',
  styleUrl: './mobile-sidebar.component.scss'
})
export class MobileSidebarComponent {
  
  @ViewChild('toggleButton') toggleButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('mobileSidebar') mobileSidebar!: ElementRef<HTMLDivElement>;
  @ViewChild('closeButton') closeButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('overlay') overlay!: ElementRef<HTMLDivElement>;


  ngAfterViewInit(): void {
    this.setupNavbarToggle();
  }

  private setupNavbarToggle(): void {
    const toggleButton = this.toggleButton.nativeElement;
    const sidebar = this.mobileSidebar.nativeElement;
    const closeButton = this.closeButton.nativeElement;
    const overlay = this.overlay.nativeElement;

    toggleButton.addEventListener('click', () => {
      sidebar.classList.add('open');
      sidebar.focus();
      sidebar.classList.remove('hidden');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    closeButton.addEventListener('click', () => {
      sidebar.classList.remove('open');
      sidebar.classList.add('hidden');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      sidebar.classList.add('hidden');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
}
