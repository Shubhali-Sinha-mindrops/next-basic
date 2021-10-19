webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");

var _jsxFileName = "D:\\biggerProject-next\\pages\\index.js";
//import { useEffect, useState } from 'react';

var DUMMY_MEETUPS = [{
  id: 'm1',
  title: 'First meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
  address: 'LakeView 5, Washington DC',
  description: 'This is a first meetup'
}, {
  id: 'm2',
  title: 'Second meetup',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
  address: 'H-no. 514, Florida',
  description: 'This is a second meetup'
}];

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {               //here, this useEffect run after the execution of component function. It means that loadedMeetups is empty at first time and then the state changed. 
  //     setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);
  //return <MeetupList meetups={loadedMeetups} />
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    meetups: props.meetups
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 12
  }, this);
}

_c = HomePage;
; // export async function getServerSideProps(context) {        //This code will always run on the server.
//     //fetch data from an API
//     //this async function gurantees to run for every request.But in this we have to wait until page regenerated fior every request.
//     const req = context.req;
//     const res = context.res;
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         } 
//     };
// };      //this function will not run during the build process, but instead always on the server after deployment.

;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (HomePage); //npm run build is a command need to run before deploy nextjs sites.

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQSxJQUFNQSxhQUFhLEdBQUcsQ0FDbEI7QUFDSUMsSUFBRSxFQUFFLElBRFI7QUFFSUMsT0FBSyxFQUFFLGNBRlg7QUFHSUMsT0FBSyxFQUFFLHdIQUhYO0FBSUlDLFNBQU8sRUFBRSwyQkFKYjtBQUtJQyxhQUFXLEVBQUU7QUFMakIsQ0FEa0IsRUFRbEI7QUFDSUosSUFBRSxFQUFFLElBRFI7QUFFSUMsT0FBSyxFQUFFLGVBRlg7QUFHSUMsT0FBSyxFQUFFLHdIQUhYO0FBSUlDLFNBQU8sRUFBRSxvQkFKYjtBQUtJQyxhQUFXLEVBQUU7QUFMakIsQ0FSa0IsQ0FBdEI7O0FBaUJBLFNBQVVDLFFBQVYsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQ3RCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxzQkFBTyxxRUFBQyxzRUFBRDtBQUFZLFdBQU8sRUFBRUEsS0FBSyxDQUFDQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDSDs7S0FUU0YsUTtBQVNULEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXVCQzs7QUFJY0EsdUVBQWYsRSxDQUdBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVkMWY5YmQyYmZkZTMwOTE2NjkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcclxuXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdtMScsXHJcbiAgICAgICAgdGl0bGU6ICdGaXJzdCBtZWV0dXAnLFxyXG4gICAgICAgIGltYWdlOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZycsXHJcbiAgICAgICAgYWRkcmVzczogJ0xha2VWaWV3IDUsIFdhc2hpbmd0b24gREMnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhIGZpcnN0IG1lZXR1cCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdtMicsXHJcbiAgICAgICAgdGl0bGU6ICdTZWNvbmQgbWVldHVwJyxcclxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxyXG4gICAgICAgIGFkZHJlc3M6ICdILW5vLiA1MTQsIEZsb3JpZGEnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhIHNlY29uZCBtZWV0dXAnXHJcbiAgICB9XHJcbl07XHJcblxyXG5mdW5jdGlvbiAgSG9tZVBhZ2UocHJvcHMpIHtcclxuICAgIC8vIGNvbnN0IFtsb2FkZWRNZWV0dXBzLCBzZXRMb2FkZWRNZWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4geyAgICAgICAgICAgICAgIC8vaGVyZSwgdGhpcyB1c2VFZmZlY3QgcnVuIGFmdGVyIHRoZSBleGVjdXRpb24gb2YgY29tcG9uZW50IGZ1bmN0aW9uLiBJdCBtZWFucyB0aGF0IGxvYWRlZE1lZXR1cHMgaXMgZW1wdHkgYXQgZmlyc3QgdGltZSBhbmQgdGhlbiB0aGUgc3RhdGUgY2hhbmdlZC4gXHJcbiAgICAvLyAgICAgc2V0TG9hZGVkTWVldHVwcyhEVU1NWV9NRUVUVVBTKTtcclxuICAgIC8vIH0sIFtdKTtcclxuICAgIC8vcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e2xvYWRlZE1lZXR1cHN9IC8+XHJcblxyXG4gICAgcmV0dXJuIDxNZWV0dXBMaXN0IG1lZXR1cHM9e3Byb3BzLm1lZXR1cHN9IC8+XHJcbn07XHJcblxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHsgICAgICAgIC8vVGhpcyBjb2RlIHdpbGwgYWx3YXlzIHJ1biBvbiB0aGUgc2VydmVyLlxyXG4vLyAgICAgLy9mZXRjaCBkYXRhIGZyb20gYW4gQVBJXHJcbi8vICAgICAvL3RoaXMgYXN5bmMgZnVuY3Rpb24gZ3VyYW50ZWVzIHRvIHJ1biBmb3IgZXZlcnkgcmVxdWVzdC5CdXQgaW4gdGhpcyB3ZSBoYXZlIHRvIHdhaXQgdW50aWwgcGFnZSByZWdlbmVyYXRlZCBmaW9yIGV2ZXJ5IHJlcXVlc3QuXHJcbi8vICAgICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcclxuLy8gICAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG5cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgcHJvcHM6IHtcclxuLy8gICAgICAgICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQU1xyXG4vLyAgICAgICAgIH0gXHJcbi8vICAgICB9O1xyXG4vLyB9OyAgICAgIC8vdGhpcyBmdW5jdGlvbiB3aWxsIG5vdCBydW4gZHVyaW5nIHRoZSBidWlsZCBwcm9jZXNzLCBidXQgaW5zdGVhZCBhbHdheXMgb24gdGhlIHNlcnZlciBhZnRlciBkZXBsb3ltZW50LlxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkgeyAgICAgICAgLy90aGlzIG1ldGhvZCByZXR1cm4gYSBwcm9taXNlIHNpbmNlIGl0IGlzIGFzeW5jIGFuZCBpdCB3aWxsIGV4Y2V1dGUgZmlyc3QgYmVmb3JlIHRoZSBjb21wb25lbnQgZnVuY3Rpb24gdG8gbG9hZCB0aGUgZGF0YSBhbmQgc2VuZCBpdCB0byB0aGUgY29tcG9uZW50IGZ1bmN0aW9uIHRocm91Z2ggcHJvcHMuXHJcbiAgICAvL2ZldGNoIGRhdGEgZnJvbSBhbiBBUEkvIGRhdGFiYXNlXHJcbiAgICAgIC8vSXQgbWFrZSB0aGUgcGFnZSB0byBydW4gZmFzdGVyIHRoYW4gc2VydmVyc2lkZXByb3BzIGZ1bmN0aW9uIGp1c3QgYWJvdmUgYW5kIGFuIGFsdGVybmF0ZSBmb3IgdGhpcyBtZXRob2QuXHJcblxyXG4gICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxyXG4gICAgICAgICdtb25nb2RiK3NydjovL1NodWJoYWxpU2luaGE6KjEyM1NpbmhhQGNsdXN0ZXIwLmxjOHF3Lm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIFxyXG4gICAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuXHJcbiAgICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKCkudG9BcnJheSgpO1xyXG5cclxuICAgICAgY2xpZW50LmNsb3NlKCk7XHJcbiAgICAgIFxyXG4gICAgcmV0dXJuIHsgICAgICAgICAgICAvL2RhdGEgZmV0Y2ggZm9yIHByZS1SZW5kZXJpbmcgYW5kIGl0IHdpbGwgYWx3YXlzIHJldHVybiBhbiBvYmplY3Qgd2l0aCBhIHByb3BzIGtleS5cclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBtZWV0dXBzXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXZhbGlkYXRlOiAxICAgICAgICAgICAgICAgICAgLy9pdCBpcyBpbiBzZWNvbmRzLi4uLnRvIHNhdmUgdGhlIHNpdGUgZnJvbSBvbGQgZGF0YS5UaGlzIHBhZ2Ugd2lsbCByZS1nZW5lcmF0ZWQgYWZ0ZXIgdGhlIHRpbWUgbWVudGlvbmVkIGFmdGVyIHRoZSBkZXBsb3kgb2YgdGhlIHNpdGUuXHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG5cclxuXHJcbi8vbnBtIHJ1biBidWlsZCBpcyBhIGNvbW1hbmQgbmVlZCB0byBydW4gYmVmb3JlIGRlcGxveSBuZXh0anMgc2l0ZXMuIl0sInNvdXJjZVJvb3QiOiIifQ==