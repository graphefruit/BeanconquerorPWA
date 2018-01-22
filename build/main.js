webpackJsonp([0],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROASTS_ENUM; });
/**
 * Inherits all roasting types
 */
var ROASTS_ENUM;
(function (ROASTS_ENUM) {
    //UNKOWN
    ROASTS_ENUM["UNKNOWN"] = "Unknown";
    //LIGHT
    ROASTS_ENUM["CINNAMON_ROAST"] = "Cinnamon Roast";
    ROASTS_ENUM["AMERICAN_ROAST"] = "American Roast";
    ROASTS_ENUM["NEW_ENGLAND_ROAST"] = "New England Roast";
    ROASTS_ENUM["HALF_CITY_ROAST"] = "Half City Roast";
    ROASTS_ENUM["MODERATE_LIGHT_ROAST"] = "Moderate-Light Roast";
    //MEDIUM
    ROASTS_ENUM["CITY_ROAST"] = "City roast";
    ROASTS_ENUM["CITY_PLUS_ROAST"] = "City+ Roast";
    ROASTS_ENUM["FULL_CITY_ROAST"] = "Full City Roast";
    //DARK
    ROASTS_ENUM["FULL_CITY_PLUS_ROAST"] = "Full City + Roast";
    ROASTS_ENUM["ITALIAN_ROAST"] = "Italian Roast";
    ROASTS_ENUM["VIEANNA_ROAST"] = "Vienna Roast";
    ROASTS_ENUM["FRENCH_ROAST"] = "French Roast";
})(ROASTS_ENUM || (ROASTS_ENUM = {}));
//# sourceMappingURL=roasts.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BREW_VIEW_ENUM; });
//LSA: IDE shows error here, but its working, so ignore it.
var BREW_VIEW_ENUM;
(function (BREW_VIEW_ENUM) {
    BREW_VIEW_ENUM[BREW_VIEW_ENUM["SINGLE_PAGE"] = 0] = "SINGLE_PAGE";
    BREW_VIEW_ENUM[BREW_VIEW_ENUM["MULTIPLE_PAGE"] = 1] = "MULTIPLE_PAGE";
})(BREW_VIEW_ENUM || (BREW_VIEW_ENUM = {}));
//# sourceMappingURL=brewView.js.map

/***/ }),

/***/ 128:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 128;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_locale_de__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment_locale_de___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment_locale_de__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Ionic**/

/**Third party**/


/**
 * Handles every helping functionalities
 */
var UIHelper = (function () {
    function UIHelper(platform) {
        this.platform = platform;
        __WEBPACK_IMPORTED_MODULE_2_moment___default.a.locale('de');
    }
    UIHelper.prototype.copyData = function (_value) {
        if (_value.constructor == Array) {
            return Object.assign([], _value);
        }
        else {
            return Object.assign({}, _value);
        }
    };
    UIHelper.prototype.generateUUID = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    UIHelper.prototype.getUnixTimestamp = function () {
        return __WEBPACK_IMPORTED_MODULE_2_moment___default()().unix();
    };
    UIHelper.prototype.isToday = function (_unix) {
        return __WEBPACK_IMPORTED_MODULE_2_moment___default.a.unix(__WEBPACK_IMPORTED_MODULE_2_moment___default()().unix()).isSame(__WEBPACK_IMPORTED_MODULE_2_moment___default.a.unix(_unix), 'd');
    };
    UIHelper.prototype.formateDate = function (_unix, _format) {
        var format = "DD.MM.YYYY, HH:mm:ss";
        if (_format) {
            format = _format;
        }
        return __WEBPACK_IMPORTED_MODULE_2_moment___default.a.unix(_unix).format(format);
    };
    UIHelper.prototype.timeDifference = function (_unix) {
        var now = __WEBPACK_IMPORTED_MODULE_2_moment___default.a.unix(this.getUnixTimestamp());
        var toDiff = __WEBPACK_IMPORTED_MODULE_2_moment___default()(__WEBPACK_IMPORTED_MODULE_2_moment___default.a.unix(_unix));
        var timeDifference = {
            "MILLISECONDS": 0,
            "SECONDS": 0,
            "MINUTES": 0,
            "DAYS": 0,
        };
        timeDifference.MILLISECONDS = now.diff(toDiff, 'milliseconds');
        timeDifference.SECONDS = now.diff(toDiff, 'seconds');
        timeDifference.MINUTES = now.diff(toDiff, 'minutes');
        timeDifference.DAYS = now.diff(toDiff, 'days');
        return timeDifference;
    };
    UIHelper.prototype.attachOnPlatformReady = function () {
        return this.platform.ready();
    };
    UIHelper.prototype.convertToNumber = function (event) {
        if (event == "") {
            return event;
        }
        return parseFloat(event);
        // return parseFloat(event);
    };
    UIHelper.prototype.openExternalWebpage = function (_url) {
        if (_url.indexOf("http") == -1) {
            //Saftey
            _url = "http://" + _url;
        }
        window.open(_url, "_system");
    };
    UIHelper.prototype.exportCSV = function (fileName, csvContent) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var errorCallback = function (e) {
                console.log("Error: " + e);
                reject();
            };
            var blob = new Blob([csvContent], { type: 'text/csv;charset=UTF-8' });
            if (_this.platform.is("android")) {
                var storageLocation = "";
                switch (device.platform) {
                    case "Android":
                        storageLocation = 'file:///storage/emulated/0/';
                        break;
                    case "iOS":
                        storageLocation = cordova.file.documentsDirectory;
                        break;
                }
                window.resolveLocalFileSystemURL(storageLocation, function (fileSystem) {
                    fileSystem.getDirectory('Download', {
                        create: true,
                        exclusive: false
                    }, function (directory) {
                        //You need to put the name you would like to use for the file here.
                        directory.getFile(fileName, {
                            create: true,
                            exclusive: false
                        }, function (fileEntry) {
                            fileEntry.createWriter(function (writer) {
                                writer.onwriteend = function () {
                                    resolve(fileName);
                                };
                                writer.seek(0);
                                writer.write(blob); //You need to put the file, blob or base64 representation here.
                            }, errorCallback);
                        }, errorCallback);
                    }, errorCallback);
                }, errorCallback);
            }
            else {
                setTimeout(function () {
                    if (navigator.msSaveBlob) {
                        navigator.msSaveBlob(blob, fileName);
                    }
                    else {
                        var link = document.createElement("a");
                        if (link.download !== undefined) {
                            // Browsers that support HTML5 download attribute
                            var url = URL.createObjectURL(blob);
                            link.setAttribute("href", url);
                            link.setAttribute("download", fileName);
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            resolve('test.csv');
                        }
                    }
                }, 250);
            }
        });
        return promise;
    };
    UIHelper = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], UIHelper);
    return UIHelper;
}());

//# sourceMappingURL=uiHelper.js.map

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIPreparationStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_preparation_preparation__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uiHelper__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uiLog__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_uiStorage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_storageClass__ = __webpack_require__(63);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Ionic native**/
/**Classes**/

/**Services**/




var UIPreparationStorage = (function (_super) {
    __extends(UIPreparationStorage, _super);
    function UIPreparationStorage(uiStorage, uiHelper, uiLog) {
        var _this = _super.call(this, uiStorage, uiHelper, uiLog, "PREPARATION") || this;
        _this.uiStorage = uiStorage;
        _this.uiHelper = uiHelper;
        _this.uiLog = uiLog;
        if (UIPreparationStorage_1.instance == null) {
            UIPreparationStorage_1.instance = _this;
        }
        return _this;
    }
    UIPreparationStorage_1 = UIPreparationStorage;
    UIPreparationStorage.prototype.getPreparationNameByUUID = function (_uuid) {
        if (_uuid.toLowerCase() === "standard") {
            return "Standard";
        }
        else {
            var entries = this.getAllEntries();
            for (var i = 0; i < entries.length; i++) {
                if (entries[i].config.uuid === _uuid) {
                    return entries[i].name;
                }
            }
            return "_nicht gefunden_";
        }
    };
    UIPreparationStorage.getInstance = function () {
        if (UIPreparationStorage_1.instance) {
            return UIPreparationStorage_1.instance;
        }
        return null;
    };
    UIPreparationStorage.prototype.getAllEntries = function () {
        var preparationEntries = _super.prototype.getAllEntries.call(this);
        var preparations = [];
        for (var i = 0; i < preparationEntries.length; i++) {
            var preparationObj = new __WEBPACK_IMPORTED_MODULE_1__classes_preparation_preparation__["a" /* Preparation */]();
            preparationObj.initializeByObject(preparationEntries[i]);
            preparations.push(preparationObj);
        }
        return preparations;
    };
    UIPreparationStorage = UIPreparationStorage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_uiStorage__["a" /* UIStorage */],
            __WEBPACK_IMPORTED_MODULE_2__services_uiHelper__["a" /* UIHelper */],
            __WEBPACK_IMPORTED_MODULE_3__services_uiLog__["a" /* UILog */]])
    ], UIPreparationStorage);
    return UIPreparationStorage;
    var UIPreparationStorage_1;
}(__WEBPACK_IMPORTED_MODULE_5__classes_storageClass__["a" /* StorageClass */]));

//# sourceMappingURL=uiPreparationStorage.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIBeanStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_bean_bean__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uiHelper__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uiLog__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_uiStorage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_storageClass__ = __webpack_require__(63);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Ionic native**/
/**Classes**/

/**Services**/




var UIBeanStorage = (function (_super) {
    __extends(UIBeanStorage, _super);
    function UIBeanStorage(uiStorage, uiHelper, uiLog) {
        var _this = _super.call(this, uiStorage, uiHelper, uiLog, "BEANS") || this;
        _this.uiStorage = uiStorage;
        _this.uiHelper = uiHelper;
        _this.uiLog = uiLog;
        if (UIBeanStorage_1.instance == null) {
            UIBeanStorage_1.instance = _this;
        }
        return _this;
    }
    UIBeanStorage_1 = UIBeanStorage;
    UIBeanStorage.getInstance = function () {
        if (UIBeanStorage_1.instance) {
            return UIBeanStorage_1.instance;
        }
        return null;
    };
    UIBeanStorage.prototype.getBeanNameByUUID = function (_uuid) {
        if (_uuid.toLowerCase() === "standard") {
            return "Standard";
        }
        else {
            var entries = this.getAllEntries();
            for (var i = 0; i < entries.length; i++) {
                if (entries[i].config.uuid === _uuid) {
                    return entries[i].name;
                }
            }
            return "_nicht gefunden_";
        }
    };
    UIBeanStorage.prototype.getAllEntries = function () {
        var beanEntries = _super.prototype.getAllEntries.call(this);
        var beans = [];
        for (var i = 0; i < beanEntries.length; i++) {
            var beanObj = new __WEBPACK_IMPORTED_MODULE_1__classes_bean_bean__["a" /* Bean */]();
            beanObj.initializeByObject(beanEntries[i]);
            beans.push(beanObj);
        }
        return beans;
    };
    UIBeanStorage = UIBeanStorage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_uiStorage__["a" /* UIStorage */],
            __WEBPACK_IMPORTED_MODULE_2__services_uiHelper__["a" /* UIHelper */],
            __WEBPACK_IMPORTED_MODULE_3__services_uiLog__["a" /* UILog */]])
    ], UIBeanStorage);
    return UIBeanStorage;
    var UIBeanStorage_1;
}(__WEBPACK_IMPORTED_MODULE_5__classes_storageClass__["a" /* StorageClass */]));

//# sourceMappingURL=uiBeanStorage.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uiStatistic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_locale_de__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment_locale_de___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment_locale_de__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**Services **/

/**Third party**/


