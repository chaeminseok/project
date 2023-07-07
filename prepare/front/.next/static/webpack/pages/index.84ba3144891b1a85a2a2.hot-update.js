webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: "제로초"
    },
    content: "첫 번째 게시글",
    Images: [{
      src: "https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg"
    }, {
      src: "https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg"
    }],
    Comments: [{
      User: {
        nickname: "nero"
      },
      content: "우와 개정판이 나왔군요~"
    }, {
      User: {
        nickname: "hero"
      },
      content: "얼른 사고싶어요~"
    }]
  }],
  imagePaths: [],
  postAdded: false
};
var ADD_POST = "ADD_POST";
var addPost = {
  type: ADD_POST
};
var dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "제로초"
  },
  Images: [],
  Comments: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case ADD_POST:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
          postAdded: true
        });
      }
    default:
      {
        return _objectSpread({}, state);
      }
  }
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiZHVtbXlQb3N0Iiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJfb2JqZWN0U3ByZWFkIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0VBQzFCQyxTQUFTLEVBQUUsQ0FDVDtJQUNFQyxFQUFFLEVBQUUsQ0FBQztJQUNMQyxJQUFJLEVBQUU7TUFDSkQsRUFBRSxFQUFFLENBQUM7TUFDTEUsUUFBUSxFQUFFO0lBQ1osQ0FBQztJQUNEQyxPQUFPLEVBQUUsVUFBVTtJQUNuQkMsTUFBTSxFQUFFLENBQ047TUFDRUMsR0FBRyxFQUFFO0lBQ1AsQ0FBQyxFQUNEO01BQ0VBLEdBQUcsRUFBRTtJQUNQLENBQUMsQ0FDRjtJQUNEQyxRQUFRLEVBQUUsQ0FDUjtNQUNFTCxJQUFJLEVBQUU7UUFDSkMsUUFBUSxFQUFFO01BQ1osQ0FBQztNQUNEQyxPQUFPLEVBQUU7SUFDWCxDQUFDLEVBQ0Q7TUFDRUYsSUFBSSxFQUFFO1FBQ0pDLFFBQVEsRUFBRTtNQUNaLENBQUM7TUFDREMsT0FBTyxFQUFFO0lBQ1gsQ0FBQztFQUVMLENBQUMsQ0FDRjtFQUNESSxVQUFVLEVBQUUsRUFBRTtFQUNkQyxTQUFTLEVBQUU7QUFDYixDQUFDO0FBRUQsSUFBTUMsUUFBUSxHQUFHLFVBQVU7QUFFcEIsSUFBTUMsT0FBTyxHQUFHO0VBQ3JCQyxJQUFJLEVBQUVGO0FBQ1IsQ0FBQztBQUVELElBQU1HLFNBQVMsR0FBRztFQUNoQlosRUFBRSxFQUFFLENBQUM7RUFDTEcsT0FBTyxFQUFFLFdBQVc7RUFDcEJGLElBQUksRUFBRTtJQUNKRCxFQUFFLEVBQUUsQ0FBQztJQUNMRSxRQUFRLEVBQUU7RUFDWixDQUFDO0VBQ0RFLE1BQU0sRUFBRSxFQUFFO0VBQ1ZFLFFBQVEsRUFBRTtBQUNaLENBQUM7QUFFYywyRUFBa0M7RUFBQSxJQUFqQ08sS0FBSyxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBR2hCLFlBQVk7RUFBQSxJQUFFbUIsTUFBTSxHQUFBSCxTQUFBLENBQUFDLE1BQUEsT0FBQUQsU0FBQSxNQUFBRSxTQUFBO0VBQzFDLFFBQVFDLE1BQU0sQ0FBQ04sSUFBSTtJQUNqQixLQUFLRixRQUFRO01BQUU7UUFDYixPQUFBUyxhQUFBLENBQUFBLGFBQUEsS0FDS0wsS0FBSztVQUNSZCxTQUFTLEdBQUdhLFNBQVMsRUFBQU8sTUFBQSxDQUFBQyw0RkFBQSxDQUFLUCxLQUFLLENBQUNkLFNBQVMsRUFBQztVQUMxQ1MsU0FBUyxFQUFFO1FBQUk7TUFFbkI7SUFDQTtNQUFTO1FBQ1AsT0FBQVUsYUFBQSxLQUNLTCxLQUFLO01BRVo7RUFDRjtBQUNGLENBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODRiYTMxNDQ4OTFiMWE4NWEyYTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXHJcbiAgICB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6IFwi7KCc66Gc7LSIXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6IFwi7LKrIOuyiOynuCDqsozsi5zquIBcIixcclxuICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBcImh0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZ1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIENvbW1lbnRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgVXNlcjoge1xyXG4gICAgICAgICAgICBuaWNrbmFtZTogXCJuZXJvXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY29udGVudDogXCLsmrDsmYAg6rCc7KCV7YyQ7J20IOuCmOyZlOq1sOyalH5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgICAgbmlja25hbWU6IFwiaGVyb1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGNvbnRlbnQ6IFwi7Ja866W4IOyCrOqzoOyLtuyWtOyalH5cIixcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIHBvc3RBZGRlZDogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBBRERfUE9TVCA9IFwiQUREX1BPU1RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xyXG4gIHR5cGU6IEFERF9QT1NULFxyXG59O1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0ge1xyXG4gIGlkOiAyLFxyXG4gIGNvbnRlbnQ6IFwi642U66+4642w7J207YSw7J6F64uI64ukLlwiLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6IFwi7KCc66Gc7LSIXCIsXHJcbiAgfSxcclxuICBJbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBRERfUE9TVDoge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSxcclxuICAgICAgICBwb3N0QWRkZWQ6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9