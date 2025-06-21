import { Component,Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import {type newTaskData } from './task/task.model';


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
@Input({required:true}) UserId!:string;
@Input({required:true}) UsersName?:string;
isAddingTask = false;
tasks = [
  {
    id:'t1',
    userId:'u1',
    title:'Master Angular 20',
    summary:'Learn all the basic and Advance feature of Angular & how to apply them.',
    dueDate:'2025-12-31'
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
];
get selectedUsersTask(){
  
  return this.tasks.filter((x)=>x.userId === this.UserId);
}
onTaskComplete(id:string){
  this.tasks = this.tasks.filter((x)=>x.id !== id);
}
onStartAddTask(){
  this.isAddingTask = true;
}
OnAddTaskCanceled(status:boolean){
this.isAddingTask=status;
}
onAddNewTaskSubmit(task:newTaskData){
  this.tasks.push({
    id:new Date().getTime().toLocaleString(),
    userId:this.UserId,
    title:task.title,
    summary:task.summary,
    dueDate:task.date
  });
  this.isAddingTask=false;
  console.log(this.tasks)

}
}
