import { Component, OnInit } from '@angular/core';
import { GroupTaskListService } from 'src/services/group-task-list-service/group-task-list.service';

@Component({
  selector: 'app-boardcontent',
  templateUrl: './boardcontent.component.html',
  styleUrls: ['./boardcontent.component.css'],
  providers: [GroupTaskListService]
})
export class BoardcontentComponent implements OnInit {
  collapse: boolean = false;

  constructor(public group_task_list_service: GroupTaskListService) {};

  ngOnInit(): void {
      this.group_task_list_service.getGroupTaskList();
  }

}
