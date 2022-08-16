"use strict";
(self["webpackChunkxtreme_admin_angular"] = self["webpackChunkxtreme_admin_angular"] || []).push([["src_app_starter_starter_module_ts"],{

/***/ 3947:
/*!*******************************************************!*\
  !*** ./src/app/starter/components/nivel.directive.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NivelDirective": () => (/* binding */ NivelDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8259);


class NivelDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        this.setLevel();
    }
    ngOnChanges(changes) {
        if (changes.value) {
            this.setLevel();
        }
    }
    setLevel() {
        this.el.nativeElement.style.fontWeight = 800;
        if (this.value.value < this.value.min) {
            this.el.nativeElement.parentNode.style.color = "blue";
        }
        else if (this.value.value > this.value.max) {
            //this.el.nativeElement.innerText = "Alto";
            this.el.nativeElement.parentNode.style.color = "red";
        }
        else {
            //this.el.nativeElement.innerText = "Medio";
            this.el.nativeElement.parentNode.style.color = "grey";
        }
    }
}
NivelDirective.ɵfac = function NivelDirective_Factory(t) { return new (t || NivelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
NivelDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NivelDirective, selectors: [["", "nivel", ""]], inputs: { value: ["nivel", "value"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 5640:
/*!*******************************************************!*\
  !*** ./src/app/starter/components/trend.directive.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrendDirective": () => (/* binding */ TrendDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 8259);


class TrendDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        this.setTrend();
    }
    ngOnChanges(changes) {
        if (changes.value) {
            this.setTrend();
        }
    }
    setTrend() {
        console.log(this.value);
        const { currentValue, prevValue } = this.value;
        if (prevValue) {
            if (currentValue < prevValue) {
                this.el.nativeElement.innerHTML = `<i class="fas fa-arrow-down"></i>`;
            }
            else if (currentValue > prevValue) {
                this.el.nativeElement.innerHTML = `<i class="fas fa-arrow-up"></i>`;
            }
            else {
                this.el.nativeElement.innerHTML = `<i class="fas fa-arrow-right"></i>`;
            }
            this.el.nativeElement.innerHTML += ` ${prevValue}`;
        }
        else {
            this.el.nativeElement.innerHTML = " - ";
        }
    }
}
TrendDirective.ɵfac = function TrendDirective_Factory(t) { return new (t || TrendDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
TrendDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TrendDirective, selectors: [["", "trend", ""]], inputs: { value: ["trend", "value"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 2641:
/*!**********************************************!*\
  !*** ./src/app/starter/starter.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StarterComponent": () => (/* binding */ StarterComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 8259);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3690);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3903);
/* harmony import */ var marlin_cdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! marlin-cdk */ 6486);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8750);
/* harmony import */ var _components_nivel_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/nivel.directive */ 3947);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9109);
/* harmony import */ var _components_trend_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/trend.directive */ 5640);












