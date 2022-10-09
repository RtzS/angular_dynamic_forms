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

module.exports = "<div class=\"container py-4\">\n  <div class=\"col-sm-12\" *ngIf=\"isParentForm\">\n    <div class=\"card\">\n      <div class=\"card-header\">Main Category Form</div>\n      <div class=\"card-body\">\n        <dynamic-form-builder\n          [formBtnLabel]=\"firstFormBtnLabel\"\n          [fields]=\"parentField\"\n          (onSubmit)=\"handleFirstFormAct($event)\"\n        ></dynamic-form-builder>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-12 mt-5\" *ngIf=\"childFormField.length\">\n    <div class=\"card\">\n      <div class=\"card-header\">Child Form</div>\n      <div class=\"card-body\">\n        <dynamic-form-builder\n          [formBtnLabel]=\"secondFormBtnLabel\"\n          [fields]=\"childFormField\"\n          (onSubmit)=\"handleChildFormAct($event)\"\n        ></dynamic-form-builder>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-12 mt-5\" *ngIf=\"isShowFormData\">\n    <div class=\"card\" [formGroup]=\"form\">\n      <div class=\"card-header\">JSON Format</div>\n      <div class=\"card-body\">\n        <textarea\n          formControlName=\"fields\"\n          class=\"form-control\"\n          rows=\"5\"\n        ></textarea>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dynamic-form/component/file/file.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dynamic-form/component/file/file.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"form\">\r\n  <div\r\n    *ngIf=\"!field.value\"\r\n    class=\"drop-container dropzone\"\r\n    dropZone\r\n    (hovered)=\"toggleHover($event)\"\r\n    (dropped)=\"field?.onUpload($event)\"\r\n  >\r\n    <p class=\"m-0\">\r\n      Drag a file here or\r\n      <label class=\"upload-button\">\r\n        <input type=\"file\" multiple=\"true\" (change)=\"field?.onUpload($event)\" />\r\n        browse\r\n      </label>\r\n      to upload.\r\n    </p>\r\n  </div>\r\n  <div *ngIf=\"field.value\">\r\n    <div class=\"card\">\r\n      <img class=\"card-img-top\" [src]=\"field?.value\" />\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dynamic-form/component/input-box/input-box.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dynamic-form/component/input-box/input-box.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"form\">\r\n  <input\r\n    *ngIf=\"!field.multiline\"\r\n    [attr.type]=\"field.type\"\r\n    class=\"form-control\"\r\n    [id]=\"field.name\"\r\n    [name]=\"field.name\"\r\n    [formControlName]=\"field.name\"\r\n  />\r\n  <textarea\r\n    *ngIf=\"field.multiline\"\r\n    [class.is-invalid]=\"isDirty && !isValid\"\r\n    [formControlName]=\"field.name\"\r\n    [id]=\"field.name\"\r\n    rows=\"9\"\r\n    class=\"form-control\"\r\n    [placeholder]=\"field.placeholder\"\r\n  ></textarea>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dynamic-form/component/radio/radio.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dynamic-form/component/radio/radio.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"form\">\r\n  <div class=\"form-check\" *ngFor=\"let opt of field.options\">\r\n    <input class=\"form-check-input\" type=\"radio\" [value]=\"opt.key\" />\r\n    <label class=\"form-check-label\">\r\n      {{ opt.label }}\r\n    </label>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dynamic-form/form-builder/form-builder.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dynamic-form/form-builder/form-builder.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row\" [formGroup]=\"form\">\r\n  <label class=\"col-md-3 form-control-label\" [attr.for]=\"field.label\">\r\n    {{ field.label }}\r\n    <strong class=\"text-danger\" *ngIf=\"field.required\">*</strong>\r\n  </label>\r\n  <div class=\"col-md-9\" [ngSwitch]=\"field.type\">\r\n    <inputbox *ngSwitchCase=\"'text'\" [field]=\"field\" [form]=\"form\"></inputbox>\r\n    <dropdown\r\n      *ngSwitchCase=\"'dropdown'\"\r\n      [field]=\"field\"\r\n      [form]=\"form\"\r\n    ></dropdown>\r\n    <checkbox\r\n      *ngSwitchCase=\"'checkbox'\"\r\n      [field]=\"field\"\r\n      [form]=\"form\"\r\n    ></checkbox>\r\n    <radio *ngSwitchCase=\"'radio'\" [field]=\"field\" [form]=\"form\"></radio>\r\n    <file *ngSwitchCase=\"'file'\" [field]=\"field\" [form]=\"form\"></file>\r\n    <div\r\n      class=\"alert alert-danger my-1 p-2 fadeInDown animated\"\r\n      *ngIf=\"!isValid && isDirty\"\r\n    >\r\n      {{ field.label }} is required\r\n      <span *ngIf=\"field.error\">and {{ field.error }}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _assets_formData_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../assets/formData.json */ "./src/assets/formData.json");
var _assets_formData_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../assets/formData.json */ "./src/assets/formData.json", 1);




