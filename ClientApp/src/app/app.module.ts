import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BoardcontentComponent } from './boardcontent/boardcontent.component';
import { StatuslabelComponent } from './statuslabel/statuslabel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BoardinfoComponent } from './boardinfo/boardinfo.component';
import { TaskListComponent } from './boardcontent/task-list/task-list.component';
import { CollapsegroupComponent } from './group/collapsegroup/collapsegroup.component';
import { ExpandgroupComponent } from './group/expandgroup/expandgroup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BoardcontentComponent,
    BoardinfoComponent,
    StatuslabelComponent,
    SidebarComponent,
    TaskListComponent,
    CollapsegroupComponent,
    ExpandgroupComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
