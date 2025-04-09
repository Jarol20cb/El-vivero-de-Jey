import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  }  
  
}
