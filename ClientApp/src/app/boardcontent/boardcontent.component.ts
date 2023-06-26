import { Component, OnInit } from '@angular/core';
import { GroupTaskListService } from 'src/services/group-task-list-service/group-task-list.service';
import { TaskListService } from 'src/services/task-list-service/task-list.service';

@Component({
  selector: 'app-boardcontent',
  templateUrl: './boardcontent.component.html',
  styleUrls: ['./boardcontent.component.css'],
  providers: [GroupTaskListService]
})
export class BoardcontentComponent implements OnInit {
  collapse: string[] = [];

  constructor(public group_task_list_service: GroupTaskListService, public task_list_service: TaskListService) {};

  ngOnInit(): void {
      this.group_task_list_service.getGroupTaskList();
      this.task_list_service.getTaskList();
  }

  isDrawerOpen: boolean = false;
  tempTaskName: string = '';
  tempPerson: string = '';

  receiveInfo($event: { param1: string, param2: string }){
    this.isDrawerOpen = true;
    this.tempTaskName = $event.param1;
    this.tempPerson = $event.param2;
  }
}
