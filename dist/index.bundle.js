/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ \"./node_modules/css-loader/dist/runtime/sourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".pagebase{\\r\\n    background-color: black;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n.navbar{\\r\\n    overflow: hidden;\\r\\n    background-color: #333;\\r\\n    position: fixed; \\r\\n    top: 0; \\r\\n    width: 100%; \\r\\n    margin: 0;\\r\\n}\\r\\n\\r\\n.navbar a {\\r\\n    float: left;\\r\\n    display: block;\\r\\n    color: #f2f2f2;\\r\\n    text-align: center;\\r\\n    padding: 14px 16px;\\r\\n    text-decoration: none;\\r\\n    transition:0.3s;\\r\\n}\\r\\n\\r\\n.navbar a:hover {\\r\\n    background: #ddd;\\r\\n    color: black;\\r\\n    transition:0.3s;\\r\\n}\\r\\n\\r\\n#content{\\r\\n    width: 40%;\\r\\n    margin: auto;\\r\\n    margin-top: 10%;\\r\\n    float: left;\\r\\n}\\r\\n\\r\\n.leftspacebar{\\r\\n    width:30%;\\r\\n    height: 90vh;\\r\\n    float: left;\\r\\n    margin:auto;\\r\\n    transition: 1.0s;\\r\\n}\\r\\n\\r\\n.leftspacebar.shrink{\\r\\n    width:0;\\r\\n    transition: 1.0s;\\r\\n}\\r\\n\\r\\n.sidebar{\\r\\n    width:0%;\\r\\n    height: 90vh;\\r\\n    float: left;\\r\\n    margin: auto;\\r\\n    overflow: hidden;\\r\\n    text-align:left;\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.menu{\\r\\n    font-size:2vw;\\r\\n    font-family: Garamond;\\r\\n}\\r\\n\\r\\n.menu:hover{\\r\\n    color:yellow;\\r\\n    transition:1.0s;\\r\\n    cursor:pointer;\\r\\n}\\r\\n\\r\\n.menutext{\\r\\n    font-size:2vw;\\r\\n    font-family: Garamond;\\r\\n    display: inline-block;\\r\\n}\\r\\n\\r\\n@-webkit-keyframes vibrate{\\r\\n    0% { -webkit-transform: rotate(-5deg);}\\r\\n    25% { -webkit-transform: rotate(5deg);}\\r\\n    50% { -webkit-transform: rotate(-5deg);}\\r\\n    75% { -webkit-transform: rotate(5deg);}\\r\\n    100% { -webkit-transform: rotate(-5deg);}\\r\\n}\\r\\n\\r\\n#profile{\\r\\n    margin-top:45vh;\\r\\n}\\r\\n\\r\\n.profilePicture{\\r\\n    border-radius: 50%;\\r\\n    width: 40%;\\r\\n    margin: auto;\\r\\n    margin-top: 5%;\\r\\n    display: block;\\r\\n    opacity: 0%;\\r\\n}\\r\\n\\r\\n#name{\\r\\n    color: white;\\r\\n    text-align: center;\\r\\n    font-size: 3vw;\\r\\n}\\r\\n#position{\\r\\n    font-size: 2vw;\\r\\n    color: white;\\r\\n    text-align: center;\\r\\n    height: 0px;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n.rightsidebar{\\r\\n    width:45%;\\r\\n    height: 90vh;\\r\\n    transition: 1.0s;\\r\\n    float:left;\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.profilecontainer{\\r\\n    margin-top:40%;\\r\\n}\\r\\n\\r\\n.rightsidebar.shrink{\\r\\n    width: 0%;\\r\\n    overflow: hidden;\\r\\n    transition: 1.0s;\\r\\n}\\r\\n.footer{\\r\\n    color: white;\\r\\n    position: fixed;\\r\\n    bottom: 1%;\\r\\n    text-align: center;\\r\\n    width: 100%;\\r\\n    font-size: 1.5vw;\\r\\n    transition: 0.5s;\\r\\n}\\r\\n.footer.shrink{\\r\\n    font-size: 0vw;\\r\\n    transition: 0.5s;\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://./src/index.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,eAAe;IACf,MAAM;IACN,WAAW;IACX,SAAS;AACb;;AAEA;IACI,WAAW;IACX,cAAc;IACd,cAAc;IACd,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,eAAe;IACf,WAAW;AACf;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,WAAW;IACX,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,OAAO;IACP,gBAAgB;AACpB;;AAEA;IACI,QAAQ;IACR,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,KAAK,gCAAgC,CAAC;IACtC,MAAM,+BAA+B,CAAC;IACtC,MAAM,gCAAgC,CAAC;IACvC,MAAM,+BAA+B,CAAC;IACtC,OAAO,gCAAgC,CAAC;AAC5C;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,cAAc;IACd,cAAc;IACd,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,cAAc;AAClB;AACA;IACI,cAAc;IACd,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,gBAAgB;IAChB,UAAU;IACV,YAAY;AAChB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,SAAS;IACT,gBAAgB;IAChB,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,eAAe;IACf,UAAU;IACV,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAChB,gBAAgB;AACpB;AACA;IACI,cAAc;IACd,gBAAgB;AACpB\",\"sourcesContent\":[\".pagebase{\\r\\n    background-color: black;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n.navbar{\\r\\n    overflow: hidden;\\r\\n    background-color: #333;\\r\\n    position: fixed; \\r\\n    top: 0; \\r\\n    width: 100%; \\r\\n    margin: 0;\\r\\n}\\r\\n\\r\\n.navbar a {\\r\\n    float: left;\\r\\n    display: block;\\r\\n    color: #f2f2f2;\\r\\n    text-align: center;\\r\\n    padding: 14px 16px;\\r\\n    text-decoration: none;\\r\\n    transition:0.3s;\\r\\n}\\r\\n\\r\\n.navbar a:hover {\\r\\n    background: #ddd;\\r\\n    color: black;\\r\\n    transition:0.3s;\\r\\n}\\r\\n\\r\\n#content{\\r\\n    width: 40%;\\r\\n    margin: auto;\\r\\n    margin-top: 10%;\\r\\n    float: left;\\r\\n}\\r\\n\\r\\n.leftspacebar{\\r\\n    width:30%;\\r\\n    height: 90vh;\\r\\n    float: left;\\r\\n    margin:auto;\\r\\n    transition: 1.0s;\\r\\n}\\r\\n\\r\\n.leftspacebar.shrink{\\r\\n    width:0;\\r\\n    transition: 1.0s;\\r\\n}\\r\\n\\r\\n.sidebar{\\r\\n    width:0%;\\r\\n    height: 90vh;\\r\\n    float: left;\\r\\n    margin: auto;\\r\\n    overflow: hidden;\\r\\n    text-align:left;\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.menu{\\r\\n    font-size:2vw;\\r\\n    font-family: Garamond;\\r\\n}\\r\\n\\r\\n.menu:hover{\\r\\n    color:yellow;\\r\\n    transition:1.0s;\\r\\n    cursor:pointer;\\r\\n}\\r\\n\\r\\n.menutext{\\r\\n    font-size:2vw;\\r\\n    font-family: Garamond;\\r\\n    display: inline-block;\\r\\n}\\r\\n\\r\\n@-webkit-keyframes vibrate{\\r\\n    0% { -webkit-transform: rotate(-5deg);}\\r\\n    25% { -webkit-transform: rotate(5deg);}\\r\\n    50% { -webkit-transform: rotate(-5deg);}\\r\\n    75% { -webkit-transform: rotate(5deg);}\\r\\n    100% { -webkit-transform: rotate(-5deg);}\\r\\n}\\r\\n\\r\\n#profile{\\r\\n    margin-top:45vh;\\r\\n}\\r\\n\\r\\n.profilePicture{\\r\\n    border-radius: 50%;\\r\\n    width: 40%;\\r\\n    margin: auto;\\r\\n    margin-top: 5%;\\r\\n    display: block;\\r\\n    opacity: 0%;\\r\\n}\\r\\n\\r\\n#name{\\r\\n    color: white;\\r\\n    text-align: center;\\r\\n    font-size: 3vw;\\r\\n}\\r\\n#position{\\r\\n    font-size: 2vw;\\r\\n    color: white;\\r\\n    text-align: center;\\r\\n    height: 0px;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n.rightsidebar{\\r\\n    width:45%;\\r\\n    height: 90vh;\\r\\n    transition: 1.0s;\\r\\n    float:left;\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.profilecontainer{\\r\\n    margin-top:40%;\\r\\n}\\r\\n\\r\\n.rightsidebar.shrink{\\r\\n    width: 0%;\\r\\n    overflow: hidden;\\r\\n    transition: 1.0s;\\r\\n}\\r\\n.footer{\\r\\n    color: white;\\r\\n    position: fixed;\\r\\n    bottom: 1%;\\r\\n    text-align: center;\\r\\n    width: 100%;\\r\\n    font-size: 1.5vw;\\r\\n    transition: 0.5s;\\r\\n}\\r\\n.footer.shrink{\\r\\n    font-size: 0vw;\\r\\n    transition: 0.5s;\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NyYy9pbmRleC5jc3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esb0RBQW9ELGdDQUFnQyx5QkFBeUIsS0FBSyxnQkFBZ0IseUJBQXlCLCtCQUErQix5QkFBeUIsZ0JBQWdCLHFCQUFxQixrQkFBa0IsS0FBSyxtQkFBbUIsb0JBQW9CLHVCQUF1Qix1QkFBdUIsMkJBQTJCLDJCQUEyQiw4QkFBOEIsd0JBQXdCLEtBQUsseUJBQXlCLHlCQUF5QixxQkFBcUIsd0JBQXdCLEtBQUssaUJBQWlCLG1CQUFtQixxQkFBcUIsd0JBQXdCLG9CQUFvQixLQUFLLHNCQUFzQixrQkFBa0IscUJBQXFCLG9CQUFvQixvQkFBb0IseUJBQXlCLEtBQUssNkJBQTZCLGdCQUFnQix5QkFBeUIsS0FBSyxpQkFBaUIsaUJBQWlCLHFCQUFxQixvQkFBb0IscUJBQXFCLHlCQUF5Qix3QkFBd0IscUJBQXFCLEtBQUssY0FBYyxzQkFBc0IsOEJBQThCLEtBQUssb0JBQW9CLHFCQUFxQix3QkFBd0IsdUJBQXVCLEtBQUssa0JBQWtCLHNCQUFzQiw4QkFBOEIsOEJBQThCLEtBQUssbUNBQW1DLGFBQWEsa0NBQWtDLGNBQWMsaUNBQWlDLGNBQWMsa0NBQWtDLGNBQWMsaUNBQWlDLGVBQWUsa0NBQWtDLEtBQUssaUJBQWlCLHdCQUF3QixLQUFLLHdCQUF3QiwyQkFBMkIsbUJBQW1CLHFCQUFxQix1QkFBdUIsdUJBQXVCLG9CQUFvQixLQUFLLGNBQWMscUJBQXFCLDJCQUEyQix1QkFBdUIsS0FBSyxjQUFjLHVCQUF1QixxQkFBcUIsMkJBQTJCLG9CQUFvQix5QkFBeUIsS0FBSyxzQkFBc0Isa0JBQWtCLHFCQUFxQix5QkFBeUIsbUJBQW1CLHFCQUFxQixLQUFLLDBCQUEwQix1QkFBdUIsS0FBSyw2QkFBNkIsa0JBQWtCLHlCQUF5Qix5QkFBeUIsS0FBSyxZQUFZLHFCQUFxQix3QkFBd0IsbUJBQW1CLDJCQUEyQixvQkFBb0IseUJBQXlCLHlCQUF5QixLQUFLLG1CQUFtQix1QkFBdUIseUJBQXlCLEtBQUssV0FBVyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssc0JBQXNCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLHVCQUF1QixPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxvQ0FBb0MsZ0NBQWdDLHlCQUF5QixLQUFLLGdCQUFnQix5QkFBeUIsK0JBQStCLHlCQUF5QixnQkFBZ0IscUJBQXFCLGtCQUFrQixLQUFLLG1CQUFtQixvQkFBb0IsdUJBQXVCLHVCQUF1QiwyQkFBMkIsMkJBQTJCLDhCQUE4Qix3QkFBd0IsS0FBSyx5QkFBeUIseUJBQXlCLHFCQUFxQix3QkFBd0IsS0FBSyxpQkFBaUIsbUJBQW1CLHFCQUFxQix3QkFBd0Isb0JBQW9CLEtBQUssc0JBQXNCLGtCQUFrQixxQkFBcUIsb0JBQW9CLG9CQUFvQix5QkFBeUIsS0FBSyw2QkFBNkIsZ0JBQWdCLHlCQUF5QixLQUFLLGlCQUFpQixpQkFBaUIscUJBQXFCLG9CQUFvQixxQkFBcUIseUJBQXlCLHdCQUF3QixxQkFBcUIsS0FBSyxjQUFjLHNCQUFzQiw4QkFBOEIsS0FBSyxvQkFBb0IscUJBQXFCLHdCQUF3Qix1QkFBdUIsS0FBSyxrQkFBa0Isc0JBQXNCLDhCQUE4Qiw4QkFBOEIsS0FBSyxtQ0FBbUMsYUFBYSxrQ0FBa0MsY0FBYyxpQ0FBaUMsY0FBYyxrQ0FBa0MsY0FBYyxpQ0FBaUMsZUFBZSxrQ0FBa0MsS0FBSyxpQkFBaUIsd0JBQXdCLEtBQUssd0JBQXdCLDJCQUEyQixtQkFBbUIscUJBQXFCLHVCQUF1Qix1QkFBdUIsb0JBQW9CLEtBQUssY0FBYyxxQkFBcUIsMkJBQTJCLHVCQUF1QixLQUFLLGNBQWMsdUJBQXVCLHFCQUFxQiwyQkFBMkIsb0JBQW9CLHlCQUF5QixLQUFLLHNCQUFzQixrQkFBa0IscUJBQXFCLHlCQUF5QixtQkFBbUIscUJBQXFCLEtBQUssMEJBQTBCLHVCQUF1QixLQUFLLDZCQUE2QixrQkFBa0IseUJBQXlCLHlCQUF5QixLQUFLLFlBQVkscUJBQXFCLHdCQUF3QixtQkFBbUIsMkJBQTJCLG9CQUFvQix5QkFBeUIseUJBQXlCLEtBQUssbUJBQW1CLHVCQUF1Qix5QkFBeUIsS0FBSyx1QkFBdUI7QUFDcHhNO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGxlbmNoZXcncy1wbGF5Z3JvdW5kLXByb2plY3QvLi9zcmMvaW5kZXguY3NzP2ZhYTQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucGFnZWJhc2V7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFye1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxcclxcbiAgICB0b3A6IDA7IFxcclxcbiAgICB3aWR0aDogMTAwJTsgXFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciBhIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBjb2xvcjogI2YyZjJmMjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjowLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIGE6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRyYW5zaXRpb246MC4zcztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnRzcGFjZWJhcntcXHJcXG4gICAgd2lkdGg6MzAlO1xcclxcbiAgICBoZWlnaHQ6IDkwdmg7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBtYXJnaW46YXV0bztcXHJcXG4gICAgdHJhbnNpdGlvbjogMS4wcztcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnRzcGFjZWJhci5zaHJpbmt7XFxyXFxuICAgIHdpZHRoOjA7XFxyXFxuICAgIHRyYW5zaXRpb246IDEuMHM7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFye1xcclxcbiAgICB3aWR0aDowJTtcXHJcXG4gICAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnV7XFxyXFxuICAgIGZvbnQtc2l6ZToydnc7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBHYXJhbW9uZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnU6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOnllbGxvdztcXHJcXG4gICAgdHJhbnNpdGlvbjoxLjBzO1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnV0ZXh0e1xcclxcbiAgICBmb250LXNpemU6MnZ3O1xcclxcbiAgICBmb250LWZhbWlseTogR2FyYW1vbmQ7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHZpYnJhdGV7XFxyXFxuICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7fVxcclxcbiAgICAyNSUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO31cXHJcXG4gICAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7fVxcclxcbiAgICA3NSUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO31cXHJcXG4gICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO31cXHJcXG59XFxyXFxuXFxyXFxuI3Byb2ZpbGV7XFxyXFxuICAgIG1hcmdpbi10b3A6NDV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGVQaWN0dXJle1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBvcGFjaXR5OiAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI25hbWV7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDN2dztcXHJcXG59XFxyXFxuI3Bvc2l0aW9ue1xcclxcbiAgICBmb250LXNpemU6IDJ2dztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHRzaWRlYmFye1xcclxcbiAgICB3aWR0aDo0NSU7XFxyXFxuICAgIGhlaWdodDogOTB2aDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMS4wcztcXHJcXG4gICAgZmxvYXQ6bGVmdDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZWNvbnRhaW5lcntcXHJcXG4gICAgbWFyZ2luLXRvcDo0MCU7XFxyXFxufVxcclxcblxcclxcbi5yaWdodHNpZGViYXIuc2hyaW5re1xcclxcbiAgICB3aWR0aDogMCU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zaXRpb246IDEuMHM7XFxyXFxufVxcclxcbi5mb290ZXJ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDElO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDEuNXZ3O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbn1cXHJcXG4uZm9vdGVyLnNocmlua3tcXHJcXG4gICAgZm9udC1zaXplOiAwdnc7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsTUFBTTtJQUNOLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksS0FBSyxnQ0FBZ0MsQ0FBQztJQUN0QyxNQUFNLCtCQUErQixDQUFDO0lBQ3RDLE1BQU0sZ0NBQWdDLENBQUM7SUFDdkMsTUFBTSwrQkFBK0IsQ0FBQztJQUN0QyxPQUFPLGdDQUFnQyxDQUFDO0FBQzVDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucGFnZWJhc2V7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFye1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxcclxcbiAgICB0b3A6IDA7IFxcclxcbiAgICB3aWR0aDogMTAwJTsgXFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciBhIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBjb2xvcjogI2YyZjJmMjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjowLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIGE6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRyYW5zaXRpb246MC4zcztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnRzcGFjZWJhcntcXHJcXG4gICAgd2lkdGg6MzAlO1xcclxcbiAgICBoZWlnaHQ6IDkwdmg7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBtYXJnaW46YXV0bztcXHJcXG4gICAgdHJhbnNpdGlvbjogMS4wcztcXHJcXG59XFxyXFxuXFxyXFxuLmxlZnRzcGFjZWJhci5zaHJpbmt7XFxyXFxuICAgIHdpZHRoOjA7XFxyXFxuICAgIHRyYW5zaXRpb246IDEuMHM7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFye1xcclxcbiAgICB3aWR0aDowJTtcXHJcXG4gICAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnV7XFxyXFxuICAgIGZvbnQtc2l6ZToydnc7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBHYXJhbW9uZDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnU6aG92ZXJ7XFxyXFxuICAgIGNvbG9yOnllbGxvdztcXHJcXG4gICAgdHJhbnNpdGlvbjoxLjBzO1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnV0ZXh0e1xcclxcbiAgICBmb250LXNpemU6MnZ3O1xcclxcbiAgICBmb250LWZhbWlseTogR2FyYW1vbmQ7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuQC13ZWJraXQta2V5ZnJhbWVzIHZpYnJhdGV7XFxyXFxuICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7fVxcclxcbiAgICAyNSUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO31cXHJcXG4gICAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7fVxcclxcbiAgICA3NSUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO31cXHJcXG4gICAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO31cXHJcXG59XFxyXFxuXFxyXFxuI3Byb2ZpbGV7XFxyXFxuICAgIG1hcmdpbi10b3A6NDV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2ZpbGVQaWN0dXJle1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHdpZHRoOiA0MCU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBvcGFjaXR5OiAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI25hbWV7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDN2dztcXHJcXG59XFxyXFxuI3Bvc2l0aW9ue1xcclxcbiAgICBmb250LXNpemU6IDJ2dztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHRzaWRlYmFye1xcclxcbiAgICB3aWR0aDo0NSU7XFxyXFxuICAgIGhlaWdodDogOTB2aDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMS4wcztcXHJcXG4gICAgZmxvYXQ6bGVmdDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZmlsZWNvbnRhaW5lcntcXHJcXG4gICAgbWFyZ2luLXRvcDo0MCU7XFxyXFxufVxcclxcblxcclxcbi5yaWdodHNpZGViYXIuc2hyaW5re1xcclxcbiAgICB3aWR0aDogMCU7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zaXRpb246IDEuMHM7XFxyXFxufVxcclxcbi5mb290ZXJ7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDElO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBmb250LXNpemU6IDEuNXZ3O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbn1cXHJcXG4uZm9vdGVyLnNocmlua3tcXHJcXG4gICAgZm9udC1zaXplOiAwdnc7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js!./src/index.css\n");

/***/ }),

