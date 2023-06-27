import { Injectable, OnInit } from '@angular/core';
import { SubTaskService } from '../sub-task-service/sub-task.service';
import { Task } from 'src/app/task';

@Injectable({
  providedIn: 'root'
})
export class SubTaskListService implements OnInit{

  sub_task_list: Task[] = [];
  counter: number = 0;

  ngOnInit(): void {
      this.getSubTaskList();
  }

  constructor(private sub_task_service: SubTaskService) { }

  getSubTaskListbyParentId(parent_id: string) {
    this.sub_task_service.getSubTaskList(parent_id).subscribe( data => {
      this.sub_task_list = data;
    })
  }

  getSubTaskList() {
    this.sub_task_service.getAllSubTask().subscribe(data => {
      this.sub_task_list = data;
    })
  }

  deleteSubTask(task: Task) {
    if(confirm(`Are you sure to delete ${task.name}?`)) {
      this.sub_task_service.deleteSubTask(task.id, true).subscribe({
        error: () => this.getSubTaskList()
      })
    }
  }

  countSubTask(parent_task_id: string): number {
    this.counter = 0;
    for (let i = 0; i < this.sub_task_list.length; i++) {
      if (this.sub_task_list[i].parent_task === parent_task_id) {
        this.counter++;
      }
    }
    return this.counter;
  }
  
}
