import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slideInOut', [
      state('open', style({ width: '200px' })),
      state('closed', style({ width: '0px', overflow: 'hidden' })),
      transition('open <=> closed', [animate('300ms ease-in-out')]),
    ])
  ]
})
export class SidebarComponent {
  @Input() isOpen = true;
  @Output() linkClicked = new EventEmitter<void>();
  @Output() outsideClicked = new EventEmitter<void>();

  constructor(private eRef: ElementRef) {}

  onLinkClick() {
    this.linkClicked.emit();
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (this.isOpen && !this.eRef.nativeElement.contains(event.target)) {
      this.outsideClicked.emit(); // notify parent to close
    }
  }
}
