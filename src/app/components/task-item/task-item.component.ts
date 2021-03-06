import { Component, OnInit, Input} from '@angular/core';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input () tasks: Task [];

  constructor() { 
    this.tasks= TASKS;
    }

  ngOnInit(): void {}
}
