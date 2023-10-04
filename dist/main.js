/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! assets/waterfall-bg.png */ \"./src/assets/waterfall-bg.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! assets/icons/calendar-icon.png */ \"./src/assets/icons/calendar-icon.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@600&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --main-bg-color: rgb(35, 35, 35);\n    --main-color: rgb(255, 255, 255);\n    --medium-color: rgb(45, 45, 45);\n    --clearer-bg-color: rgb(55, 55, 55);\n    --border-radius-unit: 5px;\n    --header-height: 50px;\n    --gap-standard: 20px;\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:focus {\n    outline: none;\n}\n\nbody {\n    background-color: var(--main-bg-color);\n    color: var(--main-color);\n    font-family: 'Inter', sans-serif;\n    height: clamp(350px, 100vh, 100vh);\n    width: 100vw;\n}\n\n.webpage {\n    height: 100%;\n    width: 100%;\n}\n\nheader {\n    font: 1.5em 'Oswald', sans-serif;\n    height: var(--header-height);\n    padding: 0 20px;\n    display: grid;\n    grid-template-columns: 40px 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\nheader>div {\n    display: grid;\n    grid-template-columns: 40px 1fr;\n    align-items: center;\n}\n\n.content {\n    display: grid;\n    grid-template-columns: 1fr;\n}\n\n.sidebar, .list, .details {\n    height: 95vh;\n}\n\n.sidebar {\n    padding: 20px;\n    display: grid;\n    grid-template-rows: 40px 1fr 40px;\n    grid-template-columns: 1fr;\n}\n\n.sidebar>img {\n    display: block;\n    height: 20px;\n    width: 20px;\n    justify-self: end;\n}\n\n.sidebar>ul {\n    font-size: 1.5em;\n    width: 100%;\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.sidebar>ul>li, .sidebar>button {\n    height: 60px;\n    padding: 20px;\n    border-radius: var(--border-radius-unit);\n    align-content: center;\n}\n\n.sidebar>ul>li {\n    display: grid;\n    grid-template-columns: 2em 1fr 1em;\n}\n\n.count {\n    background-color: var(--clearer-bg-color);\n    font-size: 0.7em;\n    height: 25px;\n    width: 25px;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.sidebar>button {\n    background-color: transparent;\n    color: inherit;\n    font-size: 1.3em;\n    text-align: left;\n    border: none;\n}\n\n.list {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}), lightgray 50% / cover no-repeat;\n    background-position: center;\n    padding: 30px;\n    display: grid;\n    grid-template-rows: 40px 1fr 5em;\n    gap: var(--gap-standard);\n}\n\n.list>h1>img {\n    margin-right: 5px;\n}\n\n.list-items {\n    display: flex;\n    flex-direction: column;\n    gap: var(--gap-standard);\n}\n\n.list-item {\n    background-color: var(--main-bg-color);\n    padding: 20px;\n    border-radius: var(--border-radius-unit);\n    display: grid;\n    grid-template-columns: 20px 1fr 30px;\n    gap: var(--gap-standard);\n}\n\n.list-item img {\n    max-width: 20px;\n    max-height: 20px;\n}\n\ninput[type='checkbox'] {\n    background-color: inherit;\n    border-radius: 50%;\n    height: 20px;\n    width: 20px;\n    border: solid 1.5px var(--main-color);\n    appearance: none;\n}\n\ninput[type='checkbox']:hover {\n    background-color: var(--main-bg-color);\n}\n\ninput[type='checkbox']:checked {\n    background-color: var(--main-color);\n}\n\n.task-info {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 5px;\n}\n\nlabel {\n    font-size: 1.3em;\n}\n\n.list-item>div>div {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.task-info>div>p {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n}\n\n.list>div>button {\n    background-color: var(--main-bg-color);\n    color: var(--main-color);\n    position: fixed;\n    bottom: 30px;\n    right: 30px;\n    font-size: 2em;\n    width: 65px;\n    height: 65px;\n    border: none;\n    border-radius: 50%;\n    display: grid;\n    justify-content: center;\n    align-items: center;\n}\n\n.btn-text {\n    display: none;\n}\n\n.details {\n    padding: 20px;\n    display: grid;\n    grid-template-rows: 40px 1fr 40px;\n    justify-items: end;\n    gap: 30px;\n}\n\n.details>div {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 30px;\n}\n\n.details>div>div {\n    background-color: var(--medium-color);\n    padding: 20px;\n    border-radius: var(--border-radius-unit);\n}\n\n.details .item-title {\n    display: grid;\n    grid-template-columns: 40px 1fr 40px;\n    align-items: center;\n}\n\n.details input[type='checkbox'] {\n    width: 30px;\n    height: 30px;\n    border-width: 2px;\n}\n\n.details label, .calendar>p, .add-notes>p {\n    font-size: 1.5em;\n}\n\n.details label:hover {\n    cursor: text;\n}\n\n.calendar {\n    display: grid;\n    grid-template-columns: 40px 1fr; \n    align-items: center;\n}\n\n#date-picker {\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat;\n    height: 120%;\n}\n\ninput[type='date'] {\n    opacity: 0;\n    height: 30px;\n    width: 400px;\n}\n\n::-webkit-calendar-picker-indicator {\n    width: 100%;\n}\n\n.add-notes {\n    font-family: inherit;\n    min-height: 200px;\n    display: grid;\n    grid-template-columns: 40px 1fr;\n    justify-content: start;\n    align-items: start;\n}\n\n@media screen and (max-width: 800px) {\n    .sidebar, .details {\n        display: none;\n    }\n}\n\n/* Desktop version */\n@media screen and (min-width: 800px) {\n    body {\n        overflow: hidden;\n    }\n    header {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    header>img {\n        display: none;\n    }\n    .content {\n        height: calc(100vh - var(--header-height));\n        display: flex;\n        /*grid-template-columns: 0.7fr 2fr 0.9fr;*/\n    }\n    .sidebar, .list, .details {\n        height: 100%;\n    }\n    .sidebar {\n        width: clamp(300px, 20vw, 20vw);\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n    }\n    .sidebar>img {\n        display: none;\n    }\n    .sidebar>ul {\n        gap: 5px;\n    }\n    .sidebar>ul>li>img {\n        height: 1em;\n        width: 1em;\n    }\n    .btn-text {\n        display: inline;\n    }\n    .list {\n        width: clamp(850px, 80vw, 80vw);\n    }\n    .list>div>button {\n        position: relative;\n        bottom: 0;\n        right: 0;\n        text-align: left;\n        font-size: 1.3em;\n        width: 100%;\n        padding: 20px;\n        border-radius: var(--border-radius-unit);\n        grid-template-columns: 1fr;\n        grid-template-columns: 25px 1fr;\n    }\n    .details {\n        width: clamp(310px, 25vw, 25vw);\n    }\n    .details, .details>div {\n        gap: var(--gap-standard);\n    }\n    :is(.sidebar>ul>li, .sidebar>button, .list-item, .list>div>button, .details>div>div):hover {\n        background-color: var(--clearer-bg-color);\n    }\n    :is(.sidebar>ul>li, .sidebar>button, \n    .list-item, .list>div>button, input[type='checkbox'],\n    .star-icon, .details>img):hover {\n        cursor: pointer;\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ \"./src/modules/header.js\");\n/* harmony import */ var _modules_sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sidebar */ \"./src/modules/sidebar.js\");\n/* harmony import */ var _modules_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/list */ \"./src/modules/list.js\");\n/* harmony import */ var _modules_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/details */ \"./src/modules/details.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n\n\n\n\n\n\n\nconst body = document.querySelector('body');\nconst webpage = document.createElement('div');\nconst container = document.createElement('div');\n\nwebpage.setAttribute('class', 'webpage');\ncontainer.setAttribute('class', 'content');\n\nbody.prepend(webpage);\nwebpage.append(_modules_header__WEBPACK_IMPORTED_MODULE_0__.Header.bar, container);\ncontainer.append(_modules_sidebar__WEBPACK_IMPORTED_MODULE_1__.Sidebar.bar, _modules_list__WEBPACK_IMPORTED_MODULE_2__.List.content, _modules_details__WEBPACK_IMPORTED_MODULE_3__.DetailsBar.bar);\n\n\n/*\nconst projects = [];\n\nclass List {\n    constructor(itemsCount, id) {\n        this.itemsCount = itemsCount;\n        this.id = id;\n    }\n}\n\nclass ListItem {\n    constructor(title, dueDate, description, starred, list) {\n        this.title = title;\n        this.dueDate = dueDate;\n        this.description = description;\n        this.starred = starred;\n        this.list = list;\n    }\n}\n\nconst Tasks = new List(0, crypto.randomUUID());\nconsole.log(Tasks);\n*/\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/details.js":
/*!********************************!*\
  !*** ./src/modules/details.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DetailsBar: () => (/* binding */ DetailsBar)\n/* harmony export */ });\n/* harmony import */ var _icons_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons-collection */ \"./src/modules/icons-collection.js\");\n\n\nconst DetailsBar = (()=> {\n    const bar = document.createElement('div');\n    const div = document.createElement('div');\n    const itemTitleContainer = document.createElement('div');\n    const checkbox = document.createElement('input');\n    const label = document.createElement('label');\n    const dueDateSelector = document.createElement('div');\n    const datePicker = document.createElement('span');\n    const dateInput = document.createElement('input');\n    const dateText = document.createElement('p');\n    const addNotes = document.createElement('div');\n    const notes = document.createElement('p');\n\n    bar.setAttribute('class', 'details');\n    itemTitleContainer.setAttribute('class', 'item-title');\n    checkbox.setAttribute('type', 'checkbox');\n    label.setAttribute('contenteditable', 'true');\n    label.textContent = 'Wash dishes';\n    dueDateSelector.setAttribute('class', 'calendar');\n    datePicker.setAttribute('id', 'date-picker');\n    dateInput.setAttribute('type', 'date');\n    dateText.textContent = 'Due today';     // This output depends on the actual due date\n    addNotes.setAttribute('class', 'add-notes');\n    notes.setAttribute('contenteditable', 'true');\n    notes.textContent = 'Don\\'t break one';\n\n    bar.append(_icons_collection__WEBPACK_IMPORTED_MODULE_0__.Icons.xIcon, div, _icons_collection__WEBPACK_IMPORTED_MODULE_0__.Icons.trashIcon);\n    div.append(itemTitleContainer, dueDateSelector, addNotes);\n    itemTitleContainer.append(checkbox, label, _icons_collection__WEBPACK_IMPORTED_MODULE_0__.Icons.starEmptyIcon);\n    dueDateSelector.append(datePicker, dateText);\n    datePicker.append(dateInput);\n    addNotes.append(_icons_collection__WEBPACK_IMPORTED_MODULE_0__.Icons.notesIcon, notes);\n\n    return { \n        bar,\n        checkbox,\n        label\n    };\n})();\n\n//# sourceURL=webpack://todo-list/./src/modules/details.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _icons_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons-collection */ \"./src/modules/icons-collection.js\");\n\n\nconst Header = (() => {\n    const bar = document.createElement('header');\n    const logo = document.createElement('div');\n    const logoText = document.createElement('p');\n\n    logoText.textContent = ' I-Do';\n\n    bar.append(_icons_collection__WEBPACK_IMPORTED_MODULE_0__.Icons.hamburgerMenu, logo);\n    logo.append(_icons_collection__WEBPACK_IMPORTED_MODULE_0__.Icons.tickSignIcon, logoText);\n\n    return { bar };\n})();\n\n//# sourceURL=webpack://todo-list/./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/icons-collection.js":
