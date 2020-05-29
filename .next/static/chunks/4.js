(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./components/cowsay.jsx":
/*!*******************************!*\
  !*** ./components/cowsay.jsx ***!
  \*******************************/
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
/* harmony import */ var cowsay_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! cowsay-browser */ "./node_modules/cowsay-browser/index.js");
/* harmony import */ var cowsay_browser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(cowsay_browser__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "D:\\1CODE\\nextjs-demo\\components\\cowsay.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


 //cowsay

var CowsayPage = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(CowsayPage, _Component);

  var _super = _createSuper(CowsayPage);

  function CowsayPage(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CowsayPage);

    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CowsayPage, [{
    key: "render",
    value: function render() {
      return __jsx("pre", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }
      }, cowsay_browser__WEBPACK_IMPORTED_MODULE_6___default.a.say({
        text: 'hi there!'
      }));
    }
  }]);

  return CowsayPage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CowsayPage);

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

/***/ }),

/***/ "./node_modules/cowsay-browser/index.js":
/*!**********************************************!*\
  !*** ./node_modules/cowsay-browser/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baloon = __webpack_require__(/*! ./lib/balloon */ "./node_modules/cowsay-browser/lib/balloon.js");
var cows = __webpack_require__(/*! ./lib/cows */ "./node_modules/cowsay-browser/lib/cows.js");
var faces = __webpack_require__(/*! ./lib/faces */ "./node_modules/cowsay-browser/lib/faces.js");

exports.say = function (options) {
	return doIt(options, true);
};

exports.think = function (options) {
	return doIt(options, false);
};

exports.list = cows.list;

function doIt (options, sayAloud) {
	var cow = cows.get(options.f || "default");
	var face = faces(options);
	face.thoughts = sayAloud ? "\\" : "o";

	var action = sayAloud ? "say" : "think";
	return baloon[action](options.text || options._.join(" "), options.n ? null : options.W) + "\n" + cow(face);
}


/***/ }),

/***/ "./node_modules/cowsay-browser/lib/balloon.js":
/*!****************************************************!*\
  !*** ./node_modules/cowsay-browser/lib/balloon.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var os = __webpack_require__(/*! os */ "./node_modules/os-browserify/browser.js");

exports.say = function (text, wrap) {
	delimiters = {
		first : ["/", "\\"],
		middle : ["|", "|"],
		last : ["\\", "/"],
		only : ["<", ">"]
	};

	return format(text, wrap, delimiters);
}

exports.think = function (text, wrap) {
	delimiters = {
		first : ["(", ")"],
		middle : ["(", ")"],
		last : ["(", ")"],
		only : ["(", ")"]
	};

	return format(text, wrap, delimiters);
}

function format (text, wrap, delimiters) {
	var lines = split(text, wrap);
	var maxLength = max(lines);

	var balloon;
	if (lines.length === 1) {
		balloon = [
			" " + top(maxLength), 
			delimiters.only[0] + " " + lines[0] + " " + delimiters.only[1],
			" " + bottom(maxLength)
		];
	} else {
		balloon = [" " + top(maxLength)];

		for (var i = 0, len = lines.length; i < len; i += 1) {
			var delimiter;

			if (i === 0) {
				delimiter = delimiters.first;
			} else if (i === len - 1) {
				delimiter = delimiters.last;
			} else {
				delimiter = delimiters.middle;
			}

			balloon.push(delimiter[0] + " " + pad(lines[i], maxLength) + " " + delimiter[1]);
		}

		balloon.push(" " + bottom(maxLength));
	}

	return balloon.join("\n"); //os.EOL
}

function split (text, wrap) {
	text = text.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, '');

	var lines = [];
	if (!wrap) {
		lines = text.split("\n");
	} else {
		var start = 0;
		while (start < text.length) {
			var nextNewLine = text.indexOf("\n", start);

			var wrapAt = Math.min(start + wrap, nextNewLine === -1 ? text.length : nextNewLine);

			lines.push(text.substring(start, wrapAt));
			start = wrapAt;

			// Ignore next new line
			if (text.charAt(start) === "\n") {
				start += 1;
			}
		}
	}

	return lines;
}

function max (lines) {
	var max = 0;
	for (var i = 0, len = lines.length; i < len; i += 1) {
		if (lines[i].length > max) {
			max = lines[i].length;
		}
	}

	return max;
}

function pad (text, length) {
	return text + (new Array(length - text.length + 1)).join(" ");
}

function top (length) {
	return new Array(length + 3).join("_");
}

function bottom (length) {
	return new Array(length + 3).join("-");
}

/***/ }),

