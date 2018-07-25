"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*获取请求的IP地址*/
function getClientIp(req) {
    return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
}
exports.getClientIp = getClientIp;
;
