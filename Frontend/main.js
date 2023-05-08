(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ForDeveloper\WebProjet\Fullstack\Event\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "5+ba":
/*!********************************************!*\
  !*** ./src/app/shared/global-constants.ts ***!
  \********************************************/
/*! exports provided: GlobalConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalConstants", function() { return GlobalConstants; });
class GlobalConstants {
}
GlobalConstants.genericError = 'Something went wrong!! PLease try again!!';
GlobalConstants.unauthorized = 'You are not authorized to view this page!';
GlobalConstants.productExistError = 'Product already exists';
GlobalConstants.productAdded = 'Product added successfully';
GlobalConstants.nameRegex = '[a-zA-Z0-9 ]*';
GlobalConstants.emailRegex = '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';
GlobalConstants.contactNumberRegex = '^[e0-9]{10,10}$';
GlobalConstants.error = 'error';


/***/ }),

/***/ "84zT":
/*!******************************************************!*\
  !*** ./src/app/best-seller/best-seller.component.ts ***!
  \******************************************************/
/*! exports provided: BestSellerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestSellerComponent", function() { return BestSellerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class BestSellerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BestSellerComponent.ɵfac = function BestSellerComponent_Factory(t) { return new (t || BestSellerComponent)(); };
BestSellerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BestSellerComponent, selectors: [["app-best-seller"]], decls: 0, vars: 0, template: function BestSellerComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZXN0LXNlbGxlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../forgot-password/forgot-password.component */ "XY6P");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.component */ "vtpD");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup/signup.component */ "rd1V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _best_seller_best_seller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../best-seller/best-seller.component */ "84zT");









