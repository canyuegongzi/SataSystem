"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mockData(max, min) {
    var maxs = max;
    var minx = min;
    var data = [];
    var mock = Math.round((Math.random() * (max - min) + min));
    data.push(mock);
    return data;
}
exports.mockData = mockData;
function addData() {
    var data = [];
    data.push();
    return data;
}
exports.addData = addData;
function Makedata(length) {
    /*声明有个用于存储在线人数总的变量*/
    var line;
    /*封装数据的变量*/
    var res;
    /*声明一个用于存储各项指标的变量*/
    var able = [];
    /*声明在线人数类别的变量*/
    var classes = [];
    /*children*/
    var children = [];
    /*young*/
    var young = [];
    /*middle*/
    var middle = [];
    /*older*/
    var older = [];
    /*classline,各类分别的人数*/
    var classline = [];
    for (var i = 0; i < length + 1; i++) {
        children.push(mockData(500, 0)[0]);
    }
    for (var i = 0; i < length + 1; i++) {
        young.push(mockData(500, 0)[0]);
    }
    for (var i = 0; i < length + 1; i++) {
        middle.push(mockData(500, 0)[0]);
    }
    for (var i = 0; i < length + 1; i++) {
        older.push(mockData(500, 0)[0]);
    }
    for (var i = 0; i <= length; i++) {
        classline[i] = children[i] + young[i] + middle[i] + older[i];
    }
    //console.log(classline)
    for (var i = 0; i < length; i++) {
        classes.push(mockData(500, 0)[0]);
    }
    line = sum(classline);
    able.push(line);
    for (var i = 0; i < length - 1; i++) {
        able.push(mockData(100, 0)[0]);
    }
    res =
        [
            { 'line': line },
            {
                // 'categorynum': classes,
                'classline': classline,
                'children': children,
                'young': young,
                'middle': middle,
                'older': older
            },
            { 'guideline': able },
        ];
    return res;
}
exports.Makedata = Makedata;
function sum(arr) {
    var len = arr.length;
    if (len == 0) {
        return 0;
    }
    else if (len == 1) {
        return arr[0];
    }
    else {
        return arr[0] + sum(arr.slice(1));
    }
}
exports.sum = sum;
function trueFalse() {
    var res;
    var num;
    num = Math.round(Math.random() * 9 + 1);
    if (num >= 5) {
        res = true;
    }
    else {
        res = false;
    }
    return res;
}
exports.trueFalse = trueFalse;
function random(max) {
    return (Math.random() * max).toFixed(3);
}
exports.random = random;
;
/*模拟zoomdata组件的数组数据*/
function makeArr() {
    var data1 = [];
    var data2 = [];
    var data3 = [];
    var data4 = [];
    var data5 = [];
    var data6 = [];
    var data7 = [];
    var random = function (max) {
        return (Math.random() * max).toFixed(3);
    };
    for (var i = 0; i < 100; i++) {
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
exports.makeArr = makeArr;
var SysDetail = /** @class */ (function () {
    function SysDetail(id, time, degree, desc, cure, who, area, solveAdvice, upperAdvice) {
        this.id = id;
        this.time = time;
        this.degree = degree;
        this.desc = desc;
        this.cure = cure;
        this.who = who;
        this.area = area;
        this.solveAdvice = solveAdvice;
        this.upperAdvice = upperAdvice;
    }
    return SysDetail;
}());
exports.SysDetail = SysDetail;
/*具体的分析*/
var SysWriteData = /** @class */ (function () {
    function SysWriteData(area, press, bugtime, needOptimize, relevance, bugCan, cureCan, hows) {
        this.area = area;
        this.press = press;
        this.bugtime = bugtime;
        this.needOptimize = needOptimize;
        this.relevance = relevance;
        this.bugCan = bugCan;
        this.cureCan = cureCan;
        this.hows = hows;
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
    return SysWriteData;
}());
exports.SysWriteData = SysWriteData;
