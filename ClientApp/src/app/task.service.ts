import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly task_url = "http://localhost:5157/api/Task";

  constructor(private http_client: HttpClient) { }

  getTaskList(): Observable<Task[]> {
    return this.http_client.get<Task[]>(this.task_url);
  }

  getOneTask(id: string): Observable<Task> {
    let temp_url = this.task_url + `/${id}`;

    return this.http_client.get<Task>(temp_url);
  }

  createTask(new_task: Task): Observable<Task> {
    new_task.id = "";

    return this.http_client.post<Task>(this.task_url, new_task);
  }

  deleteTask(id: string): Observable<Task> {
    let temp_url = this.task_url + `/${id}`;

    return this.http_client.delete<Task>(temp_url);
  }

  updateTask(update_task: Task): Observable<Task> {
    let temp_url = this.task_url + `/${update_task.id}`;

    return this.http_client.put<Task>(temp_url, update_task);
  }
}