class HomeComponent {
    constructor(dialog, router, userService) {
        this.dialog = dialog;
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        if (localStorage.getItem('token') !== null) {
            this.userService.checkToken().subscribe((resp) => {
                this.router.navigate(['/cafe/dashboard']);
            }, (error) => {
                console.log(error);
            });
        }
    }
    signupAction() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.width = '550px';
        this.dialog.open(_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"], dialogConfig);
    }
    forgotPasswordAction() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.width = '550px';
        this.dialog.open(_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_1__["ForgotPasswordComponent"], dialogConfig);
    }
    loginAction() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.width = '550px';
        this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], dialogConfig);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 19, vars: 0, consts: [[1, "bg-image"], [1, "wrapper", "sticky"], [1, "navbar-fixed-top"], ["href", "#", 1, "logo"], [3, "click"], ["id", "signup", 1, "footer"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-best-seller");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " MARKET ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_8_listener() { return ctx.loginAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_11_listener() { return ctx.signupAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Sign-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_14_listener() { return ctx.forgotPasswordAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Make With \uD83D\uDC99 By Scott");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, directives: [_best_seller_best_seller_component__WEBPACK_IMPORTED_MODULE_7__["BestSellerComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif;\n  margin: 0;\n}\n\n\n\n.header[_ngcontent-%COMP%] {\n  padding: 60px;\n  text-align: center;\n  background: #1abc9c;\n  color: white;\n}\n\n\n\n.navbar[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #333;\n}\n\n\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  padding: 14px 20px;\n  text-decoration: none;\n  text-align: center;\n}\n\n\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n\n\n\n\n.side[_ngcontent-%COMP%] {\n  flex: 30%;\n  background-color: #f1f1f1;\n  padding: 20px;\n}\n\n\n\n.main[_ngcontent-%COMP%] {\n  flex: 70%;\n  background-color: white;\n  padding: 20px;\n}\n\n\n\n.fakeimg[_ngcontent-%COMP%] {\n  background-color: #aaa;\n  width: 100%;\n  padding: 20px;\n}\n\n\n\n.footer[_ngcontent-%COMP%] {\n  padding: 6px;\n  text-align: center;\n  color: white;\n  background: #2a87c9;\n}\n\n\n\n@media screen and (max-width: 700px) {\n  .row[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n\n\n.column[_ngcontent-%COMP%] {\n  flex: 25%;\n  padding: 20px;\n}\n\n\n\n@media screen and (max-width: 992px) {\n  .column[_ngcontent-%COMP%] {\n    flex: 50%;\n  }\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #384047;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  height: 65px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #1c5ec7;\n}\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  width: 90%;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 1.5em;\n}\n\na.logo[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #ffffff;\n  position: relative;\n  font-size: 1.25em;\n}\n\na[_ngcontent-%COMP%]::after {\n  content: \"\";\n  top: 80%;\n  border-bottom: 2px solid #F8E71C;\n  transition: all 0.35s;\n  position: absolute;\n}\n\na[_ngcontent-%COMP%]:hover::after {\n  transition: all 0.35s;\n}\n\na[_ngcontent-%COMP%]::after {\n  right: 50%;\n  left: 50%;\n}\n\na[_ngcontent-%COMP%]:hover::after {\n  right: 0;\n  left: 0;\n}\n\n@media (max-width: 1024px) {\n  .wrapper[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  nav[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  a.logo[_ngcontent-%COMP%] {\n    margin-top: 1.5em;\n    margin-bottom: 1.5em;\n    margin-right: 0px;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 1em;\n    justify-content: space-between;\n  }\n\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n}\n\n@media (max-width: 768px) {\n  a.logo[_ngcontent-%COMP%] {\n    margin: 1.5em;\n  }\n\n  ul[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 0.3em;\n    text-align: center;\n  }\n\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n}\n\n.sticky[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100% !important;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.bg-image[_ngcontent-%COMP%] {\n  \n  background-image: url('market.jpg');\n  \n  filter: blur(3px);\n  -webkit-filter: blur(3px);\n  \n  height: 100%;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n\n\n.bg-text[_ngcontent-%COMP%] {\n  background-color: black;\n  \n  background-color: rgba(0, 0, 0, 0.8);\n  \n  color: white;\n  font-weight: bold;\n  border: 3px solid #f1f1f1;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 55%;\n  padding: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBLG1CQUFBOztBQUNBO0VBRUUsc0hBQUE7RUFFQSxTQUFBO0FBREY7O0FBSUEsc0JBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQSxpQ0FBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBLG1DQUFBOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBLDBCQUFBOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUEscUJBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBLDREQUFBOztBQUNBLHdCQUFBOztBQUNBO0VBQ0UsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBLGdCQUFBOztBQUNBO0VBQ0UsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBLHNDQUFBOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBLFdBQUE7O0FBQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQSwrSUFBQTs7QUFDQTtFQUNFO0lBQ0Usc0JBQUE7RUFERjtBQUNGOztBQUlBO0VBQ0Usc0JBQUE7QUFGRjs7QUFLQSw0QkFBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0EsOEJBQUE7O0FBQ0E7RUFDRSxTQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUtBLGdGQUFBOztBQUNBO0VBQ0U7SUFDRSxTQUFBO0VBRkY7QUFDRjs7QUFLQTtFQUNFLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtBQUhGOztBQU1BO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFIRjs7QUFNQTtFQUNFLFFBQUE7RUFDQSxPQUFBO0FBSEY7O0FBTUE7RUFDRTtJQUNFLFlBQUE7RUFIRjs7RUFNQTtJQUNFLHNCQUFBO0lBQ0EsbUJBQUE7RUFIRjs7RUFNQTtJQUNFLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxpQkFBQTtFQUhGOztFQU1BO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsOEJBQUE7RUFIRjs7RUFNQTtJQUNFLGdCQUFBO0VBSEY7QUFDRjs7QUFNQTtFQUNFO0lBQ0UsYUFBQTtFQUpGOztFQU9BO0lBQ0Usc0JBQUE7RUFKRjs7RUFPQTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtFQUpGOztFQU9BO0lBQ0UsZ0JBQUE7RUFKRjtBQUNGOztBQU9BO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7QUFMRjs7QUFRQTtFQUNFLHNCQUFBO0FBTEY7O0FBT0E7RUFDRSxtQkFBQTtFQUNBLG1DQUFBO0VBRUEsd0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBRUEsZ0JBQUE7RUFDQSxZQUFBO0VBRUEsc0NBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFQRjs7QUFVQSxrREFBQTs7QUFDQTtFQUNFLHVCQUFBO0VBQThCLG1CQUFBO0VBQzlCLG9DQUFBO0VBQW9DLGdDQUFBO0VBQ3BDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBRUEsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQU5GIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogU3R5bGUgdGhlIGJvZHkgKi9cbmJvZHkge1xuICAvLyBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIFxuICBtYXJnaW46IDA7XG59XG5cbi8qIEhlYWRlci9sb2dvIFRpdGxlICovXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMWFiYzljO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFN0eWxlIHRoZSB0b3AgbmF2aWdhdGlvbiBiYXIgKi9cbi5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuXG4vKiBTdHlsZSB0aGUgbmF2aWdhdGlvbiBiYXIgbGlua3MgKi9cbi5uYXZiYXIgYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTRweCAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQ2hhbmdlIGNvbG9yIG9uIGhvdmVyICovXG4ubmF2YmFyIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIENvbHVtbiBjb250YWluZXIgKi9cbi5yb3cgeyAgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLyogQ3JlYXRlIHR3byB1bmVxdWFsIGNvbHVtbnMgdGhhdCBzaXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuLyogU2lkZWJhci9sZWZ0IGNvbHVtbiAqL1xuLnNpZGUge1xuICBmbGV4OiAzMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi8qIE1haW4gY29sdW1uICovXG4ubWFpbiB7XG4gIGZsZXg6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi8qIEZha2UgaW1hZ2UsIGp1c3QgZm9yIHRoaXMgZXhhbXBsZSAqL1xuLmZha2VpbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLyogRm9vdGVyICovXG4uZm9vdGVyIHtcbiAgcGFkZGluZzogNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzJhODdjOTtcbn1cblxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSB3aGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDcwMHB4IHdpZGUsIG1ha2UgdGhlIHR3byBjb2x1bW5zIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAucm93LCAubmF2YmFyIHsgICBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBDb250YWluZXIgZm9yIGZsZXhib3hlcyAqL1xuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLyogQ3JlYXRlIGZvdXIgZXF1YWwgY29sdW1ucyAqL1xuLmNvbHVtbiB7XG4gIGZsZXg6IDI1JTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLyogT24gc2NyZWVucyB0aGF0IGFyZSA5OTJweCB3aWRlIG9yIGxlc3MsIGdvIGZyb20gZm91ciBjb2x1bW5zIHRvIHR3byBjb2x1bW5zICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY29sdW1uIHtcbiAgICBmbGV4OiA1MCU7XG4gIH1cbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODQwNDc7XG59XG5cbi53cmFwcGVyIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM1ZWM3O1xufVxuXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogOTAlO1xufVxuXG51bCBsaSBhIHtcbiAgbWFyZ2luLWxlZnQ6IDEuNWVtO1xufVxuXG5hLmxvZ28ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbnVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG59XG5cbmE6OmFmdGVyIHtcbiAgY29udGVudDpcIlwiO1xuICB0b3A6IDgwJTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGOEU3MUM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cztcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5hOmhvdmVyOjphZnRlciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjM1cztcbn1cblxuYTo6YWZ0ZXIge1xuICByaWdodDogNTAlO1xuICBsZWZ0OiA1MCU7XG59XG5cbmE6aG92ZXI6OmFmdGVyIHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLndyYXBwZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgbmF2IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIGEubG9nbyB7XG4gICAgbWFyZ2luLXRvcDogMS41ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbiAgXG4gIHVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIFxuICB1bCBsaSBhIHtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICBhLmxvZ28ge1xuICAgIG1hcmdpbjogMS41ZW07XG4gIH1cbiAgXG4gIHVsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIFxuICB1bCBsaSB7XG4gICAgbWFyZ2luOiAwLjNlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgXG4gIHVsIGxpIGEge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIH1cbn1cblxuLnN0aWNreSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWljb24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJnLWltYWdlIHtcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9tYXJrZXQuanBnXCIpO1xuICBcbiAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xuICBmaWx0ZXI6IGJsdXIoM3B4KTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoM3B4KTtcbiAgXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIGhlaWdodDogMTAwJTsgXG4gIFxuICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4vKiBQb3NpdGlvbiB0ZXh0IGluIHRoZSBtaWRkbGUgb2YgdGhlIHBhZ2UvaW1hZ2UgKi9cbi5iZy10ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC44KTsgLyogQmxhY2sgdy9vcGFjaXR5L3NlZS10aHJvdWdoICovXG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC8vIHotaW5kZXg6IDI7XG4gIHdpZHRoOiA1NSU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false,
    apiURL: 'http://localhost:8088'
};


/***/ }),

/***/ "C0NU":
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AccordionDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
        setTimeout(() => this.checkOpenLinks());
    }
    closeOtherLinks(selectedLink) {
        this.navlinks.forEach((link) => {
            if (link !== selectedLink) {
                link.selected = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    checkOpenLinks() {
        this.navlinks.forEach((link) => {
            if (link.group) {
                const routeUrl = this.router.url;
                const currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.selected = true;
                    this.closeOtherLinks(link);
                }
            }
        });
    }
    ngAfterContentChecked() {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]))
            .subscribe(e => this.checkOpenLinks());
    }
}
AccordionDirective.ɵfac = function AccordionDirective_Factory(t) { return new (t || AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
AccordionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: AccordionDirective, selectors: [["", "appAccordion", ""]] });


