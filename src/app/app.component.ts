import { Component } from '@angular/core';
import { User } from 'src/assets/Models/user';
import { Users } from '../assets/data.db';

@Component({
  selector: 'app-root',
  template: `
  <app-users [ngClass]="{'isActive':true,'isUser':true}" [ngStyle]="{'text-decoration':'underline'}"
  [style.background]="'red'"
  *ngFor="let user of users;index as i;first as isFirst;last as isLast;odd as isOdd;even as isEven"
  [class.isFirst]="isFirst"
  [class.isEven] = "isEven"
  (selectedUser)="onUserSelected($event)" 
  [user]="user" [userIndex]="i+1"></app-users>
  `,
  styles: []
})
export class AppComponent {

  users = Users;
  title = 'sampleApp';

  onUserSelected(user:User){
    console.log(user);
  }

}
