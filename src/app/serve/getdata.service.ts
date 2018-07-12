import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {NgxEchartsModule} from 'ngx-echarts';
import {Http} from '@angular/http';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {
  constructor(private chart: NgxEchartsModule, private http: Http) { }

  /*获取在线人数*/
  // noinspection JSAnnotator
  getLinenumber(): Observable<Line[]> {
    return this.http.get('api/linenumber').pipe(
      map(res => res.json())
    );
  }
  /*获取当前状态的函数*/
  getStatusnumber(): Observable<any> {
    return this.http.get('api/stausnumber').pipe(
      map(res => {
        res.json();
      })
    );
  }
}
export interface Line {
  name?: string;
  data?: Array<number>;
  xAyisIndex?: number;
  type?: string;
}
export interface Statu extends Line {
  status: number;
}
