"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fun = require("./mock");
var app = express();
var linenumdatas = [
    {
        name: '总数',
        xAyisIndex: 1,
        type: 'line',
        data: [200, 120, 236, 350, 220, 250]
    },
    {
        name: '儿童',
        type: 'bar',
        data: [58, 60, 105, 250, 360, 200]
    },
    {
        name: '青年',
        type: 'bar',
        data: [88, 20, 215, 150, 260, 100]
    },
    {
        name: '中年',
        type: 'bar',
        data: [158, 160, 15, 20, 160, 150]
    },
    {
        name: '老年',
        type: 'bar',
        data: [258, 110, 150, 280, 160, 50]
    },
];
var sysstatusdata = [
    {
        name: '在线人数',
        type: 'line',
        xAyisIndex: 2,
        data: (function () {
            return fun.mockData(500, 0, 9);
        })()
    },
    {
        name: '系统负载',
        type: 'line',
        data: (function () {
            return fun.mockData(80, 30, 9);
        })()
    },
    {
        name: '相应率',
        type: 'line',
        data: (function () {
            return fun.mockData(80, 30, 9);
        })()
    },
    {
        name: '吞吐量',
        type: 'line',
        data: (function () {
            return fun.mockData(80, 30, 9);
        })()
    },
    {
        name: '资源使用',
        type: 'line',
        data: (function () {
            return fun.mockData(80, 30, 9);
        })()
    }
];
app.get('/', function (req, res) {
    res.send('ssssss');
});
app.get('/api/linenumber', function (req, res) {
    res.send(linenumdatas);
});
app.get('/api/stausnumber', function (req, res) {
    res.send(sysstatusdata);
});
var server = app.listen(8000, 'localhost', function () {
    // console.log('服务器已启动。地址是localhost:8000')
});
