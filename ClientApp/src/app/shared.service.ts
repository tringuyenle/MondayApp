import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tasks } from './tasks';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private task_api_url = "http://localhost:5157/api/Task";

  constructor(private http_client: HttpClient) { }

  getTaskList(): Observable<Tasks[]> {
    return this.http_client.get<Tasks[]>(this.task_api_url)
  }

  getTask(id: string): Observable<Tasks> {
    var url = this.task_api_url + `/${id}`;

    return this.http_client.get<Tasks>(url);
  }

  createTask(new_task: Tasks): Observable<Tasks> {
    new_task.id = "";
    return this.http_client.post<Tasks>(this.task_api_url, new_task);
  }

  deleteTask(id: string): Observable<Tasks> {
    var url = this.task_api_url + `/${id}`;

    return this.http_client.delete<Tasks>(url);
  }

  updateTask(id: string, update_task: Tasks): Observable<Tasks> {
    var url = this.task_api_url + `/${id}`;

    return this.http_client.put<Tasks>(url, update_task);
  }
}




