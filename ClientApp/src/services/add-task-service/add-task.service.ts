import { Injectable, OnInit } from '@angular/core';
import { TaskListService } from '../task-list-service/task-list.service';
import { Task } from 'src/app/task';
import { FormBuilder, FormGroup, FormsModule, FormControlName, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../task-service/task.service';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService implements OnInit{
  task_form!: FormGroup;
  task!: Task;

  constructor(private formBuilder: FormBuilder, private task_service: TaskService, private task_list_service: TaskListService) { }

  ngOnInit(): void {
      this.buildForm('');
  }

  buildForm(name: string | null) {
    this.task_form = this.formBuilder.group({
      id: '',
      name: '',
      person: '',
      child_task: [],
      create_by: '',
      create_date: '',
      status: '',
    });

    let temp = new Date;

    const task: Task = {id: "", name: "" , person: "None", child_task: [], create_by: "None", create_date: temp.toLocaleDateString("Vi") , status: "bg-gray-200"};

    if (name) {
      task.name = name;
    }
    this.displayTask(task);
  }

  displayTask(task: Task): void {
    if (this.task_form) {
      this.task_form.reset();
    }

    this.task = task;

    this.task_form.patchValue({
      id: this.task.id,
      name: this.task.name,
      person: this.task.person,
      child_task: this.task.child_task,
      create_by: this.task.create_by,
      create_date: this.task.create_date,
      status: this.task.status,
    });
  }

  saveTask() {
    const t: Task = {...this.task, ...this.task_form.value};
    this.task_service.createTask(t).subscribe({
      error: () => {
        console.log("Thêm thành công");
        this.task_list_service.reloadTaskList();
        this.onSaveComplete();
      }
    });
  }

  onSaveComplete(): void {
    this.task_form.reset();
    this.buildForm('');
  }
}
