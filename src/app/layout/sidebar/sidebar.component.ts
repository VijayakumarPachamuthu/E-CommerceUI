import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
    onLinkClick() {
    this.linkClicked.emit();
  }
}
