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
