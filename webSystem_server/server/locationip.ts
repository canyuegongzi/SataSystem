import {Log, DeatilLog} from '../model/class'
/*获取请求的IP地址*/
export function getClientIp(req) {
  return req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
};
/*生成新的一个Log*/
export function setLog(name: string, ip: string) {
  return new Log(name, new Date(), [{ip: ip, date: new Date(), desc: '注册成功' }], 1)
}
