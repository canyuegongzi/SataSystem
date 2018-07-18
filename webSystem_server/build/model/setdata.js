"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
///<reference path="localadmin.ts"/>
var mockData = require("./localadmin");
var class_1 = require("./class");
function setData() {
    var admin = [];
    for (var i = 0; i <= 100; i++) {
        admin[i] = new class_1.AdminUser(mockData.get_resach(), mockData.get_resach(), mockData.getMoble(), mockData.get_sta_demerits(), mockData.get_sta_demerits(), mockData.diffId(), mockData.getName(), mockData.get_age(), mockData.get_sex(), '', mockData.getId_no(), mockData.get_data(), mockData.randomWord(false, 4, 8));
    }
    // console.log(admin.length);
    mockData.writeJson(admin, './mockData/adminuser.json', admin.length);
}
setData();
