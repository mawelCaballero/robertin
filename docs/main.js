"use strict";
(self["webpackChunkxtreme_admin_angular"] = self["webpackChunkxtreme_admin_angular"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Approutes": () => (/* binding */ Approutes)
/* harmony export */ });
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ 6729);

const Approutes = [
    {
        path: "",
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__.FullComponent,
        children: [
            { path: "", redirectTo: "/starter", pathMatch: "full" },
            {
                path: "starter",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_starter_starter_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./starter/starter.module */ 2218)).then((m) => m.StarterModule),
            },
            {
                path: "guidelines",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_guidelines_guidelines_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./guidelines/guidelines.module */ 4242)).then((m) => m.GuidelinesModule),
            },
        ],
    },
    {
        path: "**",
        redirectTo: "",
    },
];


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/notification.service */ 7320);
/* harmony import */ var marlin_cdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marlin-cdk */ 6486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3903);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8750);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/spinner.component */ 3812);








const _c0 = ["errorToast"];
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mkt-toasts");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(notificationService, mktToastService) {
        this.notificationService = notificationService;
        this.mktToastService = mktToastService;
        this.showNotification = false;
        this.errorServiceSub = this.notificationService.errorMsg.subscribe((error) => {
            if (error) {
                this.showNotification = true;
                this.mktToastService.show(`An error has ocurred: ${error}`, marlin_cdk__WEBPACK_IMPORTED_MODULE_3__.MktToastType.error);
            }
        });
        this.infoServiceSub = this.notificationService.infoMsg.subscribe((info) => {
            if (info) {
                this.showNotification = true;
                this.mktToastService.show(info, marlin_cdk__WEBPACK_IMPORTED_MODULE_3__.MktToastType.success);
            }
        });
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.errorServiceSub.unsubscribe();
        this.mktToastService.clear();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](marlin_cdk__WEBPACK_IMPORTED_MODULE_3__.MktToastService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.errorToast = _t.first);
    } }, decls: 3, vars: 1, consts: [["class", "toast-container position-fixed top-0 end-0 p-3", "style", "z-index: 1200", 4, "ngIf"], [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3", 2, "z-index", "1200"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showNotification);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, marlin_cdk__WEBPACK_IMPORTED_MODULE_3__.MktToastsContainer, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory),
/* harmony export */   "loggerCallback": () => (/* binding */ loggerCallback)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 7532);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 6263);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 8750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 6410);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 3690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 3903);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9109);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-feather */ 8689);
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular-feather/icons */ 779);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ 6729);
/* harmony import */ var _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/blank/blank.component */ 1658);
/* harmony import */ var _shared_vertical_header_vertical_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/vertical-header/vertical-navigation.component */ 3132);
/* harmony import */ var _shared_vertical_sidebar_vertical_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/vertical-sidebar/vertical-sidebar.component */ 9234);
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/breadcrumb/breadcrumb.component */ 419);
/* harmony import */ var _shared_horizontal_header_horizontal_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/horizontal-header/horizontal-navigation.component */ 581);
/* harmony import */ var _shared_horizontal_sidebar_horizontal_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/horizontal-sidebar/horizontal-sidebar.component */ 5035);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/spinner.component */ 3812);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 9150);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ 325);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/http-loader */ 9476);
/* harmony import */ var marlin_cdk__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! marlin-cdk */ 6486);
/* harmony import */ var _service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/token-interceptor.service */ 3600);
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/notification.service */ 7320);
/* harmony import */ var _graphics_graphics_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./graphics/graphics.component */ 7881);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-apexcharts */ 7916);
/* harmony import */ var _guidelines_guidelines_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guidelines/guidelines.component */ 4312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 8259);


































function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__.TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
function loggerCallback(message) {
    console.debug(message);
}
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 1,
    wheelPropagation: true,
    minScrollbarLength: 20,
};
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [
        _service_notification_service__WEBPACK_IMPORTED_MODULE_11__.NotificationService,
        marlin_cdk__WEBPACK_IMPORTED_MODULE_16__.MktToastService,
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HTTP_INTERCEPTORS,
            useClass: _service_token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__.TokenInterceptorService,
            multi: true,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_22__.NgApexchartsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModule,
            angular_feather__WEBPACK_IMPORTED_MODULE_25__.FeatherModule,
            marlin_cdk__WEBPACK_IMPORTED_MODULE_16__.MktToastModule,
            marlin_cdk__WEBPACK_IMPORTED_MODULE_16__.MktHeaderModule,
            marlin_cdk__WEBPACK_IMPORTED_MODULE_16__.MktFooterModule,
            marlin_cdk__WEBPACK_IMPORTED_MODULE_16__.MktTableModule,
            marlin_cdk__WEBPACK_IMPORTED_MODULE_16__.MktSidenavModule,
            marlin_cdk__WEBPACK_IMPORTED_MODULE_16__.MktDropdownModule,
            angular_feather__WEBPACK_IMPORTED_MODULE_25__.FeatherModule.pick(angular_feather_icons__WEBPACK_IMPORTED_MODULE_26__.allIcons),
            _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule.forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_7__.Approutes, {
                useHash: true,
                onSameUrlNavigation: "reload",
            }),
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__.PerfectScrollbarModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient],
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__.AppComponent,
        _shared_spinner_component__WEBPACK_IMPORTED_MODULE_9__.SpinnerComponent,
        _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__.FullComponent,
        _layouts_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__.BlankComponent,
        _shared_vertical_header_vertical_navigation_component__WEBPACK_IMPORTED_MODULE_2__.VerticalNavigationComponent,
        _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent,
        _shared_vertical_sidebar_vertical_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.VerticalSidebarComponent,
        _shared_horizontal_header_horizontal_navigation_component__WEBPACK_IMPORTED_MODULE_5__.HorizontalNavigationComponent,
        _shared_horizontal_sidebar_horizontal_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.HorizontalSidebarComponent,
        _graphics_graphics_component__WEBPACK_IMPORTED_MODULE_12__.GraphicsComponent,
        _guidelines_guidelines_component__WEBPACK_IMPORTED_MODULE_13__.GuidelinesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_22__.NgApexchartsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModule,
        angular_feather__WEBPACK_IMPORTED_MODULE_25__.FeatherModule,
        marlin_cdk__WEBPACK_IMPORTED_MODULE_16__.MktToastModule,
        marlin_cdk__WEBPACK_IMPORTED_MODULE_16__.MktHeaderModule,
        marlin_cdk__WEBPACK_IMPORTED_MODULE_16__.MktFooterModule,
        marlin_cdk__WEBPACK_IMPORTED_MODULE_16__.MktTableModule,
        marlin_cdk__WEBPACK_IMPORTED_MODULE_16__.MktSidenavModule,
        marlin_cdk__WEBPACK_IMPORTED_MODULE_16__.MktDropdownModule, angular_feather__WEBPACK_IMPORTED_MODULE_25__.FeatherModule, _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__.PerfectScrollbarModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslateModule] }); })();


/***/ }),

/***/ 7881:
/*!************************************************!*\
  !*** ./src/app/graphics/graphics.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphicsComponent": () => (/* binding */ GraphicsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3903);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3690);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 7916);







const _c0 = ["chart"];
class GraphicsComponent {
    constructor(route, http) {
        this.route = route;
        this.http = http;
        this.data = {
            name: "",
            data: [],
            categories: [],
            referenceMaxData: [],
            referenceMinData: [],
        };
        this.http.get("assets/data/informe.json").subscribe((data) => {
            this.data.name = this.id;
            data.items.forEach((element) => {
                this.data.categories.push(element.fecha);
                this.data.data.push(element.datos[this.id].value);
                this.data.referenceMaxData.push(data.rango_referencial[this.id].max);
                this.data.referenceMinData.push(data.rango_referencial[this.id].min);
            });
            this.chartOptions = {
                series: [
                    {
                        name: this.data.name,
                        data: this.data.data,
                    },
                    {
                        name: "Referencia Máxima",
                        data: this.data.referenceMaxData,
                    },
                    {
                        name: "Referencia Mínima",
                        data: this.data.referenceMinData,
                    },
                ],
                chart: {
                    height: 350,
                    type: "line",
                    zoom: {
                        enabled: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: "straight",
                },
                title: {
                    text: "Informe de " + this.data.name,
                    align: "left",
                },
                grid: {
                    row: {
                        colors: ["#f3f3f3", "transparent"],
                        opacity: 0.5,
                    },
                },
                xaxis: {
                    categories: this.data.categories,
                },
            };
        });
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe((params) => {
            this.id = params["id"]; // (+) converts string 'id' to a number
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
GraphicsComponent.ɵfac = function GraphicsComponent_Factory(t) { return new (t || GraphicsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
GraphicsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraphicsComponent, selectors: [["app-graphics"]], viewQuery: function GraphicsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 2, vars: 7, consts: [["id", "chart"], [3, "series", "chart", "xaxis", "dataLabels", "grid", "stroke", "title"]], template: function GraphicsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "apx-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("dataLabels", ctx.chartOptions.dataLabels)("grid", ctx.chartOptions.grid)("stroke", ctx.chartOptions.stroke)("title", ctx.chartOptions.title);
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFwaGljcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4312:
/*!****************************************************!*\
  !*** ./src/app/guidelines/guidelines.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuidelinesComponent": () => (/* binding */ GuidelinesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8259);

class GuidelinesComponent {
    constructor() { }
    ngOnInit() {
    }
}
GuidelinesComponent.ɵfac = function GuidelinesComponent_Factory(t) { return new (t || GuidelinesComponent)(); };
GuidelinesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuidelinesComponent, selectors: [["app-guidelines"]], decls: 40, vars: 0, consts: [[1, "row"], [1, "col-12"], [1, "card"], [1, "card-title"], [1, "card-body"]], template: function GuidelinesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "10 Agosto 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0)(5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4)(8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Genoxal comprimidos 50 mg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Un comprimido durante dias alternos durante 4 semanas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 0)(13, "div", 2)(14, "div", 4)(15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Hedylon comprimidos 25 mg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Un comprimido durante dias alternos durante 4 semanas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0)(20, "div", 2)(21, "div", 4)(22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Doxycare comprimidos 200 mg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Un comprimido ma\u00F1ana y noche durante 21 d\u00EDas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 0)(27, "div", 2)(28, "div", 4)(29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Omeprazol capsulas 20 mg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Un c\u00E1psula al d\u00EDa mientras dure el tratamiento quimioterapico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 0)(34, "div", 2)(35, "div", 4)(36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Cerenia comprimidos 160 mg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2 comprimidos por la ma\u00F1ana los dias 11 y 12.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJndWlkZWxpbmVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1658:
/*!**************************************************!*\
  !*** ./src/app/layouts/blank/blank.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankComponent": () => (/* binding */ BlankComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3903);


class BlankComponent {
}
BlankComponent.ɵfac = function BlankComponent_Factory(t) { return new (t || BlankComponent)(); };
BlankComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankComponent, selectors: [["app-blank-layout"]], decls: 1, vars: 0, template: function BlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 6729:
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullComponent": () => (/* binding */ FullComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3903);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8750);
/* harmony import */ var marlin_cdk__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! marlin-cdk */ 6486);
/* harmony import */ var _shared_vertical_header_vertical_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/vertical-header/vertical-navigation.component */ 3132);
/* harmony import */ var _shared_horizontal_header_horizontal_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/horizontal-header/horizontal-navigation.component */ 581);
/* harmony import */ var _shared_horizontal_sidebar_horizontal_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/horizontal-sidebar/horizontal-sidebar.component */ 5035);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 9150);
/* harmony import */ var _shared_vertical_sidebar_vertical_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/vertical-sidebar/vertical-sidebar.component */ 9234);
/* harmony import */ var _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/breadcrumb/breadcrumb.component */ 419);











function FullComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-horizontal-sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function FullComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "app-vertical-sidebar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("notify", function FullComponent_ng_template_8_Template_app_vertical_sidebar_notify_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.handleClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("perfectScrollbar", ctx_r2.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showClass", ctx_r2.showMobileMenu);
} }
const _c0 = function (a0) { return { "show-sidebar": a0 }; };
class FullComponent {
    constructor(router) {
        this.router = router;
        this.config = {};
        this.active = 1;
        this.tabStatus = 'justified';
        this.isCollapsed = false;
        this.showSettings = false;
        this.showMobileMenu = false;
        this.options = {
            theme: 'light',
            dir: 'ltr',
            layout: 'vertical',
            sidebartype: 'full',
            sidebarpos: 'fixed',
            headerpos: 'fixed',
            boxed: 'full',
            navbarbg: 'skin1',
            sidebarbg: 'skin6',
            logobg: 'skin6' // six possible values: skin(1/2/3/4/5/6)
        };
    }
    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/dashboard/classic']);
        }
        this.defaultSidebar = this.options.sidebartype;
        this.handleSidebar();
    }
    onResize(event) {
        this.handleSidebar();
    }
    handleSidebar() {
        this.innerWidth = window.innerWidth;
        switch (this.defaultSidebar) {
            case 'full':
            case 'iconbar':
                if (this.innerWidth < 1170) {
                    this.options.sidebartype = 'mini-sidebar';
                }
                else {
                    this.options.sidebartype = this.defaultSidebar;
                }
                break;
            case 'overlay':
                if (this.innerWidth < 767) {
                    this.options.sidebartype = 'mini-sidebar';
                }
                else {
                    this.options.sidebartype = this.defaultSidebar;
                }
                break;
            default:
        }
    }
    handleShowMobileMenu(isMobileMenuShown) {
        this.showMobileMenu = isMobileMenuShown;
    }
    toggleSidebarType() {
        switch (this.options.sidebartype) {
            case 'full':
            case 'iconbar':
                this.options.sidebartype = 'mini-sidebar';
                break;
            case 'overlay':
                this.showMobileMenu = !this.showMobileMenu;
                break;
            case 'mini-sidebar':
                if (this.defaultSidebar === 'mini-sidebar') {
                    this.options.sidebartype = 'full';
                }
                else {
                    this.options.sidebartype = this.defaultSidebar;
                }
                break;
            default:
        }
    }
    handleClick() {
        this.showMobileMenu = !this.showMobileMenu;
    }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
FullComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full-layout"]], hostBindings: function FullComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function FullComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    } }, decls: 16, vars: 14, consts: [["id", "main-wrapper", "data-sidebartype", "full", 3, "ngClass", "dir"], [3, "options", "handleShowMobileMenu"], ["id", "vertical-nav"], [3, "toggleSidebar"], ["id", "horizontal-nav"], [1, "w-100", "d-flex", "align-items-center", "justify-content-between"], [3, "sidebarbg"], [4, "ngIf", "ngIfElse"], ["vlayout", ""], [1, "page-wrapper", 2, "padding-top", "120px"], [1, "container-fluid"], [1, "scroll-sidebar", 3, "perfectScrollbar"], [3, "showClass", "notify"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "mkt-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("handleShowMobileMenu", function FullComponent_Template_mkt_header_handleShowMobileMenu_1_listener($event) { return ctx.handleShowMobileMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2)(3, "app-vertical-navigation", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("toggleSidebar", function FullComponent_Template_app_vertical_navigation_toggleSidebar_3_listener() { return ctx.toggleSidebarType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-horizontal-navigation", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mkt-sidenav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, FullComponent_div_7_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, FullComponent_ng_template_8_Template, 2, 2, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mkt-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Roberto. informe sobre hematolog\u00EDas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](12, _c0, ctx.showMobileMenu))("dir", ctx.options.dir);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-theme", ctx.options.theme)("data-layout", ctx.options.layout)("data-sidebartype", ctx.options.sidebartype)("data-sidebar-position", ctx.options.sidebarpos)("data-header-position", ctx.options.headerpos)("data-boxed-layout", ctx.options.boxed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sidebarbg", ctx.options.sidebarbg);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.options.layout === "horizontal")("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, marlin_cdk__WEBPACK_IMPORTED_MODULE_8__.MktHeaderComponent, _shared_vertical_header_vertical_navigation_component__WEBPACK_IMPORTED_MODULE_0__.VerticalNavigationComponent, _shared_horizontal_header_horizontal_navigation_component__WEBPACK_IMPORTED_MODULE_1__.HorizontalNavigationComponent, marlin_cdk__WEBPACK_IMPORTED_MODULE_8__.MktSidenavComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_horizontal_sidebar_horizontal_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.HorizontalSidebarComponent, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__.PerfectScrollbarDirective, _shared_vertical_sidebar_vertical_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.VerticalSidebarComponent, _shared_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, marlin_cdk__WEBPACK_IMPORTED_MODULE_8__.MktFooterComponent], styles: [".max-width[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZ1bGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJmdWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1heC13aWR0aCB7XHJcbiAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1107:
/*!***********************************************!*\
  !*** ./src/app/service/http-state.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpProgressState": () => (/* binding */ HttpProgressState),
/* harmony export */   "HttpStateService": () => (/* binding */ HttpStateService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8259);


var HttpProgressState;
(function (HttpProgressState) {
    HttpProgressState[HttpProgressState["start"] = 0] = "start";
    HttpProgressState[HttpProgressState["end"] = 1] = "end";
})(HttpProgressState || (HttpProgressState = {}));
class HttpStateService {
    constructor() {
        this.state = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
    }
}
HttpStateService.ɵfac = function HttpStateService_Factory(t) { return new (t || HttpStateService)(); };
HttpStateService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HttpStateService, factory: HttpStateService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 7320:
/*!*************************************************!*\
  !*** ./src/app/service/notification.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8259);


class NotificationService {
    constructor() {
        this.errorMsg = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject("");
        this.infoMsg = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject("");
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 3600:
/*!******************************************************!*\
  !*** ./src/app/service/token-interceptor.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptorService": () => (/* binding */ TokenInterceptorService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3690);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9845);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5428);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1435);
/* harmony import */ var _http_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-state.service */ 1107);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.service */ 7320);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 325);










class TokenInterceptorService {
    constructor(httpStateService, notificationService, translateService) {
        this.httpStateService = httpStateService;
        this.notificationService = notificationService;
        this.translateService = translateService;
        this.exceptions = [
            "login",
            "revoke",
            "register",
            "assets",
            "refresh",
        ];
        this.isRefreshing = false;
    }
    intercept(request, next) {
        const authReq = this.cloneRequest(request);
        this.httpStateService.state.next({
            url: authReq.url,
            state: _http_state_service__WEBPACK_IMPORTED_MODULE_0__.HttpProgressState.start,
        });
        return next.handle(authReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retryWhen)((error) => {
            return error.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(1000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((response) => {
                if (response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpErrorResponse &&
                    !this.exceptions.includes(authReq.url))
                    this.notificationService.errorMsg.next(response.error);
                console.error(this.translateService.instant("Error in response"), response === null || response === void 0 ? void 0 : response.error);
                throw error;
            }));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => {
            this.httpStateService.state.next({
                url: authReq.url,
                state: _http_state_service__WEBPACK_IMPORTED_MODULE_0__.HttpProgressState.end,
            });
        }));
    }
    cloneRequest(request) {
        return request.clone();
    }
}
TokenInterceptorService.ɵfac = function TokenInterceptorService_Factory(t) { return new (t || TokenInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_http_state_service__WEBPACK_IMPORTED_MODULE_0__.HttpStateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateService)); };
TokenInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: TokenInterceptorService, factory: TokenInterceptorService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 419:
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3903);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 7532);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8750);








function BreadcrumbComponent_div_2_ng_template_6_li_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const url_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", url_r3.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](url_r3.title);
} }
function BreadcrumbComponent_div_2_ng_template_6_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const url_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", url_r3.title, " ");
} }
function BreadcrumbComponent_div_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BreadcrumbComponent_div_2_ng_template_6_li_0_Template, 3, 2, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbComponent_div_2_ng_template_6_li_1_Template, 2, 1, "li", 10);
} if (rf & 2) {
    const last_r4 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r4);
} }
function BreadcrumbComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5)(4, "nav", 6)(5, "ol", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BreadcrumbComponent_div_2_ng_template_6_Template, 2, 2, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const pageInfo_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pageInfo_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pageInfo_r1.urls);
} }
class BreadcrumbComponent {
    constructor(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.$pageInfo = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(Object.create(null));
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => this.activatedRoute))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(route => route.outlet === 'primary'))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.mergeMap)(route => route.data))
            .subscribe(event => {
            this.titleService.setTitle(event['title']);
            this.$pageInfo.next(event.routing ? event.routing : event);
        });
    }
    ngOnInit() { }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.Title)); };
BreadcrumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["app-breadcrumb"]], decls: 4, vars: 3, consts: [[1, "page-breadcrumb"], [1, "row"], ["class", "col-12 align-self-center", 4, "ngIf"], [1, "col-12", "align-self-center"], [1, "page-title"], [1, "d-flex", "align-items-center"], ["aria-label", "breadcrumb"], [1, "breadcrumb"], ["ngFor", "", 3, "ngForOf"], ["class", "breadcrumb-item", 3, "routerLink", 4, "ngIf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item", 3, "routerLink"], ["href", "javascript:void(0)"], [1, "breadcrumb-item", "active"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BreadcrumbComponent_div_2_Template, 7, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.$pageInfo));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe], encapsulation: 2 });


/***/ }),

/***/ 581:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/horizontal-header/horizontal-navigation.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalNavigationComponent": () => (/* binding */ HorizontalNavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 325);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 8689);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 6410);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8750);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9109);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 9150);









