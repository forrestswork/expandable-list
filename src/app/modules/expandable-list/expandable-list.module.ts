import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableListComponent } from './expandable-list.component';



@NgModule({
  declarations: [
    ExpandableListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExpandableListComponent
  ]
})
export class ExpandableListModule { }
