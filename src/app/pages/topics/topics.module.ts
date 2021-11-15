import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsComponent } from './topics/topics.component';
import { TopicsRoutingModule } from './topics-routing.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [TopicsComponent],
  imports: [CommonModule, TopicsRoutingModule, MaterialModule],
})
export class TopicsModule {}