let AppComponent = class AppComponent {
    constructor() {
        this.isParentForm = true;
        this.firstFormBtnLabel = _assets_formData_json__WEBPACK_IMPORTED_MODULE_3__.submitBtnLabel;
        this.secondFormBtnLabel = _assets_formData_json__WEBPACK_IMPORTED_MODULE_3__.saveBtnLabel;
        this.parentField = _assets_formData_json__WEBPACK_IMPORTED_MODULE_3__.parentField;
        this.childFormField = [];
        this.rawFormFields = _assets_formData_json__WEBPACK_IMPORTED_MODULE_3__;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fields: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](JSON.stringify(this.childFormField)),
        });
    }
    handleFirstFormAct(event) {
        this.showChildForm = false;
        this.isShowFormData = false;
        for (let key in this.rawFormFields) {
            if (key === event.select_type) {
                this.childFormField = this.rawFormFields[key];
            }
        }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fields: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](JSON.stringify(this.childFormField)),
        });
        this.showChildForm = event.select_type ? true : false;
    }
    handleChildFormAct() {
        this.isShowFormData = true;
    }
    onUpload(e) {
        console.log(e);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "my-app",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hello_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hello.component */ "./src/app/hello.component.ts");
/* harmony import */ var _dynamic_form_dynamic_form_builder_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic-form/dynamic-form-builder.module */ "./src/app/dynamic-form/dynamic-form-builder.module.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _dynamic_form_dynamic_form_builder_module__WEBPACK_IMPORTED_MODULE_6__["DynamicFormBuilderModule"],
        ],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _hello_component__WEBPACK_IMPORTED_MODULE_5__["HelloComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/dynamic-form/component/checkbox/checkbox.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dynamic-form/component/checkbox/checkbox.component.ts ***!
  \***********************************************************************/
/*! exports provided: CheckBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxComponent", function() { return CheckBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CheckBoxComponent = class CheckBoxComponent {
    constructor() {
        this.field = {};
    }
    get isValid() {
        return this.form.controls[this.field.name].valid;
    }
    get isDirty() {
        return this.form.controls[this.field.name].dirty;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CheckBoxComponent.prototype, "field", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CheckBoxComponent.prototype, "form", void 0);
CheckBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "checkbox",
        template: `
    <div [formGroup]="form">
      <div [formGroupName]="field.name">
        <div *ngFor="let opt of field.options" class="form-check form-check">
          <label class="form-check-label">
            <input
              [formControlName]="opt.key"
              class="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            {{ opt.label }}</label
          >
        </div>
      </div>
    </div>
  `,
    })
], CheckBoxComponent);



/***/ }),

/***/ "./src/app/dynamic-form/component/dropdown/dropdown.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dynamic-form/component/dropdown/dropdown.component.ts ***!
  \***********************************************************************/
/*! exports provided: DropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownComponent", function() { return DropDownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DropDownComponent = class DropDownComponent {
    constructor() {
        this.field = {};
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DropDownComponent.prototype, "field", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DropDownComponent.prototype, "form", void 0);
DropDownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "dropdown",
        template: `
    <div [formGroup]="form">
      <select
        class="form-control"
        [id]="field.name"
        [formControlName]="field.name"
      >
        <option *ngFor="let opt of field.options" [value]="opt.key">
          {{ opt.label }}
        </option>
      </select>
    </div>
  `,
    })
], DropDownComponent);



/***/ }),

