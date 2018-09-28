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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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

module.exports = "\r\n<router-outlet></router-outlet>"

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
        this.title = 'portfolio';
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _experience_experience_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./experience/experience.component */ "./src/app/experience/experience.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import { AngularFireModule } from 'angularfire2';








// import { environment } from "../environments/environment";
var app_routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], children: [
            { path: '', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"] },
            { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"] },
            { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_14__["PortfolioComponent"] },
            { path: 'skills', component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"] },
            { path: 'experience', component: _experience_experience_component__WEBPACK_IMPORTED_MODULE_13__["ExperienceComponent"] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"] }
        ] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"],
                _experience_experience_component__WEBPACK_IMPORTED_MODULE_13__["ExperienceComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_14__["PortfolioComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot(app_routes),
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n.mail{\r\n    font-size:30px;\r\n     margin:auto;\r\n     margin-top:100px;\r\n    cursor :pointer;\r\n    color:white;\r\n    border-bottom: 3px solid white;\r\n    width: 50%;\r\n    margin-top:20px;\r\n}\r\n.mail:hover{\r\n    color:\t#1E90FF;\r\n    border-bottom: 3px solid \t#1E90FF;\r\n\r\n}*/\r\n\r\n.topbuttons {\r\n    width: 70%;\r\n    border: none;\r\n    margin: auto;\r\n    margin-top: 100px;\r\n}\r\n\r\n.portfolio {\r\n    background-color: black;\r\n    position: relative;\r\n    /* left:11.2%; */\r\n    width: 12%;\r\n    font-size: 15px;\r\n    padding: 0px 30px 0px 0px;\r\n    color: white;\r\n}\r\n\r\n.home {\r\n    background-color: black;\r\n    float: right;\r\n    position: relative;\r\n    /* left:-11.2%; */\r\n    width: 12%;\r\n    font-size: 17px;\r\n    color: white;\r\n    padding: 0px 0px 0px 20px;\r\n}\r\n\r\n.portfolio:hover {\r\n    background-image: linear-gradient(to right, #03A9F4, #7FFFD4);\r\n}\r\n\r\n.home:hover {\r\n    background-image: linear-gradient(to right, #03A9F4, #7FFFD4);\r\n}\r\n\r\n.contactpage {\r\n    background-image: url('/assets/images/contact us.png');\r\n    height: 400px;\r\n    margin: auto;\r\n    width: 70%;\r\n    margin-top: 10px;\r\n}\r\n\r\n@-webkit-keyframes moveup {\r\n    from {\r\n        top: 50px;\r\n    }\r\n    to {\r\n        top: 0px;\r\n    }\r\n}\r\n\r\n@keyframes moveup {\r\n    from {\r\n        top: 50px;\r\n    }\r\n    to {\r\n        top: 0px;\r\n    }\r\n}\r\n\r\n.fonts {\r\n    -webkit-animation: moveup 1s forwards;\r\n            animation: moveup 1s forwards;\r\n    position: relative;\r\n}\r\n\r\n.font1 {\r\n    position: relative;\r\n    top: 110px;\r\n    width: 70%;\r\n    margin: auto;\r\n    text-align: center;\r\n    font-size: 25px;\r\n    background-image: linear-gradient(to right, #ffffff 0%, #00ffff 100%);\r\n    outline: none;\r\n    font-family: cursive;\r\n    font-weight: bold;\r\n}\r\n\r\n.font2 {\r\n    margin: auto;\r\n    width: 80%;\r\n    font-size: 20px;\r\n    position: relative;\r\n    top: 150px;\r\n    text-align: center;\r\n    color: white\r\n}\r\n\r\n.mail {\r\n    font-size: 25px;\r\n    width: 80%;\r\n    margin: auto;\r\n    text-align: center;\r\n    margin-top: 180px;\r\n    color: white;\r\n    font-family: monospace;\r\n    color: #F2B8EA;\r\n}\r\n\r\n.mail:hover {\r\n    color: #72E57C;\r\n}\r\n\r\n.mobile-number {\r\n    text-align: center;\r\n    color: wheat;\r\n    margin-top: 8px;\r\n}\r\n\r\n@media screen and (min-width:320px) and (max-width:839px) {\r\n    .topbuttons {\r\n        width: 70%;\r\n        margin-top: 100px;\r\n    }\r\n    .portfolio {\r\n        background-color: black;\r\n        position: relative;\r\n        /* left:11.2%; */\r\n        width: 10%;\r\n        font-size: 15px;\r\n        color: white;\r\n    }\r\n    .home {\r\n        background-color: black;\r\n        float: right;\r\n        position: relative;\r\n        /* left:-11.2%; */\r\n        width: 10%;\r\n        font-size: 17px;\r\n        color: white;\r\n    }\r\n    .font1 {\r\n        border: 1px solid white;\r\n        position: relative;\r\n        top: 100px;\r\n        width: 90%;\r\n        margin: auto;\r\n        text-align: center;\r\n        font-size: 20px;\r\n        background-color: white;\r\n        outline: none;\r\n        margin-top: 60px;\r\n    }\r\n    .font2 {\r\n        margin: auto;\r\n        width: 80%;\r\n        font-size: 20px;\r\n        position: relative;\r\n        top: 135px;\r\n        text-align: center;\r\n    }\r\n    .mail {\r\n        font-size: 13px;\r\n        width: 100%;\r\n        margin-top: 155px;\r\n        font-family: monospace;\r\n    }\r\n    .mobile-number {\r\n        text-align: center;\r\n        margin-top: 8px;\r\n        color: aqua;\r\n    }\r\n    .fonts {\r\n        margin-top: -50px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n\n\n    <div class=\"topbuttons\">\n  <a routerLink=\"/portfolio\"> <button  class=\"portfolio\" mat-raised-button><i class=\"material-icons\">\n    keyboard_arrow_left</i>Portfolio</button></a>\n    <a routerLink=\"/profile\"> <button mat-raised-button class=\"home\">Home<i class=\"material-icons\">\n    keyboard_arrow_right</i></button></a>\n    </div>\n\n    <div class=\"contactpage\">\n    <div class=\"fonts\">\n    <div class=\"font1\">I AM OPEN FOR HIRE</div>\n    <div class=\"font2\">Need really a cool website for your business or yourself?</div>\n    <div class=\"mail\">ettikyala.rajesh08@gmail.com</div>\n    <div class=\"mobile-number\"> Mobile: +91 9949096703</div>\n    </div>\n\n    </div>\n\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/experience/experience.component.css":
/*!*****************************************************!*\
  !*** ./src/app/experience/experience.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n button{\r\n    background-color:black;\r\n    color:white;\r\n\r\n}\r\n.skills{\r\n    position: relative;\r\n    /* left:11%; */\r\n    width:10%;\r\n    /* padding:0px 25px 0px 0px; */\r\n    font-size: 17px;\r\n    padding:0px;\r\n}\r\n.portfolio{\r\nfloat:right;\r\nfont-size: 16px;\r\nwidth:10%;\r\nposition: relative;\r\n/* left:-11%; */\r\nfont-size: 17px;\r\npadding:0px;\r\n}\r\n.font1{\r\n    margin:20px 0px 0px 0px;\r\n    text-align:center;\r\n}\r\n.projects1{\r\n    margin: auto;\r\n    width: 70%;\r\n    height:253px;\r\n     /* border:1px solid rgb(48,51,60); */\r\n    -webkit-animation:fade 1s forwards;\r\n            animation:fade 1s forwards;\r\n    position: relative;\r\n    margin-top:30px;\r\n}\r\n@-webkit-keyframes fade{\r\n    from{top:50px;}\r\n    to{top:0px;}\r\n}\r\n@keyframes fade{\r\n    from{top:50px;}\r\n    to{top:0px;}\r\n}\r\nimg{\r\n    width:100%;\r\n    height:250px;\r\n    /* float:right; */\r\n}\r\n.description{\r\n    color:grey;\r\n    padding:50px 0px 0px 10px;\r\n    font-size: 20px;\r\n     font-family: 'Courier New', Courier, monospace;\r\n    color:#bbf291;\r\n}\r\n.hrtime{\r\n     /* padding:0px 0px 0px 0px; */\r\n    font-weight: bold;\r\n    text-align: center;\r\n    color:grey;\r\n    float:right;\r\n    color: #03A9F4;\r\n}\r\n.designation{\r\n    color:grey;\r\n    padding-left:10px;\r\n}\r\n/* .bottombutton{\r\nmargin:20px 0px 0px 0px;\r\nanimation:fade1 1s 0.1s forwards;\r\nposition: relative;\r\n} */\r\n@-webkit-keyframes fade1{\r\n    from{top:60px;}\r\n    to{top:0px;}\r\n}\r\n@keyframes fade1{\r\n    from{top:60px;}\r\n    to{top:0px;}\r\n}\r\n.topbutton{\r\n    width:70%;\r\n    border:none;\r\n    margin:auto;\r\n    margin-top:100px;\r\n}\r\n.skills:hover{\r\n    background-image: linear-gradient(to right,#03A9F4,#7FFFD4);\r\n}\r\n.portfolio:hover{\r\n    background-image: linear-gradient(to right,#03A9F4,#7FFFD4);\r\n}\r\n@media screen and (min-width:840px){\r\n    .topbutton{\r\n        width:90%;\r\n        border:none;\r\n        margin:auto;\r\n        margin-top:40px;\r\n    }\r\n    .skills{\r\n        position: relative;\r\n        left:11%; \r\n        width:10%;\r\n         padding:0px 25px 0px 0px; \r\n        font-size: 17px;\r\n    }\r\n    .portfolio{\r\n    float:right;\r\n    font-size: 16px;\r\n    width:10%;\r\n    position: relative;\r\n     left:-11%;\r\n    font-size: 17px;\r\n    padding:0px;\r\n    }\r\n    .projects1{\r\n        margin: auto;\r\n        width: 70%;\r\n        height:253px;\r\n        border:1px solid rgb(48,51,60); \r\n        -webkit-animation:fade 1s forwards; \r\n                animation:fade 1s forwards;\r\n        position: relative;\r\n        margin-top:30px;\r\n    }\r\n    img{\r\n        width:30%;\r\n        height:250px;\r\n         float:right; \r\n    }\r\n    .hrtime{\r\n         padding:0px 30px 0px 0px; \r\n         color: #03A9F4;\r\n       \r\n   }\r\n   .description{\r\n    color:grey;\r\n    padding:160px 0px 0px 10px;\r\n    color:white;\r\n    font-size: 20px;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    color:#bbf291;\r\n}\r\n    .designation{\r\n        color: #c0b3d8;\r\n        font-family: sans-serif;\r\n    }\r\n\r\n}"

/***/ }),

/***/ "./src/app/experience/experience.component.html":
/*!******************************************************!*\
  !*** ./src/app/experience/experience.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topbutton\">\r\n    <a routerLink=\"/skills\"> <button mat-raised-button class=\"skills\"><i class=\"material-icons\">\r\n        keyboard_arrow_left</i>Skills</button></a>\r\n    <a routerLink=\"/portfolio\"><button mat-raised-button class=\"portfolio\">Portfolio<i class=\"material-icons\">\r\n        keyboard_arrow_right</i></button></a>\r\n</div>\r\n<div class=\"projects1\">\r\n    <img src=\"/assets/images/company.jpg\">\r\n    <div class=\"hrtime\">Present</div>\r\n    <div class=\"description\">Innominds Business Technologies Pvt Ltd</div>\r\n    <div class=\"designation\">Web Developer</div>\r\n</div>"

/***/ }),

/***/ "./src/app/experience/experience.component.ts":
/*!****************************************************!*\
  !*** ./src/app/experience/experience.component.ts ***!
  \****************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
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

var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/experience/experience.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\nimg {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin-left: 35px;\r\n    border-radius: 50%;\r\n    margin-top: 12px;\r\n}\r\n\r\n#menu {\r\n    cursor: pointer;\r\n    color: grey;\r\n    font-size: 30px;\r\n}\r\n\r\n#menu:hover {\r\n    color: white;\r\n}\r\n\r\n#menuicon:hover {\r\n    border: 1px solid white;\r\n}\r\n\r\n#menuicon {\r\n    /* border: 1px solid grey; */\r\n    width: auto;\r\n    position: fixed;\r\n    left: 20px;\r\n    top: 30px;\r\n    height: 33px;\r\n}\r\n\r\nmat-sidenav {\r\n    width: 15%;\r\n    background-color: black;\r\n    position: fixed;\r\n    border: 1px solid rgb(48, 51, 60);\r\n    border-left: none;\r\n    border-top: none;\r\n    border-bottom: none;\r\n}\r\n\r\n.home,\r\n.experience,\r\n.contact,\r\n.portfolio,\r\n.skills {\r\n    color: white;\r\n    padding: 15px 0px 0px 0px;\r\n    font-size: 20px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n.primaryfont {\r\n    /* background-image:linear-gradient(to right,#03A9F4,#7FFFD4); */\r\n    height: 180px;\r\n    /* background-color: rgba(255, 255, 128, .5); */\r\n    /* background: #d5ee50; */\r\n    background: #dd3e54;\r\n    /* fallback for old browsers */\r\n    /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #6be585, #dd3e54);\r\n    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n\r\n.name,\r\n.designation {\r\n    color: black;\r\n    font-size: 24px;\r\n    /* font-family: Verdana, Geneva, Tahoma, sans-serif */\r\n    font-family: Monospace;\r\n}\r\n\r\n.name {\r\n    padding: 70px 40px 0px 0px;\r\n    margin-top: -65px;\r\n    text-align: center;\r\n    font-style: italic;\r\n    font-size: 20px;\r\n    color: purple;\r\n}\r\n\r\n.designation {\r\n    text-align: center;\r\n    margin-left: -38px;\r\n    font-size: 15px;\r\n    color: #3366ff;\r\n}\r\n\r\n#homeicon,\r\n#experienceicon,\r\n#contacticon,\r\n#skillsicon,\r\n#portfolioicons {\r\n    padding: 0px 10px 0px 10px;\r\n    font-size: 20px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nmat-sidenav-content {\r\n    background-color: black;\r\n}\r\n\r\n@media screen and (min-width:320px) and (max-width:479px) {\r\n    .name,\r\n    .designation {\r\n        color: black;\r\n        font-size: 20px;\r\n        font-family: Verdana, Geneva, Tahoma, sans-serif\r\n    }\r\n    .name {\r\n        padding: 70px 0px 0px 0px;\r\n        color: #00ff00;\r\n        margin-left: -32px;\r\n        font-style: initial;\r\n        text-align: center;\r\n    }\r\n    .designation {\r\n        text-align: center;\r\n        margin-left: -38px;\r\n        font-size: 15px;\r\n        color: #3366ff;\r\n    }\r\n    #menuicon {\r\n        border: none;\r\n        width: auto;\r\n        position: fixed;\r\n        left: 20px;\r\n        top: 30px;\r\n        height: 33px;\r\n    }\r\n    #menu {\r\n        cursor: pointer;\r\n        color: grey;\r\n        font-size: 30px;\r\n    }\r\n    #menuicon:hover {\r\n        border: none;\r\n    }\r\n    mat-sidenav {\r\n        width: 200px;\r\n        background-color: black;\r\n        position: fixed;\r\n    }\r\n}\r\n\r\n@media screen and (min-width:480px) and (max-width:736px) {\r\n    #menuicon:hover {\r\n        border: none;\r\n    }\r\n    img {\r\n        width: 100px;\r\n        margin-left: 58px;\r\n        /* border-radius: 25%; */\r\n        margin-top: 12px;\r\n    }\r\n    /* .name,.designation{\r\n         padding-left: 8px;\r\n        font-size: 22px;\r\n        font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    } */\r\n    .name {\r\n        padding: 70px 0px 0px 0px;\r\n        color: #00ff00;\r\n        margin-left: -32px;\r\n        font-style: initial;\r\n        text-align: center;\r\n    }\r\n    .designation {\r\n        text-align: center;\r\n        /* margin-left: 5px; */\r\n    }\r\n    #menuicon {\r\n        border: none;\r\n        width: auto;\r\n        position: fixed;\r\n        left: 20px;\r\n        top: 30px;\r\n        height: 33px;\r\n    }\r\n    #menu {\r\n        cursor: pointer;\r\n        color: grey;\r\n        font-size: 25px;\r\n    }\r\n    mat-sidenav {\r\n        width: 250px;\r\n        background-color: black;\r\n        position: fixed;\r\n    }\r\n}\r\n\r\n@media screen and (min-width:736px) and (max-width:839px) {\r\n    #menuicon {\r\n        border: none;\r\n        width: auto;\r\n        position: fixed;\r\n        left: 20px;\r\n        top: 30px;\r\n        height: 33px;\r\n    }\r\n    #menu {\r\n        cursor: pointer;\r\n        color: grey;\r\n        font-size: 30px;\r\n    }\r\n    mat-sidenav {\r\n        width: 300px;\r\n        /* background-color:black; */\r\n        position: fixed;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\" (backdropClick)=\"close('backdrop')\">\r\n    <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\r\n        <div class=\"primaryfont\">\r\n\r\n            <img src=\"./assets/images/profile.jpeg\" alt=\"profile\">\r\n\r\n            <div class=\"name\">E.Rajesh</div>\r\n            <div class=\"designation\">Angular Developer</div>\r\n        </div>\r\n        <a routerLink=\"/profile\">\r\n            <div class=\"home\"><i id=\"homeicon\" class=\"material-icons\">\r\n            home</i>Home</div>\r\n        </a>\r\n        <a routerLink=\"/skills\">\r\n            <div class=\"skills\"><i id=\"skillsicon\" class=\"material-icons\">star</i> Skills\r\n            </div>\r\n        </a>\r\n        <a routerLink=\"/experience\">\r\n            <div class=\"experience\"><i id=\"experienceicon\" class=\"material-icons\">\r\n            work\r\n            </i>Experience</div>\r\n        </a>\r\n        <a routerLink=\"/portfolio\">\r\n            <div class=\"portfolio\"><i id=\"portfolioicons\" class=\"material-icons\">developer_board</i>Portfolio</div>\r\n        </a>\r\n        <a routerLink=\"/contact\">\r\n            <div class=\"contact\"><i id=\"contacticon\" class=\"material-icons\">\r\n                    mail\r\n                    </i>Contact</div>\r\n        </a>\r\n\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content>\r\n        <div id=\"menuicon\">\r\n            <i id=\"menu\" (click)=\"sidenav.open()\" class=\"material-icons md-18\">menu </i>\r\n        </div>\r\n        <router-outlet></router-outlet>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.reason = '';
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    HomeComponent.prototype.close = function (reason) {
        this.reason = reason;
        this.sidenav.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"])
    ], HomeComponent.prototype, "sidenav", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.css":
/*!***************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n .topbutton{\r\n    width:70%;\r\n    border:none;\r\n    margin:auto;\r\n    margin-top:100px;\r\n}\r\n.experience{\r\n    background-color: black;\r\n    position: relative;\r\n    /* left:11.2%; */\r\n   width:10%;\r\n   font-size: 15px;\r\n   padding:0px 0px 0px 0px;\r\n   color:white;\r\n}\r\n.contact{\r\n    background-color: black;\r\n    float:right;\r\n    position: relative;\r\n    /* left:-11.2%; */\r\n   width:10%;\r\n   font-size: 17px;\r\n   color:white;\r\n   padding:0px 0px 0px 0px;\r\n}\r\n.projects1{\r\n    /* border:1px solid rgb(48,51,60); */\r\n    width: 70%;\r\n    margin: auto;\r\n    height:250px;\r\n    -webkit-animation:fade2 1s forwards;\r\n            animation:fade2 1s forwards;\r\n    position: relative;\r\n    margin-top:25px;\r\n}\r\nimg{\r\n    width:100%;\r\n    height:300px;\r\n    /* float:right; */\r\n    background-color: white;\r\n    padding:0.1px 0px 0px 0px;\r\n    \r\n}\r\n@-webkit-keyframes fade2{\r\n    from{top:50px;}\r\n    to{top:0px;}\r\n}\r\n@keyframes fade2{\r\n    from{top:50px;}\r\n    to{top:0px;}\r\n}\r\n.company{\r\n    color:white;\r\n\r\n    \r\n}\r\n.description{\r\n    color:grey;  \r\n    padding:auto;\r\n    /* padding-top:40px; */\r\n    padding-top:10px;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: #7CD9DE;\r\n    \r\n}\r\n.experience,{\r\n    padding:0px 10px 0px 0px;\r\n    }\r\n.hrtime{\r\n        /* padding:80px 0px 50px 10px; */\r\n        padding:auto;\r\n        font-weight: bold;\r\n        text-align: center;\r\n        color:#ca9ce5;\r\n        /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */\r\n        /* padding-top:80px; */\r\n        padding-top:10px;\r\n         text-decoration: underline;\r\n    }\r\n.experience:hover{\r\n        background-image: linear-gradient(to right,#03A9F4,#7FFFD4);\r\n    }\r\n.contact:hover{\r\n        background-image: linear-gradient(to right,#03A9F4,#7FFFD4);\r\n    }\r\n@media screen and (min-device-width:840px){\r\n        .topbutton{\r\n            width:70%;\r\n            margin-top:100px;\r\n        }\r\n        .projects1{\r\n            border:1px solid rgb(48,51,60);\r\n            width: 70%;\r\n            margin: auto;\r\n            height:335px;\r\n            -webkit-animation:fade2 1s forwards;\r\n                    animation:fade2 1s forwards;\r\n            position: relative;\r\n            margin-top:25px;\r\n        }\r\n        img{\r\n            width:30%;\r\n            height:250px;\r\n            float:right;\r\n            background-color: white;\r\n            padding:0px 0px 0px 0px;\r\n            \r\n        }\r\n        .description{\r\n             padding-top:40px;\r\n             padding-left: 8px;\r\n             \r\n             \r\n            \r\n        }\r\n        .hrtime{\r\n            \r\n             padding-top:80px; \r\n            \r\n        } \r\n        .experience{\r\n            background-color: black;\r\n            position: relative;\r\n            /* left:11.2%; */\r\n           width:12%;\r\n           font-size: 15px;\r\n           padding:0px 10px 0px 0px;\r\n           color:white;\r\n        }\r\n        .contact{\r\n        \r\n           width:12%;\r\n           font-size: 16px;\r\n           padding:0px 0px 0px 10px\r\n        }\r\n\r\n    }"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"topbutton\">\n            <a routerLink=\"/experience\"> <button mat-raised-button class=\"experience\" ><i class=\"material-icons\">\n                keyboard_arrow_left</i>Experience</button></a> \n            <a routerLink=\"/contact\"><button mat-raised-button class=\"contact\" >Contact<i class=\"material-icons\">\n                keyboard_arrow_right</i></button></a> \n           </div>\n\n           <div class=\"projects1\">\n                <img src=\"/assets/images/hr mangament.jpg\">\n            <div class=\"hrtime\">HR Managment</div>\n            <div class=\"description\">HR mangament application is about managing the employees in a company by the admin.\n              Employees can see their project assignments and can edit their profile and\n              fill their time sheets</div>    \n           </div>\n\n\n           \n           <!-- <div class=\"projects1\">\n            <img src=\"/assets/images/hr mangament.jpg\">\n        <div class=\"hrtime\">Xperian</div>\n        <div class=\"description\">xperian project is about  </div>    \n       </div> -->\n\n<!--            \n           <div class=\"projects1\">\n            <img src=\"/assets/images/hr mangament.jpg\">\n        <div class=\"hrtime\">Hr Managment</div>\n        <div class=\"description\">Hr mangament application is about managing the employees in a company by the admin.\n          Employees can see their project assignments and can edit their profile and\n          fill their timesheets</div>    \n       </div> -->\n    "

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
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

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.css */ "./src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .animation {\r\n     width: 70%;\r\n     margin: auto;\r\n     -webkit-animation: example 1s forwards;\r\n             animation: example 1s forwards;\r\n     position: relative;\r\n     margin-top: 250px;\r\n }\r\n \r\n .introduction {\r\n     color: white;\r\n     /* border:1px solid white; */\r\n     font-size: 40px;\r\n     margin: 60px 0px 0px 0px;\r\n     font-family: Fira Mono, monospace;\r\n     font-style: italic;\r\n     font-size: 25px;\r\n }\r\n \r\n .description {\r\n     color: white;\r\n     font-size: 16px;\r\n     margin: 30px 0px 0px 0px;\r\n     font-family: Fira Mono, monospace;\r\n }\r\n \r\n span {\r\n     color: #5042f4;\r\n }\r\n \r\n .inline1,\r\n .inline2 {\r\n     color: blue;\r\n }\r\n \r\n .material-icons.md-18 {\r\n     font-size: 50px;\r\n     color: grey;\r\n     position: relative;\r\n     text-align: center;\r\n }\r\n \r\n .icon {\r\n     border: 1px solid grey;\r\n     width: auto;\r\n     border-radius: 50px;\r\n     height: 50px;\r\n     position: fixed;\r\n     left: 45%;\r\n     margin-top: 50px;\r\n }\r\n \r\n .material-icons:hover {\r\n     color: white;\r\n }\r\n \r\n .icon:hover {\r\n     border: 1px solid white;\r\n }\r\n \r\n @-webkit-keyframes example {\r\n     from {\r\n         top: 90px;\r\n     }\r\n     to {\r\n         top: 0px;\r\n     }\r\n }\r\n \r\n @keyframes example {\r\n     from {\r\n         top: 90px;\r\n     }\r\n     to {\r\n         top: 0px;\r\n     }\r\n }\r\n \r\n @media screen and (min-width:320px) and (max-width:839px) {\r\n     .animation {\r\n         width: 75%;\r\n         margin: auto;\r\n         -webkit-animation: example 1s forwards;\r\n                 animation: example 1s forwards;\r\n         position: relative;\r\n         margin-top: 100px;\r\n     }\r\n     .introduction {\r\n         color: white;\r\n         font-size: 20px;\r\n         margin: 10px 0px 0px 0px;\r\n         font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n         font-style: italic\r\n     }\r\n     .introduction1 {\r\n         color: white;\r\n         font-size: 16px;\r\n         margin: 30px 0px 0px 0px;\r\n         font-family: Verdana, Geneva, Tahoma, sans-serif\r\n     }\r\n }\r\n \r\n @media screen and (min-width:840px) {\r\n     .animation {\r\n         width: 75%;\r\n         margin: auto;\r\n         -webkit-animation: example 1s forwards;\r\n                 animation: example 1s forwards;\r\n         position: relative;\r\n         margin-top: 170px;\r\n     }\r\n }"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animation\">\n\n    <div class=\"introduction\">Hi, I am E.RAJESH.</div>\n    <div class=\"description\">I'm a <span>Angular Developer</span> introducing creative ideas and developing impressive applications.<br><span class=\"inline1\">Click below</span> to know more <span class=\"inline2\">about me</span></div>\n</div>\n\n<div class=\"icon\">\n    <a routerLink=\"/skills\"><i  class=\"material-icons md-18 \">keyboard_arrow_down </i></a>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topbutton {\r\n    margin: 10px 0px 0px 0px;\r\n    width: 70%;\r\n    margin: auto;\r\n    margin-top: 80px;\r\n}\r\n\r\n.home:hover {\r\n    background-image: linear-gradient(to right, #03A9F4, #7FFFD4);\r\n}\r\n\r\n.experience:hover {\r\n    background-image: linear-gradient(to right, #03A9F4, #7FFFD4);\r\n}\r\n\r\n.home {\r\n    margin: auto;\r\n    width: 3%;\r\n    font-size: 16px;\r\n    height: 30px;\r\n    background-color: black;\r\n    color: White;\r\n    padding: 0px 20px 0px 0px;\r\n    margin: 0px 0px 0px 0px;\r\n}\r\n\r\n.experience {\r\n    float: right;\r\n    width: 5%;\r\n    margin: 0px 0px 0px 0px;\r\n    font-size: 16px;\r\n    height: 30px;\r\n    background-color: black;\r\n    color: White;\r\n    padding: 0px 30px 0px 0px;\r\n}\r\n\r\n.material-icons-experience {\r\n    margin-right: 5px;\r\n}\r\n\r\n.introduction {\r\n    border: 1px solid rgb(48, 51, 60);\r\n    width: 70%;\r\n    margin: auto;\r\n    margin-top: 20px;\r\n}\r\n\r\n.description {\r\n    color: white;\r\n    text-align: center;\r\n    font-family: 'Courier New', Courier, monospace;\r\n}\r\n\r\n.font2 {\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.html {\r\n    border: 1px solid rgb(48, 51, 60);\r\n    width: 70%;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    height: 35px;\r\n    padding-top: 5px;\r\n    position: relative;\r\n    -webkit-animation: example0 1s forwards;\r\n            animation: example0 1s forwards;\r\n    transition: 0.85s ease-out;\r\n}\r\n\r\n@-webkit-keyframes example0 {\r\n    from {\r\n        top: 500px;\r\n    }\r\n    to {\r\n        top: 0px;\r\n    }\r\n}\r\n\r\n@keyframes example0 {\r\n    from {\r\n        top: 500px;\r\n    }\r\n    to {\r\n        top: 0px;\r\n    }\r\n}\r\n\r\n.htmlfont {\r\n    color: white;\r\n    padding: 0px 0px 0px 30px;\r\n    font-family: Fira Mono, monospace;\r\n}\r\n\r\n.htmlcolor {\r\n    color: white;\r\n    float: right;\r\n    background-color: #EF6531;\r\n    width: 25%;\r\n    text-align: center;\r\n    height: 33px;\r\n    margin-top: -5px;\r\n    position: relative;\r\n    padding: 5px 0px 0px 0px;\r\n}\r\n\r\n.html:hover {\r\n    transition: 2s ease-in;\r\n}\r\n\r\n.css {\r\n    border: 1px solid rgb(48, 51, 60);\r\n    width: 70%;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    height: 35px;\r\n    padding-top: 5px;\r\n    position: relative;\r\n    -webkit-animation: example0 1s forwards;\r\n            animation: example0 1s forwards;\r\n    transition: 0.85s ease-out;\r\n}\r\n\r\n.css:hover {\r\n    transition: 2s ease-in;\r\n}\r\n\r\n.cssfont {\r\n    color: white;\r\n    padding: 0px 0px 0px 30px;\r\n    font-family: Fira Mono, monospace;\r\n}\r\n\r\n.csscolor {\r\n    color: white;\r\n    float: right;\r\n    background-color: #995DA3;\r\n    width: 25%;\r\n    text-align: center;\r\n    height: 33px;\r\n    margin-top: -5px;\r\n    position: relative;\r\n    padding: 5px 0px 0px 0px;\r\n}\r\n\r\n.bootstrap {\r\n    border: 1px solid rgb(48, 51, 60);\r\n    width: 70%;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    height: 35px;\r\n    padding-top: 5px;\r\n    position: relative;\r\n    -webkit-animation: example0 1s 0.1s forwards;\r\n            animation: example0 1s 0.1s forwards;\r\n    transition: 0.85s ease-out;\r\n}\r\n\r\n.bootstrapfont {\r\n    color: white;\r\n    padding: 0px 0px 0px 30px;\r\n    font-family: Fira Mono, monospace;\r\n}\r\n\r\n.bootstrapcolor {\r\n    color: white;\r\n    float: right;\r\n    background-color: #CA27E5;\r\n    width: 25%;\r\n    text-align: center;\r\n    height: 33px;\r\n    margin-top: -5px;\r\n    position: relative;\r\n    padding: 5px 0px 0px 0px;\r\n}\r\n\r\n.bootstrap:hover {\r\n    transition: 2s ease-in;\r\n}\r\n\r\n.javascript {\r\n    border: 1px solid rgb(48, 51, 60);\r\n    width: 70%;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    height: 35px;\r\n    padding-top: 5px;\r\n    position: relative;\r\n    -webkit-animation: example0 1s 0.1s forwards;\r\n            animation: example0 1s 0.1s forwards;\r\n    transition: 0.85s ease-out;\r\n}\r\n\r\n@-webkit-keyframes example1 {\r\n    from {\r\n        top: 500px;\r\n    }\r\n    to {\r\n        top: 0px;\r\n    }\r\n}\r\n\r\n@keyframes example1 {\r\n    from {\r\n        top: 500px;\r\n    }\r\n    to {\r\n        top: 0px;\r\n    }\r\n}\r\n\r\n.javascriptfont {\r\n    color: white;\r\n    padding: 0px 0px 0px 30px;\r\n    font-family: Fira Mono, monospace;\r\n}\r\n\r\n.javascriptcolor {\r\n    color: white;\r\n    float: right;\r\n    background-color: #E52782;\r\n    width: 25%;\r\n    text-align: center;\r\n    height: 33px;\r\n    margin-top: -5px;\r\n    padding: 5px 0px 0px 0px;\r\n}\r\n\r\n.javascript:hover {\r\n    transition: 2s ease-in;\r\n}\r\n\r\n.angular {\r\n    border: 1px solid rgb(48, 51, 60);\r\n    width: 70%;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    height: 35px;\r\n    padding-top: 5px;\r\n    -webkit-animation: example2 1s 0.2s forwards;\r\n            animation: example2 1s 0.2s forwards;\r\n    position: relative;\r\n    transition: 0.85s ease-out;\r\n}\r\n\r\n@-webkit-keyframes example2 {\r\n    from {\r\n        top: 500px;\r\n    }\r\n    to {\r\n        top: 0px;\r\n    }\r\n}\r\n\r\n@keyframes example2 {\r\n    from {\r\n        top: 500px;\r\n    }\r\n    to {\r\n        top: 0px;\r\n    }\r\n}\r\n\r\n.angularfont {\r\n    color: white;\r\n    padding: 0px 0px 0px 30px;\r\n    font-family: Fira Mono, monospace;\r\n}\r\n\r\n.angularcolor {\r\n    color: white;\r\n    float: right;\r\n    background-color: #DE0031;\r\n    width: 25%;\r\n    text-align: center;\r\n    height: 33px;\r\n    margin-top: -5px;\r\n    padding: 5px 0px 0px 0px;\r\n}\r\n\r\n.angular:hover {\r\n    transition: 2s ease-in;\r\n}\r\n\r\n.angularmaterial {\r\n    border: 1px solid rgb(48, 51, 60);\r\n    width: 70%;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    height: 35px;\r\n    padding-top: 5px;\r\n    -webkit-animation: example2 1s 0.3s forwards;\r\n            animation: example2 1s 0.3s forwards;\r\n    position: relative;\r\n    transition: 0.85s ease-out;\r\n}\r\n\r\n.angularmaterialfont {\r\n    color: white;\r\n    padding: 0px 0px 0px 30px;\r\n    font-family: Fira Mono, monospace;\r\n}\r\n\r\n.angularmaterialcolor {\r\n    color: white;\r\n    float: right;\r\n    background-color: #3F51B5;\r\n    width: 25%;\r\n    text-align: center;\r\n    height: 33px;\r\n    margin-top: -5px;\r\n    padding: 5px 0px 0px 0px;\r\n}\r\n\r\n.jquery {\r\n    border: 1px solid rgb(48, 51, 60);\r\n    width: 70%;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    height: 35px;\r\n    padding-top: 5px;\r\n    -webkit-animation: example2 1s 0.2s forwards;\r\n            animation: example2 1s 0.2s forwards;\r\n    ;\r\n    position: relative;\r\n    transition: 0.85s ease-out;\r\n}\r\n\r\n.jqueryfont {\r\n    color: white;\r\n    padding: 0px 0px 0px 30px;\r\n    font-family: Fira Mono, monospace;\r\n}\r\n\r\n.jquerycolor {\r\n    color: white;\r\n    float: right;\r\n    background-color: #1E78AB;\r\n    width: 25%;\r\n    text-align: center;\r\n    height: 33px;\r\n    margin-top: -5px;\r\n    padding: 5px 0px 0px 0px;\r\n}\r\n\r\n.jquery:hover {\r\n    transition: 2s ease-in;\r\n}\r\n\r\n.nodejs {\r\n    border: 1px solid rgb(48, 51, 60);\r\n    width: 70%;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    height: 35px;\r\n    padding-top: 5px;\r\n    -webkit-animation: example2 1s 0.3s forwards;\r\n            animation: example2 1s 0.3s forwards;\r\n    position: relative;\r\n    transition: 0.85s ease-out;\r\n}\r\n\r\n@-webkit-keyframes example3 {\r\n    from {\r\n        top: 500px;\r\n    }\r\n    to {\r\n        top: 0px;\r\n    }\r\n}\r\n\r\n@keyframes example3 {\r\n    from {\r\n        top: 500px;\r\n    }\r\n    to {\r\n        top: 0px;\r\n    }\r\n}\r\n\r\n.nodejsfont {\r\n    color: white;\r\n    padding: 0px 0px 0px 30px;\r\n    font-family: Fira Mono, monospace;\r\n}\r\n\r\n.nodejscolor {\r\n    color: white;\r\n    float: right;\r\n    background-color: #051937;\r\n    width: 25%;\r\n    text-align: center;\r\n    height: 33px;\r\n    margin-top: -5px;\r\n    padding: 5px 0px 0px 0px;\r\n}\r\n\r\n.nodejs:hover {\r\n    transition: 2s ease-in;\r\n}\r\n\r\n.firebase {\r\n    border: 1px solid rgb(48, 51, 60);\r\n    width: 70%;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    height: 35px;\r\n    padding-top: 5px;\r\n    -webkit-animation: example2 1s 0.4s forwards;\r\n            animation: example2 1s 0.4s forwards;\r\n    position: relative;\r\n    transition: 0.85s ease-out;\r\n}\r\n\r\n@-webkit-keyframes example4 {\r\n    from {\r\n        top: 500px;\r\n    }\r\n    to {\r\n        top: 0px;\r\n    }\r\n}\r\n\r\n@keyframes example4 {\r\n    from {\r\n        top: 500px;\r\n    }\r\n    to {\r\n        top: 0px;\r\n    }\r\n}\r\n\r\n.firebasefont {\r\n    color: white;\r\n    padding: 0px 0px 0px 30px;\r\n    font-family: Fira Mono, monospace;\r\n}\r\n\r\n.firebasecolor {\r\n    color: white;\r\n    float: right;\r\n    background-color: rgba(255, 193, 7, .7);\r\n    width: 25%;\r\n    text-align: center;\r\n    height: 33px;\r\n    margin-top: -5px;\r\n    padding: 5px 0px 0px 0px;\r\n}\r\n\r\n.es6 {\r\n    border: 1px solid rgb(48, 51, 60);\r\n    width: 70%;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    height: 35px;\r\n    padding-top: 5px;\r\n    -webkit-animation: example2 1s 0.4s forwards;\r\n            animation: example2 1s 0.4s forwards;\r\n    position: relative;\r\n    transition: 0.85s ease-out;\r\n}\r\n\r\n@-webkit-keyframes example5 {\r\n    from {\r\n        top: 500px;\r\n    }\r\n    to {\r\n        top: 0px;\r\n    }\r\n}\r\n\r\n@keyframes example5 {\r\n    from {\r\n        top: 500px;\r\n    }\r\n    to {\r\n        top: 0px;\r\n    }\r\n}\r\n\r\n.es6font {\r\n    color: white;\r\n    padding: 0px 0px 0px 30px;\r\n    font-family: Fira Mono, monospace;\r\n}\r\n\r\n.es6color {\r\n    color: white;\r\n    float: right;\r\n    background-color: rgba(96, 125, 139, .7);\r\n    width: 25%;\r\n    text-align: center;\r\n    height: 33px;\r\n    margin-top: -5px;\r\n    padding: 5px 0px 0px 0px;\r\n}\r\n\r\n.contactformfont1 {\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.contactform {\r\n    border: 1px solid rgb(48, 51, 60);\r\n    width: 70%;\r\n    margin: auto;\r\n    position: relative;\r\n    top: 10px;\r\n    -webkit-animation: example3 1.5s forwards;\r\n            animation: example3 1.5s forwards;\r\n    transition: 0.85s ease-out;\r\n}\r\n\r\n@keyframes example3 {\r\n    from {\r\n        top: 500px;\r\n    }\r\n    to {\r\n        top: 15px;\r\n    }\r\n}\r\n\r\n.hire {\r\n    text-align: center;\r\n    color: white;\r\n    font-size: 20px;\r\n    margin: 0px 0px 10px 0px;\r\n}\r\n\r\n.contactbutton {\r\n    margin: auto;\r\n    display: block;\r\n    background-color: black;\r\n    color: White;\r\n}\r\n\r\na,\r\n.contactbutton {\r\n    text-decoration: none;\r\n}\r\n\r\n.contactbutton:hover {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    background-color: #72E57C;\r\n    font-size: 17px;\r\n    border: 1px solid#1E90FF;\r\n    border-radius: 5px;\r\n    transition: 0.6s ease-in;\r\n    margin: auto;\r\n}\r\n\r\n.contactform {\r\n    height: 130px;\r\n    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);\r\n}\r\n\r\n.html:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    transition: 0.85s ease-in-out;\r\n}\r\n\r\n.javascript:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    transition: 0.85s ease-in-out;\r\n}\r\n\r\n.css:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    transition: 0.85s ease-in-out;\r\n}\r\n\r\n.bootstrap:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    transition: 0.85s ease-in-out;\r\n}\r\n\r\n.jquery:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    transition: 0.85s ease-in;\r\n}\r\n\r\n.angular:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    transition: 0.85s ease-in-out;\r\n}\r\n\r\n.angularmaterial:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    transition: 0.85s ease-in-out;\r\n}\r\n\r\n.nodejs:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    transition: 0.85s ease-in-out;\r\n}\r\n\r\n.firebase:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    transition: 0.85s ease-in-out;\r\n}\r\n\r\n.es6:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    transition: 0.85s ease-in-out;\r\n}\r\n\r\n@media screen and (min-width: 840px) {\r\n    .introduction {\r\n        border: 1px solid rgb(48, 51, 60);\r\n        width: 70%;\r\n        margin: auto;\r\n        margin-top: 20px;\r\n        height: 100px;\r\n        padding: 20px 0px 0px 0px;\r\n    }\r\n    .font1 {\r\n        color: white;\r\n        text-align: center;\r\n    }\r\n    .font2 {\r\n        color: white;\r\n        text-align: center;\r\n    }\r\n    .home {\r\n        width: 120px;\r\n        padding: 0px 30px 0px 0px;\r\n        font-size: 16px;\r\n        background-color: black;\r\n        color: white;\r\n        position: relative;\r\n        left: 11%;\r\n        margin-top: 150px;\r\n        height: 35px;\r\n    }\r\n    .experience {\r\n        width: 120px;\r\n        padding: 0px 0px 0px 10px;\r\n        font-size: 16px;\r\n        background-color: black;\r\n        color: white;\r\n        position: relative;\r\n        left: -11%;\r\n        margin-top: 150px;\r\n        height: 35px;\r\n    }\r\n    .skillrow1,\r\n    .skillrow2,\r\n    .skillrow3,\r\n    .skillrow4,\r\n    .skillrow5,\r\n    .skillrow6 {\r\n        display: flex;\r\n    }\r\n    .topbutton {\r\n        width: 90%;\r\n        border: none;\r\n        margin: auto;\r\n        margin-top: -110px;\r\n    }\r\n    .html,\r\n    .css {\r\n        width: 34%;\r\n        margin: auto;\r\n        margin-top: 10px;\r\n    }\r\n    .html,\r\n    .javascript,\r\n    .angular {\r\n        position: relative;\r\n        left: 7%;\r\n    }\r\n    .css,\r\n    .bootstrap,\r\n    .jquery {\r\n        position: relative;\r\n        left: -7%;\r\n    }\r\n    .javascript,\r\n    .bootstrap {\r\n        width: 34%;\r\n        margin: auto;\r\n        margin-top: 10px;\r\n    }\r\n    .angular,\r\n    .jquery {\r\n        width: 34%;\r\n        margin: auto;\r\n        margin-top: 10px;\r\n    }\r\n    .firebase,\r\n    .es6 {\r\n        width: 34%;\r\n        margin: auto;\r\n        margin-top: 10px;\r\n    }\r\n    .angularmaterial {\r\n        width: 34%;\r\n        margin: auto;\r\n        margin-top: 10px;\r\n        position: relative;\r\n        left: 18%;\r\n    }\r\n    .angularmaterial {\r\n        width: 34%;\r\n        margin: auto;\r\n        margin-top: 10px;\r\n    }\r\n    .angularmaterial {\r\n        width: 34%;\r\n        margin-top: 10px;\r\n    }\r\n    .nodejs {\r\n        width: 34%;\r\n        position: relative;\r\n        left: -18%;\r\n        margin-top: -35px;\r\n    }\r\n    .es6 {\r\n        width: 34%;\r\n        position: relative;\r\n        left: -18%;\r\n        margin-top: -35px;\r\n    }\r\n    .firebase {\r\n        width: 34%;\r\n        margin: auto;\r\n        margin-top: 10px;\r\n        position: relative;\r\n        left: 18%;\r\n    }\r\n    .firebase {\r\n        width: 34%;\r\n        margin: auto;\r\n        margin-top: 10px;\r\n    }\r\n    .firebase {\r\n        width: 34%;\r\n        margin-top: 10px;\r\n    }\r\n    .contactform {\r\n        border: 1px solid rgb(48, 51, 60);\r\n        width: 70%;\r\n        top: 20px;\r\n        background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);\r\n        margin: auto;\r\n    }\r\n    .contactformfont1 {\r\n        font-size: 20px;\r\n        color: black;\r\n        font-family: sans-serif;\r\n    }\r\n    .hire {\r\n        font-size: 20px;\r\n    }\r\n    .contactbutton {\r\n        background-color: black;\r\n        padding: 0px 10px 0px 10px;\r\n        width: 20%;\r\n        outline: none;\r\n        transition: 1s ease-out;\r\n        color: white;\r\n        margin: auto;\r\n    }\r\n    .contactbutton:hover {\r\n        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n        background-color: #72E57C;\r\n        font-size: 17px;\r\n        border: 1px solid#1E90FF;\r\n        border-radius: 5px;\r\n        transition: 0.6s ease-in;\r\n        margin: auto;\r\n    }\r\n    a {\r\n        text-decoration: none;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"total\">\n    <div class=\"topbutton\">\n\n        <a routerLink=\"/profile\"> <button mat-raised-button class=\"home\"> <i class=\"material-icons\">\n                keyboard_arrow_left</i>Home\n                </button></a>\n        <a routerLink=\"/experience\"><button mat-raised-button class=\"experience\" >Experience<i class=\"material-icons\">\n                keyboard_arrow_right\n                </i>\n            </button></a>\n    </div>\n\n    <div class=\"introduction\">\n        <!-- <div class=\"font1\">These are the few of the skills i am good at.I am a contiuous learner, and the list keep </div>\n    <div class=\"font2\">growing</div> -->\n        <div class=\"description\">\n            These are few of the skills, I am good at. I am a continuous learner, and the list keeps growing..\n        </div>\n    </div>\n\n    <div class=\"skillrow1\">\n        <div class=\"html\">\n            <span class=\"htmlfont\"> HTML5</span>\n            <span class=\"htmlcolor\">80%</span>\n        </div>\n\n\n        <div class=\"css\">\n            <span class=\"cssfont\"> CSS</span>\n            <span class=\"csscolor\">80%</span>\n        </div>\n    </div>\n\n\n    <div class=\"skillrow2\">\n        <div class=\"javascript\">\n            <span class=\"javascriptfont\"> Javascript</span>\n            <span class=\"javascriptcolor\">70%</span>\n        </div>\n\n\n        <div class=\"bootstrap\">\n            <span class=\"bootstrapfont\"> Bootstrap</span>\n            <span class=\"bootstrapcolor\">80%</span>\n        </div>\n    </div>\n\n\n    <div class=\"skillrow3\">\n        <div class=\"angular\">\n            <span class=\"angularfont\">Angular</span>\n            <span class=\"angularcolor\">70%</span>\n        </div>\n\n\n        <div class=\"jquery\">\n            <span class=\"jqueryfont\"> Jquery</span>\n            <span class=\"jquerycolor\">60%</span>\n        </div>\n    </div>\n\n\n\n    <div class=\"skillrow4\">\n        <div class=\"angularmaterial\">\n            <span class=\"angularmaterialfont\"> Angular Material</span>\n            <span class=\"angularmaterialcolor\">80%</span>\n        </div>\n    </div>\n\n    <div class=\"skillrow5\">\n        <div class=\"nodejs\">\n            <span class=\"nodejsfont\"> Node Js</span>\n            <span class=\"nodejscolor\">75%</span>\n        </div>\n    </div>\n    <div class=\"skillrow6\">\n        <div class=\"firebase\">\n            <span class=\"firebasefont\">Firebase</span>\n            <span class=\"firebasecolor\">75%</span>\n        </div>\n    </div>\n\n\n    <div class=\"skillrow7\">\n        <div class=\"es6\">\n            <span class=\"es6font\">ES6</span>\n            <span class=\"es6color\">75%</span>\n        </div>\n    </div>\n\n\n    <div class=\"contactform\">\n        <div class=\"contactformfont1\">Do you want to build something amazing for you</div>\n        <div class=\"hire\">I Am Open For Hire</div>\n        <a routerLink=\"/contact\"> <button mat-raised-button class=\"contactbutton\">Contact\n            </button></a>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
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

var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
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
    // firebaseConfig: {
    //   apiKey: "AIzaSyCzKPFkYHsiYD3HEYdO-Qdo1-HF8y0RccU",
    //   authDomain: "myportfolio-6f34e.firebaseapp.com",
    //   databaseURL: "https://myportfolio-6f34e.firebaseio.com",
    //   projectId: "myportfolio-6f34e",
    //   storageBucket: "",
    //   messagingSenderId: "795406131605"
    // },
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

module.exports = __webpack_require__(/*! /home/rajesh/Desktop/myportfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map