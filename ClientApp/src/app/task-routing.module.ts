import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BoardcontentComponent } from './boardcontent/boardcontent.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'app'},
  {path: 'app', component: AppComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
