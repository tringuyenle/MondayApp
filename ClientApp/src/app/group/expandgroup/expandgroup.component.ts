import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import {CdkListbox, CdkOption} from '@angular/cdk/listbox';
import {NgFor, JsonPipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  providers: [TaskListService, AddTaskService],
  imports: [CdkDropList, NgFor, CdkDrag, FormsModule, ReactiveFormsModule, CdkListbox, CdkOption, JsonPipe, NgIf, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
})
export class ExpandgroupComponent implements OnInit {
  @Input() collapsee: boolean = false;
  @Output() collapseeChange = new EventEmitter<boolean>();

  colorlist: string[] = ['bg-green-400', 'bg-amber-400', 'bg-red-500', 'bg-gray-300'];
  color: string = this.colorlist[2];
  taskid: string = '';
  Status = new Map<string, string>([["bg-green-400", "Done"], ['bg-amber-400', 'Working on it'], ['bg-red-500', 'Stuck'], ['bg-gray-300', 'None']]);
  
  selectedAll: any;

  //check selected Person Column
  personid: string = '';
  personlist: string[] = ['Thành', 'Quân', 'Nguyên'];
  person: string = '';

  addPerson(): void {
    this.personlist.push(this.person);
  }

  editColor(task: Task): void {
    if (this.taskid === '') this.taskid = task.id;
    else this.taskid = '';
  }
  editColorSuccess(c: string, t: Task): void {
    this.color = c;
    t.status = c;
    this.save(t);
  }

  editPerson(task: Task): void {
    if (this.personid === '') this.personid = task.id;
    else if (this.personid == 'add') this.personid = task.id;
    else this.personid = '';
  }

  clickInputAddPerson(task: Task): void {
    this.personid = 'add';
  }

  editPersonSuccess(p: string, t: Task): void {
    t.create_by = p;
    this.save(t);
  }

  setdate(t: Task): void {
    t.create_date = (<HTMLInputElement>document.getElementById(t.id+"date")).value;
    this.save(t);
  }

  save(task: Task) {
    this.edit_task_service.saveCell(task)
  }

  selectAll() {
    for (var i = 0; i < this.task_list_service.task_list.length; i++) {
      this.task_list_service.task_list[i].selected = this.selectedAll;
    }
  }

  checkIfAllSelected() {
    this.selectedAll = this.task_list_service.task_list.every(function(item:any) {
        return item.selected == true;
      })
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
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

