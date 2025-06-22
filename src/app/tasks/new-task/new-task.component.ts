import { Component, Output, Input, EventEmitter, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTaskData } from '../task/task.model';
import { CardComponent } from "../../shared/card/card.component";
import { TasksServices } from '../tasks.services';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule, CardComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) UserId!: string;
  @Output() onCloses = new EventEmitter<boolean>();
  
  enterTitle: string = '';
  enterSummary: string = '';
  enterDueDate: string = '';
  private taskServices = inject(TasksServices)
  onClose() {
    return this.onCloses.emit(false);
  }
  onSubmit() {
    this.taskServices.addTasks({
      title: this.enterTitle,
      summary: this.enterSummary,
      date: this.enterDueDate
    }, this.UserId);
    this.onCloses.emit(false);
  }


}
