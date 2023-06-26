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
  
  message: string = "";
  list_message: string[] = [];

  getMessage(event: any){
    this.message = event.target.value;
    this.list_message.push(this.message);
    console.log(this.list_message);
  }
}
