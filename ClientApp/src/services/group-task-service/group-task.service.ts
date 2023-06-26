import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grouptask } from 'src/app/grouptask';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupTaskService {

  url = 'http://localhost:5157/api/GroupTask';

  constructor(private http_client: HttpClient) { }

  getGroupTaskList(): Observable<Grouptask[]> {
    return this.http_client.get<Grouptask[]>(this.url);
  }

  updateGroupTask(update_group_task: Grouptask): Observable<Grouptask> {
    let temp = this.url + `/${update_group_task.id}`;

    return this.http_client.put<Grouptask>(temp, update_group_task);
  }

  createGroupTask(new_group_task: Grouptask): Observable<Grouptask> {
    return this.http_client.post<Grouptask>(this.url, new_group_task);
  }

  deleteGroupTask(id: string): Observable<Grouptask> {
    let temp = this.url + `/${id}`;

    return this.http_client.delete<Grouptask>(temp);
  }

}
