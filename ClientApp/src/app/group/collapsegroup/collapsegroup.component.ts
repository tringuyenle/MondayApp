import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { initPopovers } from 'flowbite';
import { Grouptask } from 'src/app/grouptask';
import { EditGroupTaskService } from 'src/services/edit-group-task-service/edit-group-task.service';
import { GroupTaskListService } from 'src/services/group-task-list-service/group-task-list.service';
import { TaskListService } from 'src/services/task-list-service/task-list.service';

@Component({
  selector: 'app-collapsegroup',
  templateUrl: './collapsegroup.component.html',
  styleUrls: ['./collapsegroup.component.css']
})
export class CollapsegroupComponent implements OnInit {
  @Input() collapsec: string[]= [];
  @Input() group_task!: Grouptask;

  @Output() collapsecChange = new EventEmitter<string[]>();

  constructor (public taskListService: TaskListService, public task_list_service: TaskListService, 
              public edit_group_task_service: EditGroupTaskService, public group_task_list_service: GroupTaskListService) { }

  ngOnInit(): void {
    this.taskListService.getTaskList();
  }

  changetoexpand() {
    this.collapsec.push(this.group_task.id)
    this.collapsecChange.emit(this.collapsec);
  }
}
