import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Tasks } from '../tasks';


@Component({
  selector: 'app-kq-test',
  templateUrl: './kq-test.component.html',
  styleUrls: ['./kq-test.component.css'],
})
export class KqTestComponent implements OnInit {

  task_list: Tasks[] = [];
  errorMessages: string = "";
  temp: any;

  constructor(private service: SharedService) {};

  ngOnInit(): void {
      this.getTaskList();
  }

  getTaskList() {
    this.service.getTaskList().subscribe(data => {
      this.task_list = data;
    });
  }

  deleteTask(id: string): void {
    if(confirm("Are you sure to delete this task?")) {
      this.service.deleteTask(id).subscribe({
        error: () => this.onSaveComplete()
      })   
    }
  }

  onSaveComplete(): void {
    this.service.getTaskList().subscribe( data => {
      this.task_list = data;
    })
  }

}

  

