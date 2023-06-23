import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SubTaskListService } from 'src/services/sub-task-list-service/sub-task-list.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TaskListService } from 'src/services/task-list-service/task-list.service';
import { Task } from '../task';
import { NgFor, NgIf } from '@angular/common';
import { AddTaskService } from 'src/services/add-task-service/add-task.service';
import { EditSubTaskService } from 'src/services/edit-sub-task-service/edit-sub-task.service';

@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.css']
})
export class SubtaskComponent implements OnInit {
  selectedAll: any;
  subTaskid: string = '';

  // isDrawerOpen: boolean = false;
  // tempTaskName: string = '';
  // tempPerson: string = '';
  @Output() openDrawer = new EventEmitter<{param1: string, param2: string}>();

  openSubTaskDrawer(tempTaskName: string, tempPerson: string){
    const message = { param1: tempTaskName, param2: tempPerson };
    this.openDrawer.emit(message);
  }

  @Input() parent_id: string = '';
  colorlist: string[] = ['bg-green-400', 'bg-amber-400', 'bg-red-500', 'bg-gray-300'];
  color: string = this.colorlist[2];
  Status = new Map<string, string>([["bg-green-400", "Done"], ['bg-amber-400', 'Working on it'], ['bg-red-500', 'Stuck'], ['bg-gray-300', 'None']]);

  editColor(task: Task): void {
    if (this.subTaskid === '') this.subTaskid = task.id;
    else this.subTaskid = '';
    console.log(this.subTaskid);
  }
  editColorSuccess(c: string, t: Task): void {
    this.color = c;
    t.status = c;
    this.save(t);
  }

  save(task: Task) {
    this.edit_sub_task_service.saveCell(task)
  }

  setdate(t: Task): void {
    t.create_date = (<HTMLInputElement>document.getElementById(t.id+"date")).value;
    this.save(t);
  }

    //check selected Person Column
    personid: string = '';
    personlist: string[] = ['Thành', 'Quân', 'Nguyên'];
    person: string = '';
  
    addPerson(): void {
      this.personlist.push(this.person);
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

  selectAll() {
    // this.selectedAll = this.subtask_list_service.task_list.every(function (item: any) {
    //   return item.selected == true;
    // })
  }

  ngOnInit(): void {
      this.sub_task_list_service.getSubTaskList();
      console.log(this.sub_task_list_service.sub_task_list);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sub_task_list_service.sub_task_list, event.previousIndex, event.currentIndex);
  }

  checkIfAllSelected() {
    this.selectedAll = this.sub_task_list_service.sub_task_list.every(function (item: any) {
      return item.selected == true;
    })
  }

  constructor(public sub_task_list_service: SubTaskListService, public add_task_service: AddTaskService,
              public edit_sub_task_service: EditSubTaskService) {};
}
