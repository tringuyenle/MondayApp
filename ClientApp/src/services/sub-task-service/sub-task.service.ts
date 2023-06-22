import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'src/app/task';

@Injectable({
  providedIn: 'root'
})
export class SubTaskService {

  private readonly url = "http://localhost:5157/api/SubTask";

  constructor(private http_client: HttpClient) {}

  getTaskList(parent_id: string): Observable<Task[]> {
    let temp = this.url + `/${parent_id}`;

    return this.http_client.get<Task[]>(temp);
  }

  createTask(new_task: Task): Observable<Task> {
    new_task.id = "";

    return this.http_client.post<Task>(this.url, new_task);
  }

  
}