function HorizontalNavigationComponent_span_28_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", lang_r3.type, ")");
} }
function HorizontalNavigationComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalNavigationComponent_span_28_Template_span_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const lang_r3 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.changeLanguage(lang_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HorizontalNavigationComponent_span_28_span_4_Template, 2, 1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const lang_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", lang_r3.icon, " me-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", lang_r3.language, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", lang_r3.type);
} }
function HorizontalNavigationComponent_a_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 67)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 68)(4, "h5", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const notification_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-circle rounded-circle ", notification_r8.btn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](notification_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r8.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notification_r8.time);
} }
function HorizontalNavigationComponent_a_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 67)(1, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 73)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 68)(5, "h5", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const mymessage_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", mymessage_r9.useravatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("profile-status rounded-circle d-inline-block ", mymessage_r9.status, " float-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mymessage_r9.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mymessage_r9.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mymessage_r9.time);
} }
const _c0 = function (a0) { return { "show-search": a0 }; };
class HorizontalNavigationComponent {
    constructor(translate) {
        this.translate = translate;
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.config = {};
        this.showSearch = false;
        this.isCollapsed = false;
        this.showMobileMenu = false;
        this.notifications = [
            {
                btn: "btn-danger",
                icon: "ti-link",
                title: "Luanch Admin",
                subject: "Just see the my new admin!",
                time: "9:30 AM",
            },
            {
                btn: "btn-success",
                icon: "ti-calendar",
                title: "Event today",
                subject: "Just a reminder that you have event",
                time: "9:10 AM",
            },
            {
                btn: "btn-info",
                icon: "ti-settings",
                title: "Settings",
                subject: "You can customize this template as you want",
                time: "9:08 AM",
            },
            {
                btn: "btn-primary",
                icon: "ti-user",
                title: "Pavan kumar",
                subject: "Just see the my admin!",
                time: "9:00 AM",
            },
        ];
        // This is for Mymessages
        this.mymessages = [
            {
                useravatar: "assets/images/users/user1.jpg",
                status: "online",
                from: "Pavan kumar",
                subject: "Just see the my admin!",
                time: "9:30 AM",
            },
            {
                useravatar: "assets/images/users/user2.jpg",
                status: "busy",
                from: "Sonu Nigam",
                subject: "I have sung a song! See you at",
                time: "9:10 AM",
            },
            {
                useravatar: "assets/images/users/user2.jpg",
                status: "away",
                from: "Arijit Sinh",
                subject: "I am a singer!",
                time: "9:08 AM",
            },
            {
                useravatar: "assets/images/users/user4.jpg",
                status: "offline",
                from: "Pavan kumar",
                subject: "Just see the my admin!",
                time: "9:00 AM",
            },
        ];
        this.selectedLanguage = {
            language: "English",
            code: "gb",
            type: "US",
            icon: "gb",
        };
        this.languages = [
            {
                language: "English",
                code: "gb",
                type: "GB",
                icon: "gb",
            },
            {
                language: "French",
                code: "fr",
                icon: "fr",
            },
            {
                language: "Spanish",
                code: "es",
                icon: "es",
            },
            {
                language: "German",
                code: "de",
                icon: "de",
            },
        ];
        translate.setDefaultLang("gb");
    }
    ngAfterViewInit() { }
    changeLanguage(lang) {
        this.translate.use(lang.code);
        this.selectedLanguage = lang;
    }
}
HorizontalNavigationComponent.ɵfac = function HorizontalNavigationComponent_Factory(t) { return new (t || HorizontalNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
HorizontalNavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HorizontalNavigationComponent, selectors: [["app-horizontal-navigation"]], outputs: { toggleSidebar: "toggleSidebar" }, decls: 106, vars: 13, consts: [[1, "navbar-nav", "float-start"], [1, "nav-item", "d-none"], ["href", "javascript:void(0)", 1, "nav-link", "sidebartoggler", "waves-effect", "waves-light", 3, "click"], [1, "mdi", "mdi-menu", "fs-7"], [1, "nav-item", "search-box"], ["href", "javascript:void(0)", 1, "nav-link", "waves-effect", "waves-dark", 3, "click"], ["name", "search"], [1, "app-search", "position-absolute", 3, "ngClass"], ["type", "text", "placeholder", "Search & enter", 1, "form-control"], [1, "srh-btn", 3, "click"], [1, "ti-close"], [1, "navbar-header", "d-none", "d-lg-flex", "justify-content-center"], ["href", "javascript:void(0)", 1, "nav-toggler", "waves-effect", "waves-light", "d-block", "d-lg-none", 3, "click"], [3, "ngClass"], ["href", "/", 1, "navbar-brand"], [1, "logo-icon"], ["src", "assets/images/logos/xtreme-dark-icon.svg", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logos/xtreme-white-icon.svg", "alt", "homepage", 1, "light-logo"], [1, "logo-text"], ["src", "assets/images/logos/xtreme-dark-text.svg", "alt", "homepage", 1, "dark-logo"], ["src", "assets/images/logos/xtreme-white-text.svg", "alt", "homepage", 1, "light-logo"], ["href", "javascript:void(0)", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", 1, "topbartoggler", "d-block", "d-lg-none", "waves-effect", "waves-light", 3, "click"], [1, "ti-more"], [1, "navbar-nav", "float-md-end"], ["ngbDropdown", "", "placement", "bottom-end", 1, "nav-item", "dropdown"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", "ngbDropdownMenu", "", 1, "dropdown-menu", "end", "dropdown-menu-animate-up"], ["class", "dropdown-item", "href", "#", 3, "click", 4, "ngFor", "ngForOf"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "waves-effect", "waves-dark"], ["name", "bell"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "end", "mailbox", "dropdown-menu-animate-up"], [1, "with-arrow"], [1, "bg-primary"], [1, "list-style-none"], [1, "drop-title", "bg-primary", "text-white"], [1, "mb-0", "mt-1"], [1, "fw-light"], [1, "message-center", "notifications", 3, "perfectScrollbar"], ["href", "javascript:void(0)", "class", "message-item border-bottom d-block text-decoration-none", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 1, "link", "text-center", "mb-1"], [1, "fa", "fa-angle-right"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "id", "2", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "waves-effect", "waves-dark"], ["name", "message-square"], ["aria-labelledby", "2", "ngbDropdownMenu", "", 1, "dropdown-menu", "end", "mailbox", "dropdown-menu-animate-up"], [1, "bg-danger"], [1, "drop-title", "text-white", "bg-danger"], [1, "message-center", "message-body", 3, "perfectScrollbar"], ["href", "javascript:void(0);", 1, "text-center", "link"], ["ngbDropdownToggle", "", "href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "text-muted", "waves-effect", "waves-dark", "pro-pic"], ["src", "assets/images/users/user1.jpg", "alt", "user", "width", "31", 1, "rounded-circle"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "end", "user-dd", "dropdown-menu-animate-up"], [1, "d-flex", "no-block", "align-items-center", "p-3", "bg-primary", "text-white", "mb-2"], [1, ""], ["src", "assets/images/users/user1.jpg", "alt", "user", "width", "60", 1, "img-circle"], [1, "ms-2"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "ti-user", "me-2", "ms-1"], [1, "ti-wallet", "me-2", "ms-1"], [1, "ti-email", "me-2", "ms-1"], [1, "dropdown-divider"], [1, "ti-settings", "me-2", "ms-1"], [1, "fa", "fa-power-off", "me-2", "ms-1"], [1, "ps-4", "p-2"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-success", "btn-rounded"], ["href", "#", 1, "dropdown-item", 3, "click"], [4, "ngIf"], ["href", "javascript:void(0)", 1, "message-item", "border-bottom", "d-block", "text-decoration-none"], [1, "mail-contnet", "d-inline-block", "w-75", "ps-2", "align-middle"], [1, "message-title"], [1, "mail-desc", "fs-2", "d-block", "text-muted", "text-truncate"], [1, "time", "fs-2", "d-block", "text-muted", "text-truncate"], [1, "user-img", "position-relative", "d-inline-block"], ["alt", "user", 1, "rounded-circle", 3, "src"]], template: function HorizontalNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalNavigationComponent_Template_a_click_2_listener() { return ctx.toggleSidebar.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4)(5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalNavigationComponent_Template_a_click_5_listener() { return ctx.showSearch = !ctx.showSearch; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i-feather", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalNavigationComponent_Template_a_click_9_listener() { return ctx.showSearch = !ctx.showSearch; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11)(12, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalNavigationComponent_Template_a_click_12_listener() { return ctx.showMobileMenu = !ctx.showMobileMenu; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 14)(15, "b", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 16)(17, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 19)(20, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HorizontalNavigationComponent_Template_a_click_21_listener() { return ctx.isCollapsed = !ctx.isCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 23)(24, "li", 24)(25, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HorizontalNavigationComponent_span_28_Template, 5, 5, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 24)(30, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i-feather", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 30)(33, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 33)(36, "li")(37, "div", 34)(38, "h4", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "4 New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li")(43, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HorizontalNavigationComponent_a_44_Template, 10, 9, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li")(46, "a", 39)(47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Check all notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 24)(51, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i-feather", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 43)(54, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "ul", 33)(57, "li")(58, "div", 45)(59, "h4", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "5 New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li")(64, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, HorizontalNavigationComponent_a_65_Template, 11, 7, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li")(67, "a", 47)(68, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "See all e-Mails");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li", 24)(72, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 50)(75, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 51)(78, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 54)(81, "h4", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Steave Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "varun@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " My Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " My Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Account Setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 63)(104, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "View Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.showSearch));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showMobileMenu ? "ti-close" : "ti-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", ctx.selectedLanguage.icon, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.notifications);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mymessages);
    } }, directives: [angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarDirective], encapsulation: 2 });


/***/ }),

/***/ 5387:
/*!********************************************************************!*\
  !*** ./src/app/shared/horizontal-sidebar/horizontal-menu-items.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
const ROUTES = [
    {
        path: '',
        title: 'Starter Page',
        icon: 'home',
        class: '',
        ddclass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '',
        title: 'Components',
        icon: 'grid',
        class: 'has-arrow',
        ddclass: 'mega-dropdown',
        extralink: false,
        submenu: [
            {
                path: '/component/accordion',
                title: 'Accordion',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                ddclass: "",
                submenu: []
            },
            {
                path: '/component/alert',
                title: 'Alert',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                ddclass: "",
                submenu: []
            },
            {
                path: '/component/badges',
                title: 'Badges',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                ddclass: "",
                submenu: []
            },
            {
                path: '/component/buttons',
                title: 'Button',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                ddclass: "",
                submenu: []
            },
            {
                path: '/component/carousel',
                title: 'Carousel',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                ddclass: "",
                submenu: []
            },
            {
                path: '/component/card',
                title: 'Card',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                ddclass: "",
                submenu: []
            },
            {
                path: '/component/dropdown',
                title: 'Dropdown',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                ddclass: "",
                submenu: []
            },
            {
                path: '/component/datepicker',
                title: 'Datepicker',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                ddclass: "",
                submenu: []
            },
            {
                path: '/component/modal',
                title: 'Modal',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                ddclass: "",
                submenu: []
            },
            {
                path: '/component/pagination',
                title: 'Pagination',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                ddclass: "",
                submenu: []
            },
            {
                path: '/component/poptool',
                title: 'Popover & Tooltip',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                ddclass: "",
                submenu: []
            },
            {
                path: '/component/progressbar',
                title: 'Progressbar',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                ddclass: "",
                submenu: []
            },
            {
                path: '/component/rating',
                title: 'Ratings',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                ddclass: "",
                submenu: []
            },
            {
                path: '/component/nav',
                title: 'Nav',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                ddclass: "",
                submenu: []
            },
            {
                path: '/component/timepicker',
                title: 'Timepicker',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                ddclass: "",
                submenu: []
            },
            {
                path: "/component/toast",
                title: "Toast",
                icon: "mdi mdi-adjust",
                class: '',
                extralink: false,
                ddclass: "",
                submenu: []
            },
            {
                path: '/component/notifier',
                title: 'Notifier',
                icon: 'mdi mdi-adjust',
                class: '',
                extralink: false,
                ddclass: "",
                submenu: []
            }
        ]
    }
];


/***/ }),

