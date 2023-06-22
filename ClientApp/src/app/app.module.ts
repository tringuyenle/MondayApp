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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

import { AddTaskComponent } from './boardcontent/add-task/add-task.component';
import { TaskRoutingModule } from './task-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {MatTreeModule} from '@angular/material/tree';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TaskDrawerComponent } from './group/expandgroup/task-drawer/task-drawer.component';

registerLocaleData(en);

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
    TaskDrawerComponent
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
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatTreeModule,
    MatIconModule,
    MatTableModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
