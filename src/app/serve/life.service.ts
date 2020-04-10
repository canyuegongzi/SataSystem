import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';
import {map} from 'rxjs/internal/operators';
import baseUrl from '../../api';

@Injectable({
  providedIn: 'root'
})
export class LifeService {

  constructor(private http: Http) { }
  /*查询天气的函数*/
  public searchWeather(name: string): Observable<any> {
    console.log(name);
    if (!name) {
      return;
    } else {
     return this.http.post(baseUrl + 'api/weather', {params:  name} ).pipe(
        map(res => res.json())
      );
    }
  }
  /*查询快递的函数*/
  public searchExpress(expressname: string, number: string): Observable<any> {
    if (!number && !expressname) {
      return;
    } else {
     return this.http.get(baseUrl + 'api/express', {params: {name: expressname, number: number}}).pipe(
        map(res => res.json())
      );
    }
  }
}
