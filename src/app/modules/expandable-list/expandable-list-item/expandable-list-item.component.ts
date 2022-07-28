import {Component, Input} from '@angular/core';
import {ListData} from '../expandable-list.component';

@Component({
  selector: 'app-expandable-list-item',
  templateUrl: './expandable-list-item.component.html',
  styleUrls: ['./expandable-list-item.component.scss']
})
export class ExpandableListItemComponent {
  @Input() item: ListData | undefined;

  get details (): undefined | {key: string, value: any}[] {
    if (! this.item) {
      return undefined;
    }
    return Object.keys(this.item.activity).map(key => ({key, value: this.item ? this.item.activity[key] : ''}))
  }
}
