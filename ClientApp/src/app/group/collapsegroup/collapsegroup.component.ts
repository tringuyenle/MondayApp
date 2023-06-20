import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskListService } from 'src/services/task-list-service/task-list.service';

@Component({
  selector: 'app-collapsegroup',
  templateUrl: './collapsegroup.component.html',
  styleUrls: ['./collapsegroup.component.css']
})
export class CollapsegroupComponent implements OnInit {
  @Input() collapsec: boolean = false;
  @Output() collapsecChange = new EventEmitter<boolean>();

  constructor (public taskListService: TaskListService) {
  }

  ngOnInit(): void {
    this.taskListService.getTaskList();
  }

  changetoexpand() {
    this.collapsecChange.emit(false);
  }
}
