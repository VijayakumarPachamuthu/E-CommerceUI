import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';

  @ViewChild('sidebarRef', { static: false }) sidebarRef!: ElementRef;
  @ViewChild('contentRef', { static: false }) contentRef!: ElementRef;

  sidebarVisible = true;  // ✅ use this instead of isSidebarOpen
  showLayout = true;
  isOpen = false

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/login' || event.url === '/signup') {
          this.showLayout = false;
          this.sidebarVisible = false;
        } else {
          this.showLayout = true;
        }
      });
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  closeSidebar() {           // ✅ add this method
    this.sidebarVisible = false;
  }

  goGetMobiles() {
    this.router.navigate(['get']);
  }

  goPostMobiles() {
    this.router.navigate(['post']);
  }
}
