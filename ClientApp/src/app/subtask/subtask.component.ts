import { Component, Input, OnInit } from '@angular/core';
import { SubTaskListService } from 'src/services/sub-task-list-service/sub-task-list.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TaskListService } from 'src/services/task-list-service/task-list.service';
import { AddTaskService } from 'src/services/add-task-service/add-task.service';
import { Task } from '../task';
import { NgFor, NgIf } from '@angular/common';
import { EditTaskService } from 'src/services/edit-task-service/edit-task.service';


@Component({
  selector: 'app-subtask',
  templateUrl: './subtask.component.html',
  styleUrls: ['./subtask.component.css']
})
export class SubtaskComponent implements OnInit {
  selectedAll: any;
  isDrawerOpen: boolean = false;
  tempTaskName: string = '';
  tempPerson: string = '';

  @Input() parent_id: string = '';

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
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sub_task_list_service.sub_task_list, event.previousIndex, event.currentIndex);
  }

  checkIfAllSelected() {
    this.selectedAll = this.sub_task_list_service.sub_task_list.every(function (item: any) {
      return item.selected == true;
    })
  }

  // setdate(t: Task): void {
  //   t.create_date = (<HTMLInputElement>document.getElementById(t.id+"date")).value;
  //   this.save(t);
  // }

  save(task: Task) {
    this.edit_task_service.saveCell(task)
  }

  constructor(public sub_task_list_service: SubTaskListService,public edit_task_service: EditTaskService) { };
}
