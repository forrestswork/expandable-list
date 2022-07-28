import { Component } from '@angular/core';
import {ListData, ListLoader} from './modules/expandable-list/expandable-list.component';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly dataSource: ListLoader;

  constructor(private http: HttpClient) {
    this.dataSource = () => http.get<ListData[]>(environment.testApiEndpoint);
  }
}
