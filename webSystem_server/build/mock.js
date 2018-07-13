"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mockData(max, min, length) {
    var maxs = max;
    var minx = min;
    var len = length;
    var data = [];
    for (var i = 0; i <= len; i++) {
        var mock = Math.round((Math.random() * (max - min) + min));
        data.push(mock);
    }
    //console.log(data);
    return data;
}
exports.mockData = mockData;
function addData() {
    var data = [];
    data.push();
    return data;
}
exports.addData = addData;
