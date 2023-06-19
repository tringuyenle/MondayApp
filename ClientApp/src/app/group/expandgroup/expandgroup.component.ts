import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';
import { FormGroup, FormsModule, FormControlName} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskListService } from 'src/services/task-list-service/task-list.service';
import { AddTaskService } from 'src/services/add-task-service/add-task.service';

@Component({
  selector: 'app-expandgroup',
  templateUrl: './expandgroup.component.html',
  styleUrls: ['./expandgroup.component.css'],
  standalone: true,
  imports: [CdkDropList, NgFor, CdkDrag, FormsModule, ReactiveFormsModule],
  providers: [TaskListService, AddTaskService],
})
export class ExpandgroupComponent implements OnInit {
  @Input() collapsee: boolean = false;
  @Output() collapseeChange = new EventEmitter<boolean>();

  changetocollapse() {
    this.collapseeChange.emit(true);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.task_list_service.task_list, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.task_list_service.getTaskList();
    this.add_task_service.buildForm('');
  }

  constructor(public task_list_service: TaskListService, public add_task_service: AddTaskService) {}

}
function output() {
  throw new Error('Function not implemented.');
}
