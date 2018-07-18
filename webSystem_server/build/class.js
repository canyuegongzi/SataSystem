"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var AdminUser = /** @class */ (function (_super) {
    __extends(AdminUser, _super);
    function AdminUser(job, reach, phone, demerits, id, name, age, sex, headphoto) {
        var _this = _super.call(this, id, name, age, sex, headphoto) || this;
        _this.job = job;
        _this.reach = reach;
        _this.phone = phone;
        _this.demerits = demerits;
        _this.id = id;
        _this.name = name;
        _this.age = age;
        _this.sex = sex;
        _this.headphoto = headphoto;
        return _this;
    }
    return AdminUser;
}(User));
exports.AdminUser = AdminUser;
