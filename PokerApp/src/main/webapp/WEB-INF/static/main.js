(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/edit-profile/edit-profile.component */ "./src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_edit_password_edit_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/edit-password/edit-password.component */ "./src/app/components/edit-password/edit-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// components






var appRoutes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'home', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"] },
    { path: 'profile', component: _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"] },
    { path: 'edit-email', component: _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__["EditProfileComponent"] },
    { path: 'edit-password', component: _components_edit_password_edit_password_component__WEBPACK_IMPORTED_MODULE_8__["EditPasswordComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: false })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-navbar></app-navbar>\r\n\r\n<div class=\"container\" id=\"titleBox\">\r\n  <div class=\"row align-items-start\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"col\">\r\n      <h1 class=\"textOnBgColor mt-5\">\r\n        {{ title }}\r\n      </h1>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n</div>\r\n\r\n</div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Poker With Friends';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user-profile/user-profile.component */ "./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ "./src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_edit_password_edit_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/edit-password/edit-password.component */ "./src/app/components/edit-password/edit-password.component.ts");
/* harmony import */ var _components_gameboard_gameboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/gameboard/gameboard.component */ "./src/app/components/gameboard/gameboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// components










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
                _components_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"],
                _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__["EditProfileComponent"],
                _components_edit_password_edit_password_component__WEBPACK_IMPORTED_MODULE_11__["EditPasswordComponent"],
                _components_gameboard_gameboard_component__WEBPACK_IMPORTED_MODULE_12__["GameboardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            exports: [],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/edit-password/edit-password.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/edit-password/edit-password.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-password/edit-password.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/edit-password/edit-password.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col align-self-start\"></div>\r\n    <div class=\"col align-self-center centerBox\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <div class=\"card-body\">\r\n            <form action=\"\">\r\n              <div class=\"form-group\">\r\n                <label for=\"currentPassword\">Current Password</label>\r\n                <input type=\"password\" name=\"currentPassword\" class=\"form-control\" id=\"currentPassword\"  placeholder=\"Enter Password\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"newPassword\">New Password</label>\r\n                <input type=\"password\" name=\"newPassword\" class=\"form-control\" id=\"newPassword\" placeholder=\"Enter New Password\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"reEnterPassword\">Re-enter Password</label>\r\n                <input type=\"password\" name=\"reEnterPassword\" class=\"form-control\" id=\"reEnterPassword\" placeholder=\"Re-Enter Password\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n              </div>\r\n            </form>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"col align-self-end\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/edit-password/edit-password.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-password/edit-password.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPasswordComponent", function() { return EditPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditPasswordComponent = /** @class */ (function () {
    function EditPasswordComponent() {
    }
    EditPasswordComponent.prototype.ngOnInit = function () {
    };
    EditPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-password',
            template: __webpack_require__(/*! ./edit-password.component.html */ "./src/app/components/edit-password/edit-password.component.html"),
            styles: [__webpack_require__(/*! ./edit-password.component.css */ "./src/app/components/edit-password/edit-password.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditPasswordComponent);
    return EditPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col align-self-start\"></div>\r\n    <div class=\"col align-self-center centerBox\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <div class=\"card-body\">\r\n            <form action=\"\">\r\n              <div class=\"form-group\">\r\n                <label for=\"currentEmail\">Current Email</label>\r\n                <input type=\"email\" name=\"currentEmail\" class=\"form-control\" id=\"currentEmail\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"newEmail\">New Email</label>\r\n                <input type=\"email\" name=\"newEmail\" class=\"form-control\" id=\"newEmail\" placeholder=\"Enter New Email\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"reEnterEmail\">Re-enter Email</label>\r\n                <input type=\"email\" name=\"reEnterEmail\" class=\"form-control\" id=\"reEnterEmail\" placeholder=\"Re-Enter Email\">\r\n              </div>\r\n              <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n            </form>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"col align-self-end\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent() {
    }
    EditProfileComponent.prototype.ngOnInit = function () {
    };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/components/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/components/edit-profile/edit-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/gameboard/gameboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/gameboard/gameboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/gameboard/gameboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/gameboard/gameboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>This is the canvas!</p>\r\n<canvas id=\"thisCanvas\" width=\"1200\" height = \"600\"></canvas>"

/***/ }),

/***/ "./src/app/components/gameboard/gameboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/gameboard/gameboard.component.ts ***!
  \*************************************************************/
/*! exports provided: GameboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameboardComponent", function() { return GameboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Player */ "./src/app/models/Player.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameboardComponent = /** @class */ (function () {
    function GameboardComponent() {
    }
    GameboardComponent.prototype.ngOnInit = function () {
        this.setCanvas(document.getElementById('thisCanvas'));
        this.drawBoardBackground();
        var user = new _models_Player__WEBPACK_IMPORTED_MODULE_1__["Player"]("Jack77", "Check", "$1000", ["JH", "7H"]);
        this.setUser(user);
        this.drawUserHand();
        this.drawUserInfo();
        var board = ['KH', 'QS', '6D', 'JC', '10D'];
        this.setBoard(board);
        this.drawBoard();
        var p = [new _models_Player__WEBPACK_IMPORTED_MODULE_1__["Player"]("Jack777777777777777", "Check", "$1000", ["KD", "6S"]),
            new _models_Player__WEBPACK_IMPORTED_MODULE_1__["Player"]("Jane01", "Raise 250", "$1500", ["BC", "BC"]),
            new _models_Player__WEBPACK_IMPORTED_MODULE_1__["Player"]("Rob25", "fold", "$275", ["GC", "GC"]),
            new _models_Player__WEBPACK_IMPORTED_MODULE_1__["Player"]("Sue182", "fold", "$990", ["GC", "GC"]),
            new _models_Player__WEBPACK_IMPORTED_MODULE_1__["Player"]("Jack77", "Check", "$1000", ["CC", "CC"]),
            new _models_Player__WEBPACK_IMPORTED_MODULE_1__["Player"]("Jack77", "Check", "$1000", ["BC", "BC"])];
        this.setOtherPlayers(p);
        this.drawOtherPlayers();
    };
    /* Sets the Canvas for the Gameboard; also sets the sizing for gameboard elements.
     */
    GameboardComponent.prototype.setCanvas = function (canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.cardHeight = (this.height / 4);
        this.cardWidth = (this.cardHeight * 63.5 / 88.9);
        this.cardSpace = (this.width / 300);
        this.playerSapce = (this.cardWidth / 2);
        this.halfWidth = (this.width / 2);
        this.halfHeight = (this.height / 2);
        this.margin = (this.width / 35);
    };
    /* Draws a blank green rectangle over the canvas.
     */
    GameboardComponent.prototype.drawBoardBackground = function () {
        var image = new Image(this.width, this.height);
        image.src = '../../assets/table.svg';
        image.onload = this.getBackgroundClosure(image, 0, 0, this.width, this.height);
    };
    /* Sets the user object for the viewing player.
     */
    GameboardComponent.prototype.setUser = function (user) {
        this.user = user;
    };
    /* Draws the hand for the viewing player.
     */
    GameboardComponent.prototype.drawUserHand = function () {
        var cardOneTopLeftX = (this.halfWidth - this.cardWidth) - (this.cardSpace / 2);
        var cardOneTopLeftY = (this.height - this.cardHeight) - this.margin;
        var cardTwoTopLeftX = this.halfWidth + (this.cardSpace / 2);
        var cardTwoTopLeftY = cardOneTopLeftY;
        this.drawCard(this.cardWidth, this.cardHeight, this.user.hand[0], cardOneTopLeftX, cardOneTopLeftY);
        this.drawCard(this.cardWidth, this.cardHeight, this.user.hand[1], cardTwoTopLeftX, cardTwoTopLeftY);
    };
    /* Draws the information for the player viewing the gameboard.
     */
    GameboardComponent.prototype.drawUserInfo = function () {
        this.drawInfo(this.halfWidth, this.height - (this.margin / 1.1), this.user);
    };
    /* Sets the board cards.
     */
    GameboardComponent.prototype.setBoard = function (board) {
        this.board = board;
    };
    /* Draws the board cards on the center of the gameboard.
     */
    GameboardComponent.prototype.drawBoard = function () {
        var numCards = this.board.length;
        //Calculate the starting coordinates for the cards
        var totalWidth = ((this.cardWidth * numCards) + (this.cardSpace * (numCards - 1)));
        var x = this.halfWidth - (totalWidth / 2);
        var y = this.halfHeight - (this.cardHeight / 2);
        for (var i = 0; i < numCards; i++) {
            this.drawCard(this.cardWidth, this.cardHeight, this.board[i], x, y);
            x += (this.cardWidth + this.cardSpace);
        }
    };
    /* Sets the other players in the game.
     */
    GameboardComponent.prototype.setOtherPlayers = function (otherPlayers) {
        this.otherPlayers = otherPlayers;
    };
    /* Draws the other players cards on the gameboard.
     */
    GameboardComponent.prototype.drawOtherPlayers = function () {
        var numPlayers = this.otherPlayers.length;
        if (numPlayers > 4) {
            var middleCount = numPlayers - 2;
            var totalWidth = ((this.cardWidth * 2) * middleCount) + (this.cardSpace * middleCount) + (this.playerSapce * (middleCount - 1));
            //First player
            var x = this.halfWidth - (totalWidth / 2);
            var y = (this.height - this.cardHeight - this.margin);
            this.drawCard(this.cardWidth, this.cardHeight, this.otherPlayers[0].hand[0], x, y);
            x += this.cardWidth + this.cardSpace;
            this.drawCard(this.cardWidth, this.cardHeight, this.otherPlayers[0].hand[1], x, y);
            totalWidth = ((this.cardWidth * 2) * middleCount) + (this.cardSpace * middleCount) + (this.playerSapce * (middleCount - 1));
            x = this.halfWidth - (totalWidth / 2);
            y = this.margin;
            for (var i = 1; i < (numPlayers - 1); i++) {
                this.drawCard(this.cardWidth, this.cardHeight, this.otherPlayers[i].hand[0], x, y);
                x += this.cardWidth + this.cardSpace;
                this.drawCard(this.cardWidth, this.cardHeight, this.otherPlayers[i].hand[0], x, y);
                x += this.cardWidth + this.playerSapce;
            }
            //Last player
            x -= (this.cardWidth + this.cardSpace + this.playerSapce);
            y = (this.height - this.cardHeight - this.margin);
            this.drawCard(this.cardWidth, this.cardHeight, this.otherPlayers[numPlayers - 1].hand[1], x, y);
            x -= this.cardWidth + this.cardSpace;
            this.drawCard(this.cardWidth, this.cardHeight, this.otherPlayers[numPlayers - 1].hand[0], x, y);
        }
        else {
            var totalWidth = ((this.cardWidth * 2) * numPlayers) + (this.cardSpace * numPlayers) + (this.playerSapce * (numPlayers - 1));
            var startX = (this.width / 2) - (totalWidth / 2);
            var startY = this.margin;
            for (var i = 0; i < numPlayers; i++) {
                this.drawCard(this.cardWidth, this.cardHeight, this.otherPlayers[i].hand[0], startX, startY);
                startX += this.cardWidth + this.cardSpace;
                this.drawCard(this.cardWidth, this.cardHeight, this.otherPlayers[i].hand[1], startX, startY);
                startX += this.cardWidth + this.playerSapce;
            }
        }
    };
    /* Draws information for the other players on the board.
     */
    GameboardComponent.prototype.drawPlayerInfo = function () {
        var numPlayers = this.otherPlayers.length;
        if (numPlayers > 4) {
            var middleCount = numPlayers - 2;
            var totalWidth = ((this.cardWidth * 2) * middleCount) + (this.cardSpace * middleCount) + (this.playerSapce * (middleCount - 1));
            //First player
            var x = (this.halfWidth - (totalWidth / 2)) + (((this.cardWidth * 2) + this.cardSpace) / 2);
            var y = this.height - (this.margin / 1.1);
            this.drawInfo(x, y, this.otherPlayers[0]);
            var jump = (((this.cardWidth * 2) + this.cardSpace) / 2);
            x = (this.halfWidth - (totalWidth / 2)) + jump;
            y = 2;
            for (var i = 0; i < numPlayers; i++) {
                this.drawInfo(x, y, this.otherPlayers[i]);
                x += ((jump * 2) + this.playerSapce);
            }
            //Last player
            x = (this.halfWidth + (totalWidth / 2)) - jump;
            y = this.height - (this.margin / 1.1);
            this.drawInfo(x, y, this.otherPlayers[numPlayers - 1]);
        }
        else {
            var jump = (((this.cardWidth * 2) + this.cardSpace) / 2);
            var totalWidth = ((this.cardWidth * 2) * numPlayers) + (this.cardSpace * numPlayers) + (this.playerSapce * (numPlayers - 1));
            var startX = (this.halfWidth - (totalWidth / 2)) + jump;
            var startY = 2;
            for (var i = 0; i < numPlayers; i++) {
                this.drawInfo(startX, startY, this.otherPlayers[i]);
                startX += ((jump * 2) + this.playerSapce);
            }
        }
    };
    /* Draws user info to the specified location on the board.
     *
     * x: The x-coordinate where info text drawing begins.
     * y: The y-coordinate where info text drawing begins.
     * p: The Player object containing the information to display.
     */
    GameboardComponent.prototype.drawInfo = function (x, y, p) {
        var maxUserWidth = (this.cardWidth / 2);
        var size = (this.margin / 1.25);
        x -= ((maxUserWidth / 2) + size);
        var image = new Image(size, size);
        image.src = '../../assets/orn.svg';
        image.onload = this.getClosure(image, x, y, size, size);
        this.ctx.fillStyle = 'gold';
        this.ctx.font = (this.cardWidth / 10) + 'px fancy';
        x += size + (maxUserWidth / 2);
        y += (this.margin / 2);
        this.ctx.textAlign = 'center';
        this.ctx.fillText(p.username, x, y, maxUserWidth);
        x += (maxUserWidth / 2);
        y -= (this.margin / 2);
        var image2 = new Image(size, size);
        image2.src = '../../assets/orn2.svg';
        image2.onload = this.getClosure(image2, x, y, size, size);
    };
    /* Draws an SVG card image on the canvas.
     *
     * cardWidth: The width of the card in pixels.
     * cardHeight: The height of the card in pixels.
     * cardName: The filename of the card, exluding the .SVG extension.
     * x: The upper-left x-coordinate of the image.
     * y: The upper-left y-coordinate of the image.
     */
    GameboardComponent.prototype.drawCard = function (cardWidth, cardHeight, cardName, x, y) {
        var image = new Image(cardWidth, cardHeight);
        image.src = '../../assets/' + cardName + '.svg';
        image.onload = this.getClosure(image, x, y, cardWidth, cardHeight);
    };
    /* Returns a closure containing two coordinates and an image; the closure can be used by
     * HTMLImageElement.onload to draw an image to the correct part of the canvas.
     *
     * image: The image to draw to the canvas.
     * x: The upper-left x-coordinate of the image.
     * y: The upper-left y-coordinate of the image.
     */
    GameboardComponent.prototype.getClosure = function (image, x, y, dx, dy) {
        var _this = this;
        return function () {
            _this.ctx.drawImage(image, x, y, dx, dy);
        };
    };
    /* Returns a closure containing two coordinates and an image; the closure can be used by
     * HTMLImageElement.onload to draw an image to the correct part of the canvas.
     *
     * image: The image to draw to the canvas.
     * x: The upper-left x-coordinate of the image.
     * y: The upper-left y-coordinate of the image.
     */
    GameboardComponent.prototype.getBackgroundClosure = function (image, x, y, dx, dy) {
        var _this = this;
        return function () {
            _this.ctx.drawImage(image, x, y, dx, dy);
            _this.drawPlayerInfo();
            _this.drawUserInfo();
        };
    };
    GameboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-canvas',
            template: __webpack_require__(/*! ./gameboard.component.html */ "./src/app/components/gameboard/gameboard.component.html"),
            styles: [__webpack_require__(/*! ./gameboard.component.css */ "./src/app/components/gameboard/gameboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GameboardComponent);
    return GameboardComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\r\n  homepage works!\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/components/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n\r\n\t<div class=\"row justify-content-center\">\r\n\t\t<div class=\"col-md-6 \">\r\n      <!-- <div class=\"alert alert-success\" role=\"alert\">\r\n      {{ message }}\r\n      </div> -->\r\n\t\t\t<div class=\"card\">\r\n\r\n\t\t\t\t<header class=\"card-header\">\r\n\t\t\t\t\t<a routerLink=\"/register\" class=\"float-right btn btn-outline-primary mt-1\">Register</a>\r\n\t\t\t\t\t<h4 class=\"card-title mt-2\">Login</h4>\r\n\t\t\t\t</header>\r\n\t\t\t\t<article class=\"card-body\">\r\n\t\t\t\t\t<form action=\"register\" method=\"POST\">\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label>Username</label> <input type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"username\" required>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label>Password</label> <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\" required>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</article>\r\n\t\t\t\t<div class=\"border-top card-body text-center\">\r\n\t\t\t\t\tDon't Have an Account? <a routerLink=\"/register\">Register</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
    function LoginComponent() {
        this.message = 'Logout Successful';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\" style=\"background-color: #e3f2fd;\">\r\n  <a class=\"navbar-brand\" href=\"./home\">Poker With Friends</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n    <div class=\"navbar-nav\">\r\n      <a class=\"nav-item nav-link active\" routerLink=\"./home\">Home <span class=\"sr-only\">(current)</span></a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"./profile\">Profile</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"./createGame\">Create Game</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"./joinGame\">Join Game</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"./logout\">Logout</a>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\r\n\t<div class=\"row justify-content-center\">\r\n\t\t<div class=\"col-md-6 \">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<header class=\"card-header\">\r\n\t\t\t\t\t<a href=\"login\" class=\"float-right btn btn-outline-primary mt-1\">Log\r\n\t\t\t\t\t\tin</a>\r\n\t\t\t\t\t<h4 class=\"card-title mt-2\">Sign up</h4>\r\n\t\t\t\t</header>\r\n\t\t\t\t<article class=\"card-body\">\r\n\t\t\t\t\t<form action=\"register\" method=\"POST\">\r\n\t\t\t\t\t\t<div class=\"form-row\">\r\n\t\t\t\t\t\t\t<div class=\"col form-group\">\r\n\t\t\t\t\t\t\t\t<label>First name </label> <input type=\"text\"\r\n\t\t\t\t\t\t\t\t\tclass=\"form-control\" placeholder=\"First Name\" name=\"firstName\" required>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col form-group\">\r\n\t\t\t\t\t\t\t\t<label>Last name</label> <input type=\"text\" class=\"form-control\"\r\n\t\t\t\t\t\t\t\t\tplaceholder=\"Last Name\" name=\"lastName\" required>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label>Email address</label> <input type=\"email\" class=\"form-control\" placeholder=\"Email Address\" name=\"email\" required>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label>Username</label> <input type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"username\" required>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label>Create password</label> <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\" required>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label>Re-Enter password</label> <input class=\"form-control\" type=\"password\" name=\"rePassword\" placeholder=\"Re-Enter Password\" required>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-block\">Register</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</article>\r\n\t\t\t\t<div class=\"border-top card-body text-center\">\r\n\t\t\t\t\tHave an account? <a routerLink=\"/login\">Log In</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"row align-items-start mt-5\">\r\n    <div class=\"col\">\r\n      <h3 class=\"textOnBgColor\">Wins: 10</h3>\r\n    </div>\r\n    <div class=\"col\">\r\n      <h3 class=\"textOnBgColor\">Losses: 10</h3>\r\n    </div>\r\n    <div class=\"col\">\r\n      <h3 class=\"textOnBgColor\">Win/Loss Ratio: 1</h3>\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-start mt-5\">\r\n    <div class=\"col\">\r\n    </div>\r\n    <div class=\"col\">\r\n      <!-- <h3 class=\"textOnBgColor\">Total Winnings: ${{ winnings | number: '1.2' }}</h3> -->\r\n    </div>\r\n    <div class=\"col\">\r\n  </div>\r\n  </div>\r\n  <div class=\"row align-items-center mt-5\">\r\n    <div class=\"col\">\r\n    </div>\r\n    <div class=\"col\">\r\n      <div class=\"card\" style=\"width: 18rem;\">\r\n        <ul class=\"list-group list-group-flush\">\r\n          <li class=\"list-group-item\">Username: <span class=\"ml-3\"><strong>{{ userInfo.username }}</strong></span></li>\r\n          <li class=\"list-group-item\">Name: <span class=\"ml-3\"><strong>{{ userInfo.firstName + \" \" + userInfo.lastName }}</strong></span></li>\r\n          <li class=\"list-group-item\">Email: <span class=\"ml-3\"><strong>{{ userInfo.email }}</strong></span></li>\r\n        </ul>\r\n        <button type=\"button\" routerLink=\"/edit-email\" class=\"btn btn-primary mt-3\">Update Email</button>\r\n        <button type=\"button\" routerLink=\"/edit-password\"  class=\"btn btn-primary mt-3\">Update Password</button>\r\n        <button type=\"button\" class=\"btn btn-danger mt-3\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">Delete Account</button>\r\n      </div>\r\n      <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n          <div class=\"modal-content\">\r\n            <p class=\"m-5\">Are you sure you would like to delete your account?</p>\r\n              <button type=\"button\" class=\"btn btn-primary m-2\">No, Do not delete my account</button>\r\n              <button type=\"button\" class=\"btn btn-danger m-2\">Yes, Delete my account</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row align-items-end fixed-bottom\">\r\n    <div class=\"col\">\r\n    </div>\r\n    <div class=\"col\">\r\n    </div>\r\n    <div class=\"col\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-profile/user-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_profile_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user-profile-info.service */ "./src/app/services/user-profile-info.service.ts");
/* harmony import */ var _models_user_info_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/user-info.model */ "./src/app/models/user-info.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userInfoService) {
        this.userInfoService = userInfoService;
        this.gameState = null;
        this.userInfo = new _models_user_info_model__WEBPACK_IMPORTED_MODULE_2__["UserInfo"](1, this.gameState, 'username', 'firstname', 'lastname', 'email', 'password', null);
    }
    UserProfileComponent.prototype.getUserInformation = function () {
        var _this = this;
        this.userInfoService.fetchUserInformation()
            .subscribe(function (userInfo) {
            _this.userInfo = userInfo;
        }, function (error) { console.log("Error: " + error); });
    };
    // https://stackoverflow.com/questions/44472150/no-access-control-allow-origin-header-is-present-on-the-requested-resource-i
    UserProfileComponent.prototype.ngOnInit = function () {
        this.getUserInformation();
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/components/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/components/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_profile_info_service__WEBPACK_IMPORTED_MODULE_1__["UserProfileInfoService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/models/Player.ts":
/*!**********************************!*\
  !*** ./src/app/models/Player.ts ***!
  \**********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
var Player = /** @class */ (function () {
    function Player(username, status, winnings, hand) {
        this.username = username;
        this.status = status;
        this.winnings = winnings;
        this.hand = hand;
    }
    return Player;
}());



/***/ }),

/***/ "./src/app/models/user-info.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/user-info.model.ts ***!
  \*******************************************/
/*! exports provided: UserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
var UserInfo = /** @class */ (function () {
    // public wins: Number;
    // public losses: Number;
    // public winnings: Number;
    //  constructor(username: String, firstname: String, lastname: String, email: String, wins: Number, losses: Number, winnings: Number) {
    function UserInfo(userId, gameStates, username, firstName, lastName, email, password, isHost) {
        this.userId = userId;
        this.gameStates = gameStates;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        // this.wins = wins;
        // this.losses = losses;
        // this.winnings = winnings;
        this.isHost = isHost;
    }
    return UserInfo;
}());



/***/ }),

/***/ "./src/app/services/user-profile-info.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/user-profile-info.service.ts ***!
  \*******************************************************/
/*! exports provided: UserProfileInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileInfoService", function() { return UserProfileInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileInfoService = /** @class */ (function () {
    function UserProfileInfoService(httpClient) {
        this.httpClient = httpClient;
    }
    UserProfileInfoService.prototype.fetchUserInformation = function () {
        return this.httpClient.get('http://ec2-52-15-128-99.us-east-2.compute.amazonaws.com:8080/PokerApp/userInfo');
    };
    UserProfileInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserProfileInfoService);
    return UserProfileInfoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\GitRepos\Project_2\poker-app\ang-poker-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map