/***/ "./node_modules/cowsay-browser/lib/cow-definitions.js":
/*!************************************************************!*\
  !*** ./node_modules/cowsay-browser/lib/cow-definitions.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Generated code
exports.cowdefs = {
  "beavis.zen": "##\r\n## Beavis, with Zen philosophy removed.\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts         __------~~-,\r\n    $thoughts      ,'            ,\r\n          /               \\\\\r\n         /                :\r\n        |                  '\r\n        |                  |\r\n        |                  |\r\n         |   _--           |\r\n         _| =-.     .-.   ||\r\n         o|/o/       _.   |\r\n         /  ~          \\\\ |\r\n       (____\\@)  ___~    |\r\n          |_===~~~.`    |\r\n       _______.--~     |\r\n       \\\\________       |\r\n                \\\\      |\r\n              __/-___-- -__\r\n             /            _ \\\\\r\nEOC\r\n",
  "bud-frogs": "##\r\n## The Budweiser frogs\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts\r\n          oO)-.                       .-(Oo\r\n         /__  _\\\\                     /_  __\\\\\r\n         \\\\  \\\\(  |     ()~()         |  )/  /\r\n          \\\\__|\\\\ |    (-___-)        | /|__/\r\n          '  '--'    ==`-'==        '--'  '\r\nEOC\r\n",
  "bunny": "##\r\n## A cute little wabbit\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts   \\\\\r\n        \\\\ /\\\\\r\n        ( )\r\n      .( o ).\r\nEOC\r\n",
  "cheese": "##\r\n## The cheese from milk & cheese\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts\r\n      _____   _________\r\n     /     \\\\_/         |\r\n    |                 ||\r\n    |                 ||\r\n   |    ###\\\\  /###   | |\r\n   |     0  \\\\/  0    | |\r\n  /|                 | |\r\n / |        <        |\\\\ \\\\\r\n| /|                 | | |\r\n| |     \\\\_______/   |  | |\r\n| |                 | / /\r\n/||                 /|||\r\n   ----------------|\r\n        | |    | |\r\n        ***    ***\r\n       /___\\\\  /___\\\\\r\nEOC\r\n",
  "chick": "$the_cow = <<\"EOC\";\r\n$thoughts\r\n $thoughts\r\n\r\n        .---.\r\n     _ /     ' .---.\r\n     >|  o    `     `\\\r\n     ` \\       .---._ '._ ,\r\n        '-.;         /`  /'\r\n           \\    '._.'   /\r\n            '.        .'\r\n              `\";--\\_/\r\n       jgs    _/_   |\r\n           -'`/  .--;--\r\n             '    .'\r\n\r\nEOC\r\n",
  "chicken-and-egg": "$the_cow = <<\"EOC\";\r\n$thoughts\r\n $thoughts\r\n\r\n\r\n              /'._     _,\r\n              \\   ;__.'  }\r\n          (`-._;-\" _.--.}'\r\n          /_'    /`    _}     _.--\"\"\"-.\r\n            `.   \\_._.;     .'         \\\r\n              '-.__ /      /            |\r\n      jgs      _/  `\\      \\            /\r\n              ^`   ^`       '._       .'\r\n                               `\"\"\"\"\"`\r\nEOC\r\n",
  "cower": "##\r\n## A cowering cow\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts\r\n        ,__, |    | \r\n        (oo)\\\\|    |___\r\n        (__)\\\\|    |   )\\\\_\r\n             |    |_w |  \\\\\r\n             |    |  ||   *\r\n\r\n             Cower....\r\nEOC\r\n",
  "daemon": "##\r\n## 4.4 >> 5.4\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts         ,        ,\r\n    $thoughts       /(        )`\r\n     $thoughts      \\\\ \\\\___   / |\r\n            /- _  `-/  '\r\n           (/\\\\/ \\\\ \\\\   /\\\\\r\n           / /   | `    \\\\\r\n           O O   ) /    |\r\n           `-^--'`<     '\r\n          (_.)  _  )   /\r\n           `.___/`    /\r\n             `-----' /\r\n<----.     __ / __   \\\\\r\n<----|====O)))==) \\\\) /====\r\n<----'    `--' `.__,' \\\\\r\n             |        |\r\n              \\\\       /\r\n        ______( (_  / \\\\______\r\n      ,'  ,-----'   |        \\\\\r\n      `--{__________)        \\\\/\r\nEOC\r\n",
  "default": "$the_cow = <<\"EOC\";\r\n        $thoughts   ^__^\r\n         $thoughts  ($eyes)\\\\_______\r\n            (__)\\\\       )\\\\/\\\\\r\n             $tongue ||----w |\r\n                ||     ||\r\nEOC\r\n",
  "doge": "##\r\n## Doge\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts\r\n\r\n           _                _\r\n          / /.           _-//\r\n         / ///         _-   /\r\n        //_-//=========     /\r\n      _///        //_ ||   ./\r\n    _|                 -__-||\r\n   |  __              - \\\\   \\\r\n  |  |#-       _-|_           |\r\n  |            |#|||       _   |  \r\n |  _==_                       ||\r\n- ==|.=.=|_ =                  |\r\n|  |-|-  ___                  |\r\n|    --__   _                /\r\n||     ===                  |\r\n |                     _. //\r\n  ||_         __-   _-  _|\r\n     \\_______/  ___/  _|\r\n                   --*\r\nEOC\r\n",
  "dragon-and-cow": "##\r\n## A dragon smiting a cow, possible credit to kube@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n                       $thoughts                    ^    /^\r\n                        $thoughts                  / \\\\  // \\\\\r\n                         $thoughts   |\\\\___/|      /   \\\\//  .\\\\\r\n                          $thoughts  /O  O  \\\\__  /    //  | \\\\ \\\\           *----*\r\n                            /     /  \\\\/_/    //   |  \\\\  \\\\          \\\\   |\r\n                            \\@___\\@`    \\\\/_   //    |   \\\\   \\\\         \\\\/\\\\ \\\\\r\n                           0/0/|       \\\\/_ //     |    \\\\    \\\\         \\\\  \\\\\r\n                       0/0/0/0/|        \\\\///      |     \\\\     \\\\       |  |\r\n                    0/0/0/0/0/_|_ /   (  //       |      \\\\     _\\\\     |  /\r\n                 0/0/0/0/0/0/`/,_ _ _/  ) ; -.    |    _ _\\\\.-~       /   /\r\n                             ,-}        _      *-.|.-~-.           .~    ~\r\n            \\\\     \\\\__/        `/\\\\      /                 ~-. _ .-~      /\r\n             \\\\____($eyes)           *.   }            {                   /\r\n             (    (--)          .----~-.\\\\        \\\\-`                 .~\r\n             //__\\\\\\\\  \\\\__ Ack!   ///.----..<        \\\\             _ -~\r\n            //    \\\\\\\\               ///-._ _ _ _ _ _ _{^ - - - - ~\r\nEOC\r\n",
  "dragon": "##\r\n## The Whitespace Dragon\r\n##\r\n$the_cow = <<EOC;\r\n      $thoughts                    / \\\\  //\\\\\r\n       $thoughts    |\\\\___/|      /   \\\\//  \\\\\\\\\r\n            /0  0  \\\\__  /    //  | \\\\ \\\\    \r\n           /     /  \\\\/_/    //   |  \\\\  \\\\  \r\n           \\@_^_\\@'/   \\\\/_   //    |   \\\\   \\\\ \r\n           //_^_/     \\\\/_ //     |    \\\\    \\\\\r\n        ( //) |        \\\\///      |     \\\\     \\\\\r\n      ( / /) _|_ /   )  //       |      \\\\     _\\\\\r\n    ( // /) '/,_ _ _/  ( ; -.    |    _ _\\\\.-~        .-~~~^-.\r\n  (( / / )) ,-{        _      `-.|.-~-.           .~         `.\r\n (( // / ))  '/\\\\      /                 ~-. _ .-~      .-~^-.  \\\\\r\n (( /// ))      `.   {            }                   /      \\\\  \\\\\r\n  (( / ))     .----~-.\\\\        \\\\-'                 .~         \\\\  `. \\\\^-.\r\n             ///.----..>        \\\\             _ -~             `.  ^-`  ^-_\r\n               ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~\r\n                                                                  /.-~\r\nEOC\r\n",
  "elephant-in-snake": "##\r\n## Do we need to explain this?\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts              ....       \r\n           ........    .      \r\n          .            .      \r\n         .             .      \r\n.........              .......\r\n..............................\r\n\r\nElephant inside ASCII snake\r\nEOC\r\n",
  "elephant": "##\r\n## An elephant out and about\r\n##\r\n$the_cow = <<EOC;\r\n $thoughts     /\\\\  ___  /\\\\\r\n  $thoughts   // \\\\/   \\\\/ \\\\\\\\\r\n     ((    O O    ))\r\n      \\\\\\\\ /     \\\\ //\r\n       \\\\/  | |  \\\\/ \r\n        |  | |  |  \r\n        |  | |  |  \r\n        |   o   |  \r\n        | |   | |  \r\n        |m|   |m|  \r\nEOC\r\n",
  "eyes": "##\r\n## Evil-looking eyes\r\n##\r\n$the_cow = <<EOC;\r\n    $thoughts\r\n     $thoughts\r\n                                   .::!!!!!!!:.\r\n  .!!!!!:.                        .:!!!!!!!!!!!!\r\n  ~~~~!!!!!!.                 .:!!!!!!!!!UWWW\\$\\$\\$ \r\n      :\\$\\$NWX!!:           .:!!!!!!XUWW\\$\\$\\$\\$\\$\\$\\$\\$\\$P \r\n      \\$\\$\\$\\$\\$##WX!:      .<!!!!UW\\$\\$\\$\\$\"  \\$\\$\\$\\$\\$\\$\\$\\$# \r\n      \\$\\$\\$\\$\\$  \\$\\$\\$UX   :!!UW\\$\\$\\$\\$\\$\\$\\$\\$\\$   4\\$\\$\\$\\$\\$* \r\n      ^\\$\\$\\$B  \\$\\$\\$\\$\\\\     \\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$   d\\$\\$R\" \r\n        \"*\\$bd\\$\\$\\$\\$      '*\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$o+#\" \r\n             \"\"\"\"          \"\"\"\"\"\"\" \r\nEOC\r\n",
  "flaming-sheep": "##\r\n## The flaming sheep, contributed by Geordan Rosario (geordan@csua.berkeley.edu)\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts            .    .     .   \r\n   $thoughts      .  . .     `  ,     \r\n    $thoughts    .; .  : .' :  :  : . \r\n     $thoughts   i..`: i` i.i.,i  i . \r\n      $thoughts   `,--.|i |i|ii|ii|i: \r\n           U${eyes}U\\\\.'\\@\\@\\@\\@\\@\\@`.||' \r\n           \\\\__/(\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@)'  \r\n                (\\@\\@\\@\\@\\@\\@\\@\\@)    \r\n                `YY~~~~YY'    \r\n                 ||    ||     \r\nEOC\r\n",
  "ghostbusters": "##\r\n## Ghostbusters!\r\n##\r\n$the_cow = <<EOC;\r\n          $thoughts\r\n           $thoughts\r\n            $thoughts          __---__\r\n                    _-       /--______\r\n               __--( /     \\\\ )XXXXXXXXXXX\\\\v.\r\n             .-XXX(   O   O  )XXXXXXXXXXXXXXX-\r\n            /XXX(       U     )        XXXXXXX\\\\\r\n          /XXXXX(              )--_  XXXXXXXXXXX\\\\\r\n         /XXXXX/ (      O     )   XXXXXX   \\\\XXXXX\\\\\r\n         XXXXX/   /            XXXXXX   \\\\__ \\\\XXXXX\r\n         XXXXXX__/          XXXXXX         \\\\__---->\r\n ---___  XXX__/          XXXXXX      \\\\__         /\r\n   \\\\-  --__/   ___/\\\\  XXXXXX            /  ___--/=\r\n    \\\\-\\\\    ___/    XXXXXX              '--- XXXXXX\r\n       \\\\-\\\\/XXX\\\\ XXXXXX                      /XXXXX\r\n         \\\\XXXXXXXXX   \\\\                    /XXXXX/\r\n          \\\\XXXXXX      >                 _/XXXXX/\r\n            \\\\XXXXX--__/              __-- XXXX/\r\n             -XXXXXXXX---------------  XXXXXX-\r\n                \\\\XXXXXXXXXXXXXXXXXXXXXXXXXX/\r\n                  \"\"VXXXXXXXXXXXXXXXXXXV\"\"\r\nEOC\r\n",
  "hellokitty": "##\r\n## Hello Kitty\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts\r\n      /\\\\_)o<\r\n     |      \\\\\r\n     | O . O|\r\n      \\\\_____/\r\nEOC\r\n",
  "kiss": "##\r\n## A lovers' empbrace\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts\r\n             ,;;;;;;;,\r\n            ;;;;;;;;;;;,\r\n           ;;;;;'_____;'\r\n           ;;;(/))))|((\\\\\r\n           _;;((((((|))))\r\n          / |_\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\r\n     .--~(  \\\\ ~))))))))))))\r\n    /     \\\\  `\\\\-(((((((((((\\\\\\\\\r\n    |    | `\\\\   ) |\\\\       /|)\r\n     |    |  `. _/  \\\\_____/ |\r\n      |    , `\\\\~            /\r\n       |    \\\\  \\\\           /\r\n      | `.   `\\\\|          /\r\n      |   ~-   `\\\\        /\r\n       \\\\____~._/~ -_,   (\\\\\r\n        |-----|\\\\   \\\\    ';;\r\n       |      | :;;;'     \\\\\r\n      |  /    |            |\r\n      |       |            |\r\nEOC\r\n",
  "kitty": "##\r\n## A kitten of sorts, I think\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts\r\n       (\"`-'  '-/\") .___..--' ' \"`-._\r\n         ` *_ *  )    `-.   (      ) .`-.__. `)\r\n         (_Y_.) ' ._   )   `._` ;  `` -. .-'\r\n      _.. `--'_..-_/   /--' _ .' ,4\r\n   ( i l ),-''  ( l i),'  ( ( ! .-'    \r\nEOC\r\n",
  "koala": "##\r\n## From the canonical koala collection\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts\r\n       ___  \r\n     {~._.~}\r\n      ( Y )\r\n     ()~*~()   \r\n     (_)-(_)   \r\nEOC\r\n",
  "kosh": "##\r\n## It's a Kosh Cow!\r\n##\r\n$the_cow = <<EOC;\r\n    $thoughts\r\n     $thoughts\r\n      $thoughts\r\n  ___       _____     ___\r\n /   \\\\     /    /|   /   \\\\\r\n|     |   /    / |  |     |\r\n|     |  /____/  |  |     |     \r\n|     |  |    |  |  |     |\r\n|     |  | {} | /   |     |\r\n|     |  |____|/    |     |\r\n|     |    |==|     |     |\r\n|      \\\\___________/      |\r\n|                         |\r\n|                         |\r\nEOC\r\n",
  "luke-koala": "##\r\n## From the canonical koala collection\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts          .\r\n       ___   //\r\n     {~._.~}// \r\n      ( Y )K/  \r\n     ()~*~()   \r\n     (_)-(_)   \r\n     Luke    \r\n     Sywalker\r\n     koala   \r\nEOC\r\n",
  "mech-and-cow": "                                   ,-----.\r\n                                   |     |\r\n                                ,--|     |-.\r\n                         __,----|  |     | |\r\n                       ,;::     |  `_____' |\r\n                       `._______|    i^i   |\r\n                                `----| |---'| .\r\n                           ,-------._| |== ||//\r\n                           |       |_|P`.  /'/\r\n                           `-------' 'Y Y/'/'\r\n                                     .==\\ /_\\\r\n   ^__^                             /   /'|  `i\r\n   (oo)\\_______                   /'   /  |   |\r\n   (__)\\       )\\/\\             /'    /   |   `i\r\n       ||----w |           ___,;`----'.___L_,-'`\\__\r\n       ||     ||          i_____;----\\.____i\"\"\\____\\\r\n\r\n\r\n\r\n\r\n\r\n",
  "meow": "##\r\n## A meowing tiger?\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts ,   _ ___.--'''`--''//-,-_--_.\r\n      \\\\`\"' ` || \\\\\\\\ \\\\ \\\\\\\\/ / // / ,-\\\\\\\\`,_\r\n     /'`  \\\\ \\\\ || Y  | \\\\|/ / // / - |__ `-,\r\n    /\\@\"\\\\  ` \\\\ `\\\\ |  | ||/ // | \\\\/  \\\\  `-._`-,_.,\r\n   /  _.-. `.-\\\\,___/\\\\ _/|_/_\\\\_\\\\/|_/ |     `-._._)\r\n   `-'``/  /  |  // \\\\__/\\\\__  /  \\\\__/ \\\\\r\n        `-'  /-\\\\/  | -|   \\\\__ \\\\   |-' |\r\n          __/\\\\ / _/ \\\\/ __,-'   ) ,' _|'\r\n         (((__/(((_.' ((___..-'((__,'\r\nEOC\r\n",
  "milk": "##\r\n## Milk from Milk and Cheese\r\n##\r\n$the_cow = <<EOC;\r\n $thoughts     ____________ \r\n  $thoughts    |__________|\r\n      /           /\\\\\r\n     /           /  \\\\\r\n    /___________/___/|\r\n    |          |     |\r\n    |  ==\\\\ /== |     |\r\n    |   O   O  | \\\\ \\\\ |\r\n    |     <    |  \\\\ \\\\|\r\n   /|          |   \\\\ \\\\\r\n  / |  \\\\_____/ |   / /\r\n / /|          |  / /|\r\n/||\\\\|          | /||\\\\/\r\n    -------------|   \r\n        | |    | | \r\n       <__/    \\\\__>\r\nEOC\r\n",
  "moofasa": "##\r\n## MOOfasa.\r\n##\r\n$the_cow = <<EOC;\r\n       $thoughts    ____\r\n        $thoughts  /    \\\\\r\n          | ^__^ |\r\n          | ($eyes) |______\r\n          | (__) |      )\\\\/\\\\\r\n           \\\\____/|----w |\r\n                ||     ||\r\n\r\n\t         Moofasa\r\nEOC\r\n",
  "moose": "$the_cow = <<EOC;\r\n  $thoughts\r\n   $thoughts   \\\\_\\\\_    _/_/\r\n    $thoughts      \\\\__/\r\n           ($eyes)\\\\_______\r\n           (__)\\\\       )\\\\/\\\\\r\n            $tongue ||----w |\r\n               ||     ||\r\nEOC\r\n",
  "mutilated": "##\r\n## A mutilated cow, from aspolito@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n       $thoughts   \\\\_______\r\n v__v   $thoughts  \\\\   O   )\r\n ($eyes)      ||----w |\r\n (__)      ||     ||  \\\\/\\\\\r\n  $tongue\r\nEOC\r\n",
  "ren": "##\r\n## Ren \r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts\r\n    ____  \r\n   /# /_\\\\_\r\n  |  |/o\\\\o\\\\\r\n  |  \\\\\\\\_/_/\r\n / |_   |  \r\n|  ||\\\\_ ~| \r\n|  ||| \\\\/  \r\n|  |||_    \r\n \\\\//  |    \r\n  ||  |    \r\n  ||_  \\\\   \r\n  \\\\_|  o|  \r\n  /\\\\___/   \r\n /  ||||__ \r\n    (___)_)\r\nEOC\r\n",
  "rooster": "$the_cow = <<\"EOC\";\r\n$thoughts\r\n $thoughts\r\n\r\n.\".\".\".\r\n(`       `)               _.-=-.\r\n'._.--.-;             .-`  -'  '.\r\n.-'`.o )  \\           /  .-_.--'  `\\\r\n`;---) \\    ;         /  / ;' _-_.-' `\r\n`;\"`  ;    \\        ; .  .'   _-' \\\r\n(    )    |        |  / .-.-'    -`\r\n '-.-'     \\       | .' ` '.-'-\\`\r\n  /_./\\_.|\\_\\      ;  ' .'-'.-.\r\n  /         '-._    \\` /  _;-,\r\n |         .-=-.;-._ \\  -'-,\r\n \\        /      `\";`-`,-\"`)\r\n  \\       \\     '-- `\\.\\\r\n   '.      '._ '-- '--'/\r\n     `-._     `'----'`;\r\n         `\"\"\"--.____,/\r\n                \\\\  \\\r\n                // /`\r\n            ___// /__\r\n  jgs     (`(`(---\"-`)\r\n\r\nEOC\r\n",
  "satanic": "##\r\n## Satanic cow, source unknown.\r\n##\r\n$the_cow = <<EOC;\r\n     $thoughts\r\n      $thoughts  (__)  \r\n         (\\\\/)  \r\n  /-------\\\\/    \r\n / | 666 ||    \r\n*  ||----||      \r\n   ~~    ~~      \r\nEOC\r\n",
  "sheep": "##\r\n## The non-flaming sheep.\r\n##\r\n$the_cow = <<EOC\r\n  $thoughts\r\n   $thoughts\r\n       __     \r\n      U${eyes}U\\\\.'\\@\\@\\@\\@\\@\\@`.\r\n      \\\\__/(\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@)\r\n           (\\@\\@\\@\\@\\@\\@\\@\\@)\r\n           `YY~~~~YY'\r\n            ||    ||\r\nEOC\r\n",
  "skeleton": "##\r\n## This 'Scowleton' brought to you by one of \r\n## {appel,kube,rowe}@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n          $thoughts      (__)      \r\n           $thoughts     /$eyes|  \r\n            $thoughts   (_\"_)*+++++++++*\r\n                   //I#\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\I\\\\\r\n                   I[I|I|||||I I `\r\n                   I`I'///'' I I\r\n                   I I       I I\r\n                   ~ ~       ~ ~\r\n                     Scowleton\r\nEOC\r\n",
  "small": "##\r\n## A small cow, artist unknown\r\n##\r\n$eyes = \"..\" unless ($eyes);\r\n$the_cow = <<EOC;\r\n       $thoughts   ,__,\r\n        $thoughts  ($eyes)____\r\n           (__)    )\\\\\r\n            $tongue||--|| *\r\nEOC\r\n",
  "squirrel": "$the_cow = <<EOC;\r\n  $thoughts\r\n     $thoughts\r\n                  _ _\r\n       | \\__/|  .~    ~.\r\n       /$eyes `./      .'\r\n      {o__,   \\    {\r\n        / .  . )    \\\r\n        `-` '-' \\    }\r\n       .(   _(   )_.'\r\n      '---.~_ _ _|\r\n                                                     \r\nEOC\r\n",
  "stegosaurus": "##\r\n## A stegosaur with a top hat?\r\n##\r\n$the_cow = <<EOC;\r\n$thoughts                             .       .\r\n $thoughts                           / `.   .' \" \r\n  $thoughts                  .---.  <    > <    >  .---.\r\n   $thoughts                 |    \\\\  \\\\ - ~ ~ - /  /    |\r\n         _____          ..-~             ~-..-~\r\n        |     |   \\\\~~~\\\\.'                    `./~~~/\r\n       ---------   \\\\__/                        \\\\__/\r\n      .'  O    \\\\     /               /       \\\\  \" \r\n     (_____,    `._.'               |         }  \\\\/~~~/\r\n      `----.          /       }     |        /    \\\\__/\r\n            `-.      |       /      |       /      `. ,~~|\r\n                ~-.__|      /_ - ~ ^|      /- _      `..-'   \r\n                     |     /        |     /     ~-.     `-. _  _  _\r\n                     |_____|        |_____|         ~ - . _ _ _ _ _>\r\nEOC\r\n",
  "stimpy": "##\r\n## Stimpy!\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts     .    _  .    \r\n   $thoughts    |\\\\_|/__/|    \r\n       / / \\\\/ \\\\  \\\\  \r\n      /__|O||O|__ \\\\ \r\n     |/_ \\\\_/\\\\_/ _\\\\ |  \r\n     | | (____) | ||  \r\n     \\\\/\\\\___/\\\\__/  // \r\n     (_/         ||\r\n      |          ||\r\n      |          ||\\\\   \r\n       \\\\        //_/  \r\n        \\\\______//\r\n       __ || __||\r\n      (____(____)\r\nEOC\r\n",
  "supermilker": "##\r\n## A cow being milked, probably from Lars Smith (lars@csua.berkeley.edu)\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts   ^__^\r\n   $thoughts  ($eyes)\\\\_______        ________\r\n      (__)\\\\       )\\\\/\\\\    |Super |\r\n       $tongue ||----W |       |Milker|\r\n          ||    UDDDDDDDDD|______|\r\nEOC\r\n",
  "surgery": "##\r\n## A cow operation, artist unknown\r\n##\r\n$the_cow = <<EOC;\r\n          $thoughts           \\\\  / \r\n           $thoughts           \\\\/  \r\n               (__)    /\\\\         \r\n               ($eyes)   O  O        \r\n               _\\\\/_   //         \r\n         *    (    ) //       \r\n          \\\\  (\\\\\\\\    //       \r\n           \\\\(  \\\\\\\\    )                              \r\n            (   \\\\\\\\   )   /\\\\                          \r\n  ___[\\\\______/^^^^^^^\\\\__/) o-)__                     \r\n |\\\\__[=======______//________)__\\\\                    \r\n \\\\|_______________//____________|                    \r\n     |||      || //||     |||\r\n     |||      || @.||     |||                        \r\n      ||      \\\\/  .\\\\/      ||                        \r\n                 . .                                 \r\n                '.'.`                                \r\n\r\n            COW-OPERATION                           \r\nEOC\r\n",
  "turkey": "##\r\n## Turkey!\r\n##\r\n$the_cow = <<EOC;\r\n  $thoughts                                  ,+*^^*+___+++_\r\n   $thoughts                           ,*^^^^              )\r\n    $thoughts                       _+*                     ^**+_\r\n     $thoughts                    +^       _ _++*+_+++_,         )\r\n              _+^^*+_    (     ,+*^ ^          \\\\+_        )\r\n             {       )  (    ,(    ,_+--+--,      ^)      ^\\\\\r\n            { (\\@)    } f   ,(  ,+-^ __*_*_  ^^\\\\_   ^\\\\       )\r\n           {:;-/    (_+*-+^^^^^+*+*<_ _++_)_    )    )      /\r\n          ( /  (    (        ,___    ^*+_+* )   <    <      \\\\\r\n           U _/     )    *--<  ) ^\\\\-----++__)   )    )       )\r\n            (      )  _(^)^^))  )  )\\\\^^^^^))^*+/    /       /\r\n          (      /  (_))_^)) )  )  ))^^^^^))^^^)__/     +^^\r\n         (     ,/    (^))^))  )  ) ))^^^^^^^))^^)       _)\r\n          *+__+*       (_))^)  ) ) ))^^^^^^))^^^^^)____*^\r\n          \\\\             \\\\_)^)_)) ))^^^^^^^^^^))^^^^)\r\n           (_             ^\\\\__^^^^^^^^^^^^))^^^^^^^)\r\n             ^\\\\___            ^\\\\__^^^^^^))^^^^^^^^)\\\\\\\\\r\n                  ^^^^^\\\\uuu/^^\\\\uuu/^^^^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\\r\n                     ___) >____) >___   ^\\\\_\\\\_\\\\_\\\\_\\\\_\\\\_\\\\)\r\n                    ^^^//\\\\\\\\_^^//\\\\\\\\_^       ^(\\\\_\\\\_\\\\_\\\\)\r\n                      ^^^ ^^ ^^^ ^\r\nEOC\r\n",
  "turtle": "##\r\n## A mysterious turtle...\r\n##\r\n$the_cow = <<EOC;\r\n    $thoughts                                  ___-------___\r\n     $thoughts                             _-~~             ~~-_\r\n      $thoughts                         _-~                    /~-_\r\n             /^\\\\__/^\\\\         /~  \\\\                   /    \\\\\r\n           /|  O|| O|        /      \\\\_______________/        \\\\\r\n          | |___||__|      /       /                \\\\          \\\\\r\n          |          \\\\    /      /                    \\\\          \\\\\r\n          |   (_______) /______/                        \\\\_________ \\\\\r\n          |         / /         \\\\                      /            \\\\\r\n           \\\\         \\\\^\\\\\\\\         \\\\                  /               \\\\     /\r\n             \\\\         ||           \\\\______________/      _-_       //\\\\__//\r\n               \\\\       ||------_-~~-_ ------------- \\\\ --/~   ~\\\\    || __/\r\n                 ~-----||====/~     |==================|       |/~~~~~\r\n                  (_(__/  ./     /                    \\\\_\\\\      \\\\.\r\n                         (_(___/                         \\\\_____)_)\r\nEOC\r\n",
  "tux": "##\r\n## TuX\r\n## (c) pborys@p-soft.silesia.linux.org.pl \r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts\r\n        .--.\r\n       |o_o |\r\n       |:_/ |\r\n      //   \\\\ \\\\\r\n     (|     | )\r\n    /'\\\\_   _/`\\\\\r\n    \\\\___)=(___/\r\n\r\nEOC\r\n",
  "vader-koala": "##\r\n## Another canonical koala?\r\n##\r\n$the_cow = <<EOC;\r\n   $thoughts\r\n    $thoughts        .\r\n     .---.  //\r\n    Y|o o|Y// \r\n   /_(i=i)K/ \r\n   ~()~*~()~  \r\n    (_)-(_)   \r\n\r\n     Darth \r\n     Vader    \r\n     koala        \r\nEOC\r\n",
  "vader": "##\r\n## Cowth Vader, from geordan@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n        $thoughts    ,-^-.\r\n         $thoughts   !oYo!\r\n          $thoughts /./=\\\\.\\\\______\r\n               ##        )\\\\/\\\\\r\n                ||-----w||\r\n                ||      ||\r\n\r\n               Cowth Vader\r\nEOC\r\n",
  "www": "##\r\n## A cow wadvertising the World Wide Web, from lim@csua.berkeley.edu\r\n##\r\n$the_cow = <<EOC;\r\n        $thoughts   ^__^\r\n         $thoughts  ($eyes)\\\\_______\r\n            (__)\\\\       )\\\\/\\\\\r\n             $tongue ||--WWW |\r\n                ||     ||\r\nEOC\r\n"
}

/***/ }),

/***/ "./node_modules/cowsay-browser/lib/cows.js":
/*!*************************************************!*\
  !*** ./node_modules/cowsay-browser/lib/cows.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
var replacer = __webpack_require__(/*! ./replacer */ "./node_modules/cowsay-browser/lib/replacer.js");

var cowdefs = __webpack_require__(/*! ./cow-definitions */ "./node_modules/cowsay-browser/lib/cow-definitions.js").cowdefs;

var textCache = {};

exports.get = function (cow) {
	var text = cowdefs[cow];

	if (!text) {
		text = cowdefs['default'];
	}

	return function (options) {
		return replacer(text, options);
	};
}

exports.list = function (callback) {

	var cows = [];

	for (var cow in cowdefs) {
	  cows.push(cow)
	}

	callback(null, cows);
}


/***/ }),

/***/ "./node_modules/cowsay-browser/lib/faces.js":
/*!**************************************************!*\
  !*** ./node_modules/cowsay-browser/lib/faces.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var modes = {
	"b" : {
		eyes : "==",
		tongue : "  "
	},
	"d" : {
		eyes : "xx",
		tongue : "U "
	},
	"g" : {
		eyes : "$$",
		tongue : "  "
	},
	"p" : {
		eyes : "@@",
		tongue : "  "
	},
	"s" : {
		eyes : "**",
		tongue : "U "
	},
	"t" : {
		eyes : "--",
		tongue : "  "
	},
	"w" : {
		eyes : "OO",
		tongue : "  "
	},
	"y" : {
		eyes : "..",
		tongue : "  "
	}
};

module.exports = function (options) {
	for (var mode in modes) {
		if (options[mode] === true) {
			return modes[mode];
		}
	}

	return {
		eyes : options.e || "oo",
		tongue : options.T || "  "
	};
};


/***/ }),

/***/ "./node_modules/cowsay-browser/lib/replacer.js":
/*!*****************************************************!*\
  !*** ./node_modules/cowsay-browser/lib/replacer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (cow, variables) {
	var eyes = escapeRe(variables.eyes);
	var tongue = escapeRe(variables.tongue);

	if (cow.indexOf("$the_cow") !== -1) {
		cow = extractTheCow(cow);
	}

	return cow
		.replace(/\$thoughts/g, variables.thoughts)
		.replace(/\$eyes/g, eyes)
		.replace(/\$tongue/g, tongue)
		.replace(/\$\{eyes\}/g, eyes)
		.replace(/\$\{tongue\}/g, tongue)
	;
};

/*
 * "$" dollar signs must be doubled before being used in a regex replace
 * This can occur in eyes or tongue.
 * For example:
 *
 * cowsay -g Moo!
 *
 * cowsay -e "\$\$" Moo!
 */
function escapeRe (s) {
	if (s && s.replace) {
		return s.replace(/\$/g, "$$$$");
	}
	return s;
}

function extractTheCow (cow) {
	cow = cow.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, '');
	var match = /\$the_cow\s*=\s*<<"*EOC"*;*\n([\s\S]+)\nEOC\n/.exec(cow);

	if (!match) {
		console.error("Cannot parse cow file\n", cow);
		return cow;
	} else {
		return match[1].replace(/\\{2}/g, "\\").replace(/\\@/g, "@").replace(/\\\$/g, "$");
	}
}

/***/ }),

