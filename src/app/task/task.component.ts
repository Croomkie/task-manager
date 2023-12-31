import { Component, Input } from '@angular/core';
import { Task } from '../models/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
  @Input() task: Array<Task> = new Array<Task>();
}