/*!*****************************************!*\
  !*** ./src/modules/icons-collection.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Icons: () => (/* binding */ Icons)\n/* harmony export */ });\n/* harmony import */ var _assets_icons_hamburger_menu_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/hamburger-menu-icon.png */ \"./src/assets/icons/hamburger-menu-icon.png\");\n/* harmony import */ var _assets_icons_tick_circle_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/tick-circle-icon.png */ \"./src/assets/icons/tick-circle-icon.png\");\n/* harmony import */ var _assets_icons_x_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/x-icon.png */ \"./src/assets/icons/x-icon.png\");\n/* harmony import */ var _assets_icons_home_icon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/home-icon.png */ \"./src/assets/icons/home-icon.png\");\n/* harmony import */ var _assets_icons_star_icon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/star-icon.png */ \"./src/assets/icons/star-icon.png\");\n/* harmony import */ var _assets_icons_star_filled_icon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/star-filled-icon.png */ \"./src/assets/icons/star-filled-icon.png\");\n/* harmony import */ var _assets_icons_trash_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/trash-icon.png */ \"./src/assets/icons/trash-icon.png\");\n/* harmony import */ var _assets_icons_calendar_icon_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/calendar-icon.png */ \"./src/assets/icons/calendar-icon.png\");\n/* harmony import */ var _assets_icons_notes_icon_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/notes-icon.png */ \"./src/assets/icons/notes-icon.png\");\n/* This module is a collection of icons created to be inserted in the DOM */\n\n\n\n\n\n\n\n\n\n\n\nconst Icons = (() => {\n    const hamburgerMenu = document.createElement('img');\n    const tickSignIcon = document.createElement('img');\n    const xIcon = document.createElement('img');\n    const houseIcon = document.createElement('img');\n    const starEmptyIcon = document.createElement('img');\n    const starFilledIcon = document.createElement('img');\n    const trashIcon = document.createElement('img');\n    const calendarIcon = document.createElement('img');\n    const notesIcon = document.createElement('img');\n\n    hamburgerMenu.setAttribute('src', _assets_icons_hamburger_menu_icon_png__WEBPACK_IMPORTED_MODULE_0__);\n    tickSignIcon.setAttribute('src', _assets_icons_tick_circle_icon_png__WEBPACK_IMPORTED_MODULE_1__);\n    xIcon.setAttribute('src', _assets_icons_x_icon_png__WEBPACK_IMPORTED_MODULE_2__);\n    houseIcon.setAttribute('src', _assets_icons_home_icon_png__WEBPACK_IMPORTED_MODULE_3__);\n    starEmptyIcon.setAttribute('src', _assets_icons_star_icon_png__WEBPACK_IMPORTED_MODULE_4__);\n    starFilledIcon.setAttribute('src', _assets_icons_star_filled_icon_png__WEBPACK_IMPORTED_MODULE_5__);\n    starEmptyIcon.setAttribute('class', 'star-icon');\n    starFilledIcon.setAttribute('class', 'star-icon');\n    trashIcon.setAttribute('src', _assets_icons_trash_icon_png__WEBPACK_IMPORTED_MODULE_6__);\n    calendarIcon.setAttribute('src', _assets_icons_calendar_icon_png__WEBPACK_IMPORTED_MODULE_7__);\n    notesIcon.setAttribute('src', _assets_icons_notes_icon_png__WEBPACK_IMPORTED_MODULE_8__);\n\n    return {\n        hamburgerMenu, \n        tickSignIcon, \n        xIcon, \n        houseIcon, \n        starEmptyIcon, \n        starFilledIcon,\n        trashIcon,\n        calendarIcon,\n        notesIcon\n    };\n})();\n\n//# sourceURL=webpack://todo-list/./src/modules/icons-collection.js?");

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   List: () => (/* binding */ List)\n/* harmony export */ });\n/* harmony import */ var _icons_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons-collection */ \"./src/modules/icons-collection.js\");\n\n\nconst List = (()=> {\n    const content = document.createElement('div');\n    const title = document.createElement('h1');\n    const titleText = document.createElement('span');\n    const itemsContainer = document.createElement('div');\n    const item = document.createElement('div');\n    const checkbox = document.createElement('input');\n    const taskInfo = document.createElement('div');\n    const itemLabel = document.createElement('label');\n    const infoGroup = document.createElement('div');\n    const dateInfo = document.createElement('p');\n    const lineDivider = document.createElement('span');\n    const addTaskDiv = document.createElement('div');\n    const btn = document.createElement('button');\n    const btnText = document.createElement('span');\n\n    content.setAttribute('class', 'list');\n    titleText.setAttribute('contenteditable', 'true');\n    titleText.textContent = 'Tasks';\n    itemsContainer.setAttribute('class', 'list-items');\n    item.setAttribute('class', 'list-item');\n    checkbox.setAttribute('type', 'checkbox');\n    taskInfo.setAttribute('class', 'task-info');\n    dateInfo.textContent = 'Due today';\n    itemLabel.textContent = 'Wash dishes';\n    lineDivider.setAttribute('class', 'divider');\n    lineDivider.textContent = ' | ';\n    btn.textContent = '+';\n    btnText.setAttribute('class', 'btn-text');\n    btnText.textContent = ' New Task';\n\n    content.append(title, itemsContainer, addTaskDiv);\n    title.append(_icons_collection__WEBPACK_IMPORTED_MODULE_0__.Icons.houseIcon, titleText);\n    itemsContainer.append(item);\n    item.append(checkbox, taskInfo, _icons_collection__WEBPACK_IMPORTED_MODULE_0__.Icons.starFilledIcon);\n    taskInfo.append(itemLabel, infoGroup);\n    infoGroup.append(dateInfo, _icons_collection__WEBPACK_IMPORTED_MODULE_0__.Icons.notesIcon);\n    dateInfo.prepend(_icons_collection__WEBPACK_IMPORTED_MODULE_0__.Icons.calendarIcon);\n    dateInfo.append(lineDivider);\n    addTaskDiv.append(btn);\n    btn.append(btnText);\n\n    return { \n        content,\n        item\n    };\n})();\n\n//# sourceURL=webpack://todo-list/./src/modules/list.js?");

