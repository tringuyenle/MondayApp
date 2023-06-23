import { Injectable } from '@angular/core';
import { Grouptask } from 'src/app/grouptask';
import { GroupTaskService } from '../group-task-service/group-task.service';

@Injectable({
  providedIn: 'root'
})
export class GroupTaskListService {

  group_task_list: Grouptask[] = [];

  constructor(private group_task_service: GroupTaskService) { }

  getGroupTaskList() {
    this.group_task_service.getGroupTaskList().subscribe(data => {
      this.group_task_list = data;
    });
  }

  reloadList() {
    this.getGroupTaskList();
  }
}
