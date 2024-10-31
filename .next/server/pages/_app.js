/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_chains__WEBPACK_IMPORTED_MODULE_5__]);\n([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, wagmi__WEBPACK_IMPORTED_MODULE_4__, wagmi_chains__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst projectId = \"f100b02616fc63b37e535b6292839862\";\nconst mainChains = [\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.mainnet,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.polygon,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.optimism,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.arbitrum\n];\nconst testChains = [\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.sepolia,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.arbitrumSepolia\n];\n// Conditionally include testnets based on env variable\nconst chains =  true ? [\n    ...mainChains,\n    ...testChains\n] : 0;\nconst { connectors } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.getDefaultWallets)({\n    appName: 'Guess Game',\n    projectId,\n    chains\n});\nconst config = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createConfig)({\n    chains: [\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.arbitrumSepolia\n    ],\n    transports: {\n        [wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.arbitrumSepolia.id]: (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.http)()\n    },\n    connectors\n});\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient();\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiProvider, {\n        config: config,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {\n            client: queryClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_2__.RainbowKitProvider, {\n                chains: [\n                    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.arbitrumSepolia\n                ],\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/getto/GetTo/Side/arbitrum-guess-game/pages/_app.js\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/getto/GetTo/Side/arbitrum-guess-game/pages/_app.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/getto/GetTo/Side/arbitrum-guess-game/pages/_app.js\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/getto/GetTo/Side/arbitrum-guess-game/pages/_app.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNvQztBQUNOO0FBQ2Y7QUFRcEM7QUFDUztBQUU5QixNQUFNYSxZQUFZQyxrQ0FBeUM7QUFHM0QsTUFBTUcsYUFBYTtJQUFDVixpREFBT0E7SUFBRUMsaURBQU9BO0lBQUVDLGtEQUFRQTtJQUFFQyxrREFBUUE7Q0FBQztBQUN6RCxNQUFNUSxhQUFhO0lBQUNQLGlEQUFPQTtJQUFFQyx5REFBZUE7Q0FBQztBQUU3Qyx1REFBdUQ7QUFDdkQsTUFBTU8sU0FBU0wsS0FBa0QsR0FDN0Q7T0FBSUc7T0FBZUM7Q0FBVyxHQUM5QkQsQ0FBVUE7QUFDZCxNQUFNLEVBQUVJLFVBQVUsRUFBRSxHQUFHckIseUVBQWlCQSxDQUFDO0lBQ3ZDc0IsU0FBUztJQUNUVDtJQUNBTTtBQUNGO0FBRUEsTUFBTUksU0FBU2xCLG1EQUFZQSxDQUFDO0lBQzFCYyxRQUFRO1FBQUNQLHlEQUFlQTtLQUFDO0lBQ3pCWSxZQUFZO1FBQ1YsQ0FBQ1oseURBQWVBLENBQUNhLEVBQUUsQ0FBQyxFQUFFbkIsMkNBQUlBO0lBQzVCO0lBQ0FlO0FBQ0Y7QUFFQSxNQUFNSyxjQUFjLElBQUl4Qiw4REFBV0E7QUFFbkMsU0FBU3lCLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMscUJBQ0UsOERBQUN6QixnREFBYUE7UUFBQ21CLFFBQVFBO2tCQUNyQiw0RUFBQ3BCLHNFQUFtQkE7WUFBQzJCLFFBQVFKO3NCQUMzQiw0RUFBQ3pCLHNFQUFrQkE7Z0JBQUNrQixRQUFRO29CQUFDUCx5REFBZUE7aUJBQUM7MEJBQzNDLDRFQUFDZ0I7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmJpdHJ1bS1ndWVzcy1nYW1lLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzJ1xuaW1wb3J0IHsgZ2V0RGVmYXVsdFdhbGxldHMsIFJhaW5ib3dLaXRQcm92aWRlciB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQnXG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIlxuaW1wb3J0IHsgV2FnbWlQcm92aWRlciwgY3JlYXRlQ29uZmlnLCBodHRwIH0gZnJvbSBcIndhZ21pXCJcbmltcG9ydCB7IFxuICBtYWlubmV0LCBcbiAgcG9seWdvbiwgXG4gIG9wdGltaXNtLCBcbiAgYXJiaXRydW0sIFxuICBzZXBvbGlhLCBcbiAgYXJiaXRydW1TZXBvbGlhIFxufSBmcm9tICd3YWdtaS9jaGFpbnMnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuY29uc3QgcHJvamVjdElkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfV0FMTEVUX1BST0pFQ1RfSURcblxuXG5jb25zdCBtYWluQ2hhaW5zID0gW21haW5uZXQsIHBvbHlnb24sIG9wdGltaXNtLCBhcmJpdHJ1bV1cbmNvbnN0IHRlc3RDaGFpbnMgPSBbc2Vwb2xpYSwgYXJiaXRydW1TZXBvbGlhXVxuXG4vLyBDb25kaXRpb25hbGx5IGluY2x1ZGUgdGVzdG5ldHMgYmFzZWQgb24gZW52IHZhcmlhYmxlXG5jb25zdCBjaGFpbnMgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTkFCTEVfVEVTVE5FVFMgPT09IFwidHJ1ZVwiIFxuICA/IFsuLi5tYWluQ2hhaW5zLCAuLi50ZXN0Q2hhaW5zXSBcbiAgOiBtYWluQ2hhaW5zXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcbiAgYXBwTmFtZTogJ0d1ZXNzIEdhbWUnLFxuICBwcm9qZWN0SWQsXG4gIGNoYWlucyxcbn0pXG5cbmNvbnN0IGNvbmZpZyA9IGNyZWF0ZUNvbmZpZyh7XG4gIGNoYWluczogW2FyYml0cnVtU2Vwb2xpYV0sXG4gIHRyYW5zcG9ydHM6IHtcbiAgICBbYXJiaXRydW1TZXBvbGlhLmlkXTogaHR0cCgpXG4gIH0sXG4gIGNvbm5lY3RvcnNcbn0pXG5cbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KClcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFdhZ21pUHJvdmlkZXIgY29uZmlnPXtjb25maWd9PlxuICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtbYXJiaXRydW1TZXBvbGlhXX0+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICA8L1dhZ21pUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibmFtZXMiOlsiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJXYWdtaVByb3ZpZGVyIiwiY3JlYXRlQ29uZmlnIiwiaHR0cCIsIm1haW5uZXQiLCJwb2x5Z29uIiwib3B0aW1pc20iLCJhcmJpdHJ1bSIsInNlcG9saWEiLCJhcmJpdHJ1bVNlcG9saWEiLCJwcm9qZWN0SWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfV0FMTEVUX1BST0pFQ1RfSUQiLCJtYWluQ2hhaW5zIiwidGVzdENoYWlucyIsImNoYWlucyIsIk5FWFRfUFVCTElDX0VOQUJMRV9URVNUTkVUUyIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwiY29uZmlnIiwidHJhbnNwb3J0cyIsImlkIiwicXVlcnlDbGllbnQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@rainbow-me"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();