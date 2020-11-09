import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../assets/Models/user'

@Component({
  selector: 'app-users',
  template: `
    <div class="userDetails">
      <h3>{{userIndex}}:{{user?.name}}</h3>
      <div [ngSwitch]="user.place">
         <p *ngSwitchCase="'Nellore'">Nellore</p>
      </div>
      <button (click)="onCourseView()">GetUser</button>
    </div>
  `,
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  @Input()
  user:User;

  @Input()
  userIndex:number;

  @Output('selectedUser')
  selectedUserEmitter = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  onCourseView(){
    this.selectedUserEmitter.emit(this.user);
  }

}