/***/ }),

/***/ "JNRg":
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.directive */ "C0NU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AccordionLinkDirective {
    constructor(nav) {
        this._selected = false;
        this.nav = nav;
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.selected = !this.selected;
    }
}
AccordionLinkDirective.ɵfac = function AccordionLinkDirective_Factory(t) { return new (t || AccordionLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionDirective"])); };
AccordionLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AccordionLinkDirective, selectors: [["", "appAccordionLink", ""]], hostVars: 2, hostBindings: function AccordionLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.selected);
    } }, inputs: { group: "group", selected: "selected" } });


/***/ }),

/***/ "Kmmn":
/*!**************************************!*\
  !*** ./src/app/shared/menu-items.ts ***!
  \**************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const MENUITEMS = [
    { state: 'dashboard', name: 'Dashboard', icon: 'dashboard', role: '' },
    {
        state: 'category',
        name: 'Manage Categories',
        icon: 'category',
        role: 'admin',
    },
    { state: 'product', name: 'Manage Products', icon: 'grass', role: 'admin' },
    { state: 'event', name: 'Manage events', icon: 'grass', role: 'admin' },
    { state: 'order', name: 'Manage Orders', icon: 'list_alt', role: '' },
    { state: 'bill', name: 'View Bills', icon: 'money', role: '' },
    { state: 'user', name: 'Manage Users', icon: 'people', role: 'admin' },
];
class MenuItems {
    getMenuItems() {
        return MENUITEMS;
    }
}
MenuItems.ɵfac = function MenuItems_Factory(t) { return new (t || MenuItems)(); };
MenuItems.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuItems, factory: MenuItems.ɵfac });


/***/ }),

/***/ "Mq+F":
/*!****************************************************************************************!*\
  !*** ./src/app/material-component/dialog/change-password/change-password.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/global-constants */ "5+ba");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/snackbar.service */ "p20J");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













