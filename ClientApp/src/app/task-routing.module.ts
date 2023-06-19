import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskListComponent } from './boardcontent/task-list/task-list.component';
import { AddTaskComponent } from './boardcontent/add-task/add-task.component';
import { BoardcontentComponent } from './boardcontent/boardcontent.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'task/:id/edit'},
  // {path: 'boardcontent', component: BoardcontentComponent},
  // {path: 'tasklist', component: TaskListComponent},
  {path: 'task/:id/edit', component: AddTaskComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
