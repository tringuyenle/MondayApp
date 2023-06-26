import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GroupTaskService } from '../group-task-service/group-task.service';
import { GroupTaskListService } from '../group-task-list-service/group-task-list.service';
import { Grouptask } from 'src/app/grouptask';

@Injectable({
  providedIn: 'root'
})
export class AddGroupTaskService {
  group_form!: FormGroup;
  group_task!: Grouptask;

  constructor(private formBuilder: FormBuilder, private group_task_service: GroupTaskService,
              private group_task_list_service: GroupTaskListService) { }

  buildForm(name: string, parent_id: string) {


    this.group_form = this.formBuilder.group({
      id: '',
      name: '',
      parent_id: '',
      color: [],
    });

    const group_task: Grouptask = { id: "", name: "", parent_id: "", color: [] };

    this.display(group_task);
  }

  display(group_task: Grouptask): void {

    // console.log("Display task" + task.name);

    if (this.group_form) {
      this.group_form.reset();
    }

    this.group_task = group_task;

    this.group_form.patchValue({
      id: this.group_task.id,
      name: this.group_task.name,
      parent_id: this.group_task.parent_id,
      color: this.group_task.color,
    });
  }
  
  saveGroup(parent_id: string) {
    const temp: Grouptask = { ...this.group_task, ...this.group_form.value };
    this.group_task_service.createGroupTask(temp).subscribe({
      error: (err) => {
        console.log(temp);
        this.group_task_list_service.reloadList();
        this.onSaveComplete(parent_id);
      }
    });
  }

  onSaveComplete(parent_id: string): void {
    // this.task_form.reset();
    this.buildForm('',parent_id);
  }
}
