import { Component, Input, OnInit } from '@angular/core';
import { SubTaskListService } from 'src/services/sub-task-list-service/sub-task-list.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Task } from '../task';
import { NgFor, NgIf } from '@angular/common';
import { AddTaskService } from 'src/services/add-task-service/add-task.service';


@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.css']
})
export class SubtaskComponent implements OnInit{
  selectedAll: any;

  @Input() parent_id: string = '';
  
  selectAll() {

  }

  ngOnInit(): void {
      this.sub_task_list_service.getSubTaskList();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sub_task_list_service.sub_task_list, event.previousIndex, event.currentIndex);
  }

  checkIfAllSelected() {
    this.selectedAll = this.sub_task_list_service.sub_task_list.every(function(item:any) {
        return item.selected == true;
      })
  }


  constructor(public sub_task_list_service: SubTaskListService, public add_task_service: AddTaskService) {};
}