var HomePage = (function () {
    function HomePage(navCtrl, uiStatistic) {
        this.navCtrl = navCtrl;
        this.uiStatistic = uiStatistic;
        /**Needed app minimize for android**/
        this.isHome = true;
        this.brews = 0;
        this.beans = 0;
        this.preparations = 0;
    }
    HomePage.prototype.isChristmasTime = function () {
        var month = __WEBPACK_IMPORTED_MODULE_3_moment___default()().month() + 1;
        if (month === 12) {
            return true;
        }
        else {
            return false;
        }
    };
    HomePage.prototype.getGeneratedText = function () {
        var year = __WEBPACK_IMPORTED_MODULE_3_moment___default()().year();
        var month = __WEBPACK_IMPORTED_MODULE_3_moment___default()().month() + 1;
        var day = __WEBPACK_IMPORTED_MODULE_3_moment___default()().day();
        if (year === 2018) {
            if (month == 1 && day == 1) {
                return "Wir wünschen dir ein frohes neues Jahr 2018 und natürlich ganz viel Kaffeegenuss!";
            }
            else if (month == 1 && day <= 10) {
                return "Wir wünschen dir (nachträglich) ein frohes neues Jahr und natürlich ganz viel Kaffeegenuss!";
            }
        }
        else if (year === 2017) {
            if (month == 12 && (day == 24 || day == 25 || day == 26)) {
                return "Wir wünschen dir fröhliche Weihnachten und ganz viel Kaffee!";
            }
            else if (month == 12 && day < 24) {
                return "Vergiss nicht noch etwas Kaffee einzukaufen :)";
            }
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-5 text-center>\n\n        <ion-img *ngIf="isChristmasTime()"class="logo-icon-christmas" src="assets/img/icon_christmas.png"\n\n                 style="background:transparent;"></ion-img>\n\n        <ion-img *ngIf="!isChristmasTime()"class="logo-icon" src="assets/img/icon.png"\n\n                 style="background:transparent;"></ion-img>\n\n      </ion-col>\n\n      <ion-col col-7 text-center>\n\n        <h1 style="font-size:2rem;">Beanconqueror</h1>\n\n        <p style="font-size:1.2rem;">Schön dass du hier bist!</p>\n\n        <p style="font-size:1.2rem;">{{getGeneratedText()}}</p>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6 text-center>\n\n        <ion-card style="height: 100%;">\n\n          <ion-card-header style="font-size: 2em;">\n\n            <ion-icon name="cafe" item-start></ion-icon>\n\n            {{uiStatistic.getBrewsDrunk()}}\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            <span *ngIf="uiStatistic.getBrewsDrunk() == 1">\n\n                    Brühung gesamt\n\n            </span>\n\n            <span *ngIf="uiStatistic.getBrewsDrunk() != 1">\n\n                  Brühungen gesamt\n\n            </span>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-6 text-center>\n\n        <ion-card style="height: 100%;">\n\n          <ion-card-header style="font-size: 2em;">\n\n            <i class="menu-icon fa fa-pagelines"></i>\n\n            {{uiStatistic.getBeansCount()}}\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n              <span *ngIf="uiStatistic.getBeansCount() == 1">\n\n                     Bohne erkundet\n\n              </span>\n\n            <span *ngIf="uiStatistic.getBeansCount() != 1">\n\n                     Bohnen erkundet\n\n              </span>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="uiStatistic.getLastDrunkBrewTimestamp()">\n\n      <ion-col col-12 text-center>\n\n        <ion-card>\n\n          <ion-card-header style="font-size: 2em;">{{uiStatistic.getSloganTimePassedSinceLastBrew()}}</ion-card-header>\n\n          <ion-card-content>\n\n            Letzter Bezug: {{uiStatistic.getLastDrunkBrewTimestamp()}}<br>\n\n            (<i class="menu-icon fa fa-pagelines"></i>&nbsp;{{uiStatistic.getLastBeanUsed()}},&nbsp;<i class="menu-icon fa fa-flask"></i>&nbsp;{{uiStatistic.getLastPreparationMethodUsed()}})\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="uiStatistic.getPreparationsCount()>2">\n\n      <ion-col col-12 text-center>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <strong>Unterschiedliche Zubereitungsmethoden:</strong> {{uiStatistic.getPreparationsCount()}}\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="uiStatistic.getTotalGround()!=0">\n\n      <ion-col col-12 text-center>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <strong>Gesamt gemahlen:</strong> {{uiStatistic.getTotalGround()}}&nbsp;g\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row *ngIf="uiStatistic.getTotalDrunk()!=0">\n\n      <ion-col col-12 text-center>\n\n        <ion-card>\n\n          <ion-card-content>\n\n            <strong>Gesamt getrunken:</strong> {{uiStatistic.getTotalDrunk()}} ml/g\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\home\home.html"*/,
            selector: 'home-page'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_uiStatistic__["a" /* UIStatistic */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIStatistic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_uiPreparationStorage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uiBeanStorage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uiBrewStorage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_uiHelper__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Services **/




var UIStatistic = (function () {
    function UIStatistic(uiPreparationStorage, uiBeanStorage, uiBrewStorage, uiHelper) {
        this.uiPreparationStorage = uiPreparationStorage;
        this.uiBeanStorage = uiBeanStorage;
        this.uiBrewStorage = uiBrewStorage;
        this.uiHelper = uiHelper;
    }
    UIStatistic.prototype.getLastBrew = function () {
        var brews = this.uiBrewStorage.getAllEntries();
        if (brews.length > 0) {
            var lastIndex = brews.length - 1;
            var lastBrew = brews[lastIndex];
            return lastBrew;
        }
        return null;
    };
    UIStatistic.prototype.getBrewsDrunk = function () {
        return this.uiBrewStorage.getAllEntries().length;
    };
    UIStatistic.prototype.getBeansCount = function () {
        return this.uiBeanStorage.getAllEntries().length;
    };
    UIStatistic.prototype.getPreparationsCount = function () {
        return this.uiPreparationStorage.getAllEntries().length;
    };
    UIStatistic.prototype.getLastDrunkBrewTimestamp = function () {
        var lastBrew = this.getLastBrew();
        if (lastBrew != null) {
            return this.uiHelper.formateDate(lastBrew.config.unix_timestamp, "HH:mm:ss, DD.MM.YYYY");
        }
        return "";
    };
    UIStatistic.prototype.getTimePassedSinceLastBrew = function () {
        var lastBrew = this.getLastBrew();
        if (lastBrew != null) {
            var timeDiff = this.uiHelper.timeDifference(lastBrew.config.unix_timestamp);
            if (timeDiff.MINUTES === 1) {
                return timeDiff.MINUTES + " Minute";
            }
            else {
                return timeDiff.MINUTES + " Minuten";
            }
        }
        return "";
    };
    UIStatistic.prototype.getSloganTimePassedSinceLastBrew = function () {
        var timePassed = this.getTimePassedSinceLastBrew();
        if (timePassed != "") {
            return timePassed + " ohne Kaffee";
        }
        return "Noch kein Kaffee getrunken.";
    };
    UIStatistic.prototype.getLastBeanUsed = function () {
        var lastBrew = this.getLastBrew();
        if (lastBrew != null) {
            return this.uiBeanStorage.getBeanNameByUUID(lastBrew.bean);
        }
        return "_nicht gefunden_";
    };
    UIStatistic.prototype.getLastPreparationMethodUsed = function () {
        var lastBrew = this.getLastBrew();
        if (lastBrew != null) {
            return this.uiPreparationStorage.getPreparationNameByUUID(lastBrew.method_of_preparation);
        }
        return "_nicht gefunden_";
    };
    UIStatistic.prototype.getTotalGround = function () {
        var brews = this.uiBrewStorage.getAllEntries();
        if (brews.length > 0) {
            var sum = 0;
            for (var _i = 0, brews_1 = brews; _i < brews_1.length; _i++) {
                var brew = brews_1[_i];
                sum += +brew.grind_weight;
            }
            return sum;
        }
        return 0;
    };
    UIStatistic.prototype.getTotalDrunk = function () {
        var brews = this.uiBrewStorage.getAllEntries();
        if (brews.length > 0) {
            var sum = 0;
            for (var _i = 0, brews_2 = brews; _i < brews_2.length; _i++) {
                var brew = brews_2[_i];
                //TODO: fill with settings.brew_quantity
                sum += brew.brew_quantity;
            }
            return sum;
        }
        return 0;
    };
    UIStatistic = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_uiPreparationStorage__["a" /* UIPreparationStorage */],
            __WEBPACK_IMPORTED_MODULE_2__services_uiBeanStorage__["a" /* UIBeanStorage */],
            __WEBPACK_IMPORTED_MODULE_3__services_uiBrewStorage__["a" /* UIBrewStorage */], __WEBPACK_IMPORTED_MODULE_4__services_uiHelper__["a" /* UIHelper */]])
    ], UIStatistic);
    return UIStatistic;
}());

//# sourceMappingURL=uiStatistic.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIBrewStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_brew_brew__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uiHelper__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uiLog__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_uiStorage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_storageClass__ = __webpack_require__(63);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Class**/

/**Services**/




var UIBrewStorage = (function (_super) {
    __extends(UIBrewStorage, _super);
    function UIBrewStorage(uiStorage, uiHelper, uiLog) {
        var _this = _super.call(this, uiStorage, uiHelper, uiLog, "BREWS") || this;
        _this.uiStorage = uiStorage;
        _this.uiHelper = uiHelper;
        _this.uiLog = uiLog;
        if (UIBrewStorage_1.instance == null) {
            UIBrewStorage_1.instance = _this;
        }
        return _this;
    }
    UIBrewStorage_1 = UIBrewStorage;
    UIBrewStorage.getInstance = function () {
        if (UIBrewStorage_1.instance) {
            return UIBrewStorage_1.instance;
        }
        return null;
    };
    UIBrewStorage.prototype.getAllEntries = function () {
        var brewEntries = _super.prototype.getAllEntries.call(this);
        var brews = [];
        for (var i = 0; i < brewEntries.length; i++) {
            var brewObj = new __WEBPACK_IMPORTED_MODULE_1__classes_brew_brew__["a" /* Brew */]();
            brewObj.initializeByObject(brewEntries[i]);
            brews.push(brewObj);
        }
        return brews;
    };
    UIBrewStorage = UIBrewStorage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_uiStorage__["a" /* UIStorage */],
            __WEBPACK_IMPORTED_MODULE_2__services_uiHelper__["a" /* UIHelper */],
            __WEBPACK_IMPORTED_MODULE_3__services_uiLog__["a" /* UILog */]])
    ], UIBrewStorage);
    return UIBrewStorage;
    var UIBrewStorage_1;
}(__WEBPACK_IMPORTED_MODULE_5__classes_storageClass__["a" /* StorageClass */]));

//# sourceMappingURL=uiBrewStorage.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_settings_brewView__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uiSettingsStorage__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Enums**/

/**Services**/

var SettingsPage = (function () {
    function SettingsPage(uiSettingsStorage) {
        this.uiSettingsStorage = uiSettingsStorage;
        this.BREW_VIEWS = __WEBPACK_IMPORTED_MODULE_1__enums_settings_brewView__["a" /* BREW_VIEW_ENUM */];
        this.settings = this.uiSettingsStorage.getSettings();
    }
    SettingsPage.prototype.saveSettings = function (_event) {
        this.uiSettingsStorage.saveSettings(this.settings);
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Einstellungen</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card>\n\n    <ion-card-header class="card-header">\n\n      Einstellungen\n\n    </ion-card-header>\n\n    <ion-card-content margin-top>\n\n      <p>Hier findest du alle spezifischen Einstellungen der App</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-item>\n\n    <ion-label>Ansicht</ion-label>\n\n    <ion-select [(ngModel)]="settings.brew_view" (ngModelChange)="saveSettings($event)">\n\n      <ion-option value="{{BREW_VIEWS.SINGLE_PAGE}}">Eine Seite</ion-option>\n\n      <ion-option value="{{BREW_VIEWS.MULTIPLE_PAGE}}" disabled>Paging</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Zeit</ion-label>\n\n    <ion-checkbox [(ngModel)]="settings.brew_time" (ngModelChange)="saveSettings($event)"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Mahlgrad</ion-label>\n\n    <ion-checkbox [(ngModel)]="settings.grind_size" (ngModelChange)="saveSettings($event)"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Output: Gewicht/Menge</ion-label>\n\n    <ion-checkbox [(ngModel)]="settings.grind_weight" (ngModelChange)="saveSettings($event)"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Notizen</ion-label>\n\n    <ion-checkbox [(ngModel)]="settings.note" (ngModelChange)="saveSettings($event)"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Zubereitungsmethode</ion-label>\n\n    <ion-checkbox [(ngModel)]="settings.method_of_preparation" (ngModelChange)="saveSettings($event)"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Bezugsmenge</ion-label>\n\n    <ion-checkbox [(ngModel)]="settings.brew_quantity" (ngModelChange)="saveSettings($event)"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Bohnensorte</ion-label>\n\n    <ion-checkbox [(ngModel)]="settings.bean_type" (ngModelChange)="saveSettings($event)"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Brühtemperatur</ion-label>\n\n    <ion-checkbox [(ngModel)]="settings.brew_temperature" (ngModelChange)="saveSettings($event)"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Kaffeetyp</ion-label>\n\n    <ion-checkbox [(ngModel)]="settings.coffee_type" (ngModelChange)="saveSettings($event)"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Kaffee-Konzentration</ion-label>\n\n    <ion-checkbox [(ngModel)]="settings.coffee_concentration" (ngModelChange)="saveSettings($event)"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Erster Kaffeetropfen</ion-label>\n\n    <ion-checkbox [(ngModel)]="settings.coffee_first_drip_time" (ngModelChange)="saveSettings($event)"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Blooming-Zeit / Preinfusion</ion-label>\n\n    <ion-checkbox [(ngModel)]="settings.coffee_blooming_time" (ngModelChange)="saveSettings($event)"></ion-checkbox>\n\n  </ion-item>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label>Anhänge</ion-label>\n\n    <ion-checkbox [(ngModel)]="settings.attachments" (ngModelChange)="saveSettings($event)"></ion-checkbox>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Bewertung</ion-label>\n\n    <ion-checkbox [(ngModel)]="settings.rating" (ngModelChange)="saveSettings($event)"></ion-checkbox>\n\n  </ion-item>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_uiSettingsStorage__["a" /* UISettingsStorage */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeansPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uiBeanStorage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uiBrewStorage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_uiAlert__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__beans_add_beans_add__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__beans_edit_beans_edit__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Ionic**/

/**Services**/



/**Modals**/


var BeansPage = (function () {
    function BeansPage(modalCtrl, changeDetectorRef, uiBeanStorage, uiAlert, uiBrewStorage) {
        this.modalCtrl = modalCtrl;
        this.changeDetectorRef = changeDetectorRef;
        this.uiBeanStorage = uiBeanStorage;
        this.uiAlert = uiAlert;
        this.uiBrewStorage = uiBrewStorage;
        this.beans = null;
    }
    BeansPage.prototype.ionViewWillEnter = function () {
        this.loadBeans();
    };
    BeansPage.prototype.__initializeBeans = function () {
        this.beans = this.uiBeanStorage.getAllEntries();
    };
    BeansPage.prototype.loadBeans = function () {
        this.__initializeBeans();
        this.changeDetectorRef.detectChanges();
    };
    BeansPage.prototype.addBean = function () {
        var _this = this;
        var addBeanModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__beans_add_beans_add__["a" /* BeansAddModal */], {});
        addBeanModal.onDidDismiss(function () {
            _this.loadBeans();
        });
        addBeanModal.present({ animate: false });
    };
    BeansPage.prototype.editBean = function (_bean) {
        var _this = this;
        var editBeansModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__beans_edit_beans_edit__["a" /* BeansEditModal */], { 'BEAN': _bean });
        editBeansModal.onDidDismiss(function () {
            _this.loadBeans();
        });
        editBeansModal.present({ animate: false });
    };
    BeansPage.prototype.deleteBean = function (_bean) {
        var _this = this;
        this.uiAlert.showConfirm("Bohne löschen? Alle zugehörigen Brühungen werden mit entfernt.", "Sicher?").then(function () {
            //Yes
            _this.__deleteBean(_bean);
        }, function () {
            //No
        });
    };
    BeansPage.prototype.__deleteBean = function (_bean) {
        var brews = this.uiBrewStorage.getAllEntries();
        var deletingBrewIndex = [];
        for (var i = 0; i < brews.length; i++) {
            if (brews[i].bean === _bean.config.uuid) {
                deletingBrewIndex.push(i);
            }
        }
        for (var i = deletingBrewIndex.length; i--;) {
            this.uiBrewStorage.removeByUUID(brews[deletingBrewIndex[i]].config.uuid);
        }
        this.uiBeanStorage.removeByObject(_bean);
        this.loadBeans();
    };
    BeansPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\beans\beans.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Bohnen</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- Real floating action button, fixed. It will not scroll with the content -->\n\n  <ion-fab top right edge #fab1>\n\n    <button ion-fab mini (click)="addBean()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n\n\n  <ion-card padding *ngIf="beans?.length == 0">\n\n    Du hast leider noch keine Bohnen hinterlegt!\n\n  </ion-card>\n\n  <ion-card *ngFor="let bean of beans">\n\n    <img class="card-image" *ngIf="bean.filePath" [src]="bean.filePath"/>\n\n    <ion-card-header>\n\n      {{bean.name}}\n\n    </ion-card-header>\n\n    <ion-card-content *ngIf="bean.note != \'\'">\n\n      {{bean.note}}\n\n    </ion-card-content>\n\n    <ion-row>\n\n      <ion-col>\n\n        <div style="padding:0 0.9em;" justify-content-start color="dark" clear block small icon-left>\n\n          <ion-icon name="thermometer" item-start></ion-icon>\n\n          <span>Röstgrad: {{bean.getRoastName()}}</span>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <div style="padding:0 0.9em;" justify-content-start color="dark" clear block small icon-left>\n\n          <ion-icon name="calendar" item-start></ion-icon>\n\n          <span>Röstdatum: {{bean.roastingDate | formatDate:["DD.MM.YYYY"]}}</span>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button justify-content-start color="dark" clear ion-button block small icon-left (click)="editBean(bean)">\n\n          <ion-icon name="md-create" item-start></ion-icon>\n\n          <span>Editieren</span>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button justify-content-start color="dark" clear ion-button block small icon-left (click)="deleteBean(bean)">\n\n          <ion-icon name="trash" item-start></ion-icon>\n\n          <span>Löschen</span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\beans\beans.html"*/,
            selector: 'beans-list',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_2__services_uiBeanStorage__["a" /* UIBeanStorage */], __WEBPACK_IMPORTED_MODULE_4__services_uiAlert__["a" /* UIAlert */], __WEBPACK_IMPORTED_MODULE_3__services_uiBrewStorage__["a" /* UIBrewStorage */]])
    ], BeansPage);
    return BeansPage;
}());

//# sourceMappingURL=beans.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeansAddModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uiBeanStorage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uiImage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_bean_bean__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums_beans_roasts__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Ionic**/

/**Services**/


/**Classes**/

/**Enums**/

