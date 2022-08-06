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
        if (this.value.value < this.value.min) {
            this.el.nativeElement.parentNode.style.backgroundColor = "blue";
            this.el.nativeElement.parentNode.style.color = "white";
            this.el.nativeElement.innerText = "Bajo";
        }
        else if (this.value.value > this.value.max) {
            this.el.nativeElement.innerText = "Alto";
            this.el.nativeElement.parentNode.style.backgroundColor = "red";
            this.el.nativeElement.parentNode.style.color = "white";
        }
        else {
            this.el.nativeElement.innerText = "";
            this.el.nativeElement.parentNode.style.color = "black";
            this.el.nativeElement.parentNode.style.backgroundColor = "unset";
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 16)(21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14)(23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "%NEU");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "div", 13)(28, "div", 13)(29, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 14)(31, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "%LYM");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "div", 13)(36, "div", 13)(37, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 14)(39, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "%MONO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "div", 13)(44, "div", 13)(45, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 14)(47, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "%EOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "div", 13)(52, "div", 13)(53, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 14)(55, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "%BASO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "div", 13)(60, "div", 13)(61, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 14)(63, "div", 13)(64, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Neu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "div", 16)(71, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 14)(73, "div", 13)(74, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Lym ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "div", 16)(81, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 14)(83, "div", 13)(84, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Mono ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "div", 16)(91, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 14)(93, "div", 13)(94, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Eos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "div", 16)(101, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 14)(103, "div", 13)(104, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "BASO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](110, "div", 16)(111, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 14)(113, "div", 13)(114, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115, "PLQ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "div", 16)(121, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "div", 14)(123, "div", 13)(124, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "MPV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "div", 16)(131, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "div", 14)(133, "div", 13)(134, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "PDW ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](140, "div", 16)(141, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 14)(143, "div", 13)(144, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "PCT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "div", 16)(151, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 14)(153, "div", 13)(154, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "Eritrocitos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](160, "div", 16)(161, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 14)(163, "div", 13)(164, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "HCT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](170, "div", 16)(171, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "div", 14)(173, "div", 13)(174, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](175, "HGB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](180, "div", 16)(181, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "div", 14)(183, "div", 13)(184, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "MCV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](190, "div", 16)(191, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 14)(193, "div", 13)(194, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](195, "MCH ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](200, "div", 16)(201, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "div", 14)(203, "div", 13)(204, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, "MCHC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](207);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](210, "div", 16)(211, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "div", 14)(213, "div", 13)(214, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, "RDW ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](217);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](220, "div", 16)(221, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "div", 14)(223, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, "%RETIC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](226);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](227, "div", 13)(228, "div", 13)(229, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "div", 14)(231, "div", 13)(232, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](233, "RETIC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](235);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](236, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](237);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](238, "div", 16)(239, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](240, "div", 14)(241, "div", 13)(242, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](243, "RET HE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](245);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](247);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](248, "div", 16)(249, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const currentData_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](145, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.leucocitos == null ? null : currentData_r1.data.leucocitos.value, " ", currentData_r1.data == null ? null : currentData_r1.data.leucocitos == null ? null : currentData_r1.data.leucocitos.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.leucocitos.min, " - ", ctx_r2.valorReferencial.leucocitos.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](146, _c1, currentData_r1.data == null ? null : currentData_r1.data.leucocitos == null ? null : currentData_r1.data.leucocitos.value, ctx_r2.valorReferencial.leucocitos.min, ctx_r2.valorReferencial.leucocitos.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](150, _c2, currentData_r1.data == null ? null : currentData_r1.data.leucocitos == null ? null : currentData_r1.data.leucocitos.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.leucocitos == null ? null : currentData_r1.prevData.leucocitos.value));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](153, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.neu == null ? null : currentData_r1.data.neu.value, " ", currentData_r1.data == null ? null : currentData_r1.data.neu == null ? null : currentData_r1.data.neu.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.neu.min, " - ", ctx_r2.valorReferencial.neu.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](154, _c1, currentData_r1.data == null ? null : currentData_r1.data.neu == null ? null : currentData_r1.data.neu.value, ctx_r2.valorReferencial.neu.min, ctx_r2.valorReferencial.neu.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](158, _c2, currentData_r1.data == null ? null : currentData_r1.data.neu == null ? null : currentData_r1.data.neu.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.neu == null ? null : currentData_r1.prevData.neu.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](161, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.lym == null ? null : currentData_r1.data.lym.value, " ", currentData_r1.data == null ? null : currentData_r1.data.lym == null ? null : currentData_r1.data.lym.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.lym.min, " - ", ctx_r2.valorReferencial.lym.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](162, _c1, currentData_r1.data == null ? null : currentData_r1.data.lym == null ? null : currentData_r1.data.lym.value, ctx_r2.valorReferencial.lym.min, ctx_r2.valorReferencial.lym.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](166, _c2, currentData_r1.data == null ? null : currentData_r1.data.lym == null ? null : currentData_r1.data.lym.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.lym == null ? null : currentData_r1.prevData.lym.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](169, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.mono == null ? null : currentData_r1.data.mono.value, " ", currentData_r1.data == null ? null : currentData_r1.data.mono == null ? null : currentData_r1.data.mono.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.mono.min, " - ", ctx_r2.valorReferencial.mono.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](170, _c1, currentData_r1.data == null ? null : currentData_r1.data.mono == null ? null : currentData_r1.data.mono.value, ctx_r2.valorReferencial.mono.min, ctx_r2.valorReferencial.mono.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](174, _c2, currentData_r1.data == null ? null : currentData_r1.data.mono == null ? null : currentData_r1.data.mono.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.mono == null ? null : currentData_r1.prevData.mono.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](177, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.eos == null ? null : currentData_r1.data.eos.value, " ", currentData_r1.data == null ? null : currentData_r1.data.eos == null ? null : currentData_r1.data.eos.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.eos.min, " - ", ctx_r2.valorReferencial.eos.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](178, _c1, currentData_r1.data == null ? null : currentData_r1.data.eos == null ? null : currentData_r1.data.eos.value, ctx_r2.valorReferencial.eos.min, ctx_r2.valorReferencial.eos.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](182, _c2, currentData_r1.data == null ? null : currentData_r1.data.eos == null ? null : currentData_r1.data.eos.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.eos == null ? null : currentData_r1.prevData.eos.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](185, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.baso == null ? null : currentData_r1.data.baso.value, " ", currentData_r1.data == null ? null : currentData_r1.data.baso == null ? null : currentData_r1.data.baso.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.baso.min, " - ", ctx_r2.valorReferencial.baso.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](186, _c1, currentData_r1.data == null ? null : currentData_r1.data.baso == null ? null : currentData_r1.data.baso.value, ctx_r2.valorReferencial.baso.min, ctx_r2.valorReferencial.baso.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](190, _c2, currentData_r1.data == null ? null : currentData_r1.data.baso == null ? null : currentData_r1.data.baso.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.baso == null ? null : currentData_r1.prevData.baso.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](193, _c8));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.plq == null ? null : currentData_r1.data.plq.value, " ", currentData_r1.data == null ? null : currentData_r1.data.plq == null ? null : currentData_r1.data.plq.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.plq.min, " - ", ctx_r2.valorReferencial.plq.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](194, _c1, currentData_r1.data == null ? null : currentData_r1.data.plq == null ? null : currentData_r1.data.plq.value, ctx_r2.valorReferencial.plq.min, ctx_r2.valorReferencial.plq.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](198, _c2, currentData_r1.data == null ? null : currentData_r1.data.plq == null ? null : currentData_r1.data.plq.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.plq == null ? null : currentData_r1.prevData.plq.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](201, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.mpv == null ? null : currentData_r1.data.mpv.value, " ", currentData_r1.data == null ? null : currentData_r1.data.mpv == null ? null : currentData_r1.data.mpv.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.mpv.min, " - ", ctx_r2.valorReferencial.mpv.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](202, _c1, currentData_r1.data == null ? null : currentData_r1.data.mpv == null ? null : currentData_r1.data.mpv.value, ctx_r2.valorReferencial.mpv.min, ctx_r2.valorReferencial.mpv.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](206, _c2, currentData_r1.data == null ? null : currentData_r1.data.mpv == null ? null : currentData_r1.data.mpv.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.mpv == null ? null : currentData_r1.prevData.mpv.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](209, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.pdw == null ? null : currentData_r1.data.pdw.value, " ", currentData_r1.data == null ? null : currentData_r1.data.pdw == null ? null : currentData_r1.data.pdw.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.pdw.min, " - ", ctx_r2.valorReferencial.pdw.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](210, _c1, currentData_r1.data == null ? null : currentData_r1.data.pdw == null ? null : currentData_r1.data.pdw.value, ctx_r2.valorReferencial.pdw.min, ctx_r2.valorReferencial.pdw.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](214, _c2, currentData_r1.data == null ? null : currentData_r1.data.pdw == null ? null : currentData_r1.data.pdw.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.pdw == null ? null : currentData_r1.prevData.pdw.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](217, _c11));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.pct == null ? null : currentData_r1.data.pct.value, " ", currentData_r1.data == null ? null : currentData_r1.data.pct == null ? null : currentData_r1.data.pct.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.pct.min, " - ", ctx_r2.valorReferencial.pct.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](218, _c1, currentData_r1.data == null ? null : currentData_r1.data.pct == null ? null : currentData_r1.data.pct.value, ctx_r2.valorReferencial.pct.min, ctx_r2.valorReferencial.pct.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](222, _c2, currentData_r1.data == null ? null : currentData_r1.data.pct == null ? null : currentData_r1.data.pct.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.pct == null ? null : currentData_r1.prevData.pct.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](225, _c12));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.eritrocitos == null ? null : currentData_r1.data.eritrocitos.value, " ", currentData_r1.data == null ? null : currentData_r1.data.eritrocitos == null ? null : currentData_r1.data.eritrocitos.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.pct.min, " - ", ctx_r2.valorReferencial.pct.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](226, _c1, currentData_r1.data == null ? null : currentData_r1.data.eritrocitos == null ? null : currentData_r1.data.eritrocitos.value, ctx_r2.valorReferencial.eritrocitos.min, ctx_r2.valorReferencial.eritrocitos.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](230, _c2, currentData_r1.data == null ? null : currentData_r1.data.eritrocitos == null ? null : currentData_r1.data.eritrocitos.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.eritrocitos == null ? null : currentData_r1.prevData.eritrocitos.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](233, _c13));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.hct == null ? null : currentData_r1.data.hct.value, " ", currentData_r1.data == null ? null : currentData_r1.data.hct == null ? null : currentData_r1.data.hct.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.hct.min, " - ", ctx_r2.valorReferencial.hct.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](234, _c1, currentData_r1.data == null ? null : currentData_r1.data.hct == null ? null : currentData_r1.data.hct.value, ctx_r2.valorReferencial.hct.min, ctx_r2.valorReferencial.hct.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](238, _c2, currentData_r1.data == null ? null : currentData_r1.data.hct == null ? null : currentData_r1.data.hct.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.hct == null ? null : currentData_r1.prevData.hct.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](241, _c14));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.hgb == null ? null : currentData_r1.data.hgb.value, " ", currentData_r1.data == null ? null : currentData_r1.data.hgb == null ? null : currentData_r1.data.hgb.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.hgb.min, " - ", ctx_r2.valorReferencial.hgb.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](242, _c1, currentData_r1.data == null ? null : currentData_r1.data.hgb == null ? null : currentData_r1.data.hgb.value, ctx_r2.valorReferencial.hgb.min, ctx_r2.valorReferencial.hgb.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](246, _c2, currentData_r1.data == null ? null : currentData_r1.data.hgb == null ? null : currentData_r1.data.hgb.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.hgb == null ? null : currentData_r1.prevData.hgb.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](249, _c15));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.mcv == null ? null : currentData_r1.data.mcv.value, " ", currentData_r1.data == null ? null : currentData_r1.data.mcv == null ? null : currentData_r1.data.mcv.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.mcv.min, " - ", ctx_r2.valorReferencial.mcv.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](250, _c1, currentData_r1.data == null ? null : currentData_r1.data.mcv == null ? null : currentData_r1.data.mcv.value, ctx_r2.valorReferencial.mcv.min, ctx_r2.valorReferencial.mcv.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](254, _c2, currentData_r1.data == null ? null : currentData_r1.data.mcv == null ? null : currentData_r1.data.mcv.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.mcv == null ? null : currentData_r1.prevData.mcv.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](257, _c16));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.mch == null ? null : currentData_r1.data.mch.value, " ", currentData_r1.data == null ? null : currentData_r1.data.mch == null ? null : currentData_r1.data.mch.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.mch.min, " - ", ctx_r2.valorReferencial.mch.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](258, _c1, currentData_r1.data == null ? null : currentData_r1.data.mch == null ? null : currentData_r1.data.mch.value, ctx_r2.valorReferencial.mch.min, ctx_r2.valorReferencial.mch.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](262, _c2, currentData_r1.data == null ? null : currentData_r1.data.mch == null ? null : currentData_r1.data.mch.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.mch == null ? null : currentData_r1.prevData.mch.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](265, _c17));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.mchc == null ? null : currentData_r1.data.mchc.value, " ", currentData_r1.data == null ? null : currentData_r1.data.mchc == null ? null : currentData_r1.data.mchc.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.mchc.min, " - ", ctx_r2.valorReferencial.mchc.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](266, _c1, currentData_r1.data == null ? null : currentData_r1.data.mchc == null ? null : currentData_r1.data.mchc.value, ctx_r2.valorReferencial.mchc.min, ctx_r2.valorReferencial.mchc.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](270, _c2, currentData_r1.data == null ? null : currentData_r1.data.mchc == null ? null : currentData_r1.data.mchc.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.mchc == null ? null : currentData_r1.prevData.mchc.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](273, _c18));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.rdw == null ? null : currentData_r1.data.rdw.value, " ", currentData_r1.data == null ? null : currentData_r1.data.rdw == null ? null : currentData_r1.data.rdw.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.rdw.min, " - ", ctx_r2.valorReferencial.rdw.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](274, _c1, currentData_r1.data == null ? null : currentData_r1.data.rdw == null ? null : currentData_r1.data.rdw.value, ctx_r2.valorReferencial.rdw.min, ctx_r2.valorReferencial.rdw.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](278, _c2, currentData_r1.data == null ? null : currentData_r1.data.rdw == null ? null : currentData_r1.data.rdw.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.rdw == null ? null : currentData_r1.prevData.rdw.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.retic_pct == null ? null : currentData_r1.data.retic_pct.value, " ", currentData_r1.data == null ? null : currentData_r1.data.retic_pct == null ? null : currentData_r1.data.retic_pct.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](281, _c19));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.retic == null ? null : currentData_r1.data.retic.value, " ", currentData_r1.data == null ? null : currentData_r1.data.retic == null ? null : currentData_r1.data.retic.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.retic.min, " - ", ctx_r2.valorReferencial.retic.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](282, _c1, currentData_r1.data == null ? null : currentData_r1.data.retic == null ? null : currentData_r1.data.retic.value, ctx_r2.valorReferencial.retic.min, ctx_r2.valorReferencial.retic.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](286, _c2, currentData_r1.data == null ? null : currentData_r1.data.retic == null ? null : currentData_r1.data.retic.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.retic == null ? null : currentData_r1.prevData.retic.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](289, _c20));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", currentData_r1.data == null ? null : currentData_r1.data.ret_he == null ? null : currentData_r1.data.ret_he.value, " ", currentData_r1.data == null ? null : currentData_r1.data.ret_he == null ? null : currentData_r1.data.ret_he.unit, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r2.valorReferencial.ret_he.min, " - ", ctx_r2.valorReferencial.ret_he.max, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("nivel", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](290, _c1, currentData_r1.data == null ? null : currentData_r1.data.ret_he == null ? null : currentData_r1.data.ret_he.value, ctx_r2.valorReferencial.ret_he.min, ctx_r2.valorReferencial.ret_he.max));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("trend", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](294, _c2, currentData_r1.data == null ? null : currentData_r1.data.ret_he == null ? null : currentData_r1.data.ret_he.value, currentData_r1.prevData == null ? null : currentData_r1.prevData.ret_he == null ? null : currentData_r1.prevData.ret_he.value));
} }
function StarterComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StarterComponent_div_14_ng_container_1_Template, 250, 297, "ng-container", 11);
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
}
StarterComponent.ɵfac = function StarterComponent_Factory(t) { return new (t || StarterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
StarterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StarterComponent, selectors: [["ng-component"]], decls: 16, vars: 5, consts: [[1, "row", "pt-4"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row"], [1, "d-flex", "row"], [1, "col-2", "text-start"], ["name", "Fechas de informes", "icon", "calendar", 3, "options", "onClick"], [1, "col-10", "text-end"], ["class", "row card", 4, "ngIf"], [1, "row", "card"], [4, "ngIf"], [1, "card-body", "d-flex"], [1, "col"], [1, "card-body", "d-flex", "border-bottom", "border-dark"], [3, "routerLink"], [1, "col", 3, "nivel"], [1, "col", 3, "trend"]], template: function StarterComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [marlin_cdk__WEBPACK_IMPORTED_MODULE_6__.MktDropdownComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _components_nivel_directive__WEBPACK_IMPORTED_MODULE_0__.NivelDirective, _components_trend_directive__WEBPACK_IMPORTED_MODULE_1__.TrendDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe], encapsulation: 2 });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3903);
/* harmony import */ var marlin_cdk__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! marlin-cdk */ 6486);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-feather */ 8689);
/* harmony import */ var _starter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./starter.component */ 2641);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 325);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.module */ 6747);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 3690);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ 7916);
/* harmony import */ var _components_nivel_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nivel.directive */ 3947);
/* harmony import */ var _components_trend_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/trend.directive */ 5640);
/* harmony import */ var _graphics_graphics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../graphics/graphics.component */ 7881);
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
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule.forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateLoader,
                    useFactory: _app_module__WEBPACK_IMPORTED_MODULE_1__.HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient],
                },
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](StarterModule, { declarations: [_starter_component__WEBPACK_IMPORTED_MODULE_0__.StarterComponent, _components_nivel_directive__WEBPACK_IMPORTED_MODULE_2__.NivelDirective, _components_trend_directive__WEBPACK_IMPORTED_MODULE_3__.TrendDirective], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.NgApexchartsModule,
        angular_feather__WEBPACK_IMPORTED_MODULE_8__.FeatherModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        marlin_cdk__WEBPACK_IMPORTED_MODULE_10__.MktCardModule,
        marlin_cdk__WEBPACK_IMPORTED_MODULE_10__.MktDropdownModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_starter_starter_module_ts.js.map