function ChangePasswordComponent_mat_error_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChangePasswordComponent_mat_error_7_span_1_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.changePasswordForm.controls.oldPassword.errors.required);
} }
function ChangePasswordComponent_mat_error_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChangePasswordComponent_mat_error_12_span_1_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.changePasswordForm.controls.newPassword.errors.required);
} }
function ChangePasswordComponent_mat_error_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ChangePasswordComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChangePasswordComponent_mat_error_17_span_1_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.changePasswordForm.controls.confirmPassword.errors.required);
} }
function ChangePasswordComponent_mat_hint_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Passwords do not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ChangePasswordComponent {
    constructor(fb, userService, dialogRef, ngxService, snackBar) {
        this.fb = fb;
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.ngxService = ngxService;
        this.snackBar = snackBar;
        this.changePasswordForm = _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"];
    }
    ngOnInit() {
        this.changePasswordForm = this.fb.group({
            oldPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            newPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            confirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
        });
    }
    validateSubmit() {
        if (this.changePasswordForm.controls.newPassword.value !==
            this.changePasswordForm.controls.confirmPassword.value) {
            console.log(this.changePasswordForm.controls.newPassword.value, this.changePasswordForm.controls.confirmPassword.value);
            return true;
        }
        else {
            console.log(this.changePasswordForm.controls.newPassword.value, this.changePasswordForm.controls.confirmPassword.value);
            return false;
        }
    }
    handleSubmit() {
        this.ngxService.start();
        let formData = this.changePasswordForm.value;
        let data = {
            oldPassword: formData.oldPassword,
            newPassword: formData.newPassword,
            confirmPassword: formData.confirmPassword,
        };
        this.userService.changePassword(data).subscribe((resp) => {
            this.ngxService.stop();
            this.responseMessage = resp === null || resp === void 0 ? void 0 : resp.message;
            this.dialogRef.close();
            this.snackBar.openSnackBar(this.responseMessage, 'success');
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            console.log(error);
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genericError;
            }
            this.snackBar.openSnackBar(this.responseMessage, src_app_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].error);
        });
    }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_5__["NgxUiLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackbarService"])); };
ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 24, vars: 6, consts: [[3, "formGroup"], ["fxFlex", "", "fxLayout", "column"], ["appearance", "fill", "fxFlex", ""], ["type", "password", "matInput", "", "formControlName", "oldPassword", "required", ""], [4, "ngIf"], ["type", "password", "matInput", "", "formControlName", "newPassword", "required", ""], ["type", "password", "matInput", "", "formControlName", "confirmPassword", "required", ""], ["align", "left"], ["mat-raised-button", "", "color", "blue", 3, "disabled", "click"], ["mat-raised-button", "", "color", "blue", "mat-dialog-close", ""]], template: function ChangePasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Old Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ChangePasswordComponent_mat_error_7_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ChangePasswordComponent_mat_error_12_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ChangePasswordComponent_mat_error_17_Template, 2, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ChangePasswordComponent_mat_hint_18_Template, 2, 0, "mat-hint", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-dialog-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_20_listener() { return ctx.handleSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Update ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.changePasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.controls.oldPassword.touched && ctx.changePasswordForm.controls.oldPassword.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.controls.newPassword.touched && ctx.changePasswordForm.controls.newPassword.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.controls.confirmPassword.touched && ctx.changePasswordForm.controls.confirmPassword.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.validateSubmit());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.validateSubmit() && ctx.changePasswordForm.valid && ctx.changePasswordForm.dirty);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatHint"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "MwDm":
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ "xXHC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionAnchorDirective"]; });

/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "JNRg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]; });

/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "C0NU");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]; });






/***/ }),

/***/ "P42M":
/*!***********************************************************!*\
  !*** ./src/app/layouts/full/sidebar/sidebar.component.ts ***!
  \***********************************************************/
/*! exports provided: AppSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarComponent", function() { return AppSidebarComponent; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var src_app_shared_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/menu-items */ "Kmmn");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/accordion/accordion.directive */ "C0NU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/accordion/accordionanchor.directive */ "xXHC");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");











const _c0 = function (a1) { return ["/cafe/", a1]; };
function AppSidebarComponent_mat_list_item_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, menuItem_r1.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menuItem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menuItem_r1.name);
} }
function AppSidebarComponent_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_1_a_1_Template, 6, 5, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r1.role === "" || menuItem_r1.role === ctx_r0.tokenPayload.role);
} }
class AppSidebarComponent {
    constructor(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.token = localStorage.getItem('token');
        this.tokenPayload = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(this.token);
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
AppSidebarComponent.ɵfac = function AppSidebarComponent_Factory(t) { return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"])); };
AppSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppSidebarComponent, selectors: [["app-sidebar"]], decls: 2, vars: 1, consts: [["appAccordion", ""], ["appAccordion", "", "routerLinkActive", "selected", 4, "ngFor", "ngForOf"], ["appAccordion", "", "routerLinkActive", "selected"], ["appAccordionToggle", "", 3, "routerLink", 4, "ngIf"], ["appAccordionToggle", "", 3, "routerLink"], ["fxFlex", ""]], template: function AppSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-nav-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_1_Template, 2, 1, "mat-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItems.getMenuItems());
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatNavList"], _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_5__["AccordionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_8__["AccordionAnchorDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"]], styles: ["a[_ngcontent-%COMP%] {\n  background-color: #1c5ec7;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM1ZWM3O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"] });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion */ "MwDm");
/* harmony import */ var _menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items */ "Kmmn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_menu_items__WEBPACK_IMPORTED_MODULE_1__["MenuItems"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_accordion__WEBPACK_IMPORTED_MODULE_0__["AccordionAnchorDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_0__["AccordionLinkDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_0__["AccordionDirective"]], exports: [_accordion__WEBPACK_IMPORTED_MODULE_0__["AccordionAnchorDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_0__["AccordionLinkDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_0__["AccordionDirective"]] }); })();


/***/ }),

