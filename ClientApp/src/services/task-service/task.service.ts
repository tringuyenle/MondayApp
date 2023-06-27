import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../app/task';
import { Observable } from 'rxjs';
import { SubTaskService } from '../sub-task-service/sub-task.service';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly task_url = "http://localhost:5157/api/Task";

  constructor(private http_client: HttpClient, private sub_task_service: SubTaskService) { }

  getTaskList(): Observable<Task[]> {
    return this.http_client.get<Task[]>(this.task_url);
  }

  getOneTask(id: string | null): Observable<Task> {
    let temp_url = this.task_url + `/${id}`;

    return this.http_client.get<Task>(temp_url);
  }

  createTask(new_task: Task): Observable<Task> {
    new_task.id = '';
    return this.http_client.post<Task>(this.task_url, new_task);
  }

  deleteTask(id: string, flag: boolean): Observable<Task> {
    let temp_url = this.task_url + `/${id}` + `?flag=${flag}`;

    return this.http_client.delete<Task>(temp_url);
  }

  updateTask(update_task: Task): Observable<Task> {
    let temp_url = this.task_url + `/${update_task.id}`;

    return this.http_client.put<Task>(temp_url, update_task);
  }
}
