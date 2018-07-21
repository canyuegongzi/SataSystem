"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="localadmin.ts"/>
var mockData = require("./localadmin");
var class_1 = require("./class");
function setData() {
    var admin = [];
    var detail = [];
    for (var i = 0; i <= 49; i++) {
        var id = mockData.diffId();
        var identity = mockData.getId_no();
        admin[i] = new class_1.AdminUser(mockData.get_resach(), mockData.get_resach(), mockData.getMoble(), mockData.get_sta_demerits(), mockData.get_sta_demerits(), id, mockData.getName(), mockData.get_age(), mockData.get_sex(), '', identity, mockData.get_data(), mockData.randomWord(false, 4, 8), 1, 1);
        detail[i] = new class_1.DetailAdmin(id, identity, '暂时没有模拟的家庭住址的数据', [{ time: '暂无模拟数据', company: '暂无模拟数据', item: '暂无模拟数据', job: '暂无模拟数据' }], [{ time: '暂无模拟数据', reason: '暂无模拟数据', way: '暂无模拟数据' }], [], 1);
    }
    // console.log(admin.length);
    mockData.writeJson(admin, './mockData/adminuser.json', admin.length);
    mockData.writeJson(detail, './mockData/adminuerdetail.json', admin.length);
}
setData();
//setdetailadmin()
