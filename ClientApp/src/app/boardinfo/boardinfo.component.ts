import { Component, OnInit } from '@angular/core';
import { Tooltip } from "flowbite";
import type { TooltipOptions, TooltipInterface } from "flowbite";
import { AddTaskService } from 'src/services/add-task-service/add-task.service';
import { GroupTaskListService } from 'src/services/group-task-list-service/group-task-list.service';
import { TaskListService } from 'src/services/task-list-service/task-list.service';
import { Grouptask } from '../grouptask';
import { ModalService } from 'src/services/modal/modal.service';

@Component({
  selector: 'app-boardinfo',
  templateUrl: './boardinfo.component.html',
  styleUrls: ['./boardinfo.component.css'],
  providers: [AddTaskService, TaskListService, ModalService]
})
export class BoardinfoComponent implements OnInit{
  constructor(public add_task_service: AddTaskService, private task_list_service: TaskListService,
              public group_task_list_service: GroupTaskListService, public modalService: ModalService) {}

  ngOnInit(): void {
      this.group_task_list_service.getGroupTaskList();
  }

  add(first_group: Grouptask) {
    this.group_task_list_service.getGroupTaskList();
    this.add_task_service.buildForm("New Task", first_group.id);
    this.add_task_service.saveTask('');
    window.location.reload();
  }
};





