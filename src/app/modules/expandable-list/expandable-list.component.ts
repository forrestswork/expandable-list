import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {first, tap} from 'rxjs/operators';

export interface ListData {
  fullName: string;
  isoDate: string;
  activity: {[key: string]: string | number};
}

export type ListLoader = () => Observable<ListData[]>;

export enum ExpandableListStatus {
  pristine = 'pristine',
  loading = 'loading',
  loaded = 'loaded'
}

@Component({
  selector: 'app-expandable-list',
  templateUrl: './expandable-list.component.html',
  styleUrls: ['./expandable-list.component.scss']
})
export class ExpandableListComponent {
  @Input() dataSource: ListLoader | undefined;

  public data$: Observable<ListData[]> | undefined;
  public expanded: boolean = false;
  public status: ExpandableListStatus = ExpandableListStatus.pristine;

  toggle() {
    // toggle the expanded state
    this.expanded = ! this.expanded;

    // load the data if it has not been loaded
    if (this.status === ExpandableListStatus.pristine) {
      this.load();
    }
  }

  load() {
    // validate that there is a valid data source
    if (! this.dataSource) {
      throw new Error('No data source found');
    }

    this.status = ExpandableListStatus.loading;

    this.data$ = this.dataSource().pipe(
      // stop observing after the first result
      first(),
      // update the component status
      tap(() => this.status = ExpandableListStatus.loaded)
    );
  }
}