/***/ "RxpE":
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "widY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "P42M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");











/** @title Responsive sidenav */
class FullComponent {
    constructor(changeDetectorRef, media) {
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngAfterViewInit() { }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"])); };
FullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full-layout"]], decls: 17, vars: 5, consts: [[1, "main-container"], ["color", "", 1, "topbar", "telative"], [1, "navbar-header"], ["mat-icon-button", "", "value", "sidebarclosed", 2, "vertical-align", "bottom", 3, "click"], ["fxShow", "false", "fxShow.gt-xs", ""], ["fxFlex", ""], [1, "example-sidenav-container"], ["id", "snav", "fixedTopGap", "0", 1, "dark-sidebar", "pl-xs", 3, "mode", "opened", "disableClose"], ["snav", ""], [1, "page-wrapper"], [1, "page-content"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " MARKET ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-sidenav-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-sidenav", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-sidenav-content", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 0 : 0, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "side" : "over")("opened", ctx.mobileQuery.matches)("disableClose", ctx.mobileQuery.matches);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["AppHeaderComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenav"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["AppSidebarComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterOutlet"]], styles: [".topbar[_ngcontent-%COMP%] {\n  background-color: #1c5ec7;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmdWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtBQUNGIiwiZmlsZSI6ImZ1bGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wYmFye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWM1ZWM3O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-ui-loader */ "gren");



class AppComponent {
    constructor() {
        this.title = 'Frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-ui-loader");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_2__["ɵb"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TAl4":
/*!**********************************************************************************!*\
  !*** ./src/app/material-component/dialog/confirmation/confirmation.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class ConfirmationComponent {
    constructor(dialogData) {
        this.dialogData = dialogData;
        this.onEmitStatusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.details = {};
    }
    ngOnInit() {
        if (this.dialogData) {
            this.details = this.dialogData;
        }
    }
    handleChangeAction() {
        this.onEmitStatusChange.emit();
    }
}
ConfirmationComponent.ɵfac = function ConfirmationComponent_Factory(t) { return new (t || ConfirmationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationComponent, selectors: [["app-confirmation"]], decls: 8, vars: 1, consts: [[1, "mat-typography"], ["align", "end"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "mat-dialog-close", ""]], template: function ConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-actions", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationComponent_Template_button_click_4_listener() { return ctx.handleChangeAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Yes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Are you sure you want to ", ctx.details.message, " ?");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["h5[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6ImNvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImg1IHtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuIl19 */"] });


/***/ }),

/***/ "XY6P":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/global-constants */ "5+ba");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/snackbar.service */ "p20J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














function ForgotPasswordComponent_mat_error_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ForgotPasswordComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ForgotPasswordComponent_mat_error_11_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ForgotPasswordComponent_mat_error_11_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.forgotPasswordForm.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.forgotPasswordForm.controls.email.erros.pattern);
} }
class ForgotPasswordComponent {
    constructor(fb, 
    // private router: Router,
    userService, snackBar, dialogRef, ngxService) {
        this.fb = fb;
        this.userService = userService;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.ngxService = ngxService;
        this.forgotPasswordForm = _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"];
    }
    ngOnInit() {
        this.forgotPasswordForm = this.fb.group({
            email: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].emailRegex)],
            ],
        });
    }
    handleSubmit() {
        this.ngxService.start();
        let formData = this.forgotPasswordForm.value;
        let data = {
            email: formData.email,
        };
        this.userService.forgotPassword(data).subscribe((resp) => {
            this.ngxService.stop();
            this.responseMessage = resp === null || resp === void 0 ? void 0 : resp.message;
            this.dialogRef.close();
            this.snackBar.openSnackBar(this.responseMessage, '');
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = _shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genericError;
            }
            this.snackBar.openSnackBar(this.responseMessage, _shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].error);
        });
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_6__["NgxUiLoaderService"])); };
ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 17, vars: 3, consts: [["color", "primary"], ["fxLayout", "row"], [1, "title-center"], [1, "mat-typography"], [3, "formGroup"], ["fxFlex", "", "fxLayout", "column"], ["appearance", "fill", "fxFlex", ""], ["type", "email", "matInput", "", "formControlName", "email", "required", ""], [4, "ngIf"], ["align", "center"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", ""]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-toolbar-row", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-dialog-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ForgotPasswordComponent_mat_error_11_Template, 3, 2, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-dialog-actions", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_button_click_13_listener() { return ctx.handleSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Send Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.forgotPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.forgotPasswordForm.controls.email.touched && ctx.forgotPasswordForm.controls.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !(ctx.forgotPasswordForm.valid && ctx.forgotPasswordForm.dirty));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/material-module */ "qAUw");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _best_seller_best_seller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./best-seller/best-seller.component */ "84zT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/full/full.component */ "RxpE");
/* harmony import */ var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layouts/full/header/header.component */ "widY");
/* harmony import */ var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layouts/full/sidebar/sidebar.component */ "P42M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "XY6P");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _services_token_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/token-interceptor.interceptor */ "zzpP");
/* harmony import */ var _shared_accordion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/accordion */ "MwDm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");






