var BeansAddModal = (function () {
    function BeansAddModal(viewCtrl, uiBeanStorage, uiImage) {
        this.viewCtrl = viewCtrl;
        this.uiBeanStorage = uiBeanStorage;
        this.uiImage = uiImage;
        this.data = new __WEBPACK_IMPORTED_MODULE_4__classes_bean_bean__["a" /* Bean */]();
        this.roastsEnum = __WEBPACK_IMPORTED_MODULE_5__enums_beans_roasts__["a" /* ROASTS_ENUM */];
        this.data.roastingDate = new Date().toISOString();
    }
    BeansAddModal.prototype.addBean = function (form) {
        if (form.valid) {
            this.__addBean();
        }
    };
    BeansAddModal.prototype.__addBean = function () {
        this.uiBeanStorage.add(this.data);
        this.dismiss();
    };
    BeansAddModal.prototype.addImage = function () {
        var _this = this;
        this.uiImage.showOptionChooser().then(function (_option) {
            if (_option === "CHOOSE") {
                //CHOSE
                _this.uiImage.choosePhoto().then(function (_path) {
                    console.log(_path);
                    if (_path) {
                        _this.data.filePath = _path.toString();
                    }
                }, function () {
                });
            }
            else {
                //TAKE
                _this.uiImage.takePhoto().then(function (_path) {
                    _this.data.filePath = _path.toString();
                }, function () {
                });
            }
        });
    };
    BeansAddModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss("", null, { animate: false });
    };
    BeansAddModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\beans\add\beans-add.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n        &nbsp;Zurück\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form #addBeanForm="ngForm" novalidate>\n\n    <ion-item>\n\n      <ion-label fixed >Name*</ion-label>\n\n      <ion-input [(ngModel)]="data.name" name="name" type="text" #name="ngModel" spellcheck="false"\n\n                 autocapitalize="off" required>\n\n      </ion-input>\n\n    </ion-item>\n\n     <ion-item>\n\n\n\n      <ion-label>Röstgrad*</ion-label>\n\n      <ion-select  [(ngModel)]="data.roast"  name="roast" #roast="ngModel">\n\n        <ion-option *ngFor="let key of roastsEnum | keys" value="{{key}}">{{roastsEnum[key]}}</ion-option>\n\n\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label fixed >Röstdatum*</ion-label>\n\n      <ion-datetime min="2000-01-01" max="2999-12-31" displayFormat="DD.MM.YYYY" [(ngModel)]="data.roastingDate" name="roastingDate"\n\n                    #roastingDate="ngModel"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label fixed>Notizen</ion-label>\n\n      <ion-textarea autocomplete="true" spellcheck="true" autocorrect="true" name="note" #note="ngModel" rows="5" [(ngModel)]="data.note"></ion-textarea>\n\n    </ion-item>\n\n    <button ion-item (click)="addImage()">\n\n      Foto hinzufügen\n\n    </button>\n\n    <div *ngIf="data.filePath != \'\'">\n\n      <img [src]="data.filePath" style="padding: 0px 20px;">\n\n    </div>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button (click)="dismiss()" dark outline block>Abbrechen</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button (click)="addBean(addBeanForm)" type="submit" block>Anlegen</button>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\beans\add\beans-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_uiBeanStorage__["a" /* UIBeanStorage */], __WEBPACK_IMPORTED_MODULE_3__services_uiImage__["a" /* UIImage */]])
    ], BeansAddModal);
    return BeansAddModal;
}());

//# sourceMappingURL=beans-add.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeansEditModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uiBeanStorage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uiHelper__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_uiImage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_bean_bean__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__enums_beans_roasts__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Ionic**/

/**Services**/


/**Ionic native**/

/**Classes**/

/**Enums**/

var BeansEditModal = (function () {
    function BeansEditModal(navParams, viewCtrl, uiBeanStorage, uiImage, uiHelper) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.uiBeanStorage = uiBeanStorage;
        this.uiImage = uiImage;
        this.uiHelper = uiHelper;
        this.data = new __WEBPACK_IMPORTED_MODULE_5__classes_bean_bean__["a" /* Bean */]();
        this.roastsEnum = __WEBPACK_IMPORTED_MODULE_6__enums_beans_roasts__["a" /* ROASTS_ENUM */];
        this.data.roastingDate = new Date().toISOString();
    }
    BeansEditModal.prototype.ionViewWillEnter = function () {
        this.bean = this.navParams.get('BEAN');
        this.data = this.uiHelper.copyData(this.bean);
    };
    BeansEditModal.prototype.editBean = function (form) {
        if (form.valid) {
            this.__editBean();
        }
    };
    BeansEditModal.prototype.__editBean = function () {
        this.uiBeanStorage.update(this.data);
        this.dismiss();
    };
    BeansEditModal.prototype.addImage = function () {
        var _this = this;
        this.uiImage.showOptionChooser().then(function (_option) {
            if (_option === "CHOOSE") {
                //CHOSE
                _this.uiImage.choosePhoto().then(function (_path) {
                    _this.data.filePath = _path.toString();
                }, function () {
                });
            }
            else {
                //TAKE
                _this.uiImage.takePhoto().then(function (_path) {
                    _this.data.filePath = _path.toString();
                }, function () {
                });
            }
        });
    };
    BeansEditModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss("", null, { animate: false });
    };
    BeansEditModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\beans\edit\beans-edit.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n        &nbsp;Zurück\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form #editBeanForm="ngForm" novalidate>\n\n    <ion-item>\n\n      <ion-label fixed>Name*</ion-label>\n\n      <ion-input [(ngModel)]="data.name" name="name" type="text" #name="ngModel" spellcheck="false"\n\n                 autocapitalize="off" required>\n\n      </ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Röstgrad*</ion-label>\n\n      <ion-select [(ngModel)]="data.roast" name="roast" #roast="ngModel">\n\n        <ion-option *ngFor="let key of roastsEnum | keys" value="{{key}}">{{roastsEnum[key]}}</ion-option>\n\n\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label fixed>Röstdatum*</ion-label>\n\n      <ion-datetime min="2000-01-01" max="2999-12-31" displayFormat="DD.MM.YYYY" [(ngModel)]="data.roastingDate"\n\n                    name="roastingDate"\n\n                    #roastingDate="ngModel"></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label fixed>Notizen</ion-label>\n\n      <ion-textarea autocomplete="true" spellcheck="true" autocorrect="true" name="note" #note="ngModel" rows="5"\n\n                    [(ngModel)]="data.note"></ion-textarea>\n\n    </ion-item>\n\n    <button ion-item (click)="addImage()">\n\n      Foto hinzufügen\n\n    </button>\n\n    <div *ngIf="data.filePath != \'\'">\n\n      <img [src]="data.filePath" style="padding: 0px 20px;">\n\n    </div>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button (click)="dismiss()" dark outline block>Abbrechen</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button (click)="editBean(editBeanForm)" type="submit" block>Speichern</button>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\beans\edit\beans-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_uiBeanStorage__["a" /* UIBeanStorage */], __WEBPACK_IMPORTED_MODULE_4__services_uiImage__["a" /* UIImage */], __WEBPACK_IMPORTED_MODULE_3__services_uiHelper__["a" /* UIHelper */]])
    ], BeansEditModal);
    return BeansEditModal;
}());

//# sourceMappingURL=beans-edit.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uiBrewStorage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uiBeanStorage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_uiPreparationStorage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_uiAlert__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_uiHelper__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_uiSettingsStorage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__classes_brew_brewView__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__brews_popover_brews_popover__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__brews_add_brews_add__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__brews_edit_brews_edit__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__brews_details_brews_details__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__brews_photo_view_brews_photo_view__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/


/**Ionic**/

/**Services**/








/**Modals**/




var BrewsPage = (function () {
    function BrewsPage(modalCtrl, uiBrewStorage, changeDetectorRef, uiAlert, uiBeanStorage, uiPreparationStorage, uiHelper, uiSettingsStorage, popoverCtrl, alertCtrl) {
        this.modalCtrl = modalCtrl;
        this.uiBrewStorage = uiBrewStorage;
        this.changeDetectorRef = changeDetectorRef;
        this.uiAlert = uiAlert;
        this.uiBeanStorage = uiBeanStorage;
        this.uiPreparationStorage = uiPreparationStorage;
        this.uiHelper = uiHelper;
        this.uiSettingsStorage = uiSettingsStorage;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.brewsView = [];
        this.hasBeans = false;
        this.hasPreparationMethods = false;
        this.settings = this.uiSettingsStorage.getSettings();
    }
    BrewsPage.prototype.ionViewWillEnter = function () {
        this.loadBrews();
        //If we don't have beans, we cant do a brew from now on, because of roasting degree and the age of beans.
        this.hasBeans = (this.uiBeanStorage.getAllEntries().length > 0);
        this.hasPreparationMethods = (this.uiPreparationStorage.getAllEntries().length > 0);
    };
    BrewsPage.prototype.editBrew = function (_brew) {
        var _this = this;
        var editBrewModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__brews_edit_brews_edit__["a" /* BrewsEditModal */], { 'BREW': _brew });
        editBrewModal.onDidDismiss(function () {
            _this.loadBrews();
        });
        editBrewModal.present({ animate: false });
    };
    BrewsPage.prototype.detailBrew = function (_brew) {
        var _this = this;
        var editBrewModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__brews_details_brews_details__["a" /* BrewsDetailsModal */], { 'BREW': _brew });
        editBrewModal.onDidDismiss(function () {
            _this.loadBrews();
        });
        editBrewModal.present({ animate: false });
    };
    BrewsPage.prototype.viewPhotos = function (_brew) {
        var brewsPhotoViewModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__brews_photo_view_brews_photo_view__["a" /* BrewsPhotoView */], { 'BREW': _brew });
        brewsPhotoViewModal.onDidDismiss(function () {
        });
        brewsPhotoViewModal.present({ animate: false });
    };
    BrewsPage.prototype.deleteBrew = function (_brew) {
        var _this = this;
        this.uiAlert.showConfirm("Brühung löschen?", "Sicher?").then(function () {
            //Yes
            _this.__deleteBrew(_brew);
        }, function () {
            //No
        });
    };
    BrewsPage.prototype.__deleteBrew = function (_brew) {
        this.uiBrewStorage.removeByObject(_brew);
        this.loadBrews();
    };
    BrewsPage.prototype.downloadCSV = function () {
        var _this = this;
        var exportToCsv = function (filename, rows) {
            var processRow = function (row) {
                var finalVal = '';
                for (var j = 0; j < row.length; j++) {
                    var innerValue = row[j] === null ? '' : row[j].toString();
                    if (row[j] instanceof Date) {
                        innerValue = row[j].toLocaleString();
                    }
                    var result = innerValue.replace(/"/g, '""');
                    if (result.search(/("|,|\n)/g) >= 0)
                        result = '"' + result + '"';
                    if (j > 0)
                        finalVal += ',';
                    finalVal += result;
                }
                return finalVal + '\n';
            };
            var csvFile = '';
            for (var i = 0; i < rows.length; i++) {
                csvFile += processRow(rows[i]);
            }
            _this.uiHelper.exportCSV(filename, csvFile).then(function (_downloadedFileName) {
                var alert = _this.alertCtrl.create({
                    title: 'Heruntergeladen!',
                    subTitle: "CSV-Datei '" + _downloadedFileName + "' wurde erfolgreich in den Download-Ordner heruntergeladen!",
                    buttons: ['OK']
                });
                alert.present();
            });
        };
        var entries = [];
        for (var i = 0; i < this.brews.length; i++) {
            var brew = this.brews[i];
            var entry = [
                { "VALUE": brew.grind_size, "LABEL": "Mahlgrad" },
                { "VALUE": brew.grind_weight, "LABEL": "Output: Gewicht/Menge" },
                { "VALUE": brew.getPreparation().name, "LABEL": "Zubereitungsmethode" },
                { "VALUE": brew.getBean().name, "LABEL": "Bohne" },
                { "VALUE": brew.brew_temperature, "LABEL": "Brühtemperatur" },
                { "VALUE": brew.brew_time, "LABEL": "Brühzeit" },
                { "VALUE": brew.brew_quantity, "LABEL": "Bezugsmenge" },
                { "VALUE": brew.note, "LABEL": "Notizen" },
                { "VALUE": brew.rating, "LABEL": "Bewertung" },
                { "VALUE": brew.coffee_type, "LABEL": "Kaffeetyp" },
                { "VALUE": brew.coffee_concentration, "LABEL": "Kaffee-Konzentration" },
                { "VALUE": brew.coffee_first_drip_time, "LABEL": "Erster Kaffeetropfen" },
                { "VALUE": brew.coffee_blooming_time, "LABEL": "Blooming-Zeit / Preinfusion" },
                { "VALUE": brew.getCalculatedBeanAge(), "LABEL": "Bohnenalter" },
            ];
            entries.push(entry);
        }
        //create CSV header labels
        var exportData = [];
        var headersSet = false;
        for (var i_1 = 0; i_1 < entries.length; i_1++) {
            var entry = entries[i_1];
            var addValues = [];
            if (headersSet == false) {
                for (var z = 0; z < entry.length; z++) {
                    addValues.push(entry[z].LABEL);
                }
                headersSet = true;
                exportData.push(addValues);
            }
            addValues = [];
            for (var z = 0; z < entry.length; z++) {
                addValues.push(entry[z].VALUE);
            }
            exportData.push(addValues);
        }
        var now = new Date();
        var currentDateTimeString = now.getMonth() + 1 + '-' + now.getDate() + '-' + now.getFullYear() + '-' + now.getHours() + now.getMinutes() + now.getSeconds();
        //generate file
        exportToCsv('Beanconqueror-' + currentDateTimeString + '.csv', exportData);
    };
    BrewsPage.prototype.showMore = function (event) {
        var _this = this;
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_9__brews_popover_brews_popover__["a" /* BrewsPopover */], {});
        popover.onDidDismiss(function (data) {
            if (data == __WEBPACK_IMPORTED_MODULE_9__brews_popover_brews_popover__["a" /* BrewsPopover */].ACTIONS.DOWNLOAD) {
                _this.downloadCSV();
            }
        });
        popover.present({
            ev: event
        });
    };
    BrewsPage.prototype.addBrew = function () {
        var _this = this;
        var addBrewsModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__brews_add_brews_add__["a" /* BrewsAddModal */], {});
        addBrewsModal.onDidDismiss(function () {
            _this.loadBrews();
        });
        addBrewsModal.present({ animate: false });
    };
    BrewsPage.prototype.__initializeBrews = function () {
        this.brews = this.uiBrewStorage.getAllEntries();
        this.brewsView = [];
        //sort latest to top.
        var sortedBrews = this.brews.sort(function (obj1, obj2) {
            if (obj1.config.unix_timestamp < obj2.config.unix_timestamp) {
                return 1;
            }
            if (obj1.config.unix_timestamp > obj2.config.unix_timestamp) {
                return -1;
            }
            return 0;
        });
        var collection = {};
        //Create collection
        for (var i = 0; i < sortedBrews.length; i++) {
            var day = this.uiHelper.formateDate(sortedBrews[i].config.unix_timestamp, "dddd - DD.MM.YYYY");
            if (collection[day] === undefined) {
                collection[day] = {
                    "BREWS": []
                };
            }
            collection[day]["BREWS"].push(sortedBrews[i]);
        }
        for (var key in collection) {
            var viewObj = new __WEBPACK_IMPORTED_MODULE_8__classes_brew_brewView__["a" /* BrewView */]();
            viewObj.title = key;
            viewObj.brews = collection[key].BREWS;
            this.brewsView.push(viewObj);
        }
    };
    BrewsPage.prototype.loadBrews = function () {
        this.__initializeBrews();
        this.changeDetectorRef.detectChanges();
    };
    BrewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\brews\brews.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Brühungen</ion-title>\n\n    <ion-buttons end>\n\n      <button [disabled]="!hasBeans || !hasPreparationMethods" ion-button icon-only (click)="addBrew()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only (click)="showMore($event)">\n\n        <ion-icon name="more"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-card  padding *ngIf="!hasBeans || !hasPreparationMethods">\n\n    <h2 class="error-text">Um einen Bezug zu starten, lege bitte eine <b>Bohnensorte</b> sowie eine <b>Zubereitungsmethode</b> an.</h2>\n\n  </ion-card>\n\n  <ion-card padding *ngIf="brewsView?.length == 0 && hasBeans && hasPreparationMethods">\n\n    Du hast leider noch keinen Kaffee, seit der Benutzung dieser App getrunken (schon etwas schade oder?)\n\n  </ion-card>\n\n  <ion-list *ngFor="let brewView of brewsView">\n\n    <ion-list-header class="brews-header">\n\n      {{brewView.title}}\n\n    </ion-list-header>\n\n    <ion-card *ngFor="let brew of brewView.brews">\n\n\n\n      <ion-card-header>\n\n        {{brew.formateDate("HH:mm")}}\n\n      </ion-card-header>\n\n      <div>\n\n        <ion-grid>\n\n          <ion-row>\n\n            <ion-col *ngIf="settings.grind_size === true">\n\n              <i class="fa fa-th"></i>&nbsp;{{brew.grind_size}}\n\n            </ion-col>\n\n            <ion-col *ngIf="settings.grind_weight === true">\n\n              <i class="fa fa-balance-scale"></i>&nbsp;{{brew.grind_weight}}\n\n            </ion-col>\n\n            <ion-col *ngIf="settings.brew_temperature === true">\n\n              <i class="fa fa-thermometer-half "></i>&nbsp;{{brew.brew_temperature}}\n\n            </ion-col>\n\n            <ion-col *ngIf="settings.brew_time === true">\n\n              <i class="fa fa-clock-o "></i>&nbsp;{{brew.brew_time}}\n\n            </ion-col>\n\n            <ion-col *ngIf="settings.rating === true">\n\n              <i class="fa fa-smile-o"></i>&nbsp;{{brew.rating}}\n\n            </ion-col>\n\n            <ion-col *ngIf="settings.brew_quantity === true">\n\n              <ion-icon name="beaker"></ion-icon>&nbsp;{{brew.brew_quantity}}\n\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col *ngIf="settings.method_of_preparation === true">\n\n              <i class="fa fa-flask"></i>&nbsp;{{brew.getPreparation().name}}\n\n            </ion-col>\n\n            <ion-col *ngIf="settings.bean_type === true">\n\n              <i class="fa fa-pagelines"></i>&nbsp;{{brew.getBean().name}}\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-grid>\n\n        <ion-list *ngIf="settings.note === true && brew.note !=\'\'">\n\n          <ion-item>\n\n            <span style="font-size:0.8em;" text-italic>Notizen:</span><br/>\n\n            {{brew.note}}\n\n          </ion-item>\n\n        </ion-list>\n\n      </div>\n\n      <ion-row *ngIf="settings.attachments === true">\n\n        <ion-col>\n\n          <button justify-content-start color="dark" clear *ngIf="brew?.attachments.length > 0" ion-button block small\n\n                  icon-left (click)="viewPhotos(brew)">\n\n            <ion-icon name="md-eye" item-start></ion-icon>\n\n            <span>Fotogalerie</span>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button justify-content-start color="dark" clear ion-button small block icon-left (click)="detailBrew(brew)">\n\n            <ion-icon name="list" item-start></ion-icon>\n\n            <span>Details</span>\n\n          </button>\n\n        </ion-col>\n\n\n\n        <ion-col>\n\n          <button justify-content-start color="dark" clear ion-button small block icon-left (click)="editBrew(brew)">\n\n            <ion-icon name="md-create" item-start></ion-icon>\n\n            <span>Editieren</span>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button justify-content-start color="dark" clear ion-button small block icon-left (click)="deleteBrew(brew)">\n\n            <ion-icon name="trash" item-start></ion-icon>\n\n            <span>Löschen</span>\n\n          </button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card>\n\n  </ion-list>\n\n\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\brews\brews.html"*/,
            selector: 'brews'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__services_uiBrewStorage__["a" /* UIBrewStorage */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_5__services_uiAlert__["a" /* UIAlert */],
            __WEBPACK_IMPORTED_MODULE_3__services_uiBeanStorage__["a" /* UIBeanStorage */], __WEBPACK_IMPORTED_MODULE_4__services_uiPreparationStorage__["a" /* UIPreparationStorage */],
            __WEBPACK_IMPORTED_MODULE_6__services_uiHelper__["a" /* UIHelper */], __WEBPACK_IMPORTED_MODULE_7__services_uiSettingsStorage__["a" /* UISettingsStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], BrewsPage);
    return BrewsPage;
}());

//# sourceMappingURL=brews.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrewsPopover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrewsPopover = (function () {
    function BrewsPopover(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    BrewsPopover_1 = BrewsPopover;
    BrewsPopover.prototype.download = function () {
        this.viewCtrl.dismiss(BrewsPopover_1.ACTIONS.DOWNLOAD);
    };
    BrewsPopover.ACTIONS = {
        "DOWNLOAD": "DOWNLOAD"
    };
    BrewsPopover = BrewsPopover_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\brews\popover\brews-popover.html"*/'<ion-list>\n\n  <button ion-item (click)="download()">\n\n    <ion-icon name="download" item-start></ion-icon>\n\n    Export\n\n  </button>\n\n</ion-list>\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\brews\popover\brews-popover.html"*/,
            selector: 'brews-popover'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], BrewsPopover);
    return BrewsPopover;
    var BrewsPopover_1;
}());

