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
import { TaskService } from 'src/services/task-service/task.service';

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

  colorlist: string[] = ['bg-green-400', 'bg-amber-400', 'bg-red-500', 'bg-gray-300'];
  color: string = this.colorlist[2];
  taskid: string = '';
  Status = new Map<string, string>([["bg-green-400", "Done"], ['bg-amber-400', 'Working on it'], ['bg-red-500', 'Stuck'], ['bg-gray-300', 'None']]);
  

  editColor(task: Task): void {
    if (this.taskid === '') this.taskid = task.id;
    else this.taskid = '';
  }
  editColorSuccess(c: string, t: Task): void {
    this.color = c;
    t.status = c;
    this.save(t);
  }

  save(task: Task) {
    this.task_service.updateTask(task).subscribe({
      error: () => {
        console.log("Da update");
        this.task_list_service.reloadTaskList();
      }
    })
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

  constructor(public task_list_service: TaskListService, public add_task_service: AddTaskService, public edit_task_service: EditTaskService, private task_service: TaskService) {}

}

