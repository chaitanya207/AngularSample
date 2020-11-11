import { AfterViewInit, Component, ContentChild, ElementRef, ViewChild } from '@angular/core';
import { User } from 'src/assets/Models/user';
import { Users } from '../assets/data.db';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  template: `
  <div #UserListParent>
  <app-users #UserList [ngClass]="{'isActive':true,'isUser':true}" [ngStyle]="{'text-decoration':'underline'}"
  [style.background]="'red'"
  *ngFor="let user of users;index as i;first as isFirst;last as isLast;odd as isOdd;even as isEven"
  [class.isFirst]="isFirst"
  [class.isEven] = "isEven"
  (selectedUser)="onUserSelected($event)" 
  [user]="user" [userIndex]="i+1">
  <h1>Hello Chaitanya</h1>
  </app-users>
</div>
  {{startDate | date:'MMM/dd/yyyy'}}
  `,
  styles: []
})
export class AppComponent implements AfterViewInit {

  users = Users;
  title = 'sampleApp';

  // @ViewChild('UserList')
  // user1:UsersComponent
  @ViewChild('UserList',{read:ElementRef})
  user1:ElementRef

  @ViewChild('UserListParent')
  userDetails:ElementRef

  @ContentChild('contentProj')
  contentProj:ElementRef

  startDate = new Date();

  onUserSelected(user:User){
    console.log(user);
    console.log(this.user1);
    console.log(this.userDetails);
    console.log(this.contentProj);

  }

  ngAfterViewInit(){

  }

}