//# sourceMappingURL=brews-popover.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrewsAddModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uiBeanStorage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uiPreparationStorage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_uiBrewStorage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_uiImage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_uiSettingsStorage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_uiHelper__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_timer_timer__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__enums_settings_brewView__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__classes_brew_brew__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Ionic**/

/**Services**/






/**Components**/

/**Enums**/

/**Classes**/

var BrewsAddModal = (function () {
    function BrewsAddModal(viewCtrl, uiBeanStorage, uiPreparationStorage, uiBrewStorage, uiImage, uiSettingsStorage, uiHelper) {
        //Initialize to standard in dropdowns
        this.viewCtrl = viewCtrl;
        this.uiBeanStorage = uiBeanStorage;
        this.uiPreparationStorage = uiPreparationStorage;
        this.uiBrewStorage = uiBrewStorage;
        this.uiImage = uiImage;
        this.uiSettingsStorage = uiSettingsStorage;
        this.uiHelper = uiHelper;
        this.data = new __WEBPACK_IMPORTED_MODULE_10__classes_brew_brew__["a" /* Brew */]();
        this.BREW_VIEW_ENUM = __WEBPACK_IMPORTED_MODULE_9__enums_settings_brewView__["a" /* BREW_VIEW_ENUM */];
        this.method_of_preparations = [];
        this.beans = [];
        this.settings = this.uiSettingsStorage.getSettings();
        this.method_of_preparations = this.uiPreparationStorage.getAllEntries();
        this.beans = this.uiBeanStorage.getAllEntries();
        //Get first entry
        this.data.bean = this.beans[0].config.uuid;
        this.data.method_of_preparation = this.method_of_preparations[0].config.uuid;
    }
    BrewsAddModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss("", null, { animate: false });
    };
    BrewsAddModal.prototype.finish = function () {
        this.stopTimer();
        this.uiBrewStorage.add(this.data);
        this.dismiss();
    };
    BrewsAddModal.prototype.getTime = function () {
        return this.timer.getSeconds();
    };
    BrewsAddModal.prototype.setCoffeeDripTime = function () {
        this.data.coffee_first_drip_time = this.getTime();
    };
    BrewsAddModal.prototype.setCoffeeBloomingTime = function () {
        this.data.coffee_blooming_time = this.getTime();
    };
    BrewsAddModal.prototype.addImage = function () {
        var _this = this;
        this.uiImage.showOptionChooser().then(function (_option) {
            if (_option === "CHOOSE") {
                //CHOSE
                _this.uiImage.choosePhoto().then(function (_path) {
                    console.log(_path);
                    if (_path) {
                        _this.data.attachments.push(_path.toString());
                    }
                }, function () {
                });
            }
            else {
                //TAKE
                _this.uiImage.takePhoto().then(function (_path) {
                    _this.data.attachments.push(_path.toString());
                }, function () {
                });
            }
        });
    };
    BrewsAddModal.prototype.deleteImage = function (_index) {
        this.data.attachments.splice(_index, 1);
        if (this.data.attachments.length > 0) {
            //Slide to one item before
            this.photoSlides.slideTo(_index - 1, 0);
        }
    };
    BrewsAddModal.prototype.stopTimer = function () {
        if (this.timer) {
            this.timer.pauseTimer();
            this.data.brew_time = this.timer.getSeconds();
        }
        else {
            this.data.brew_time = 0;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('photoSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], BrewsAddModal.prototype, "photoSlides", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_8__components_timer_timer__["a" /* TimerComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_8__components_timer_timer__["a" /* TimerComponent */])
    ], BrewsAddModal.prototype, "timer", void 0);
    BrewsAddModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'brews-add',template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\brews\add\brews-add.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n        &nbsp;Zurück\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf="settings.brew_view == BREW_VIEW_ENUM.SINGLE_PAGE">\n\n\n\n    <ion-item *ngIf="settings.grind_size === true">\n\n      <ion-label floating>Mahlgrad</ion-label>\n\n      <ion-input type="text" [(ngModel)]="data.grind_size"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.grind_weight === true">\n\n      <ion-label floating>Gewicht</ion-label>\n\n      <ion-input type="number" [ngModel]="data.grind_weight"\n\n                 (ngModelChange)="data.grind_weight = uiHelper.convertToNumber($event)" step="0.1" pattern="[0-9,.]*" step="any"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.brew_temperature === true">\n\n      <ion-label floating>Temperatur</ion-label>\n\n      <ion-input type="number" [ngModel]="data.brew_temperature" (ngModelChange)="data.brew_temperature = uiHelper.convertToNumber($event)" step="0.1" pattern="[0-9,.]*" step="any"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.method_of_preparation === true">\n\n      <ion-label floating>Zubereitungsmethode</ion-label>\n\n      <ion-select [(ngModel)]="data.method_of_preparation">\n\n\n\n        <ion-option *ngFor="let method of method_of_preparations" value="{{method.config.uuid}}">{{method.name}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.bean_type === true">\n\n      <ion-label floating>Bohnen</ion-label>\n\n      <ion-select [(ngModel)]="data.bean">\n\n        <ion-option *ngFor="let bean of beans" value="{{bean.config.uuid}}">{{bean.name}}\n\n        </ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <timer #timer timeInSeconds="0" *ngIf="settings.brew_time === true"></timer>\n\n    <ion-item *ngIf="settings.coffee_blooming_time === true">\n\n      <ion-label stacked>Blooming-Zeit / Preinfusion</ion-label>\n\n      <ion-input type="number" [ngModel]="data.coffee_blooming_time"\n\n                 (ngModelChange)="data.coffee_blooming_time = uiHelper.convertToNumber($event)"></ion-input>\n\n      <button ion-button icon-left clear small color="primary" (click)="setCoffeeBloomingTime()" item-right>\n\n        <ion-icon name="time"></ion-icon>\n\n        Zeit!\n\n      </button>\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.coffee_first_drip_time === true">\n\n      <ion-label stacked>Erster Kaffeetropfen</ion-label>\n\n      <ion-input type="number" [ngModel]="data.coffee_first_drip_time"\n\n                 (ngModelChange)="data.coffee_first_drip_time = uiHelper.convertToNumber($event)"></ion-input>\n\n      <button ion-button icon-left clear small color="primary" (click)="setCoffeeDripTime()" item-right>\n\n        <ion-icon name="time"></ion-icon>\n\n        Zeit!\n\n      </button>\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.brew_quantity === true">\n\n      <ion-label floating>Bezugsmenge</ion-label>\n\n      <ion-input type="number" [ngModel]="data.brew_quantity"\n\n                 (ngModelChange)="data.brew_quantity = uiHelper.convertToNumber($event)" step="0.1" pattern="[0-9,.]*" step="any"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.coffee_type=== true">\n\n      <ion-label floating>Kaffeetyp</ion-label>\n\n      <ion-input type="text" [(ngModel)]="data.coffee_type"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.coffee_concentration=== true">\n\n      <ion-label floating>Kaffee-Konzentration</ion-label>\n\n      <ion-input type="text" [(ngModel)]="data.coffee_concentration"></ion-input>\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.rating === true">\n\n      <ion-label stacked>Bewertung&nbsp;<ion-badge style="float:right;" color="secondary">{{data.rating}}</ion-badge>\n\n      </ion-label>\n\n      <ion-range min="1" max="10" step="1" snaps="true" debounce="1000" [(ngModel)]="data.rating">\n\n        <ion-icon range-left small name="sad"></ion-icon>\n\n        <ion-icon range-right name="happy"></ion-icon>\n\n      </ion-range>\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.note === true">\n\n      <ion-label stacked>Notizen</ion-label>\n\n      <ion-textarea autocomplete="true" spellcheck="true" autocorrect="true" [(ngModel)]="data.note"\n\n                    rows="5"></ion-textarea>\n\n    </ion-item>\n\n    <button ion-item (click)="addImage()" *ngIf="settings.attachments === true">\n\n      Foto hinzufügen\n\n    </button>\n\n    <div *ngIf="data?.attachments && data.attachments.length > 0 && settings.attachments === true">\n\n      <ion-slides #photoSlides pager="true">\n\n        <ion-slide *ngFor="let attachment of data.attachments;let i = index">\n\n          <ion-buttons end>\n\n            <button ion-button color="primary" (click)="deleteImage(i)">Löschen</button>\n\n          </ion-buttons>\n\n\n\n          <img [src]="attachment" class="brew-image">\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n    <button margin-top ion-button block icon-right (click)="finish()">\n\n      Speichern & Abschließen\n\n      <ion-icon name="arrow-forward"></ion-icon>\n\n    </button>\n\n\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\brews\add\brews-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_uiBeanStorage__["a" /* UIBeanStorage */], __WEBPACK_IMPORTED_MODULE_3__services_uiPreparationStorage__["a" /* UIPreparationStorage */],
            __WEBPACK_IMPORTED_MODULE_4__services_uiBrewStorage__["a" /* UIBrewStorage */], __WEBPACK_IMPORTED_MODULE_5__services_uiImage__["a" /* UIImage */], __WEBPACK_IMPORTED_MODULE_6__services_uiSettingsStorage__["a" /* UISettingsStorage */], __WEBPACK_IMPORTED_MODULE_7__services_uiHelper__["a" /* UIHelper */]])
    ], BrewsAddModal);
    return BrewsAddModal;
}());

//# sourceMappingURL=brews-add.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimerComponent = (function () {
    function TimerComponent() {
    }
    TimerComponent.prototype.ngOnInit = function () {
        this.initTimer();
    };
    TimerComponent.prototype.hasFinished = function () {
        return this.timer.hasFinished;
    };
    TimerComponent.prototype.initTimer = function () {
        if (!this.timeInSeconds) {
            this.timeInSeconds = 0;
        }
        this.timer = {
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            seconds: this.timeInSeconds
        };
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.seconds);
    };
    TimerComponent.prototype.startTimer = function () {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    };
    TimerComponent.prototype.pauseTimer = function () {
        this.timer.runTimer = false;
    };
    TimerComponent.prototype.resumeTimer = function () {
        this.startTimer();
    };
    TimerComponent.prototype.timerTick = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.timer.runTimer) {
                return;
            }
            _this.timer.seconds++;
            _this.timer.displayTime = _this.getSecondsAsDigitalClock(_this.timer.seconds);
            _this.timerTick();
        }, 1000);
    };
    TimerComponent.prototype.getSeconds = function () {
        return this.timer.seconds;
    };
    TimerComponent.prototype.getSecondsAsDigitalClock = function (inputSeconds) {
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], TimerComponent.prototype, "timeInSeconds", void 0);
    TimerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'timer',template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\components\timer\timer.html"*/'<ion-item class="no-bottom-border item">\n\n  <ion-label stacked>Zeit</ion-label>\n\n  <ion-input type="number"  [(ngModel)]="timer.seconds"></ion-input>\n\n  <button ion-button icon-left clear color="danger" small (click)="initTimer()" item-right\n\n          *ngIf="!timer.runTimer && (timer.hasStarted || timer.hasFinished) || timer.hasFinished">\n\n    <ion-icon name="refresh"></ion-icon>\n\n    Reset\n\n  </button>\n\n  <button ion-button icon-left clear small color="primary" (click)="pauseTimer()" item-right\n\n          *ngIf="timer.runTimer && timer.hasStarted && !timer.hasFinished">\n\n    <ion-icon name="pause"></ion-icon>\n\n    Pause\n\n  </button>\n\n  <button ion-button icon-left clear small color="primary" (click)="resumeTimer()" item-right\n\n          *ngIf="!timer.runTimer && timer.hasStarted && !timer.hasFinished">\n\n    <ion-icon name="play"></ion-icon>\n\n    Resume\n\n  </button>\n\n  <button ion-button icon-left clear small color="primary" (click)="startTimer()" item-right *ngIf="!timer.hasStarted">\n\n    <ion-icon name="play"></ion-icon>\n\n    Start\n\n  </button>\n\n</ion-item>\n\n\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\components\timer\timer.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TimerComponent);
    return TimerComponent;
}());

//# sourceMappingURL=timer.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrewsEditModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uiBeanStorage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uiPreparationStorage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_uiBrewStorage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_uiHelper__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_uiImage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__classes_brew_brew__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Ionic**/

/**Services**/





/**Classes**/