const _c0 = function () { return ["/starter/line-chart", "leucocitos"]; };
const _c1 = function (a0, a1, a2) { return { value: a0, min: a1, max: a2 }; };
const _c2 = function (a0, a1) { return { currentValue: a0, prevValue: a1 }; };
const _c3 = function () { return ["/starter/line-chart", "neu"]; };
const _c4 = function () { return ["/starter/line-chart", "lym"]; };
const _c5 = function () { return ["/starter/line-chart", "mono"]; };
const _c6 = function () { return ["/starter/line-chart", "eos"]; };
const _c7 = function () { return ["/starter/line-chart", "baso"]; };
const _c8 = function () { return ["/starter/line-chart", "plq"]; };
const _c9 = function () { return ["/starter/line-chart", "mpv"]; };
const _c10 = function () { return ["/starter/line-chart", "pdw"]; };
const _c11 = function () { return ["/starter/line-chart", "pct"]; };
const _c12 = function () { return ["/starter/line-chart", "eritrocitos"]; };
const _c13 = function () { return ["/starter/line-chart", "hct"]; };
const _c14 = function () { return ["/starter/line-chart", "hgb"]; };
const _c15 = function () { return ["/starter/line-chart", "mcv"]; };
const _c16 = function () { return ["/starter/line-chart", "mch"]; };
const _c17 = function () { return ["/starter/line-chart", "mchc"]; };
const _c18 = function () { return ["/starter/line-chart", "rdw"]; };
const _c19 = function () { return ["/starter/line-chart", "retic"]; };
const _c20 = function () { return ["/starter/line-chart", "ret_he"]; };
function StarterComponent_div_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12)(2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Prueba");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Resultados");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Rango referencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Nivel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Tendencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 14)(13, "div", 13)(14, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Leucocitos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 16)(21, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "ngb-progressbar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 14)(25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "%NEU");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "div", 13)(30, "div", 13)(31, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 14)(33, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "%LYM");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "div", 13)(38, "div", 13)(39, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 14)(41, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "%MONO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "div", 13)(46, "div", 13)(47, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 14)(49, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "%EOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "div", 13)(54, "div", 13)(55, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 14)(57, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "%BASO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "div", 13)(62, "div", 13)(63, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 14)(65, "div", 13)(66, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Neu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 20)(73, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "ngb-progressbar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 14)(77, "div", 13)(78, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Lym ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 20)(85, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "ngb-progressbar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 14)(89, "div", 13)(90, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Mono ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 20)(97, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "ngb-progressbar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 14)(101, "div", 13)(102, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Eos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 20)(109, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "ngb-progressbar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 14)(113, "div", 13)(114, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "BASO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 20)(121, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](122, "ngb-progressbar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](123, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 14)(125, "div", 13)(126, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "PLQ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 20)(133, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](134, "ngb-progressbar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 14)(137, "div", 13)(138, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "MPV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 20)(145, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](146, "ngb-progressbar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](147, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 14)(149, "div", 13)(150, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "PDW ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 20)(157, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](158, "ngb-progressbar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](159, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 14)(161, "div", 13)(162, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, "PCT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 20)(169, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](170, "ngb-progressbar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](171, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "div", 14)(173, "div", 13)(174, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "Eritrocitos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "div", 20)(181, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](182, "ngb-progressbar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](183, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div", 14)(185, "div", 13)(186, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, "HCT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 20)(193, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](194, "ngb-progressbar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](195, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "div", 14)(197, "div", 13)(198, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, "HGB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](203);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "div", 20)(205, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](206, "ngb-progressbar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](207, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "div", 14)(209, "div", 13)(210, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](211, "MCV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "div", 20)(217, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](218, "ngb-progressbar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](219, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "div", 14)(221, "div", 13)(222, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](223, "MCH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](225);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](227);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "div", 20)(229, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](230, "ngb-progressbar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](231, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "div", 14)(233, "div", 13)(234, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](235, "MCHC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](236, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](237);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](239);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](240, "div", 20)(241, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](242, "ngb-progressbar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](243, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "div", 14)(245, "div", 13)(246, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](247, "RDW ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](249);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "div", 20)(253, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](254, "ngb-progressbar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](255, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "div", 14)(257, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](258, "%RETIC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](260);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](261, "div", 13)(262, "div", 13)(263, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "div", 14)(265, "div", 13)(266, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](267, "RETIC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](269);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](270, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](271);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](272, "div", 20)(273, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](274, "ngb-progressbar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](275, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](276, "div", 14)(277, "div", 13)(278, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](279, "RET HE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](281);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](283);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](284, "div", 20)(285, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](286, "ngb-progressbar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](287, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const currentData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](221, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.leucocitos == null ? null : currentData_r1.data.leucocitos.value, " ", currentData_r1.data == null ? null : currentData_r1.data.leucocitos == null ? null : currentData_r1.data.leucocitos.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.leucocitos.min, " - ", ctx_r2.valorReferencial.leucocitos.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](222, _c1, currentData_r1.data == null ? null : currentData_r1.data.lym == null ? null : currentData_r1.data.lym.value, ctx_r2.valorReferencial.lym.min, ctx_r2.valorReferencial.lym.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](226, _c1, currentData_r1.data == null ? null : currentData_r1.data.leucocitos == null ? null : currentData_r1.data.leucocitos.value, ctx_r2.valorReferencial.leucocitos.min, ctx_r2.valorReferencial.leucocitos.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.leucocitos == null ? null : currentData_r1.data.leucocitos.value)("max", ctx_r2.valorReferencial.leucocitos.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](230, _c2, currentData_r1.data == null ? null : currentData_r1.data.leucocitos == null ? null : currentData_r1.data.leucocitos.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.leucocitos == null ? null : currentData_r1.prevData.leucocitos.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.neu_pct == null ? null : currentData_r1.data.neu_pct.value, " ", currentData_r1.data == null ? null : currentData_r1.data.neu_pct == null ? null : currentData_r1.data.neu_pct.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.lym_pct == null ? null : currentData_r1.data.lym_pct.value, " ", currentData_r1.data == null ? null : currentData_r1.data.lym_pct == null ? null : currentData_r1.data.lym_pct.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.mon_pct == null ? null : currentData_r1.data.mon_pct.value, " ", currentData_r1.data == null ? null : currentData_r1.data.mon_pct == null ? null : currentData_r1.data.mon_pct.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.eos_pct == null ? null : currentData_r1.data.eos_pct.value, " ", currentData_r1.data == null ? null : currentData_r1.data.eos_pct == null ? null : currentData_r1.data.eos_pct.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.baso_pct == null ? null : currentData_r1.data.baso_pct.value, " ", currentData_r1.data == null ? null : currentData_r1.data.baso_pct == null ? null : currentData_r1.data.baso_pct.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](233, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.neu == null ? null : currentData_r1.data.neu.value, " ", currentData_r1.data == null ? null : currentData_r1.data.neu == null ? null : currentData_r1.data.neu.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.neu.min, " - ", ctx_r2.valorReferencial.neu.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](234, _c1, currentData_r1.data == null ? null : currentData_r1.data.neu == null ? null : currentData_r1.data.neu.value, ctx_r2.valorReferencial.neu.min, ctx_r2.valorReferencial.neu.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](238, _c1, currentData_r1.data == null ? null : currentData_r1.data.neu == null ? null : currentData_r1.data.neu.value, ctx_r2.valorReferencial.neu.min, ctx_r2.valorReferencial.neu.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.neu == null ? null : currentData_r1.data.neu.value)("max", ctx_r2.valorReferencial.neu.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](242, _c2, currentData_r1.data == null ? null : currentData_r1.data.neu == null ? null : currentData_r1.data.neu.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.neu == null ? null : currentData_r1.prevData.neu.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](245, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.lym == null ? null : currentData_r1.data.lym.value, " ", currentData_r1.data == null ? null : currentData_r1.data.lym == null ? null : currentData_r1.data.lym.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.lym.min, " - ", ctx_r2.valorReferencial.lym.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](246, _c1, currentData_r1.data == null ? null : currentData_r1.data.lym == null ? null : currentData_r1.data.lym.value, ctx_r2.valorReferencial.lym.min, ctx_r2.valorReferencial.lym.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](250, _c1, currentData_r1.data == null ? null : currentData_r1.data.lym == null ? null : currentData_r1.data.lym.value, ctx_r2.valorReferencial.lym.min, ctx_r2.valorReferencial.lym.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.lym == null ? null : currentData_r1.data.lym.value)("max", ctx_r2.valorReferencial.lym.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](254, _c2, currentData_r1.data == null ? null : currentData_r1.data.lym == null ? null : currentData_r1.data.lym.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.lym == null ? null : currentData_r1.prevData.lym.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](257, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.mono == null ? null : currentData_r1.data.mono.value, " ", currentData_r1.data == null ? null : currentData_r1.data.mono == null ? null : currentData_r1.data.mono.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.mono.min, " - ", ctx_r2.valorReferencial.mono.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](258, _c1, currentData_r1.data == null ? null : currentData_r1.data.mono == null ? null : currentData_r1.data.mono.value, ctx_r2.valorReferencial.mono.min, ctx_r2.valorReferencial.mono.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](262, _c1, currentData_r1.data == null ? null : currentData_r1.data.mono == null ? null : currentData_r1.data.mono.value, ctx_r2.valorReferencial.mono.min, ctx_r2.valorReferencial.mono.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.mono == null ? null : currentData_r1.data.mono.value)("max", ctx_r2.valorReferencial.mono.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](266, _c2, currentData_r1.data == null ? null : currentData_r1.data.mono == null ? null : currentData_r1.data.mono.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.mono == null ? null : currentData_r1.prevData.mono.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](269, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.eos == null ? null : currentData_r1.data.eos.value, " ", currentData_r1.data == null ? null : currentData_r1.data.eos == null ? null : currentData_r1.data.eos.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.eos.min, " - ", ctx_r2.valorReferencial.eos.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](270, _c1, currentData_r1.data == null ? null : currentData_r1.data.eos == null ? null : currentData_r1.data.eos.value, ctx_r2.valorReferencial.eos.min, ctx_r2.valorReferencial.eos.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](274, _c1, currentData_r1.data == null ? null : currentData_r1.data.eos == null ? null : currentData_r1.data.eos.value, ctx_r2.valorReferencial.eos.min, ctx_r2.valorReferencial.eos.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.eos == null ? null : currentData_r1.data.eos.value)("max", ctx_r2.valorReferencial.eos.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](278, _c2, currentData_r1.data == null ? null : currentData_r1.data.eos == null ? null : currentData_r1.data.eos.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.eos == null ? null : currentData_r1.prevData.eos.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](281, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.baso == null ? null : currentData_r1.data.baso.value, " ", currentData_r1.data == null ? null : currentData_r1.data.baso == null ? null : currentData_r1.data.baso.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.baso.min, " - ", ctx_r2.valorReferencial.baso.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](282, _c1, currentData_r1.data == null ? null : currentData_r1.data.baso == null ? null : currentData_r1.data.baso.value, ctx_r2.valorReferencial.baso.min, ctx_r2.valorReferencial.baso.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](286, _c1, currentData_r1.data == null ? null : currentData_r1.data.baso == null ? null : currentData_r1.data.baso.value, ctx_r2.valorReferencial.baso.min, ctx_r2.valorReferencial.baso.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.baso == null ? null : currentData_r1.data.baso.value)("max", ctx_r2.valorReferencial.baso.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](290, _c2, currentData_r1.data == null ? null : currentData_r1.data.baso == null ? null : currentData_r1.data.baso.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.baso == null ? null : currentData_r1.prevData.baso.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](293, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.plq == null ? null : currentData_r1.data.plq.value, " ", currentData_r1.data == null ? null : currentData_r1.data.plq == null ? null : currentData_r1.data.plq.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.plq.min, " - ", ctx_r2.valorReferencial.plq.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](294, _c1, currentData_r1.data == null ? null : currentData_r1.data.plq == null ? null : currentData_r1.data.plq.value, ctx_r2.valorReferencial.plq.min, ctx_r2.valorReferencial.plq.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](298, _c1, currentData_r1.data == null ? null : currentData_r1.data.plq == null ? null : currentData_r1.data.plq.value, ctx_r2.valorReferencial.plq.min, ctx_r2.valorReferencial.plq.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.plq == null ? null : currentData_r1.data.plq.value)("max", ctx_r2.valorReferencial.plq.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](302, _c2, currentData_r1.data == null ? null : currentData_r1.data.plq == null ? null : currentData_r1.data.plq.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.plq == null ? null : currentData_r1.prevData.plq.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](305, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.mpv == null ? null : currentData_r1.data.mpv.value, " ", currentData_r1.data == null ? null : currentData_r1.data.mpv == null ? null : currentData_r1.data.mpv.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.mpv.min, " - ", ctx_r2.valorReferencial.mpv.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](306, _c1, currentData_r1.data == null ? null : currentData_r1.data.mpv == null ? null : currentData_r1.data.mpv.value, ctx_r2.valorReferencial.mpv.min, ctx_r2.valorReferencial.mpv.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](310, _c1, currentData_r1.data == null ? null : currentData_r1.data.mpv == null ? null : currentData_r1.data.mpv.value, ctx_r2.valorReferencial.mpv.min, ctx_r2.valorReferencial.mpv.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.mpv == null ? null : currentData_r1.data.mpv.value)("max", ctx_r2.valorReferencial.mpv.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](314, _c2, currentData_r1.data == null ? null : currentData_r1.data.mpv == null ? null : currentData_r1.data.mpv.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.mpv == null ? null : currentData_r1.prevData.mpv.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](317, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.pdw == null ? null : currentData_r1.data.pdw.value, " ", currentData_r1.data == null ? null : currentData_r1.data.pdw == null ? null : currentData_r1.data.pdw.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.pdw.min, " - ", ctx_r2.valorReferencial.pdw.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](318, _c1, currentData_r1.data == null ? null : currentData_r1.data.pdw == null ? null : currentData_r1.data.pdw.value, ctx_r2.valorReferencial.pdw.min, ctx_r2.valorReferencial.pdw.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](322, _c1, currentData_r1.data == null ? null : currentData_r1.data.pdw == null ? null : currentData_r1.data.pdw.value, ctx_r2.valorReferencial.pdw.min, ctx_r2.valorReferencial.pdw.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.pdw == null ? null : currentData_r1.data.pdw.value)("max", ctx_r2.valorReferencial.pdw.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](326, _c2, currentData_r1.data == null ? null : currentData_r1.data.pdw == null ? null : currentData_r1.data.pdw.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.pdw == null ? null : currentData_r1.prevData.pdw.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](329, _c11));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.pct == null ? null : currentData_r1.data.pct.value, " ", currentData_r1.data == null ? null : currentData_r1.data.pct == null ? null : currentData_r1.data.pct.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.pct.min, " - ", ctx_r2.valorReferencial.pct.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](330, _c1, currentData_r1.data == null ? null : currentData_r1.data.pct == null ? null : currentData_r1.data.pct.value, ctx_r2.valorReferencial.pct.min, ctx_r2.valorReferencial.pct.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](334, _c1, currentData_r1.data == null ? null : currentData_r1.data.pct == null ? null : currentData_r1.data.pct.value, ctx_r2.valorReferencial.pct.min, ctx_r2.valorReferencial.pct.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.pct == null ? null : currentData_r1.data.pct.value)("max", ctx_r2.valorReferencial.pct.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](338, _c2, currentData_r1.data == null ? null : currentData_r1.data.pct == null ? null : currentData_r1.data.pct.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.pct == null ? null : currentData_r1.prevData.pct.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](341, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.eritrocitos == null ? null : currentData_r1.data.eritrocitos.value, " ", currentData_r1.data == null ? null : currentData_r1.data.eritrocitos == null ? null : currentData_r1.data.eritrocitos.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.eritrocitos.min, " - ", ctx_r2.valorReferencial.eritrocitos.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](342, _c1, currentData_r1.data == null ? null : currentData_r1.data.eritrocitos == null ? null : currentData_r1.data.eritrocitos.value, ctx_r2.valorReferencial.eritrocitos.min, ctx_r2.valorReferencial.eritrocitos.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](346, _c1, currentData_r1.data == null ? null : currentData_r1.data.eritrocitos == null ? null : currentData_r1.data.eritrocitos.value, ctx_r2.valorReferencial.eritrocitos.min, ctx_r2.valorReferencial.eritrocitos.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.eritrocitos == null ? null : currentData_r1.data.eritrocitos.value)("max", ctx_r2.valorReferencial.eritrocitos.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](350, _c2, currentData_r1.data == null ? null : currentData_r1.data.eritrocitos == null ? null : currentData_r1.data.eritrocitos.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.eritrocitos == null ? null : currentData_r1.prevData.eritrocitos.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](353, _c13));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.hct == null ? null : currentData_r1.data.hct.value, " ", currentData_r1.data == null ? null : currentData_r1.data.hct == null ? null : currentData_r1.data.hct.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.hct.min, " - ", ctx_r2.valorReferencial.hct.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](354, _c1, currentData_r1.data == null ? null : currentData_r1.data.hct == null ? null : currentData_r1.data.hct.value, ctx_r2.valorReferencial.hct.min, ctx_r2.valorReferencial.hct.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](358, _c1, currentData_r1.data == null ? null : currentData_r1.data.hct == null ? null : currentData_r1.data.hct.value, ctx_r2.valorReferencial.hct.min, ctx_r2.valorReferencial.hct.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.hct == null ? null : currentData_r1.data.hct.value)("max", ctx_r2.valorReferencial.hct.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](362, _c2, currentData_r1.data == null ? null : currentData_r1.data.hct == null ? null : currentData_r1.data.hct.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.hct == null ? null : currentData_r1.prevData.hct.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](365, _c14));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.hgb == null ? null : currentData_r1.data.hgb.value, " ", currentData_r1.data == null ? null : currentData_r1.data.hgb == null ? null : currentData_r1.data.hgb.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.hgb.min, " - ", ctx_r2.valorReferencial.hgb.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](366, _c1, currentData_r1.data == null ? null : currentData_r1.data.hgb == null ? null : currentData_r1.data.hgb.value, ctx_r2.valorReferencial.hgb.min, ctx_r2.valorReferencial.hgb.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](370, _c1, currentData_r1.data == null ? null : currentData_r1.data.hgb == null ? null : currentData_r1.data.hgb.value, ctx_r2.valorReferencial.hgb.min, ctx_r2.valorReferencial.hgb.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.hgb == null ? null : currentData_r1.data.hgb.value)("max", ctx_r2.valorReferencial.hgb.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](374, _c2, currentData_r1.data == null ? null : currentData_r1.data.hgb == null ? null : currentData_r1.data.hgb.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.hgb == null ? null : currentData_r1.prevData.hgb.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](377, _c15));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.mcv == null ? null : currentData_r1.data.mcv.value, " ", currentData_r1.data == null ? null : currentData_r1.data.mcv == null ? null : currentData_r1.data.mcv.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.mcv.min, " - ", ctx_r2.valorReferencial.mcv.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](378, _c1, currentData_r1.data == null ? null : currentData_r1.data.mcv == null ? null : currentData_r1.data.mcv.value, ctx_r2.valorReferencial.mcv.min, ctx_r2.valorReferencial.mcv.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](382, _c1, currentData_r1.data == null ? null : currentData_r1.data.mcv == null ? null : currentData_r1.data.mcv.value, ctx_r2.valorReferencial.mcv.min, ctx_r2.valorReferencial.mcv.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.mcv == null ? null : currentData_r1.data.mcv.value)("max", ctx_r2.valorReferencial.mcv.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](386, _c2, currentData_r1.data == null ? null : currentData_r1.data.mcv == null ? null : currentData_r1.data.mcv.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.mcv == null ? null : currentData_r1.prevData.mcv.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](389, _c16));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.mch == null ? null : currentData_r1.data.mch.value, " ", currentData_r1.data == null ? null : currentData_r1.data.mch == null ? null : currentData_r1.data.mch.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.mch.min, " - ", ctx_r2.valorReferencial.mch.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](390, _c1, currentData_r1.data == null ? null : currentData_r1.data.mch == null ? null : currentData_r1.data.mch.value, ctx_r2.valorReferencial.mch.min, ctx_r2.valorReferencial.mch.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](394, _c1, currentData_r1.data == null ? null : currentData_r1.data.mch == null ? null : currentData_r1.data.mch.value, ctx_r2.valorReferencial.mch.min, ctx_r2.valorReferencial.mch.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.mch == null ? null : currentData_r1.data.mch.value)("max", ctx_r2.valorReferencial.mch.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](398, _c2, currentData_r1.data == null ? null : currentData_r1.data.mch == null ? null : currentData_r1.data.mch.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.mch == null ? null : currentData_r1.prevData.mch.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](401, _c17));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.mchc == null ? null : currentData_r1.data.mchc.value, " ", currentData_r1.data == null ? null : currentData_r1.data.mchc == null ? null : currentData_r1.data.mchc.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.mchc.min, " - ", ctx_r2.valorReferencial.mchc.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](402, _c1, currentData_r1.data == null ? null : currentData_r1.data.mchc == null ? null : currentData_r1.data.mchc.value, ctx_r2.valorReferencial.mchc.min, ctx_r2.valorReferencial.mchc.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](406, _c1, currentData_r1.data == null ? null : currentData_r1.data.mchc == null ? null : currentData_r1.data.mchc.value, ctx_r2.valorReferencial.mchc.min, ctx_r2.valorReferencial.mchc.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.mchc == null ? null : currentData_r1.data.mchc.value)("max", ctx_r2.valorReferencial.mchc.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](410, _c2, currentData_r1.data == null ? null : currentData_r1.data.mchc == null ? null : currentData_r1.data.mchc.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.mchc == null ? null : currentData_r1.prevData.mchc.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](413, _c18));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.rdw == null ? null : currentData_r1.data.rdw.value, " ", currentData_r1.data == null ? null : currentData_r1.data.rdw == null ? null : currentData_r1.data.rdw.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.rdw.min, " - ", ctx_r2.valorReferencial.rdw.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](414, _c1, currentData_r1.data == null ? null : currentData_r1.data.rdw == null ? null : currentData_r1.data.rdw.value, ctx_r2.valorReferencial.rdw.min, ctx_r2.valorReferencial.rdw.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](418, _c1, currentData_r1.data == null ? null : currentData_r1.data.rdw == null ? null : currentData_r1.data.rdw.value, ctx_r2.valorReferencial.rdw.min, ctx_r2.valorReferencial.rdw.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.rdw == null ? null : currentData_r1.data.rdw.value)("max", ctx_r2.valorReferencial.rdw.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](422, _c2, currentData_r1.data == null ? null : currentData_r1.data.rdw == null ? null : currentData_r1.data.rdw.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.rdw == null ? null : currentData_r1.prevData.rdw.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.retic_pct == null ? null : currentData_r1.data.retic_pct.value, " ", currentData_r1.data == null ? null : currentData_r1.data.retic_pct == null ? null : currentData_r1.data.retic_pct.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](425, _c19));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.retic == null ? null : currentData_r1.data.retic.value, " ", currentData_r1.data == null ? null : currentData_r1.data.retic == null ? null : currentData_r1.data.retic.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.retic.min, " - ", ctx_r2.valorReferencial.retic.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](426, _c1, currentData_r1.data == null ? null : currentData_r1.data.retic == null ? null : currentData_r1.data.retic.value, ctx_r2.valorReferencial.retic.min, ctx_r2.valorReferencial.retic.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](430, _c1, currentData_r1.data == null ? null : currentData_r1.data.retic == null ? null : currentData_r1.data.retic.value, ctx_r2.valorReferencial.retic.min, ctx_r2.valorReferencial.retic.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.retic == null ? null : currentData_r1.data.retic.value)("max", ctx_r2.valorReferencial.retic.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](434, _c2, currentData_r1.data == null ? null : currentData_r1.data.retic == null ? null : currentData_r1.data.retic.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.retic == null ? null : currentData_r1.prevData.retic.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](437, _c20));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.ret_he == null ? null : currentData_r1.data.ret_he.value, " ", currentData_r1.data == null ? null : currentData_r1.data.ret_he == null ? null : currentData_r1.data.ret_he.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.ret_he.min, " - ", ctx_r2.valorReferencial.ret_he.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](438, _c1, currentData_r1.data == null ? null : currentData_r1.data.ret_he == null ? null : currentData_r1.data.ret_he.value, ctx_r2.valorReferencial.ret_he.min, ctx_r2.valorReferencial.ret_he.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showValue", true)("type", ctx_r2.getTypeOfLevel(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](442, _c1, currentData_r1.data == null ? null : currentData_r1.data.ret_he == null ? null : currentData_r1.data.ret_he.value, ctx_r2.valorReferencial.ret_he.min, ctx_r2.valorReferencial.ret_he.max)))("value", currentData_r1.data == null ? null : currentData_r1.data.ret_he == null ? null : currentData_r1.data.ret_he.value)("max", ctx_r2.valorReferencial.ret_he.max);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](446, _c2, currentData_r1.data == null ? null : currentData_r1.data.ret_he == null ? null : currentData_r1.data.ret_he.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.ret_he == null ? null : currentData_r1.prevData.ret_he.value));
} }
function StarterComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StarterComponent_div_14_ng_container_1_Template, 288, 449, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currentData_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", currentData_r1.data);
} }
class StarterComponent {
    constructor(http, cdRef, router) {
        this.http = http;
        this.cdRef = cdRef;
        this.router = router;
        this.loginDisplay = false;
        this.valorReferencial = {};
        this.currentReport = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({});
        this.fechas = [];
        this.data = {};
        this.http.get("assets/data/informe.json").subscribe((data) => {
            this.data = data;
            this.valorReferencial = data.rango_referencial;
            data === null || data === void 0 ? void 0 : data.items.forEach((currentItem, index) => {
                if (index === (data === null || data === void 0 ? void 0 : data.items.length) - 1) {
                    this.currentDate = currentItem.fecha;
                    const selectedData = {
                        data: currentItem.datos,
                        prevData: this.getPrevData(currentItem),
                    };
                    console.log(selectedData);
                    this.currentReport.next(selectedData);
                }
                this.fechas.push(currentItem.fecha);
            });
        });
    }
    ngOnInit() { }
    onSelectOption(event) {
        const filteredData = this.data.items.find((item) => item.fecha === event);
        const selectedData = {
            data: filteredData === null || filteredData === void 0 ? void 0 : filteredData.datos,
            prevData: this.getPrevData(filteredData),
        };
        console.log(selectedData);
        this.currentReport.next(selectedData);
        this.currentDate = event;
        this.cdRef.detectChanges();
    }
    getPrevData(currentData) {
        const indexPrev = this.data.items.indexOf(currentData) - 1;
        if (indexPrev >= 0) {
            const prevData = this.data.items[indexPrev];
            console.log("PrevData", prevData);
            return prevData === null || prevData === void 0 ? void 0 : prevData.datos;
        }
        return {};
    }
    getTypeOfLevel(values) {
        const { value, min, max } = values;
        if (value < min) {
            return "warning";
        }
        else if (value > max) {
            return "danger";
        }
        return "success";
    }
}
StarterComponent.ɵfac = function StarterComponent_Factory(t) { return new (t || StarterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
StarterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StarterComponent, selectors: [["ng-component"]], decls: 16, vars: 5, consts: [[1, "row", "pt-4"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row"], [1, "d-flex", "row"], [1, "col-2", "text-start"], ["name", "Fechas de informes", "icon", "calendar", 3, "options", "onClick"], [1, "col-10", "text-end"], ["class", "row card", 4, "ngIf"], [1, "row", "card"], [4, "ngIf"], [1, "card-body", "d-flex"], [1, "col"], [1, "card-body", "d-flex", "border-bottom", "border-dark"], [3, "routerLink"], [1, "col", "justify-content-center", 3, "nivel"], [2, "padding-right", "10px"], ["textType", "pepe", "height", "20px", "textType", "Pepe", 2, "background-color", "#dac8c8", 3, "showValue", "type", "value", "max"], [1, "col", 3, "trend"], [1, "col", 3, "nivel"], ["textType", "pepe", "height", "20px", 2, "background-color", "#dac8c8", 3, "showValue", "type", "value", "max"], ["height", "20px", 2, "background-color", "#dac8c8", 3, "showValue", "type", "value", "max"]], template: function StarterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Informes Robertin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "div", 6)(10, "mkt-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function StarterComponent_Template_mkt_dropdown_onClick_10_listener($event) { return ctx.onSelectOption($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, StarterComponent_div_14_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.fechas);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Fecha: ", ctx.currentDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 3, ctx.currentReport));
    } }, directives: [marlin_cdk__WEBPACK_IMPORTED_MODULE_6__.MktDropdownComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _components_nivel_directive__WEBPACK_IMPORTED_MODULE_0__.NivelDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbProgressbar, _components_trend_directive__WEBPACK_IMPORTED_MODULE_1__.TrendDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe], styles: [".col a {\n  color: grey;\n  font-weight: 700;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  padding: 5px;\n}\n\n.col a:hover {\n  color: #000;\n  border: 1px solid #000;\n}\n\n::ng-deep .progress {\n  background-color: #3e5569 !important;\n}\n\n::ng-deep .progress .progress-primary {\n  background-color: #3e5569 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7QUFDRiIsImZpbGUiOiJzdGFydGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbCBhIHtcclxuICBjb2xvcjogZ3JleTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmNvbCBhOmhvdmVyIHtcclxuICBjb2xvcjogIzAwMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnByb2dyZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U1NTY5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAucHJvZ3Jlc3MgLnByb2dyZXNzLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZTU1NjkgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 2218:
/*!*******************************************!*\
  !*** ./src/app/starter/starter.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StarterModule": () => (/* binding */ StarterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8750);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 6410);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 3903);
