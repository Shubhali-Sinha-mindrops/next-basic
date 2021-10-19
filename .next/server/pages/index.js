(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(992);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function Card(props) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
    children: props.children
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ 936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(731);
// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__(663);
// EXTERNAL MODULE: ./components/meetups/MeetupItem.module.css
var MeetupItem_module = __webpack_require__(817);
var MeetupItem_module_default = /*#__PURE__*/__webpack_require__.n(MeetupItem_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: ./components/meetups/MeetupItem.js






function MeetupItem(props) {
  const router = (0,router_.useRouter)();

  function showDetailsHandler() {
    router.push('/' + props.id); //this method is used to navigate programatically.This push method pushes a new page onto othe stack of the pages.
  }

  ;
  return /*#__PURE__*/jsx_runtime_.jsx("li", {
    className: (MeetupItem_module_default()).item,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (MeetupItem_module_default()).image,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: props.image,
          alt: props.title
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (MeetupItem_module_default()).content,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: props.title
        }), /*#__PURE__*/jsx_runtime_.jsx("address", {
          children: props.address
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (MeetupItem_module_default()).actions,
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: showDetailsHandler,
          children: "Show Details"
        })
      })]
    })
  });
}

/* harmony default export */ const meetups_MeetupItem = (MeetupItem);
// EXTERNAL MODULE: ./components/meetups/MeetupList.module.css
var MeetupList_module = __webpack_require__(649);
var MeetupList_module_default = /*#__PURE__*/__webpack_require__.n(MeetupList_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupList.js




function MeetupList(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    className: (MeetupList_module_default()).list,
    children: props.meetups.map(meetup => /*#__PURE__*/jsx_runtime_.jsx(meetups_MeetupItem, {
      id: meetup.id,
      image: meetup.image,
      title: meetup.title,
      address: meetup.address
    }, meetup.id))
  });
}

/* harmony default export */ const meetups_MeetupList = (MeetupList);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(548);
;// CONCATENATED MODULE: ./pages/index.js
//import { useEffect, useState } from 'react';







function HomePage(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(() => {               //here, this useEffect run after the execution of component function. It means that loadedMeetups is empty at first time and then the state changed.
  //     setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);
  //return <MeetupList meetups={loadedMeetups} />
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "React Meetups"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Browse a huge list of active React meetups!"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(meetups_MeetupList, {
      meetups: props.meetups
    })]
  });
} // export async function getServerSideProps(context) {        //This code will always run on the server.
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


async function getStaticProps() {
  //this method return a promise since it is async and it will exceute first before the component function to load the data and send it to the component function through props.
  //fetch data from an API/ database
  //It make the page to run faster than serversideprops function just above and an alternate for this method.
  const client = await external_mongodb_.MongoClient.connect("mongodb+srv://ShubhaliSinha:*123Sinha@cluster0.lc8qw.mongodb.net/meetups?retryWrites=true&w=majority");
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    //data fetch for pre-Rendering and it will always return an object with a props key.
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString() //this will convert this value in a meaningful string which can be used later.

      }))
    },
    revalidate: 1 //it is in seconds....to save the site from old data.This page will re-generated after the time mentioned after the deploy of the site.

  };
}
/* harmony default export */ const pages = (HomePage); //npm run build is a command need to run before deploy nextjs sites.

/***/ }),

/***/ 817:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "MeetupItem_item__3siMU",
	"image": "MeetupItem_image__13rAP",
	"content": "MeetupItem_content__3uEkT",
	"actions": "MeetupItem_actions__LvT9B"
};


/***/ }),

/***/ 649:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "MeetupList_list__1iafn"
};


/***/ }),

/***/ 992:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ 548:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(936));
module.exports = __webpack_exports__;

})();