var BrewsEditModal = (function () {
    function BrewsEditModal(viewCtrl, navParams, uiBeanStorage, uiPreparationStorage, uiBrewStorage, uiHelper, uiImage) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.uiBeanStorage = uiBeanStorage;
        this.uiPreparationStorage = uiPreparationStorage;
        this.uiBrewStorage = uiBrewStorage;
        this.uiHelper = uiHelper;
        this.uiImage = uiImage;
        this.data = new __WEBPACK_IMPORTED_MODULE_7__classes_brew_brew__["a" /* Brew */]();
        this.method_of_preparations = [];
        this.beans = [];
        this.activeIndex = 0;
        //Moved from ionViewDidEnter, because of Ionic issues with ion-range
        this.brew = this.navParams.get('BREW');
        var copy = this.uiHelper.copyData(this.brew);
        this.data.initializeByObject(copy);
        this.method_of_preparations = this.uiPreparationStorage.getAllEntries();
        this.beans = this.uiBeanStorage.getAllEntries();
    }
    BrewsEditModal.prototype.showRating = function () {
        if (this.data != null && this.data.rating >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    BrewsEditModal.prototype.addImage = function () {
        var _this = this;
        this.uiImage.showOptionChooser().then(function (_option) {
            if (_option === "CHOOSE") {
                //CHOSE
                _this.uiImage.choosePhoto().then(function (_path) {
                    console.log(_path);
                    if (_path) {
                        _this.data.attachments.push(_path.toString());
                    }
                }, function () {
                });
            }
            else {
                //TAKE
                _this.uiImage.takePhoto().then(function (_path) {
                    _this.data.attachments.push(_path.toString());
                }, function () {
                });
            }
        });
    };
    BrewsEditModal.prototype.deleteImage = function (_index) {
        this.data.attachments.splice(_index, 1);
        if (this.data.attachments.length > 0) {
            //Slide to one item before
            this.photoSlides.slideTo(_index - 1, 0);
        }
    };
    BrewsEditModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss("", null, { animate: false });
    };
    BrewsEditModal.prototype.updateBrew = function () {
        this.uiBrewStorage.update(this.data);
        this.dismiss();
    };
    BrewsEditModal.prototype.nextPage = function () {
        this.activeIndex++;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('photoSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], BrewsEditModal.prototype, "photoSlides", void 0);
    BrewsEditModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'brews-edit',template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\brews\edit\brews-edit.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n        &nbsp;Zurück\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Mahlgrad</ion-label>\n\n    <ion-input type="text" [(ngModel)]="data.grind_size"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Gewicht</ion-label>\n\n    <ion-input type="number" [ngModel]="data.grind_weight"\n\n               (ngModelChange)="data.grind_weight = uiHelper.convertToNumber($event)"  step="0.1" pattern="[0-9,.]*" step="any"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Temperatur</ion-label>\n\n    <ion-input type="number" [ngModel]="data.brew_temperature"\n\n               (ngModelChange)="data.brew_temperature = uiHelper.convertToNumber($event)"  step="0.1" pattern="[0-9,.]*" step="any"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Zubereitungsmethode</ion-label>\n\n    <ion-select [(ngModel)]="data.method_of_preparation">\n\n      <ion-option *ngFor="let method of method_of_preparations" value="{{method.config.uuid}}">{{method.name}}\n\n      </ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Bohnen</ion-label>\n\n    <ion-select [(ngModel)]="data.bean">\n\n      <ion-option *ngFor="let bean of beans" value="{{bean.config.uuid}}">{{bean.name}}\n\n      </ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Zeit</ion-label>\n\n    <ion-input type="number" [ngModel]="data.brew_time"\n\n               (ngModelChange)="data.brew_time = uiHelper.convertToNumber($event)"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Blooming-Zeit / Preinfusion</ion-label>\n\n    <ion-input type="number" [ngModel]="data.coffee_blooming_time"\n\n               (ngModelChange)="data.coffee_blooming_time = uiHelper.convertToNumber($event)"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Erster Kaffeetropfen</ion-label>\n\n    <ion-input type="number" [ngModel]="data.coffee_first_drip_time"\n\n               (ngModelChange)="data.coffee_first_drip_time = uiHelper.convertToNumber($event)"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Bezugsmenge</ion-label>\n\n    <ion-input type="number" [ngModel]="data.brew_quantity"\n\n               (ngModelChange)="data.brew_quantity = uiHelper.convertToNumber($event)"  step="0.1" pattern="[0-9,.]*" step="any"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Kaffeetyp</ion-label>\n\n    <ion-input type="text" [(ngModel)]="data.coffee_type"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Kaffee-Konzentration</ion-label>\n\n    <ion-input type="text" [(ngModel)]="data.coffee_concentration"></ion-input>\n\n  </ion-item>\n\n  <ion-item *ngIf="showRating()">\n\n    <ion-label stacked>Bewertung&nbsp;<ion-badge style="float:right;" color="secondary">{{data.rating}}</ion-badge>\n\n    </ion-label>\n\n    <!-- debounce="1000"  made an issue here -->\n\n    <ion-range *ngIf="data.rating" [(ngModel)]="data.rating"  min="1" max="10" step="1" snaps="true">\n\n      <ion-icon range-left  name="sad"></ion-icon>\n\n      <ion-icon range-right name="happy"></ion-icon>\n\n    </ion-range>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label stacked>Notizen</ion-label>\n\n    <ion-textarea autocomplete="true" spellcheck="true" autocorrect="true" [(ngModel)]="data.note"\n\n                  rows="5"></ion-textarea>\n\n  </ion-item>\n\n  <button ion-item (click)="addImage()">\n\n    Foto hinzufügen\n\n  </button>\n\n  <div *ngIf="data?.attachments && data.attachments.length > 0">\n\n    <ion-slides #photoSlides pager="true">\n\n      <ion-slide *ngFor="let attachment of data.attachments;let i = index">\n\n        <ion-buttons end>\n\n          <button ion-button color="primary" (click)="deleteImage(i)">Löschen</button>\n\n        </ion-buttons>\n\n\n\n        <img [src]="attachment" class="brew-image">\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button (click)="dismiss()" dark outline block>Abbrechen</button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button (click)="updateBrew()" type="submit" block>Speichern</button>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\brews\edit\brews-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_uiBeanStorage__["a" /* UIBeanStorage */],
            __WEBPACK_IMPORTED_MODULE_3__services_uiPreparationStorage__["a" /* UIPreparationStorage */], __WEBPACK_IMPORTED_MODULE_4__services_uiBrewStorage__["a" /* UIBrewStorage */],
            __WEBPACK_IMPORTED_MODULE_5__services_uiHelper__["a" /* UIHelper */], __WEBPACK_IMPORTED_MODULE_6__services_uiImage__["a" /* UIImage */]])
    ], BrewsEditModal);
    return BrewsEditModal;
}());

//# sourceMappingURL=brews-edit.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrewsDetailsModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uiBeanStorage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uiSettingsStorage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_uiPreparationStorage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_uiHelper__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_uiImage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__classes_brew_brew__ = __webpack_require__(65);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Ionic**/

/**Services**/





/**Classes**/

var BrewsDetailsModal = (function () {
    function BrewsDetailsModal(viewCtrl, navParams, uiBeanStorage, uiPreparationStorage, uiHelper, uiImage, uiSettingsStorage) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.uiBeanStorage = uiBeanStorage;
        this.uiPreparationStorage = uiPreparationStorage;
        this.uiHelper = uiHelper;
        this.uiImage = uiImage;
        this.uiSettingsStorage = uiSettingsStorage;
        this.data = new __WEBPACK_IMPORTED_MODULE_7__classes_brew_brew__["a" /* Brew */]();
        this.method_of_preparations = [];
        this.beans = [];
        this.settings = this.uiSettingsStorage.getSettings();
        //Moved from ionViewDidEnter, because of Ionic issues with ion-range
        this.brew = this.navParams.get('BREW');
        var copy = this.uiHelper.copyData(this.brew);
        this.data.initializeByObject(copy);
        this.method_of_preparations = this.uiPreparationStorage.getAllEntries();
        this.beans = this.uiBeanStorage.getAllEntries();
    }
    BrewsDetailsModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss("", null, { animate: false });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('photoSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], BrewsDetailsModal.prototype, "photoSlides", void 0);
    BrewsDetailsModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'brews-details',template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\brews\details\brews-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n        &nbsp;Zurück\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n  <ion-list>\n\n    <ion-item *ngIf="settings.grind_size === true">\n\n      <span class="header-label">Mahlgrad:</span><br/>\n\n      {{data.grind_size}}\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.grind_weight === true">\n\n      <span class="header-label">Gewicht:</span><br/>\n\n      {{data.grind_weight}}\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.brew_temperature === true">\n\n      <span class="header-label">Temperatur:</span><br/>\n\n      {{data.brew_temperature}}\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.method_of_preparation === true">\n\n      <span class="header-label">Zubereitungsmethode</span>:<br/>\n\n      &nbsp;{{data.getPreparation().name}}\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.bean_type === true">\n\n      <span class="header-label">Bohnen:</span><br/>\n\n      &nbsp;{{data.getBean().name}}\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.brew_time === true">\n\n      <span class="header-label">Zeit:</span><br/>\n\n      {{data.brew_time}}\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.coffee_blooming_time === true">\n\n      <span class="header-label">Blooming-Zeit / Preinfusion:</span><br/>\n\n      {{data.coffee_blooming_time}}\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.coffee_first_drip_time === true">\n\n      <span class="header-label">Erster Kaffeetropfen:</span><br/>\n\n      {{data.coffee_first_drip_time}}\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.brew_quantity === true">\n\n      <span class="header-label">Bezugsmenge:</span><br/>\n\n      {{data.brew_quantity}}\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.coffee_type=== true">\n\n      <span class="header-label">Kaffeetyp:</span><br/>\n\n      {{data.coffee_type}}\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.coffee_concentration=== true">\n\n      <span class="header-label">Kaffee-Konzentration:</span><br/>\n\n      {{data.coffee_concentration}}\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.rating === true">\n\n      <span class="header-label">Bewertung:</span><br/>\n\n      {{data.rating}}\n\n    </ion-item>\n\n    <ion-item *ngIf="settings.note === true">\n\n      <span class="header-label">Notizen:</span><br/>\n\n      {{data.note}}\n\n    </ion-item>\n\n    <ion-item>\n\n      <span class="header-label">Bohnenalter:</span><br/>\n\n      {{data.getCalculatedBeanAge()}}\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button (click)="dismiss()" dark outline block>Schließen</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\brews\details\brews-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_uiBeanStorage__["a" /* UIBeanStorage */],
            __WEBPACK_IMPORTED_MODULE_4__services_uiPreparationStorage__["a" /* UIPreparationStorage */],
            __WEBPACK_IMPORTED_MODULE_5__services_uiHelper__["a" /* UIHelper */], __WEBPACK_IMPORTED_MODULE_6__services_uiImage__["a" /* UIImage */], __WEBPACK_IMPORTED_MODULE_3__services_uiSettingsStorage__["a" /* UISettingsStorage */]])
    ], BrewsDetailsModal);
    return BrewsDetailsModal;
}());

//# sourceMappingURL=brews-details.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrewsPhotoView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Ionic**/

var BrewsPhotoView = (function () {
    function BrewsPhotoView(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
    }
    BrewsPhotoView.prototype.ionViewWillEnter = function () {
        this.data = this.navParams.get('BREW');
    };
    BrewsPhotoView.prototype.dismiss = function () {
        this.viewCtrl.dismiss("", null, { animate: false });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('photoSlides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], BrewsPhotoView.prototype, "photoSlides", void 0);
    BrewsPhotoView = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'brews-photo-view',template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\brews\photo-view\brews-photo-view.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n        &nbsp;Zurück\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf="data?.attachments && data.attachments.length > 0">\n\n    <ion-slides #photoSlides pager="true" zoom="true">\n\n      <ion-slide *ngFor="let attachment of data.attachments;let i = index">\n\n        <div class="swiper-zoom-container">\n\n          <img [src]="attachment">\n\n        </div>\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\brews\photo-view\brews-photo-view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BrewsPhotoView);
    return BrewsPhotoView;
}());

//# sourceMappingURL=brews-photo-view.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreparationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uiPreparationStorage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uiBrewStorage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_uiAlert__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__preparations_add_preparations_add__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__preparations_edit_preparations_edit__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Ionic**/

/**Services**/



/**Modals**/


var PreparationsPage = (function () {
    function PreparationsPage(modalCtrl, changeDetectorRef, uiPreparationStorage, uiAlert, uiBrewStorage) {
        this.modalCtrl = modalCtrl;
        this.changeDetectorRef = changeDetectorRef;
        this.uiPreparationStorage = uiPreparationStorage;
        this.uiAlert = uiAlert;
        this.uiBrewStorage = uiBrewStorage;
        this.preparations = [];
    }
    PreparationsPage.prototype.ionViewWillEnter = function () {
        this.__initializePreparations();
    };
    PreparationsPage.prototype.loadPreparations = function () {
        this.__initializePreparations();
        this.changeDetectorRef.detectChanges();
    };
    PreparationsPage.prototype.__initializePreparations = function () {
        this.preparations = this.uiPreparationStorage.getAllEntries();
    };
    PreparationsPage.prototype.addPreparation = function () {
        var _this = this;
        var addPreparationModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__preparations_add_preparations_add__["a" /* PreparationsAddModal */], {});
        addPreparationModal.onDidDismiss(function () {
            _this.loadPreparations();
        });
        addPreparationModal.present({ animate: false });
    };
    PreparationsPage.prototype.editPreparation = function (_bean) {
        var _this = this;
        var editPreparationModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__preparations_edit_preparations_edit__["a" /* PreparationsEditModal */], { 'PREPARATION': _bean });
        editPreparationModal.onDidDismiss(function () {
            _this.loadPreparations();
        });
        editPreparationModal.present({ animate: false });
    };
    PreparationsPage.prototype.deletePreparation = function (_preparation) {
        var _this = this;
        this.uiAlert.showConfirm("Zubereitungsmethode löschen? Alle zugehörigen Brühungen werden mit entfernt.", "Sicher?").then(function () {
            //Yes
            _this.__deletePreparation(_preparation);
        }, function () {
            //No
        });
    };
    PreparationsPage.prototype.__deletePreparation = function (_preparation) {
        var brews = this.uiBrewStorage.getAllEntries();
        var deletingBrewIndex = [];
        for (var i = 0; i < brews.length; i++) {
            if (brews[i].method_of_preparation === _preparation.config.uuid) {
                deletingBrewIndex.push(i);
            }
        }
        for (var i = deletingBrewIndex.length; i--;) {
            this.uiBrewStorage.removeByUUID(brews[deletingBrewIndex[i]].config.uuid);
        }
        this.uiPreparationStorage.removeByObject(_preparation);
        this.loadPreparations();
    };
    PreparationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\preparations\preparations.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Zubereitungsmethoden</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <!-- Real floating action button, fixed. It will not scroll with the content -->\n\n  <ion-fab top right edge #fab1>\n\n    <button ion-fab mini (click)="addPreparation()">\n\n      <ion-icon name="add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n  <ion-card padding *ngIf="preparations?.length == 0">\n\n    Du hast leider noch keine Brühmethoden hinterlegt!\n\n  </ion-card>\n\n  <ion-card *ngFor="let preparation of preparations">\n\n    <ion-card-header>\n\n      {{preparation.name}}\n\n    </ion-card-header>\n\n    <ion-card-content *ngIf="preparation.note != \'\'">\n\n      {{preparation.note}}\n\n    </ion-card-content>\n\n\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <button button justify-content-start color="dark" clear ion-button small block icon-left\n\n                (click)="editPreparation(preparation)">\n\n          <ion-icon name="md-create" item-start></ion-icon>\n\n          <span>Editieren</span>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button button justify-content-start color="dark" clear ion-button small block icon-left\n\n                (click)="deletePreparation(preparation)">\n\n          <ion-icon name="trash" item-start></ion-icon>\n\n          <span>Löschen</span>\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\preparations\preparations.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_2__services_uiPreparationStorage__["a" /* UIPreparationStorage */], __WEBPACK_IMPORTED_MODULE_4__services_uiAlert__["a" /* UIAlert */], __WEBPACK_IMPORTED_MODULE_3__services_uiBrewStorage__["a" /* UIBrewStorage */]])
    ], PreparationsPage);
    return PreparationsPage;
}());

