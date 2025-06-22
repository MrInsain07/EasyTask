import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { type newTaskData } from './task/task.model';
import {  TasksServices } from './tasks.services'


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({ required: true }) UserId!: string;
  @Input({ required: true }) UsersName?: string;
  isAddingTask = false;

  constructor(private taskServices: TasksServices) {}

  get selectedUsersTask() {

    return this.taskServices.getUsersTask(this.UserId);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  OnAddTaskClose(isClose:boolean):void {
    this.isAddingTask = isClose;
  }
  onAddNewTaskSubmit(task: newTaskData) {
    this.taskServices.addTasks(task, this.UserId)
    this.isAddingTask = false;
  }
}
