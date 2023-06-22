import { Injectable } from '@angular/core';
import { TaskService } from '../task-service/task.service';
import { Task } from 'src/app/task';

@Injectable({
  providedIn: 'root'
})
export class EditTaskService {

  edit_task_id: string = '';

  constructor(private task_service: TaskService) { }

  editCell(task: Task): void {
    this.edit_task_id = task.id;
   }
 
  saveCell(task: Task): void {
    this.task_service.updateTask(task).subscribe({
      error: () => {
        this.edit_task_id = '';
        console.log("Chỉnh sửa thành công");
      }
    })
  }
}