//# sourceMappingURL=preparations.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreparationsAddModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uiPreparationStorage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_preparation_preparation__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Ionic**/

/**Services**/

/**Classes**/

var PreparationsAddModal = (function () {
    function PreparationsAddModal(viewCtrl, uiPreparationStorage) {
        this.viewCtrl = viewCtrl;
        this.uiPreparationStorage = uiPreparationStorage;
        this.data = new __WEBPACK_IMPORTED_MODULE_3__classes_preparation_preparation__["a" /* Preparation */]();
    }
    PreparationsAddModal.prototype.addBean = function (form) {
        if (form.valid) {
            this.__addBean();
        }
    };
    PreparationsAddModal.prototype.__addBean = function () {
        this.uiPreparationStorage.add(this.data);
        this.dismiss();
    };
    PreparationsAddModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss("", null, { animate: false });
    };
    PreparationsAddModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\preparations\add\preparations-add.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n        &nbsp;Zurück\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form #addBeanForm="ngForm" novalidate>\n\n    <ion-item>\n\n      <ion-label fixed >Name*</ion-label>\n\n      <ion-input [(ngModel)]="data.name" name="name" type="text" #name="ngModel" spellcheck="false"\n\n                 autocapitalize="off" required>\n\n      </ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label fixed>Notizen</ion-label>\n\n      <ion-textarea autocomplete="true" spellcheck="true" autocorrect="true" name="note" #note="ngModel" rows="5" [(ngModel)]="data.note"></ion-textarea>\n\n    </ion-item>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button (click)="dismiss()" dark outline block>Abbrechen</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button (click)="addBean(addBeanForm)" type="submit" block>Anlegen</button>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\preparations\add\preparations-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_uiPreparationStorage__["a" /* UIPreparationStorage */]])
    ], PreparationsAddModal);
    return PreparationsAddModal;
}());

//# sourceMappingURL=preparations-add.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreparationsEditModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uiPreparationStorage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uiHelper__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_preparation_preparation__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Ionic**/

/**Services**/


/**Classes**/

var PreparationsEditModal = (function () {
    function PreparationsEditModal(navParams, viewCtrl, uiPreparationStorage, uiHelper) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.uiPreparationStorage = uiPreparationStorage;
        this.uiHelper = uiHelper;
        this.data = new __WEBPACK_IMPORTED_MODULE_4__classes_preparation_preparation__["a" /* Preparation */]();
    }
    PreparationsEditModal.prototype.ionViewWillEnter = function () {
        this.preparation = this.navParams.get('PREPARATION');
        this.data = this.uiHelper.copyData(this.preparation);
    };
    PreparationsEditModal.prototype.editBean = function (form) {
        if (form.valid) {
            this.__editBean();
        }
    };
    PreparationsEditModal.prototype.__editBean = function () {
        this.uiPreparationStorage.update(this.data);
        this.dismiss();
    };
    PreparationsEditModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss("", null, { animate: false });
    };
    PreparationsEditModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\preparations\edit\preparations-edit.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n        &nbsp;Zurück\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <form #editBeanForm="ngForm" novalidate>\n\n    <ion-item>\n\n      <ion-label fixed >Name*</ion-label>\n\n      <ion-input [(ngModel)]="data.name" name="name" type="text" #name="ngModel" spellcheck="false"\n\n                 autocapitalize="off" required>\n\n      </ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label fixed>Notizen</ion-label>\n\n      <ion-textarea autocomplete="true" spellcheck="true" autocorrect="true" name="note" #note="ngModel" rows="5"  [(ngModel)]="data.note"></ion-textarea>\n\n    </ion-item>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button (click)="dismiss()" dark outline block>Abbrechen</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button (click)="editBean(editBeanForm)" type="submit" block>Speichern</button>\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\preparations\edit\preparations-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__services_uiPreparationStorage__["a" /* UIPreparationStorage */], __WEBPACK_IMPORTED_MODULE_3__services_uiHelper__["a" /* UIHelper */]])
    ], PreparationsEditModal);
    return PreparationsEditModal;
}());

//# sourceMappingURL=preparations-edit.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

