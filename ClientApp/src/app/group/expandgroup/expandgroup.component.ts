import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';
import { Task } from 'src/app/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-expandgroup',
  templateUrl: './expandgroup.component.html',
  styleUrls: ['./expandgroup.component.css'],
  standalone: true,
  imports: [CdkDropList, NgFor, CdkDrag],
})
export class ExpandgroupComponent implements OnInit {
  @Input() collapsee: boolean = false;
  @Output() collapseeChange = new EventEmitter<boolean>();
  task_list: Task[] = [];

  changetocollapse() {
    this.collapseeChange.emit(true);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.task_list, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
    this.getTaskList();
  }

  constructor(private task_service: TaskService) {}

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

}
function output() {
  throw new Error('Function not implemented.');
}
