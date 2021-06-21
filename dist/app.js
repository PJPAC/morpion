/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

eval("/* let maVar = true;\r\nmaVar = 30.3;\r\nmaVar = \"bob\";\r\nmaVar = 'john';\r\nmaVar = null;\r\nmaVar = [];\r\n\r\n// Fetch an item\r\nconst btnstart = document.querySelector(\"#timeStart\");\r\n// console.log(btnstart);\r\n\r\n// Add an event\r\nconst \r\n*/\n\n/* Version #1\r\n// Quand on click sur le bouton \"Start\" il doit disparaitre et le bouton \"Pause\" doit apparaitre.\r\n// Quand on click sur le bouton \"Pause\" il doit disparaitre et le bouton \"Resume\" doit apparaitre.\r\n// Quand on click sur le bouton \"Resume\" il doit disparaitre et le bouton \"Pause\" doit reapparaitre.\r\n\r\nconst btnStart = document.querySelector(\"#timerStart\");\r\nconst btnPause = document.querySelector(\"#timerPause\");\r\nconst btnResume = document.querySelector(\"#timerResume\");\r\n\r\nconst start = () => {\r\n    btnStart.classList.remove('d-block');\r\n    btnStart.classList.add('d-none');\r\n    btnPause.classList.remove('d-none');\r\n    btnPause.classList.add('d-block');    \r\n}\r\n\r\nconst pause = () => {\r\n    btnPause.classList.remove('d-block');\r\n    btnPause.classList.add('d-none');\r\n    btnResume.classList.remove('d-none');\r\n    btnResume.classList.add('d-block');    \r\n}\r\nconst resume = () => {\r\n    btnResume.classList.remove('d-block');\r\n    btnResume.classList.add('d-none');\r\n    btnPause.classList.remove('d-none');\r\n    btnPause.classList.add('d-block');    \r\n}\r\nbtnStart.addEventListener (\"click\", start);\r\nbtnPause.addEventListener (\"click\", pause);\r\nbtnResume.addEventListener (\"click\", resume);\r\n\r\n*/\n\n/* Version #2\r\nconst btnStart = document.querySelector(\"#timerStart\");\r\nconst btnPause = document.querySelector(\"#timerPause\");\r\nconst btnResume = document.querySelector(\"#timerResume\");\r\n\r\nconst toggle = (disappear, appear) => {\r\n    disappear.classList.add('d-none');      // disappear.classList.replace('d-block', 'd-none');\r\n    disappear.classList.remove('d-block');\r\n    appear.classList.add('d-block');        // appear.classList.replace('d-none', 'd-block');\r\n    appear.classList.remove('d-none');\r\n};\r\n\r\nconst start = () => { toggle(btnStart, btnPause); }\r\nconst pause = () => { toggle(btnPause, btnResume); }\r\nconst resume = () => { toggle(btnResume, btnPause); }\r\n\r\nbtnStart.addEventListener (\"click\", start);\r\nbtnPause.addEventListener (\"click\", pause);\r\nbtnResume.addEventListener (\"click\", resume);\r\n\r\n*/\n\n/*\r\n// Invoquer une fonction à interval régulier\r\nlet nombre = 0;\r\nlet minute = 0;\r\nconst clock = document.querySelector(\"#timerTime\");\r\nconst increment = () => {\r\n    nombre = nombre + 1;    // nombre =+ 1;\r\n    if (nombre < 10) { clock.innerText = `00:0${nombre}`; \r\n    } else if (nombre < 60) { clock.innerText = `00:${nombre}`;\r\n    } else if (nombre >= 60) { \r\n        minute = (nombre % 60);\r\n        clock.innerText = `${nminute}:${nombre}`;\r\n    }   \r\n    \r\n}\r\n\r\nsetInterval(increment, 1000);\r\n\r\n*/\n// https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/\n\n/*\r\n<!DOCTYPE HTML>\r\n<html>\r\n<head>\r\n\t<title>\r\n\t\tHow to select a random element\r\n\t\tfrom array in JavaScript ?\r\n\t</title>\r\n</head>\r\n<body style = \"text-align:center;\">\r\n\t<h1 style = \"color:green;\">\r\n\t\tGeeksForGeeks\r\n\t</h1>\t\r\n\t<p id = \"GFG_UP\" style =\r\n\t\t\"font-size: 15px; font-weight: bold;\">\r\n\t</p>\r\n\t<button id = \"button\" onclick = \"GFG_Fun()\">\r\n\t\tclick here\r\n\t</button>\r\n\t<p id = \"GFG_DOWN\" style =\r\n\t\t\"font-size: 24px; font-weight: bold; color: green;\">\r\n\t</p>\r\n\t<script>\r\n\t\tvar up = document.getElementById('GFG_UP');\r\n\t\tvar down = document.getElementById('GFG_DOWN');\r\n\t\t\r\n\t\tvar arr = [\"GFG_1\", \"GeeksForGeeks\",\r\n\t\t\t\t\"Geeks\", \"Computer Science Portal\"];\r\n\t\t\r\n\t\tup.innerHTML = \"Click on the button to check \"\r\n\t\t\t+ \"the type of element.<br><br>\" + arr;\r\n\t\t\r\n\t\tfunction GFG_Fun() {\r\n\t\t\tdown.innerHTML =\r\n\t\t\t\tarr[Math.floor(Math.random() * arr.length)];\r\n\t\t}\r\n\t</script>\r\n</body>\r\n</html>\r\n*/\n\n//# sourceURL=webpack://html-training/./src/app.js?");

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://html-training/./src/app.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	__webpack_modules__["./src/app.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/app.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;