var AboutPage = (function () {
    function AboutPage() {
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\info\about\about.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      <ion-title>Über uns</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n  <ion-card>\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-icon name="ios-information-circle-outline" item-left></ion-icon>\n\n        <div class="white-space-normal">\n\n            GNU General Public License v3.0\n\n        </div>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\info\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_uiHelper__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Services**/

var ContactPage = (function () {
    function ContactPage(uiHelper) {
        this.uiHelper = uiHelper;
    }
    ContactPage.prototype.openLink = function (event, _link) {
        event.cancelBubble = true;
        event.preventDefault();
        this.uiHelper.openExternalWebpage(_link);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\info\contact\contact.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      <ion-title>Kontakt</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-card>\n\n      <ion-card-header>\n\n        Anregungen, Fragen, Wünsche?\n\n      </ion-card-header>\n\n        <ion-card-content>\n\n          <div><a href="https://github.com/graphefruit/Beanconqueror" (click)="openLink($event,\'https://github.com/graphefruit/Beanconqueror\')">https://github.com/graphefruit/Beanconqueror</a></div>\n\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\info\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_uiHelper__["a" /* UIHelper */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LicencesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_uiHelper__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Services**/

var LicencesPage = (function () {
    function LicencesPage(uiHelper) {
        this.uiHelper = uiHelper;
        this.licences = {
            "ionic": {
                "TITLE": "Ionic Framework V2",
                "LINK": "http://ionicframework.com/",
                "ACTIVE": false,
                "DESCRIPTION": "Copyright 2015-present Drifty Co.\nhttp://drifty.com/\n\nMIT License\n\nPermission is hereby granted, free of charge, to any person obtaining\na copy of this software and associated documentation files (the\n\"Software\"), to deal in the Software without restriction, including\nwithout limitation the rights to use, copy, modify, merge, publish,\ndistribute, sublicense, and/or sell copies of the Software, and to\npermit persons to whom the Software is furnished to do so, subject to\nthe following conditions:\n\nThe above copyright notice and this permission notice shall be\nincluded in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\nEXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\nMERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\nNONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\nLIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\nOF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\nWITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
            },
            "fontawesome": {
                "TITLE": "Font Awesome",
                "LINK": "https://github.com/FortAwesome/Font-Awesome",
                "ACTIVE": false,
                "DESCRIPTION": "\n      The Font Awesome font is licensed under the SIL OFL 1.1:<br/>\n      http://scripts.sil.org/OFL<br/>\n      Font Awesome CSS, LESS, and Sass files are licensed under the MIT License:<br/>\n      https://opensource.org/licenses/mit-license.html<br/>\n      The Font Awesome documentation is licensed under the CC BY 3.0 License:<br/>\n      http://creativecommons.org/licenses/by/3.0/<br/>\n      Attribution is no longer required as of Font Awesome 3.0, but much appreciated:<br/>\n      Font Awesome by Dave Gandy - http://fontawesome.io<br/>\n      Full details: http://fontawesome.io/license/\n      "
            },
            "weihnachtsmuetze": {
                "TITLE": "Weihnachtsmütze",
                "LINK": "https://de.vector.me/browse/134790/clothing_santa_hat_clip_art",
                "ACTIVE": false,
                "DESCRIPTION": "F\u00FCr kommerzielle und private Nutzung freigegeben. "
            },
        };
    }
    LicencesPage.prototype.openLink = function (event, _link) {
        event.cancelBubble = true;
        event.preventDefault();
        this.uiHelper.openExternalWebpage(_link);
    };
    LicencesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\info\licences\licences.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Open-Source-Lizenzen</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card *ngFor="let key of licences | keys" (click)="licences[key].active = !licences[key].active">\n\n    <ion-item>\n\n      <ion-icon *ngIf="!licences[key].active" name="md-arrow-dropdown" item-left large></ion-icon>\n\n      <ion-icon *ngIf="licences[key].active" name="md-arrow-dropup" item-left large></ion-icon>\n\n      <h2>{{ licences[key].TITLE }}</h2>\n\n      <button ion-button (click)="openLink($event,licences[key].LINK)">Webseite</button>\n\n    </ion-item>\n\n\n\n    <ion-card-content *ngIf="licences[key].active" style="border-top: 1px solid rgba(0, 0, 0, 0.3);padding-top: 10px;"\n\n                      class="white-space-normal"\n\n                      [innerHTML]="licences[key].DESCRIPTION">\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\pages\info\licences\licences.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_uiHelper__["a" /* UIHelper */]])
    ], LicencesPage);
    return LicencesPage;
}());

//# sourceMappingURL=licences.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(377);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_minimize__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_android_permissions__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_version__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_home__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_beans_beans__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_brews_brews__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_preparations_preparations__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_info_about_about__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_info_contact_contact__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_info_licences_licences__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_beans_add_beans_add__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_beans_edit_beans_edit__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_preparations_add_preparations_add__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_preparations_edit_preparations_edit__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_brews_add_brews_add__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_brews_edit_brews_edit__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_brews_details_brews_details__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_brews_photo_view_brews_photo_view__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_brews_popover_brews_popover__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_uiStorage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_uiSettingsStorage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_uiHelper__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_uiBeanStorage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_uiBrewStorage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_uiLog__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_uiPreparationStorage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_uiAlert__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_uiImage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_uiStatistic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pipes_formatDate__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pipes_keys__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pipes_toDecimal__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_timer_timer__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**Core**/


/**Ionic**/


/**Ionic native**/







/**Pages**/









/**Modals**/









/**Services**/










/**Pipes**/



/**Components**/

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_beans_beans__["a" /* BeansPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_beans_add_beans_add__["a" /* BeansAddModal */],
                __WEBPACK_IMPORTED_MODULE_21__pages_beans_edit_beans_edit__["a" /* BeansEditModal */],
                __WEBPACK_IMPORTED_MODULE_16__pages_preparations_preparations__["a" /* PreparationsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_preparations_add_preparations_add__["a" /* PreparationsAddModal */],
                __WEBPACK_IMPORTED_MODULE_23__pages_preparations_edit_preparations_edit__["a" /* PreparationsEditModal */],
                __WEBPACK_IMPORTED_MODULE_39__pipes_formatDate__["a" /* FormatDatePipe */],
                __WEBPACK_IMPORTED_MODULE_40__pipes_keys__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_41__pipes_toDecimal__["a" /* ToDecimalPipe */],
                __WEBPACK_IMPORTED_MODULE_15__pages_brews_brews__["a" /* BrewsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_brews_add_brews_add__["a" /* BrewsAddModal */], __WEBPACK_IMPORTED_MODULE_42__components_timer_timer__["a" /* TimerComponent */], __WEBPACK_IMPORTED_MODULE_25__pages_brews_edit_brews_edit__["a" /* BrewsEditModal */], __WEBPACK_IMPORTED_MODULE_27__pages_brews_photo_view_brews_photo_view__["a" /* BrewsPhotoView */], __WEBPACK_IMPORTED_MODULE_26__pages_brews_details_brews_details__["a" /* BrewsDetailsModal */], __WEBPACK_IMPORTED_MODULE_28__pages_brews_popover_brews_popover__["a" /* BrewsPopover */],
                __WEBPACK_IMPORTED_MODULE_17__pages_info_about_about__["a" /* AboutPage */], __WEBPACK_IMPORTED_MODULE_18__pages_info_contact_contact__["a" /* ContactPage */], __WEBPACK_IMPORTED_MODULE_19__pages_info_licences_licences__["a" /* LicencesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {
                    scrollAssist: false,
                    autoFocusAssist: false,
                    platform: 'android',
                    mode: 'md',
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__baristaDB',
                    driverOrder: ['indexeddb', 'sqlite', 'websql'],
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_beans_beans__["a" /* BeansPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_beans_add_beans_add__["a" /* BeansAddModal */],
                __WEBPACK_IMPORTED_MODULE_21__pages_beans_edit_beans_edit__["a" /* BeansEditModal */],
                __WEBPACK_IMPORTED_MODULE_16__pages_preparations_preparations__["a" /* PreparationsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_preparations_add_preparations_add__["a" /* PreparationsAddModal */],
                __WEBPACK_IMPORTED_MODULE_23__pages_preparations_edit_preparations_edit__["a" /* PreparationsEditModal */],
                __WEBPACK_IMPORTED_MODULE_15__pages_brews_brews__["a" /* BrewsPage */], __WEBPACK_IMPORTED_MODULE_24__pages_brews_add_brews_add__["a" /* BrewsAddModal */], __WEBPACK_IMPORTED_MODULE_42__components_timer_timer__["a" /* TimerComponent */], __WEBPACK_IMPORTED_MODULE_25__pages_brews_edit_brews_edit__["a" /* BrewsEditModal */], __WEBPACK_IMPORTED_MODULE_27__pages_brews_photo_view_brews_photo_view__["a" /* BrewsPhotoView */], __WEBPACK_IMPORTED_MODULE_26__pages_brews_details_brews_details__["a" /* BrewsDetailsModal */], __WEBPACK_IMPORTED_MODULE_28__pages_brews_popover_brews_popover__["a" /* BrewsPopover */],
                __WEBPACK_IMPORTED_MODULE_17__pages_info_about_about__["a" /* AboutPage */], __WEBPACK_IMPORTED_MODULE_18__pages_info_contact_contact__["a" /* ContactPage */], __WEBPACK_IMPORTED_MODULE_19__pages_info_licences_licences__["a" /* LicencesPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_version__["a" /* AppVersion */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_29__services_uiStorage__["a" /* UIStorage */],
                __WEBPACK_IMPORTED_MODULE_30__services_uiSettingsStorage__["a" /* UISettingsStorage */],
                __WEBPACK_IMPORTED_MODULE_31__services_uiHelper__["a" /* UIHelper */],
                __WEBPACK_IMPORTED_MODULE_34__services_uiLog__["a" /* UILog */],
                __WEBPACK_IMPORTED_MODULE_35__services_uiPreparationStorage__["a" /* UIPreparationStorage */],
                __WEBPACK_IMPORTED_MODULE_36__services_uiAlert__["a" /* UIAlert */],
                __WEBPACK_IMPORTED_MODULE_37__services_uiImage__["a" /* UIImage */],
                __WEBPACK_IMPORTED_MODULE_32__services_uiBeanStorage__["a" /* UIBeanStorage */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_app_minimize__["a" /* AppMinimize */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_android_permissions__["a" /* AndroidPermissions */], __WEBPACK_IMPORTED_MODULE_33__services_uiBrewStorage__["a" /* UIBrewStorage */], __WEBPACK_IMPORTED_MODULE_38__services_uiStatistic__["a" /* UIStatistic */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UILog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

var UILog = (function () {
    function UILog() {
        this.disabled = true;
        this.disabled = false;
    }
    UILog.prototype.enable = function () {
        this.disabled = false;
    };
    UILog.prototype.disable = function () {
        this.disabled = false;
    };
    UILog.prototype.log = function (_message) {
        if (this.disabled == false) {
            console.log(_message);
        }
    };
    UILog.prototype.info = function (_message) {
        if (this.disabled == false && console.info) {
            console.info(_message);
        }
    };
    UILog.prototype.error = function (_message) {
        if (this.disabled == false && console.error) {
            console.error(_message);
        }
    };
    UILog.prototype.warn = function (_message) {
        if (this.disabled == false && console.warn) {
            console.warn(_message);
        }
    };
    UILog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UILog);
    return UILog;
}());

//# sourceMappingURL=uiLog.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UISettingsStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_settings_settings__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_uiHelper__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_uiLog__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_uiStorage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_storageClass__ = __webpack_require__(63);
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Ionic native**/
/**Classes**/

/**Services**/




var UISettingsStorage = (function (_super) {
    __extends(UISettingsStorage, _super);
    function UISettingsStorage(uiStorage, uiHelper, uiLog) {
        var _this = _super.call(this, uiStorage, uiHelper, uiLog, "SETTINGS") || this;
        _this.uiStorage = uiStorage;
        _this.uiHelper = uiHelper;
        _this.uiLog = uiLog;
        _this.settings = new __WEBPACK_IMPORTED_MODULE_1__classes_settings_settings__["a" /* Settings */]();
        _super.prototype.storageReady.call(_this).then(function () {
            var entries = _this.getAllEntries();
            if (entries.length > 0) {
                //We already had some settings here.
                _this.settings.initializeByObject(entries[0]);
            }
            else {
                //Take the new settings obj.
                _super.prototype.add.call(_this, _this.settings);
            }
        }, function () {
            //Outsch, cant do much.
        });
        return _this;
    }
    UISettingsStorage.prototype.getSettings = function () {
        return this.settings;
    };
    UISettingsStorage.prototype.saveSettings = function (settings) {
        _super.prototype.update.call(this, settings);
    };
    UISettingsStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_uiStorage__["a" /* UIStorage */],
            __WEBPACK_IMPORTED_MODULE_2__services_uiHelper__["a" /* UIHelper */],
            __WEBPACK_IMPORTED_MODULE_3__services_uiLog__["a" /* UILog */]])
    ], UISettingsStorage);
    return UISettingsStorage;
}(__WEBPACK_IMPORTED_MODULE_5__classes_storageClass__["a" /* StorageClass */]));

//# sourceMappingURL=uiSettingsStorage.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_media_capture__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Ionic**/

/**Ionic native **/



var UIImage = (function () {
    function UIImage(mediaCapture, imagePicker, alertController, platform, androidPermissions) {
        this.mediaCapture = mediaCapture;
        this.imagePicker = imagePicker;
        this.alertController = alertController;
        this.platform = platform;
        this.androidPermissions = androidPermissions;
    }
    UIImage.prototype.__requestGaleryPermission = function (_success, _error) {
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(function (_status) {
            if (_status.hasPermission === true) {
                _success();
            }
            else {
                _error();
            }
        }, function () {
            _error();
        });
    };
    UIImage.prototype.__checkPermission = function (_success, _error) {
        var _this = this;
        this.platform.ready().then(function () {
            var isCordova = _this.platform.is('cordova');
            var isAndroid = _this.platform.is('android');
            if (isCordova && isAndroid) {
                _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(function (_status) {
                    if (_status.hasPermission === false) {
                        _this.__requestGaleryPermission(_success, _error);
                    }
                    else {
                        //We already have permission
                        _success();
                    }
                }, function () {
                    _this.__requestGaleryPermission(_success, _error);
                });
            }
            else {
                //No need to check for validations
                _success();
            }
        });
        /**
         * Check if we have permission to read images
         * @returns {Promise<boolean>} Returns a promise that resolves with a boolean that indicates whether we have permission
         */
        // hasReadPermission(): Promise<boolean>;
        /**
         * Request permission to read images
         * @returns {Promise<any>}
         */
        /// requestReadPermission(): Promise<any>;
    };
    UIImage.prototype.takePhoto = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var options = { limit: 1 };
            _this.mediaCapture.captureImage(options)
                .then(function (data) {
                resolve(data[0].fullPath);
            }, function (err) {
                reject();
            });
        });
        return promise;
    };
    /**
     *
     * @returns {Promise<T>}
     */
    UIImage.prototype.choosePhoto = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.__checkPermission(function () {
                setTimeout(function () {
                    _this.imagePicker.getPictures({ maximumImagesCount: 1 }).then(function (results) {
                        if (results && results.length > 0 && results[0] != 0 && results[0] != "" && results[0] != "OK" && results[0].length > 5) {
                            var imagePath = results[0];
                            resolve(imagePath);
                        }
                        else {
                            reject();
                        }
                    }, function (err) {
                        reject();
                    });
                });
            }, function () {
                reject();
            });
        });
        return promise;
    };
    UIImage.prototype.showOptionChooser = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var alert = _this.alertController.create({
                title: "Auswählen",
                subTitle: "Foto aufnehmen oder aus Bibliothek auswählen",
                buttons: [
                    {
                        text: 'Aufnehmen',
                        handler: function () {
                            resolve("TAKE");
                        }
                    },
                    {
                        text: 'Auswählen',
                        handler: function () {
                            resolve("CHOOSE");
                        }
                    }
                ]
            });
            alert.present({ animate: false });
        });
        return promise;
    };
    UIImage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_image_picker__["a" /* ImagePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
    ], UIImage);
    return UIImage;
}());

//# sourceMappingURL=uiImage.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_minimize__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_beans_beans__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_brews_brews__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_preparations_preparations__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_info_about_about__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_info_contact_contact__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_info_licences_licences__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_uiLog__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_uiBeanStorage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_uiBrewStorage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_uiPreparationStorage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_uiSettingsStorage__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Ionic**/

/**Ionic native**/



/**Pages**/








/**Serivces **/





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, uiLog, uiBeanStorage, uiBrewStorage, uiPreparationStorage, ionicApp, menuCtrl, appMinimize, uiSettingsStorage) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.uiLog = uiLog;
        this.uiBeanStorage = uiBeanStorage;
        this.uiBrewStorage = uiBrewStorage;
        this.uiPreparationStorage = uiPreparationStorage;
        this.ionicApp = ionicApp;
        this.menuCtrl = menuCtrl;
        this.appMinimize = appMinimize;
        this.uiSettingsStorage = uiSettingsStorage;
        this.ROOT_PAGE = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.pages = {
            "home": { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'md-home', active: true },
            "brews": { title: 'Brühungen', component: __WEBPACK_IMPORTED_MODULE_8__pages_brews_brews__["a" /* BrewsPage */], icon: 'fa-coffee', active: false },
            "beans": { title: 'Bohnen', component: __WEBPACK_IMPORTED_MODULE_7__pages_beans_beans__["a" /* BeansPage */], icon: 'fa-pagelines', active: false },
            "preparation": { title: 'Zubereitungsmethoden', component: __WEBPACK_IMPORTED_MODULE_9__pages_preparations_preparations__["a" /* PreparationsPage */], icon: 'fa-flask', active: false },
            "about": { title: 'Über uns', component: __WEBPACK_IMPORTED_MODULE_10__pages_info_about_about__["a" /* AboutPage */], icon: 'md-information', active: false },
            "contact": { title: 'Kontakt', component: __WEBPACK_IMPORTED_MODULE_11__pages_info_contact_contact__["a" /* ContactPage */], icon: 'md-mail', active: false },
            "licences": { title: 'Open-Source-Lizenzen', component: __WEBPACK_IMPORTED_MODULE_12__pages_info_licences_licences__["a" /* LicencesPage */], icon: 'md-copy', active: false },
            "settings": { title: 'Einstellungen', component: __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */], icon: 'md-settings', active: false },
        };
        this.toggleAbout = false;
    }
    MyApp.prototype.ngAfterViewInit = function () {
        this.uiLog.log("Platform ready, init app");
        this.__appReady();
        //Copy in all the js code from the script.js. Typescript will complain but it works just fine
    };
    MyApp.prototype.__appReady = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            //Wait for every necessary service to be ready before starting the app
            var beanStorageReadyCallback = _this.uiBeanStorage.storageReady();
            var preparationStorageReadyCallback = _this.uiPreparationStorage.storageReady();
            var uiSettingsStorageReadyCallback = _this.uiSettingsStorage.storageReady();
            var brewStorageReadyCallback = _this.uiBrewStorage.storageReady();
            Promise.all([
                beanStorageReadyCallback,
                preparationStorageReadyCallback,
                brewStorageReadyCallback,
                uiSettingsStorageReadyCallback,
            ]).then(function () {
                _this.uiLog.log("App finished loading");
                _this.__initApp();
            }, function () {
                _this.uiLog.log("App finished loading");
                _this.__initApp();
            });
        });
    };
    MyApp.prototype.__initApp = function () {
        this.__registerBack();
        this.rootPage = this.ROOT_PAGE;
    };
    MyApp.prototype.__registerBack = function () {
        var _this = this;
        if (this.registerBackFunction != null && this.registerBackFunction != undefined) {
            return;
        }
        this.registerBackFunction = this.platform.registerBackButtonAction(function () {
            var activePortal = _this.ionicApp._loadingPortal.getActive() ||
                _this.ionicApp._modalPortal.getActive() ||
                _this.ionicApp._toastPortal.getActive() ||
                _this.ionicApp._overlayPortal.getActive();
            if (activePortal) {
                activePortal.dismiss({ animate: false });
                activePortal.onDidDismiss(function () {
                });
                // Logger.log("handled with portal");
                return;
            }
            if (_this.menuCtrl.isOpen()) {
                _this.menuCtrl.close();
                //Logger.log("closing menu");
                return;
            }
            var view = _this.nav.getActive();
            var page = view ? _this.nav.getActive().instance : null;
            if (page && _this.nav.canGoBack() == false && page.isHome != undefined && page.isHome == true) {
                //Minimize app, that it don't need to start again.
                _this.appMinimize.minimize();
                //old window['plugins'].appMinimize.minimize();
            }
            else if (page && _this.nav.canGoBack() == false) {
                //isn'T realy root.
                //this.__unregisterBack();
                _this.nav.setRoot(_this.ROOT_PAGE);
            }
            else if (_this.nav.canGoBack() || view && view.isOverlay) {
                _this.nav.pop({ animate: false });
            }
            else {
            }
        }, 1);
    };
    MyApp.prototype.openPage = function (event, page) {
        event.cancelBubble = true;
        event.preventDefault();
        // close the menu when clicking a link from the menu
        this.menuCtrl.close();
        // navigate to the new page if it is not the current page
        for (var key in this.pages) {
            this.pages[key].active = false;
        }
        page.active = true;
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\lars\Documents\playground\beanconqueror\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content class="navigation-menu">\n\n    <ion-list class="no-label-margin">\n\n      <button ion-item (click)="openPage($event,pages.home)" [class.active]="pages.home.active">\n\n        <ion-icon class="menu-icon" name="{{pages.home.icon}}"></ion-icon>\n\n        {{pages.home.title}}\n\n      </button>\n\n      <button ion-item (click)="openPage($event,pages.brews)" [class.active]="pages.brews.active">\n\n        <i class="menu-icon fa {{pages.brews.icon}}"></i>\n\n        {{pages.brews.title}}\n\n      </button>\n\n      <button ion-item (click)="openPage($event,pages.beans)" [class.active]="pages.beans.active">\n\n        <i class="menu-icon fa {{pages.beans.icon}}"></i>\n\n        {{pages.beans.title}}\n\n      </button>\n\n      <button ion-item (click)="openPage($event,pages.preparation)" [class.active]="pages.preparation.active">\n\n        <i class="menu-icon fa {{pages.preparation.icon}}"></i>\n\n        {{pages.preparation.title}}\n\n      </button>\n\n      <ion-item class="no-border" (click)="toggleAbout =!toggleAbout">\n\n        <div>\n\n          <ion-icon style="margin-right: 0px;" class="menu-icon" item-left name="md-information-circle"></ion-icon>\n\n          Infos zur App\n\n        </div>\n\n        <ion-icon class="sub-menu-icon" item-right *ngIf="toggleAbout == false"\n\n                  name="md-arrow-dropdown"></ion-icon>\n\n        <ion-icon class="sub-menu-icon" item-right *ngIf="toggleAbout == true"\n\n                  name="md-arrow-dropup"></ion-icon>\n\n\n\n      </ion-item>\n\n      <ion-list style="margin-left:16px!important;" no-margin-important no-padding *ngIf="toggleAbout == true">\n\n        <button ion-item (click)="openPage($event,pages.licences)" [class.active]="pages.licences.active">\n\n          <ion-icon class="menu-icon" name="{{pages.licences.icon}}"></ion-icon>\n\n          {{pages.licences.title}}\n\n        </button>\n\n        <button ion-item (click)="openPage($event,pages.about)" [class.active]="pages.about.active">\n\n          <ion-icon class="menu-icon" name="{{pages.about.icon}}"></ion-icon>\n\n          {{pages.about.title}}\n\n        </button>\n\n        <button ion-item (click)="openPage($event,pages.contact)" [class.active]="pages.contact.active">\n\n          <ion-icon class="menu-icon" name="{{pages.contact.icon}}"></ion-icon>\n\n          {{pages.contact.title}}\n\n        </button>\n\n\n\n      </ion-list>\n\n      <button ion-item (click)="openPage($event,pages.settings)" [class.active]="pages.settings.active">\n\n        <ion-icon class="menu-icon" name="{{pages.settings.icon}}"></ion-icon>\n\n        {{pages.settings.title}}\n\n      </button>\n\n    </ion-list>\n\n\n\n\n\n\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\lars\Documents\playground\beanconqueror\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_13__services_uiLog__["a" /* UILog */],
            __WEBPACK_IMPORTED_MODULE_14__services_uiBeanStorage__["a" /* UIBeanStorage */],
            __WEBPACK_IMPORTED_MODULE_15__services_uiBrewStorage__["a" /* UIBrewStorage */],
            __WEBPACK_IMPORTED_MODULE_16__services_uiPreparationStorage__["a" /* UIPreparationStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_minimize__["a" /* AppMinimize */], __WEBPACK_IMPORTED_MODULE_17__services_uiSettingsStorage__["a" /* UISettingsStorage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 219,
	"./af.js": 219,
	"./ar": 220,
	"./ar-dz": 221,
	"./ar-dz.js": 221,
	"./ar-kw": 222,
	"./ar-kw.js": 222,
	"./ar-ly": 223,
	"./ar-ly.js": 223,
	"./ar-ma": 224,
	"./ar-ma.js": 224,
	"./ar-sa": 225,
	"./ar-sa.js": 225,
	"./ar-tn": 226,
	"./ar-tn.js": 226,
	"./ar.js": 220,
	"./az": 227,
	"./az.js": 227,
	"./be": 228,
	"./be.js": 228,
	"./bg": 229,
	"./bg.js": 229,
	"./bm": 230,
	"./bm.js": 230,
	"./bn": 231,
	"./bn.js": 231,
	"./bo": 232,
	"./bo.js": 232,
	"./br": 233,
	"./br.js": 233,
	"./bs": 234,
	"./bs.js": 234,
	"./ca": 235,
	"./ca.js": 235,
	"./cs": 236,
	"./cs.js": 236,
	"./cv": 237,
	"./cv.js": 237,
	"./cy": 238,
	"./cy.js": 238,
	"./da": 239,
	"./da.js": 239,
	"./de": 62,
	"./de-at": 240,
	"./de-at.js": 240,
	"./de-ch": 241,
	"./de-ch.js": 241,
	"./de.js": 62,
	"./dv": 242,
	"./dv.js": 242,
	"./el": 243,
	"./el.js": 243,
	"./en-au": 244,
	"./en-au.js": 244,
	"./en-ca": 245,
	"./en-ca.js": 245,
	"./en-gb": 246,
	"./en-gb.js": 246,
	"./en-ie": 247,
	"./en-ie.js": 247,
	"./en-nz": 248,
	"./en-nz.js": 248,
	"./eo": 249,
	"./eo.js": 249,
	"./es": 250,
	"./es-do": 251,
	"./es-do.js": 251,
	"./es-us": 252,
	"./es-us.js": 252,
	"./es.js": 250,
	"./et": 253,
	"./et.js": 253,
	"./eu": 254,
	"./eu.js": 254,
	"./fa": 255,
	"./fa.js": 255,
	"./fi": 256,
	"./fi.js": 256,
	"./fo": 257,
	"./fo.js": 257,
	"./fr": 258,
	"./fr-ca": 259,
	"./fr-ca.js": 259,
	"./fr-ch": 260,
	"./fr-ch.js": 260,
	"./fr.js": 258,
	"./fy": 261,
	"./fy.js": 261,
	"./gd": 262,
	"./gd.js": 262,
	"./gl": 263,
	"./gl.js": 263,
	"./gom-latn": 264,
	"./gom-latn.js": 264,
	"./gu": 265,
	"./gu.js": 265,
	"./he": 266,
	"./he.js": 266,
	"./hi": 267,
	"./hi.js": 267,
	"./hr": 268,
	"./hr.js": 268,
	"./hu": 269,
	"./hu.js": 269,
	"./hy-am": 270,
	"./hy-am.js": 270,
	"./id": 271,
	"./id.js": 271,
	"./is": 272,
	"./is.js": 272,
	"./it": 273,
	"./it.js": 273,
	"./ja": 274,
	"./ja.js": 274,
	"./jv": 275,
	"./jv.js": 275,
	"./ka": 276,
	"./ka.js": 276,
	"./kk": 277,
	"./kk.js": 277,
	"./km": 278,
	"./km.js": 278,
	"./kn": 279,
	"./kn.js": 279,
	"./ko": 280,
	"./ko.js": 280,
	"./ky": 281,
	"./ky.js": 281,
	"./lb": 282,
	"./lb.js": 282,
	"./lo": 283,
	"./lo.js": 283,
	"./lt": 284,
	"./lt.js": 284,
	"./lv": 285,
	"./lv.js": 285,
	"./me": 286,
	"./me.js": 286,
	"./mi": 287,
	"./mi.js": 287,
	"./mk": 288,
	"./mk.js": 288,
	"./ml": 289,
	"./ml.js": 289,
	"./mr": 290,
	"./mr.js": 290,
	"./ms": 291,
	"./ms-my": 292,
	"./ms-my.js": 292,
	"./ms.js": 291,
	"./my": 293,
	"./my.js": 293,
	"./nb": 294,
	"./nb.js": 294,
	"./ne": 295,
	"./ne.js": 295,
	"./nl": 296,
	"./nl-be": 297,
	"./nl-be.js": 297,
	"./nl.js": 296,
	"./nn": 298,
	"./nn.js": 298,
	"./pa-in": 299,
	"./pa-in.js": 299,
	"./pl": 300,
	"./pl.js": 300,
	"./pt": 301,
	"./pt-br": 302,
	"./pt-br.js": 302,
	"./pt.js": 301,
	"./ro": 303,
	"./ro.js": 303,
	"./ru": 304,
	"./ru.js": 304,
	"./sd": 305,
	"./sd.js": 305,
	"./se": 306,
	"./se.js": 306,
	"./si": 307,
	"./si.js": 307,
	"./sk": 308,
	"./sk.js": 308,
	"./sl": 309,
	"./sl.js": 309,
	"./sq": 310,
	"./sq.js": 310,
	"./sr": 311,
	"./sr-cyrl": 312,
	"./sr-cyrl.js": 312,
	"./sr.js": 311,
	"./ss": 313,
	"./ss.js": 313,
	"./sv": 314,
	"./sv.js": 314,
	"./sw": 315,
	"./sw.js": 315,
	"./ta": 316,
	"./ta.js": 316,
	"./te": 317,
	"./te.js": 317,
	"./tet": 318,
	"./tet.js": 318,
	"./th": 319,
	"./th.js": 319,
	"./tl-ph": 320,
	"./tl-ph.js": 320,
	"./tlh": 321,
	"./tlh.js": 321,
	"./tr": 322,
	"./tr.js": 322,
	"./tzl": 323,
	"./tzl.js": 323,
	"./tzm": 324,
	"./tzm-latn": 325,
	"./tzm-latn.js": 325,
	"./tzm.js": 324,
	"./uk": 326,
	"./uk.js": 326,
	"./ur": 327,
	"./ur.js": 327,
	"./uz": 328,
	"./uz-latn": 329,
	"./uz-latn.js": 329,
	"./uz.js": 328,
	"./vi": 330,
	"./vi.js": 330,
	"./x-pseudo": 331,
	"./x-pseudo.js": 331,
	"./yo": 332,
	"./yo.js": 332,
	"./zh-cn": 333,
	"./zh-cn.js": 333,
	"./zh-hk": 334,
	"./zh-hk.js": 334,
	"./zh-tw": 335,
	"./zh-tw.js": 335
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 434;

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objectConfig_objectConfig__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_settings_brewView__ = __webpack_require__(118);
/**Classes**/

/**Enums**/

var Settings = (function () {
    function Settings() {
        this.brew_view = __WEBPACK_IMPORTED_MODULE_1__enums_settings_brewView__["a" /* BREW_VIEW_ENUM */].SINGLE_PAGE;
        this.brew_time = true;
        this.grind_size = true;
        this.grind_weight = true;
        this.method_of_preparation = true;
        this.brew_quantity = true;
        this.bean_type = true;
        this.brew_temperature = true;
        this.coffee_type = true;
        this.coffee_concentration = true;
        this.coffee_first_drip_time = true;
        this.coffee_blooming_time = true;
        this.note = true;
        this.attachments = true;
        this.rating = true;
        this.config = new __WEBPACK_IMPORTED_MODULE_0__objectConfig_objectConfig__["a" /* Config */]();
    }
    Settings.prototype.initializeByObject = function (brewObj) {
        Object.assign(this, brewObj);
    };
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrewView; });
var BrewView = (function () {
    function BrewView() {
        this.title = "";
        this.brews = [];
    }
    return BrewView;
}());

//# sourceMappingURL=brewView.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**Core**/

/**Third party**/

var FormatDatePipe = (function () {
    function FormatDatePipe() {
    }
    FormatDatePipe.prototype.transform = function (value, format, args) {
        //SAMPLE - http://jsfiddle.net/kunycrkb/
        var m;
        if (typeof (value) === "number") {
            m = __WEBPACK_IMPORTED_MODULE_1_moment___default.a.unix(value);
        }
        else {
            m = __WEBPACK_IMPORTED_MODULE_1_moment___default()(value);
        }
        if (format != undefined) {
            return m.format(format[0]).toString();
        }
        else {
            return m.format("llll").toString();
        }
    };
    FormatDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'formatDate' })
    ], FormatDatePipe);
    return FormatDatePipe;
}());

