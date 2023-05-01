import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserService } from '../Services/user.service';

@NgModule({
  imports: [CommonModule],
  providers: [UserService],
  declarations: [],
})
export class UserDemoModule {}
