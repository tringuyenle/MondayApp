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

@Component({
  selector: 'app-expandgroup',
  templateUrl: './expandgroup.component.html',
  styleUrls: ['./expandgroup.component.css'],
  providers: [TaskListService, AddTaskService],
})
export class ExpandgroupComponent implements OnInit {
  @Input() collapsee: boolean = false;
  @Input() group_task!: Grouptask;
  @Output() collapseeChange = new EventEmitter<boolean>();
  
  constructor(public task_list_service: TaskListService, public add_task_service: AddTaskService, 
              public edit_task_service: EditTaskService, private task_service: TaskService) {}

  ngOnInit(): void {
    this.task_list_service.getTaskList();
    this.add_task_service.buildForm('',this.group_task.id);
    // setInterval(() => this.task_list_service.getTaskList(), 1000);
  }

  isDrawerOpen: boolean = false;
  tempTaskName: string = '';
  tempPerson: string = '';

  receiveInfo($event: { param1: string, param2: string }){
    this.isDrawerOpen = true;
    this.tempTaskName = $event.param1;
    this.tempPerson = $event.param2;
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
    this.collapseeChange.emit(true);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.task_list_service.task_list, event.previousIndex, event.currentIndex);
  }

  countTask(): number {
    var temp: Task[] = [];
    var count: number = 0;

    this.task_list_service.getTaskList();

    for(var task of this.task_list_service.task_list) {
      if(task.parent_task == this.group_task.id) count ++;
    }
    
    return count;
  }
}

