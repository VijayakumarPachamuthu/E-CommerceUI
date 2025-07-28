import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  @ViewChild('sidebarRef', { static: false }) sidebarRef!: ElementRef;
  @ViewChild('contentRef', { static: false }) contentRef!: ElementRef;

  constructor(private router: Router) { this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.sidebarVisible = false;
      }); }

  goGetMobiles() {
    this.router.navigate(['get']);
  }
  goPostMobiles() {
    this.router.navigate(['post']);
  }

  sidebarVisible = true;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  //  @HostListener  ('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent): void {
  //   const clickedInsideSidebar = this.sidebarRef?.nativeElement.contains(event.target);
  //   const clickedInsideContent = this.contentRef?.nativeElement.contains(event.target);

  //   if (!clickedInsideSidebar && !clickedInsideContent && this.sidebarVisible) {
  //     this.sidebarVisible = false;
  //   }
  // }
}
