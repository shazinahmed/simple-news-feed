import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsfeedRoutingModule } from './newsfeed-routing.module';
import { NewslistComponent } from './newslist/newslist/newslist.component';


@NgModule({
  declarations: [NewslistComponent],
  imports: [
    CommonModule,
    NewsfeedRoutingModule
  ]
})
export class NewsfeedModule { }
