import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskListService } from 'src/services/task-list-service/task-list.service';
import { AddTaskService } from 'src/services/add-task-service/add-task.service';
import { EditTaskService } from 'src/services/edit-task-service/edit-task.service';
import { Task } from 'src/app/task';
import { TaskService } from 'src/services/task-service/task.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ViewChild, AfterViewInit } from '@angular/core';
import { SubtaskComponent } from 'src/app/subtask/subtask.component';

@Component({
  selector: 'app-expandgroup',
  templateUrl: './expandgroup.component.html',
  styleUrls: ['./expandgroup.component.css'],
  providers: [TaskListService, AddTaskService],
})
export class ExpandgroupComponent implements OnInit {
  @Input() collapsee: boolean = false;
  @Output() collapseeChange = new EventEmitter<boolean>();
  
  isDrawerOpen: boolean = false;
  tempTaskName: string = '';
  tempPerson: string = '';

  receiveInfo($event: { param1: string, param2: string }){
    this.isDrawerOpen = true;
    this.tempTaskName = $event.param1;
    this.tempPerson = $event.param2;
  }

  suboftaskid: string[] = [];

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

  openSubtask(task: Task): void {
    if (!this.suboftaskid.includes(task.id)) 
      this.suboftaskid.push(task.id);
    else this.suboftaskid = this.suboftaskid.filter((id) => id !== task.id);
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

  // clickToOpenDrawer(){
  //   this.isDrawerOpen.emit(true);
  // }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.task_list_service.task_list, event.previousIndex, event.currentIndex);
  }
  
  ngOnInit(): void {
    this.task_list_service.getTaskList();
    this.add_task_service.buildForm('','');
    // setInterval(() => this.task_list_service.getTaskList(), 1000);
  }

  constructor(public task_list_service: TaskListService, public add_task_service: AddTaskService, 
    public edit_task_service: EditTaskService, private task_service: TaskService) {}
}

