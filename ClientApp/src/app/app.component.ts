import { Component } from '@angular/core';
import { Grouptask } from './grouptask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  firstgroup!: Grouptask;
}
