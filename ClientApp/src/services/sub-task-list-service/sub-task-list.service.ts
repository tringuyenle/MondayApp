import { Injectable, OnInit } from '@angular/core';
import { SubTaskService } from '../sub-task-service/sub-task.service';
import { Task } from 'src/app/task';

@Injectable({
  providedIn: 'root'
})
export class SubTaskListService implements OnInit{

  sub_task_list: Task[] = [];

  ngOnInit(): void {
      this.getSubTaskList();
  }

  constructor(private sub_task_service: SubTaskService ) { }

  // getSubTaskList(parent_id: string) {
  //   this.sub_task_service.getSubTaskList(parent_id).subscribe( data => {
  //     this.sub_task_list = data;
  //   })
  // }

  getSubTaskList() {
    this.sub_task_service.getAllSubTask().subscribe(data => {
      this.sub_task_list = data;
    })
  }

  deleteSubTask(id: string, parent_id: string) {
    this.sub_task_service.deleteSubTask(id, true).subscribe({
      error: () => this.getSubTaskList()
    })
  }
}
