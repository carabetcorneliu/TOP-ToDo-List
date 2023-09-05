/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    margin: 0;
    background-color: #f8f1e5;
}

.bodyContainer {}

.headerContainer {
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    padding-left: 10px;


    display: flex;
    align-items: center;

    font-size: 3rem;
    font-weight: bolder;
    color: white;
    background-color: #14a098;
}

.pageContainer {
    box-sizing: border-box;
    width: 100%;

    display: grid;
    grid-template-columns: 300px auto;
}

.sidebarContainer {
    box-sizing: border-box;
    padding-top: 10%;

    color: rgb(70, 70, 70);
}

.nav>label {
    color: #14a098;
    font-style: italic;
}

.nav {
    list-style: none;
}

.nav section {
    padding-left: 20px;
    padding-bottom: 5px;
}

.nav li {
    padding-bottom: 0.5rem;
    font-size: 2rem;
}

.nav button {
    border: none;
    background: none;
    padding: 0;
    color: inherit;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}

.mainContainer {
    padding-top: 50px;
    padding-left: 50px;
    box-sizing: border-box;
}

.mainContainer>table {
    width: 1000px;
    border-collapse: collapse;
    border: 2px solid rgb(200, 200, 200);
    letter-spacing: 1px;
    font-size: 0.8rem;
}

.mainContainer td,
th {
    border: 1px solid rgb(190, 190, 190);
    padding: 10px 20px;
}

.mainContainer th {
    background-color: rgba(235, 235, 235, 0.5);
}

.mainContainer td {
    text-align: center;
}

.mainContainer tr:nth-child(even) td {
    background-color: rgba(250, 250, 250, 0.5);
}

.mainContainer>tr:nth-child(odd) td {
    background-color: rgba(245, 245, 245, 0.5);
}

.mainContainer caption {
    padding: 10px;
}

.mainContainer thead {
    font-weight: bold;
}

.blur {
    filter: blur(10px); 
    -webkit-filter: blur(10px); 
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='10');
    overflow:hidden;
}

.hidden {
    visibility: hidden;
}

.boxAdd {
    position: absolute;
    width: 1000px;
    height: 680px;
    top: 50%;
    left: 50%;
    margin-top: -340px;     /* 50% height */
    margin-left: -500px;    /* 50% width */
    background-color: #14a098;
    border: 2px solid rgb(70, 70, 70);

    display: grid;
    padding-left: 20px;
}

.formRow {
    display: flex;
    flex-direction: row;
    gap: 10%;
}

.formRowDouble {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 70%;
}

.formRowDouble textarea {
    font: 1em, sans-serif;
    border: 1px solid #E5E7EB;
    padding-left: 5px;
    border-radius: 5px;
}

.formCol {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
}

.submit button {
    margin-top: 20px;
    margin-left: 60%;
    width: 10%;
}

.boxAdd form > legend {
    padding: 4% 0 2% 0;
    font-size: calc(10px + 1vw/2 + 1vh);
    font-weight: 525;
}

.boxAdd input,
.boxAdd select {
    font: 1em, sans-serif;
    border: 1px solid #E5E7EB;
    height: 2em;
    padding-left: 5px;
    border-radius: 5px;
}

.boxAdd input:focus,
.boxAdd select:focus,
.boxAdd textarea:focus {
    box-shadow: 1px 2px 4px 1px rgb(63, 63, 245);
}

.boxAdd label {
    display: inline-block;
    width: 300px;
    text-align: left;
    font-size: calc(7px + 1vw/4 + 1vh/2);
}

.footerContainer {
    box-sizing: border-box;
    position: fixed;
    bottom: 0%;

    height: 60px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-weight: 525;
    color: #f8f1e5;
    background-color: #14a098;
}

