webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);






var _this = undefined,
    _jsxFileName = "D:\\1CODE\\nextjs-demo\\pages\\index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 // import Welcome from '../components/welcome';
// import CowsayPage from '../components/cowsay';
// import WithLess from '../components/withless';
// import NextHead from '../components/nexthead';
// import RoutePage from '../components/route';

var Welcome = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/welcome */ "./components/welcome.jsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/welcome */ "./components/welcome.jsx")];
    },
    modules: ['../components/welcome']
  }
});
_c2 = Welcome;
var WelcomeWithLoading = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c3 = function _c3() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/welcome */ "./components/welcome.jsx"));
}, {
  loading: function loading() {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }, "...");
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/welcome */ "./components/welcome.jsx")];
    },
    modules: ['../components/welcome']
  }
});
_c4 = WelcomeWithLoading;
var OtherModules = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()({
  modules: function modules() {
    var components = {
      CowsayPage: __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../components/cowsay */ "./components/cowsay.jsx")),
      WithLess: Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ../components/withless */ "./components/withless.jsx")),
      NextHead: __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../components/nexthead */ "./components/nexthead.jsx")),
      RoutePage: __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/route */ "./components/route.jsx"))
    };
    return components;
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/cowsay */ "./components/cowsay.jsx"), /*require.resolve*/(/*! ../components/withless */ "./components/withless.jsx"), /*require.resolve*/(/*! ../components/nexthead */ "./components/nexthead.jsx"), /*require.resolve*/(/*! ../components/route */ "./components/route.jsx")];
    },
    modules: ['../components/cowsay', '../components/withless', '../components/nexthead', '../components/route']
  }
}); //Index

_c5 = OtherModules;

