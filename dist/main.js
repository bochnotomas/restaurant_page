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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page_load */ \"./src/modules/page_load.js\");\n/* harmony import */ var _modules_display_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display_menu */ \"./src/modules/display_menu.js\");\n/* harmony import */ var _modules_display_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display_contact */ \"./src/modules/display_contact.js\");\n/* harmony import */ var _modules_display_about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/display_about */ \"./src/modules/display_about.js\");\n\r\n\r\n\r\n\r\n\r\nfunction homePage() {\r\n    //homePage build load\r\n    (0,_modules_page_load__WEBPACK_IMPORTED_MODULE_0__.default)()\r\n\r\n    const menu = document.querySelector(\"#menu\")\r\n    const contact = document.querySelector(\"#contact\")\r\n    const aboutUs = document.querySelector(\"#about\")\r\n\r\n    menu.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        ;(0,_modules_display_menu__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n        const menu_section = document.querySelector('#menu_section')\r\n        menu_section.scrollIntoView()\r\n    })\r\n    contact.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        ;(0,_modules_display_contact__WEBPACK_IMPORTED_MODULE_2__.default)()\r\n        const contact_section = document.querySelector('#contact_section')\r\n        contact_section.scrollIntoView()\r\n    })\r\n\r\n    aboutUs.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        ;(0,_modules_display_about__WEBPACK_IMPORTED_MODULE_3__.default)()\r\n        const contact_section = document.querySelector('#contact_section')\r\n        contact_section.scrollIntoView()\r\n    })\r\n}\r\n\r\nhomePage()\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/modules/display_about.js":
/*!**************************************!*\
  !*** ./src/modules/display_about.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayAbout() {\r\n    const main = document.querySelector(\"main\")\r\n    main.innerHTML = \"\"\r\n    const section = document.createElement('section')\r\n    section.id = \"contact_section\"\r\n    const article = document.createElement('div')\r\n    article.classList.add('article')\r\n\r\n\r\n    const article_header = document.createElement('h1')\r\n    article_header.innerText = \"About us:\"\r\n    article_header.classList.add('article_header')\r\n\r\n\r\n    const article_content = document.createElement('p')\r\n    article_content.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates incidunt voluptatum, sunt\r\n    aliquid voluptate facilis cupiditate maiores harum alias sed reprehenderit recusandae ipsum\r\n    asperiores culpa possimus, eligendi ullam similique autem.`\r\n    article_content.classList.add('article_content')\r\n\r\n    main.appendChild(section)\r\n    section.appendChild(article)\r\n    article.appendChild(article_header)\r\n    article.appendChild(article_content)\r\n\r\n    const article_header_photo = document.createElement('h1')\r\n    article_header_photo.innerText = \"This is us:\"\r\n    article_header_photo.classList.add('article_header')\r\n    const article_content_photo = document.createElement('div')\r\n    article_content_photo.innerHTML = `<img src=\"./dist/assets/images/family.png\" alt=\"\">`\r\n    article_content_photo.classList.add('article_content_photo')\r\n\r\n    article.appendChild(article_header_photo)\r\n    article.appendChild(article_content_photo)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayAbout);\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/modules/display_about.js?");

/***/ }),

/***/ "./src/modules/display_contact.js":
/*!****************************************!*\
  !*** ./src/modules/display_contact.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayContact() {\r\n    const main = document.querySelector(\"main\")\r\n    main.innerHTML = \"\"\r\n    const section = document.createElement('section')\r\n    section.id = \"contact_section\"\r\n    const article = document.createElement('div')\r\n    article.classList.add('article')\r\n\r\n\r\n    const article_header = document.createElement('h1')\r\n    article_header.innerText = \"Adress:\"\r\n    article_header.classList.add('article_header')\r\n\r\n\r\n    const article_content = document.createElement('p')\r\n    article_content.innerText = `High Street 01, CV1 3BZ`\r\n    article_content.classList.add('article_content')\r\n\r\n    main.appendChild(section)\r\n    section.appendChild(article)\r\n    article.appendChild(article_header)\r\n    article.appendChild(article_content)\r\n\r\n    const article_header_map = document.createElement('h1')\r\n    article_header_map.innerText = \"Map:\"\r\n    article_header_map.classList.add('article_header')\r\n    const article_content_map = document.createElement('div')\r\n    article_content_map.innerHTML = `<img src=\"./dist/assets/images/map.jpg\" alt=\"\">`\r\n    article_content_map.classList.add('article_content_map')\r\n\r\n    article.appendChild(article_header_map)\r\n    article.appendChild(article_content_map)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayContact);\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/modules/display_contact.js?");

/***/ }),