/***/ "./src/asset/github-fill.png":
/*!***********************************!*\
  !*** ./src/asset/github-fill.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"b7d8dcd51cc79954a5ccc63525e21f42.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXQvZ2l0aHViLWZpbGwucG5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZSxxQkFBdUIseUNBQXlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxsZW5jaGV3J3MtcGxheWdyb3VuZC1wcm9qZWN0Ly4vc3JjL2Fzc2V0L2dpdGh1Yi1maWxsLnBuZz82YTAyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiN2Q4ZGNkNTFjYzc5OTU0YTVjY2M2MzUyNWUyMWY0Mi5wbmdcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/asset/github-fill.png\n");

/***/ }),

/***/ "./src/asset/mail-fill.png":
/*!*********************************!*\
  !*** ./src/asset/mail-fill.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"a36a1aec4cd555b01e3eefc36f80e8a4.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXQvbWFpbC1maWxsLnBuZy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUscUJBQXVCLHlDQUF5QyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsbGVuY2hldydzLXBsYXlncm91bmQtcHJvamVjdC8uL3NyYy9hc3NldC9tYWlsLWZpbGwucG5nPzk3OGQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImEzNmExYWVjNGNkNTU1YjAxZTNlZWZjMzZmODBlOGE0LnBuZ1wiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/asset/mail-fill.png\n");

/***/ }),

