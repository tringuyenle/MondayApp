import { Injectable, OnInit } from '@angular/core';
import { SubTaskService } from '../sub-task-service/sub-task.service';
import { Task } from 'src/app/task';

@Injectable({
  providedIn: 'root'
})
export class SubTaskListService {

  sub_task_list: Task[] = [];

  constructor(private sub_task_service: SubTaskService ) { }

  getSubTaskList(parent_id: string) {
    this.sub_task_service.getTaskList(parent_id).subscribe( data => {
      this.sub_task_list = data;
    })
  }
}
