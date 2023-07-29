(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div fxLayoutAlign=\"space-between center\">\r\n  <h1>\r\n    🔐 Web Authentication example with Angular\r\n  </h1>\r\n  <a mat-button class=\"github\" href=\"https://github.com/marcellkiss/angular-webauthn-example\" target=\"_blank\">\r\n    <img height=\"32\" width=\"32\" src=\"https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg\" />\r\n    GitHub\r\n  </a>\r\n  <!-- <div class=\"github\" fxLayoutAlign=\"start center\" matRipple>\r\n  </div> -->\r\n</div>\r\n<p>✅ 70% ✅ browser support! Check <a href=\"https://caniuse.com/#search=web%20authentication\" target=\"_blank\">caniuse.com</a> for more details.</p>\r\n<p>The WEB has never been closer to get rid of passwords in an ultimately secure way.</p>\r\n<br/>\r\n<mat-card class=\"not-available\" *ngIf=\"!webAuthnAvailable\">\r\n    🚫 Oops! Sorry, Web Authentication API is not available in your browser. Try it in Chrome.\r\n</mat-card>\r\n<div class=\"forms\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-between start\" fxLayoutGap=\"10px\">\r\n  <mat-card fxFlex=\"noshrink\">\r\n    <legend>Sign Up</legend>\r\n    <div class=\"signup\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Email\" [(ngModel)]=\"email\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input type=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"password\">\r\n      </mat-form-field>\r\n      <div class=\"fingerprint\" *ngIf=\"webAuthnAvailable\">\r\n        <mat-checkbox [(ngModel)]=\"useFingerprint\" matTooltip=\"Use your fingerprint for future authentications\"><mat-icon inline>fingerprint</mat-icon></mat-checkbox>\r\n        <br/>\r\n        <br/>\r\n      </div>\r\n      <button mat-raised-button color=\"primary\" (click)=\"signup()\">SIGN UP</button>\r\n    </div>\r\n  </mat-card>\r\n  <mat-card fxFlex=\"noshrink\">\r\n    <legend>Sign In</legend>\r\n    <div class=\"signin\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Email\" [(ngModel)]=\"email\">\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input type=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"password\">\r\n      </mat-form-field>\r\n      <button mat-raised-button color=\"primary\" (click)=\"signin()\">SIGN IN</button>\r\n      <div class=\"fingerprint-auth\" *ngIf=\"webAuthnAvailable\">\r\n        <div class=\"or\" fxLayoutAlign=\"center start\">OR</div>\r\n        <button mat-raised-button color=\"primary\" (click)=\"webAuthSignin()\"><mat-icon>fingerprint</mat-icon></button>\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n\r\n<h1>Admin</h1>\r\n<mat-card class=\"user\" *ngFor=\"let user of users\" fxLayoutAlign=\"space-between center\">\r\n  <div class=\"email\">{{ user.email }}</div>\r\n  <button mat-button *ngIf=\"user.credentials.length\" (click)=\"webAuthSignin()\" color=\"primary\"><mat-icon>fingerprint</mat-icon></button>\r\n  <button mat-button (click)=\"removeUser(user.email)\" color=\"warn\"><mat-icon inline>delete</mat-icon></button>\r\n</mat-card>\r\n\r\n<div class=\"info\">\r\n  <hr/>\r\n  <h3>Sources</h3>\r\n  <div>\r\n    <a href=\"https://webauthn.io/\">Webauthn.io</a>\r\n  </div>\r\n  <div>\r\n    <a href=\"https://medium.com/@herrjemand/introduction-to-webauthn-api-5fd1fb46c285\">Medium Article by Ackermann Yuriy</a>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".not-available {\n  margin-bottom: 10px;\n}\n\n.github {\n  margin: 3px 0;\n}\n\n.github img {\n  margin-top: -3px;\n}\n\n.signup, .signin {\n  height: 300px;\n}\n\n.info {\n  margin: 50px 0;\n}\n\n.or {\n  margin: 8px 0;\n}\n\n.user {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHdlbmRpXFxQbGF5Z3JvdW5kXFxhbmd1bGFyLXdlYmF1dGhuLWV4YW1wbGUvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURBRTtFQUNFLGdCQUFBO0FDRUo7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1hdmFpbGFibGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5naXRodWIge1xyXG4gIG1hcmdpbjogM3B4IDA7XHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lnbnVwLCAuc2lnbmluIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgbWFyZ2luOiA1MHB4IDA7XHJcbn1cclxuXHJcbi5vciB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxuLnVzZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAvLyBwYWRkaW5nOiA1cHg7XHJcbiAgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLy8gLnVzZXI6aG92ZXIge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbi8vIH0iLCIubm90LWF2YWlsYWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5naXRodWIge1xuICBtYXJnaW46IDNweCAwO1xufVxuLmdpdGh1YiBpbWcge1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG4uc2lnbnVwLCAuc2lnbmluIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmluZm8ge1xuICBtYXJnaW46IDUwcHggMDtcbn1cblxuLm9yIHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxuLnVzZXIge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59Il19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_server_mock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/server-mock.service */ "./src/app/services/server-mock.service.ts");
/* harmony import */ var _services_web_authn_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/web-authn.service */ "./src/app/services/web-authn.service.ts");




