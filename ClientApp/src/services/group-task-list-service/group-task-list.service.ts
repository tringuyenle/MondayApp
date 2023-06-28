import { Injectable } from '@angular/core';
import { Grouptask } from 'src/app/grouptask';
import { GroupTaskService } from '../group-task-service/group-task.service';
import { TaskService } from '../task-service/task.service';
import { Task } from 'src/app/task';
import { SubTaskService } from '../sub-task-service/sub-task.service';
import { tap, finalize} from 'rxjs/operators'
import { TaskListService } from '../task-list-service/task-list.service';

@Injectable({
  providedIn: 'root'
})
export class GroupTaskListService {

  group_task_list: Grouptask[] = [];
  delete_task_list: Task[] = [];
  is_load_delete_list: boolean= false;
  first_group!: Grouptask;

  constructor(private group_task_service: GroupTaskService, private task_service: TaskService,
              private sub_task_service: SubTaskService, private task_list_service: TaskListService) { }

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
      // this.task_service.deleteTask(group_task.id, false).subscribe({
      //   error: () => console.log("Delete all task!")
      // });
      this.task_service.getTaskList().subscribe( data => {
        this.delete_task_list = data;
        console.log(this.delete_task_list);

        for(var delete_task of this.delete_task_list) {
          if(delete_task.parent_task === group_task.id) {
            this.task_list_service.deleteTask(delete_task, false);
          }
        }
      })
      
      this.group_task_service.deleteGroupTask(group_task.id).subscribe({
        error: () => {
          // console.log("Delete group task");
          this.reloadList();
        }
      })
    }
  }
}