.footerContainer > p {
    margin: 0;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,yBAAyB;AAC7B;;AAEA,gBAAgB;;AAEhB;IACI,sBAAsB;IACtB,WAAW;IACX,aAAa;IACb,kBAAkB;;;IAGlB,aAAa;IACb,mBAAmB;;IAEnB,eAAe;IACf,mBAAmB;IACnB,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;IACtB,WAAW;;IAEX,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,sBAAsB;IACtB,gBAAgB;;IAEhB,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,UAAU;IACV,cAAc;IACd,aAAa;IACb,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,oCAAoC;IACpC,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;;IAEI,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,0BAA0B;IAC1B,uBAAuB;IACvB,qBAAqB;IACrB,sBAAsB;IACtB,+DAA+D;IAC/D,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,QAAQ;IACR,SAAS;IACT,kBAAkB,MAAM,eAAe;IACvC,mBAAmB,KAAK,cAAc;IACtC,yBAAyB;IACzB,iCAAiC;;IAEjC,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,mCAAmC;IACnC,gBAAgB;AACpB;;AAEA;;IAEI,qBAAqB;IACrB,yBAAyB;IACzB,WAAW;IACX,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;;;IAGI,4CAA4C;AAChD;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,gBAAgB;IAChB,oCAAoC;AACxC;;AAEA;IACI,sBAAsB;IACtB,eAAe;IACf,UAAU;;IAEV,YAAY;IACZ,WAAW;;IAEX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;;IAEnB,gBAAgB;IAChB,cAAc;IACd,yBAAyB;AAC7B;;AAEA;IACI,SAAS;AACb","sourcesContent":["body {\n    margin: 0;\n    background-color: #f8f1e5;\n}\n\n.bodyContainer {}\n\n.headerContainer {\n    box-sizing: border-box;\n    width: 100%;\n    height: 100px;\n    padding-left: 10px;\n\n\n    display: flex;\n    align-items: center;\n\n    font-size: 3rem;\n    font-weight: bolder;\n    color: white;\n    background-color: #14a098;\n}\n\n.pageContainer {\n    box-sizing: border-box;\n    width: 100%;\n\n    display: grid;\n    grid-template-columns: 300px auto;\n}\n\n.sidebarContainer {\n    box-sizing: border-box;\n    padding-top: 10%;\n\n    color: rgb(70, 70, 70);\n}\n\n.nav>label {\n    color: #14a098;\n    font-style: italic;\n}\n\n.nav {\n    list-style: none;\n}\n\n.nav section {\n    padding-left: 20px;\n    padding-bottom: 5px;\n}\n\n.nav li {\n    padding-bottom: 0.5rem;\n    font-size: 2rem;\n}\n\n.nav button {\n    border: none;\n    background: none;\n    padding: 0;\n    color: inherit;\n    font: inherit;\n    cursor: pointer;\n    outline: inherit;\n}\n\n.mainContainer {\n    padding-top: 50px;\n    padding-left: 50px;\n    box-sizing: border-box;\n}\n\n.mainContainer>table {\n    width: 1000px;\n    border-collapse: collapse;\n    border: 2px solid rgb(200, 200, 200);\n    letter-spacing: 1px;\n    font-size: 0.8rem;\n}\n\n.mainContainer td,\nth {\n    border: 1px solid rgb(190, 190, 190);\n    padding: 10px 20px;\n}\n\n.mainContainer th {\n    background-color: rgba(235, 235, 235, 0.5);\n}\n\n.mainContainer td {\n    text-align: center;\n}\n\n.mainContainer tr:nth-child(even) td {\n    background-color: rgba(250, 250, 250, 0.5);\n}\n\n.mainContainer>tr:nth-child(odd) td {\n    background-color: rgba(245, 245, 245, 0.5);\n}\n\n.mainContainer caption {\n    padding: 10px;\n}\n\n.mainContainer thead {\n    font-weight: bold;\n}\n\n.blur {\n    filter: blur(10px); \n    -webkit-filter: blur(10px); \n    -moz-filter: blur(10px);\n    -o-filter: blur(10px);\n    -ms-filter: blur(10px);\n    filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius='10');\n    overflow:hidden;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.boxAdd {\n    position: absolute;\n    width: 1000px;\n    height: 680px;\n    top: 50%;\n    left: 50%;\n    margin-top: -340px;     /* 50% height */\n    margin-left: -500px;    /* 50% width */\n    background-color: #14a098;\n    border: 2px solid rgb(70, 70, 70);\n\n    display: grid;\n    padding-left: 20px;\n}\n\n.formRow {\n    display: flex;\n    flex-direction: row;\n    gap: 10%;\n}\n\n.formRowDouble {\n    display: flex;\n    flex-direction: column;\n    margin-top: 20px;\n    width: 70%;\n}\n\n.formRowDouble textarea {\n    font: 1em, sans-serif;\n    border: 1px solid #E5E7EB;\n    padding-left: 5px;\n    border-radius: 5px;\n}\n\n.formCol {\n    display: flex;\n    flex-direction: column;\n    padding: 10px 0;\n}\n\n.submit button {\n    margin-top: 20px;\n    margin-left: 60%;\n    width: 10%;\n}\n\n.boxAdd form > legend {\n    padding: 4% 0 2% 0;\n    font-size: calc(10px + 1vw/2 + 1vh);\n    font-weight: 525;\n}\n\n.boxAdd input,\n.boxAdd select {\n    font: 1em, sans-serif;\n    border: 1px solid #E5E7EB;\n    height: 2em;\n    padding-left: 5px;\n    border-radius: 5px;\n}\n\n.boxAdd input:focus,\n.boxAdd select:focus,\n.boxAdd textarea:focus {\n    box-shadow: 1px 2px 4px 1px rgb(63, 63, 245);\n}\n\n.boxAdd label {\n    display: inline-block;\n    width: 300px;\n    text-align: left;\n    font-size: calc(7px + 1vw/4 + 1vh/2);\n}\n\n.footerContainer {\n    box-sizing: border-box;\n    position: fixed;\n    bottom: 0%;\n\n    height: 60px;\n    width: 100%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    font-weight: 525;\n    color: #f8f1e5;\n    background-color: #14a098;\n}\n\n.footerContainer > p {\n    margin: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addToDo.js":
/*!************************!*\
  !*** ./src/addToDo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddToDo: () => (/* binding */ AddToDo)
/* harmony export */ });
const AddToDo = (() => {
    
    console.log('123')
})

