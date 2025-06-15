import { Component,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})

export class UsersComponent {
  @Input({required:true}) id!:string;
  @Input({required:true}) avatar!:string;
  @Input({required:true}) name!:string;
  @Output() select = new EventEmitter();


  get imagePath(){
    return 'assets/users/'+ this.avatar
  }
onSelectUsersComp(){
  debugger
  this.select.emit(this.id);
 }
}