const ngx_ui_loader_config = {
    text: 'Loading...',
    textColor: '#FFFFFF',
    textPosition: 'center-center',
    pbColor: 'red',
    bgsColor: 'red',
    fgsColor: 'red',
    fgsType: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_15__["SPINNER"].chasingDots,
    fgsSize: 100,
    pbDirection: ngx_ui_loader__WEBPACK_IMPORTED_MODULE_15__["PB_DIRECTION"].leftToRight,
    pbThickness: 5,
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
            useClass: _services_token_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_18__["TokenInterceptorInterceptor"],
            multi: true,
        },
        _shared_accordion__WEBPACK_IMPORTED_MODULE_19__["AccordionLinkDirective"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_15__["NgxUiLoaderModule"].forRoot(ngx_ui_loader_config),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _best_seller_best_seller_component__WEBPACK_IMPORTED_MODULE_6__["BestSellerComponent"],
        _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_10__["FullComponent"],
        _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_11__["AppHeaderComponent"],
        _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["AppSidebarComponent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"],
        _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _shared_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], ngx_ui_loader__WEBPACK_IMPORTED_MODULE_15__["NgxUiLoaderModule"]] }); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AuthService {
    constructor(router) {
        this.router = router;
    }
    isAuthenticated() {
        const token = localStorage.getItem('token');
        if (!token) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mReP":
/*!*************************************************!*\
  !*** ./src/app/services/route-guard.service.ts ***!
  \*************************************************/
/*! exports provided: RouteGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuardService", function() { return RouteGuardService; });
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var _shared_global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/global-constants */ "5+ba");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./snackbar.service */ "p20J");






class RouteGuardService {
    constructor(auth, router, snackBar) {
        this.auth = auth;
        this.router = router;
        this.snackBar = snackBar;
    }
    canActivate(route) {
        let expectedRoleArray = route.data;
        expectedRoleArray = expectedRoleArray.expectedRole;
        const token = localStorage.getItem('token');
        let tokenPayload;
        try {
            tokenPayload = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_0__["default"])(token);
        }
        catch (error) {
            localStorage.clear();
            this.router.navigate(['/']);
        }
        let checkRole = false;
        for (let role of expectedRoleArray) {
            if (role === tokenPayload.role) {
                checkRole = true;
            }
        }
        if (tokenPayload.role === 'user' || tokenPayload.role === 'admin') {
            if (this.auth.isAuthenticated() && checkRole) {
                return true;
            }
            this.snackBar.openSnackBar(_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].unauthorized, _shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].error);
            this.router.navigate(['/']);
            return false;
        }
        else {
            this.router.navigate(['/']);
            localStorage.clear();
            return false;
        }
    }
}
RouteGuardService.ɵfac = function RouteGuardService_Factory(t) { return new (t || RouteGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackbarService"])); };
RouteGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RouteGuardService, factory: RouteGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "p20J":
/*!**********************************************!*\
  !*** ./src/app/services/snackbar.service.ts ***!
  \**********************************************/
/*! exports provided: SnackbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarService", function() { return SnackbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");


class SnackbarService {
    constructor(snackbar) {
        this.snackbar = snackbar;
    }
    openSnackBar(message, action) {
        if (action === 'error') {
            this.snackbar.open(message, '', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 1500,
                panelClass: ['black-snackbar'],
            });
        }
        else {
            this.snackbar.open(message, '', {
                horizontalPosition: 'center',
                verticalPosition: 'top',
                duration: 1500,
                panelClass: ['green-snackbar'],
            });
        }
    }
}
SnackbarService.ɵfac = function SnackbarService_Factory(t) { return new (t || SnackbarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
SnackbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SnackbarService, factory: SnackbarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qAUw":
/*!*******************************************!*\
  !*** ./src/app/shared/material-module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/accordion */ "N/qJ");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/observers */ "GU7r");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/core */ "fXoL");










































