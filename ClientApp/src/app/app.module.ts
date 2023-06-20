import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BoardcontentComponent } from './boardcontent/boardcontent.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BoardinfoComponent } from './boardinfo/boardinfo.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CollapsegroupComponent } from './group/collapsegroup/collapsegroup.component';
import { ExpandgroupComponent } from './group/expandgroup/expandgroup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddTaskComponent } from './boardcontent/add-task/add-task.component';
import { TaskRoutingModule } from './task-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BoardcontentComponent,
    BoardinfoComponent,
    SidebarComponent,
    TaskListComponent,
    CollapsegroupComponent,
    AddTaskComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ExpandgroupComponent,
    TaskRoutingModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