/***/ "./src/modules/display_menu.js":
/*!*************************************!*\
  !*** ./src/modules/display_menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction displayMenu() {\r\n    const main = document.querySelector(\"main\")\r\n    main.innerHTML = \"\"\r\n    const section = document.createElement('section')\r\n    section.id = \"menu_section\"\r\n    const article = document.createElement('div')\r\n    article.classList.add('article')\r\n\r\n    for (let i = 0; i < 10; i++) {\r\n        const article_header = document.createElement('h1')\r\n        article_header.innerText = \"Lorem, ipsum dolor?\"\r\n        article_header.classList.add('article_header')\r\n        const article_content = document.createElement('p')\r\n        article_content.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates incidunt voluptatum, sunt\r\n            aliquid voluptate facilis cupiditate maiores harum alias sed reprehenderit recusandae ipsum\r\n            asperiores culpa possimus, eligendi ullam similique autem.`\r\n        article_content.classList.add('article_content')\r\n\r\n        main.appendChild(section)\r\n        section.appendChild(article)\r\n        article.appendChild(article_header)\r\n        article.appendChild(article_content)\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayMenu);\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/modules/display_menu.js?");

/***/ }),

/***/ "./src/modules/page_load.js":
/*!**********************************!*\
  !*** ./src/modules/page_load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction pageLoad() {\r\n    //wrapper div #content\r\n    const content = document.querySelector('#content')\r\n    content.appendChild(createHeader())\r\n    content.appendChild(createMain())\r\n    content.appendChild(createFooter())\r\n\r\n\r\n}\r\n\r\nfunction createHeader() {\r\n\r\n    //header\r\n    const header = document.createElement('header')\r\n    const nav = document.createElement('nav')\r\n    nav.innerHTML = `<img src=\"./dist/assets/images/restaurant-pngrepo-com.png\" alt=\"\">`\r\n    const nav_ul = document.createElement('ul')\r\n    nav_ul.innerHTML = `<li><a href=\"\" id=\"menu\">Menu</a></li><li><a href=\"\" id=\"contact\">Contact</a></li><li><a href=\"\" id=\"about\">About Us</a></li>`\r\n    const slogan = document.createElement('section')\r\n    slogan.classList.add(\"slogan\")\r\n    const slogan_content = document.createElement('div')\r\n    slogan_content.classList.add(\"slogan_content\")\r\n    const slogan_heading = document.createElement('h1')\r\n    slogan_heading.classList.add(\"slogan_heading\")\r\n    slogan_heading.innerText = \"Best pizza in the world. Have you tasted better?\"\r\n    const slogan_action = document.createElement('button')\r\n    slogan_action.classList.add('slogan_action')\r\n    slogan_action.innerHTML = `<a href=\"\">Order</a>`\r\n    //header build\r\n    header.appendChild(nav)\r\n    nav.appendChild(nav_ul)\r\n    header.appendChild(slogan)\r\n    slogan.appendChild(slogan_content)\r\n    slogan_content.appendChild(slogan_heading)\r\n    slogan_content.appendChild(slogan_action)\r\n\r\n    return header\r\n}\r\n\r\nfunction createMain() {\r\n    //main\r\n    const main = document.createElement('main')\r\n    const section = document.createElement('section')\r\n    const article = document.createElement('div')\r\n    article.classList.add('article')\r\n    const article_header = document.createElement('h1')\r\n    article_header.innerText = \"Lorem, ipsum dolor?\"\r\n    article_header.classList.add('article_header')\r\n    const article_content = document.createElement('p')\r\n    article_content.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates incidunt voluptatum, sunt\r\n    aliquid voluptate facilis cupiditate maiores harum alias sed reprehenderit recusandae ipsum\r\n    asperiores culpa possimus, eligendi ullam similique autem.\r\n    Atque fuga cupiditate minus obcaecati quasi nesciunt quisquam quibusdam. Ipsam pariatur, minima\r\n    ipsa sunt quisquam iure dignissimos mollitia eligendi libero quo maxime, dicta laborum nobis.\r\n    Eius enim cumque optio vel!`\r\n    article_content.classList.add('article_content')\r\n    //main build\r\n    main.appendChild(section)\r\n    section.appendChild(article)\r\n    article.appendChild(article_header)\r\n    article.appendChild(article_content)\r\n\r\n    return main\r\n}\r\n\r\nfunction createFooter() {\r\n    //footer\r\n    const footer = document.createElement('footer')\r\n    const strong = document.createElement('strong')\r\n    strong.innerText = \"Tomas Bochnovic © 2021\"\r\n    //footer build\r\n    footer.appendChild(strong)\r\n\r\n    return footer\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n//# sourceURL=webpack://restaurant_page/./src/modules/page_load.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;