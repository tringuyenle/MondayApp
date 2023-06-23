import { Injectable, OnInit } from '@angular/core';
import { TaskListService } from '../task-list-service/task-list.service';
import { Task } from 'src/app/task';
import { FormBuilder, FormGroup, FormsModule, FormControlName, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../task-service/task.service';
import { SubTaskService } from '../sub-task-service/sub-task.service';
import { SubTaskListService } from '../sub-task-list-service/sub-task-list.service';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService implements OnInit {
  task_form!: FormGroup;
  task!: Task;

  constructor(private formBuilder: FormBuilder, private task_service: TaskService, 
              private task_list_service: TaskListService, private sub_task_service: SubTaskService,
              private sub_task_list_service: SubTaskListService) { }

  ngOnInit(): void {
    this.buildForm('','');
    console.log("ngOnInit");
  }

  buildForm(name: string, parent_id: string ) {
    console.log('name:' + name);
    console.log('parent_id' + parent_id);

    this.task_form = this.formBuilder.group({
      id: '',
      name: '',
      parent_task: '',
      child_task: [],
      create_by: '',
      create_date: '',
      status: '',
      selected: false
    });

    let temp = new Date;

    const task: Task = { id: "", name: name, parent_task: parent_id, child_task: [], create_by: "", create_date: temp.toLocaleDateString("en-CA"), status: "bg-gray-300", selected: false };

    this.displayTask(task);
  }

  displayTask(task: Task): void {

    console.log("Display task" + task.name);

    if (this.task_form) {
      this.task_form.reset();
    }

    this.task = task;

    this.task_form.patchValue({
      id: this.task.id,
      name: this.task.name,
      parent_task: this.task.parent_task,
      child_task: this.task.child_task,
      create_by: this.task.create_by,
      create_date: this.task.create_date,
      status: this.task.status,
      selected: this.task.selected
    });
  }

  saveTask() {
    const t: Task = { ...this.task, ...this.task_form.value };
    this.task_service.createTask(t).subscribe({
      error: (err) => {
        console.log("Thêm thành công");
        this.task_list_service.reloadTaskList();
        this.onSaveComplete();
      }
    });
  }

  saveSubTask(parent_id: string) {
    const t: Task = { ...this.task, ...this.task_form.value };
    this.sub_task_service.createTask(t).subscribe({
      error: (err) => {
        console.log("Thêm thành công");
        this.sub_task_list_service.getSubTaskList();
        // this.task_form.reset();
        this.onSaveCompleteSubTask(parent_id);
      }
    });
  }

  onSaveComplete(): void {
    // this.task_form.reset();
    this.buildForm('','');
  }

  onSaveCompleteSubTask(parent_id: string) {
    this.task_form.reset();
    this.buildForm('',parent_id);
    console.log("Reset Form");
  }
}