var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, _Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this2 = _super.call(this, props);
    _this2.state = {};
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }
      }, __jsx(Welcome, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 12
        }
      }), __jsx(WelcomeWithLoading, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 12
        }
      }), __jsx(OtherModules, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 12
        }
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Welcome$dynamic");
$RefreshReg$(_c2, "Welcome");
$RefreshReg$(_c3, "WelcomeWithLoading$dynamic");
$RefreshReg$(_c4, "WelcomeWithLoading");
$RefreshReg$(_c5, "OtherModules");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3giXSwibmFtZXMiOlsiV2VsY29tZSIsImR5bmFtaWMiLCJXZWxjb21lV2l0aExvYWRpbmciLCJsb2FkaW5nIiwiT3RoZXJNb2R1bGVzIiwibW9kdWxlcyIsImNvbXBvbmVudHMiLCJDb3dzYXlQYWdlIiwiV2l0aExlc3MiLCJOZXh0SGVhZCIsIlJvdXRlUGFnZSIsIkluZGV4IiwicHJvcHMiLCJzdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHQyxtREFBTztBQUFBLFNBQUMsc0lBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSx1REFBUjtBQUFBO0FBQUEsY0FBUSx1QkFBUjtBQUFBO0FBQUEsRUFBdkI7TUFBTUQsTztBQUNOLElBQU1FLGtCQUFrQixHQUFHRCxtREFBTztBQUFBLFNBQUMsc0lBQUQ7QUFBQSxHQUFpQztBQUNqRUUsU0FBTyxFQUFDO0FBQUEsV0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQU47QUFBQSxHQUR5RDtBQUFBO0FBQUE7QUFBQSxrQ0FBekIsdURBQXlCO0FBQUE7QUFBQSxjQUF6Qix1QkFBeUI7QUFBQTtBQUFBLENBQWpDLENBQWxDO01BQU1ELGtCO0FBR04sSUFBTUUsWUFBWSxHQUFHSCxtREFBTyxDQUFDO0FBQzNCSSxTQUFPLEVBQUUsbUJBQU07QUFDYixRQUFNQyxVQUFVLEdBQUc7QUFDakJDLGdCQUFVLEVBQUUsb0lBREs7QUFFakJDLGNBQVEsRUFBRSx1TEFGTztBQUdqQkMsY0FBUSxFQUFFLHdJQUhPO0FBSWpCQyxlQUFTLEVBQUU7QUFKTSxLQUFuQjtBQU1BLFdBQU9KLFVBQVA7QUFDRCxHQVQwQjtBQUFBO0FBQUE7QUFBQSxrQ0FHSixxREFISSx1QkFJTix5REFKTSx1QkFLTix5REFMTSx1QkFNTCxtREFOSztBQUFBO0FBQUEsY0FHSixzQkFISSxFQUlOLHdCQUpNLEVBS04sd0JBTE0sRUFNTCxxQkFOSztBQUFBO0FBQUEsQ0FBRCxDQUE1QixDLENBV0E7O01BWE1GLFk7O0lBWUFPLEs7Ozs7O0FBQ0YsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsK0JBQU1BLEtBQU47QUFDQSxXQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUZpQjtBQUdsQjs7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREgsRUFFRyxNQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSCxFQUdHLE1BQUMsWUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEgsQ0FERjtBQVdEOzs7O0VBakJlQywrQzs7QUFvQkhILG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40NTQzNWMwM2YxMzk4NjVjZWVkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuLy8gaW1wb3J0IFdlbGNvbWUgZnJvbSAnLi4vY29tcG9uZW50cy93ZWxjb21lJztcclxuLy8gaW1wb3J0IENvd3NheVBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9jb3dzYXknO1xyXG4vLyBpbXBvcnQgV2l0aExlc3MgZnJvbSAnLi4vY29tcG9uZW50cy93aXRobGVzcyc7XHJcbi8vIGltcG9ydCBOZXh0SGVhZCBmcm9tICcuLi9jb21wb25lbnRzL25leHRoZWFkJztcclxuLy8gaW1wb3J0IFJvdXRlUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL3JvdXRlJztcclxuY29uc3QgV2VsY29tZSA9IGR5bmFtaWMoaW1wb3J0KCcuLi9jb21wb25lbnRzL3dlbGNvbWUnKSlcclxuY29uc3QgV2VsY29tZVdpdGhMb2FkaW5nID0gZHluYW1pYyhpbXBvcnQoJy4uL2NvbXBvbmVudHMvd2VsY29tZScpLHtcclxuICBsb2FkaW5nOigpID0+IDxwPi4uLjwvcD5cclxufSlcclxuY29uc3QgT3RoZXJNb2R1bGVzID0gZHluYW1pYyh7XHJcbiAgbW9kdWxlczogKCkgPT4ge1xyXG4gICAgY29uc3QgY29tcG9uZW50cyA9IHtcclxuICAgICAgQ293c2F5UGFnZTogaW1wb3J0KCcuLi9jb21wb25lbnRzL2Nvd3NheScpLFxyXG4gICAgICBXaXRoTGVzczogaW1wb3J0KCcuLi9jb21wb25lbnRzL3dpdGhsZXNzJyksXHJcbiAgICAgIE5leHRIZWFkOiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvbmV4dGhlYWQnKSxcclxuICAgICAgUm91dGVQYWdlOiBpbXBvcnQoJy4uL2NvbXBvbmVudHMvcm91dGUnKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbXBvbmVudHNcclxuICB9XHJcbn0pXHJcbi8vSW5kZXhcclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7fVxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgPFdlbGNvbWUgLz5cclxuICAgICAgICAgICA8V2VsY29tZVdpdGhMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgPE90aGVyTW9kdWxlcyAvPlxyXG4gICAgICAgICAgIHsvKiA8Q293c2F5UGFnZSAvPlxyXG4gICAgICAgICAgIDxXaXRoTGVzcyAvPlxyXG4gICAgICAgICAgIDxOZXh0SGVhZCAvPlxyXG4gICAgICAgICAgIDxSb3V0ZVBhZ2UgLz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIClcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9