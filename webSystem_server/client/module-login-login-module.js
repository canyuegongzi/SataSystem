(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-login-login-module"],{

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\r\n  <form [formGroup] = 'formModel' (ngSubmit) = 'submit()' novalidate class=\"login\">\r\n    <div class=\"form-group form-write1 form-write\" [class.has-error]=\"formModel.hasError('phone','phone')\">\r\n      <label for=\"phone\">手机号</label>\r\n      <input formControlName=\"phone\" type=\"text\" id=\"phone\" placeholder=\"请输入手机号\" class=\"form-control\"/>\r\n      <span class=\"form-text\" [class.hidden]=\"!formModel.hasError('phone','phone')\">\r\n      请输入合法的手机号\r\n    </span>\r\n    </div>\r\n    <div class=\"form-group form-write\" [class.has-error]=\"formModel.hasError('password','password')\">\r\n      <label for=\"pass\">密 码</label>\r\n      <input formControlName=\"password\" type=\"password\" id=\"pass\" placeholder=\"请输入密码\" class=\"form-control\"/>\r\n      <span class=\"form-text\" [class.hidden]=\"!formModel.hasError('password','password')\">\r\n      请输入合法的密码\r\n    </span>\r\n    </div>\r\n    <div class=\"form-group form-write\">\r\n      <input type=\"checkbox\" formControlName=\"protocol\" id=\"select\" class=\"form-control\"/>\r\n      <a href=\"www.baidu.com\" class=\"admin-select\">请阅读遵守《互联网安全协议》</a>\r\n    </div>\r\n    <div class=\"form-group form-write2\">\r\n      <button type=\"submit\" class=\"btn btn-primary btn-block\" id=\"loginButton\">登录</button>\r\n    </div>\r\n    <div class=\"form-group caption\">\r\n        <span>非用户登录，请先<a routerLink=\"/register\">注册</a></span>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _serve_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../serve/login.service */ "./src/app/serve/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        var fb = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]();
        this.formModel = fb.group({
            phone: ['', this.phoneValidator],
            password: [null, this.passwordValidator],
            protocol: ['', this.protocolValidator]
        });
    }
    LoginComponent.prototype.phoneValidator = function (control) {
        var phone = control.value;
        if (!phone) {
            return null;
        }
        if (phone.length >= 3) {
            return null;
        }
        else {
            return { phone: true };
        }
    };
    LoginComponent.prototype.passwordValidator = function (control) {
        var password = control.value;
        if (!password) {
            return null;
        }
        if (password.length > 3) {
            return null;
        }
        else {
            return { password: true };
        }
    };
    LoginComponent.prototype.protocolValidator = function (control) {
        var protocol = control.value;
        /*//console.log(protocol);*/
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        if (this.formModel.value) {
            console.log(this.formModel.value);
            this.loginParams = this.formModel.value;
        }
        this.loginService.doLogin(this.formModel.value).subscribe({
            next: function (res) {
                // console.log(res.data[0].name);
                if (res.status) {
                    _this.router.navigate(['data']);
                    /*/!*将当前的登录信息存储*!/*/
                    res.data[0].ip = res.ip;
                    var user = JSON.stringify(res.data[0]);
                    // const ip  = JSON.stringify(res.ip);
                    console.log(user);
                    localStorage.setItem('user', user);
                    console.log('登录成功！');
                    // console.log(localStorage.getItem(res.data[0].name));
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('你还未登录，请先注册');
                    _this.router.navigate(['register']);
                }
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_serve_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/module/login/login.module.ts":
/*!**********************************************!*\
  !*** ./src/app/module/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.routes */ "./src/app/module/login/login.routes.ts");
/* harmony import */ var _serve_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../serve/login.service */ "./src/app/serve/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_login_routes__WEBPACK_IMPORTED_MODULE_3__["LoginRoutes"])
            ],
            declarations: [],
            providers: [_serve_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"]],
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/module/login/login.routes.ts":
/*!**********************************************!*\
  !*** ./src/app/module/login/login.routes.ts ***!
  \**********************************************/
/*! exports provided: LoginRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutes", function() { return LoginRoutes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../register/register.component */ "./src/app/register/register.component.ts");


var LoginRoutes = [
    {
        path: '',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"]
    },
];


/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vaildata-login{\r\n  position: absolute;\r\n  width: 5.5rem;\r\n  height: 2.4rem;\r\n  background-color: #cdcdcd;\r\n  right: 1rem;\r\n  display: block;\r\n  top: 32px;\r\n  line-height: 2.4rem;\r\n  color: #ffff;\r\n  cursor: pointer;\r\n}\r\n.form-write {\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\">\n  <form [formGroup] = 'formModel' (ngSubmit) = 'submit()' novalidate class=\"login\" style=\"height: 22rem\">\n    <div class=\"form-group form-write1 form-write\" [class.has-error]=\"formModel.hasError('phone','phone')\">\n      <label for=\"phone\">手机号</label>\n      <input formControlName=\"phone\" type=\"text\" id=\"phone\" placeholder=\"请输入手机号\" class=\"form-control\"/>\n      <span class=\"vaildata-login\" (click)=\"sendMessage()\">{{noticeessage}}</span>\n      <span class=\"form-text\" [class.hidden]=\"!formModel.hasError('phone','phone')\">\n      请输入合法的手机号\n    </span>\n    </div>\n    <div class=\"form-group form-write\" [class.has-error]=\"formModel.hasError('password','password')\">\n      <label for=\"pass\">密 码</label>\n      <input formControlName=\"password\" type=\"password\" id=\"pass\" placeholder=\"请输入密码\" class=\"form-control\"/>\n      <span class=\"form-text\" [class.hidden]=\"!formModel.hasError('password','password')\">\n      请输入合法的密码\n    </span>\n    </div>\n    <div class=\"form-group form-write\">\n      <label for=\"repass\">验证码</label>\n      <input formControlName=\"message\" type=\"text\" id=\"repass\" placeholder=\"请输入验证码\" class=\"form-control\"/>\n      <!--<span class=\"form-text\" [class.hidden]=\"!formModel.hasError('repass','repass')\">\n      验证码不正确\n    </span>-->\n    </div>\n    <div class=\"form-group form-write\">\n      <input type=\"checkbox\" formControlName=\"protocol\" id=\"select\" class=\"form-control\"/>\n      <a href=\"www.baidu.com\" class=\"admin-select\">请阅读遵守《互联网安全协议》</a>\n    </div>\n    <div class=\"form-group form-write2\">\n      <button type=\"submit\" class=\"btn btn-primary btn-block\" id=\"loginButton\" style=\"margin-top: -1.5rem\">注册</button>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _serve_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../serve/login.service */ "./src/app/serve/login.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(loginService, http, router) {
        this.loginService = loginService;
        this.http = http;
        this.router = router;
        /*显示内容*/
        this.noticeessage = '获取验证码';
        /*是否再次点击*/
        this.otherClick = true;
        /*数字的显示*/
        this.messageNum = 60;
        /*定时器*/
        this.timer = null;
        var fb = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]();
        this.formModel = fb.group({
            phone: ['', this.phoneValidator],
            password: [null, this.passwordValidator],
            protocol: ['', this.protocolValidator],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    /*用户名的校验器*/
    RegisterComponent.prototype.phoneValidator = function (control) {
        var phone = control.value;
        if (!phone) {
            return null;
        }
        if (phone.length >= 11) {
            return null;
        }
        else {
            return { phone: true };
        }
    };
    /*密码的校验器*/
    RegisterComponent.prototype.passwordValidator = function (control) {
        var password = control.value;
        if (!password) {
            return null;
        }
        if (password.length > 3) {
            return null;
        }
        else {
            return { password: true };
        }
    };
    /*用户是否同意协议的校验器*/
    RegisterComponent.prototype.protocolValidator = function (control) {
        var protocol = control.value;
        /*//console.log(protocol);*/
    };
    /*短信码的校验器*/
    RegisterComponent.prototype.repassValidator = function (control) {
        var repass = control.value;
        if (!repass) {
            return null;
        }
        console.log(repass.length);
        if (repass.length = 5) {
            // noinspection JSAnnotator
            repass = control.value;
            this.loginService.regNumber(repass).subscribe(function (status) {
                console.log(status);
                if (status) {
                    return null;
                }
            });
        }
        else {
            return { repass: true };
        }
    };
    RegisterComponent.prototype.submit = function () {
        var _this = this;
        if (this.formModel.value) {
            this.registerParams = this.formModel.value;
        }
        this.loginService.register(this.registerParams).subscribe({
            next: function (res) {
                console.log(res);
                if (res.status === true) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('注册成功', '请登录', 'success').then(function (value) {
                        _this.router.navigate(['/']);
                    });
                }
                else if (res.status === 'message') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('验证码错误', '请重新注册', 'error');
                }
                else if (res.status === 'same') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('你已经注册过', '请直接登录', 'error').then(function (value) {
                        _this.router.navigate(['/']);
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('未知错误', '请联系管理员', 'error');
                }
            },
            error: function (err) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()('注册失败', '请联系管理员', 'error');
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    /*获取验证码*/
    RegisterComponent.prototype.sendMessage = function () {
        var _this = this;
        if (this.otherClick) {
            this.otherClick = false;
            this.loginService.regNumber((this.formModel.value).phone).subscribe({
                next: function (res) {
                    console.log(res);
                },
                error: function (err) {
                    console.log(err);
                }
            });
            this.timer = setInterval(function () {
                _this.messageNum--;
                _this.noticeessage = _this.messageNum + 's后重发';
                if (_this.messageNum <= 1) {
                    _this.otherClick = true;
                    clearInterval(_this.timer);
                    _this.noticeessage = '获取验证码';
                }
            }, 1000);
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_serve_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=module-login-login-module.js.map