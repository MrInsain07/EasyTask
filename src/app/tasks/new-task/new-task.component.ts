import { Component,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTaskData } from '../task/task.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-new-task',
  imports: [FormsModule, CardComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
@Output() AddTaskCanceled=new EventEmitter<boolean>();
@Output() Tasksubmit = new EventEmitter<newTaskData>();
enterTitle:string='';
enterSummary:string='';
enterDueDate:string='';
onAddTaskCancel(){
  return this.AddTaskCanceled.emit(false);
}
onSubmit(){
 this.Tasksubmit.emit({
  title:this.enterTitle,
  summary:this.enterSummary,
  date:this.enterDueDate
 });
}


}
