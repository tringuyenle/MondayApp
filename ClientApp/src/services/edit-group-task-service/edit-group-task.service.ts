import { Injectable } from '@angular/core';
import { Grouptask } from 'src/app/grouptask';
import { GroupTaskService } from '../group-task-service/group-task.service';

@Injectable({
  providedIn: 'root'
})
export class EditGroupTaskService {

  edit_group_id: string = '';

  constructor(private group_task_service: GroupTaskService) { }

  editCell(group_id: string) {
    this.edit_group_id = group_id;
  }

  saveCell(group_task: Grouptask) {
    this.group_task_service.updateGroupTask(group_task).subscribe({
      error: () => {
        this.edit_group_id = '';
        console.log("Save done!");
        console.log(group_task);
      }
    });
  }

  refreshCell() {
    this.edit_group_id='';
  }
}
