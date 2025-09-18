import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();
  constructor(private router: Router) {} 

  toggle() {
    this.toggleSidebar.emit();
  }

  logout() {
    localStorage.removeItem('token'); // clear JWT
    this.router.navigate(['/login']); // redirect to login
  }

  
}
