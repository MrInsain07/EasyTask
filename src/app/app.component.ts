import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import {DUMMY_USERS} from './dummy-users'
import{TasksComponent} from './tasks/tasks.component';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent,UsersComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EasyTask';
  users = DUMMY_USERS;
  selectedUserId:string='';

  get SelectedUserName(){
    return this.users.find((x)=>x.id === this.selectedUserId);
  }

  onSelectUser(id:string){
    debugger
    this.selectedUserId=id;
    console.log(id);
  }
}
