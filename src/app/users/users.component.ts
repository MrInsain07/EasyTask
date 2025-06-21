import { Component,Input,Output,EventEmitter } from '@angular/core';
import { type User } from './users.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-users',
  imports: [CardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent {
  @Input({required:true}) User!:User
  @Input({required:true}) selected!:boolean; 
  @Output() select = new EventEmitter();


  get imagePath(){
    return 'assets/users/'+ this.User.avatar;
  }
onSelectUsersComp(){
  this.select.emit(this.User.id);
 }
}
