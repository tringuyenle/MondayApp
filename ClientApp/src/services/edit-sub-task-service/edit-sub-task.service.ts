import { Injectable } from '@angular/core';
import { Task } from 'src/app/task';
import { SubTaskService } from '../sub-task-service/sub-task.service';

@Injectable({
  providedIn: 'root'
})
export class EditSubTaskService {

  edit_sub_task_id: string = '';
  
  colorlist: string[] = ['bg-green-400', 'bg-amber-400', 'bg-red-500', 'bg-gray-300'];
  Status = new Map<string, string>([["bg-green-400", "Done"], ['bg-amber-400', 'Working on it'], ['bg-red-500', 'Stuck'], ['bg-gray-300', 'None']]);
  color: string = this.colorlist[2];

  subTaskid: string = '';

  personid: string = '';
  personlist: string[] = ['Thành', 'Quân', 'Nguyên'];
  person: string = '';

  constructor(private sub_task_service: SubTaskService) { }

  
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

  editColor(task: Task): void {
    if (this.subTaskid === '') this.subTaskid = task.id;
    else this.subTaskid = '';
    console.log(this.subTaskid);
  }
  editColorSuccess(c: string, t: Task): void {
    this.color = c;
    t.status = c;
    this.saveCell(t);
  }

  editCell(id: string): void {
    this.edit_sub_task_id = id;
  }

  saveCell(task: Task): void {
    this.sub_task_service.updateSubTask(task).subscribe({
      error: () => {
        this.edit_sub_task_id = '';
        console.log("Chỉnh sửa thành công");
      }
    })
  }
}
