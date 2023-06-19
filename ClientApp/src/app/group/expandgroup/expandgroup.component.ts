import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';
import { Task } from 'src/app/task';
import { TaskService } from 'src/app/task.service';
import { FormBuilder, FormGroup, FormsModule, FormControlName, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-expandgroup',
  templateUrl: './expandgroup.component.html',
  styleUrls: ['./expandgroup.component.css'],
  standalone: true,
  imports: [CdkDropList, NgFor, CdkDrag, FormsModule, RouterModule, ReactiveFormsModule],
})
export class ExpandgroupComponent implements OnInit {
  @Input() collapsee: boolean = false;
  @Output() collapseeChange = new EventEmitter<boolean>();
  task_list: Task[] = [];
  task_form!: FormGroup;
  task!: Task;

  changetocollapse() {
    this.collapseeChange.emit(true);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.task_list, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.getTaskList();
    this.buildForm();
  }

  buildForm() {
    this.task_form = this.formBuilder.group({
      id: '',
      name: '',
      person: '',
      child_task: [],
      create_by: '',
      create_date: '',
      status: '',
    });

    const task: Task = {id: "", name: "" , person: "None", child_task: [], create_by: "None", create_date: "None", status: "None"};
    this.displayTask(task);
  }

  constructor(private task_service: TaskService, private formBuilder: FormBuilder) {}

  getTaskList(): void {
    this.task_service.getTaskList().subscribe( data =>{
      this.task_list = data;
    })
  }

  deleteTask(delete_task: Task): void {
    if(confirm(`Are you sure to delete this task ${delete_task.name}?`)) {
      this.task_service.deleteTask(delete_task.id).subscribe({
        error: () =>this.reloadList()
      })
    }
  }

  reloadList(): void {
    this.getTaskList();
  }

  saveTask() {
    const t: Task = {...this.task, ...this.task_form.value};
    this.task_service.createTask(t).subscribe({
      error: () => {
        console.log("Thêm thành công");
        this.reloadList();
        this.onSaveComplete();
      }
    });
  }

  onSaveComplete(): void {
    this.task_form.reset();
    this.buildForm();
  }

  displayTask(task: Task): void {
    if (this.task_form) {
      this.task_form.reset();
    }

    this.task = task;

    this.task_form.patchValue({
      id: this.task.id,
      name: this.task.name,
      parent_task: this.task.person,
      child_task: this.task.child_task,
      create_by: this.task.create_by,
      create_date: this.task.create_date,
      status: this.task.status,
    });
  }
}
function output() {
  throw new Error('Function not implemented.');
}