var AppComponent = /** @class */ (function () {
    // signupForm: FormGroup;
    function AppComponent(serverMockService, webAuthnService) {
        this.serverMockService = serverMockService;
        this.webAuthnService = webAuthnService;
        this.title = 'angular-web-authn';
        this.email = 'a@a.com';
        this.password = 'aaa';
        this.useFingerprint = true;
        this.webAuthnAvailable = !!navigator.credentials && !!navigator.credentials.create;
        this.users = serverMockService.getUsers();
        // this.signupForm = fb.group({
        //   email: ['a@a.com', [Validators.required, Validators.email]],
        //   password: ['aaa', [Validators.required]],
        //   confirmPassword: ['aaa', [Validators.required]],
        // });
    }
    AppComponent.prototype.removeUser = function (email) {
        this.serverMockService.removeUser(email);
        this.users = this.serverMockService.getUsers();
    };
    AppComponent.prototype.signup = function () {
        var _this = this;
        console.log('SIGNUP');
        // Save into the 'DB'
        var prevUser = this.serverMockService.getUser(this.email);
        if (prevUser) {
            alert('🚫 User already exists with this email address');
            return;
        }
        var user = this.serverMockService.addUser({ email: this.email, password: this.password, credentials: [] });
        this.users = this.serverMockService.getUsers();
        // Ask for WebAuthn Auth method
        if (this.webAuthnAvailable && this.useFingerprint) {
            this.webAuthnService.webAuthnSignup(user)
                .then(function (credential) {
                console.log('credentials.create RESPONSE', credential);
                var valid = _this.serverMockService.registerCredential(user, credential);
                _this.users = _this.serverMockService.getUsers();
            }).catch(function (error) {
                console.log('credentials.create ERROR', error);
            });
        }
    };
    AppComponent.prototype.signin = function () {
        var _this = this;
        console.log('[signin]');
        var user = this.serverMockService.getUsers().find(function (u) { return u.email === _this.email && u.password === _this.password; });
        if (user) {
            alert('✅ Congrats! Authentication went fine!');
        }
        else {
            alert('🚫 Sorry :( Invalid credentials!');
        }
    };
    AppComponent.prototype.webAuthSignin = function () {
        var user = this.serverMockService.getUser(this.email);
        this.webAuthnService.webAuthnSignin(user).then(function (response) {
            // TODO: validate attestion
            alert('✅ Congrats! Authentication went fine!');
            console.log('SUCCESSFULLY GOT AN ASSERTION!', response);
        })
            .catch(function (error) {
            alert('🚫 Sorry :( Invalid credentials!');
            console.log('FAIL', error);
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_server_mock_service__WEBPACK_IMPORTED_MODULE_2__["ServerMockService"] },
        { type: _services_web_authn_service__WEBPACK_IMPORTED_MODULE_3__["WebAuthnService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_server_mock_service__WEBPACK_IMPORTED_MODULE_2__["ServerMockService"], _services_web_authn_service__WEBPACK_IMPORTED_MODULE_3__["WebAuthnService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/server-mock.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/server-mock.service.ts ***!
  \*************************************************/
/*! exports provided: ServerMockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerMockService", function() { return ServerMockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_cbor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/cbor */ "./src/app/utils/cbor.js");
/* harmony import */ var _utils_cbor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_cbor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");




var ServerMockService = /** @class */ (function () {
    function ServerMockService(userService) {
        this.userService = userService;
    }
    // Validate and Store credential
    ServerMockService.prototype.registerCredential = function (user, credential) {
        var authData = this.extractAuthData(credential);
        var credentialIdLength = this.getCredentialIdLength(authData);
        var credentialId = authData.slice(55, 55 + credentialIdLength);
        console.log('credentialIdLength', credentialIdLength);
        console.log('credentialId', credentialId);
        var publicKeyBytes = authData.slice(55 + credentialIdLength);
        var publicKeyObject = _utils_cbor__WEBPACK_IMPORTED_MODULE_2__["decode"](publicKeyBytes.buffer);
        console.log('publicKeyObject', publicKeyObject);
        var valid = true;
        if (valid) {
            user.credentials.push({ credentialId: credentialId, publicKey: publicKeyBytes });
            this.updateUser(user);
        }
        return valid;
    };
    ServerMockService.prototype.getCredentialIdLength = function (authData) {
        // get the length of the credential ID
        var dataView = new DataView(new ArrayBuffer(2));
        var idLenBytes = authData.slice(53, 55);
        idLenBytes.forEach(function (value, index) { return dataView.setUint8(index, value); });
        return dataView.getUint16(0);
    };
    ServerMockService.prototype.extractAuthData = function (credential) {
        // decode the clientDataJSON into a utf-8 string
        var utf8Decoder = new TextDecoder('utf-8');
        var decodedClientData = utf8Decoder.decode(credential.response.clientDataJSON);
        var clientDataObj = JSON.parse(decodedClientData);
        console.log('clientDataObj', clientDataObj);
        var decodedAttestationObj = _utils_cbor__WEBPACK_IMPORTED_MODULE_2__["decode"](credential.response.attestationObject);
        console.log('decodedAttestationObj', decodedAttestationObj);
        var authData = decodedAttestationObj.authData;
        console.log('authData', authData);
        return authData;
    };
    ServerMockService.prototype.getUsers = function () {
        return this.userService.getUsers();
    };
    ServerMockService.prototype.updateUser = function (user) {
        this.removeUser(user.email);
        this.addUser(user);
    };
    ServerMockService.prototype.addUser = function (user) {
        user.id = '' + Math.floor(Math.random() * 10000000);
        this.userService.addUser(user);
        return user;
    };
    ServerMockService.prototype.getUser = function (email) {
        return this.userService.getUser(email);
    };
    ServerMockService.prototype.removeUser = function (email) {
        return this.userService.removeUser(email);
    };
    ServerMockService.prototype.getChallenge = function () {
        return Uint8Array.from('someChallengeIsHereComOn', function (c) { return c.charCodeAt(0); });
    };
    ServerMockService.ctorParameters = function () { return [
        { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
    ]; };
    ServerMockService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ServerMockService);
    return ServerMockService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.getUser = function (email) {
        return this.getUsers().find(function (u) { return u.email === email; });
    };
    UserService.prototype.getUsers = function () {
        var usersString = localStorage.getItem('users');
        return usersString ? JSON.parse(usersString) : [];
    };
    UserService.prototype.saveUsers = function (users) {
        return localStorage.setItem('users', JSON.stringify(users));
    };
    UserService.prototype.addUser = function (user) {
        var users = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.getUsers(), [user]);
        this.saveUsers(users);
    };
    UserService.prototype.removeUser = function (email) {
        var filteredUsers = this.getUsers().filter(function (user) { return user.email !== email; });
        this.saveUsers(filteredUsers);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/web-authn.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/web-authn.service.ts ***!
  \***********************************************/
/*! exports provided: WebAuthnService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebAuthnService", function() { return WebAuthnService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_mock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-mock.service */ "./src/app/services/server-mock.service.ts");



var WebAuthnService = /** @class */ (function () {
    function WebAuthnService(serverMockService) {
        this.serverMockService = serverMockService;
    }
    WebAuthnService.prototype.webAuthnSignup = function (user) {
        console.log('[webAuthnSignup]');
        var publicKeyCredentialCreationOptions = {
            // Challenge shoulda come from the server
            challenge: this.serverMockService.getChallenge(),
            rp: {
                name: 'WebAuthn Test',
            },
            user: {
                // Some user id coming from the server
                id: Uint8Array.from(user.id, function (c) { return c.charCodeAt(0); }),
                name: user.email,
                displayName: user.email,
            },
            pubKeyCredParams: [{ alg: -7, type: 'public-key' }],
            authenticatorSelection: {
                authenticatorAttachment: 'platform',
            },
            timeout: 60000,
            attestation: 'direct'
        };
        return navigator.credentials.create({
            publicKey: publicKeyCredentialCreationOptions,
        });
    };
    WebAuthnService.prototype.webAuthnSignin = function (user) {
        var allowCredentials = user.credentials.map(function (c) {
            console.log(c.credentialId);
            return { type: 'public-key', id: Uint8Array.from(Object.values(c.credentialId)) };
        });
        console.log('allowCredentials', allowCredentials);
        var credentialRequestOptions = {
            challenge: this.serverMockService.getChallenge(),
            allowCredentials: allowCredentials,
        };
        return navigator.credentials.get({
            publicKey: credentialRequestOptions,
        });
    };
    WebAuthnService.ctorParameters = function () { return [
        { type: _server_mock_service__WEBPACK_IMPORTED_MODULE_2__["ServerMockService"] }
    ]; };
    WebAuthnService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_mock_service__WEBPACK_IMPORTED_MODULE_2__["ServerMockService"]])
    ], WebAuthnService);
    return WebAuthnService;
}());



/***/ }),

