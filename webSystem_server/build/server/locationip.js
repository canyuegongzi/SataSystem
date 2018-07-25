"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_1 = require("../model/class");
/*获取请求的IP地址*/
function getClientIp(req) {
    return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
}
exports.getClientIp = getClientIp;
;
/*生成新的一个Log*/
function setLog(name, ip) {
    return new class_1.Log(name, new Date(), [{ ip: ip, date: new Date(), desc: '注册成功' }], 1);
}
exports.setLog = setLog;
