import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskListService } from 'src/services/task-list-service/task-list.service';
import { AddTaskService } from 'src/services/add-task-service/add-task.service';
import { EditTaskService } from 'src/services/edit-task-service/edit-task.service';
import { Task } from 'src/app/task';
import { TaskService } from 'src/services/task-service/task.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ViewChild, AfterViewInit } from '@angular/core';
import { SubtaskComponent } from 'src/app/subtask/subtask.component';
import { Grouptask } from 'src/app/grouptask';
import { EditGroupTaskService } from 'src/services/edit-group-task-service/edit-group-task.service';

@Component({
  selector: 'app-expandgroup',
  templateUrl: './expandgroup.component.html',
  styleUrls: ['./expandgroup.component.css'],
  providers: [TaskListService, AddTaskService],
})
export class ExpandgroupComponent implements OnInit {
  @Input() collapsee: string[] = [];
  @Input() group_task!: Grouptask;
  @Output() collapseeChange = new EventEmitter<string[]>();

  count: number = 0;
  
  constructor(public task_list_service: TaskListService, public add_task_service: AddTaskService, 
              public edit_task_service: EditTaskService, private task_service: TaskService,
              public edit_group_task_service: EditGroupTaskService) {}

  ngOnInit(): void {
    // console.log("Init Expandgroup");
    this.task_list_service.getTaskList();
    this.add_task_service.buildForm('',this.group_task.id);
  }

  @Output() isDrawerOpen: boolean = false;
  @Output() tempTaskName: string = '';
  @Output() tempPerson: string = '';

  receiveInfo($event: { param1: string, param2: string }){
    this.isDrawerOpen = true;
    this.tempTaskName = $event.param1;
    this.tempPerson = $event.param2;
    const message = { param1: this.tempTaskName, param2: this.tempPerson };
    this.openDrawer.emit(message);
  }
  
  @Output() openDrawer = new EventEmitter<{param1: string, param2: string}>();

  openTaskDrawer(tempTaskName: string, tempPerson: string){
    const message = { param1: tempTaskName, param2: tempPerson };
    this.openDrawer.emit(message);
  }

  suboftaskid: string[] = [];

  selectedAll: any;

  openSubtask(task: Task): void {
    if (!this.suboftaskid.includes(task.id)) 
      this.suboftaskid.push(task.id);
    else this.suboftaskid = this.suboftaskid.filter((id) => id !== task.id);
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

  changetocollapse() {
    this.collapsee = this.collapsee.filter((id) => id !== this.group_task.id);
    this.collapseeChange.emit(this.collapsee);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.task_list_service.task_list, event.previousIndex, event.currentIndex);
  }

}

