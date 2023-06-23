import { Component } from '@angular/core';
import { SubTaskListService } from 'src/services/sub-task-list-service/sub-task-list.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.css']
})
export class SubtaskComponent {
  selectedAll: any;
  
  selectAll() {

  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sub_task_list_service.sub_task_list, event.previousIndex, event.currentIndex);
  }
  constructor(public sub_task_list_service: SubTaskListService) {};
}
