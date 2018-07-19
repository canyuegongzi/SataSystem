"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*用户class*/
var http_1 = require("@angular/http");
var User = /** @class */ (function () {
    function User(id, name, age, sex, headphoto) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.headphoto = headphoto;
        this.http = http_1.Http;
    }
    User.prototype.addUser = function (par, url) {
    };
    User.prototype.editUser = function (par, url) {
    };
    return User;
}());
exports.User = User;
/*半成品*/
var AdminUser = /** @class */ (function () {
    function AdminUser(job, reach, phone, star, demerits, id, name, age, sex, headphoto, Id_no, date, code) {
        this.job = job;
        this.reach = reach;
        this.phone = phone;
        this.star = star;
        this.demerits = demerits;
        this.id = id;
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.headphoto = headphoto;
        this.Id_no = Id_no;
        this.date = date;
        this.code = code;
    }
    return AdminUser;
}());
exports.AdminUser = AdminUser;
var DetailAdmin = /** @class */ (function () {
    function DetailAdmin(id, identity, address, experience, demerits, deal, fresh) {
        this.id = id;
        this.identity = identity;
        this.address = address;
        this.experience = experience;
        this.demerits = demerits;
        this.deal = deal;
        this.fresh = fresh;
    }
    return DetailAdmin;
}());
exports.DetailAdmin = DetailAdmin;