/***/ 5035:
/*!***************************************************************************!*\
  !*** ./src/app/shared/horizontal-sidebar/horizontal-sidebar.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalSidebarComponent": () => (/* binding */ HorizontalSidebarComponent)
/* harmony export */ });
/* harmony import */ var _horizontal_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horizontal-sidebar.service */ 947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3903);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8750);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ 8689);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 325);








function HorizontalSidebarComponent_li_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, sidebarnavItem_r1.title));
} }
const _c0 = function (a0) { return [a0]; };
function HorizontalSidebarComponent_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function HorizontalSidebarComponent_li_2_a_2_Template_a_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.addExpandClass(sidebarnavItem_r1.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i-feather", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", sidebarnavItem_r1.class === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, sidebarnavItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, sidebarnavItem_r1.class))("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", sidebarnavItem_r1.icon)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, sidebarnavItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, sidebarnavItem_r1.title));
} }
function HorizontalSidebarComponent_li_2_ul_3_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function HorizontalSidebarComponent_li_2_ul_3_li_1_a_1_Template_a_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const sidebarnavSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r14.addActiveClass(sidebarnavSubItem_r11.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const sidebarnavSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", sidebarnavSubItem_r11.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, sidebarnavSubItem_r11.path))("routerLinkActive", sidebarnavSubItem_r11.submenu.length != 0 ? "" : "router-link-active")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, sidebarnavSubItem_r11.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, sidebarnavSubItem_r11.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, sidebarnavSubItem_r11.title));
} }
function HorizontalSidebarComponent_li_2_ul_3_li_1_ul_2_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const sidebarnavSubsubItem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", sidebarnavSubsubItem_r19.submenu.length != 0 ? "" : "")("routerLink", sidebarnavSubsubItem_r19.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, sidebarnavSubsubItem_r19.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, sidebarnavSubsubItem_r19.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, sidebarnavSubsubItem_r19.title));
} }
function HorizontalSidebarComponent_li_2_ul_3_li_1_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalSidebarComponent_li_2_ul_3_li_1_ul_2_li_1_a_1_Template, 5, 10, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavSubsubItem_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, sidebarnavSubsubItem_r19.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !sidebarnavSubsubItem_r19.extralink);
} }
const _c1 = function (a0) { return { "in": a0 }; };
function HorizontalSidebarComponent_li_2_ul_3_li_1_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalSidebarComponent_li_2_ul_3_li_1_ul_2_li_1_Template, 2, 4, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx_r13.showSubMenu === sidebarnavSubItem_r11.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", sidebarnavSubItem_r11.submenu);
} }
function HorizontalSidebarComponent_li_2_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalSidebarComponent_li_2_ul_3_li_1_a_1_Template, 5, 13, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HorizontalSidebarComponent_li_2_ul_3_li_1_ul_2_Template, 2, 4, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavSubItem_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r10.showSubMenu === sidebarnavSubItem_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", sidebarnavSubItem_r11.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !sidebarnavSubItem_r11.extralink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", sidebarnavSubItem_r11.submenu.length > 0);
} }
function HorizontalSidebarComponent_li_2_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalSidebarComponent_li_2_ul_3_li_1_Template, 3, 5, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx_r4.showMenu === sidebarnavItem_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", sidebarnavItem_r1.submenu);
} }
function HorizontalSidebarComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HorizontalSidebarComponent_li_2_div_1_Template, 3, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HorizontalSidebarComponent_li_2_a_2_Template, 5, 14, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HorizontalSidebarComponent_li_2_ul_3_Template, 2, 4, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.showMenu === sidebarnavItem_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, sidebarnavItem_r1.ddclass))("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.extralink === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !sidebarnavItem_r1.extralink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.submenu.length > 0);
} }
class HorizontalSidebarComponent {
    constructor(menuServise, router) {
        this.menuServise = menuServise;
        this.router = router;
        this.showMenu = "";
        this.showSubMenu = "";
        this.sidebarnavItems = [];
        this.path = "";
        this.menuServise.items.subscribe((menuItems) => {
            this.sidebarnavItems = menuItems;
            // Active menu
            this.sidebarnavItems.filter((m) => m.submenu.filter((s) => {
                if (s.path === this.router.url) {
                    this.path = m.title;
                }
            }));
            this.addExpandClass(this.path);
        });
    }
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = element;
        }
        else {
            this.showMenu = element;
        }
    }
    addActiveClass(element) {
        if (element === this.showSubMenu) {
            this.showSubMenu = element;
        }
        else {
            this.showSubMenu = element;
        }
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
}
HorizontalSidebarComponent.ɵfac = function HorizontalSidebarComponent_Factory(t) { return new (t || HorizontalSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_horizontal_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.HorizontalSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
HorizontalSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HorizontalSidebarComponent, selectors: [["app-horizontal-sidebar"]], decls: 3, vars: 1, consts: [[1, "sidebar-nav"], ["id", "sidebarnav"], ["class", "sidebar-item", 3, "ngClass", "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "sidebar-item", 3, "ngClass", "routerLinkActive"], ["class", "nav-small-cap", 4, "ngIf"], ["class", "sidebar-link waves-effect waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "mouseover", 4, "ngIf"], ["aria-expanded", "false", "class", "collapse first-level", 3, "ngClass", 4, "ngIf"], [1, "nav-small-cap"], [1, "sidebar-link", "waves-effect", "waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "mouseover"], [3, "name", "ngClass"], [1, "hide-menu"], ["aria-expanded", "false", 1, "collapse", "first-level", 3, "ngClass"], ["class", "sidebar-item", 3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [1, "sidebar-item", 3, "routerLinkActive"], ["class", "sidebar-link", 3, "routerLink", "routerLinkActive", "ngClass", "mouseover", 4, "ngIf"], ["aria-expanded", "false", "class", "collapse second-level", 3, "ngClass", 4, "ngIf"], [1, "sidebar-link", 3, "routerLink", "routerLinkActive", "ngClass", "mouseover"], [3, "ngClass"], ["aria-expanded", "false", 1, "collapse", "second-level", 3, "ngClass"], ["class", "sidebar-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "sidebar-item", 3, "ngClass"], ["class", "sidebar-link", 3, "routerLinkActive", "routerLink", 4, "ngIf"], [1, "sidebar-link", 3, "routerLinkActive", "routerLink"]], template: function HorizontalSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HorizontalSidebarComponent_li_2_Template, 4, 9, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sidebarnavItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 947:
/*!*************************************************************************!*\
  !*** ./src/app/shared/horizontal-sidebar/horizontal-sidebar.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalSidebarService": () => (/* binding */ HorizontalSidebarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _horizontal_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./horizontal-menu-items */ 5387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8259);



class HorizontalSidebarService {
    constructor() {
        this.collapseSidebar = false;
        this.fullScreen = false;
        this.MENUITEMS = _horizontal_menu_items__WEBPACK_IMPORTED_MODULE_0__.ROUTES;
        this.items = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.MENUITEMS);
    }
}
HorizontalSidebarService.ɵfac = function HorizontalSidebarService_Factory(t) { return new (t || HorizontalSidebarService)(); };
HorizontalSidebarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HorizontalSidebarService, factory: HorizontalSidebarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3812:
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _service_http_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../service/http-state.service */ 1107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3903);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8750);






function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div")(3, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Loading... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4)(6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class SpinnerComponent {
    // constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {
    constructor(router, httpStateService) {
        this.router = router;
        this.httpStateService = httpStateService;
        this.isSpinnerVisible = true;
        this.backgroundColor = "rgba(0, 115, 170, 0.69)";
        this.httpStateService.state.subscribe((progress) => {
            if (this.router.url === "/") {
                this.isSpinnerVisible = false;
            }
            if (progress && progress.url) {
                this.isSpinnerVisible =
                    progress.state === _service_http_state_service__WEBPACK_IMPORTED_MODULE_0__.HttpProgressState.start ? true : false;
                // } else if (progress.url.indexOf(this.filterBy) !== -1) {
                //   this.loading = (progress.state === HttpProgressState.start) ? true : false;
                // }
            }
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_http_state_service__WEBPACK_IMPORTED_MODULE_0__.HttpStateService)); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { backgroundColor: "backgroundColor" }, decls: 1, vars: 1, consts: [["class", "preloader loading", 4, "ngIf"], [1, "preloader", "loading"], [1, "spinner"], [2, "padding-top", "30px"], [1, "double-bounce1"], [1, "double-bounce2"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 7, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 0.8;\n  background: grey;\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n}\n\n.spinner {\n  top: 10% !important;\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0YiLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgdG9wOiAxMCUgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ 3132:
/*!*************************************************************************!*\
  !*** ./src/app/shared/vertical-header/vertical-navigation.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalNavigationComponent": () => (/* binding */ VerticalNavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 6410);
/* harmony import */ var rxjs_add_operator_debounceTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/operator/debounceTime */ 2259);
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ 180);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 325);








