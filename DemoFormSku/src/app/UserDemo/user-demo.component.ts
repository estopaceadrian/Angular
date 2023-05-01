import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-user-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css'],
})
export class UserDemoComponent {
  userName: string;
  // emoved `userService` ecause f onstructor horthand elow

  // Angular will inject the singleton instance of `UserService` here.
  // We set it as a property with `private`.
  constructor(private userService: UserService) {
    // empty because we won't have to do anything else!
  }

  // elow is the same...
  signIn(): void {
    // when we sign in, set the user
    // this mimics filling out a login form
    this.userService.setUser({
      name: 'Nate Murray',
    });

    // now **read** the user same from the service
    this.userName = this.userService.getUser().name;
    console.log('User name is: ', this.userName);
  }
}
