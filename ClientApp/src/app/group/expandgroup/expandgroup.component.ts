import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-expandgroup',
  templateUrl: './expandgroup.component.html',
  styleUrls: ['./expandgroup.component.css'],
})
export class ExpandgroupComponent {
  @Input() collapsee: boolean = false;
  @Output() collapseeChange = new EventEmitter<boolean>();

  changetocollapse() {
    this.collapseeChange.emit(true);
  }
}