/***/ "./src/app/dynamic-form/component/file/file.component.css":
/*!****************************************************************!*\
  !*** ./src/app/dynamic-form/component/file/file.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drop-container {\r\n  background: #fff;\r\n  border-radius: 6px;\r\n  height: 150px;\r\n  width: 100%;\r\n  box-shadow: 1px 2px 20px hsla(0, 0%, 4%, 0.1);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border: 2px dashed #c0c4c7;\r\n}\r\np {\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n  color: #c0c4c7;\r\n}\r\n.upload-button {\r\n  display: inline-block;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  color: #5754a3;\r\n}\r\n.upload-button input {\r\n  display: none;\r\n}\r\n.dropzone {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  border-radius: 5px;\r\n  background: white;\r\n  margin: 10px 0;\r\n}\r\n.dropzone.hovering {\r\n  border: 2px solid #f16624;\r\n  color: #dadada !important;\r\n}\r\nprogress::-webkit-progress-value {\r\n  transition: width 0.1s ease;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHluYW1pYy1mb3JtL2NvbXBvbmVudC9maWxlL2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCw2Q0FBNkM7RUFDN0MsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2R5bmFtaWMtZm9ybS9jb21wb25lbnQvZmlsZS9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCAyMHB4IGhzbGEoMCwgMCUsIDQlLCAwLjEpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXI6IDJweCBkYXNoZWQgI2MwYzRjNztcclxufVxyXG5wIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogI2MwYzRjNztcclxufVxyXG4udXBsb2FkLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzU3NTRhMztcclxufVxyXG4udXBsb2FkLWJ1dHRvbiBpbnB1dCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZHJvcHpvbmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG4uZHJvcHpvbmUuaG92ZXJpbmcge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMTY2MjQ7XHJcbiAgY29sb3I6ICNkYWRhZGEgIWltcG9ydGFudDtcclxufVxyXG5wcm9ncmVzczo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4xcyBlYXNlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/dynamic-form/component/file/file.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dynamic-form/component/file/file.component.ts ***!
  \***************************************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FileComponent = class FileComponent {
    constructor() {
        this.field = {};
    }
    get isValid() {
        return this.form.controls[this.field.name].valid;
    }
    get isDirty() {
        return this.form.controls[this.field.name].dirty;
    }
    ngOnChange() {
        console.log(this.field.value);
    }
    toggleHover(evt) { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileComponent.prototype, "field", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileComponent.prototype, "form", void 0);
FileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "file",
        template: __webpack_require__(/*! raw-loader!./file.component.html */ "./node_modules/raw-loader/index.js!./src/app/dynamic-form/component/file/file.component.html"),
        styles: [__webpack_require__(/*! ./file.component.css */ "./src/app/dynamic-form/component/file/file.component.css")]
    })
], FileComponent);



/***/ }),

/***/ "./src/app/dynamic-form/component/input-box/input-box.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dynamic-form/component/input-box/input-box.component.ts ***!
  \*************************************************************************/
/*! exports provided: InputBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBoxComponent", function() { return InputBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// text,email,tel,textarea,password,
let InputBoxComponent = class InputBoxComponent {
    constructor() {
        this.field = {};
    }
    get isValid() {
        return this.form.controls[this.field.name].valid;
    }
    get isDirty() {
        return this.form.controls[this.field.name].dirty;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InputBoxComponent.prototype, "field", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InputBoxComponent.prototype, "form", void 0);
InputBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "inputbox",
        template: __webpack_require__(/*! raw-loader!./input-box.component.html */ "./node_modules/raw-loader/index.js!./src/app/dynamic-form/component/input-box/input-box.component.html"),
    })
], InputBoxComponent);



/***/ }),

/***/ "./src/app/dynamic-form/component/radio/radio.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dynamic-form/component/radio/radio.component.ts ***!
  \*****************************************************************/
/*! exports provided: RadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function() { return RadioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RadioComponent = class RadioComponent {
    constructor() {
        this.field = {};
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RadioComponent.prototype, "field", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RadioComponent.prototype, "form", void 0);
RadioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'radio',
        template: __webpack_require__(/*! raw-loader!./radio.component.html */ "./node_modules/raw-loader/index.js!./src/app/dynamic-form/component/radio/radio.component.html"),
    })
], RadioComponent);



/***/ }),

/***/ "./src/app/dynamic-form/dynamic-form-builder.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dynamic-form/dynamic-form-builder.component.ts ***!
  \****************************************************************/
/*! exports provided: DynamicFormBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormBuilderComponent", function() { return DynamicFormBuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let DynamicFormBuilderComponent = class DynamicFormBuilderComponent {
    constructor() {
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fields = [];
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        let fieldsCtrls = {};
        for (let field of this.fields) {
            if (field.type != "checkbox") {
                fieldsCtrls[field.name] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](field.value || "", [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(field.pattern),
                ]);
            }
            else {
                let opts = {};
                for (let opt of field.options) {
                    opts[opt.key] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](opt.value);
                }
                fieldsCtrls[field.name] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](opts);
            }
        }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](fieldsCtrls);
    }
    setValidatorDynamically(field, fieldsControl) {
        switch (true) {
            case field.required:
                fieldsControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
                break;
            case field.pattern:
                fieldsControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(field.pattern)]);
                break;
            default:
                break;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DynamicFormBuilderComponent.prototype, "onSubmit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DynamicFormBuilderComponent.prototype, "fields", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DynamicFormBuilderComponent.prototype, "formBtnLabel", void 0);
DynamicFormBuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "dynamic-form-builder",
        template: `
    <form [formGroup]="form" class="form-horizontal">
      <div *ngFor="let field of fields">
        <field-builder [myField]="field" [myForm]="form"></field-builder>
      </div>
      <div class="form-row"></div>
      <div class="form-group row">
        <div class="col-md-3"></div>
        <div class="col-md-9">
          <button
            type="submit"
            class="btn btn-primary"
            (click)="onSubmit.emit(this.form.value)"
          >
            {{ formBtnLabel }}
          </button>
        </div>
      </div>
    </form>
  `,
    })
], DynamicFormBuilderComponent);



/***/ }),

