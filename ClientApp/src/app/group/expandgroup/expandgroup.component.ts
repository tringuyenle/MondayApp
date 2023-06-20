import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import {CdkListbox, CdkOption} from '@angular/cdk/listbox';
import {NgFor, JsonPipe} from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, FormControlName, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskListService } from 'src/services/task-list-service/task-list.service';
import { AddTaskService } from 'src/services/add-task-service/add-task.service';
import { NgIf } from '@angular/common';
import { EditTaskService } from 'src/services/edit-task-service/edit-task.service';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-expandgroup',
  templateUrl: './expandgroup.component.html',
  styleUrls: ['./expandgroup.component.css'],
  standalone: true,
  imports: [CdkDropList, NgFor, CdkDrag, FormsModule, ReactiveFormsModule, CdkListbox, CdkOption, JsonPipe, NgIf, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
  // providers: [TaskListService, AddTaskService,],
})
export class ExpandgroupComponent implements OnInit {
  @Input() collapsee: boolean = false;
  @Output() collapseeChange = new EventEmitter<boolean>();

  colorlist: string[] = ['bg-green-500', 'bg-blue-500', 'bg-red-500', 'bg-yellow-500', 'bg-black'];

  color: string = this.colorlist[2];
  
  taskid: string = '';

  editColor(task: Task): void {
    this.taskid = task.id;
  }

  editColorSuccess(c: string, t: Task): void {
    this.taskid = '';
    this.color = c;
    t.status = c;
  }

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

  constructor(public task_list_service: TaskListService, public add_task_service: AddTaskService, public edit_task_service: EditTaskService) {}

}

