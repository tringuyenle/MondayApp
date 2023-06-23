import { Component, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/services/task-service/task.service';
import { Task } from 'src/app/task';
import { SubTaskListService } from 'src/services/sub-task-list-service/sub-task-list.service';
import { SubTaskService } from 'src/services/sub-task-service/sub-task.service';
import { AddTaskService } from 'src/services/add-task-service/add-task.service';
import { EditTaskService } from 'src/services/edit-task-service/edit-task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  @Output() task_list: Task[] = [];
  
  ngOnInit(): void {
    this.getTaskList();
  }

  constructor(private task_service: TaskService, public sub_task_list_service: SubTaskListService, 
              public add_task: AddTaskService, public edit_task: EditTaskService) {}

  getTaskList(): void {
    this.task_service.getTaskList().subscribe( data =>{
      this.task_list = data;
    })
  }

  deleteTask(delete_task: Task): void {
    if(confirm(`Are you sure to delete this task ${delete_task.name}?`)) {
      this.task_service.deleteTask(delete_task.id).subscribe({
        error: () =>this.reloadList()
      })
    }
  }

  reloadList(): void {
    this.getTaskList();
  }

  getSubTaskList(parent_id: string) {
    this.sub_task_list_service.getSubTaskList();
  }




}


