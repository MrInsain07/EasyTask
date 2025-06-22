import { Component ,Input,Output,EventEmitter,inject} from '@angular/core';
import { DatePipe } from '@angular/common';
import {type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TasksServices } from '../tasks.services';

@Component({
  selector: 'app-task',
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
@Input({required:true}) userTask!:Task;

private OntaskComplete = inject(TasksServices)

onCompleteTask(){
  this.OntaskComplete.removeTasks(this.userTask.id)
}
}
