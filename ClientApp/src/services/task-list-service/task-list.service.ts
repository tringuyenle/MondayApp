import { Injectable, Component, OnInit } from '@angular/core';
import { TaskService } from '../task-service/task.service';
import { Task } from 'src/app/task';
import { SubTaskService } from '../sub-task-service/sub-task.service';
import { SubTaskListService } from '../sub-task-list-service/sub-task-list.service';

@Injectable({
  providedIn: 'root'
})
export class TaskListService implements OnInit {

  task_list: Task[] = [];

  constructor(private task_service: TaskService, private sub_task_service: SubTaskService,
              private sub_task_list_service: SubTaskListService) { } 

  ngOnInit(): void {
    this.getTaskList();
  }

  getTaskList(): void {
    this.task_service.getTaskList().subscribe(data => {
      this.task_list = data;
    })
  }

  reloadTaskList(): void {
    this.getTaskList();
    console.log("Đã reload danh sách!");
  }

  deleteTask(delete_task: Task): void {
    if(confirm(`Are you sure to delete this task ${delete_task.name}?`)) {
      this.sub_task_service.deleteSubTask(delete_task.id, false).subscribe({
        error: () => {
          this.sub_task_list_service.getSubTaskList(delete_task.id);
        }
      });
      this.task_service.deleteTask(delete_task.id).subscribe({
        error: () => {
          this.reloadTaskList();
        }
      });
    }    
  }
}
