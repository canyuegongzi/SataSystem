export class LineNumber {
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {

  }
}
/*具体的分析*/
export class SysWriteData {
  constructor(
    public area: string,
    public press: string,
    public bugtime: string,
    public needOptimize: boolean,
    public relevance: number,
    public bugCan: number,
    public cureCan: number,
    public hows: number,
  ) {
    /*area : '',
    press: '',
    bugtime: '',
    /!*是否优化*!/
    needOptimize: '',
    /!*相关度*!/
    relevance: '',
    /!*故障jilv*!/
    bugCan: '',
    /!*解决ijlv*!/
    cureCan: '',
    /!*解决方案*!/
    hows: ''*/
  }
}
export interface Sysmessage {
  id: number;
  time?: any;
  degree?: 5;
  cure?: '是';
  desc?: 'A1！';
}
export interface DetailMessage extends Sysmessage {
  problem?: string;
  who?: string;
  area?: string;
  root?: boolean;
  upperAdvice?: string;
  solveAdvice?: string;
}
