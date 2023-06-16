import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-collapsegroup',
  templateUrl: './collapsegroup.component.html',
  styleUrls: ['./collapsegroup.component.css']
})
export class CollapsegroupComponent {
  @Input() collapsec: boolean = false;
  @Output() collapsecChange = new EventEmitter<boolean>();

  changetoexpand() {
    this.collapsecChange.emit(false);
  }
}
