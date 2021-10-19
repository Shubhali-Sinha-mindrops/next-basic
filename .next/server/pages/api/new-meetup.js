"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 624:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(548);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);
 // /api/new-meetup
// POST /api/new-meetup

async function reqhandler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect('mongodb+srv://ShubhaliSinha:*123Sinha@cluster0.lc8qw.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({
      message: 'Meetup inserted!'
    });
  }
}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reqhandler); //API-ROUTE code.
//This page will contain server side code because it will run on the server.
//This code will never exposed to the client.

/***/ }),

/***/ 548:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(624));
module.exports = __webpack_exports__;

})();