const _c0 = ["searchInput"];
const _c1 = ["searchResultsContainer"];
class VerticalNavigationComponent {
    constructor(translate, fb) {
        this.translate = translate;
        this.fb = fb;
        this.toggleSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.config = {};
        this.showResults = false;
        this.searchResults = [];
        this.showSearch = false;
        // This is for Notifications
        this.notifications = [
            {
                btn: "btn-danger",
                icon: "ti-link",
                title: "Luanch Admin",
                subject: "Just see the my new admin!",
                time: "9:30 AM",
            },
            {
                btn: "btn-success",
                icon: "ti-calendar",
                title: "Event today",
                subject: "Just a reminder that you have event",
                time: "9:10 AM",
            },
            {
                btn: "btn-info",
                icon: "ti-settings",
                title: "Settings",
                subject: "You can customize this template as you want",
                time: "9:08 AM",
            },
            {
                btn: "btn-warning",
                icon: "ti-user",
                title: "Pavan kumar",
                subject: "Just see the my admin!",
                time: "9:00 AM",
            },
        ];
        // This is for Mymessages
        this.mymessages = [
            {
                useravatar: "assets/images/users/user1.jpg",
                status: "online",
                from: "Pavan kumar",
                subject: "Just see the my admin!",
                time: "9:30 AM",
            },
            {
                useravatar: "assets/images/users/user2.jpg",
                status: "busy",
                from: "Sonu Nigam",
                subject: "I have sung a song! See you at",
                time: "9:10 AM",
            },
            {
                useravatar: "assets/images/users/user2.jpg",
                status: "away",
                from: "Arijit Sinh",
                subject: "I am a singer!",
                time: "9:08 AM",
            },
            {
                useravatar: "assets/images/users/user4.jpg",
                status: "offline",
                from: "Pavan kumar",
                subject: "Just see the my admin!",
                time: "9:00 AM",
            },
        ];
        this.selectedLanguage = {
            language: "English",
            code: "gb",
            type: "US",
            icon: "gb",
        };
        this.languages = [
            {
                language: "English",
                code: "gb",
                type: "US",
                icon: "gb",
            },
            {
                language: "Español",
                code: "es",
                icon: "es",
            },
            {
                language: "Français",
                code: "fr",
                icon: "fr",
            },
            {
                language: "German",
                code: "de",
                icon: "de",
            },
        ];
        translate.setDefaultLang("gb");
        this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
        this.searchForm = fb.group({ search: this.searchField });
        // this.searchField.valueChanges
        //   .debounceTime(400)
        //   .switchMap((searchString: string) => {
        //     this.showResults = true;
        //     return this.searchService.quickSearchElements(searchString);
        //   })
        //   .subscribe((result: Array<any>) => {
        //     this.searchResults = result;
        //   });
    }
    ngAfterViewInit() { }
    changeLanguage(lang) {
        this.translate.use(lang.code);
        this.selectedLanguage = lang;
    }
    onSearchClick() {
        this.showSearch = !this.showSearch;
        setTimeout(() => {
            this.searchInput.nativeElement.focus();
        }, 500);
    }
    setFocusOnSearchResult() {
        this.searchResult.nativeElement.focus();
    }
}
VerticalNavigationComponent.ɵfac = function VerticalNavigationComponent_Factory(t) { return new (t || VerticalNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
VerticalNavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VerticalNavigationComponent, selectors: [["app-vertical-navigation"]], viewQuery: function VerticalNavigationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.searchResult = _t.first);
    } }, outputs: { toggleSidebar: "toggleSidebar" }, decls: 5, vars: 0, consts: [[1, "navbar-nav", "float-start", "me-auto"], [1, "nav-item", "d-none", "d-lg-block"], ["href", "javascript:void(0)", 1, "nav-link", "sidebartoggler", "waves-effect", "waves-light", 3, "click"], [1, "mdi", "mdi-menu", "fs-7"], [1, "nav-item", "search-box"]], template: function VerticalNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VerticalNavigationComponent_Template_a_click_2_listener() { return ctx.toggleSidebar.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: [".searchResults[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  opacity: 0.8;\n  background: #151e36;\n  color: white;\n  min-height: 200px;\n  width: 100%;\n  padding: 10px;\n}\n.searchResults[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .searchResults[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .searchResults[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: white;\n}\n.searchResults[_ngcontent-%COMP%]:focus {\n  border: 1px solid white;\n}\n.result-item[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.result-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  border-radius: 10px;\n  border: 1px solid white;\n  padding: 5px;\n}\n.result-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.result-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  border: 1px solid #151e36;\n}\n.result-item[_ngcontent-%COMP%]:focus {\n  border-radius: 10px;\n  border: 1px solid #888d98;\n}\n.result-item[_ngcontent-%COMP%]:hover {\n  border: 2px solid #f9fafa;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcnRpY2FsLW5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUNGO0FBQUU7OztFQUdFLFlBQUE7QUFFSjtBQUVBO0VBQ0UsdUJBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFFRTtFQUNFLFlBQUE7QUFBSjtBQUdFO0VBQ0UseUJBQUE7QUFESjtBQUtBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQUZGO0FBS0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBRkYiLCJmaWxlIjoidmVydGljYWwtbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hSZXN1bHRzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgYmFja2dyb3VuZDogIzE1MWUzNjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBhLFxyXG4gIGE6aG92ZXIsXHJcbiAgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2hSZXN1bHRzOmZvY3VzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLnJlc3VsdC1pdGVtIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuXHJcbiAgcDpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTUxZTM2O1xyXG4gIH1cclxufVxyXG5cclxuLnJlc3VsdC1pdGVtOmZvY3VzIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODhkOTg7XHJcbn1cclxuXHJcbi5yZXN1bHQtaXRlbTpob3ZlciB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2Y5ZmFmYTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3562:
/*!****************************************************************!*\
  !*** ./src/app/shared/vertical-sidebar/vertical-menu-items.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
const ROUTES = [
    {
        path: "/starter",
        title: "Dashboard",
        icon: "Home",
        class: "",
        extralink: false,
        label: "",
        labelClass: "",
        submenu: [],
    },
    {
        path: "/guidelines",
        title: "Medicacion",
        icon: "clipboard",
        class: "",
        extralink: false,
        label: "",
        labelClass: "",
        submenu: [],
    },
];


/***/ }),

/***/ 9234:
/*!***********************************************************************!*\
  !*** ./src/app/shared/vertical-sidebar/vertical-sidebar.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalSidebarComponent": () => (/* binding */ VerticalSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _vertical_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vertical-sidebar.service */ 5161);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3903);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8750);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ 8689);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 325);









const _c0 = function (a0) { return [a0]; };
function VerticalSidebarComponent_li_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, sidebarnavItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, sidebarnavItem_r1.title));
} }
function VerticalSidebarComponent_li_4_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, sidebarnavItem_r1.labelClass));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, sidebarnavItem_r1.label));
} }
function VerticalSidebarComponent_li_4_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerticalSidebarComponent_li_4_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.addExpandClass(sidebarnavItem_r1.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i-feather", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, VerticalSidebarComponent_li_4_a_2_span_5_Template, 3, 6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", sidebarnavItem_r1.class === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, sidebarnavItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, sidebarnavItem_r1.class))("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", sidebarnavItem_r1.icon)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, sidebarnavItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 7, sidebarnavItem_r1.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.label != "");
} }
function VerticalSidebarComponent_li_4_ul_3_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerticalSidebarComponent_li_4_ul_3_li_1_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const sidebarnavSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r16.addActiveClass(sidebarnavSubItem_r13.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const sidebarnavSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", sidebarnavSubItem_r13.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, sidebarnavSubItem_r13.path))("routerLinkActive", sidebarnavSubItem_r13.submenu.length > 0 ? "" : "router-link-active")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, sidebarnavSubItem_r13.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, sidebarnavSubItem_r13.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, sidebarnavSubItem_r13.title));
} }
function VerticalSidebarComponent_li_4_ul_3_li_1_ul_2_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const sidebarnavSubsubItem_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, sidebarnavSubsubItem_r21.path))("routerLinkActive", sidebarnavSubsubItem_r21.submenu.length > 0 ? "" : "router-link-active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, sidebarnavSubsubItem_r21.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, sidebarnavSubsubItem_r21.title));
} }
function VerticalSidebarComponent_li_4_ul_3_li_1_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerticalSidebarComponent_li_4_ul_3_li_1_ul_2_li_1_a_1_Template, 5, 10, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavSubsubItem_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, sidebarnavSubsubItem_r21.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !sidebarnavSubsubItem_r21.extralink);
} }
const _c1 = function (a0) { return { in: a0 }; };
function VerticalSidebarComponent_li_4_ul_3_li_1_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerticalSidebarComponent_li_4_ul_3_li_1_ul_2_li_1_Template, 2, 4, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavSubItem_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx_r15.showSubMenu === sidebarnavSubItem_r13.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", sidebarnavSubItem_r13.submenu);
} }
function VerticalSidebarComponent_li_4_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerticalSidebarComponent_li_4_ul_3_li_1_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const sidebarnavSubItem_r13 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return sidebarnavSubItem_r13.submenu.length != 0 ? "" : ctx_r25.handleNotify(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerticalSidebarComponent_li_4_ul_3_li_1_a_1_Template, 5, 13, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerticalSidebarComponent_li_4_ul_3_li_1_ul_2_Template, 2, 4, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavSubItem_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r12.showSubMenu === sidebarnavSubItem_r13.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", sidebarnavSubItem_r13.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !sidebarnavSubItem_r13.extralink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", sidebarnavSubItem_r13.submenu.length > 0);
} }
function VerticalSidebarComponent_li_4_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerticalSidebarComponent_li_4_ul_3_li_1_Template, 3, 5, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, ctx_r4.showMenu === sidebarnavItem_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", sidebarnavItem_r1.submenu);
} }
function VerticalSidebarComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerticalSidebarComponent_li_4_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const sidebarnavItem_r1 = restoredCtx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return sidebarnavItem_r1.submenu.length != 0 ? "" : ctx_r28.handleNotify(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VerticalSidebarComponent_li_4_div_1_Template, 5, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, VerticalSidebarComponent_li_4_a_2_Template, 6, 15, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, VerticalSidebarComponent_li_4_ul_3_Template, 2, 4, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sidebarnavItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r0.showMenu === sidebarnavItem_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", sidebarnavItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.extralink === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !sidebarnavItem_r1.extralink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", sidebarnavItem_r1.submenu.length > 0);
} }
class VerticalSidebarComponent {
    constructor(menuServise, router) {
        this.menuServise = menuServise;
        this.router = router;
        this.showClass = false;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.showMenu = "";
        this.showSubMenu = "";
        this.sidebarnavItems = [];
        this.path = "";
        this.menuServise.items.subscribe((menuItems) => {
            this.sidebarnavItems = menuItems;
            // Active menu
            this.sidebarnavItems.filter((m) => m.submenu.filter((s) => {
                if (s.path === this.router.url) {
                    this.path = m.title;
                }
            }));
            this.addExpandClass(this.path);
        });
    }
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = "0";
        }
        else {
            this.showMenu = element;
        }
    }
    addActiveClass(element) {
        if (element === this.showSubMenu) {
            this.showSubMenu = "0";
        }
        else {
            this.showSubMenu = element;
        }
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
    handleNotify() {
        this.notify.emit(!this.showClass);
    }
}
VerticalSidebarComponent.ɵfac = function VerticalSidebarComponent_Factory(t) { return new (t || VerticalSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_vertical_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.VerticalSidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
VerticalSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VerticalSidebarComponent, selectors: [["app-vertical-sidebar"]], inputs: { showClass: "showClass" }, outputs: { notify: "notify" }, decls: 5, vars: 1, consts: [[1, "sidebar-nav"], ["id", "sidebarnav"], [1, "user-profile", "d-flex", "no-block", "mt-3"], ["class", "sidebar-item", 3, "active", "routerLinkActive", "click", 4, "ngFor", "ngForOf"], [1, "sidebar-item", 3, "routerLinkActive", "click"], ["class", "nav-small-cap", 4, "ngIf"], ["class", "sidebar-link waves-effect waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "click", 4, "ngIf"], ["aria-expanded", "false", "class", "collapse first-level", 3, "ngClass", 4, "ngIf"], [1, "nav-small-cap"], [3, "ngClass"], [1, "hide-menu"], [1, "sidebar-link", "waves-effect", "waves-dark", 3, "routerLink", "ngClass", "routerLinkActive", "click"], [3, "name", "ngClass"], [3, "ngClass", 4, "ngIf"], ["aria-expanded", "false", 1, "collapse", "first-level", 3, "ngClass"], ["class", "sidebar-link", 3, "routerLink", "routerLinkActive", "ngClass", "click", 4, "ngIf"], ["aria-expanded", "false", "class", "collapse Second-level", 3, "ngClass", 4, "ngIf"], [1, "sidebar-link", 3, "routerLink", "routerLinkActive", "ngClass", "click"], ["aria-expanded", "false", 1, "collapse", "Second-level", 3, "ngClass"], ["class", "sidebar-item", "routerLinkActive", "active", 3, "ngClass", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "sidebar-item", 3, "ngClass"], ["class", "sidebar-link", 3, "routerLink", "routerLinkActive", 4, "ngIf"], [1, "sidebar-link", 3, "routerLink", "routerLinkActive"]], template: function VerticalSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "ul", 1)(2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, VerticalSidebarComponent_li_4_Template, 4, 6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sidebarnavItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 5161:
/*!*********************************************************************!*\
  !*** ./src/app/shared/vertical-sidebar/vertical-sidebar.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalSidebarService": () => (/* binding */ VerticalSidebarService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _vertical_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vertical-menu-items */ 3562);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8259);



class VerticalSidebarService {
    constructor() {
        this.collapseSidebar = false;
        this.fullScreen = false;
        this.MENUITEMS = _vertical_menu_items__WEBPACK_IMPORTED_MODULE_0__.ROUTES;
        this.items = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.MENUITEMS);
    }
}
VerticalSidebarService.ɵfac = function VerticalSidebarService_Factory(t) { return new (t || VerticalSidebarService)(); };
VerticalSidebarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: VerticalSidebarService, factory: VerticalSidebarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    redirectUri: "http://localhost:4200",
    clientId: "c738ad0a-c0b1-4be3-88a3-9af6da2fd04f",
    authority: "https://login.microsoftonline.com/a17ec843-af69-4e17-a6fc-3e803a903e14",
    wsendpoint: "https://int-agw-marlindt.azurewebsites.net",
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 7532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 6486:
/*!*************************************************!*\
  !*** ./dist/marlin-cdk/fesm2015/marlin-cdk.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MktCardComponent": () => (/* binding */ MktCardComponent),
