import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { AddUserRoutingModule } from './add-user-routing.module';



@NgModule({
  declarations: [
    AddUserComponent
  ],
  imports: [
    CommonModule,
    AddUserRoutingModule
  ]
})
export class AddUserModule { }