/* harmony import */ var marlin_cdk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! marlin-cdk */ 6486);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-feather */ 8689);
/* harmony import */ var _starter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./starter.component */ 2641);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 325);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.module */ 6747);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 3690);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ 7916);
/* harmony import */ var _components_nivel_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nivel.directive */ 3947);
/* harmony import */ var _components_trend_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/trend.directive */ 5640);
/* harmony import */ var _graphics_graphics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphics/graphics.component */ 7881);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 9109);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 8259);

















const routes = [
    {
        path: "",
        data: {
            title: "Starter Page",
            urls: [
                { title: "Dashboard", url: "/dashboard" },
                { title: "Starter Page" },
            ],
        },
        component: _starter_component__WEBPACK_IMPORTED_MODULE_0__.StarterComponent,
    },
    {
        path: "line-chart/:id",
        data: {
            title: "Line Chart",
            urls: [
                { title: "Starter ", url: "/dashboard" },
                { title: "Line Chart", url: "/line-chart" },
            ],
        },
        component: _graphics_graphics_component__WEBPACK_IMPORTED_MODULE_4__.GraphicsComponent,
    },
];
class StarterModule {
}
StarterModule.ɵfac = function StarterModule_Factory(t) { return new (t || StarterModule)(); };
StarterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: StarterModule });
StarterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.NgApexchartsModule,
            angular_feather__WEBPACK_IMPORTED_MODULE_8__.FeatherModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            marlin_cdk__WEBPACK_IMPORTED_MODULE_10__.MktCardModule,
            marlin_cdk__WEBPACK_IMPORTED_MODULE_10__.MktDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbProgressbarModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateLoader,
                    useFactory: _app_module__WEBPACK_IMPORTED_MODULE_1__.HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient],
                },
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](StarterModule, { declarations: [_starter_component__WEBPACK_IMPORTED_MODULE_0__.StarterComponent, _components_nivel_directive__WEBPACK_IMPORTED_MODULE_2__.NivelDirective, _components_trend_directive__WEBPACK_IMPORTED_MODULE_3__.TrendDirective], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.NgApexchartsModule,
        angular_feather__WEBPACK_IMPORTED_MODULE_8__.FeatherModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        marlin_cdk__WEBPACK_IMPORTED_MODULE_10__.MktCardModule,
        marlin_cdk__WEBPACK_IMPORTED_MODULE_10__.MktDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbProgressbarModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_starter_starter_module_ts.js.map