/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵdefineInjector"]({ imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_32__["MatBottomSheetModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__["MatBadgeModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_33__["CdkTableModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__["A11yModule"],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__["BidiModule"],
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_34__["CdkAccordionModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_39__["ObserversModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_37__["OverlayModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_38__["PlatformModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_40__["PortalModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_0__["MatAutocompleteModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_32__["MatBottomSheetModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__["MatTableModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_30__["MatBadgeModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__["MatSortModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_29__["MatStepperModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_27__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_28__["MatTooltipModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_31__["MatNativeDateModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_33__["CdkTableModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__["A11yModule"],
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__["BidiModule"],
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_34__["CdkAccordionModule"],
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_39__["ObserversModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_37__["OverlayModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_38__["PlatformModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_40__["PortalModule"]] }); })();


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class UserService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL;
        this.jsonHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json'),
        };
    }
    signup(data) {
        return this.http.post(`${this.url}/user/signup`, data, this.jsonHeader);
    }
    forgotPassword(data) {
        return this.http.post(`${this.url}/user/forgotPassword`, data, this.jsonHeader);
    }
    login(data) {
        return this.http.post(`${this.url}/user/login`, data, this.jsonHeader);
    }
    checkToken() {
        return this.http.get(`${this.url}/user/checkToken`);
    }
    changePassword(data) {
        return this.http.post(`${this.url}/user/changePassword`, data, this.jsonHeader);
    }
    getUsers() {
        return this.http.get(`${this.url}/user/get`);
    }
    update(data) {
        return this.http.patch(`${this.url}/user/update`, data, this.jsonHeader);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/global-constants */ "5+ba");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/snackbar.service */ "p20J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














function SignupComponent_mat_error_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignupComponent_mat_error_7_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SignupComponent_mat_error_7_span_2_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.signupForm.controls.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.signupForm.controls.name.errors.pattern);
} }
function SignupComponent_mat_error_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignupComponent_mat_error_12_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SignupComponent_mat_error_12_span_2_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.signupForm.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.signupForm.controls.email.errors.pattern);
} }
function SignupComponent_mat_error_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignupComponent_mat_error_17_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SignupComponent_mat_error_17_span_2_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.controls.contactNumber.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.signupForm.controls.contactNumber.errors.pattern);
} }
function SignupComponent_mat_error_22_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SignupComponent_mat_error_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SignupComponent_mat_error_22_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.signupForm.controls.password.errors);
} }
class SignupComponent {
    constructor(fb, router, userService, snackBar, dialogRef, ngxService) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.ngxService = ngxService;
        this.signupForm = _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"];
    }
    ngOnInit() {
        this.signupForm = this.fb.group({
            name: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].nameRegex)],
            ],
            email: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].emailRegex)],
            ],
            contactNumber: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].contactNumberRegex),
                ],
            ],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(7)]],
        });
    }
    handleSubmit() {
        this.ngxService.start();
        let formData = this.signupForm.value;
        var data = {
            name: formData.name,
            email: formData.email,
            phone: formData.contactNumber,
            password: formData.password,
        };
        this.userService.signup(data).subscribe((resp) => {
            this.ngxService.stop();
            this.dialogRef.close();
            this.responseMessage = resp === null || resp === void 0 ? void 0 : resp.message;
            this.snackBar.openSnackBar(this.responseMessage, '');
            this.router.navigate(['/']);
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = _shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genericError;
            }
            this.snackBar.openSnackBar(this.responseMessage, _shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].error);
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 28, vars: 6, consts: [[1, "mat-typography"], [3, "formGroup"], ["fxFlex", "", "fxLayout", "column"], ["appearance", "fill", "fxFlex", ""], ["type", "text", "matInput", "", "formControlName", "name", "required", ""], [4, "ngIf"], ["type", "email", "matInput", "", "formControlName", "email", "required", ""], ["type", "text", "matInput", "", "formControlName", "contactNumber", "required", ""], ["type", "password", "matInput", "", "formControlName", "password", "required", ""], ["align", "left"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", ""]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SignupComponent_mat_error_7_Template, 3, 2, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SignupComponent_mat_error_12_Template, 3, 2, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, SignupComponent_mat_error_17_Template, 3, 2, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, SignupComponent_mat_error_22_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-dialog-actions", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SignupComponent_Template_button_click_24_listener() { return ctx.handleSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Signup ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.signupForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signupForm.controls.name.touched && ctx.signupForm.controls.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signupForm.controls.email.touched && ctx.signupForm.controls.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signupForm.controls.contactNumber.touched && ctx.signupForm.controls.contactNumbervalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.signupForm.controls.password.touched && ctx.signupForm.controls.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !(ctx.signupForm.valid && ctx.signupForm.dirty));
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], styles: ["button[_ngcontent-%COMP%] {\n  padding: 0.3rem 2rem;\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtBQUhKIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZvcm17XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4vLyB9XHJcblxyXG5idXR0b257XHJcbiAgICBwYWRkaW5nOiAwLjNyZW0gMnJlbTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/full/full.component */ "RxpE");
/* harmony import */ var _services_route_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/route-guard.service */ "mReP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    {
        path: 'cafe',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__["FullComponent"],
        children: [
            {
                path: '',
                redirectTo: '/cafe/dashboard',
                pathMatch: 'full',
            },
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() | material-component-material-module */ "material-component-material-module").then(__webpack_require__.bind(null, /*! ./material-component/material.module */ "76PZ")).then((m) => m.MaterialComponentsModule),
                canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_3__["RouteGuardService"]],
                data: {
                    expectedRole: ['admin', 'user'],
                },
            },
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "TDBs")).then((m) => m.DashboardModule),
                canActivate: [_services_route_guard_service__WEBPACK_IMPORTED_MODULE_3__["RouteGuardService"]],
                data: {
                    expectedRole: ['admin', 'user'],
                },
            },
        ],
    },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_global_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/global-constants */ "5+ba");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "qfBg");
/* harmony import */ var _services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/snackbar.service */ "p20J");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ui-loader */ "gren");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














