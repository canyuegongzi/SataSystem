import * as Mock from '../node_modules/mockjs';
import enumerate = Reflect.enumerate;
export function mockData(max: number, min: number): any {
  const maxs: number = max;
  const minx: number = min;
  let data: Array<number> = [];
  const mock: number = Math.round((Math.random()*(max-min) + min));
  data.push(mock);
  return data;
}
export function  addData(): any {
  const data = [];
  data.push();
  return data;
}
export function  Makedata(length: number): any {
  /*声明有个用于存储在线人数总的变量*/
  let line: number;
  /*封装数据的变量*/
  let res: any;
  /*声明一个用于存储各项指标的变量*/
  let able: Array<number> = []
  /*声明在线人数类别的变量*/
  let classes: Array<number> = [];
  /*children*/
  let children: Array<number> = [];
  /*young*/
  let young: Array<number> = [];
  /*middle*/
  let middle: Array<number> = [];
  /*older*/
  let older: Array<number> = [];
  /*classline,各类分别的人数*/
  let classline: Array<number> = [];
  for(let i = 0; i < length+1; i++) {
    children.push(mockData(500, 0)[0])
  }
  for(let i = 0; i < length+1; i++) {
    young.push(mockData(500, 0)[0])
  }
  for(let i = 0; i < length+1; i++) {
    middle.push(mockData(500, 0)[0])
  }
  for(let i = 0; i < length+1; i++) {
    older.push(mockData(500, 0)[0])
  }

  for(let i = 0; i <= length; i++) {
    classline[i] = children[i]+young[i]+middle[i]+older[i];
  }
  //console.log(classline)
  for(let i = 0; i < length; i++) {
    classes.push(mockData(500, 0)[0])
  }
  line = sum(classline)
  able.push(line);
  for(let i = 0; i < length-1; i++) {
    able.push(mockData(100, 0)[0]);
  }

  res =
    [
      {'line': line},
      {
        // 'categorynum': classes,
        'classline': classline,
        'children': children,
        'young': young,
        'middle': middle,
        'older': older
      },
      {'guideline': able},

    ]

  return res;
}
export function sum(arr: Array<number>){
  let len = arr.length;
  if(len ==0 ){
    return 0 ;
  }else if(len == 1) {
    return arr[0];
  }else {
    return arr[0]+sum(arr.slice(1))
  }
}
export function trueFalse(){
  let res: boolean;
  let num: number;
  num = Math.round(Math.random()*9 + 1);
  if ( num >= 5) {
    res = true
  }  else {
    res = false;
  }
  return res;
}
export function random(max: number) {
  return (Math.random() * max).toFixed(3);
};
/*模拟zoomdata组件的数组数据*/
export function makeArr() {
  const data1 = [];
  const data2 = [];
  const data3 = [];
  const data4 = [];
  const data5 = [];
  const data6 = [];
  const data7 = [];
  const random = function (max) {
    return (Math.random() * max).toFixed(3);
  };
  for (let i = 0; i < 100; i++) {
    data1.push([random(100), random(1000), random(1)]);
    data2.push([random(100), random(1000), random(1)]);
    data3.push([random(100), random(1000), random(1)]);
    data4.push([random(100), random(1000), random(1)]);
    data5.push([random(100), random(1000), random(1)]);
    data6.push([random(100), random(1000), random(1)]);
    data7.push([random(100), random(1000), random(1)]);
  }
  return [data1, data2, data3, data4, data5, data6, data7];
}
/*消息的接口*/
export interface Sysmessage {
    id: number
    time? :any;
    degree? : 5;
    cure? : '是',
    desc? : 'A1！',
}
export interface DetailMessage extends Sysmessage {
  problem? : string;
  who? :string;
  area? :string;
  root? :boolean;
  upperAdvice? :string;
  solveAdvice? :string;
  id: number;
  data: any;
}
export class SysDetail {
  constructor(
    public id: number,
    public time: number,
    public degree: number,
    public desc: string,
    public cure: boolean,
    public who: string,
    public area: string,
    public solveAdvice: string,
    public upperAdvice: string,

  ) {

  }
}
/*具体的分析*/
export class SysWriteData {
  constructor(
    public area: string,
    public press: number,
    public bugtime: number,
    public needOptimize: boolean,
    public relevance: number,
    public bugCan: number,
    public cureCan: number,
    public hows: string,
  ) {
  }
}
/*产生大量的人员数据的*/
