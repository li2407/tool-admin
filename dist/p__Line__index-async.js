((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__Line__index'],
{ "src/pages/Line/components/CanvasLine/Lines.ts": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
class Line {
    canvas;
    is_stop;
    position;
    constructor({ canvas }){
        this.canvas = canvas;
        this.is_stop = false;
        this.position = [];
    }
    init() {
        this.canvas.addEventListener('mousedown', this.mousedown.bind(this));
        this.canvas.addEventListener('mouseup', this.mouseup.bind(this));
        this.canvas.addEventListener('mousemove', this.mousemove.bind(this));
        this.canvas.addEventListener('mouseleave', this.mouseleave.bind(this));
    }
    update() {
        var _this_position;
        const cx = this.canvas.getContext('2d');
        (_this_position = this.position) === null || _this_position === void 0 || _this_position.forEach((item)=>{
            item === null || item === void 0 || item.forEach((item2, index2, list)=>{
                if (index2 === 0) {
                    cx === null || cx === void 0 || cx.beginPath();
                    cx === null || cx === void 0 || cx.moveTo(item2.x, item2.y);
                } else if (index2 !== 0 && index2 === list.length - 1) {
                    cx === null || cx === void 0 || cx.lineTo(item2.x, item2.y);
                    cx === null || cx === void 0 || cx.stroke();
                } else cx === null || cx === void 0 || cx.lineTo(item2.x, item2.y);
            });
        });
    }
    remove() {
        if (this.canvas) {
            this.canvas.removeEventListener('mousedown', this.mousedown);
            this.canvas.removeEventListener('mouseup', this.mouseup);
            this.canvas.removeEventListener('mousemove', this.mousemove);
            this.canvas.removeEventListener('mouseleave', this.mouseleave);
        }
    }
    mousedown({ offsetX, offsetY }) {
        var _this_position;
        this.is_stop = true;
        (_this_position = this.position) === null || _this_position === void 0 || _this_position.push([
            {
                x: offsetX,
                y: offsetY
            }
        ]);
    }
    mouseup() {
        this.is_stop = false;
        this.update();
    }
    mousemove({ offsetX, offsetY }) {
        var _this_position;
        if (this.is_stop && ((_this_position = this.position) === null || _this_position === void 0 ? void 0 : _this_position.length)) {
            this.position[this.position.length - 1].push({
                x: offsetX,
                y: offsetY
            });
            this.update();
        }
    }
    mouseleave() {
        this.is_stop = false;
        this.update();
    }
}
var _default = Line;
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/pages/Line/components/CanvasLine/index.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _Lines = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Line/components/CanvasLine/Lines.ts"));
"";
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const CanvasLine = ({ width, height })=>{
    _s();
    const canvasRef = (0, _react.useRef)(null);
    const meun = [
        {
            value: 1,
            label: '回退',
            icon: '/icons/back.png'
        },
        {
            value: 2,
            label: '前进',
            icon: '/icons/forward.png'
        },
        {
            value: 3,
            label: '线',
            icon: '/icons/line.png'
        },
        {
            value: 4,
            label: '矩',
            icon: '/icons/rectangle.png'
        },
        {
            value: 5,
            label: '圆',
            icon: '/icons/circle.png'
        },
        {
            value: 6,
            label: '重置',
            icon: '/icons/reset.png'
        }
    ];
    (0, _react.useEffect)(()=>{
        if (canvasRef.current) {
            const line = new _Lines.default({
                canvas: canvasRef.current
            });
            line.init();
            return ()=>{
                line.remove();
            };
        }
    }, []);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: "meun",
                children: meun.map((item)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                        src: item.icon
                    }, item.value, false, {
                        fileName: "src/pages/Line/components/CanvasLine/index.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "src/pages/Line/components/CanvasLine/index.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("canvas", {
                width: width,
                height: height,
                ref: canvasRef
            }, void 0, false, {
                fileName: "src/pages/Line/components/CanvasLine/index.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(CanvasLine, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = CanvasLine;
var _default = CanvasLine;
var _c;
$RefreshReg$(_c, "CanvasLine");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/pages/Line/components/LineContent/index.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
"";
var _CanvasLine = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Line/components/CanvasLine/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const LineContent = ()=>{
    _s();
    const content = (0, _react.useRef)(null);
    const [style, setStyle] = (0, _react.useState)({
        width: 0,
        height: 0
    });
    (0, _react.useEffect)(()=>{
        if (content.current) {
            let width = content.current.clientWidth;
            let height = content.current.clientHeight;
            setStyle({
                width: width,
                height: height
            });
        }
    }, [
        style.width,
        style.height
    ]);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        ref: content,
        className: "line-content",
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_CanvasLine.default, {
            width: style.width,
            height: style.height
        }, void 0, false, {
            fileName: "src/pages/Line/components/LineContent/index.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Line/components/LineContent/index.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
_s(LineContent, "3Qawj1AKaHASr2M+z5LNi16pxr4=");
_c = LineContent;
var _default = LineContent;
var _c;
$RefreshReg$(_c, "LineContent");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
"src/pages/Line/index.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@umijs/mako/node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _LineContent = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Line/components/LineContent/index.tsx"));
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const Line = ()=>{
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.PageContainer, {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_LineContent.default, {}, void 0, false, {
            fileName: "src/pages/Line/index.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Line/index.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
_c = Line;
var _default = Line;
var _c;
$RefreshReg$(_c, "Line");
if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
function registerClassComponent(filename, moduleExports) {
    for(const key in moduleExports)try {
        if (key === "__esModule") continue;
        const exportValue = moduleExports[key];
        if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
    } catch (e) {}
}
function $RefreshIsReactComponentLike$(moduleExports) {
    if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
    for(var key in moduleExports)try {
        if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
    } catch (e) {}
    return false;
}
registerClassComponent(module.id, module.exports);
if ($RefreshIsReactComponentLike$(module.exports)) {
    module.meta.hot.accept();
    _reactrefresh.performReactRefresh();
}

},
 }]);
//# sourceMappingURL=p__Line__index-async.js.map