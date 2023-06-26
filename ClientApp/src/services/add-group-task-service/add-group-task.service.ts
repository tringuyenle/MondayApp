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
  groupcolor: number = 0;
  bg_group_task_list: string[][] = [['border-l-blue-500', 'text-blue-500', 'border-l-blue-200', 'fill-blue-500'],
                                    ['border-l-red-500', 'text-red-500', 'border-l-red-200', 'fill-red-500'],
                                    ['border-l-amber-500', 'text-amber-500', 'border-l-amber-200', 'fill-amber-500'],
                                    ['border-l-lime-500', 'text-lime-500', 'border-l-lime-200', 'fill-lime-500'],
                                    ['border-l-green-500', 'text-green-500', 'border-l-green-200', 'fill-green-500'],
                                    ['border-l-teal-500', 'text-teal-500', 'border-l-teal-200', 'fill-teal-500'],
                                    ['border-l-cyan-500', 'text-cyan-500', 'border-l-cyan-200', 'fill-cyan-500'],
                                    ['border-l-violet-500', 'text-violet-500', 'border-l-violet-200', 'fill-violet-500'],
                                    ['border-l-fuchsia-500', 'text-fuchsia-500', 'border-l-fuchsia-200', 'fill-fuchsia-500'],
                                    ['border-l-pink-500', 'text-pink-500', 'border-l-pink-200', 'fill-pink-500'],
                                    ['border-l-rose-500', 'text-rose-500', 'border-l-rose-200', 'fill-rose-500'],
                                    ['border-l-slate-500', 'text-slate-500', 'border-l-slate-200', 'fill-slate-500']];

  constructor(private formBuilder: FormBuilder, private group_task_service: GroupTaskService,
              private group_task_list_service: GroupTaskListService) { }

  buildForm(name: string, parent_id: string) {
    this.group_form = this.formBuilder.group({
      id: '',
      name: '',
      parent_id: '',
      color: [],
    });

    const group_task: Grouptask = { id: "", name: "", parent_id: "", color: this.bg_group_task_list[this.groupcolor] };

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
        this.group_task_list_service.reloadList();
        this.groupcolor++;
        this.groupcolor = this.groupcolor%12;
        this.onSaveComplete(parent_id);
      }
    });
  }

  onSaveComplete(parent_id: string): void {
    // this.task_form.reset();
    this.buildForm('',parent_id);
  }
}
