import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubTaskListService } from 'src/services/sub-task-list-service/sub-task-list.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TaskListService } from 'src/services/task-list-service/task-list.service';
import { Task } from '../task';
import { NgFor, NgIf } from '@angular/common';
import { AddTaskService } from 'src/services/add-task-service/add-task.service';
import { EditSubTaskService } from 'src/services/edit-sub-task-service/edit-sub-task.service';
import { Grouptask } from '../grouptask';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.css']
})
export class SubtaskComponent implements OnInit {
  selectedAll: any;
  
  @Input() grouptask!: Grouptask;
  @Input() parent_id: string = '';
  @Output() openDrawer = new EventEmitter<{param1: string, param2: string}>();

  constructor(public sub_task_list_service: SubTaskListService, public add_task_service: AddTaskService,
              public edit_sub_task_service: EditSubTaskService) {};

  openSubTaskDrawer(tempTaskName: string, tempPerson: string){
    const message = { param1: tempTaskName, param2: tempPerson };
    this.openDrawer.emit(message);
  }
    

  selectAll() {
    for (var i = 0; i < this.sub_task_list_service.sub_task_list.length; i++) {
      this.sub_task_list_service.sub_task_list[i].selected = this.selectedAll;
    }
  }

  ngOnInit(): void {
      this.sub_task_list_service.getSubTaskList();
      // console.log(this.sub_task_list_service.sub_task_list);
      //setInterval(() => this.sub_task_list_service.getSubTaskList(), 1000);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sub_task_list_service.sub_task_list, event.previousIndex, event.currentIndex);
  }

  checkIfAllSelected() {
    this.selectedAll = this.sub_task_list_service.sub_task_list.every(function (item: any) {
      return item.selected == true;
    })
  }

  
}
