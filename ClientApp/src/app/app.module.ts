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
import { CollapsegroupComponent } from './group/collapsegroup/collapsegroup.component';
import { ExpandgroupComponent } from './group/expandgroup/expandgroup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

import { TaskRoutingModule } from './task-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { MatTreeModule } from '@angular/material/tree';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { TaskDrawerComponent } from './group/expandgroup/task-drawer/task-drawer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';

import { CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import { NgFor, NgIf, JsonPipe } from '@angular/common';
import { SubtaskComponent } from './subtask/subtask.component';
import { ModalComponent } from './modal/modal.component';
import { Modal } from 'flowbite';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BoardcontentComponent,
    BoardinfoComponent,
    SidebarComponent,
    CollapsegroupComponent,
    TaskDrawerComponent,
    ExpandgroupComponent,
    SubtaskComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    CdkDropList, NgFor, CdkDrag, FormsModule, ReactiveFormsModule, CdkListbox, CdkOption, JsonPipe, NgIf, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
