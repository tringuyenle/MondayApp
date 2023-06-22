import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskService } from 'src/services/task-service/task.service';
import { Task } from 'src/app/task';
import { FormControlName, FormGroup, FormControl, FormBuilder} from '@angular/forms';
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

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private task_service: TaskService) {}

  ngOnInit(): void {
      this.task_form = this.fb.group({
        id: '',
        name: '',
        person: '',
        child_task: [],
        create_by: '',
        create_date: '',
        status: '',
        selected: false
      });

      this.sub = this.route.paramMap.subscribe(param => {
        let temp = param.get('id');
        var new_name: string = "";
        if (temp) {
          new_name = temp;
        }
        // if(id == '0') {
        //   const task: Task = {id: "0", name: "", parent_task: "", child_task: [], create_by: "", create_date: "", status: "",};
        //   this.displayTask(task);
        // }
        // else {
        //   this.getTask(id);
        // }
        const task: Task = {id: "0", name: new_name , parent_task: "", child_task: [], create_by: "", create_date: "", status: "", selected: false};
        this.displayTask(task);
        this.saveTask();
      });
  }

  displayTask(task: Task): void {
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
            error: () => console.log("Thêm thành công")
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
    // this.router.navigate(['/task'])
  }
}