/* harmony export */   "MktCardModule": () => (/* binding */ MktCardModule),
/* harmony export */   "MktDropdownComponent": () => (/* binding */ MktDropdownComponent),
/* harmony export */   "MktDropdownModule": () => (/* binding */ MktDropdownModule),
/* harmony export */   "MktDynamicComponent": () => (/* binding */ MktDynamicComponent),
/* harmony export */   "MktDynamicModule": () => (/* binding */ MktDynamicModule),
/* harmony export */   "MktFooterComponent": () => (/* binding */ MktFooterComponent),
/* harmony export */   "MktFooterModule": () => (/* binding */ MktFooterModule),
/* harmony export */   "MktHeaderComponent": () => (/* binding */ MktHeaderComponent),
/* harmony export */   "MktHeaderModule": () => (/* binding */ MktHeaderModule),
/* harmony export */   "MktSidenavComponent": () => (/* binding */ MktSidenavComponent),
/* harmony export */   "MktSidenavModule": () => (/* binding */ MktSidenavModule),
/* harmony export */   "MktTableComponent": () => (/* binding */ MktTableComponent),
/* harmony export */   "MktTableModule": () => (/* binding */ MktTableModule),
/* harmony export */   "MktToastModule": () => (/* binding */ MktToastModule),
/* harmony export */   "MktToastService": () => (/* binding */ MktToastService),
/* harmony export */   "MktToastType": () => (/* binding */ MktToastType),
/* harmony export */   "MktToastsContainer": () => (/* binding */ MktToastsContainer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8750);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9109);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 6410);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ 8689);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 9150);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 7532);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/portal */ 5728);















function MktHeaderComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function MktHeaderComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

const _c0 = [[["", "id", "horizontal-nav"]], [["", "id", "vertical-nav"]]];
const _c1 = ["[id=horizontal-nav]", "[id=vertical-nav]"];
const _c2 = ["*"];
const _c3 = ["checkbox"];

function MktDropdownComponent_i_feather_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i-feather", 6);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r0.icon);
  }
}

function MktDropdownComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.name);
  }
}

function MktDropdownComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MktDropdownComponent_div_5_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const option_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r4.toggle(option_r3);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3, " ");
  }
}

function MktTableComponent_h4_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.title, " ");
  }
}

function MktTableComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.subtitle);
  }
}

function MktTableComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "ngb-pagination", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function MktTableComponent_div_6_Template_ngb_pagination_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r4.page = $event;
    })("pageChange", function MktTableComponent_div_6_Template_ngb_pagination_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r6.onPageChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx_r2.dataLength)("page", ctx_r2.page)("ellipses", true)("pageSize", ctx_r2.pageSize)("maxSize", 5)("boundaryLinks", true);
  }
}

function MktTableComponent_div_7_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const pageSizeOption_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", pageSizeOption_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pageSizeOption_r8.value, " ");
  }
}

function MktTableComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MktTableComponent_div_7_Template_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r9.onItemsPerPageChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MktTableComponent_div_7_option_2_Template, 2, 2, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.itemsPerPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.pageSizeOptions);
  }
}

function MktCardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.split(":")[0] + ":", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.split(":")[1], " ");
  }
}

function MktToastsContainer_ngb_toast_0_ng_template_1_ng_template_0_Template(rf, ctx) {}

function MktToastsContainer_ngb_toast_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MktToastsContainer_ngb_toast_0_ng_template_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }

  if (rf & 2) {
    const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", toast_r1.textOrTpl);
  }
}

function MktToastsContainer_ngb_toast_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }

  if (rf & 2) {
    const toast_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](toast_r1.textOrTpl);
  }
}

function MktToastsContainer_ngb_toast_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-toast", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hidden", function MktToastsContainer_ngb_toast_0_Template_ngb_toast_hidden_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const toast_r1 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return ctx_r8.toastService.remove(toast_r1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MktToastsContainer_ngb_toast_0_ng_template_1_Template, 1, 1, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MktToastsContainer_ngb_toast_0_ng_template_2_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const toast_r1 = ctx.$implicit;

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](toast_r1.classname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autohide", true)("delay", toast_r1.delay || 3000);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isTemplate(toast_r1))("ngIfElse", _r3);
  }
}

function MktDynamicComponent_ng_template_0_Template(rf, ctx) {}

class MktHeaderComponent {
  constructor() {
    this.config = {};
    this.isCollapsed = false;
    this.showMobileMenu = false;
    this.expandLogo = false;
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.handleShowMobileMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.options = {
      theme: 'light',
      dir: 'ltr',
      layout: 'vertical',
      sidebartype: 'full',
      sidebarpos: 'fixed',
      headerpos: 'fixed',
      boxed: 'full',
      navbarbg: 'skin1',
      sidebarbg: 'skin6',
      logobg: 'skin6' // six possible values: skin(1/2/3/4/5/6)

    };
  }

  handleToggleSidebarInMobile() {
    this.showMobileMenu = !this.showMobileMenu;
    this.handleShowMobileMenu.emit(this.showMobileMenu);
  }

  toggleSidebarType() {
    switch (this.options.sidebartype) {
      case 'full':
      case 'iconbar':
        this.options.sidebartype = 'mini-sidebar';
        break;

      case 'overlay':
        this.handleShowMobileMenu.emit(!this.showMobileMenu);
        break;

      case 'mini-sidebar':
        this.options.sidebartype = 'full';
        break;

      default:
    }

    this.onClick.emit(this.options.sidebartype);
  }

}

MktHeaderComponent.ɵfac = function MktHeaderComponent_Factory(t) {
  return new (t || MktHeaderComponent)();
};

MktHeaderComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MktHeaderComponent,
  selectors: [["mkt-header"]],
  inputs: {
    options: "options"
  },
  outputs: {
    onClick: "onClick",
    handleShowMobileMenu: "handleShowMobileMenu"
  },
  ngContentSelectors: _c1,
  decls: 14,
  vars: 10,
  consts: [[1, "topbar"], [1, "d-flex", "top-navbar", "navbar-expand-lg", 3, "ngClass"], [1, "navbar-header", 2, "background-color", "#ff0235", 3, "ngClass"], ["href", "javascript:void(0)", 1, "nav-toggler", "waves-effect", "waves-light", "d-block", "d-lg-none", 3, "click"], [3, "ngClass"], ["href", "/", 1, "navbar-brand"], [1, "logo-text"], ["src", "assets/images/logo.png", "alt", "homepage", 1, "dark-logo", 2, "height", "100px"], ["href", "javascript:void(0)", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", 1, "topbartoggler", "d-block", "d-lg-none", "waves-effect", "waves-light", 3, "click"], [1, "ti-more"], ["id", "navbarSupportedContent", 1, "navbar-collapse", "collapse", 3, "ngbCollapse"], ["class", "w-100", 4, "ngIf", "ngIfElse"], ["vheader", ""], [1, "w-100"]],
  template: function MktHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "nav", 1)(2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MktHeaderComponent_Template_a_click_3_listener() {
        return ctx.handleToggleSidebarInMobile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5)(6, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MktHeaderComponent_Template_a_click_8_listener() {
        return ctx.isCollapsed = !ctx.isCollapsed;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MktHeaderComponent_div_11_Template, 2, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MktHeaderComponent_ng_template_12_Template, 2, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-navbarbg", ctx.options.navbarbg);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.options.navbarbg == "skin6" ? "navbar-light" : "navbar-dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.expandLogo ? "expand-logo" : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-logobg", ctx.options.logobg);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showMobileMenu ? "ti-close" : "ti-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", !ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-navbarbg", ctx.options.navbarbg);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.layout === "horizontal")("ngIfElse", _r1);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCollapse, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: [".max-width[_ngcontent-%COMP%]{max-width:1440px;margin:0 auto}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MktHeaderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mkt-header',
      template: "<header class=\"topbar\" [attr.data-navbarbg]=\"options.navbarbg\">\r\n  <nav\r\n    class=\"d-flex top-navbar navbar-expand-lg\"\r\n    [ngClass]=\"options.navbarbg == 'skin6' ? 'navbar-light' : 'navbar-dark'\"\r\n  >\r\n    <div\r\n      class=\"navbar-header\"\r\n      style=\"background-color: #ff0235\"\r\n      [ngClass]=\"expandLogo ? 'expand-logo' : ''\"\r\n      [attr.data-logobg]=\"options.logobg\"\r\n    >\r\n      <!-- This is for the sidebar toggle which is visible on mobile only -->\r\n      <a\r\n        (click)=\"handleToggleSidebarInMobile()\"\r\n        class=\"nav-toggler waves-effect waves-light d-block d-lg-none\"\r\n        href=\"javascript:void(0)\"\r\n      >\r\n        <i [ngClass]=\"showMobileMenu ? 'ti-close' : 'ti-menu'\"></i>\r\n      </a>\r\n      <!-- ============================================================== -->\r\n      <!-- Logo -->\r\n      <!-- ============================================================== -->\r\n      <a class=\"navbar-brand\" href=\"/\">\r\n        <!-- Logo text -->\r\n        <span class=\"logo-text\">\r\n          <!-- dark Logo text -->\r\n          <img\r\n            src=\"assets/images/logo.png\"\r\n            style=\"height: 100px\"\r\n            alt=\"homepage\"\r\n            class=\"dark-logo\"\r\n          />\r\n          <!-- Light Logo text -->\r\n          <!-- <img\r\n            src=\"assets/images/logos/xtreme-white-text.svg\"\r\n            class=\"light-logo\"\r\n            alt=\"homepage\"\r\n          /> -->\r\n        </span>\r\n      </a>\r\n      <!-- ============================================================== -->\r\n      <!-- End Logo -->\r\n      <!-- ============================================================== -->\r\n      <!-- ============================================================== -->\r\n      <!-- Toggle which is visible on mobile only -->\r\n      <!-- ============================================================== -->\r\n      <a\r\n        class=\"topbartoggler d-block d-lg-none waves-effect waves-light\"\r\n        href=\"javascript:void(0)\"\r\n        (click)=\"isCollapsed = !isCollapsed\"\r\n        [attr.aria-expanded]=\"!isCollapsed\"\r\n        data-target=\"#navbarSupportedContent\"\r\n        aria-controls=\"navbarSupportedContent\"\r\n      >\r\n        <i class=\"ti-more\"></i>\r\n      </a>\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- End Logo -->\r\n    <!-- ============================================================== -->\r\n    <div\r\n      class=\"navbar-collapse collapse\"\r\n      id=\"navbarSupportedContent\"\r\n      [attr.data-navbarbg]=\"options.navbarbg\"\r\n      [ngbCollapse]=\"!isCollapsed\"\r\n    >\r\n      <!-- Horizontal Header -->\r\n      <div *ngIf=\"options.layout === 'horizontal'; else vheader\" class=\"w-100\">\r\n        <ng-content select=\"[id=horizontal-nav]\"></ng-content>\r\n        <!-- <app-horizontal-navigation\r\n          class=\"w-100 d-flex align-items-center justify-content-between\"\r\n        >\r\n        </app-horizontal-navigation> -->\r\n      </div>\r\n\r\n      <!-- Vertical Header -->\r\n      <ng-template #vheader>\r\n        <div class=\"w-100\">\r\n          <ng-content select=\"[id=vertical-nav]\"></ng-content>\r\n          <!-- <mkt-vertical-navigation (toggleSidebar)=\"toggleSidebarType()\" [notifications]=\"notifications\"\r\n            [messages]=\"messages\">\r\n          </mkt-vertical-navigation> -->\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </nav>\r\n</header>\r\n",
      styles: [".max-width{max-width:1440px;margin:0 auto}\n"]
    }]
  }], null, {
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    handleShowMobileMenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class MktHeaderModule {}

MktHeaderModule.ɵfac = function MktHeaderModule_Factory(t) {
  return new (t || MktHeaderModule)();
};

MktHeaderModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MktHeaderModule
});
MktHeaderModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MktHeaderModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [MktHeaderComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherModule, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModule],
      exports: [MktHeaderComponent]
    }]
  }], null, null);
})();