/***/ "./src/app/dynamic-form/dynamic-form-builder.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/dynamic-form/dynamic-form-builder.module.ts ***!
  \*************************************************************/
/*! exports provided: DynamicFormBuilderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormBuilderModule", function() { return DynamicFormBuilderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _dynamic_form_builder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamic-form-builder.component */ "./src/app/dynamic-form/dynamic-form-builder.component.ts");
/* harmony import */ var _form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-builder/form-builder.component */ "./src/app/dynamic-form/form-builder/form-builder.component.ts");
/* harmony import */ var _component_input_box_input_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/input-box/input-box.component */ "./src/app/dynamic-form/component/input-box/input-box.component.ts");
/* harmony import */ var _component_file_file_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/file/file.component */ "./src/app/dynamic-form/component/file/file.component.ts");
/* harmony import */ var _component_radio_radio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/radio/radio.component */ "./src/app/dynamic-form/component/radio/radio.component.ts");
/* harmony import */ var _component_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/dropdown/dropdown.component */ "./src/app/dynamic-form/component/dropdown/dropdown.component.ts");
/* harmony import */ var _component_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/checkbox/checkbox.component */ "./src/app/dynamic-form/component/checkbox/checkbox.component.ts");




// components







let DynamicFormBuilderModule = class DynamicFormBuilderModule {
};
DynamicFormBuilderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [
            _dynamic_form_builder_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormBuilderComponent"],
            _form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_5__["FieldBuilderComponent"],
            _component_input_box_input_box_component__WEBPACK_IMPORTED_MODULE_6__["InputBoxComponent"],
            _component_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_9__["DropDownComponent"],
            _component_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_10__["CheckBoxComponent"],
            _component_file_file_component__WEBPACK_IMPORTED_MODULE_7__["FileComponent"],
            _component_radio_radio_component__WEBPACK_IMPORTED_MODULE_8__["RadioComponent"],
        ],
        exports: [_dynamic_form_builder_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormBuilderComponent"]],
        providers: [],
    })
], DynamicFormBuilderModule);



/***/ }),

/***/ "./src/app/dynamic-form/form-builder/form-builder.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dynamic-form/form-builder/form-builder.component.ts ***!
  \*********************************************************************/
/*! exports provided: FieldBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldBuilderComponent", function() { return FieldBuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FieldBuilderComponent = class FieldBuilderComponent {
    constructor() { }
    set myField(f) {
        this.field = f;
    }
    set myForm(f) {
        this.form = f;
    }
    get isValid() {
        return this.form.controls[this.field.name].valid;
    }
    get isDirty() {
        return (this.form.controls[this.field.name].dirty &&
            this.form.controls[this.field.name].value);
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FieldBuilderComponent.prototype, "myField", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FieldBuilderComponent.prototype, "myForm", null);
FieldBuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "field-builder",
        template: __webpack_require__(/*! raw-loader!./form-builder.component.html */ "./node_modules/raw-loader/index.js!./src/app/dynamic-form/form-builder/form-builder.component.html"),
    })
], FieldBuilderComponent);



/***/ }),

/***/ "./src/app/hello.component.ts":
/*!************************************!*\
  !*** ./src/app/hello.component.ts ***!
  \************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HelloComponent = class HelloComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HelloComponent.prototype, "name", void 0);
HelloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'hello',
        template: `<h1>Hello {{name}}!</h1>`,
        styles: ["h1 { font-family: Lato; }"]
    })
], HelloComponent);



/***/ }),

/***/ "./src/assets/formData.json":
/*!**********************************!*\
  !*** ./src/assets/formData.json ***!
  \**********************************/
