import { Injectable } from '@angular/core';
import { Grouptask } from 'src/app/grouptask';
import { GroupTaskService } from '../group-task-service/group-task.service';
import { TaskService } from '../task-service/task.service';

@Injectable({
  providedIn: 'root'
})
export class GroupTaskListService {

  group_task_list: Grouptask[] = [];
  first_group!: Grouptask;

  constructor(private group_task_service: GroupTaskService, private task_service: TaskService) { }

  getGroupTaskList() {
    this.group_task_service.getGroupTaskList().subscribe(data => {
      this.group_task_list = data;
      this.first_group = data[0];
    });
  }

  reloadList() {
    this.getGroupTaskList();
  }

  deleteGroupTask(group_task: Grouptask) {
    if(confirm(`Are you sure to delete Group Task: ${group_task.name}`)) {
      this.task_service.deleteTask(group_task.id, false).subscribe({
        error: () => console.log("Delete all task!")
      });

      this.group_task_service.deleteGroupTask(group_task.id).subscribe({
        error: () => {
          console.log("Delete group task");
          this.reloadList();
        }
      })
    }
  }
}