/***/ "./node_modules/os-browserify/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/os-browserify/browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Nvd3NheS5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nvd3NheS1icm93c2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3dzYXktYnJvd3Nlci9saWIvYmFsbG9vbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY293c2F5LWJyb3dzZXIvbGliL2Nvdy1kZWZpbml0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY293c2F5LWJyb3dzZXIvbGliL2Nvd3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nvd3NheS1icm93c2VyL2xpYi9mYWNlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY293c2F5LWJyb3dzZXIvbGliL3JlcGxhY2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9vcy1icm93c2VyaWZ5L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BhdGgtYnJvd3NlcmlmeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbIkNvd3NheVBhZ2UiLCJwcm9wcyIsInN0YXRlIiwiY293c2F5Iiwic2F5IiwidGV4dCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUdFOztJQUNJQSxVOzs7OztBQUNGLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhLEVBQWI7QUFGaUI7QUFHbEI7Ozs7NkJBQ1E7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDS0MscURBQU0sQ0FBQ0MsR0FBUCxDQUFXO0FBQUVDLFlBQUksRUFBRTtBQUFSLE9BQVgs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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY293c2F5IGZyb20gJ2Nvd3NheS1icm93c2VyJ1xyXG5cclxuICAvL2Nvd3NheVxyXG5jbGFzcyBDb3dzYXlQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICB0aGlzLnN0YXRlID0ge31cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8cHJlPlxyXG4gICAgICAgICAgICB7Y293c2F5LnNheSh7IHRleHQ6ICdoaSB0aGVyZSEnIH0pfVxyXG4gICAgICAgIDwvcHJlPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IENvd3NheVBhZ2UiLCJ2YXIgYmFsb29uID0gcmVxdWlyZShcIi4vbGliL2JhbGxvb25cIik7XHJcbnZhciBjb3dzID0gcmVxdWlyZShcIi4vbGliL2Nvd3NcIik7XHJcbnZhciBmYWNlcyA9IHJlcXVpcmUoXCIuL2xpYi9mYWNlc1wiKTtcclxuXHJcbmV4cG9ydHMuc2F5ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuXHRyZXR1cm4gZG9JdChvcHRpb25zLCB0cnVlKTtcclxufTtcclxuXHJcbmV4cG9ydHMudGhpbmsgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cdHJldHVybiBkb0l0KG9wdGlvbnMsIGZhbHNlKTtcclxufTtcclxuXHJcbmV4cG9ydHMubGlzdCA9IGNvd3MubGlzdDtcclxuXHJcbmZ1bmN0aW9uIGRvSXQgKG9wdGlvbnMsIHNheUFsb3VkKSB7XHJcblx0dmFyIGNvdyA9IGNvd3MuZ2V0KG9wdGlvbnMuZiB8fCBcImRlZmF1bHRcIik7XHJcblx0dmFyIGZhY2UgPSBmYWNlcyhvcHRpb25zKTtcclxuXHRmYWNlLnRob3VnaHRzID0gc2F5QWxvdWQgPyBcIlxcXFxcIiA6IFwib1wiO1xyXG5cclxuXHR2YXIgYWN0aW9uID0gc2F5QWxvdWQgPyBcInNheVwiIDogXCJ0aGlua1wiO1xyXG5cdHJldHVybiBiYWxvb25bYWN0aW9uXShvcHRpb25zLnRleHQgfHwgb3B0aW9ucy5fLmpvaW4oXCIgXCIpLCBvcHRpb25zLm4gPyBudWxsIDogb3B0aW9ucy5XKSArIFwiXFxuXCIgKyBjb3coZmFjZSk7XHJcbn1cclxuIiwidmFyIG9zID0gcmVxdWlyZShcIm9zXCIpO1xyXG5cclxuZXhwb3J0cy5zYXkgPSBmdW5jdGlvbiAodGV4dCwgd3JhcCkge1xyXG5cdGRlbGltaXRlcnMgPSB7XHJcblx0XHRmaXJzdCA6IFtcIi9cIiwgXCJcXFxcXCJdLFxyXG5cdFx0bWlkZGxlIDogW1wifFwiLCBcInxcIl0sXHJcblx0XHRsYXN0IDogW1wiXFxcXFwiLCBcIi9cIl0sXHJcblx0XHRvbmx5IDogW1wiPFwiLCBcIj5cIl1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gZm9ybWF0KHRleHQsIHdyYXAsIGRlbGltaXRlcnMpO1xyXG59XHJcblxyXG5leHBvcnRzLnRoaW5rID0gZnVuY3Rpb24gKHRleHQsIHdyYXApIHtcclxuXHRkZWxpbWl0ZXJzID0ge1xyXG5cdFx0Zmlyc3QgOiBbXCIoXCIsIFwiKVwiXSxcclxuXHRcdG1pZGRsZSA6IFtcIihcIiwgXCIpXCJdLFxyXG5cdFx0bGFzdCA6IFtcIihcIiwgXCIpXCJdLFxyXG5cdFx0b25seSA6IFtcIihcIiwgXCIpXCJdXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIGZvcm1hdCh0ZXh0LCB3cmFwLCBkZWxpbWl0ZXJzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0ICh0ZXh0LCB3cmFwLCBkZWxpbWl0ZXJzKSB7XHJcblx0dmFyIGxpbmVzID0gc3BsaXQodGV4dCwgd3JhcCk7XHJcblx0dmFyIG1heExlbmd0aCA9IG1heChsaW5lcyk7XHJcblxyXG5cdHZhciBiYWxsb29uO1xyXG5cdGlmIChsaW5lcy5sZW5ndGggPT09IDEpIHtcclxuXHRcdGJhbGxvb24gPSBbXHJcblx0XHRcdFwiIFwiICsgdG9wKG1heExlbmd0aCksIFxyXG5cdFx0XHRkZWxpbWl0ZXJzLm9ubHlbMF0gKyBcIiBcIiArIGxpbmVzWzBdICsgXCIgXCIgKyBkZWxpbWl0ZXJzLm9ubHlbMV0sXHJcblx0XHRcdFwiIFwiICsgYm90dG9tKG1heExlbmd0aClcclxuXHRcdF07XHJcblx0fSBlbHNlIHtcclxuXHRcdGJhbGxvb24gPSBbXCIgXCIgKyB0b3AobWF4TGVuZ3RoKV07XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpbmVzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XHJcblx0XHRcdHZhciBkZWxpbWl0ZXI7XHJcblxyXG5cdFx0XHRpZiAoaSA9PT0gMCkge1xyXG5cdFx0XHRcdGRlbGltaXRlciA9IGRlbGltaXRlcnMuZmlyc3Q7XHJcblx0XHRcdH0gZWxzZSBpZiAoaSA9PT0gbGVuIC0gMSkge1xyXG5cdFx0XHRcdGRlbGltaXRlciA9IGRlbGltaXRlcnMubGFzdDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkZWxpbWl0ZXIgPSBkZWxpbWl0ZXJzLm1pZGRsZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0YmFsbG9vbi5wdXNoKGRlbGltaXRlclswXSArIFwiIFwiICsgcGFkKGxpbmVzW2ldLCBtYXhMZW5ndGgpICsgXCIgXCIgKyBkZWxpbWl0ZXJbMV0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGJhbGxvb24ucHVzaChcIiBcIiArIGJvdHRvbShtYXhMZW5ndGgpKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBiYWxsb29uLmpvaW4oXCJcXG5cIik7IC8vb3MuRU9MXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNwbGl0ICh0ZXh0LCB3cmFwKSB7XHJcblx0dGV4dCA9IHRleHQucmVwbGFjZSgvXFxyXFxuP3xbXFxuXFx1MjAyOFxcdTIwMjldL2csIFwiXFxuXCIpLnJlcGxhY2UoL15cXHVGRUZGLywgJycpO1xyXG5cclxuXHR2YXIgbGluZXMgPSBbXTtcclxuXHRpZiAoIXdyYXApIHtcclxuXHRcdGxpbmVzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dmFyIHN0YXJ0ID0gMDtcclxuXHRcdHdoaWxlIChzdGFydCA8IHRleHQubGVuZ3RoKSB7XHJcblx0XHRcdHZhciBuZXh0TmV3TGluZSA9IHRleHQuaW5kZXhPZihcIlxcblwiLCBzdGFydCk7XHJcblxyXG5cdFx0XHR2YXIgd3JhcEF0ID0gTWF0aC5taW4oc3RhcnQgKyB3cmFwLCBuZXh0TmV3TGluZSA9PT0gLTEgPyB0ZXh0Lmxlbmd0aCA6IG5leHROZXdMaW5lKTtcclxuXHJcblx0XHRcdGxpbmVzLnB1c2godGV4dC5zdWJzdHJpbmcoc3RhcnQsIHdyYXBBdCkpO1xyXG5cdFx0XHRzdGFydCA9IHdyYXBBdDtcclxuXHJcblx0XHRcdC8vIElnbm9yZSBuZXh0IG5ldyBsaW5lXHJcblx0XHRcdGlmICh0ZXh0LmNoYXJBdChzdGFydCkgPT09IFwiXFxuXCIpIHtcclxuXHRcdFx0XHRzdGFydCArPSAxO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbGluZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1heCAobGluZXMpIHtcclxuXHR2YXIgbWF4ID0gMDtcclxuXHRmb3IgKHZhciBpID0gMCwgbGVuID0gbGluZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcclxuXHRcdGlmIChsaW5lc1tpXS5sZW5ndGggPiBtYXgpIHtcclxuXHRcdFx0bWF4ID0gbGluZXNbaV0ubGVuZ3RoO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIG1heDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFkICh0ZXh0LCBsZW5ndGgpIHtcclxuXHRyZXR1cm4gdGV4dCArIChuZXcgQXJyYXkobGVuZ3RoIC0gdGV4dC5sZW5ndGggKyAxKSkuam9pbihcIiBcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvcCAobGVuZ3RoKSB7XHJcblx0cmV0dXJuIG5ldyBBcnJheShsZW5ndGggKyAzKS5qb2luKFwiX1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYm90dG9tIChsZW5ndGgpIHtcclxuXHRyZXR1cm4gbmV3IEFycmF5KGxlbmd0aCArIDMpLmpvaW4oXCItXCIpO1xyXG59IiwiLy8gR2VuZXJhdGVkIGNvZGVcbmV4cG9ydHMuY293ZGVmcyA9IHtcbiAgXCJiZWF2aXMuemVuXCI6IFwiIyNcXHJcXG4jIyBCZWF2aXMsIHdpdGggWmVuIHBoaWxvc29waHkgcmVtb3ZlZC5cXHJcXG4jI1xcclxcbiR0aGVfY293ID0gPDxFT0M7XFxyXFxuICAgJHRob3VnaHRzICAgICAgICAgX18tLS0tLS1+fi0sXFxyXFxuICAgICR0aG91Z2h0cyAgICAgICwnICAgICAgICAgICAgLFxcclxcbiAgICAgICAgICAvICAgICAgICAgICAgICAgXFxcXFxcXFxcXHJcXG4gICAgICAgICAvICAgICAgICAgICAgICAgIDpcXHJcXG4gICAgICAgIHwgICAgICAgICAgICAgICAgICAnXFxyXFxuICAgICAgICB8ICAgICAgICAgICAgICAgICAgfFxcclxcbiAgICAgICAgfCAgICAgICAgICAgICAgICAgIHxcXHJcXG4gICAgICAgICB8ICAgXy0tICAgICAgICAgICB8XFxyXFxuICAgICAgICAgX3wgPS0uICAgICAuLS4gICB8fFxcclxcbiAgICAgICAgIG98L28vICAgICAgIF8uICAgfFxcclxcbiAgICAgICAgIC8gIH4gICAgICAgICAgXFxcXFxcXFwgfFxcclxcbiAgICAgICAoX19fX1xcXFxAKSAgX19ffiAgICB8XFxyXFxuICAgICAgICAgIHxfPT09fn5+LmAgICAgfFxcclxcbiAgICAgICBfX19fX19fLi0tfiAgICAgfFxcclxcbiAgICAgICBcXFxcXFxcXF9fX19fX19fICAgICAgIHxcXHJcXG4gICAgICAgICAgICAgICAgXFxcXFxcXFwgICAgICB8XFxyXFxuICAgICAgICAgICAgICBfXy8tX19fLS0gLV9fXFxyXFxuICAgICAgICAgICAgIC8gICAgICAgICAgICBfIFxcXFxcXFxcXFxyXFxuRU9DXFxyXFxuXCIsXG4gIFwiYnVkLWZyb2dzXCI6IFwiIyNcXHJcXG4jIyBUaGUgQnVkd2Vpc2VyIGZyb2dzXFxyXFxuIyNcXHJcXG4kdGhlX2NvdyA9IDw8RU9DO1xcclxcbiAgICAgJHRob3VnaHRzXFxyXFxuICAgICAgJHRob3VnaHRzXFxyXFxuICAgICAgICAgIG9PKS0uICAgICAgICAgICAgICAgICAgICAgICAuLShPb1xcclxcbiAgICAgICAgIC9fXyAgX1xcXFxcXFxcICAgICAgICAgICAgICAgICAgICAgL18gIF9fXFxcXFxcXFxcXHJcXG4gICAgICAgICBcXFxcXFxcXCAgXFxcXFxcXFwoICB8ICAgICAoKX4oKSAgICAgICAgIHwgICkvICAvXFxyXFxuICAgICAgICAgIFxcXFxcXFxcX198XFxcXFxcXFwgfCAgICAoLV9fXy0pICAgICAgICB8IC98X18vXFxyXFxuICAgICAgICAgICcgICctLScgICAgPT1gLSc9PSAgICAgICAgJy0tJyAgJ1xcclxcbkVPQ1xcclxcblwiLFxuICBcImJ1bm55XCI6IFwiIyNcXHJcXG4jIyBBIGN1dGUgbGl0dGxlIHdhYmJpdFxcclxcbiMjXFxyXFxuJHRoZV9jb3cgPSA8PEVPQztcXHJcXG4gICR0aG91Z2h0c1xcclxcbiAgICR0aG91Z2h0cyAgIFxcXFxcXFxcXFxyXFxuICAgICAgICBcXFxcXFxcXCAvXFxcXFxcXFxcXHJcXG4gICAgICAgICggKVxcclxcbiAgICAgIC4oIG8gKS5cXHJcXG5FT0NcXHJcXG5cIixcbiAgXCJjaGVlc2VcIjogXCIjI1xcclxcbiMjIFRoZSBjaGVlc2UgZnJvbSBtaWxrICYgY2hlZXNlXFxyXFxuIyNcXHJcXG4kdGhlX2NvdyA9IDw8RU9DO1xcclxcbiAgICR0aG91Z2h0c1xcclxcbiAgICAkdGhvdWdodHNcXHJcXG4gICAgICBfX19fXyAgIF9fX19fX19fX1xcclxcbiAgICAgLyAgICAgXFxcXFxcXFxfLyAgICAgICAgIHxcXHJcXG4gICAgfCAgICAgICAgICAgICAgICAgfHxcXHJcXG4gICAgfCAgICAgICAgICAgICAgICAgfHxcXHJcXG4gICB8ICAgICMjI1xcXFxcXFxcICAvIyMjICAgfCB8XFxyXFxuICAgfCAgICAgMCAgXFxcXFxcXFwvICAwICAgIHwgfFxcclxcbiAgL3wgICAgICAgICAgICAgICAgIHwgfFxcclxcbiAvIHwgICAgICAgIDwgICAgICAgIHxcXFxcXFxcXCBcXFxcXFxcXFxcclxcbnwgL3wgICAgICAgICAgICAgICAgIHwgfCB8XFxyXFxufCB8ICAgICBcXFxcXFxcXF9fX19fX18vICAgfCAgfCB8XFxyXFxufCB8ICAgICAgICAgICAgICAgICB8IC8gL1xcclxcbi98fCAgICAgICAgICAgICAgICAgL3x8fFxcclxcbiAgIC0tLS0tLS0tLS0tLS0tLS18XFxyXFxuICAgICAgICB8IHwgICAgfCB8XFxyXFxuICAgICAgICAqKiogICAgKioqXFxyXFxuICAgICAgIC9fX19cXFxcXFxcXCAgL19fX1xcXFxcXFxcXFxyXFxuRU9DXFxyXFxuXCIsXG4gIFwiY2hpY2tcIjogXCIkdGhlX2NvdyA9IDw8XFxcIkVPQ1xcXCI7XFxyXFxuJHRob3VnaHRzXFxyXFxuICR0aG91Z2h0c1xcclxcblxcclxcbiAgICAgICAgLi0tLS5cXHJcXG4gICAgIF8gLyAgICAgJyAuLS0tLlxcclxcbiAgICAgPnwgIG8gICAgYCAgICAgYFxcXFxcXHJcXG4gICAgIGAgXFxcXCAgICAgICAuLS0tLl8gJy5fICxcXHJcXG4gICAgICAgICctLjsgICAgICAgICAvYCAgLydcXHJcXG4gICAgICAgICAgIFxcXFwgICAgJy5fLicgICAvXFxyXFxuICAgICAgICAgICAgJy4gICAgICAgIC4nXFxyXFxuICAgICAgICAgICAgICBgXFxcIjstLVxcXFxfL1xcclxcbiAgICAgICBqZ3MgICAgXy9fICAgfFxcclxcbiAgICAgICAgICAgLSdgLyAgLi0tOy0tXFxyXFxuICAgICAgICAgICAgICcgICAgLidcXHJcXG5cXHJcXG5FT0NcXHJcXG5cIixcbiAgXCJjaGlja2VuLWFuZC1lZ2dcIjogXCIkdGhlX2NvdyA9IDw8XFxcIkVPQ1xcXCI7XFxyXFxuJHRob3VnaHRzXFxyXFxuICR0aG91Z2h0c1xcclxcblxcclxcblxcclxcbiAgICAgICAgICAgICAgLycuXyAgICAgXyxcXHJcXG4gICAgICAgICAgICAgIFxcXFwgICA7X18uJyAgfVxcclxcbiAgICAgICAgICAoYC0uXzstXFxcIiBfLi0tLn0nXFxyXFxuICAgICAgICAgIC9fJyAgICAvYCAgICBffSAgICAgXy4tLVxcXCJcXFwiXFxcIi0uXFxyXFxuICAgICAgICAgICAgYC4gICBcXFxcXy5fLjsgICAgIC4nICAgICAgICAgXFxcXFxcclxcbiAgICAgICAgICAgICAgJy0uX18gLyAgICAgIC8gICAgICAgICAgICB8XFxyXFxuICAgICAgamdzICAgICAgXy8gIGBcXFxcICAgICAgXFxcXCAgICAgICAgICAgIC9cXHJcXG4gICAgICAgICAgICAgIF5gICAgXmAgICAgICAgJy5fICAgICAgIC4nXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBcXFwiXFxcIlxcXCJcXFwiXFxcImBcXHJcXG5FT0NcXHJcXG5cIixcbiAgXCJjb3dlclwiOiBcIiMjXFxyXFxuIyMgQSBjb3dlcmluZyBjb3dcXHJcXG4jI1xcclxcbiR0aGVfY293ID0gPDxFT0M7XFxyXFxuICAgICAkdGhvdWdodHNcXHJcXG4gICAgICAkdGhvdWdodHNcXHJcXG4gICAgICAgICxfXywgfCAgICB8IFxcclxcbiAgICAgICAgKG9vKVxcXFxcXFxcfCAgICB8X19fXFxyXFxuICAgICAgICAoX18pXFxcXFxcXFx8ICAgIHwgICApXFxcXFxcXFxfXFxyXFxuICAgICAgICAgICAgIHwgICAgfF93IHwgIFxcXFxcXFxcXFxyXFxuICAgICAgICAgICAgIHwgICAgfCAgfHwgICAqXFxyXFxuXFxyXFxuICAgICAgICAgICAgIENvd2VyLi4uLlxcclxcbkVPQ1xcclxcblwiLFxuICBcImRhZW1vblwiOiBcIiMjXFxyXFxuIyMgNC40ID4+IDUuNFxcclxcbiMjXFxyXFxuJHRoZV9jb3cgPSA8PEVPQztcXHJcXG4gICAkdGhvdWdodHMgICAgICAgICAsICAgICAgICAsXFxyXFxuICAgICR0aG91Z2h0cyAgICAgICAvKCAgICAgICAgKWBcXHJcXG4gICAgICR0aG91Z2h0cyAgICAgIFxcXFxcXFxcIFxcXFxcXFxcX19fICAgLyB8XFxyXFxuICAgICAgICAgICAgLy0gXyAgYC0vICAnXFxyXFxuICAgICAgICAgICAoL1xcXFxcXFxcLyBcXFxcXFxcXCBcXFxcXFxcXCAgIC9cXFxcXFxcXFxcclxcbiAgICAgICAgICAgLyAvICAgfCBgICAgIFxcXFxcXFxcXFxyXFxuICAgICAgICAgICBPIE8gICApIC8gICAgfFxcclxcbiAgICAgICAgICAgYC1eLS0nYDwgICAgICdcXHJcXG4gICAgICAgICAgKF8uKSAgXyAgKSAgIC9cXHJcXG4gICAgICAgICAgIGAuX19fL2AgICAgL1xcclxcbiAgICAgICAgICAgICBgLS0tLS0nIC9cXHJcXG48LS0tLS4gICAgIF9fIC8gX18gICBcXFxcXFxcXFxcclxcbjwtLS0tfD09PT1PKSkpPT0pIFxcXFxcXFxcKSAvPT09PVxcclxcbjwtLS0tJyAgICBgLS0nIGAuX18sJyBcXFxcXFxcXFxcclxcbiAgICAgICAgICAgICB8ICAgICAgICB8XFxyXFxuICAgICAgICAgICAgICBcXFxcXFxcXCAgICAgICAvXFxyXFxuICAgICAgICBfX19fX18oIChfICAvIFxcXFxcXFxcX19fX19fXFxyXFxuICAgICAgLCcgICwtLS0tLScgICB8ICAgICAgICBcXFxcXFxcXFxcclxcbiAgICAgIGAtLXtfX19fX19fX19fKSAgICAgICAgXFxcXFxcXFwvXFxyXFxuRU9DXFxyXFxuXCIsXG4gIFwiZGVmYXVsdFwiOiBcIiR0aGVfY293ID0gPDxcXFwiRU9DXFxcIjtcXHJcXG4gICAgICAgICR0aG91Z2h0cyAgIF5fX15cXHJcXG4gICAgICAgICAkdGhvdWdodHMgICgkZXllcylcXFxcXFxcXF9fX19fX19cXHJcXG4gICAgICAgICAgICAoX18pXFxcXFxcXFwgICAgICAgKVxcXFxcXFxcL1xcXFxcXFxcXFxyXFxuICAgICAgICAgICAgICR0b25ndWUgfHwtLS0tdyB8XFxyXFxuICAgICAgICAgICAgICAgIHx8ICAgICB8fFxcclxcbkVPQ1xcclxcblwiLFxuICBcImRvZ2VcIjogXCIjI1xcclxcbiMjIERvZ2VcXHJcXG4jI1xcclxcbiR0aGVfY293ID0gPDxFT0M7XFxyXFxuICAgJHRob3VnaHRzXFxyXFxuICAgICR0aG91Z2h0c1xcclxcblxcclxcbiAgICAgICAgICAgXyAgICAgICAgICAgICAgICBfXFxyXFxuICAgICAgICAgIC8gLy4gICAgICAgICAgIF8tLy9cXHJcXG4gICAgICAgICAvIC8vLyAgICAgICAgIF8tICAgL1xcclxcbiAgICAgICAgLy9fLS8vPT09PT09PT09ICAgICAvXFxyXFxuICAgICAgXy8vLyAgICAgICAgLy9fIHx8ICAgLi9cXHJcXG4gICAgX3wgICAgICAgICAgICAgICAgIC1fXy18fFxcclxcbiAgIHwgIF9fICAgICAgICAgICAgICAtIFxcXFxcXFxcICAgXFxcXFxcclxcbiAgfCAgfCMtICAgICAgIF8tfF8gICAgICAgICAgIHxcXHJcXG4gIHwgICAgICAgICAgICB8I3x8fCAgICAgICBfICAgfCAgXFxyXFxuIHwgIF89PV8gICAgICAgICAgICAgICAgICAgICAgIHx8XFxyXFxuLSA9PXwuPS49fF8gPSAgICAgICAgICAgICAgICAgIHxcXHJcXG58ICB8LXwtICBfX18gICAgICAgICAgICAgICAgICB8XFxyXFxufCAgICAtLV9fICAgXyAgICAgICAgICAgICAgICAvXFxyXFxufHwgICAgID09PSAgICAgICAgICAgICAgICAgIHxcXHJcXG4gfCAgICAgICAgICAgICAgICAgICAgIF8uIC8vXFxyXFxuICB8fF8gICAgICAgICBfXy0gICBfLSAgX3xcXHJcXG4gICAgIFxcXFxfX19fX19fLyAgX19fLyAgX3xcXHJcXG4gICAgICAgICAgICAgICAgICAgLS0qXFxyXFxuRU9DXFxyXFxuXCIsXG4gIFwiZHJhZ29uLWFuZC1jb3dcIjogXCIjI1xcclxcbiMjIEEgZHJhZ29uIHNtaXRpbmcgYSBjb3csIHBvc3NpYmxlIGNyZWRpdCB0byBrdWJlQGNzdWEuYmVya2VsZXkuZWR1XFxyXFxuIyNcXHJcXG4kdGhlX2NvdyA9IDw8RU9DO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgJHRob3VnaHRzICAgICAgICAgICAgICAgICAgICBeICAgIC9eXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgJHRob3VnaHRzICAgICAgICAgICAgICAgICAgLyBcXFxcXFxcXCAgLy8gXFxcXFxcXFxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgJHRob3VnaHRzICAgfFxcXFxcXFxcX19fL3wgICAgICAvICAgXFxcXFxcXFwvLyAgLlxcXFxcXFxcXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAkdGhvdWdodHMgIC9PICBPICBcXFxcXFxcXF9fICAvICAgIC8vICB8IFxcXFxcXFxcIFxcXFxcXFxcICAgICAgICAgICAqLS0tLSpcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyAgICAgLyAgXFxcXFxcXFwvXy8gICAgLy8gICB8ICBcXFxcXFxcXCAgXFxcXFxcXFwgICAgICAgICAgXFxcXFxcXFwgICB8XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcXFxAX19fXFxcXEBgICAgIFxcXFxcXFxcL18gICAvLyAgICB8ICAgXFxcXFxcXFwgICBcXFxcXFxcXCAgICAgICAgIFxcXFxcXFxcL1xcXFxcXFxcIFxcXFxcXFxcXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgMC8wL3wgICAgICAgXFxcXFxcXFwvXyAvLyAgICAgfCAgICBcXFxcXFxcXCAgICBcXFxcXFxcXCAgICAgICAgIFxcXFxcXFxcICBcXFxcXFxcXFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgMC8wLzAvMC98ICAgICAgICBcXFxcXFxcXC8vLyAgICAgIHwgICAgIFxcXFxcXFxcICAgICBcXFxcXFxcXCAgICAgICB8ICB8XFxyXFxuICAgICAgICAgICAgICAgICAgICAwLzAvMC8wLzAvX3xfIC8gICAoICAvLyAgICAgICB8ICAgICAgXFxcXFxcXFwgICAgIF9cXFxcXFxcXCAgICAgfCAgL1xcclxcbiAgICAgICAgICAgICAgICAgMC8wLzAvMC8wLzAvYC8sXyBfIF8vICApIDsgLS4gICAgfCAgICBfIF9cXFxcXFxcXC4tfiAgICAgICAvICAgL1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLC19ICAgICAgICBfICAgICAgKi0ufC4tfi0uICAgICAgICAgICAufiAgICB+XFxyXFxuICAgICAgICAgICAgXFxcXFxcXFwgICAgIFxcXFxcXFxcX18vICAgICAgICBgL1xcXFxcXFxcICAgICAgLyAgICAgICAgICAgICAgICAgfi0uIF8gLi1+ICAgICAgL1xcclxcbiAgICAgICAgICAgICBcXFxcXFxcXF9fX18oJGV5ZXMpICAgICAgICAgICAqLiAgIH0gICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgIC9cXHJcXG4gICAgICAgICAgICAgKCAgICAoLS0pICAgICAgICAgIC4tLS0tfi0uXFxcXFxcXFwgICAgICAgIFxcXFxcXFxcLWAgICAgICAgICAgICAgICAgIC5+XFxyXFxuICAgICAgICAgICAgIC8vX19cXFxcXFxcXFxcXFxcXFxcICBcXFxcXFxcXF9fIEFjayEgICAvLy8uLS0tLS4uPCAgICAgICAgXFxcXFxcXFwgICAgICAgICAgICAgXyAtflxcclxcbiAgICAgICAgICAgIC8vICAgIFxcXFxcXFxcXFxcXFxcXFwgICAgICAgICAgICAgICAvLy8tLl8gXyBfIF8gXyBfIF97XiAtIC0gLSAtIH5cXHJcXG5FT0NcXHJcXG5cIixcbiAgXCJkcmFnb25cIjogXCIjI1xcclxcbiMjIFRoZSBXaGl0ZXNwYWNlIERyYWdvblxcclxcbiMjXFxyXFxuJHRoZV9jb3cgPSA8PEVPQztcXHJcXG4gICAgICAkdGhvdWdodHMgICAgICAgICAgICAgICAgICAgIC8gXFxcXFxcXFwgIC8vXFxcXFxcXFxcXHJcXG4gICAgICAgJHRob3VnaHRzICAgIHxcXFxcXFxcXF9fXy98ICAgICAgLyAgIFxcXFxcXFxcLy8gIFxcXFxcXFxcXFxcXFxcXFxcXHJcXG4gICAgICAgICAgICAvMCAgMCAgXFxcXFxcXFxfXyAgLyAgICAvLyAgfCBcXFxcXFxcXCBcXFxcXFxcXCAgICBcXHJcXG4gICAgICAgICAgIC8gICAgIC8gIFxcXFxcXFxcL18vICAgIC8vICAgfCAgXFxcXFxcXFwgIFxcXFxcXFxcICBcXHJcXG4gICAgICAgICAgIFxcXFxAX15fXFxcXEAnLyAgIFxcXFxcXFxcL18gICAvLyAgICB8ICAgXFxcXFxcXFwgICBcXFxcXFxcXCBcXHJcXG4gICAgICAgICAgIC8vX15fLyAgICAgXFxcXFxcXFwvXyAvLyAgICAgfCAgICBcXFxcXFxcXCAgICBcXFxcXFxcXFxcclxcbiAgICAgICAgKCAvLykgfCAgICAgICAgXFxcXFxcXFwvLy8gICAgICB8ICAgICBcXFxcXFxcXCAgICAgXFxcXFxcXFxcXHJcXG4gICAgICAoIC8gLykgX3xfIC8gICApICAvLyAgICAgICB8ICAgICAgXFxcXFxcXFwgICAgIF9cXFxcXFxcXFxcclxcbiAgICAoIC8vIC8pICcvLF8gXyBfLyAgKCA7IC0uICAgIHwgICAgXyBfXFxcXFxcXFwuLX4gICAgICAgIC4tfn5+Xi0uXFxyXFxuICAoKCAvIC8gKSkgLC17ICAgICAgICBfICAgICAgYC0ufC4tfi0uICAgICAgICAgICAufiAgICAgICAgIGAuXFxyXFxuICgoIC8vIC8gKSkgICcvXFxcXFxcXFwgICAgICAvICAgICAgICAgICAgICAgICB+LS4gXyAuLX4gICAgICAuLX5eLS4gIFxcXFxcXFxcXFxyXFxuICgoIC8vLyApKSAgICAgIGAuICAgeyAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgLyAgICAgIFxcXFxcXFxcICBcXFxcXFxcXFxcclxcbiAgKCggLyApKSAgICAgLi0tLS1+LS5cXFxcXFxcXCAgICAgICAgXFxcXFxcXFwtJyAgICAgICAgICAgICAgICAgLn4gICAgICAgICBcXFxcXFxcXCAgYC4gXFxcXFxcXFxeLS5cXHJcXG4gICAgICAgICAgICAgLy8vLi0tLS0uLj4gICAgICAgIFxcXFxcXFxcICAgICAgICAgICAgIF8gLX4gICAgICAgICAgICAgYC4gIF4tYCAgXi1fXFxyXFxuICAgICAgICAgICAgICAgLy8vLS5fIF8gXyBfIF8gXyBffV4gLSAtIC0gLSB+ICAgICAgICAgICAgICAgICAgICAgfi0tICwuLX5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLi1+XFxyXFxuRU9DXFxyXFxuXCIsXG4gIFwiZWxlcGhhbnQtaW4tc25ha2VcIjogXCIjI1xcclxcbiMjIERvIHdlIG5lZWQgdG8gZXhwbGFpbiB0aGlzP1xcclxcbiMjXFxyXFxuJHRoZV9jb3cgPSA8PEVPQztcXHJcXG4gICAkdGhvdWdodHNcXHJcXG4gICAgJHRob3VnaHRzICAgICAgICAgICAgICAuLi4uICAgICAgIFxcclxcbiAgICAgICAgICAgLi4uLi4uLi4gICAgLiAgICAgIFxcclxcbiAgICAgICAgICAuICAgICAgICAgICAgLiAgICAgIFxcclxcbiAgICAgICAgIC4gICAgICAgICAgICAgLiAgICAgIFxcclxcbi4uLi4uLi4uLiAgICAgICAgICAgICAgLi4uLi4uLlxcclxcbi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxcclxcblxcclxcbkVsZXBoYW50IGluc2lkZSBBU0NJSSBzbmFrZVxcclxcbkVPQ1xcclxcblwiLFxuICBcImVsZXBoYW50XCI6IFwiIyNcXHJcXG4jIyBBbiBlbGVwaGFudCBvdXQgYW5kIGFib3V0XFxyXFxuIyNcXHJcXG4kdGhlX2NvdyA9IDw8RU9DO1xcclxcbiAkdGhvdWdodHMgICAgIC9cXFxcXFxcXCAgX19fICAvXFxcXFxcXFxcXHJcXG4gICR0aG91Z2h0cyAgIC8vIFxcXFxcXFxcLyAgIFxcXFxcXFxcLyBcXFxcXFxcXFxcXFxcXFxcXFxyXFxuICAgICAoKCAgICBPIE8gICAgKSlcXHJcXG4gICAgICBcXFxcXFxcXFxcXFxcXFxcIC8gICAgIFxcXFxcXFxcIC8vXFxyXFxuICAgICAgIFxcXFxcXFxcLyAgfCB8ICBcXFxcXFxcXC8gXFxyXFxuICAgICAgICB8ICB8IHwgIHwgIFxcclxcbiAgICAgICAgfCAgfCB8ICB8ICBcXHJcXG4gICAgICAgIHwgICBvICAgfCAgXFxyXFxuICAgICAgICB8IHwgICB8IHwgIFxcclxcbiAgICAgICAgfG18ICAgfG18ICBcXHJcXG5FT0NcXHJcXG5cIixcbiAgXCJleWVzXCI6IFwiIyNcXHJcXG4jIyBFdmlsLWxvb2tpbmcgZXllc1xcclxcbiMjXFxyXFxuJHRoZV9jb3cgPSA8PEVPQztcXHJcXG4gICAgJHRob3VnaHRzXFxyXFxuICAgICAkdGhvdWdodHNcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC46OiEhISEhISE6LlxcclxcbiAgLiEhISEhOi4gICAgICAgICAgICAgICAgICAgICAgICAuOiEhISEhISEhISEhIVxcclxcbiAgfn5+fiEhISEhIS4gICAgICAgICAgICAgICAgIC46ISEhISEhISEhVVdXV1xcXFwkXFxcXCRcXFxcJCBcXHJcXG4gICAgICA6XFxcXCRcXFxcJE5XWCEhOiAgICAgICAgICAgLjohISEhISFYVVdXXFxcXCRcXFxcJFxcXFwkXFxcXCRcXFxcJFxcXFwkXFxcXCRcXFxcJFxcXFwkUCBcXHJcXG4gICAgICBcXFxcJFxcXFwkXFxcXCRcXFxcJFxcXFwkIyNXWCE6ICAgICAgLjwhISEhVVdcXFxcJFxcXFwkXFxcXCRcXFxcJFxcXCIgIFxcXFwkXFxcXCRcXFxcJFxcXFwkXFxcXCRcXFxcJFxcXFwkXFxcXCQjIFxcclxcbiAgICAgIFxcXFwkXFxcXCRcXFxcJFxcXFwkXFxcXCQgIFxcXFwkXFxcXCRcXFxcJFVYICAgOiEhVVdcXFxcJFxcXFwkXFxcXCRcXFxcJFxcXFwkXFxcXCRcXFxcJFxcXFwkXFxcXCQgICA0XFxcXCRcXFxcJFxcXFwkXFxcXCRcXFxcJCogXFxyXFxuICAgICAgXlxcXFwkXFxcXCRcXFxcJEIgIFxcXFwkXFxcXCRcXFxcJFxcXFwkXFxcXFxcXFwgICAgIFxcXFwkXFxcXCRcXFxcJFxcXFwkXFxcXCRcXFxcJFxcXFwkXFxcXCRcXFxcJFxcXFwkXFxcXCRcXFxcJCAgIGRcXFxcJFxcXFwkUlxcXCIgXFxyXFxuICAgICAgICBcXFwiKlxcXFwkYmRcXFxcJFxcXFwkXFxcXCRcXFxcJCAgICAgICcqXFxcXCRcXFxcJFxcXFwkXFxcXCRcXFxcJFxcXFwkXFxcXCRcXFxcJFxcXFwkXFxcXCRcXFxcJG8rI1xcXCIgXFxyXFxuICAgICAgICAgICAgIFxcXCJcXFwiXFxcIlxcXCIgICAgICAgICAgXFxcIlxcXCJcXFwiXFxcIlxcXCJcXFwiXFxcIiBcXHJcXG5FT0NcXHJcXG5cIixcbiAgXCJmbGFtaW5nLXNoZWVwXCI6IFwiIyNcXHJcXG4jIyBUaGUgZmxhbWluZyBzaGVlcCwgY29udHJpYnV0ZWQgYnkgR2VvcmRhbiBSb3NhcmlvIChnZW9yZGFuQGNzdWEuYmVya2VsZXkuZWR1KVxcclxcbiMjXFxyXFxuJHRoZV9jb3cgPSA8PEVPQztcXHJcXG4gICR0aG91Z2h0cyAgICAgICAgICAgIC4gICAgLiAgICAgLiAgIFxcclxcbiAgICR0aG91Z2h0cyAgICAgIC4gIC4gLiAgICAgYCAgLCAgICAgXFxyXFxuICAgICR0aG91Z2h0cyAgICAuOyAuICA6IC4nIDogIDogIDogLiBcXHJcXG4gICAgICR0aG91Z2h0cyAgIGkuLmA6IGlgIGkuaS4saSAgaSAuIFxcclxcbiAgICAgICR0aG91Z2h0cyAgIGAsLS0ufGkgfGl8aWl8aWl8aTogXFxyXFxuICAgICAgICAgICBVJHtleWVzfVVcXFxcXFxcXC4nXFxcXEBcXFxcQFxcXFxAXFxcXEBcXFxcQFxcXFxAYC58fCcgXFxyXFxuICAgICAgICAgICBcXFxcXFxcXF9fLyhcXFxcQFxcXFxAXFxcXEBcXFxcQFxcXFxAXFxcXEBcXFxcQFxcXFxAXFxcXEBcXFxcQCknICBcXHJcXG4gICAgICAgICAgICAgICAgKFxcXFxAXFxcXEBcXFxcQFxcXFxAXFxcXEBcXFxcQFxcXFxAXFxcXEApICAgIFxcclxcbiAgICAgICAgICAgICAgICBgWVl+fn5+WVknICAgIFxcclxcbiAgICAgICAgICAgICAgICAgfHwgICAgfHwgICAgIFxcclxcbkVPQ1xcclxcblwiLFxuICBcImdob3N0YnVzdGVyc1wiOiBcIiMjXFxyXFxuIyMgR2hvc3RidXN0ZXJzIVxcclxcbiMjXFxyXFxuJHRoZV9jb3cgPSA8PEVPQztcXHJcXG4gICAgICAgICAgJHRob3VnaHRzXFxyXFxuICAgICAgICAgICAkdGhvdWdodHNcXHJcXG4gICAgICAgICAgICAkdGhvdWdodHMgICAgICAgICAgX18tLS1fX1xcclxcbiAgICAgICAgICAgICAgICAgICAgXy0gICAgICAgLy0tX19fX19fXFxyXFxuICAgICAgICAgICAgICAgX18tLSggLyAgICAgXFxcXFxcXFwgKVhYWFhYWFhYWFhYXFxcXFxcXFx2LlxcclxcbiAgICAgICAgICAgICAuLVhYWCggICBPICAgTyAgKVhYWFhYWFhYWFhYWFhYWC1cXHJcXG4gICAgICAgICAgICAvWFhYKCAgICAgICBVICAgICApICAgICAgICBYWFhYWFhYXFxcXFxcXFxcXHJcXG4gICAgICAgICAgL1hYWFhYKCAgICAgICAgICAgICAgKS0tXyAgWFhYWFhYWFhYWFhcXFxcXFxcXFxcclxcbiAgICAgICAgIC9YWFhYWC8gKCAgICAgIE8gICAgICkgICBYWFhYWFggICBcXFxcXFxcXFhYWFhYXFxcXFxcXFxcXHJcXG4gICAgICAgICBYWFhYWC8gICAvICAgICAgICAgICAgWFhYWFhYICAgXFxcXFxcXFxfXyBcXFxcXFxcXFhYWFhYXFxyXFxuICAgICAgICAgWFhYWFhYX18vICAgICAgICAgIFhYWFhYWCAgICAgICAgIFxcXFxcXFxcX18tLS0tPlxcclxcbiAtLS1fX18gIFhYWF9fLyAgICAgICAgICBYWFhYWFggICAgICBcXFxcXFxcXF9fICAgICAgICAgL1xcclxcbiAgIFxcXFxcXFxcLSAgLS1fXy8gICBfX18vXFxcXFxcXFwgIFhYWFhYWCAgICAgICAgICAgIC8gIF9fXy0tLz1cXHJcXG4gICAgXFxcXFxcXFwtXFxcXFxcXFwgICAgX19fLyAgICBYWFhYWFggICAgICAgICAgICAgICctLS0gWFhYWFhYXFxyXFxuICAgICAgIFxcXFxcXFxcLVxcXFxcXFxcL1hYWFxcXFxcXFxcIFhYWFhYWCAgICAgICAgICAgICAgICAgICAgICAvWFhYWFhcXHJcXG4gICAgICAgICBcXFxcXFxcXFhYWFhYWFhYWCAgIFxcXFxcXFxcICAgICAgICAgICAgICAgICAgICAvWFhYWFgvXFxyXFxuICAgICAgICAgIFxcXFxcXFxcWFhYWFhYICAgICAgPiAgICAgICAgICAgICAgICAgXy9YWFhYWC9cXHJcXG4gICAgICAgICAgICBcXFxcXFxcXFhYWFhYLS1fXy8gICAgICAgICAgICAgIF9fLS0gWFhYWC9cXHJcXG4gICAgICAgICAgICAgLVhYWFhYWFhYLS0tLS0tLS0tLS0tLS0tICBYWFhYWFgtXFxyXFxuICAgICAgICAgICAgICAgIFxcXFxcXFxcWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFgvXFxyXFxuICAgICAgICAgICAgICAgICAgXFxcIlxcXCJWWFhYWFhYWFhYWFhYWFhYWFhYVlxcXCJcXFwiXFxyXFxuRU9DXFxyXFxuXCIsXG4gIFwiaGVsbG9raXR0eVwiOiBcIiMjXFxyXFxuIyMgSGVsbG8gS2l0dHlcXHJcXG4jI1xcclxcbiR0aGVfY293ID0gPDxFT0M7XFxyXFxuICAkdGhvdWdodHNcXHJcXG4gICAkdGhvdWdodHNcXHJcXG4gICAgICAvXFxcXFxcXFxfKW88XFxyXFxuICAgICB8ICAgICAgXFxcXFxcXFxcXHJcXG4gICAgIHwgTyAuIE98XFxyXFxuICAgICAgXFxcXFxcXFxfX19fXy9cXHJcXG5FT0NcXHJcXG5cIixcbiAgXCJraXNzXCI6IFwiIyNcXHJcXG4jIyBBIGxvdmVycycgZW1wYnJhY2VcXHJcXG4jI1xcclxcbiR0aGVfY293ID0gPDxFT0M7XFxyXFxuICAgICAkdGhvdWdodHNcXHJcXG4gICAgICAkdGhvdWdodHNcXHJcXG4gICAgICAgICAgICAgLDs7Ozs7OzssXFxyXFxuICAgICAgICAgICAgOzs7Ozs7Ozs7OzssXFxyXFxuICAgICAgICAgICA7Ozs7OydfX19fXzsnXFxyXFxuICAgICAgICAgICA7OzsoLykpKSl8KChcXFxcXFxcXFxcclxcbiAgICAgICAgICAgXzs7KCgoKCgofCkpKSlcXHJcXG4gICAgICAgICAgLyB8X1xcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcclxcbiAgICAgLi0tfiggIFxcXFxcXFxcIH4pKSkpKSkpKSkpKSlcXHJcXG4gICAgLyAgICAgXFxcXFxcXFwgIGBcXFxcXFxcXC0oKCgoKCgoKCgoKFxcXFxcXFxcXFxcXFxcXFxcXHJcXG4gICAgfCAgICB8IGBcXFxcXFxcXCAgICkgfFxcXFxcXFxcICAgICAgIC98KVxcclxcbiAgICAgfCAgICB8ICBgLiBfLyAgXFxcXFxcXFxfX19fXy8gfFxcclxcbiAgICAgIHwgICAgLCBgXFxcXFxcXFx+ICAgICAgICAgICAgL1xcclxcbiAgICAgICB8ICAgIFxcXFxcXFxcICBcXFxcXFxcXCAgICAgICAgICAgL1xcclxcbiAgICAgIHwgYC4gICBgXFxcXFxcXFx8ICAgICAgICAgIC9cXHJcXG4gICAgICB8ICAgfi0gICBgXFxcXFxcXFwgICAgICAgIC9cXHJcXG4gICAgICAgXFxcXFxcXFxfX19ffi5fL34gLV8sICAgKFxcXFxcXFxcXFxyXFxuICAgICAgICB8LS0tLS18XFxcXFxcXFwgICBcXFxcXFxcXCAgICAnOztcXHJcXG4gICAgICAgfCAgICAgIHwgOjs7OycgICAgIFxcXFxcXFxcXFxyXFxuICAgICAgfCAgLyAgICB8ICAgICAgICAgICAgfFxcclxcbiAgICAgIHwgICAgICAgfCAgICAgICAgICAgIHxcXHJcXG5FT0NcXHJcXG5cIixcbiAgXCJraXR0eVwiOiBcIiMjXFxyXFxuIyMgQSBraXR0ZW4gb2Ygc29ydHMsIEkgdGhpbmtcXHJcXG4jI1xcclxcbiR0aGVfY293ID0gPDxFT0M7XFxyXFxuICAgICAkdGhvdWdodHNcXHJcXG4gICAgICAkdGhvdWdodHNcXHJcXG4gICAgICAgKFxcXCJgLScgICctL1xcXCIpIC5fX18uLi0tJyAnIFxcXCJgLS5fXFxyXFxuICAgICAgICAgYCAqXyAqICApICAgIGAtLiAgICggICAgICApIC5gLS5fXy4gYClcXHJcXG4gICAgICAgICAoX1lfLikgJyAuXyAgICkgICBgLl9gIDsgIGBgIC0uIC4tJ1xcclxcbiAgICAgIF8uLiBgLS0nXy4uLV8vICAgLy0tJyBfIC4nICw0XFxyXFxuICAgKCBpIGwgKSwtJycgICggbCBpKSwnICAoICggISAuLScgICAgXFxyXFxuRU9DXFxyXFxuXCIsXG4gIFwia29hbGFcIjogXCIjI1xcclxcbiMjIEZyb20gdGhlIGNhbm9uaWNhbCBrb2FsYSBjb2xsZWN0aW9uXFxyXFxuIyNcXHJcXG4kdGhlX2NvdyA9IDw8RU9DO1xcclxcbiAgJHRob3VnaHRzXFxyXFxuICAgJHRob3VnaHRzXFxyXFxuICAgICAgIF9fXyAgXFxyXFxuICAgICB7fi5fLn59XFxyXFxuICAgICAgKCBZIClcXHJcXG4gICAgICgpfip+KCkgICBcXHJcXG4gICAgIChfKS0oXykgICBcXHJcXG5FT0NcXHJcXG5cIixcbiAgXCJrb3NoXCI6IFwiIyNcXHJcXG4jIyBJdCdzIGEgS29zaCBDb3chXFxyXFxuIyNcXHJcXG4kdGhlX2NvdyA9IDw8RU9DO1xcclxcbiAgICAkdGhvdWdodHNcXHJcXG4gICAgICR0aG91Z2h0c1xcclxcbiAgICAgICR0aG91Z2h0c1xcclxcbiAgX19fICAgICAgIF9fX19fICAgICBfX19cXHJcXG4gLyAgIFxcXFxcXFxcICAgICAvICAgIC98ICAgLyAgIFxcXFxcXFxcXFxyXFxufCAgICAgfCAgIC8gICAgLyB8ICB8ICAgICB8XFxyXFxufCAgICAgfCAgL19fX18vICB8ICB8ICAgICB8ICAgICBcXHJcXG58ICAgICB8ICB8ICAgIHwgIHwgIHwgICAgIHxcXHJcXG58ICAgICB8ICB8IHt9IHwgLyAgIHwgICAgIHxcXHJcXG58ICAgICB8ICB8X19fX3wvICAgIHwgICAgIHxcXHJcXG58ICAgICB8ICAgIHw9PXwgICAgIHwgICAgIHxcXHJcXG58ICAgICAgXFxcXFxcXFxfX19fX19fX19fXy8gICAgICB8XFxyXFxufCAgICAgICAgICAgICAgICAgICAgICAgICB8XFxyXFxufCAgICAgICAgICAgICAgICAgICAgICAgICB8XFxyXFxuRU9DXFxyXFxuXCIsXG4gIFwibHVrZS1rb2FsYVwiOiBcIiMjXFxyXFxuIyMgRnJvbSB0aGUgY2Fub25pY2FsIGtvYWxhIGNvbGxlY3Rpb25cXHJcXG4jI1xcclxcbiR0aGVfY293ID0gPDxFT0M7XFxyXFxuICAkdGhvdWdodHNcXHJcXG4gICAkdGhvdWdodHMgICAgICAgICAgLlxcclxcbiAgICAgICBfX18gICAvL1xcclxcbiAgICAge34uXy5+fS8vIFxcclxcbiAgICAgICggWSApSy8gIFxcclxcbiAgICAgKCl+Kn4oKSAgIFxcclxcbiAgICAgKF8pLShfKSAgIFxcclxcbiAgICAgTHVrZSAgICBcXHJcXG4gICAgIFN5d2Fsa2VyXFxyXFxuICAgICBrb2FsYSAgIFxcclxcbkVPQ1xcclxcblwiLFxuICBcIm1lY2gtYW5kLWNvd1wiOiBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLC0tLS0tLlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLC0tfCAgICAgfC0uXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgIF9fLC0tLS18ICB8ICAgICB8IHxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICw7OjogICAgIHwgIGBfX19fXycgfFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgYC5fX19fX19ffCAgICBpXmkgICB8XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLS0tLXwgfC0tLSd8IC5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAsLS0tLS0tLS5ffCB8PT0gfHwvL1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfF98UGAuICAvJy9cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgLS0tLS0tLScgJ1kgWS8nLydcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLj09XFxcXCAvX1xcXFxcXHJcXG4gICBeX19eICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvICAgLyd8ICBgaVxcclxcbiAgIChvbylcXFxcX19fX19fXyAgICAgICAgICAgICAgICAgICAvJyAgIC8gIHwgICB8XFxyXFxuICAgKF9fKVxcXFwgICAgICAgKVxcXFwvXFxcXCAgICAgICAgICAgICAvJyAgICAvICAgfCAgIGBpXFxyXFxuICAgICAgIHx8LS0tLXcgfCAgICAgICAgICAgX19fLDtgLS0tLScuX19fTF8sLSdgXFxcXF9fXFxyXFxuICAgICAgIHx8ICAgICB8fCAgICAgICAgICBpX19fX187LS0tLVxcXFwuX19fX2lcXFwiXFxcIlxcXFxfX19fXFxcXFxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblwiLFxuICBcIm1lb3dcIjogXCIjI1xcclxcbiMjIEEgbWVvd2luZyB0aWdlcj9cXHJcXG4jI1xcclxcbiR0aGVfY293ID0gPDxFT0M7XFxyXFxuICAkdGhvdWdodHNcXHJcXG4gICAkdGhvdWdodHMgLCAgIF8gX19fLi0tJycnYC0tJycvLy0sLV8tLV8uXFxyXFxuICAgICAgXFxcXFxcXFxgXFxcIicgYCB8fCBcXFxcXFxcXFxcXFxcXFxcIFxcXFxcXFxcIFxcXFxcXFxcXFxcXFxcXFwvIC8gLy8gLyAsLVxcXFxcXFxcXFxcXFxcXFxgLF9cXHJcXG4gICAgIC8nYCAgXFxcXFxcXFwgXFxcXFxcXFwgfHwgWSAgfCBcXFxcXFxcXHwvIC8gLy8gLyAtIHxfXyBgLSxcXHJcXG4gICAgL1xcXFxAXFxcIlxcXFxcXFxcICBgIFxcXFxcXFxcIGBcXFxcXFxcXCB8ICB8IHx8LyAvLyB8IFxcXFxcXFxcLyAgXFxcXFxcXFwgIGAtLl9gLSxfLixcXHJcXG4gICAvICBfLi0uIGAuLVxcXFxcXFxcLF9fXy9cXFxcXFxcXCBfL3xfL19cXFxcXFxcXF9cXFxcXFxcXC98Xy8gfCAgICAgYC0uXy5fKVxcclxcbiAgIGAtJ2BgLyAgLyAgfCAgLy8gXFxcXFxcXFxfXy9cXFxcXFxcXF9fICAvICBcXFxcXFxcXF9fLyBcXFxcXFxcXFxcclxcbiAgICAgICAgYC0nICAvLVxcXFxcXFxcLyAgfCAtfCAgIFxcXFxcXFxcX18gXFxcXFxcXFwgICB8LScgfFxcclxcbiAgICAgICAgICBfXy9cXFxcXFxcXCAvIF8vIFxcXFxcXFxcLyBfXywtJyAgICkgLCcgX3wnXFxyXFxuICAgICAgICAgKCgoX18vKCgoXy4nICgoX19fLi4tJygoX18sJ1xcclxcbkVPQ1xcclxcblwiLFxuICBcIm1pbGtcIjogXCIjI1xcclxcbiMjIE1pbGsgZnJvbSBNaWxrIGFuZCBDaGVlc2VcXHJcXG4jI1xcclxcbiR0aGVfY293ID0gPDxFT0M7XFxyXFxuICR0aG91Z2h0cyAgICAgX19fX19fX19fX19fIFxcclxcbiAgJHRob3VnaHRzICAgIHxfX19fX19fX19ffFxcclxcbiAgICAgIC8gICAgICAgICAgIC9cXFxcXFxcXFxcclxcbiAgICAgLyAgICAgICAgICAgLyAgXFxcXFxcXFxcXHJcXG4gICAgL19fX19fX19fX19fL19fXy98XFxyXFxuICAgIHwgICAgICAgICAgfCAgICAgfFxcclxcbiAgICB8ICA9PVxcXFxcXFxcIC89PSB8ICAgICB8XFxyXFxuICAgIHwgICBPICAgTyAgfCBcXFxcXFxcXCBcXFxcXFxcXCB8XFxyXFxuICAgIHwgICAgIDwgICAgfCAgXFxcXFxcXFwgXFxcXFxcXFx8XFxyXFxuICAgL3wgICAgICAgICAgfCAgIFxcXFxcXFxcIFxcXFxcXFxcXFxyXFxuICAvIHwgIFxcXFxcXFxcX19fX18vIHwgICAvIC9cXHJcXG4gLyAvfCAgICAgICAgICB8ICAvIC98XFxyXFxuL3x8XFxcXFxcXFx8ICAgICAgICAgIHwgL3x8XFxcXFxcXFwvXFxyXFxuICAgIC0tLS0tLS0tLS0tLS18ICAgXFxyXFxuICAgICAgICB8IHwgICAgfCB8IFxcclxcbiAgICAgICA8X18vICAgIFxcXFxcXFxcX18+XFxyXFxuRU9DXFxyXFxuXCIsXG4gIFwibW9vZmFzYVwiOiBcIiMjXFxyXFxuIyMgTU9PZmFzYS5cXHJcXG4jI1xcclxcbiR0aGVfY293ID0gPDxFT0M7XFxyXFxuICAgICAgICR0aG91Z2h0cyAgICBfX19fXFxyXFxuICAgICAgICAkdGhvdWdodHMgIC8gICAgXFxcXFxcXFxcXHJcXG4gICAgICAgICAgfCBeX19eIHxcXHJcXG4gICAgICAgICAgfCAoJGV5ZXMpIHxfX19fX19cXHJcXG4gICAgICAgICAgfCAoX18pIHwgICAgICApXFxcXFxcXFwvXFxcXFxcXFxcXHJcXG4gICAgICAgICAgIFxcXFxcXFxcX19fXy98LS0tLXcgfFxcclxcbiAgICAgICAgICAgICAgICB8fCAgICAgfHxcXHJcXG5cXHJcXG5cXHQgICAgICAgICBNb29mYXNhXFxyXFxuRU9DXFxyXFxuXCIsXG4gIFwibW9vc2VcIjogXCIkdGhlX2NvdyA9IDw8RU9DO1xcclxcbiAgJHRob3VnaHRzXFxyXFxuICAgJHRob3VnaHRzICAgXFxcXFxcXFxfXFxcXFxcXFxfICAgIF8vXy9cXHJcXG4gICAgJHRob3VnaHRzICAgICAgXFxcXFxcXFxfXy9cXHJcXG4gICAgICAgICAgICgkZXllcylcXFxcXFxcXF9fX19fX19cXHJcXG4gICAgICAgICAgIChfXylcXFxcXFxcXCAgICAgICApXFxcXFxcXFwvXFxcXFxcXFxcXHJcXG4gICAgICAgICAgICAkdG9uZ3VlIHx8LS0tLXcgfFxcclxcbiAgICAgICAgICAgICAgIHx8ICAgICB8fFxcclxcbkVPQ1xcclxcblwiLFxuICBcIm11dGlsYXRlZFwiOiBcIiMjXFxyXFxuIyMgQSBtdXRpbGF0ZWQgY293LCBmcm9tIGFzcG9saXRvQGNzdWEuYmVya2VsZXkuZWR1XFxyXFxuIyNcXHJcXG4kdGhlX2NvdyA9IDw8RU9DO1xcclxcbiAgICAgICAkdGhvdWdodHMgICBcXFxcXFxcXF9fX19fX19cXHJcXG4gdl9fdiAgICR0aG91Z2h0cyAgXFxcXFxcXFwgICBPICAgKVxcclxcbiAoJGV5ZXMpICAgICAgfHwtLS0tdyB8XFxyXFxuIChfXykgICAgICB8fCAgICAgfHwgIFxcXFxcXFxcL1xcXFxcXFxcXFxyXFxuICAkdG9uZ3VlXFxyXFxuRU9DXFxyXFxuXCIsXG4gIFwicmVuXCI6IFwiIyNcXHJcXG4jIyBSZW4gXFxyXFxuIyNcXHJcXG4kdGhlX2NvdyA9IDw8RU9DO1xcclxcbiAgICR0aG91Z2h0c1xcclxcbiAgICAkdGhvdWdodHNcXHJcXG4gICAgX19fXyAgXFxyXFxuICAgLyMgL19cXFxcXFxcXF9cXHJcXG4gIHwgIHwvb1xcXFxcXFxcb1xcXFxcXFxcXFxyXFxuICB8ICBcXFxcXFxcXFxcXFxcXFxcXy9fL1xcclxcbiAvIHxfICAgfCAgXFxyXFxufCAgfHxcXFxcXFxcXF8gfnwgXFxyXFxufCAgfHx8IFxcXFxcXFxcLyAgXFxyXFxufCAgfHx8XyAgICBcXHJcXG4gXFxcXFxcXFwvLyAgfCAgICBcXHJcXG4gIHx8ICB8ICAgIFxcclxcbiAgfHxfICBcXFxcXFxcXCAgIFxcclxcbiAgXFxcXFxcXFxffCAgb3wgIFxcclxcbiAgL1xcXFxcXFxcX19fLyAgIFxcclxcbiAvICB8fHx8X18gXFxyXFxuICAgIChfX18pXylcXHJcXG5FT0NcXHJcXG5cIixcbiAgXCJyb29zdGVyXCI6IFwiJHRoZV9jb3cgPSA8PFxcXCJFT0NcXFwiO1xcclxcbiR0aG91Z2h0c1xcclxcbiAkdGhvdWdodHNcXHJcXG5cXHJcXG4uXFxcIi5cXFwiLlxcXCIuXFxyXFxuKGAgICAgICAgYCkgICAgICAgICAgICAgICBfLi09LS5cXHJcXG4nLl8uLS0uLTsgICAgICAgICAgICAgLi1gICAtJyAgJy5cXHJcXG4uLSdgLm8gKSAgXFxcXCAgICAgICAgICAgLyAgLi1fLi0tJyAgYFxcXFxcXHJcXG5gOy0tLSkgXFxcXCAgICA7ICAgICAgICAgLyAgLyA7JyBfLV8uLScgYFxcclxcbmA7XFxcImAgIDsgICAgXFxcXCAgICAgICAgOyAuICAuJyAgIF8tJyBcXFxcXFxyXFxuKCAgICApICAgIHwgICAgICAgIHwgIC8gLi0uLScgICAgLWBcXHJcXG4gJy0uLScgICAgIFxcXFwgICAgICAgfCAuJyBgICcuLSctXFxcXGBcXHJcXG4gIC9fLi9cXFxcXy58XFxcXF9cXFxcICAgICAgOyAgJyAuJy0nLi0uXFxyXFxuICAvICAgICAgICAgJy0uXyAgICBcXFxcYCAvICBfOy0sXFxyXFxuIHwgICAgICAgICAuLT0tLjstLl8gXFxcXCAgLSctLFxcclxcbiBcXFxcICAgICAgICAvICAgICAgYFxcXCI7YC1gLC1cXFwiYClcXHJcXG4gIFxcXFwgICAgICAgXFxcXCAgICAgJy0tIGBcXFxcLlxcXFxcXHJcXG4gICAnLiAgICAgICcuXyAnLS0gJy0tJy9cXHJcXG4gICAgIGAtLl8gICAgIGAnLS0tLSdgO1xcclxcbiAgICAgICAgIGBcXFwiXFxcIlxcXCItLS5fX19fLC9cXHJcXG4gICAgICAgICAgICAgICAgXFxcXFxcXFwgIFxcXFxcXHJcXG4gICAgICAgICAgICAgICAgLy8gL2BcXHJcXG4gICAgICAgICAgICBfX18vLyAvX19cXHJcXG4gIGpncyAgICAgKGAoYCgtLS1cXFwiLWApXFxyXFxuXFxyXFxuRU9DXFxyXFxuXCIsXG4gIFwic2F0YW5pY1wiOiBcIiMjXFxyXFxuIyMgU2F0YW5pYyBjb3csIHNvdXJjZSB1bmtub3duLlxcclxcbiMjXFxyXFxuJHRoZV9jb3cgPSA8PEVPQztcXHJcXG4gICAgICR0aG91Z2h0c1xcclxcbiAgICAgICR0aG91Z2h0cyAgKF9fKSAgXFxyXFxuICAgICAgICAgKFxcXFxcXFxcLykgIFxcclxcbiAgLy0tLS0tLS1cXFxcXFxcXC8gICAgXFxyXFxuIC8gfCA2NjYgfHwgICAgXFxyXFxuKiAgfHwtLS0tfHwgICAgICBcXHJcXG4gICB+fiAgICB+fiAgICAgIFxcclxcbkVPQ1xcclxcblwiLFxuICBcInNoZWVwXCI6IFwiIyNcXHJcXG4jIyBUaGUgbm9uLWZsYW1pbmcgc2hlZXAuXFxyXFxuIyNcXHJcXG4kdGhlX2NvdyA9IDw8RU9DXFxyXFxuICAkdGhvdWdodHNcXHJcXG4gICAkdGhvdWdodHNcXHJcXG4gICAgICAgX18gICAgIFxcclxcbiAgICAgIFUke2V5ZXN9VVxcXFxcXFxcLidcXFxcQFxcXFxAXFxcXEBcXFxcQFxcXFxAXFxcXEBgLlxcclxcbiAgICAgIFxcXFxcXFxcX18vKFxcXFxAXFxcXEBcXFxcQFxcXFxAXFxcXEBcXFxcQFxcXFxAXFxcXEBcXFxcQFxcXFxAKVxcclxcbiAgICAgICAgICAgKFxcXFxAXFxcXEBcXFxcQFxcXFxAXFxcXEBcXFxcQFxcXFxAXFxcXEApXFxyXFxuICAgICAgICAgICBgWVl+fn5+WVknXFxyXFxuICAgICAgICAgICAgfHwgICAgfHxcXHJcXG5FT0NcXHJcXG5cIixcbiAgXCJza2VsZXRvblwiOiBcIiMjXFxyXFxuIyMgVGhpcyAnU2Nvd2xldG9uJyBicm91Z2h0IHRvIHlvdSBieSBvbmUgb2YgXFxyXFxuIyMge2FwcGVsLGt1YmUscm93ZX1AY3N1YS5iZXJrZWxleS5lZHVcXHJcXG4jI1xcclxcbiR0aGVfY293ID0gPDxFT0M7XFxyXFxuICAgICAgICAgICR0aG91Z2h0cyAgICAgIChfXykgICAgICBcXHJcXG4gICAgICAgICAgICR0aG91Z2h0cyAgICAgLyRleWVzfCAgXFxyXFxuICAgICAgICAgICAgJHRob3VnaHRzICAgKF9cXFwiXykqKysrKysrKysrKlxcclxcbiAgICAgICAgICAgICAgICAgICAvL0kjXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXElcXFxcXFxcXFxcclxcbiAgICAgICAgICAgICAgICAgICBJW0l8SXx8fHx8SSBJIGBcXHJcXG4gICAgICAgICAgICAgICAgICAgSWBJJy8vLycnIEkgSVxcclxcbiAgICAgICAgICAgICAgICAgICBJIEkgICAgICAgSSBJXFxyXFxuICAgICAgICAgICAgICAgICAgIH4gfiAgICAgICB+IH5cXHJcXG4gICAgICAgICAgICAgICAgICAgICBTY293bGV0b25cXHJcXG5FT0NcXHJcXG5cIixcbiAgXCJzbWFsbFwiOiBcIiMjXFxyXFxuIyMgQSBzbWFsbCBjb3csIGFydGlzdCB1bmtub3duXFxyXFxuIyNcXHJcXG4kZXllcyA9IFxcXCIuLlxcXCIgdW5sZXNzICgkZXllcyk7XFxyXFxuJHRoZV9jb3cgPSA8PEVPQztcXHJcXG4gICAgICAgJHRob3VnaHRzICAgLF9fLFxcclxcbiAgICAgICAgJHRob3VnaHRzICAoJGV5ZXMpX19fX1xcclxcbiAgICAgICAgICAgKF9fKSAgICApXFxcXFxcXFxcXHJcXG4gICAgICAgICAgICAkdG9uZ3VlfHwtLXx8ICpcXHJcXG5FT0NcXHJcXG5cIixcbiAgXCJzcXVpcnJlbFwiOiBcIiR0aGVfY293ID0gPDxFT0M7XFxyXFxuICAkdGhvdWdodHNcXHJcXG4gICAgICR0aG91Z2h0c1xcclxcbiAgICAgICAgICAgICAgICAgIF8gX1xcclxcbiAgICAgICB8IFxcXFxfXy98ICAufiAgICB+LlxcclxcbiAgICAgICAvJGV5ZXMgYC4vICAgICAgLidcXHJcXG4gICAgICB7b19fLCAgIFxcXFwgICAge1xcclxcbiAgICAgICAgLyAuICAuICkgICAgXFxcXFxcclxcbiAgICAgICAgYC1gICctJyBcXFxcICAgIH1cXHJcXG4gICAgICAgLiggICBfKCAgIClfLidcXHJcXG4gICAgICAnLS0tLn5fIF8gX3xcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcbkVPQ1xcclxcblwiLFxuICBcInN0ZWdvc2F1cnVzXCI6IFwiIyNcXHJcXG4jIyBBIHN0ZWdvc2F1ciB3aXRoIGEgdG9wIGhhdD9cXHJcXG4jI1xcclxcbiR0aGVfY293ID0gPDxFT0M7XFxyXFxuJHRob3VnaHRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuICAgICAgIC5cXHJcXG4gJHRob3VnaHRzICAgICAgICAgICAgICAgICAgICAgICAgICAgLyBgLiAgIC4nIFxcXCIgXFxyXFxuICAkdGhvdWdodHMgICAgICAgICAgICAgICAgICAuLS0tLiAgPCAgICA+IDwgICAgPiAgLi0tLS5cXHJcXG4gICAkdGhvdWdodHMgICAgICAgICAgICAgICAgIHwgICAgXFxcXFxcXFwgIFxcXFxcXFxcIC0gfiB+IC0gLyAgLyAgICB8XFxyXFxuICAgICAgICAgX19fX18gICAgICAgICAgLi4tfiAgICAgICAgICAgICB+LS4uLX5cXHJcXG4gICAgICAgIHwgICAgIHwgICBcXFxcXFxcXH5+flxcXFxcXFxcLicgICAgICAgICAgICAgICAgICAgIGAuL35+fi9cXHJcXG4gICAgICAgLS0tLS0tLS0tICAgXFxcXFxcXFxfXy8gICAgICAgICAgICAgICAgICAgICAgICBcXFxcXFxcXF9fL1xcclxcbiAgICAgIC4nICBPICAgIFxcXFxcXFxcICAgICAvICAgICAgICAgICAgICAgLyAgICAgICBcXFxcXFxcXCAgXFxcIiBcXHJcXG4gICAgIChfX19fXywgICAgYC5fLicgICAgICAgICAgICAgICB8ICAgICAgICAgfSAgXFxcXFxcXFwvfn5+L1xcclxcbiAgICAgIGAtLS0tLiAgICAgICAgICAvICAgICAgIH0gICAgIHwgICAgICAgIC8gICAgXFxcXFxcXFxfXy9cXHJcXG4gICAgICAgICAgICBgLS4gICAgICB8ICAgICAgIC8gICAgICB8ICAgICAgIC8gICAgICBgLiAsfn58XFxyXFxuICAgICAgICAgICAgICAgIH4tLl9ffCAgICAgIC9fIC0gfiBefCAgICAgIC8tIF8gICAgICBgLi4tJyAgIFxcclxcbiAgICAgICAgICAgICAgICAgICAgIHwgICAgIC8gICAgICAgIHwgICAgIC8gICAgIH4tLiAgICAgYC0uIF8gIF8gIF9cXHJcXG4gICAgICAgICAgICAgICAgICAgICB8X19fX198ICAgICAgICB8X19fX198ICAgICAgICAgfiAtIC4gXyBfIF8gXyBfPlxcclxcbkVPQ1xcclxcblwiLFxuICBcInN0aW1weVwiOiBcIiMjXFxyXFxuIyMgU3RpbXB5IVxcclxcbiMjXFxyXFxuJHRoZV9jb3cgPSA8PEVPQztcXHJcXG4gICR0aG91Z2h0cyAgICAgLiAgICBfICAuICAgIFxcclxcbiAgICR0aG91Z2h0cyAgICB8XFxcXFxcXFxffC9fXy98ICAgIFxcclxcbiAgICAgICAvIC8gXFxcXFxcXFwvIFxcXFxcXFxcICBcXFxcXFxcXCAgXFxyXFxuICAgICAgL19ffE98fE98X18gXFxcXFxcXFwgXFxyXFxuICAgICB8L18gXFxcXFxcXFxfL1xcXFxcXFxcXy8gX1xcXFxcXFxcIHwgIFxcclxcbiAgICAgfCB8IChfX19fKSB8IHx8ICBcXHJcXG4gICAgIFxcXFxcXFxcL1xcXFxcXFxcX19fL1xcXFxcXFxcX18vICAvLyBcXHJcXG4gICAgIChfLyAgICAgICAgIHx8XFxyXFxuICAgICAgfCAgICAgICAgICB8fFxcclxcbiAgICAgIHwgICAgICAgICAgfHxcXFxcXFxcXCAgIFxcclxcbiAgICAgICBcXFxcXFxcXCAgICAgICAgLy9fLyAgXFxyXFxuICAgICAgICBcXFxcXFxcXF9fX19fXy8vXFxyXFxuICAgICAgIF9fIHx8IF9ffHxcXHJcXG4gICAgICAoX19fXyhfX19fKVxcclxcbkVPQ1xcclxcblwiLFxuICBcInN1cGVybWlsa2VyXCI6IFwiIyNcXHJcXG4jIyBBIGNvdyBiZWluZyBtaWxrZWQsIHByb2JhYmx5IGZyb20gTGFycyBTbWl0aCAobGFyc0Bjc3VhLmJlcmtlbGV5LmVkdSlcXHJcXG4jI1xcclxcbiR0aGVfY293ID0gPDxFT0M7XFxyXFxuICAkdGhvdWdodHMgICBeX19eXFxyXFxuICAgJHRob3VnaHRzICAoJGV5ZXMpXFxcXFxcXFxfX19fX19fICAgICAgICBfX19fX19fX1xcclxcbiAgICAgIChfXylcXFxcXFxcXCAgICAgICApXFxcXFxcXFwvXFxcXFxcXFwgICAgfFN1cGVyIHxcXHJcXG4gICAgICAgJHRvbmd1ZSB8fC0tLS1XIHwgICAgICAgfE1pbGtlcnxcXHJcXG4gICAgICAgICAgfHwgICAgVURERERERERERHxfX19fX198XFxyXFxuRU9DXFxyXFxuXCIsXG4gIFwic3VyZ2VyeVwiOiBcIiMjXFxyXFxuIyMgQSBjb3cgb3BlcmF0aW9uLCBhcnRpc3QgdW5rbm93blxcclxcbiMjXFxyXFxuJHRoZV9jb3cgPSA8PEVPQztcXHJcXG4gICAgICAgICAgJHRob3VnaHRzICAgICAgICAgICBcXFxcXFxcXCAgLyBcXHJcXG4gICAgICAgICAgICR0aG91Z2h0cyAgICAgICAgICAgXFxcXFxcXFwvICBcXHJcXG4gICAgICAgICAgICAgICAoX18pICAgIC9cXFxcXFxcXCAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICgkZXllcykgICBPICBPICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICBfXFxcXFxcXFwvXyAgIC8vICAgICAgICAgXFxyXFxuICAgICAgICAgKiAgICAoICAgICkgLy8gICAgICAgXFxyXFxuICAgICAgICAgIFxcXFxcXFxcICAoXFxcXFxcXFxcXFxcXFxcXCAgICAvLyAgICAgICBcXHJcXG4gICAgICAgICAgIFxcXFxcXFxcKCAgXFxcXFxcXFxcXFxcXFxcXCAgICApICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgKCAgIFxcXFxcXFxcXFxcXFxcXFwgICApICAgL1xcXFxcXFxcICAgICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gIF9fX1tcXFxcXFxcXF9fX19fXy9eXl5eXl5eXFxcXFxcXFxfXy8pIG8tKV9fICAgICAgICAgICAgICAgICAgICAgXFxyXFxuIHxcXFxcXFxcXF9fWz09PT09PT1fX19fX18vL19fX19fX19fKV9fXFxcXFxcXFwgICAgICAgICAgICAgICAgICAgIFxcclxcbiBcXFxcXFxcXHxfX19fX19fX19fX19fX18vL19fX19fX19fX19fX3wgICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgfHx8ICAgICAgfHwgLy98fCAgICAgfHx8XFxyXFxuICAgICB8fHwgICAgICB8fCBALnx8ICAgICB8fHwgICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICB8fCAgICAgIFxcXFxcXFxcLyAgLlxcXFxcXFxcLyAgICAgIHx8ICAgICAgICAgICAgICAgICAgICAgICAgXFxyXFxuICAgICAgICAgICAgICAgICAuIC4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgJy4nLmAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcclxcblxcclxcbiAgICAgICAgICAgIENPVy1PUEVSQVRJT04gICAgICAgICAgICAgICAgICAgICAgICAgICBcXHJcXG5FT0NcXHJcXG5cIixcbiAgXCJ0dXJrZXlcIjogXCIjI1xcclxcbiMjIFR1cmtleSFcXHJcXG4jI1xcclxcbiR0aGVfY293ID0gPDxFT0M7XFxyXFxuICAkdGhvdWdodHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLCsqXl4qK19fXysrK19cXHJcXG4gICAkdGhvdWdodHMgICAgICAgICAgICAgICAgICAgICAgICAgICAsKl5eXl4gICAgICAgICAgICAgIClcXHJcXG4gICAgJHRob3VnaHRzICAgICAgICAgICAgICAgICAgICAgICBfKyogICAgICAgICAgICAgICAgICAgICBeKiorX1xcclxcbiAgICAgJHRob3VnaHRzICAgICAgICAgICAgICAgICAgICArXiAgICAgICBfIF8rKyorXysrK18sICAgICAgICAgKVxcclxcbiAgICAgICAgICAgICAgXyteXiorXyAgICAoICAgICAsKypeIF4gICAgICAgICAgXFxcXFxcXFwrXyAgICAgICAgKVxcclxcbiAgICAgICAgICAgICB7ICAgICAgICkgICggICAgLCggICAgLF8rLS0rLS0sICAgICAgXikgICAgICBeXFxcXFxcXFxcXHJcXG4gICAgICAgICAgICB7IChcXFxcQCkgICAgfSBmICAgLCggICwrLV4gX18qXypfICBeXlxcXFxcXFxcXyAgIF5cXFxcXFxcXCAgICAgICApXFxyXFxuICAgICAgICAgICB7OjstLyAgICAoXysqLSteXl5eXisqKyo8XyBfKytfKV8gICAgKSAgICApICAgICAgL1xcclxcbiAgICAgICAgICAoIC8gICggICAgKCAgICAgICAgLF9fXyAgICBeKitfKyogKSAgIDwgICAgPCAgICAgIFxcXFxcXFxcXFxyXFxuICAgICAgICAgICBVIF8vICAgICApICAgICotLTwgICkgXlxcXFxcXFxcLS0tLS0rK19fKSAgICkgICAgKSAgICAgICApXFxyXFxuICAgICAgICAgICAgKCAgICAgICkgIF8oXileXikpICApICApXFxcXFxcXFxeXl5eXikpXiorLyAgICAvICAgICAgIC9cXHJcXG4gICAgICAgICAgKCAgICAgIC8gIChfKSlfXikpICkgICkgICkpXl5eXl4pKV5eXilfXy8gICAgICteXlxcclxcbiAgICAgICAgICggICAgICwvICAgICheKSleKSkgICkgICkgKSleXl5eXl5eKSleXikgICAgICAgXylcXHJcXG4gICAgICAgICAgKitfXysqICAgICAgIChfKSleKSAgKSApICkpXl5eXl5eKSleXl5eXilfX19fKl5cXHJcXG4gICAgICAgICAgXFxcXFxcXFwgICAgICAgICAgICAgXFxcXFxcXFxfKV4pXykpICkpXl5eXl5eXl5eXikpXl5eXilcXHJcXG4gICAgICAgICAgIChfICAgICAgICAgICAgIF5cXFxcXFxcXF9fXl5eXl5eXl5eXl5eKSleXl5eXl5eKVxcclxcbiAgICAgICAgICAgICBeXFxcXFxcXFxfX18gICAgICAgICAgICBeXFxcXFxcXFxfX15eXl5eXikpXl5eXl5eXl4pXFxcXFxcXFxcXFxcXFxcXFxcclxcbiAgICAgICAgICAgICAgICAgIF5eXl5eXFxcXFxcXFx1dXUvXl5cXFxcXFxcXHV1dS9eXl5eXFxcXFxcXFxeXFxcXFxcXFxeXFxcXFxcXFxeXFxcXFxcXFxeXFxcXFxcXFxeXFxcXFxcXFxeXFxcXFxcXFxeXFxcXFxcXFxcXHJcXG4gICAgICAgICAgICAgICAgICAgICBfX18pID5fX19fKSA+X19fICAgXlxcXFxcXFxcX1xcXFxcXFxcX1xcXFxcXFxcX1xcXFxcXFxcX1xcXFxcXFxcX1xcXFxcXFxcX1xcXFxcXFxcKVxcclxcbiAgICAgICAgICAgICAgICAgICAgXl5eLy9cXFxcXFxcXFxcXFxcXFxcX15eLy9cXFxcXFxcXFxcXFxcXFxcX14gICAgICAgXihcXFxcXFxcXF9cXFxcXFxcXF9cXFxcXFxcXF9cXFxcXFxcXClcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgXl5eIF5eIF5eXiBeXFxyXFxuRU9DXFxyXFxuXCIsXG4gIFwidHVydGxlXCI6IFwiIyNcXHJcXG4jIyBBIG15c3RlcmlvdXMgdHVydGxlLi4uXFxyXFxuIyNcXHJcXG4kdGhlX2NvdyA9IDw8RU9DO1xcclxcbiAgICAkdGhvdWdodHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19fLS0tLS0tLV9fX1xcclxcbiAgICAgJHRob3VnaHRzICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLX5+ICAgICAgICAgICAgIH5+LV9cXHJcXG4gICAgICAkdGhvdWdodHMgICAgICAgICAgICAgICAgICAgICAgICAgXy1+ICAgICAgICAgICAgICAgICAgICAvfi1fXFxyXFxuICAgICAgICAgICAgIC9eXFxcXFxcXFxfXy9eXFxcXFxcXFwgICAgICAgICAvfiAgXFxcXFxcXFwgICAgICAgICAgICAgICAgICAgLyAgICBcXFxcXFxcXFxcclxcbiAgICAgICAgICAgL3wgIE98fCBPfCAgICAgICAgLyAgICAgIFxcXFxcXFxcX19fX19fX19fX19fX19fLyAgICAgICAgXFxcXFxcXFxcXHJcXG4gICAgICAgICAgfCB8X19ffHxfX3wgICAgICAvICAgICAgIC8gICAgICAgICAgICAgICAgXFxcXFxcXFwgICAgICAgICAgXFxcXFxcXFxcXHJcXG4gICAgICAgICAgfCAgICAgICAgICBcXFxcXFxcXCAgICAvICAgICAgLyAgICAgICAgICAgICAgICAgICAgXFxcXFxcXFwgICAgICAgICAgXFxcXFxcXFxcXHJcXG4gICAgICAgICAgfCAgIChfX19fX19fKSAvX19fX19fLyAgICAgICAgICAgICAgICAgICAgICAgIFxcXFxcXFxcX19fX19fX19fIFxcXFxcXFxcXFxyXFxuICAgICAgICAgIHwgICAgICAgICAvIC8gICAgICAgICBcXFxcXFxcXCAgICAgICAgICAgICAgICAgICAgICAvICAgICAgICAgICAgXFxcXFxcXFxcXHJcXG4gICAgICAgICAgIFxcXFxcXFxcICAgICAgICAgXFxcXFxcXFxeXFxcXFxcXFxcXFxcXFxcXCAgICAgICAgIFxcXFxcXFxcICAgICAgICAgICAgICAgICAgLyAgICAgICAgICAgICAgIFxcXFxcXFxcICAgICAvXFxyXFxuICAgICAgICAgICAgIFxcXFxcXFxcICAgICAgICAgfHwgICAgICAgICAgIFxcXFxcXFxcX19fX19fX19fX19fX18vICAgICAgXy1fICAgICAgIC8vXFxcXFxcXFxfXy8vXFxyXFxuICAgICAgICAgICAgICAgXFxcXFxcXFwgICAgICAgfHwtLS0tLS1fLX5+LV8gLS0tLS0tLS0tLS0tLSBcXFxcXFxcXCAtLS9+ICAgflxcXFxcXFxcICAgIHx8IF9fL1xcclxcbiAgICAgICAgICAgICAgICAgfi0tLS0tfHw9PT09L34gICAgIHw9PT09PT09PT09PT09PT09PT18ICAgICAgIHwvfn5+fn5cXHJcXG4gICAgICAgICAgICAgICAgICAoXyhfXy8gIC4vICAgICAvICAgICAgICAgICAgICAgICAgICBcXFxcXFxcXF9cXFxcXFxcXCAgICAgIFxcXFxcXFxcLlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAoXyhfX18vICAgICAgICAgICAgICAgICAgICAgICAgIFxcXFxcXFxcX19fX18pXylcXHJcXG5FT0NcXHJcXG5cIixcbiAgXCJ0dXhcIjogXCIjI1xcclxcbiMjIFR1WFxcclxcbiMjIChjKSBwYm9yeXNAcC1zb2Z0LnNpbGVzaWEubGludXgub3JnLnBsIFxcclxcbiMjXFxyXFxuJHRoZV9jb3cgPSA8PEVPQztcXHJcXG4gICAkdGhvdWdodHNcXHJcXG4gICAgJHRob3VnaHRzXFxyXFxuICAgICAgICAuLS0uXFxyXFxuICAgICAgIHxvX28gfFxcclxcbiAgICAgICB8Ol8vIHxcXHJcXG4gICAgICAvLyAgIFxcXFxcXFxcIFxcXFxcXFxcXFxyXFxuICAgICAofCAgICAgfCApXFxyXFxuICAgIC8nXFxcXFxcXFxfICAgXy9gXFxcXFxcXFxcXHJcXG4gICAgXFxcXFxcXFxfX18pPShfX18vXFxyXFxuXFxyXFxuRU9DXFxyXFxuXCIsXG4gIFwidmFkZXIta29hbGFcIjogXCIjI1xcclxcbiMjIEFub3RoZXIgY2Fub25pY2FsIGtvYWxhP1xcclxcbiMjXFxyXFxuJHRoZV9jb3cgPSA8PEVPQztcXHJcXG4gICAkdGhvdWdodHNcXHJcXG4gICAgJHRob3VnaHRzICAgICAgICAuXFxyXFxuICAgICAuLS0tLiAgLy9cXHJcXG4gICAgWXxvIG98WS8vIFxcclxcbiAgIC9fKGk9aSlLLyBcXHJcXG4gICB+KCl+Kn4oKX4gIFxcclxcbiAgICAoXyktKF8pICAgXFxyXFxuXFxyXFxuICAgICBEYXJ0aCBcXHJcXG4gICAgIFZhZGVyICAgIFxcclxcbiAgICAga29hbGEgICAgICAgIFxcclxcbkVPQ1xcclxcblwiLFxuICBcInZhZGVyXCI6IFwiIyNcXHJcXG4jIyBDb3d0aCBWYWRlciwgZnJvbSBnZW9yZGFuQGNzdWEuYmVya2VsZXkuZWR1XFxyXFxuIyNcXHJcXG4kdGhlX2NvdyA9IDw8RU9DO1xcclxcbiAgICAgICAgJHRob3VnaHRzICAgICwtXi0uXFxyXFxuICAgICAgICAgJHRob3VnaHRzICAgIW9ZbyFcXHJcXG4gICAgICAgICAgJHRob3VnaHRzIC8uLz1cXFxcXFxcXC5cXFxcXFxcXF9fX19fX1xcclxcbiAgICAgICAgICAgICAgICMjICAgICAgICApXFxcXFxcXFwvXFxcXFxcXFxcXHJcXG4gICAgICAgICAgICAgICAgfHwtLS0tLXd8fFxcclxcbiAgICAgICAgICAgICAgICB8fCAgICAgIHx8XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgQ293dGggVmFkZXJcXHJcXG5FT0NcXHJcXG5cIixcbiAgXCJ3d3dcIjogXCIjI1xcclxcbiMjIEEgY293IHdhZHZlcnRpc2luZyB0aGUgV29ybGQgV2lkZSBXZWIsIGZyb20gbGltQGNzdWEuYmVya2VsZXkuZWR1XFxyXFxuIyNcXHJcXG4kdGhlX2NvdyA9IDw8RU9DO1xcclxcbiAgICAgICAgJHRob3VnaHRzICAgXl9fXlxcclxcbiAgICAgICAgICR0aG91Z2h0cyAgKCRleWVzKVxcXFxcXFxcX19fX19fX1xcclxcbiAgICAgICAgICAgIChfXylcXFxcXFxcXCAgICAgICApXFxcXFxcXFwvXFxcXFxcXFxcXHJcXG4gICAgICAgICAgICAgJHRvbmd1ZSB8fC0tV1dXIHxcXHJcXG4gICAgICAgICAgICAgICAgfHwgICAgIHx8XFxyXFxuRU9DXFxyXFxuXCJcbn0iLCJ2YXIgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG52YXIgcmVwbGFjZXIgPSByZXF1aXJlKFwiLi9yZXBsYWNlclwiKTtcclxuXHJcbnZhciBjb3dkZWZzID0gcmVxdWlyZShcIi4vY293LWRlZmluaXRpb25zXCIpLmNvd2RlZnM7XHJcblxyXG52YXIgdGV4dENhY2hlID0ge307XHJcblxyXG5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIChjb3cpIHtcclxuXHR2YXIgdGV4dCA9IGNvd2RlZnNbY293XTtcclxuXHJcblx0aWYgKCF0ZXh0KSB7XHJcblx0XHR0ZXh0ID0gY293ZGVmc1snZGVmYXVsdCddO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcblx0XHRyZXR1cm4gcmVwbGFjZXIodGV4dCwgb3B0aW9ucyk7XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0cy5saXN0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcblxyXG5cdHZhciBjb3dzID0gW107XHJcblxyXG5cdGZvciAodmFyIGNvdyBpbiBjb3dkZWZzKSB7XHJcblx0ICBjb3dzLnB1c2goY293KVxyXG5cdH1cclxuXHJcblx0Y2FsbGJhY2sobnVsbCwgY293cyk7XHJcbn1cclxuIiwidmFyIG1vZGVzID0ge1xyXG5cdFwiYlwiIDoge1xyXG5cdFx0ZXllcyA6IFwiPT1cIixcclxuXHRcdHRvbmd1ZSA6IFwiICBcIlxyXG5cdH0sXHJcblx0XCJkXCIgOiB7XHJcblx0XHRleWVzIDogXCJ4eFwiLFxyXG5cdFx0dG9uZ3VlIDogXCJVIFwiXHJcblx0fSxcclxuXHRcImdcIiA6IHtcclxuXHRcdGV5ZXMgOiBcIiQkXCIsXHJcblx0XHR0b25ndWUgOiBcIiAgXCJcclxuXHR9LFxyXG5cdFwicFwiIDoge1xyXG5cdFx0ZXllcyA6IFwiQEBcIixcclxuXHRcdHRvbmd1ZSA6IFwiICBcIlxyXG5cdH0sXHJcblx0XCJzXCIgOiB7XHJcblx0XHRleWVzIDogXCIqKlwiLFxyXG5cdFx0dG9uZ3VlIDogXCJVIFwiXHJcblx0fSxcclxuXHRcInRcIiA6IHtcclxuXHRcdGV5ZXMgOiBcIi0tXCIsXHJcblx0XHR0b25ndWUgOiBcIiAgXCJcclxuXHR9LFxyXG5cdFwid1wiIDoge1xyXG5cdFx0ZXllcyA6IFwiT09cIixcclxuXHRcdHRvbmd1ZSA6IFwiICBcIlxyXG5cdH0sXHJcblx0XCJ5XCIgOiB7XHJcblx0XHRleWVzIDogXCIuLlwiLFxyXG5cdFx0dG9uZ3VlIDogXCIgIFwiXHJcblx0fVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucykge1xyXG5cdGZvciAodmFyIG1vZGUgaW4gbW9kZXMpIHtcclxuXHRcdGlmIChvcHRpb25zW21vZGVdID09PSB0cnVlKSB7XHJcblx0XHRcdHJldHVybiBtb2Rlc1ttb2RlXTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRleWVzIDogb3B0aW9ucy5lIHx8IFwib29cIixcclxuXHRcdHRvbmd1ZSA6IG9wdGlvbnMuVCB8fCBcIiAgXCJcclxuXHR9O1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjb3csIHZhcmlhYmxlcykge1xyXG5cdHZhciBleWVzID0gZXNjYXBlUmUodmFyaWFibGVzLmV5ZXMpO1xyXG5cdHZhciB0b25ndWUgPSBlc2NhcGVSZSh2YXJpYWJsZXMudG9uZ3VlKTtcclxuXHJcblx0aWYgKGNvdy5pbmRleE9mKFwiJHRoZV9jb3dcIikgIT09IC0xKSB7XHJcblx0XHRjb3cgPSBleHRyYWN0VGhlQ293KGNvdyk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gY293XHJcblx0XHQucmVwbGFjZSgvXFwkdGhvdWdodHMvZywgdmFyaWFibGVzLnRob3VnaHRzKVxyXG5cdFx0LnJlcGxhY2UoL1xcJGV5ZXMvZywgZXllcylcclxuXHRcdC5yZXBsYWNlKC9cXCR0b25ndWUvZywgdG9uZ3VlKVxyXG5cdFx0LnJlcGxhY2UoL1xcJFxce2V5ZXNcXH0vZywgZXllcylcclxuXHRcdC5yZXBsYWNlKC9cXCRcXHt0b25ndWVcXH0vZywgdG9uZ3VlKVxyXG5cdDtcclxufTtcclxuXHJcbi8qXHJcbiAqIFwiJFwiIGRvbGxhciBzaWducyBtdXN0IGJlIGRvdWJsZWQgYmVmb3JlIGJlaW5nIHVzZWQgaW4gYSByZWdleCByZXBsYWNlXHJcbiAqIFRoaXMgY2FuIG9jY3VyIGluIGV5ZXMgb3IgdG9uZ3VlLlxyXG4gKiBGb3IgZXhhbXBsZTpcclxuICpcclxuICogY293c2F5IC1nIE1vbyFcclxuICpcclxuICogY293c2F5IC1lIFwiXFwkXFwkXCIgTW9vIVxyXG4gKi9cclxuZnVuY3Rpb24gZXNjYXBlUmUgKHMpIHtcclxuXHRpZiAocyAmJiBzLnJlcGxhY2UpIHtcclxuXHRcdHJldHVybiBzLnJlcGxhY2UoL1xcJC9nLCBcIiQkJCRcIik7XHJcblx0fVxyXG5cdHJldHVybiBzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHRyYWN0VGhlQ293IChjb3cpIHtcclxuXHRjb3cgPSBjb3cucmVwbGFjZSgvXFxyXFxuP3xbXFxuXFx1MjAyOFxcdTIwMjldL2csIFwiXFxuXCIpLnJlcGxhY2UoL15cXHVGRUZGLywgJycpO1xyXG5cdHZhciBtYXRjaCA9IC9cXCR0aGVfY293XFxzKj1cXHMqPDxcIipFT0NcIio7KlxcbihbXFxzXFxTXSspXFxuRU9DXFxuLy5leGVjKGNvdyk7XHJcblxyXG5cdGlmICghbWF0Y2gpIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoXCJDYW5ub3QgcGFyc2UgY293IGZpbGVcXG5cIiwgY293KTtcclxuXHRcdHJldHVybiBjb3c7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJldHVybiBtYXRjaFsxXS5yZXBsYWNlKC9cXFxcezJ9L2csIFwiXFxcXFwiKS5yZXBsYWNlKC9cXFxcQC9nLCBcIkBcIikucmVwbGFjZSgvXFxcXFxcJC9nLCBcIiRcIik7XHJcblx0fVxyXG59IiwiZXhwb3J0cy5lbmRpYW5uZXNzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ0xFJyB9O1xuXG5leHBvcnRzLmhvc3RuYW1lID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBsb2NhdGlvbi5ob3N0bmFtZVxuICAgIH1cbiAgICBlbHNlIHJldHVybiAnJztcbn07XG5cbmV4cG9ydHMubG9hZGF2ZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdIH07XG5cbmV4cG9ydHMudXB0aW1lID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gMCB9O1xuXG5leHBvcnRzLmZyZWVtZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG59O1xuXG5leHBvcnRzLnRvdGFsbWVtID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBOdW1iZXIuTUFYX1ZBTFVFO1xufTtcblxuZXhwb3J0cy5jcHVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW10gfTtcblxuZXhwb3J0cy50eXBlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ0Jyb3dzZXInIH07XG5cbmV4cG9ydHMucmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5hcHBWZXJzaW9uO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG59O1xuXG5leHBvcnRzLm5ldHdvcmtJbnRlcmZhY2VzXG49IGV4cG9ydHMuZ2V0TmV0d29ya0ludGVyZmFjZXNcbj0gZnVuY3Rpb24gKCkgeyByZXR1cm4ge30gfTtcblxuZXhwb3J0cy5hcmNoID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ2phdmFzY3JpcHQnIH07XG5cbmV4cG9ydHMucGxhdGZvcm0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnYnJvd3NlcicgfTtcblxuZXhwb3J0cy50bXBkaXIgPSBleHBvcnRzLnRtcERpciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJy90bXAnO1xufTtcblxuZXhwb3J0cy5FT0wgPSAnXFxuJztcblxuZXhwb3J0cy5ob21lZGlyID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gJy8nXG59O1xuIiwiLy8gLmRpcm5hbWUsIC5iYXNlbmFtZSwgYW5kIC5leHRuYW1lIG1ldGhvZHMgYXJlIGV4dHJhY3RlZCBmcm9tIE5vZGUuanMgdjguMTEuMSxcbi8vIGJhY2twb3J0ZWQgYW5kIHRyYW5zcGxpdGVkIHdpdGggQmFiZWwsIHdpdGggYmFja3dhcmRzLWNvbXBhdCBmaXhlc1xuXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuLy8gcmVzb2x2ZXMgLiBhbmQgLi4gZWxlbWVudHMgaW4gYSBwYXRoIGFycmF5IHdpdGggZGlyZWN0b3J5IG5hbWVzIHRoZXJlXG4vLyBtdXN0IGJlIG5vIHNsYXNoZXMsIGVtcHR5IGVsZW1lbnRzLCBvciBkZXZpY2UgbmFtZXMgKGM6XFwpIGluIHRoZSBhcnJheVxuLy8gKHNvIGFsc28gbm8gbGVhZGluZyBhbmQgdHJhaWxpbmcgc2xhc2hlcyAtIGl0IGRvZXMgbm90IGRpc3Rpbmd1aXNoXG4vLyByZWxhdGl2ZSBhbmQgYWJzb2x1dGUgcGF0aHMpXG5mdW5jdGlvbiBub3JtYWxpemVBcnJheShwYXJ0cywgYWxsb3dBYm92ZVJvb3QpIHtcbiAgLy8gaWYgdGhlIHBhdGggdHJpZXMgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIGB1cGAgZW5kcyB1cCA+IDBcbiAgdmFyIHVwID0gMDtcbiAgZm9yICh2YXIgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIGxhc3QgPSBwYXJ0c1tpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChsYXN0ID09PSAnLi4nKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoYWxsb3dBYm92ZVJvb3QpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHBhcnRzLnVuc2hpZnQoJy4uJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzO1xufVxuXG4vLyBwYXRoLnJlc29sdmUoW2Zyb20gLi4uXSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlc29sdmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJlc29sdmVkUGF0aCA9ICcnLFxuICAgICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTsgaSA+PSAtMSAmJiAhcmVzb2x2ZWRBYnNvbHV0ZTsgaS0tKSB7XG4gICAgdmFyIHBhdGggPSAoaSA+PSAwKSA/IGFyZ3VtZW50c1tpXSA6IHByb2Nlc3MuY3dkKCk7XG5cbiAgICAvLyBTa2lwIGVtcHR5IGFuZCBpbnZhbGlkIGVudHJpZXNcbiAgICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgdG8gcGF0aC5yZXNvbHZlIG11c3QgYmUgc3RyaW5ncycpO1xuICAgIH0gZWxzZSBpZiAoIXBhdGgpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHJlc29sdmVkUGF0aCA9IHBhdGggKyAnLycgKyByZXNvbHZlZFBhdGg7XG4gICAgcmVzb2x2ZWRBYnNvbHV0ZSA9IHBhdGguY2hhckF0KDApID09PSAnLyc7XG4gIH1cblxuICAvLyBBdCB0aGlzIHBvaW50IHRoZSBwYXRoIHNob3VsZCBiZSByZXNvbHZlZCB0byBhIGZ1bGwgYWJzb2x1dGUgcGF0aCwgYnV0XG4gIC8vIGhhbmRsZSByZWxhdGl2ZSBwYXRocyB0byBiZSBzYWZlIChtaWdodCBoYXBwZW4gd2hlbiBwcm9jZXNzLmN3ZCgpIGZhaWxzKVxuXG4gIC8vIE5vcm1hbGl6ZSB0aGUgcGF0aFxuICByZXNvbHZlZFBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocmVzb2x2ZWRQYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIXJlc29sdmVkQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICByZXR1cm4gKChyZXNvbHZlZEFic29sdXRlID8gJy8nIDogJycpICsgcmVzb2x2ZWRQYXRoKSB8fCAnLic7XG59O1xuXG4vLyBwYXRoLm5vcm1hbGl6ZShwYXRoKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5ub3JtYWxpemUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHZhciBpc0Fic29sdXRlID0gZXhwb3J0cy5pc0Fic29sdXRlKHBhdGgpLFxuICAgICAgdHJhaWxpbmdTbGFzaCA9IHN1YnN0cihwYXRoLCAtMSkgPT09ICcvJztcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcGF0aCA9IG5vcm1hbGl6ZUFycmF5KGZpbHRlcihwYXRoLnNwbGl0KCcvJyksIGZ1bmN0aW9uKHApIHtcbiAgICByZXR1cm4gISFwO1xuICB9KSwgIWlzQWJzb2x1dGUpLmpvaW4oJy8nKTtcblxuICBpZiAoIXBhdGggJiYgIWlzQWJzb2x1dGUpIHtcbiAgICBwYXRoID0gJy4nO1xuICB9XG4gIGlmIChwYXRoICYmIHRyYWlsaW5nU2xhc2gpIHtcbiAgICBwYXRoICs9ICcvJztcbiAgfVxuXG4gIHJldHVybiAoaXNBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHBhdGg7XG59O1xuXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbihwYXRoKSB7XG4gIHJldHVybiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5qb2luID0gZnVuY3Rpb24oKSB7XG4gIHZhciBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gIHJldHVybiBleHBvcnRzLm5vcm1hbGl6ZShmaWx0ZXIocGF0aHMsIGZ1bmN0aW9uKHAsIGluZGV4KSB7XG4gICAgaWYgKHR5cGVvZiBwICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGguam9pbiBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9XG4gICAgcmV0dXJuIHA7XG4gIH0pLmpvaW4oJy8nKSk7XG59O1xuXG5cbi8vIHBhdGgucmVsYXRpdmUoZnJvbSwgdG8pXG4vLyBwb3NpeCB2ZXJzaW9uXG5leHBvcnRzLnJlbGF0aXZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgZnJvbSA9IGV4cG9ydHMucmVzb2x2ZShmcm9tKS5zdWJzdHIoMSk7XG4gIHRvID0gZXhwb3J0cy5yZXNvbHZlKHRvKS5zdWJzdHIoMSk7XG5cbiAgZnVuY3Rpb24gdHJpbShhcnIpIHtcbiAgICB2YXIgc3RhcnQgPSAwO1xuICAgIGZvciAoOyBzdGFydCA8IGFyci5sZW5ndGg7IHN0YXJ0KyspIHtcbiAgICAgIGlmIChhcnJbc3RhcnRdICE9PSAnJykgYnJlYWs7XG4gICAgfVxuXG4gICAgdmFyIGVuZCA9IGFyci5sZW5ndGggLSAxO1xuICAgIGZvciAoOyBlbmQgPj0gMDsgZW5kLS0pIHtcbiAgICAgIGlmIChhcnJbZW5kXSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChzdGFydCA+IGVuZCkgcmV0dXJuIFtdO1xuICAgIHJldHVybiBhcnIuc2xpY2Uoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSk7XG4gIH1cblxuICB2YXIgZnJvbVBhcnRzID0gdHJpbShmcm9tLnNwbGl0KCcvJykpO1xuICB2YXIgdG9QYXJ0cyA9IHRyaW0odG8uc3BsaXQoJy8nKSk7XG5cbiAgdmFyIGxlbmd0aCA9IE1hdGgubWluKGZyb21QYXJ0cy5sZW5ndGgsIHRvUGFydHMubGVuZ3RoKTtcbiAgdmFyIHNhbWVQYXJ0c0xlbmd0aCA9IGxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGlmIChmcm9tUGFydHNbaV0gIT09IHRvUGFydHNbaV0pIHtcbiAgICAgIHNhbWVQYXJ0c0xlbmd0aCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB2YXIgb3V0cHV0UGFydHMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IHNhbWVQYXJ0c0xlbmd0aDsgaSA8IGZyb21QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIG91dHB1dFBhcnRzLnB1c2goJy4uJyk7XG4gIH1cblxuICBvdXRwdXRQYXJ0cyA9IG91dHB1dFBhcnRzLmNvbmNhdCh0b1BhcnRzLnNsaWNlKHNhbWVQYXJ0c0xlbmd0aCkpO1xuXG4gIHJldHVybiBvdXRwdXRQYXJ0cy5qb2luKCcvJyk7XG59O1xuXG5leHBvcnRzLnNlcCA9ICcvJztcbmV4cG9ydHMuZGVsaW1pdGVyID0gJzonO1xuXG5leHBvcnRzLmRpcm5hbWUgPSBmdW5jdGlvbiAocGF0aCkge1xuICBpZiAodHlwZW9mIHBhdGggIT09ICdzdHJpbmcnKSBwYXRoID0gcGF0aCArICcnO1xuICBpZiAocGF0aC5sZW5ndGggPT09IDApIHJldHVybiAnLic7XG4gIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KDApO1xuICB2YXIgaGFzUm9vdCA9IGNvZGUgPT09IDQ3IC8qLyovO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDE7IC0taSkge1xuICAgIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgZW5kID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgIC8vIFdlIHNhdyB0aGUgZmlyc3Qgbm9uLXBhdGggc2VwYXJhdG9yXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuIGhhc1Jvb3QgPyAnLycgOiAnLic7XG4gIGlmIChoYXNSb290ICYmIGVuZCA9PT0gMSkge1xuICAgIC8vIHJldHVybiAnLy8nO1xuICAgIC8vIEJhY2t3YXJkcy1jb21wYXQgZml4OlxuICAgIHJldHVybiAnLyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2UoMCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGJhc2VuYW1lKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcblxuICB2YXIgc3RhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICB2YXIgaTtcblxuICBmb3IgKGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgaWYgKHBhdGguY2hhckNvZGVBdChpKSA9PT0gNDcgLyovKi8pIHtcbiAgICAgICAgLy8gSWYgd2UgcmVhY2hlZCBhIHBhdGggc2VwYXJhdG9yIHRoYXQgd2FzIG5vdCBwYXJ0IG9mIGEgc2V0IG9mIHBhdGhcbiAgICAgICAgLy8gc2VwYXJhdG9ycyBhdCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcsIHN0b3Agbm93XG4gICAgICAgIGlmICghbWF0Y2hlZFNsYXNoKSB7XG4gICAgICAgICAgc3RhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBwYXRoIGNvbXBvbmVudFxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgICBlbmQgPSBpICsgMTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW5kID09PSAtMSkgcmV0dXJuICcnO1xuICByZXR1cm4gcGF0aC5zbGljZShzdGFydCwgZW5kKTtcbn1cblxuLy8gVXNlcyBhIG1peGVkIGFwcHJvYWNoIGZvciBiYWNrd2FyZHMtY29tcGF0aWJpbGl0eSwgYXMgZXh0IGJlaGF2aW9yIGNoYW5nZWRcbi8vIGluIG5ldyBOb2RlLmpzIHZlcnNpb25zLCBzbyBvbmx5IGJhc2VuYW1lKCkgYWJvdmUgaXMgYmFja3BvcnRlZCBoZXJlXG5leHBvcnRzLmJhc2VuYW1lID0gZnVuY3Rpb24gKHBhdGgsIGV4dCkge1xuICB2YXIgZiA9IGJhc2VuYW1lKHBhdGgpO1xuICBpZiAoZXh0ICYmIGYuc3Vic3RyKC0xICogZXh0Lmxlbmd0aCkgPT09IGV4dCkge1xuICAgIGYgPSBmLnN1YnN0cigwLCBmLmxlbmd0aCAtIGV4dC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiBmO1xufTtcblxuZXhwb3J0cy5leHRuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgdmFyIHN0YXJ0RG90ID0gLTE7XG4gIHZhciBzdGFydFBhcnQgPSAwO1xuICB2YXIgZW5kID0gLTE7XG4gIHZhciBtYXRjaGVkU2xhc2ggPSB0cnVlO1xuICAvLyBUcmFjayB0aGUgc3RhdGUgb2YgY2hhcmFjdGVycyAoaWYgYW55KSB3ZSBzZWUgYmVmb3JlIG91ciBmaXJzdCBkb3QgYW5kXG4gIC8vIGFmdGVyIGFueSBwYXRoIHNlcGFyYXRvciB3ZSBmaW5kXG4gIHZhciBwcmVEb3RTdGF0ZSA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXRoLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgdmFyIGNvZGUgPSBwYXRoLmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKGNvZGUgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0UGFydCA9IGkgKyAxO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIGlmIChlbmQgPT09IC0xKSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvciwgbWFyayB0aGlzIGFzIHRoZSBlbmQgb2Ygb3VyXG4gICAgICAvLyBleHRlbnNpb25cbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICAgIGlmIChjb2RlID09PSA0NiAvKi4qLykge1xuICAgICAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBkb3QsIG1hcmsgaXQgYXMgdGhlIHN0YXJ0IG9mIG91ciBleHRlbnNpb25cbiAgICAgICAgaWYgKHN0YXJ0RG90ID09PSAtMSlcbiAgICAgICAgICBzdGFydERvdCA9IGk7XG4gICAgICAgIGVsc2UgaWYgKHByZURvdFN0YXRlICE9PSAxKVxuICAgICAgICAgIHByZURvdFN0YXRlID0gMTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0RG90ICE9PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBhbmQgbm9uLXBhdGggc2VwYXJhdG9yIGJlZm9yZSBvdXIgZG90LCBzbyB3ZSBzaG91bGRcbiAgICAgIC8vIGhhdmUgYSBnb29kIGNoYW5jZSBhdCBoYXZpbmcgYSBub24tZW1wdHkgZXh0ZW5zaW9uXG4gICAgICBwcmVEb3RTdGF0ZSA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGFydERvdCA9PT0gLTEgfHwgZW5kID09PSAtMSB8fFxuICAgICAgLy8gV2Ugc2F3IGEgbm9uLWRvdCBjaGFyYWN0ZXIgaW1tZWRpYXRlbHkgYmVmb3JlIHRoZSBkb3RcbiAgICAgIHByZURvdFN0YXRlID09PSAwIHx8XG4gICAgICAvLyBUaGUgKHJpZ2h0LW1vc3QpIHRyaW1tZWQgcGF0aCBjb21wb25lbnQgaXMgZXhhY3RseSAnLi4nXG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMSAmJiBzdGFydERvdCA9PT0gZW5kIC0gMSAmJiBzdGFydERvdCA9PT0gc3RhcnRQYXJ0ICsgMSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICByZXR1cm4gcGF0aC5zbGljZShzdGFydERvdCwgZW5kKTtcbn07XG5cbmZ1bmN0aW9uIGZpbHRlciAoeHMsIGYpIHtcbiAgICBpZiAoeHMuZmlsdGVyKSByZXR1cm4geHMuZmlsdGVyKGYpO1xuICAgIHZhciByZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChmKHhzW2ldLCBpLCB4cykpIHJlcy5wdXNoKHhzW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gU3RyaW5nLnByb3RvdHlwZS5zdWJzdHIgLSBuZWdhdGl2ZSBpbmRleCBkb24ndCB3b3JrIGluIElFOFxudmFyIHN1YnN0ciA9ICdhYicuc3Vic3RyKC0xKSA9PT0gJ2InXG4gICAgPyBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7IHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pIH1cbiAgICA6IGZ1bmN0aW9uIChzdHIsIHN0YXJ0LCBsZW4pIHtcbiAgICAgICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSBzdHIubGVuZ3RoICsgc3RhcnQ7XG4gICAgICAgIHJldHVybiBzdHIuc3Vic3RyKHN0YXJ0LCBsZW4pO1xuICAgIH1cbjtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iXSwic291cmNlUm9vdCI6IiJ9