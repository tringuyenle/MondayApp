import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-drawer',
  templateUrl: './task-drawer.component.html',
  styleUrls: ['./task-drawer.component.css']
})
export class TaskDrawerComponent {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter();
  close() {
    this.closed.emit();
  }
}