/***/ }),

/***/ "./src/mainContainer.js":
/*!******************************!*\
  !*** ./src/mainContainer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainContainer: () => (/* binding */ MainContainer)
/* harmony export */ });
const MainContainer = (() => {
    const toDoList = []

    class ToDo {
        constructor(title, description, dueDate, project, priority, notes) {
            this.title = title
            this.description = description
            this.dueDate = dueDate
            this.project = project
            this.priority = priority
            this.notes = notes
            toDoList.push(this)
            localStorage.setItem(this.title, JSON.stringify(this))
        }
    }
    
    const firstToDo = new ToDo('1', 'one', '23.08.2023', 'current', 'high',
                                'no notes now')


    for(let index in toDoList) {

        console.log(JSON.parse(localStorage.getItem(toDoList[index].title)))
    }
})

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _mainContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainContainer.js */ "./src/mainContainer.js");
/* harmony import */ var _addToDo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addToDo.js */ "./src/addToDo.js");




(0,_mainContainer_js__WEBPACK_IMPORTED_MODULE_1__.MainContainer)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLGNBQWMsV0FBVyxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxzQkFBc0IsdUJBQXVCLGFBQWEsY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9B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QTs7Ozs7Ozs7Ozs7Ozs7QUNiTztBQUNQO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ0hNO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7O1VDeEJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUN5QztBQUNoQjs7QUFFN0MsZ0VBQU8sRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC8uL3NyYy9hZGRUb0RvLmpzIiwid2VicGFjazovL3RvcC10b2RvLWxpc3QvLi9zcmMvbWFpbkNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b3AtdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjFlNTtcbn1cblxuLmJvZHlDb250YWluZXIge31cblxuLmhlYWRlckNvbnRhaW5lciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcblxuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNGEwOTg7XG59XG5cbi5wYWdlQ29udGFpbmVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IGF1dG87XG59XG5cbi5zaWRlYmFyQ29udGFpbmVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmctdG9wOiAxMCU7XG5cbiAgICBjb2xvcjogcmdiKDcwLCA3MCwgNzApO1xufVxuXG4ubmF2PmxhYmVsIHtcbiAgICBjb2xvcjogIzE0YTA5ODtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5uYXYge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5uYXYgc2VjdGlvbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5uYXYgbGkge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4ubmF2IGJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBmb250OiBpbmhlcml0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBpbmhlcml0O1xufVxuXG4ubWFpbkNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tYWluQ29udGFpbmVyPnRhYmxlIHtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDIwMCwgMjAwLCAyMDApO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi5tYWluQ29udGFpbmVyIHRkLFxudGgge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTAsIDE5MCwgMTkwKTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbi5tYWluQ29udGFpbmVyIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNSwgMjM1LCAyMzUsIDAuNSk7XG59XG5cbi5tYWluQ29udGFpbmVyIHRkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYWluQ29udGFpbmVyIHRyOm50aC1jaGlsZChldmVuKSB0ZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjUpO1xufVxuXG4ubWFpbkNvbnRhaW5lcj50cjpudGgtY2hpbGQob2RkKSB0ZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjUpO1xufVxuXG4ubWFpbkNvbnRhaW5lciBjYXB0aW9uIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWFpbkNvbnRhaW5lciB0aGVhZCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ibHVyIHtcbiAgICBmaWx0ZXI6IGJsdXIoMTBweCk7IFxuICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDEwcHgpOyBcbiAgICAtbW96LWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICAtby1maWx0ZXI6IGJsdXIoMTBweCk7XG4gICAgLW1zLWZpbHRlcjogYmx1cigxMHB4KTtcbiAgICBmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJsdXIoUGl4ZWxSYWRpdXM9JzEwJyk7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xufVxuXG4uaGlkZGVuIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5ib3hBZGQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwMHB4O1xuICAgIGhlaWdodDogNjgwcHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0zNDBweDsgICAgIC8qIDUwJSBoZWlnaHQgKi9cbiAgICBtYXJnaW4tbGVmdDogLTUwMHB4OyAgICAvKiA1MCUgd2lkdGggKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTRhMDk4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig3MCwgNzAsIDcwKTtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuXG4uZm9ybVJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMTAlO1xufVxuXG4uZm9ybVJvd0RvdWJsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgd2lkdGg6IDcwJTtcbn1cblxuLmZvcm1Sb3dEb3VibGUgdGV4dGFyZWEge1xuICAgIGZvbnQ6IDFlbSwgc2Fucy1zZXJpZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTVFN0VCO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmZvcm1Db2wge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5zdWJtaXQgYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XG4gICAgd2lkdGg6IDEwJTtcbn1cblxuLmJveEFkZCBmb3JtID4gbGVnZW5kIHtcbiAgICBwYWRkaW5nOiA0JSAwIDIlIDA7XG4gICAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAxdncvMiArIDF2aCk7XG4gICAgZm9udC13ZWlnaHQ6IDUyNTtcbn1cblxuLmJveEFkZCBpbnB1dCxcbi5ib3hBZGQgc2VsZWN0IHtcbiAgICBmb250OiAxZW0sIHNhbnMtc2VyaWY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0U1RTdFQjtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5ib3hBZGQgaW5wdXQ6Zm9jdXMsXG4uYm94QWRkIHNlbGVjdDpmb2N1cyxcbi5ib3hBZGQgdGV4dGFyZWE6Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggNHB4IDFweCByZ2IoNjMsIDYzLCAyNDUpO1xufVxuXG4uYm94QWRkIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiBjYWxjKDdweCArIDF2dy80ICsgMXZoLzIpO1xufVxuXG4uZm9vdGVyQ29udGFpbmVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDAlO1xuXG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBmb250LXdlaWdodDogNTI1O1xuICAgIGNvbG9yOiAjZjhmMWU1O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNGEwOTg7XG59XG5cbi5mb290ZXJDb250YWluZXIgPiBwIHtcbiAgICBtYXJnaW46IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULHlCQUF5QjtBQUM3Qjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCOzs7SUFHbEIsYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7O0lBRVgsYUFBYTtJQUNiLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7O0lBRWhCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixjQUFjO0lBQ2QsYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLCtEQUErRDtJQUMvRCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhO0lBQ2IsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0IsTUFBTSxlQUFlO0lBQ3ZDLG1CQUFtQixLQUFLLGNBQWM7SUFDdEMseUJBQXlCO0lBQ3pCLGlDQUFpQzs7SUFFakMsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFVBQVU7O0lBRVYsWUFBWTtJQUNaLFdBQVc7O0lBRVgsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmMWU1O1xcbn1cXG5cXG4uYm9keUNvbnRhaW5lciB7fVxcblxcbi5oZWFkZXJDb250YWluZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcblxcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0YTA5ODtcXG59XFxuXFxuLnBhZ2VDb250YWluZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBhdXRvO1xcbn1cXG5cXG4uc2lkZWJhckNvbnRhaW5lciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmctdG9wOiAxMCU7XFxuXFxuICAgIGNvbG9yOiByZ2IoNzAsIDcwLCA3MCk7XFxufVxcblxcbi5uYXY+bGFiZWwge1xcbiAgICBjb2xvcjogIzE0YTA5ODtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubmF2IHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm5hdiBzZWN0aW9uIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4ubmF2IGxpIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubmF2IGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgb3V0bGluZTogaW5oZXJpdDtcXG59XFxuXFxuLm1haW5Db250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4ubWFpbkNvbnRhaW5lcj50YWJsZSB7XFxuICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyMDAsIDIwMCwgMjAwKTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi5tYWluQ29udGFpbmVyIHRkLFxcbnRoIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5MCwgMTkwLCAxOTApO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi5tYWluQ29udGFpbmVyIHRoIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzUsIDIzNSwgMjM1LCAwLjUpO1xcbn1cXG5cXG4ubWFpbkNvbnRhaW5lciB0ZCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW5Db250YWluZXIgdHI6bnRoLWNoaWxkKGV2ZW4pIHRkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjUpO1xcbn1cXG5cXG4ubWFpbkNvbnRhaW5lcj50cjpudGgtY2hpbGQob2RkKSB0ZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC41KTtcXG59XFxuXFxuLm1haW5Db250YWluZXIgY2FwdGlvbiB7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5tYWluQ29udGFpbmVyIHRoZWFkIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5ibHVyIHtcXG4gICAgZmlsdGVyOiBibHVyKDEwcHgpOyBcXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMTBweCk7IFxcbiAgICAtbW96LWZpbHRlcjogYmx1cigxMHB4KTtcXG4gICAgLW8tZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICAtbXMtZmlsdGVyOiBibHVyKDEwcHgpO1xcbiAgICBmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkJsdXIoUGl4ZWxSYWRpdXM9JzEwJyk7XFxuICAgIG92ZXJmbG93OmhpZGRlbjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmJveEFkZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMDBweDtcXG4gICAgaGVpZ2h0OiA2ODBweDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgbWFyZ2luLXRvcDogLTM0MHB4OyAgICAgLyogNTAlIGhlaWdodCAqL1xcbiAgICBtYXJnaW4tbGVmdDogLTUwMHB4OyAgICAvKiA1MCUgd2lkdGggKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0YTA5ODtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDcwLCA3MCwgNzApO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi5mb3JtUm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAxMCU7XFxufVxcblxcbi5mb3JtUm93RG91YmxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLmZvcm1Sb3dEb3VibGUgdGV4dGFyZWEge1xcbiAgICBmb250OiAxZW0sIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFNUU3RUI7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5mb3JtQ29sIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG4uc3VibWl0IGJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA2MCU7XFxuICAgIHdpZHRoOiAxMCU7XFxufVxcblxcbi5ib3hBZGQgZm9ybSA+IGxlZ2VuZCB7XFxuICAgIHBhZGRpbmc6IDQlIDAgMiUgMDtcXG4gICAgZm9udC1zaXplOiBjYWxjKDEwcHggKyAxdncvMiArIDF2aCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MjU7XFxufVxcblxcbi5ib3hBZGQgaW5wdXQsXFxuLmJveEFkZCBzZWxlY3Qge1xcbiAgICBmb250OiAxZW0sIHNhbnMtc2VyaWY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFNUU3RUI7XFxuICAgIGhlaWdodDogMmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uYm94QWRkIGlucHV0OmZvY3VzLFxcbi5ib3hBZGQgc2VsZWN0OmZvY3VzLFxcbi5ib3hBZGQgdGV4dGFyZWE6Zm9jdXMge1xcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDRweCAxcHggcmdiKDYzLCA2MywgMjQ1KTtcXG59XFxuXFxuLmJveEFkZCBsYWJlbCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IGNhbGMoN3B4ICsgMXZ3LzQgKyAxdmgvMik7XFxufVxcblxcbi5mb290ZXJDb250YWluZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMCU7XFxuXFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBmb250LXdlaWdodDogNTI1O1xcbiAgICBjb2xvcjogI2Y4ZjFlNTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE0YTA5ODtcXG59XFxuXFxuLmZvb3RlckNvbnRhaW5lciA+IHAge1xcbiAgICBtYXJnaW46IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgQWRkVG9EbyA9ICgoKSA9PiB7XG4gICAgXG4gICAgY29uc29sZS5sb2coJzEyMycpXG59KSIsImV4cG9ydCBjb25zdCBNYWluQ29udGFpbmVyID0gKCgpID0+IHtcbiAgICBjb25zdCB0b0RvTGlzdCA9IFtdXG5cbiAgICBjbGFzcyBUb0RvIHtcbiAgICAgICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0LCBwcmlvcml0eSwgbm90ZXMpIHtcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZVxuICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XG4gICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICAgICAgICAgIHRoaXMubm90ZXMgPSBub3Rlc1xuICAgICAgICAgICAgdG9Eb0xpc3QucHVzaCh0aGlzKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy50aXRsZSwgSlNPTi5zdHJpbmdpZnkodGhpcykpXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgY29uc3QgZmlyc3RUb0RvID0gbmV3IFRvRG8oJzEnLCAnb25lJywgJzIzLjA4LjIwMjMnLCAnY3VycmVudCcsICdoaWdoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ25vIG5vdGVzIG5vdycpXG5cblxuICAgIGZvcihsZXQgaW5kZXggaW4gdG9Eb0xpc3QpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRvRG9MaXN0W2luZGV4XS50aXRsZSkpKVxuICAgIH1cbn0pIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0IHsgTWFpbkNvbnRhaW5lciBhcyBjb250ZW50IH0gZnJvbSAnLi9tYWluQ29udGFpbmVyLmpzJ1xuaW1wb3J0IHsgQWRkVG9EbyBhcyBhZGQgfSBmcm9tICcuL2FkZFRvRG8uanMnXG5cbmNvbnRlbnQoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==