/*! exports provided: parentField, personalInfo, productInfoForm, sampleForm, submitBtnLabel, saveBtnLabel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"parentField\":[{\"type\":\"dropdown\",\"name\":\"select_type\",\"label\":\"Select Type\",\"value\":\"\",\"required\":false,\"options\":[{\"key\":\"personalInfo\",\"label\":\"Personal information\"},{\"key\":\"productInfoForm\",\"label\":\"Product information\"},{\"key\":\"sampleForm\",\"label\":\"Sample Form\"}]}],\"personalInfo\":[{\"type\":\"text\",\"name\":\"firstName\",\"label\":\"First Name\",\"value\":\"\",\"required\":true,\"pattern\":\"/^[a-zA-Z0-9 ]*$/\",\"error\":\"Expected only alpha numeric value\"},{\"type\":\"text\",\"name\":\"lastName\",\"label\":\"Last Name\",\"value\":\"\",\"required\":true,\"pattern\":\"/^[a-zA-Z0-9 ]*$/\",\"error\":\"Expected only alpha numeric value\"},{\"type\":\"number\",\"name\":\"phone\",\"label\":\"Phone Number\",\"value\":\"\",\"required\":true,\"pattern\":\"/^[a-zA-Z0-9( )-]*$/\",\"error\":\"Expected only numeric value\"},{\"type\":\"text\",\"name\":\"email\",\"label\":\"Email\",\"value\":\"\",\"required\":true,\"pattern\":\"/^[a-zA-Z0-9 ]*$/\",\"error\":\"Expected valid format.\"},{\"type\":\"file\",\"name\":\"picture\",\"label\":\"Picture\",\"required\":true,\"onUpload\":\"\"},{\"type\":\"dropdown\",\"name\":\"country\",\"label\":\"Country\",\"value\":\"in\",\"required\":true,\"options\":[{\"key\":\"in\",\"label\":\"India\"},{\"key\":\"us\",\"label\":\"USA\"}]},{\"type\":\"radio\",\"name\":\"gender\",\"label\":\"Gender\",\"value\":\"in\",\"required\":true,\"options\":[{\"key\":\"m\",\"label\":\"Male\"},{\"key\":\"f\",\"label\":\"Female\"}]},{\"type\":\"checkbox\",\"name\":\"hobby\",\"label\":\"Hobby\",\"required\":true,\"options\":[{\"key\":\"f\",\"label\":\"Fishing\"},{\"key\":\"c\",\"label\":\"Cooking\"}]}],\"productInfoForm\":[{\"type\":\"text\",\"name\":\"Category\",\"label\":\"Category\",\"value\":\"\",\"required\":true,\"pattern\":\"/^[a-zA-Z0-9 ]*$/\",\"error\":\"Expected only alpha numeric value\"},{\"type\":\"dropdown\",\"name\":\"color\",\"label\":\"Color\",\"value\":\"in\",\"required\":true,\"options\":[{\"key\":\"0\",\"label\":\"Green\"},{\"key\":\"1\",\"label\":\"Blue\"},{\"key\":\"1\",\"label\":\"Pink\"},{\"key\":\"1\",\"label\":\"Red\"},{\"key\":\"1\",\"label\":\"White\"}]},{\"type\":\"file\",\"name\":\"picture\",\"label\":\"Picture\",\"required\":true,\"onUpload\":\"\"},{\"type\":\"radio\",\"name\":\"Option\",\"label\":\"Option\",\"value\":\"in\",\"required\":true,\"options\":[{\"key\":\"1\",\"label\":\"Option 1\"},{\"key\":\"2\",\"label\":\"Option 2\"},{\"key\":\"3\",\"label\":\"Option 3\"},{\"key\":\"4\",\"label\":\"Option 4\"}]},{\"type\":\"checkbox\",\"name\":\"type\",\"label\":\"Type 2\",\"required\":true,\"options\":[{\"key\":\"1\",\"label\":\"Type 1\"},{\"key\":\"2\",\"label\":\"Type 2\"}]}],\"sampleForm\":[{\"type\":\"text\",\"name\":\"inputField\",\"label\":\"Input field 1\",\"value\":\"\",\"required\":true,\"pattern\":\"/^[a-zA-Z0-9 ]*$/\",\"error\":\"Expected only alpha numeric value\"},{\"type\":\"text\",\"name\":\"inputField\",\"label\":\"Input field 2\",\"value\":\"\",\"required\":true,\"pattern\":\"/^[a-zA-Z0-9 ]*$/\",\"error\":\"Expected only alpha numeric value\"},{\"type\":\"checkbox\",\"name\":\"type\",\"label\":\"Type\",\"required\":true,\"options\":[{\"key\":\"1\",\"label\":\"Type 1\"},{\"key\":\"2\",\"label\":\"Type 2\"}]}],\"submitBtnLabel\":\"Submit\",\"saveBtnLabel\":\"Save\"}");

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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rswami\Desktop\local_dynamic-form-POC\dynamic-form-poc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map