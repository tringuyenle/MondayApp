import { Injectable } from '@angular/core';
import { TaskService } from '../task-service/task.service';
import { Task } from 'src/app/task';

@Injectable({
  providedIn: 'root'
})
export class EditTaskService {

  edit_task_id: string = '';

  colorlist: string[] = ['bg-green-400', 'bg-amber-400', 'bg-red-500', 'bg-gray-300'];
  color: string = this.colorlist[2];
  taskid: string = '';
  Status = new Map<string, string>([["bg-green-400", "Done"], ['bg-amber-400', 'Working on it'], ['bg-red-500', 'Stuck'], ['bg-gray-300', 'None']]);

  personid: string = '';
  personlist: string[] = ['Thành', 'Quân', 'Nguyên'];
  person: string = '';

  constructor(private task_service: TaskService) { }

  editColor(task: Task): void {
    if (this.taskid === '') this.taskid = task.id;
    else this.taskid = '';
  }

  editColorSuccess(c: string, t: Task): void {
    this.color = c;
    t.status = c;
    this.saveCell(t);
  }

  addPerson(): void {
    this.personlist.push(this.person);
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
    this.saveCell(t);
  }

  setdate(t: Task): void {
    t.create_date = (<HTMLInputElement>document.getElementById(t.id+"date")).value;
    this.saveCell(t);
  }
 
  editCell(task: Task): void {
    this.edit_task_id = task.id;
  }

  saveCell(task: Task): void {
    this.task_service.updateTask(task).subscribe({
      error: () => {
        this.edit_task_id = '';
        console.log("Chỉnh sửa thành công");
      }
    })
  }
}
