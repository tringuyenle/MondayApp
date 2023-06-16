import { Component, OnInit, Output } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Task } from 'src/app/task';

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

  constructor(private task_service: TaskService) {}

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

}
function output() {
  throw new Error('Function not implemented.');
}

