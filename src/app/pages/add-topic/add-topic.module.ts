import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { AddTopicRoutingModule } from './add-topic-routing.module';



@NgModule({
  declarations: [
    AddTopicComponent
  ],
  imports: [
    CommonModule,
    AddTopicRoutingModule
  ]
})
export class AddTopicModule { }
