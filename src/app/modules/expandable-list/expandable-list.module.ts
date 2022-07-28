import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableListComponent } from './expandable-list.component';
import { ExpandableListItemComponent } from './expandable-list-item/expandable-list-item.component';



@NgModule({
  declarations: [
    ExpandableListComponent,
    ExpandableListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExpandableListComponent
  ]
})
export class ExpandableListModule { }