class MktFooterComponent {
  constructor() {}

  ngOnInit() {}

}

MktFooterComponent.ɵfac = function MktFooterComponent_Factory(t) {
  return new (t || MktFooterComponent)();
};

MktFooterComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MktFooterComponent,
  selectors: [["mkt-footer"]],
  ngContentSelectors: _c2,
  decls: 2,
  vars: 0,
  consts: [[1, "footer", "text-center"]],
  template: function MktFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: [""]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MktFooterComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mkt-footer',
      template: "<footer class=\"footer text-center\"><ng-content></ng-content></footer>\r\n",
      styles: [""]
    }]
  }], function () {
    return [];
  }, null);
})();

class MktFooterModule {}

MktFooterModule.ɵfac = function MktFooterModule_Factory(t) {
  return new (t || MktFooterModule)();
};

MktFooterModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MktFooterModule
});
MktFooterModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MktFooterModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [MktFooterComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      exports: [MktFooterComponent]
    }]
  }], null, null);
})();

class MktSidenavComponent {
  constructor() {
    this.expandLogo = false;
  }

  ngOnInit() {}

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

}

MktSidenavComponent.ɵfac = function MktSidenavComponent_Factory(t) {
  return new (t || MktSidenavComponent)();
};

MktSidenavComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MktSidenavComponent,
  selectors: [["mkt-sidenav"]],
  inputs: {
    sidebarbg: "sidebarbg"
  },
  ngContentSelectors: _c2,
  decls: 2,
  vars: 1,
  consts: [[1, "left-sidebar", 3, "mouseover", "mouseout"]],
  template: function MktSidenavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function MktSidenavComponent_Template_aside_mouseover_0_listener() {
        return ctx.Logo();
      })("mouseout", function MktSidenavComponent_Template_aside_mouseout_0_listener() {
        return ctx.Logo();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-sidebarbg", ctx.sidebarbg);
    }
  },
  styles: [""]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MktSidenavComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mkt-sidenav',
      template: "<aside\r\n  class=\"left-sidebar\"\r\n  [attr.data-sidebarbg]=\"sidebarbg\"\r\n  (mouseover)=\"Logo()\"\r\n  (mouseout)=\"Logo()\"\r\n>\r\n  <ng-content></ng-content>\r\n</aside>\r\n",
      styles: [""]
    }]
  }], function () {
    return [];
  }, {
    sidebarbg: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class MktSidenavModule {}

MktSidenavModule.ɵfac = function MktSidenavModule_Factory(t) {
  return new (t || MktSidenavModule)();
};

MktSidenavModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MktSidenavModule
});
MktSidenavModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MktSidenavModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [MktSidenavComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      exports: [MktSidenavComponent]
    }]
  }], null, null);
})();

class MktDropdownComponent {
  constructor() {
    this.options = [];
    this.showFilter = false;
    this.checked = false;
    this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  ngOnInit() {}

  toggle(option) {
    this.onClick.emit(option);
  }

  isChecked() {
    this.checked = !this.checked;
  }

}

MktDropdownComponent.ɵfac = function MktDropdownComponent_Factory(t) {
  return new (t || MktDropdownComponent)();
};

MktDropdownComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MktDropdownComponent,
  selectors: [["mkt-dropdown"]],
  viewQuery: function MktDropdownComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.elRef = _t.first);
    }
  },
  inputs: {
    options: "options",
    name: "name",
    icon: "icon",
    showFilter: "showFilter"
  },
  outputs: {
    onClick: "onClick"
  },
  decls: 6,
  vars: 3,
  consts: [["ngbDropdown", "", 1, "d-flex"], ["id", "dropdown1", "ngbDropdownToggle", "", 1, "btn", "d-block", "w-100", "btn-outline-light", "text-dark", "waves-effect", "waves-light"], ["class", "icon-small", 3, "name", 4, "ngIf"], [4, "ngIf"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdown1", 1, "w-100", "dropdown-container"], ["class", "dropdown-element", 3, "click", 4, "ngFor", "ngForOf"], [1, "icon-small", 3, "name"], [1, "dropdown-element", 3, "click"], ["ngbDropdownItem", "", 1, "dropdown-item"]],
  template: function MktDropdownComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MktDropdownComponent_i_feather_2_Template, 1, 1, "i-feather", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MktDropdownComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MktDropdownComponent_div_5_Template, 3, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.icon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    }
  },
  directives: [angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownToggle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbDropdownItem],
  styles: [".dropdown-element[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;align-content:center;padding-left:5px}.dropdown-element[_ngcontent-%COMP%]:hover, .dropdown-element[_ngcontent-%COMP%]:focus{color:#1e2125;background-color:#e9ecef}.arrow-icon[_ngcontent-%COMP%]{position:absolute;right:10px;top:10px}.dropdown-container[_ngcontent-%COMP%]{min-width:200px}.dropdown-item[_ngcontent-%COMP%]{pointer-events:none}@media only screen and (min-device-width: 320px) and (max-device-width: 736px){.arrow-icon[_ngcontent-%COMP%]{display:none!important}}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MktDropdownComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: "mkt-dropdown",
      template: "<div ngbDropdown class=\"d-flex\">\r\n  <button\r\n    class=\"btn d-block w-100 btn-outline-light text-dark waves-effect waves-light\"\r\n    id=\"dropdown1\"\r\n    ngbDropdownToggle\r\n  >\r\n    <i-feather *ngIf=\"icon\" [name]=\"icon\" class=\"icon-small\"></i-feather>\r\n    <ng-container *ngIf=\"!icon\">{{ name }}</ng-container>\r\n  </button>\r\n  <div\r\n    ngbDropdownMenu\r\n    aria-labelledby=\"dropdown1\"\r\n    class=\"w-100 dropdown-container\"\r\n  >\r\n    <div\r\n      class=\"dropdown-element\"\r\n      *ngFor=\"let option of options\"\r\n      (click)=\"toggle(option)\"\r\n    >\r\n      <div ngbDropdownItem class=\"dropdown-item\">\r\n        {{ option }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
      styles: [".dropdown-element{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;align-content:center;padding-left:5px}.dropdown-element:hover,.dropdown-element:focus{color:#1e2125;background-color:#e9ecef}.arrow-icon{position:absolute;right:10px;top:10px}.dropdown-container{min-width:200px}.dropdown-item{pointer-events:none}@media only screen and (min-device-width: 320px) and (max-device-width: 736px){.arrow-icon{display:none!important}}\n"]
    }]
  }], function () {
    return [];
  }, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    icon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showFilter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    elRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ["checkbox", {
        static: false,
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
      }]
    }]
  });
})();

class MktDropdownModule {}

MktDropdownModule.ɵfac = function MktDropdownModule_Factory(t) {
  return new (t || MktDropdownModule)();
};

MktDropdownModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MktDropdownModule
});
MktDropdownModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModule, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MktDropdownModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [MktDropdownComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModule, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherModule],
      exports: [MktDropdownComponent]
    }]
  }], null, null);
})();

class MktTableComponent {
  constructor() {
    this.dataLength = 0;
    this.visibleColumns = [];
    this.showPagination = true;
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.itemsPerPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.columnChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pageSizeOptions = [{
      id: 5,
      value: "5 items per page"
    }, {
      id: 10,
      value: "10 items per page"
    }, {
      id: 25,
      value: "25 items per page"
    }, {
      id: 50,
      value: "50 items per page"
    }, {
      id: 100,
      value: "100 items per page"
    }, {
      id: 500,
      value: "500 items per page"
    }];
    this.page = 1;
    this.itemsPerPage = {
      id: 10,
      value: "10 items per page"
    };
    this.pageSize = 2;
  }

  onItemsPerPageChange(event) {
    this.itemsPerPageChange.emit(event);
  }

  onPageChange(event) {
    this.pageChange.emit(event);
  }

}

MktTableComponent.ɵfac = function MktTableComponent_Factory(t) {
  return new (t || MktTableComponent)();
};

MktTableComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MktTableComponent,
  selectors: [["mkt-table"]],
  inputs: {
    dataLength: "dataLength",
    columns: "columns",
    visibleColumns: "visibleColumns",
    title: "title",
    subtitle: "subtitle",
    showPagination: "showPagination",
    itemsPerPage: "itemsPerPage"
  },
  outputs: {
    pageChange: "pageChange",
    itemsPerPageChange: "itemsPerPageChange",
    columnChange: "columnChange"
  },
  ngContentSelectors: _c2,
  decls: 8,
  vars: 4,
  consts: [[1, "row"], ["class", "card-title mb-0", 4, "ngIf"], ["class", "card-subtitle", 4, "ngIf"], [1, "table-responsive"], ["id", "data-table", 1, "table", "table-striped", "border", "material"], ["class", "d-flex justify-content-center p-2", 4, "ngIf"], [1, "card-title", "mb-0"], [1, "lstick"], [1, "card-subtitle"], [1, "d-flex", "justify-content-center", "p-2"], [3, "collectionSize", "page", "ellipses", "pageSize", "maxSize", "boundaryLinks", "pageChange"], [1, "form-select", "float-end", 2, "float", "right", "width", "auto", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"]],
  template: function MktTableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MktTableComponent_h4_1_Template, 3, 1, "h4", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MktTableComponent_span_2_Template, 2, 1, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "table", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MktTableComponent_div_6_Template, 2, 6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MktTableComponent_div_7_Template, 3, 2, "div", 5);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.subtitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPagination);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPagination);
    }
  },
  directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbPagination, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"]],
  styles: [".material[_ngcontent-%COMP%]{background-color:unset!important}"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MktTableComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: "mkt-table",
      template: "<div class=\"row\">\r\n  <h4 class=\"card-title mb-0\" *ngIf=\"title\">\r\n    <span class=\"lstick\"></span>{{ title }}\r\n  </h4>\r\n  <span class=\"card-subtitle\" *ngIf=\"subtitle\">{{ subtitle }}</span>\r\n</div>\r\n<div class=\"table-responsive\">\r\n  <table class=\"table table-striped border material\" id=\"data-table\">\r\n    <ng-content></ng-content>\r\n  </table>\r\n</div>\r\n<div class=\"d-flex justify-content-center p-2\" *ngIf=\"showPagination\">\r\n  <ngb-pagination\r\n    [collectionSize]=\"dataLength\"\r\n    [(page)]=\"page\"\r\n    [ellipses]=\"true\"\r\n    [pageSize]=\"pageSize\"\r\n    [maxSize]=\"5\"\r\n    [boundaryLinks]=\"true\"\r\n    (pageChange)=\"onPageChange($event)\"\r\n  >\r\n  </ngb-pagination>\r\n</div>\r\n<div class=\"d-flex justify-content-center p-2\" *ngIf=\"showPagination\">\r\n  <select\r\n    class=\"form-select float-end\"\r\n    style=\"float: right; width: auto\"\r\n    [ngModel]=\"itemsPerPage\"\r\n    (ngModelChange)=\"onItemsPerPageChange($event)\"\r\n  >\r\n    <option\r\n      *ngFor=\"let pageSizeOption of pageSizeOptions\"\r\n      [ngValue]=\"pageSizeOption.id\"\r\n    >\r\n      {{ pageSizeOption.value }}\r\n    </option>\r\n  </select>\r\n</div>\r\n",
      styles: [".material{background-color:unset!important}\n"]
    }]
  }], function () {
    return [];
  }, {
    dataLength: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    visibleColumns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    title: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    subtitle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    showPagination: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    itemsPerPageChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    columnChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    itemsPerPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class MktTableModule {}

MktTableModule.ɵfac = function MktTableModule_Factory(t) {
  return new (t || MktTableModule)();
};

MktTableModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MktTableModule
});
MktTableModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, MktDropdownModule, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MktTableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [MktTableComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, MktDropdownModule, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModule],
      exports: [MktTableComponent]
    }]
  }], null, null);
})();

class MktCardComponent {
  constructor() {
    this.onCardClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  ngOnInit() {}

  onCardClick($event) {
    this.onCardClicked.emit(this.cardConfiguration);
  }

}

MktCardComponent.ɵfac = function MktCardComponent_Factory(t) {
  return new (t || MktCardComponent)();
};

MktCardComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MktCardComponent,
  selectors: [["mkt-card"]],
  inputs: {
    cardConfiguration: "cardConfiguration"
  },
  outputs: {
    onCardClicked: "onCardClicked"
  },
  decls: 14,
  vars: 7,
  consts: [[1, "card-body", 3, "click"], [1, "d-flex", "flex-row", "align-items-center", "mb-3"], [2, "padding-bottom", "10px", "padding-right", "5px"], [1, "feather-lg", "fill-white", 3, "name"], [1, "card-title", "pl-3", "font-medium"], ["name", "alarm", 1, "alert-triangule", "fill-white"], [1, "row", "text-left"], [1, "card-subtitle", "text-white"], [1, "row", "text-center", "text-white", "m-2", 2, "border", "1px solid whitesmoke", "-webkit-background-clip", "padding-box", "/* for safari */\n        background-clip", "padding-box", "border-radius", "2px", "padding", "5px"], ["class", "col-12 text-center text-uppercase font-weight-bold d-flex flex-row", 4, "ngFor", "ngForOf"], [1, "col-12", "text-center", "text-uppercase", "font-weight-bold", "d-flex", "flex-row"], [1, "fs-3", "flex-row", "flex-grow-3", "text-center", "op-5"], [1, "fs-3", "flex-row", "text-center"]],
  template: function MktCardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MktCardComponent_Template_div_click_1_listener($event) {
        return ctx.onCardClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i-feather", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i-feather", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "h6", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MktCardComponent_div_13_Template, 5, 2, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("card text-white bg-", ctx.cardConfiguration == null ? null : ctx.cardConfiguration.cardType, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx.cardConfiguration == null ? null : ctx.cardConfiguration.iconType);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cardConfiguration == null ? null : ctx.cardConfiguration.title, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cardConfiguration == null ? null : ctx.cardConfiguration.subtitle, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardConfiguration.text);
    }
  },
  directives: [angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: [""]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MktCardComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mkt-card',
      template: "<div class=\"card text-white bg-{{ cardConfiguration?.cardType }}\">\r\n  <div class=\"card-body\" (click)=\"onCardClick($event)\">\r\n    <div class=\"d-flex flex-row align-items-center mb-3\">\r\n      <span style=\"padding-bottom: 10px; padding-right: 5px\">\r\n        <i-feather\r\n          [name]=\"cardConfiguration?.iconType\"\r\n          class=\"feather-lg fill-white\"\r\n        ></i-feather>\r\n      </span>\r\n      <h3 class=\"card-title pl-3 font-medium\">\r\n        {{ cardConfiguration?.title }}\r\n      </h3>\r\n      <span style=\"padding-bottom: 10px; padding-right: 5px\">\r\n        <i-feather name=\"alarm\" class=\"alert-triangule fill-white\"></i-feather>\r\n      </span>\r\n    </div>\r\n    <div class=\"row text-left\">\r\n      <h6 class=\"card-subtitle text-white\">\r\n        {{ cardConfiguration?.subtitle }}\r\n      </h6>\r\n    </div>\r\n    <div\r\n      class=\"row text-center text-white m-2\"\r\n      style=\"\r\n        border: 1px solid whitesmoke;\r\n        -webkit-background-clip: padding-box; /* for Safari */\r\n        background-clip: padding-box;\r\n        border-radius: 2px;\r\n        padding: 5px;\r\n      \"\r\n    >\r\n      <div\r\n        *ngFor=\"let item of cardConfiguration.text\"\r\n        class=\"col-12 text-center text-uppercase font-weight-bold d-flex flex-row\"\r\n      >\r\n        <span class=\"fs-3 flex-row flex-grow-3 text-center op-5\">\r\n          {{ item.split(\":\")[0] + \":\" }}\r\n        </span>\r\n        <span class=\"fs-3 flex-row text-center\">\r\n          {{ item.split(\":\")[1] }}\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
      styles: [""]
    }]
  }], function () {
    return [];
  }, {
    cardConfiguration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onCardClicked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

class MktCardModule {}

MktCardModule.ɵfac = function MktCardModule_Factory(t) {
  return new (t || MktCardModule)();
};

MktCardModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MktCardModule
});
MktCardModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MktCardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [MktCardComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherModule],
      exports: [MktCardComponent]
    }]
  }], null, null);
})();

var MktToastType;

(function (MktToastType) {
  MktToastType[MktToastType["success"] = 0] = "success";
  MktToastType[MktToastType["error"] = 1] = "error";
  MktToastType[MktToastType["warning"] = 2] = "warning";
  MktToastType[MktToastType["info"] = 3] = "info";
})(MktToastType || (MktToastType = {}));

class MktToastService {
  constructor() {
    this.toasts = [];
  }

  show(textOrTpl, type = MktToastType.success) {
    this.toasts.push(Object.assign({
      textOrTpl
    }, {
      classname: this.getMktToastType(type),
      delay: 3000
    }));
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }

  getMktToastType(type) {
    switch (type) {
      case MktToastType.success:
        return "bg-success text-light";

      case MktToastType.error:
        return "bg-danger text-light";

      case MktToastType.warning:
        return "bg-warning text-light";

      case MktToastType.info:
        return "bg-info text-light";
    }
  }

}

MktToastService.ɵfac = function MktToastService_Factory(t) {
  return new (t || MktToastService)();
};

MktToastService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MktToastService,
  factory: MktToastService.ɵfac,
  providedIn: "root"
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MktToastService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

class MktToastsContainer {
  constructor(toastService) {
    this.toastService = toastService;
  }

  isTemplate(toast) {
    return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef;
  }

}

MktToastsContainer.ɵfac = function MktToastsContainer_Factory(t) {
  return new (t || MktToastsContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MktToastService));
};

MktToastsContainer.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MktToastsContainer,
  selectors: [["mkt-toasts"]],
  hostAttrs: [1, "toast-container", "position-fixed", "top-0", "end-0", "p-3", 2, "z-index", "1200"],
  decls: 1,
  vars: 1,
  consts: [[3, "class", "autohide", "delay", "hidden", 4, "ngFor", "ngForOf"], [3, "autohide", "delay", "hidden"], [3, "ngIf", "ngIfElse"], ["text", ""], [3, "ngTemplateOutlet"]],
  template: function MktToastsContainer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MktToastsContainer_ngb_toast_0_Template, 4, 6, "ngb-toast", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toastService.toasts);
    }
  },
  directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbToast, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MktToastsContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: "mkt-toasts",
      template: `
    <ngb-toast
      *ngFor="let toast of toastService.toasts"
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 3000"
      (hidden)="toastService.remove(toast)"
    >
      <ng-template [ngIf]="isTemplate(toast)" [ngIfElse]="text">
        <ng-template [ngTemplateOutlet]="toast.textOrTpl"></ng-template>
      </ng-template>

      <ng-template #text>{{ toast.textOrTpl }}</ng-template>
    </ngb-toast>
  `,
      host: {
        class: "toast-container position-fixed top-0 end-0 p-3",
        style: "z-index: 1200"
      }
    }]
  }], function () {
    return [{
      type: MktToastService
    }];
  }, null);
})();

class MktToastModule {}

MktToastModule.ɵfac = function MktToastModule_Factory(t) {
  return new (t || MktToastModule)();
};

MktToastModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MktToastModule
});
MktToastModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MktToastModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [MktToastsContainer],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModule],
      exports: [MktToastsContainer]
    }]
  }], null, null);
})();

class MktDynamicComponent {
  constructor() {}

  ngOnInit() {
    this.componentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.ComponentPortal(this.component);
  }

}

MktDynamicComponent.ɵfac = function MktDynamicComponent_Factory(t) {
  return new (t || MktDynamicComponent)();
};

MktDynamicComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MktDynamicComponent,
  selectors: [["mkt-dynamic"]],
  inputs: {
    component: "component"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "cdkPortalOutlet"]],
  template: function MktDynamicComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MktDynamicComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx.componentPortal);
    }
  },
  directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.CdkPortalOutlet],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MktDynamicComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: "mkt-dynamic",
      template: "<ng-template [cdkPortalOutlet]=\"componentPortal\"></ng-template>\n"
    }]
  }], function () {
    return [];
  }, {
    component: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class MktDynamicModule {}

MktDynamicModule.ɵfac = function MktDynamicModule_Factory(t) {
  return new (t || MktDynamicModule)();
};

MktDynamicModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MktDynamicModule
});
MktDynamicModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.PortalModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MktDynamicModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [MktDynamicComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__.PortalModule],
      exports: [MktDynamicComponent]
    }]
  }], null, null);
})();
/*
 * Public API Surface of marlin-cdk
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map