function LoginComponent_mat_error_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_mat_error_7_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginComponent_mat_error_7_span_2_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.controls.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.controls.email.errors.pattern);
} }
function LoginComponent_mat_error_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "This field is mandatory");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_mat_error_12_span_1_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.controls.password.errors);
} }
class LoginComponent {
    constructor(fb, router, userService, snackBar, dialogRef, ngxService) {
        this.fb = fb;
        this.router = router;
        this.userService = userService;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.ngxService = ngxService;
        this.loginForm = _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"];
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: [
                null,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(_shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].emailRegex)],
            ],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(7)]],
        });
    }
    handleSubmit() {
        this.ngxService.start();
        let formData = this.loginForm.value;
        var data = {
            email: formData.email,
            password: formData.password,
        };
        this.userService.login(data).subscribe((resp) => {
            this.ngxService.stop();
            this.dialogRef.close();
            this.responseMessage = resp === null || resp === void 0 ? void 0 : resp.message;
            localStorage.setItem('token', resp === null || resp === void 0 ? void 0 : resp.token);
            this.snackBar.openSnackBar(this.responseMessage, '');
            this.router.navigate(['/cafe/dashboard']);
        }, (error) => {
            var _a, _b;
            this.ngxService.stop();
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                this.responseMessage = (_b = error.error) === null || _b === void 0 ? void 0 : _b.message;
            }
            else {
                this.responseMessage = _shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].genericError;
            }
            this.snackBar.openSnackBar(this.responseMessage, _shared_global_constants__WEBPACK_IMPORTED_MODULE_1__["GlobalConstants"].error);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_snackbar_service__WEBPACK_IMPORTED_MODULE_5__["SnackbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_ui_loader__WEBPACK_IMPORTED_MODULE_7__["NgxUiLoaderService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 18, vars: 4, consts: [[1, "mat-typography"], [3, "formGroup"], ["fxFlex", "", "fxLayout", "column"], ["appearance", "fill", "fxFlex", ""], ["type", "email", "matInput", "", "formControlName", "email", "required", ""], [4, "ngIf"], ["type", "password", "matInput", "", "formControlName", "password", "required", ""], ["align", "left"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", "click"], ["mat-raised-button", "", "color", "primary", "mat-dialog-close", ""]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-dialog-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, LoginComponent_mat_error_7_Template, 3, 2, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, LoginComponent_mat_error_12_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-dialog-actions", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_14_listener() { return ctx.handleSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.email.touched && ctx.loginForm.controls.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginForm.controls.password.touched && ctx.loginForm.controls.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !(ctx.loginForm.valid && ctx.loginForm.dirty));
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "widY":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_material_component_dialog_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/material-component/dialog/change-password/change-password.component */ "Mq+F");
/* harmony import */ var src_app_material_component_dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material-component/dialog/confirmation/confirmation.component */ "TAl4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









class AppHeaderComponent {
    constructor(router, dialog) {
        this.router = router;
        this.dialog = dialog;
    }
    logout() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.data = {
            message: 'Logout',
        };
        const dialogRef = this.dialog.open(src_app_material_component_dialog_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmationComponent"], dialogConfig);
        const sub = dialogRef.componentInstance.onEmitStatusChange.subscribe((user) => {
            dialogRef.close();
            localStorage.clear();
            this.router.navigate(['/']);
        });
    }
    changePassword() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.width = '550px';
        const dialogRef = this.dialog.open(src_app_material_component_dialog_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordComponent"], dialogConfig);
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"])); };
AppHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 13, vars: 1, consts: [["mat-icon-button", "", 1, "m-r-5", 3, "matMenuTriggerFor"], ["profile", "matMenu"], ["mat-menu-item", "", 3, "click"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-menu", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppHeaderComponent_Template_button_click_5_listener() { return ctx.changePassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Change Password\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppHeaderComponent_Template_button_click_9_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Logout\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"]], encapsulation: 2 });


/***/ }),

/***/ "xXHC":
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionlink.directive */ "JNRg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AccordionAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
}
AccordionAnchorDirective.ɵfac = function AccordionAnchorDirective_Factory(t) { return new (t || AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionLinkDirective"])); };
AccordionAnchorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AccordionAnchorDirective, selectors: [["", "appAccordionToggle", ""]], hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zzpP":
/*!***********************************************************!*\
  !*** ./src/app/services/token-interceptor.interceptor.ts ***!
  \***********************************************************/
/*! exports provided: TokenInterceptorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorInterceptor", function() { return TokenInterceptorInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class TokenInterceptorInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(request, next) {
        const token = localStorage.getItem('token');
        if (token) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${token}` },
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpErrorResponse"]) {
                console.log(err.url);
                if (err.status == 401 || err.status === 403) {
                    if (this.router.url === '/') {
                    }
                    else {
                        localStorage.clear();
                        this.router.navigate(['/']);
                    }
                }
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }));
    }
}
TokenInterceptorInterceptor.ɵfac = function TokenInterceptorInterceptor_Factory(t) { return new (t || TokenInterceptorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
TokenInterceptorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TokenInterceptorInterceptor, factory: TokenInterceptorInterceptor.ɵfac });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map