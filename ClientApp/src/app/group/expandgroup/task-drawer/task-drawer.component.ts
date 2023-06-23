import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-drawer',
  templateUrl: './task-drawer.component.html',
  styleUrls: ['./task-drawer.component.css']
})
export class TaskDrawerComponent {
  @Input() name: string = '';
  @Input() person: string = '';
  @Input() isOpen = false;
  @Output() closed = new EventEmitter();
  closeDrawer() {
    this.closed.emit();
  }
}
