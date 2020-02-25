import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeaUI } from './models/tea.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TeaService {
  teaList: Observable<TeaUI[]> = new Observable<TeaUI[]>();

  constructor(private http: HttpClient) {}

  getTeas(): Observable<TeaUI[]> {
    return this.http
      .get(
        'https://hldy9ar46j.execute-api.ca-central-1.amazonaws.com/prod/allteas'
      )
      .pipe(map(res => res['Items']));
  }
}
