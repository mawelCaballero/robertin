"use strict";
(self["webpackChunkxtreme_admin_angular"] = self["webpackChunkxtreme_admin_angular"] || []).push([["src_app_guidelines_guidelines_module_ts"],{

/***/ 4242:
/*!*************************************************!*\
  !*** ./src/app/guidelines/guidelines.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuidelinesModule": () => (/* binding */ GuidelinesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8750);
/* harmony import */ var _guidelines_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guidelines.component */ 4312);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3903);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 6410);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ 8689);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 325);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 3690);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.module */ 6747);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8259);











const routes = [
    {
        path: "",
        data: {
            title: "Medicacion de robertin",
            urls: [{ title: "Medicacion", url: "/guidelines" }],
        },
        component: _guidelines_component__WEBPACK_IMPORTED_MODULE_0__.GuidelinesComponent,
    },
];
class GuidelinesModule {
}
GuidelinesModule.ɵfac = function GuidelinesModule_Factory(t) { return new (t || GuidelinesModule)(); };
GuidelinesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GuidelinesModule });
GuidelinesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
            angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateLoader,
                    useFactory: _app_module__WEBPACK_IMPORTED_MODULE_1__.HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient],
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GuidelinesModule, { imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule,
        angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_guidelines_guidelines_module_ts.js.map