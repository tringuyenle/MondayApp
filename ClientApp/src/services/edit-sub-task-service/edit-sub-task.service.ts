import { Injectable } from '@angular/core';
import { Task } from 'src/app/task';
import { SubTaskService } from '../sub-task-service/sub-task.service';

@Injectable({
  providedIn: 'root'
})
export class EditSubTaskService {

  edit_sub_task_id: string = '';

  constructor(private sub_task_service: SubTaskService) { }

  editCell(id: string): void {
    this.edit_sub_task_id = id;
  }

  saveCell(task: Task): void {
    this.sub_task_service.updateSubTask(task).subscribe({
      error: () => {
        this.edit_sub_task_id = '';
        console.log("Chỉnh sửa thành công");
      }
    })
  }
}