/***/ }),

/***/ "./src/modules/sidebar.js":
/*!********************************!*\
  !*** ./src/modules/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Sidebar: () => (/* binding */ Sidebar)\n/* harmony export */ });\n/* harmony import */ var _icons_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons-collection */ \"./src/modules/icons-collection.js\");\n\n\nconst Sidebar = (() => {\n    const bar = document.createElement('div');\n    const listsContainer = document.createElement('ul');\n    const tasksList = document.createElement('li');\n    const taskText = document.createElement('span');\n    const taskCount = document.createElement('span');\n    const importantList = document.createElement('li');\n    const importantText = document.createElement('span');\n    const importantCount = document.createElement('span');\n    const completedList = document.createElement('li');\n    const completedText = document.createElement('span');\n    const completedCount = document.createElement('span');\n    const newListBtn = document.createElement('button');\n\n    bar.setAttribute('class', 'sidebar');\n    taskText.textContent = 'Tasks';\n    taskCount.setAttribute('class', 'count');\n    taskCount.textContent = '3';        // This count will be different based on the quantity of tasks in that list\n    importantText.textContent = 'Important';\n    importantCount.setAttribute('class', 'count');\n    importantCount.textContent = '1';   // This count will be different based on the quantity of tasks in that list\n    completedText.textContent = 'Completed';\n    completedCount.setAttribute('class', 'count');\n    completedCount.textContent = '1'    // This count will be different based on the quantity of tasks in that list\n    newListBtn.textContent = '+ New List';\n\n    bar.append(_icons_collection__WEBPACK_IMPORTED_MODULE_0__.Icons.xIcon, listsContainer, newListBtn);\n    listsContainer.append(tasksList, importantList, completedList);\n    tasksList.append(_icons_collection__WEBPACK_IMPORTED_MODULE_0__.Icons.houseIcon, taskText, taskCount);\n    importantList.append(_icons_collection__WEBPACK_IMPORTED_MODULE_0__.Icons.starEmptyIcon, importantText, importantCount);\n    completedList.append(_icons_collection__WEBPACK_IMPORTED_MODULE_0__.Icons.trashIcon, completedText, completedCount);\n    \n    return { bar };\n})();\n\n//# sourceURL=webpack://todo-list/./src/modules/sidebar.js?");