/***/ "./src/profile.jpg":
/*!*************************!*\
  !*** ./src/profile.jpg ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"ccec2aa208b295784c0abbe312673424.jpg\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS5qcGcuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlFQUFlLHFCQUF1Qix5Q0FBeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGxlbmNoZXcncy1wbGF5Z3JvdW5kLXByb2plY3QvLi9zcmMvcHJvZmlsZS5qcGc/NjRlMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2NlYzJhYTIwOGIyOTU3ODRjMGFiYmUzMTI2NzM0MjQuanBnXCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/profile.jpg\n");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguY3NzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWxsZW5jaGV3J3MtcGxheWdyb3VuZC1wcm9qZWN0Ly4vc3JjL2luZGV4LmNzcz9jZmU0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.css\n");

/***/ }),

/***/ "./src/importFirebase.js":
/*!*******************************!*\
  !*** ./src/importFirebase.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InitializeConfigApp\": () => (/* binding */ InitializeConfigApp)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ \"./node_modules/firebase/analytics/dist/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/index.esm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n// Your web app's Firebase configuration\r\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyCea_feR6gOs-YscoGa5AxVivOgzS_v4mA\",\r\n  authDomain: \"allenchew-s-playground.firebaseapp.com\",\r\n  databaseURL: \"https://allenchew-s-playground-default-rtdb.asia-southeast1.firebasedatabase.app\",\r\n  projectId: \"allenchew-s-playground\",\r\n  storageBucket: \"allenchew-s-playground.appspot.com\",\r\n  messagingSenderId: \"622892395775\",\r\n  appId: \"1:622892395775:web:6e0837fd42769eadb0f0ca\",\r\n  measurementId: \"G-38P5E4RX4X\"\r\n};\r\n\r\n// Initialize Firebase\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst analytics = (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.getAnalytics)(app);\r\n\r\nfunction InitializeConfigApp(newApp){\r\n  newApp = app;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW1wb3J0RmlyZWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkM7QUFDSztBQUN1QjtBQUNIO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBYTtBQUN6QixrQkFBa0IsZ0VBQVk7QUFDOUI7QUFDTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGxlbmNoZXcncy1wbGF5Z3JvdW5kLXByb2plY3QvLi9zcmMvaW1wb3J0RmlyZWJhc2UuanM/MDEyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgeyBnZXRBbmFseXRpY3MgfSBmcm9tIFwiZmlyZWJhc2UvYW5hbHl0aWNzXCI7XHJcbmltcG9ydCB7IGdldERhdGFiYXNlLCBjb25uZWN0RGF0YWJhc2VFbXVsYXRvciB9IGZyb20gXCJmaXJlYmFzZS9kYXRhYmFzZVwiO1xyXG5pbXBvcnQgeyBnZXRTdG9yYWdlLCBjb25uZWN0U3RvcmFnZUVtdWxhdG9yIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuXHJcblxyXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUNlYV9mZVI2Z09zLVlzY29HYTVBeFZpdk9nelNfdjRtQVwiLFxyXG4gIGF1dGhEb21haW46IFwiYWxsZW5jaGV3LXMtcGxheWdyb3VuZC5maXJlYmFzZWFwcC5jb21cIixcclxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL2FsbGVuY2hldy1zLXBsYXlncm91bmQtZGVmYXVsdC1ydGRiLmFzaWEtc291dGhlYXN0MS5maXJlYmFzZWRhdGFiYXNlLmFwcFwiLFxyXG4gIHByb2plY3RJZDogXCJhbGxlbmNoZXctcy1wbGF5Z3JvdW5kXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJhbGxlbmNoZXctcy1wbGF5Z3JvdW5kLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjIyODkyMzk1Nzc1XCIsXHJcbiAgYXBwSWQ6IFwiMTo2MjI4OTIzOTU3NzU6d2ViOjZlMDgzN2ZkNDI3NjllYWRiMGYwY2FcIixcclxuICBtZWFzdXJlbWVudElkOiBcIkctMzhQNUU0Ulg0WFwiXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBhbmFseXRpY3MgPSBnZXRBbmFseXRpY3MoYXBwKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbml0aWFsaXplQ29uZmlnQXBwKG5ld0FwcCl7XHJcbiAgbmV3QXBwID0gYXBwO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/importFirebase.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _importFirebase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./importFirebase.js */ \"./src/importFirebase.js\");\n/* harmony import */ var _profile_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.jpg */ \"./src/profile.jpg\");\n/* harmony import */ var _asset_mail_fill_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./asset/mail-fill.png */ \"./src/asset/mail-fill.png\");\n/* harmony import */ var _asset_github_fill_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asset/github-fill.png */ \"./src/asset/github-fill.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar app;\r\n\r\n(0,_importFirebase_js__WEBPACK_IMPORTED_MODULE_2__.InitializeConfigApp)(app);\r\n\r\nvar backgroundProfile = document.getElementsByClassName(\"profilePicture\");\r\nbackgroundProfile[0].src = _profile_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\r\nbackgroundProfile[0].style.opacity = \"100%\";\r\nbackgroundProfile[0].style.transition = \"1s\";\r\n\r\nsetTimeout(typeText, 1000);\r\n\r\nvar nameField = document.getElementById(\"name\");\r\nvar positionField = document.getElementById(\"position\");\r\nvar profileButton = document.getElementById(\"profile\");\r\nvar portfolioButton = document.getElementById(\"portfolio\");\r\nvar developerBlogButton = document.getElementById(\"developerblog\");\r\nvar contactButton = document.getElementById(\"contact\");\r\nvar emailButton = document.getElementById(\"email\");\r\nvar githubButton = document.getElementById(\"github\");\r\n\r\nvar footer = document.getElementsByClassName(\"footer\");\r\nvar leftSpacebar = document.getElementsByClassName(\"leftspacebar\");\r\nvar rightSidebar = document.getElementsByClassName(\"rightsidebar\");\r\n\r\nvar nameText = \"Allen Chew\";\r\nvar nameTextIndex = 0;\r\n\r\nemailButton.src = _asset_mail_fill_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\r\ngithubButton.src = _asset_github_fill_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\r\n\r\nprofileButton.addEventListener(\"click\",function(){\r\n  console.log(\"clicked\");\r\n  leftSpacebar[0].classList.toggle(\"shrink\");\r\n  rightSidebar[0].classList.toggle(\"shrink\");\r\n});\r\n\r\nprofileButton.addEventListener(\"onmouseenter\",function(){\r\n    var children = Array.from(profileButton.children);\r\n    children.forEach(startAnimation);\r\n});\r\n\r\nprofileButton.addEventListener(\"onmouseleave\",function(){\r\n     var children = Array.from(profileButton.children);\r\n    children.forEach(stopAnimation);\r\n});\r\n\r\nfunction startAnimation(item){\r\n    item.style.animation = \"vibrate 0.2s infinite\";\r\n}\r\n\r\nfunction stopAnimation(item){\r\n    item.style.animation = \"\";\r\n}\r\n\r\nportfolioButton.addEventListener(\"click\",function(){\r\n    \r\n});\r\n\r\ndeveloperBlogButton.addEventListener(\"click\",function(){\r\n  window.location.assign(\"developerblog.html\");\r\n});\r\n\r\nfunction typeText()\r\n{\r\n  if(nameTextIndex< nameText.length)\r\n  {\r\n    nameField.innerHTML += nameText.charAt(nameTextIndex);\r\n    nameTextIndex++;\r\n    setTimeout(typeText,50);\r\n  }else{\r\n    positionField.style.height = \"40px\";\r\n    positionField.style.transition = \"0.5s\";\r\n    setTimeout(showMenu,1000);\r\n  }\r\n}\r\n\r\nfunction showMenu()\r\n{\r\n  var sidebar = document.getElementsByClassName(\"sidebar\");\r\n  sidebar[0].style.width = \"15%\";\r\n  sidebar[0].style.transition = \"1.0s\";\r\n}\r\n\r\n/*function comingSoonAnimation(paragraph){\r\n    var getText = paragraph.innerHTML;\r\n}*/\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUI7QUFDRjtBQUNtQztBQUNiO0FBQ0c7QUFDRztBQUNqRDtBQUNBO0FBQ0E7QUFDQSx1RUFBbUI7QUFDbkI7QUFDQTtBQUNBLDJCQUEyQixvREFBYztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNERBQVM7QUFDM0IsbUJBQW1CLDhEQUFVO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbGxlbmNoZXcncy1wbGF5Z3JvdW5kLXByb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgJy4vaW5kZXguY3NzJztcclxuaW1wb3J0IHtJbml0aWFsaXplQ29uZmlnQXBwfSBmcm9tIFwiLi9pbXBvcnRGaXJlYmFzZS5qc1wiO1xyXG5pbXBvcnQgcHJvZmlsZVBpY3R1cmUgZnJvbSBcIi4vcHJvZmlsZS5qcGdcIjtcclxuaW1wb3J0IGVtYWlsTG9nbyBmcm9tIFwiLi9hc3NldC9tYWlsLWZpbGwucG5nXCI7XHJcbmltcG9ydCBnaXRodWJMb2dvIGZyb20gXCIuL2Fzc2V0L2dpdGh1Yi1maWxsLnBuZ1wiO1xyXG5cclxudmFyIGFwcDtcclxuXHJcbkluaXRpYWxpemVDb25maWdBcHAoYXBwKTtcclxuXHJcbnZhciBiYWNrZ3JvdW5kUHJvZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9maWxlUGljdHVyZVwiKTtcclxuYmFja2dyb3VuZFByb2ZpbGVbMF0uc3JjID0gcHJvZmlsZVBpY3R1cmU7XHJcbmJhY2tncm91bmRQcm9maWxlWzBdLnN0eWxlLm9wYWNpdHkgPSBcIjEwMCVcIjtcclxuYmFja2dyb3VuZFByb2ZpbGVbMF0uc3R5bGUudHJhbnNpdGlvbiA9IFwiMXNcIjtcclxuXHJcbnNldFRpbWVvdXQodHlwZVRleHQsIDEwMDApO1xyXG5cclxudmFyIG5hbWVGaWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZVwiKTtcclxudmFyIHBvc2l0aW9uRmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvc2l0aW9uXCIpO1xyXG52YXIgcHJvZmlsZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZVwiKTtcclxudmFyIHBvcnRmb2xpb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9ydGZvbGlvXCIpO1xyXG52YXIgZGV2ZWxvcGVyQmxvZ0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2ZWxvcGVyYmxvZ1wiKTtcclxudmFyIGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XHJcbnZhciBlbWFpbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIik7XHJcbnZhciBnaXRodWJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdpdGh1YlwiKTtcclxuXHJcbnZhciBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZm9vdGVyXCIpO1xyXG52YXIgbGVmdFNwYWNlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxlZnRzcGFjZWJhclwiKTtcclxudmFyIHJpZ2h0U2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyaWdodHNpZGViYXJcIik7XHJcblxyXG52YXIgbmFtZVRleHQgPSBcIkFsbGVuIENoZXdcIjtcclxudmFyIG5hbWVUZXh0SW5kZXggPSAwO1xyXG5cclxuZW1haWxCdXR0b24uc3JjID0gZW1haWxMb2dvO1xyXG5naXRodWJCdXR0b24uc3JjID0gZ2l0aHViTG9nbztcclxuXHJcbnByb2ZpbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcclxuICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIik7XHJcbiAgbGVmdFNwYWNlYmFyWzBdLmNsYXNzTGlzdC50b2dnbGUoXCJzaHJpbmtcIik7XHJcbiAgcmlnaHRTaWRlYmFyWzBdLmNsYXNzTGlzdC50b2dnbGUoXCJzaHJpbmtcIik7XHJcbn0pO1xyXG5cclxucHJvZmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwib25tb3VzZWVudGVyXCIsZnVuY3Rpb24oKXtcclxuICAgIHZhciBjaGlsZHJlbiA9IEFycmF5LmZyb20ocHJvZmlsZUJ1dHRvbi5jaGlsZHJlbik7XHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKHN0YXJ0QW5pbWF0aW9uKTtcclxufSk7XHJcblxyXG5wcm9maWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJvbm1vdXNlbGVhdmVcIixmdW5jdGlvbigpe1xyXG4gICAgIHZhciBjaGlsZHJlbiA9IEFycmF5LmZyb20ocHJvZmlsZUJ1dHRvbi5jaGlsZHJlbik7XHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKHN0b3BBbmltYXRpb24pO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKGl0ZW0pe1xyXG4gICAgaXRlbS5zdHlsZS5hbmltYXRpb24gPSBcInZpYnJhdGUgMC4ycyBpbmZpbml0ZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wQW5pbWF0aW9uKGl0ZW0pe1xyXG4gICAgaXRlbS5zdHlsZS5hbmltYXRpb24gPSBcIlwiO1xyXG59XHJcblxyXG5wb3J0Zm9saW9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcclxuICAgIFxyXG59KTtcclxuXHJcbmRldmVsb3BlckJsb2dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcclxuICB3aW5kb3cubG9jYXRpb24uYXNzaWduKFwiZGV2ZWxvcGVyYmxvZy5odG1sXCIpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHR5cGVUZXh0KClcclxue1xyXG4gIGlmKG5hbWVUZXh0SW5kZXg8IG5hbWVUZXh0Lmxlbmd0aClcclxuICB7XHJcbiAgICBuYW1lRmllbGQuaW5uZXJIVE1MICs9IG5hbWVUZXh0LmNoYXJBdChuYW1lVGV4dEluZGV4KTtcclxuICAgIG5hbWVUZXh0SW5kZXgrKztcclxuICAgIHNldFRpbWVvdXQodHlwZVRleHQsNTApO1xyXG4gIH1lbHNle1xyXG4gICAgcG9zaXRpb25GaWVsZC5zdHlsZS5oZWlnaHQgPSBcIjQwcHhcIjtcclxuICAgIHBvc2l0aW9uRmllbGQuc3R5bGUudHJhbnNpdGlvbiA9IFwiMC41c1wiO1xyXG4gICAgc2V0VGltZW91dChzaG93TWVudSwxMDAwKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dNZW51KClcclxue1xyXG4gIHZhciBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNpZGViYXJcIik7XHJcbiAgc2lkZWJhclswXS5zdHlsZS53aWR0aCA9IFwiMTUlXCI7XHJcbiAgc2lkZWJhclswXS5zdHlsZS50cmFuc2l0aW9uID0gXCIxLjBzXCI7XHJcbn1cclxuXHJcbi8qZnVuY3Rpb24gY29taW5nU29vbkFuaW1hdGlvbihwYXJhZ3JhcGgpe1xyXG4gICAgdmFyIGdldFRleHQgPSBwYXJhZ3JhcGguaW5uZXJIVE1MO1xyXG59Ki9cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkallenchew_s_playground_project"] = self["webpackChunkallenchew_s_playground_project"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-30763e","vendors-node_modules_lodash_lodash_js"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;