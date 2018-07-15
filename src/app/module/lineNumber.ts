export class LineNumber {
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string) {

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
