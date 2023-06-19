import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Task } from 'src/app/task';
import { FormControlName, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit, OnDestroy {

  task_form!: FormGroup;
  task!: Task;
  private sub!: Subscription;
  mess: string = "";

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private task_service: TaskService) {}

  ngOnInit(): void {
      this.task_form = this.fb.group({
        id: '',
        name: '',
        parent_task: '',
        child_task: [],
        create_by: '',
        create_date: '',
        status: '',
      });

      this.sub = this.route.paramMap.subscribe(param => {
        const id = param.get('id');
        if(id == '0') {
          const task: Task = {id: "", name: "", parent_task: "", child_task: [], create_by: "", create_date: "", status: "",};
          this.displayTask(task);
        }
        else {
          this.getTask(id);
        }
      });
  }

  displayTask(task: Task): void {
    if (this.task_form) {
      this.task_form.reset();
    }

    this.task = task;
    // if(this.task.id === '0') {
    //   this.title = "Add Task!!!";
    // }
    // else {
    //   this.title = `Edit task ${task.name}`;
    // }

    this.task_form.patchValue({
      id: this.task.id,
      name: this.task.name,
      parent_task: this.task.parent_task,
      child_task: this.task.child_task,
      create_by: this.task.create_by,
      create_date: this.task.create_date,
      status: this.task.status,
    });
  }

  getTask(id: string | null): void {
    this.task_service.getOneTask(id).subscribe({
      next: (task: Task) => this.displayTask(task)
    });
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  } 

  saveTask(): void {
    if(this.task_form.valid) {
      if(this.task_form.dirty) {
        const t: Task = {...this.task, ...this.task_form.value};
        if(t.id === '0') {
          this.task_service.createTask(t).subscribe({
            error: () => this.mess="Thêm mới thành công"
          });
        }
        else {
          this.task_service.updateTask(t).subscribe({
            error: () => this.mess="Chỉnh sửa thành công"
          });
        }
      }
      else {
        this.onSaveComplete();
      }
    }
    else {
      console.log("Task form bị lỗi: dòng 94");
    }
  }

  onSaveComplete(): void {
    this.task_form.reset();
    this.router.navigate(['/task'])
  }
}


