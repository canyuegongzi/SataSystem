import * as Mock from '../node_modules/mockjs';
export function mockData(max: number, min: number, length: number): any {
  const maxs: number = max;
  const minx: number = min;
  const len: number = length;
  let data: Array<number> = [];
  for(let i = 0;i <= len; i++){
      const mock: number = Math.round((Math.random()*(max-min) + min));
    data.push(mock);
  }
  //console.log(data);
  return data;
}
export function  addData(): any {
  const data = [];
  data.push();
  return data;
}
