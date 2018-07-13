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
  getLinenumber(): Observable<Line[]> {
    return this.http.get('api/linenumber').pipe(
      map(res => res.json())
    );
  }
  /*获取当前状态的函数*/
  getStatusnumber(): Observable<Line[]> {
    return this.http.get('api/stausnumber').pipe(
      map(res => res.json())
      );
  }
  /*计算啊当前的健康程度，第一个参数为系统承受的能力，第二个参数为现在的指标*/
  accountStatusnu(able: Array<number>, now: Array<number>): Array<number> {
    const res: Array<number> = [];
    res.push(Math.floor(now[0] / able[0] * 100) / 100);
    for (let i = 1; i < able.length; i++) {
      const num: number = <number>Math.floor(now[i] / able[i] * 100) / 100;
      res.push(<number>num);
    }
   return res;
  }
}
export interface Line {
  name?: string;
  data?: Array<number>;
  xAyisIndex?: number;
  type?: string;
}
export interface Sys extends Line {
  stu?: boolean;
}