//# sourceMappingURL=formatDate.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**Core**/

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push(key);
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'keys' })
    ], KeysPipe);
    return KeysPipe;
}());

//# sourceMappingURL=keys.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDecimalPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**Core**/

/**Third party**/
var ToDecimalPipe = (function () {
    function ToDecimalPipe() {
    }
    ToDecimalPipe.prototype.transform = function (value, args) {
        //SAMPLE - http://jsfiddle.net/kunycrkb/
        return parseFloat(value);
    };
    ToDecimalPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'toDecimal' })
    ], ToDecimalPipe);
    return ToDecimalPipe;
}());

//# sourceMappingURL=toDecimal.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIStorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Ionic native**/

var UIStorage = (function () {
    function UIStorage(storage) {
        this.storage = storage;
    }
    UIStorage.prototype.set = function (_key, _val) {
        return this.storage.set(_key, _val);
    };
    UIStorage.prototype.get = function (_key) {
        return this.storage.get(_key);
    };
    UIStorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], UIStorage);
    return UIStorage;
}());

//# sourceMappingURL=uiStorage.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Preparation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objectConfig_objectConfig__ = __webpack_require__(61);
/**Classes**/

var Preparation = (function () {
    function Preparation() {
        this.name = "";
        this.note = "";
        this.config = new __WEBPACK_IMPORTED_MODULE_0__objectConfig_objectConfig__["a" /* Config */]();
    }
    Preparation.prototype.initializeByObject = function (preparationObj) {
        Object.assign(this, preparationObj);
    };
    return Preparation;
}());

//# sourceMappingURL=preparation.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = (function () {
    function Config() {
        this.uuid = "";
        this.unix_timestamp = 0;
    }
    return Config;
}());

//# sourceMappingURL=objectConfig.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageClass; });
var StorageClass = (function () {
    function StorageClass(uiStorage, uiHelper, uiLog, dbPath) {
        this.uiStorage = uiStorage;
        this.uiHelper = uiHelper;
        this.uiLog = uiLog;
        this.dbPath = dbPath;
        this.DB_PATH = "";
        this.storedData = [];
        /**
         * -1 = Nothing started
         * 0 = Error occured
         * 1 = Initialized
         * @type {number}
         */
        this.isInitialized = -1;
        this.DB_PATH = dbPath;
        this.__initializeStorage();
    }
    StorageClass.prototype.storageReady = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var intV = setInterval(function () {
                if (_this.isInitialized === 1) {
                    _this.uiLog.log("Storage initialized");
                    window.clearInterval(intV);
                    resolve();
                }
                else if (_this.isInitialized === 0) {
                    window.clearInterval(intV);
                    _this.uiLog.log("Storage not initialized");
                    reject();
                }
            }, 250);
        });
        return promise;
    };
    StorageClass.prototype.__initializeStorage = function () {
        var _this = this;
        this.uiStorage.get(this.DB_PATH).then(function (_data) {
            if (_data === null || _data === undefined) {
                //No beans have been added yet
                _this.storedData = [];
                _this.isInitialized = 1;
            }
            else {
                _this.storedData = _data;
                _this.isInitialized = 1;
            }
        }, function () {
            //Error
            _this.storedData = [];
            _this.isInitialized = 1;
        });
    };
    StorageClass.prototype.getAllEntries = function () {
        return this.storedData;
    };
    StorageClass.prototype.add = function (_entry) {
        _entry.config.uuid = this.uiHelper.generateUUID();
        _entry.config.unix_timestamp = this.uiHelper.getUnixTimestamp();
        this.storedData.push(_entry);
        this.__save();
    };
    StorageClass.prototype.update = function (_obj) {
        for (var i = 0; i < this.storedData.length; i++) {
            if (this.storedData[i].config.uuid === _obj.config.uuid) {
                this.uiLog.log("Storage - Update  - Successfully - " + _obj.config.uuid);
                this.storedData[i] = _obj;
                this.__save();
                return true;
            }
        }
        return false;
    };
    StorageClass.prototype.removeByObject = function (_obj) {
        if (_obj !== null && _obj !== undefined && _obj.config.uuid) {
            var deleteUUID = _obj.config.uuid;
            return this.__delete(deleteUUID);
        }
        return false;
    };
    StorageClass.prototype.getByUUID = function (_uuid) {
        if (_uuid !== null && _uuid !== undefined && _uuid != "") {
            var findUUID = _uuid;
            for (var i = 0; i < this.storedData.length; i++) {
                if (this.storedData[i].config.uuid === findUUID) {
                    return this.storedData[i];
                }
            }
        }
    };
    StorageClass.prototype.removeByUUID = function (_beanUUID) {
        if (_beanUUID !== null && _beanUUID !== undefined && _beanUUID != "") {
            return this.__delete(_beanUUID);
        }
        return false;
    };
    StorageClass.prototype.__delete = function (_uuid) {
        if (_uuid !== null && _uuid !== undefined && _uuid != "") {
            var deleteUUID = _uuid;
            for (var i = 0; i < this.storedData.length; i++) {
                if (this.storedData[i].config.uuid === deleteUUID) {
                    this.uiLog.log("Storage - Delete - Successfully - " + deleteUUID);
                    this.storedData.splice(i, 1);
                    this.__save();
                    return true;
                }
            }
        }
        this.uiLog.error("Storage - Delete - Unsuccessfully");
        return false;
    };
    StorageClass.prototype.__save = function () {
        var _this = this;
        this.uiStorage.set(this.DB_PATH, this.storedData).then(function (e) {
            _this.uiLog.log("Storage - Save - Successfully");
        }, function (e) {
            _this.uiLog.log("Storage - Save - Unsuccessfully");
        });
    };
    StorageClass.prototype.getDBPath = function () {
        return this.DB_PATH;
    };
    return StorageClass;
}());

//# sourceMappingURL=storageClass.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bean; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objectConfig_objectConfig__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_beans_roasts__ = __webpack_require__(117);
/**Classes**/

/**Enums**/

var Bean = (function () {
    function Bean() {
        this.name = "";
        this.roastingDate = "";
        this.note = "";
        this.filePath = "";
        this.config = new __WEBPACK_IMPORTED_MODULE_0__objectConfig_objectConfig__["a" /* Config */]();
        this.roast = "UNKNOWN";
    }
    Bean.prototype.getRoastName = function () {
        return __WEBPACK_IMPORTED_MODULE_1__enums_beans_roasts__["a" /* ROASTS_ENUM */][this.roast];
    };
    Bean.prototype.initializeByObject = function (beanObj) {
        Object.assign(this, beanObj);
    };
    return Bean;
}());

//# sourceMappingURL=bean.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Brew; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objectConfig_objectConfig__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bean_bean__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preparation_preparation__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_uiBeanStorage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_uiPreparationStorage__ = __webpack_require__(18);
/**Classes**/



/**Third party**/

/**Services**/


var Brew = (function () {
    function Brew() {
        this.grind_size = "";
        this.grind_weight = 0;
        this.method_of_preparation = "";
        this.bean = "";
        this.brew_temperature = 0;
        this.brew_time = 0;
        this.brew_quantity = 0;
        this.note = "";
        this.rating = 1;
        this.coffee_type = "";
        this.coffee_concentration = "";
        this.coffee_first_drip_time = 0;
        this.coffee_blooming_time = 0;
        this.attachments = [];
        this.config = new __WEBPACK_IMPORTED_MODULE_0__objectConfig_objectConfig__["a" /* Config */]();
    }
    Brew.prototype.initializeByObject = function (brewObj) {
        Object.assign(this, brewObj);
    };
    Brew.prototype.getBeanStorageInstance = function () {
        var uiBeanStorage;
        uiBeanStorage = __WEBPACK_IMPORTED_MODULE_4__services_uiBeanStorage__["a" /* UIBeanStorage */].getInstance();
        return uiBeanStorage;
    };
    Brew.prototype.getPreparationStorageInstance = function () {
        var uiPreparationStorage;
        uiPreparationStorage = __WEBPACK_IMPORTED_MODULE_5__services_uiPreparationStorage__["a" /* UIPreparationStorage */].getInstance();
        return uiPreparationStorage;
    };
    Brew.prototype.getBean = function () {
        var iBean = this.getBeanStorageInstance().getByUUID(this.bean);
        var bean = new __WEBPACK_IMPORTED_MODULE_1__bean_bean__["a" /* Bean */]();
        bean.initializeByObject(iBean);
        return bean;
    };
    Brew.prototype.getPreparation = function () {
        var iPreparation = this.getPreparationStorageInstance().getByUUID(this.method_of_preparation);
        var preparation = new __WEBPACK_IMPORTED_MODULE_2__preparation_preparation__["a" /* Preparation */]();
        preparation.initializeByObject(iPreparation);
        return preparation;
    };
    /**
     * Get the calculated bean age for this brew
     */
    Brew.prototype.getCalculatedBeanAge = function () {
        var bean = this.getBeanStorageInstance().getByUUID(this.bean);
        if (bean) {
            var roastingDate = __WEBPACK_IMPORTED_MODULE_3_moment___default()(bean.roastingDate);
            var brewTime = __WEBPACK_IMPORTED_MODULE_3_moment___default.a.unix(this.config.unix_timestamp);
            return brewTime.diff(roastingDate, 'days');
        }
        return 0;
    };
    Brew.prototype.formateDate = function (_format) {
        var format = "DD.MM.YYYY, HH:mm:ss";
        if (_format) {
            format = _format;
        }
        return __WEBPACK_IMPORTED_MODULE_3_moment___default.a.unix(this.config.unix_timestamp).format(format);
    };
    return Brew;
}());

//# sourceMappingURL=brew.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIAlert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**Core**/

/**Ionic**/

var UIAlert = (function () {
    function UIAlert(alertController) {
        this.alertController = alertController;
    }
    /**
     * @method showMessage
     */
    UIAlert.prototype.showMessage = function (_message, _title, _ok) {
        var _this = this;
        if (!_ok) {
            _ok = "OK";
        }
        var promise = new Promise(function (resolve, reject) {
            var alert = _this.alertController.create({
                title: _title,
                subTitle: _message,
                buttons: [
                    {
                        text: _ok,
                        handler: function () {
                            resolve();
                        }
                    }
                ]
            });
            alert.present({ animate: false });
        });
        return promise;
    };
    UIAlert.prototype.showConfirm = function (_message, _title) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var alert = _this.alertController.create({
                title: _title,
                subTitle: _message,
                buttons: [
                    {
                        text: 'Nein',
                        role: 'cancel',
                        handler: function () {
                            reject();
                        }
                    },
                    {
                        text: 'Ja',
                        handler: function () {
                            resolve();
                        }
                    }
                ]
            });
            alert.present({ animate: false });
        });
        return promise;
    };
    UIAlert = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], UIAlert);
    return UIAlert;
}());

//# sourceMappingURL=uiAlert.js.map

/***/ })

},[353]);
//# sourceMappingURL=main.js.map