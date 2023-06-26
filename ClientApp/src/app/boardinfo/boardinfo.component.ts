import { Component, OnInit } from '@angular/core';
import { Tooltip } from "flowbite";
import type { TooltipOptions, TooltipInterface } from "flowbite";
import { AddTaskService } from 'src/services/add-task-service/add-task.service';
import { TaskListService } from 'src/services/task-list-service/task-list.service';

@Component({
  selector: 'app-boardinfo',
  templateUrl: './boardinfo.component.html',
  styleUrls: ['./boardinfo.component.css'],
  providers: [AddTaskService, TaskListService]
})
export class BoardinfoComponent {
  constructor(public add_task_service: AddTaskService, private task_list_service: TaskListService) {}

  add() {
    this.add_task_service.buildForm("New Task",'');
    this.add_task_service.saveTask('');
  }
};