/***/ "./src/app/utils/cbor.js":
/*!*******************************!*\
  !*** ./src/app/utils/cbor.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2014-2016 Patrick Gansterer <paroga@paroga.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

(function(global, undefined) { "use strict";
var POW_2_24 = 5.960464477539063e-8,
    POW_2_32 = 4294967296,
    POW_2_53 = 9007199254740992;

function encode(value) {
  var data = new ArrayBuffer(256);
  var dataView = new DataView(data);
  var lastLength;
  var offset = 0;

  function prepareWrite(length) {
    var newByteLength = data.byteLength;
    var requiredLength = offset + length;
    while (newByteLength < requiredLength)
      newByteLength <<= 1;
    if (newByteLength !== data.byteLength) {
      var oldDataView = dataView;
      data = new ArrayBuffer(newByteLength);
      dataView = new DataView(data);
      var uint32count = (offset + 3) >> 2;
      for (var i = 0; i < uint32count; ++i)
        dataView.setUint32(i << 2, oldDataView.getUint32(i << 2));
    }

    lastLength = length;
    return dataView;
  }
  function commitWrite() {
    offset += lastLength;
  }
  function writeFloat64(value) {
    commitWrite(prepareWrite(8).setFloat64(offset, value));
  }
  function writeUint8(value) {
    commitWrite(prepareWrite(1).setUint8(offset, value));
  }
  function writeUint8Array(value) {
    var dataView = prepareWrite(value.length);
    for (var i = 0; i < value.length; ++i)
      dataView.setUint8(offset + i, value[i]);
    commitWrite();
  }
  function writeUint16(value) {
    commitWrite(prepareWrite(2).setUint16(offset, value));
  }
  function writeUint32(value) {
    commitWrite(prepareWrite(4).setUint32(offset, value));
  }
  function writeUint64(value) {
    var low = value % POW_2_32;
    var high = (value - low) / POW_2_32;
    var dataView = prepareWrite(8);
    dataView.setUint32(offset, high);
    dataView.setUint32(offset + 4, low);
    commitWrite();
  }
  function writeTypeAndLength(type, length) {
    if (length < 24) {
      writeUint8(type << 5 | length);
    } else if (length < 0x100) {
      writeUint8(type << 5 | 24);
      writeUint8(length);
    } else if (length < 0x10000) {
      writeUint8(type << 5 | 25);
      writeUint16(length);
    } else if (length < 0x100000000) {
      writeUint8(type << 5 | 26);
      writeUint32(length);
    } else {
      writeUint8(type << 5 | 27);
      writeUint64(length);
    }
  }

  function encodeItem(value) {
    var i;

    if (value === false)
      return writeUint8(0xf4);
    if (value === true)
      return writeUint8(0xf5);
    if (value === null)
      return writeUint8(0xf6);
    if (value === undefined)
      return writeUint8(0xf7);

    switch (typeof value) {
      case "number":
        if (Math.floor(value) === value) {
          if (0 <= value && value <= POW_2_53)
            return writeTypeAndLength(0, value);
          if (-POW_2_53 <= value && value < 0)
            return writeTypeAndLength(1, -(value + 1));
        }
        writeUint8(0xfb);
        return writeFloat64(value);

      case "string":
        var utf8data = [];
        for (i = 0; i < value.length; ++i) {
          var charCode = value.charCodeAt(i);
          if (charCode < 0x80) {
            utf8data.push(charCode);
          } else if (charCode < 0x800) {
            utf8data.push(0xc0 | charCode >> 6);
            utf8data.push(0x80 | charCode & 0x3f);
          } else if (charCode < 0xd800) {
            utf8data.push(0xe0 | charCode >> 12);
            utf8data.push(0x80 | (charCode >> 6)  & 0x3f);
            utf8data.push(0x80 | charCode & 0x3f);
          } else {
            charCode = (charCode & 0x3ff) << 10;
            charCode |= value.charCodeAt(++i) & 0x3ff;
            charCode += 0x10000;

            utf8data.push(0xf0 | charCode >> 18);
            utf8data.push(0x80 | (charCode >> 12)  & 0x3f);
            utf8data.push(0x80 | (charCode >> 6)  & 0x3f);
            utf8data.push(0x80 | charCode & 0x3f);
          }
        }

        writeTypeAndLength(3, utf8data.length);
        return writeUint8Array(utf8data);

      default:
        var length;
        if (Array.isArray(value)) {
          length = value.length;
          writeTypeAndLength(4, length);
          for (i = 0; i < length; ++i)
            encodeItem(value[i]);
        } else if (value instanceof Uint8Array) {
          writeTypeAndLength(2, value.length);
          writeUint8Array(value);
        } else {
          var keys = Object.keys(value);
          length = keys.length;
          writeTypeAndLength(5, length);
          for (i = 0; i < length; ++i) {
            var key = keys[i];
            encodeItem(key);
            encodeItem(value[key]);
          }
        }
    }
  }

  encodeItem(value);

  if ("slice" in data)
    return data.slice(0, offset);

  var ret = new ArrayBuffer(offset);
  var retView = new DataView(ret);
  for (var i = 0; i < offset; ++i)
    retView.setUint8(i, dataView.getUint8(i));
  return ret;
}

function decode(data, tagger, simpleValue) {
  var dataView = new DataView(data);
  var offset = 0;

  if (typeof tagger !== "function")
    tagger = function(value) { return value; };
  if (typeof simpleValue !== "function")
    simpleValue = function() { return undefined; };

  function commitRead(length, value) {
    offset += length;
    return value;
  }
  function readArrayBuffer(length) {
    return commitRead(length, new Uint8Array(data, offset, length));
  }
  function readFloat16() {
    var tempArrayBuffer = new ArrayBuffer(4);
    var tempDataView = new DataView(tempArrayBuffer);
    var value = readUint16();

    var sign = value & 0x8000;
    var exponent = value & 0x7c00;
    var fraction = value & 0x03ff;

    if (exponent === 0x7c00)
      exponent = 0xff << 10;
    else if (exponent !== 0)
      exponent += (127 - 15) << 10;
    else if (fraction !== 0)
      return (sign ? -1 : 1) * fraction * POW_2_24;

    tempDataView.setUint32(0, sign << 16 | exponent << 13 | fraction << 13);
    return tempDataView.getFloat32(0);
  }
  function readFloat32() {
    return commitRead(4, dataView.getFloat32(offset));
  }
  function readFloat64() {
    return commitRead(8, dataView.getFloat64(offset));
  }
  function readUint8() {
    return commitRead(1, dataView.getUint8(offset));
  }
  function readUint16() {
    return commitRead(2, dataView.getUint16(offset));
  }
  function readUint32() {
    return commitRead(4, dataView.getUint32(offset));
  }
  function readUint64() {
    return readUint32() * POW_2_32 + readUint32();
  }
  function readBreak() {
    if (dataView.getUint8(offset) !== 0xff)
      return false;
    offset += 1;
    return true;
  }
  function readLength(additionalInformation) {
    if (additionalInformation < 24)
      return additionalInformation;
    if (additionalInformation === 24)
      return readUint8();
    if (additionalInformation === 25)
      return readUint16();
    if (additionalInformation === 26)
      return readUint32();
    if (additionalInformation === 27)
      return readUint64();
    if (additionalInformation === 31)
      return -1;
    throw "Invalid length encoding";
  }
  function readIndefiniteStringLength(majorType) {
    var initialByte = readUint8();
    if (initialByte === 0xff)
      return -1;
    var length = readLength(initialByte & 0x1f);
    if (length < 0 || (initialByte >> 5) !== majorType)
      throw "Invalid indefinite length element";
    return length;
  }

  function appendUtf16Data(utf16data, length) {
    for (var i = 0; i < length; ++i) {
      var value = readUint8();
      if (value & 0x80) {
        if (value < 0xe0) {
          value = (value & 0x1f) <<  6
                | (readUint8() & 0x3f);
          length -= 1;
        } else if (value < 0xf0) {
          value = (value & 0x0f) << 12
                | (readUint8() & 0x3f) << 6
                | (readUint8() & 0x3f);
          length -= 2;
        } else {
          value = (value & 0x0f) << 18
                | (readUint8() & 0x3f) << 12
                | (readUint8() & 0x3f) << 6
                | (readUint8() & 0x3f);
          length -= 3;
        }
      }

      if (value < 0x10000) {
        utf16data.push(value);
      } else {
        value -= 0x10000;
        utf16data.push(0xd800 | (value >> 10));
        utf16data.push(0xdc00 | (value & 0x3ff));
      }
    }
  }

  function decodeItem() {
    var initialByte = readUint8();
    var majorType = initialByte >> 5;
    var additionalInformation = initialByte & 0x1f;
    var i;
    var length;

    if (majorType === 7) {
      switch (additionalInformation) {
        case 25:
          return readFloat16();
        case 26:
          return readFloat32();
        case 27:
          return readFloat64();
      }
    }

    length = readLength(additionalInformation);
    if (length < 0 && (majorType < 2 || 6 < majorType))
      throw "Invalid length";

    switch (majorType) {
      case 0:
        return length;
      case 1:
        return -1 - length;
      case 2:
        if (length < 0) {
          var elements = [];
          var fullArrayLength = 0;
          while ((length = readIndefiniteStringLength(majorType)) >= 0) {
            fullArrayLength += length;
            elements.push(readArrayBuffer(length));
          }
          var fullArray = new Uint8Array(fullArrayLength);
          var fullArrayOffset = 0;
          for (i = 0; i < elements.length; ++i) {
            fullArray.set(elements[i], fullArrayOffset);
            fullArrayOffset += elements[i].length;
          }
          return fullArray;
        }
        return readArrayBuffer(length);
      case 3:
        var utf16data = [];
        if (length < 0) {
          while ((length = readIndefiniteStringLength(majorType)) >= 0)
            appendUtf16Data(utf16data, length);
        } else
          appendUtf16Data(utf16data, length);
        return String.fromCharCode.apply(null, utf16data);
      case 4:
        var retArray;
        if (length < 0) {
          retArray = [];
          while (!readBreak())
            retArray.push(decodeItem());
        } else {
          retArray = new Array(length);
          for (i = 0; i < length; ++i)
            retArray[i] = decodeItem();
        }
        return retArray;
      case 5:
        var retObject = {};
        for (i = 0; i < length || length < 0 && !readBreak(); ++i) {
          var key = decodeItem();
          retObject[key] = decodeItem();
        }
        return retObject;
      case 6:
        return tagger(decodeItem(), length);
      case 7:
        switch (length) {
          case 20:
            return false;
          case 21:
            return true;
          case 22:
            return null;
          case 23:
            return undefined;
          default:
            return simpleValue(length);
        }
    }
  }

  var ret = decodeItem();
  if (offset !== data.byteLength)
    throw "Remaining bytes";
  return ret;
}

var obj = { encode: encode, decode: decode };

if (true)
  !(__WEBPACK_AMD_DEFINE_FACTORY__ = (obj),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
else {}

})(this);

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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wendi\Playground\angular-webauthn-example\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map