/***/ }),

/***/ "./src/assets/icons/calendar-icon.png":
/*!********************************************!*\
  !*** ./src/assets/icons/calendar-icon.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bfd6d16c35cad042384c.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/calendar-icon.png?");

/***/ }),

/***/ "./src/assets/icons/hamburger-menu-icon.png":
/*!**************************************************!*\
  !*** ./src/assets/icons/hamburger-menu-icon.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0e56c8b247cf5d4f7cd0.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/hamburger-menu-icon.png?");

/***/ }),

/***/ "./src/assets/icons/home-icon.png":
/*!****************************************!*\
  !*** ./src/assets/icons/home-icon.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0d769cd9ed66e0538118.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/home-icon.png?");

/***/ }),

/***/ "./src/assets/icons/notes-icon.png":
/*!*****************************************!*\
  !*** ./src/assets/icons/notes-icon.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1ce0f5b2f0d39513e81b.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/notes-icon.png?");

/***/ }),

/***/ "./src/assets/icons/star-filled-icon.png":
/*!***********************************************!*\
  !*** ./src/assets/icons/star-filled-icon.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a251724ff776f4061bad.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/star-filled-icon.png?");

/***/ }),

/***/ "./src/assets/icons/star-icon.png":
/*!****************************************!*\
  !*** ./src/assets/icons/star-icon.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9773281f6e66056a9636.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/star-icon.png?");

/***/ }),

/***/ "./src/assets/icons/tick-circle-icon.png":
/*!***********************************************!*\
  !*** ./src/assets/icons/tick-circle-icon.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"30c46f6e3fe00d86b672.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/tick-circle-icon.png?");

/***/ }),

/***/ "./src/assets/icons/trash-icon.png":
/*!*****************************************!*\
  !*** ./src/assets/icons/trash-icon.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a06a541ba837d3fc8408.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/trash-icon.png?");

/***/ }),

/***/ "./src/assets/icons/x-icon.png":
/*!*************************************!*\
  !*** ./src/assets/icons/x-icon.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"448c86e1d2c4e19a86b8.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/icons/x-icon.png?");

/***/ }),

/***/ "./src/assets/waterfall-bg.png":
/*!*************************************!*\
  !*** ./src/assets/waterfall-bg.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f6ebd87f2ce634ad0c0c.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/waterfall-bg.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;