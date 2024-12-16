((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__Draggable__index'],
{ "src/pages/Draggable/components/DraggableCard/index.tsx": function (module, exports, __mako_require__){
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
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
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
const DraggableCard = ({ text, children, offsetLeft, offsetTop, initElement })=>{
    _s();
    const [position, setPosition] = (0, _react.useState)({
        x: 0,
        y: 0
    });
    const [offset, setOffset] = (0, _react.useState)({
        x: 0,
        y: 0
    });
    const dragEnd = (e)=>{
        if (e.clientX > 0 && e.clientY > 0) {
            let x = e.clientX - offsetLeft - offset.x;
            let y = e.clientY - offsetTop - offset.y;
            let max_x = e.target.offsetParent.offsetWidth - e.target.offsetWidth;
            let max_y = e.target.offsetParent.offsetHeight - e.target.offsetHeight;
            setPosition({
                x: x < 0 ? 0 : x > max_x ? max_x - e.clientWidth : x,
                y: y < 0 ? 0 : y > max_y ? max_y - e.clientHeight : y
            });
        }
    };
    const dragStart = (e)=>{
        setOffset({
            x: e.clientX - (e.target.offsetLeft + offsetLeft),
            y: e.clientY - (e.target.offsetTop + offsetTop)
        });
    };
    const drag = (e)=>{
        if (e.clientX > 0 && e.clientY > 0) {
            let x = e.clientX - offsetLeft - offset.x;
            let y = e.clientY - offsetTop - offset.y;
            let max_x = e.target.offsetParent.offsetWidth - e.target.offsetWidth;
            let max_y = e.target.offsetParent.offsetHeight - e.target.offsetHeight;
            setPosition({
                x: x < 0 ? 0 : x > max_x ? max_x - e.clientWidth : x,
                y: y < 0 ? 0 : y > max_y ? max_y - e.clientHeight : y
            });
        }
    };
    (0, _react.useEffect)(()=>{
        initElement();
    }, [
        position
    ]);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: "draggableCard",
        style: {
            'position': 'absolute',
            'left': position.x,
            'top': position.y
        },
        onDragEnd: dragEnd,
        onDrag: drag,
        onDragStart: dragStart,
        onDrop: (e)=>e.preventDefault(),
        onDragOver: (e)=>e.preventDefault(),
        draggable: "true",
        children: [
            children,
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                children: text
            }, void 0, false, {
                fileName: "src/pages/Draggable/components/DraggableCard/index.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/Draggable/components/DraggableCard/index.tsx",
        lineNumber: 53,
        columnNumber: 12
    }, this);
};
_s(DraggableCard, "IdZB9WNM+fsY7fleaiYwOAJ35yw=");
_c = DraggableCard;
var _default = DraggableCard;
var _c;
$RefreshReg$(_c, "DraggableCard");
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
"src/pages/Draggable/components/DraggableContent/index.tsx": function (module, exports, __mako_require__){
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
var _DraggableCard = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Draggable/components/DraggableCard/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const DraggableContent = ()=>{
    _s();
    let listMap = [
        {
            name: '主体',
            children: [
                {
                    name: 'React',
                    children: [
                        {
                            name: 'TSX',
                            children: []
                        }
                    ]
                },
                {
                    name: 'Vue',
                    children: []
                },
                {
                    name: 'JavaScript',
                    children: []
                },
                {
                    name: 'TS',
                    children: []
                },
                {
                    name: 'ES6',
                    children: []
                }
            ]
        }
    ];
    let colors = [
        '#12ff26',
        '#FFB812FF',
        '#1271FFFF',
        '#D278FBFF',
        '#FF1222FF'
    ];
    let offsetTop = 0;
    let offsetLeft = 0;
    let topElement1 = null;
    let topElement2 = null;
    let leftElement = null;
    let parentElement = null;
    const initElement = ()=>{
        topElement1 = document.getElementsByClassName('ant-page-header')[0];
        topElement2 = document.getElementsByClassName('ant-pro-global-header')[0];
        leftElement = document.getElementsByClassName('ant-layout-sider-children')[0];
        parentElement = document.getElementsByClassName('draggable-content')[0];
        offsetTop = (topElement1 === null || topElement1 === void 0 ? void 0 : topElement1.clientHeight) + (topElement2 === null || topElement2 === void 0 ? void 0 : topElement2.clientHeight) + (parentElement.scrollTop ?? 0);
        offsetLeft = (leftElement === null || leftElement === void 0 ? void 0 : leftElement.clientWidth) + ((parentElement === null || parentElement === void 0 ? void 0 : parentElement.scrollLeft) ?? 0) + 40;
    };
    const setup = (list)=>{
        return list.map(({ name, children }, index)=>{
            let color_index = Math.ceil(Math.random() * 5) - 1;
            return list.length ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_DraggableCard.default, {
                        text: name,
                        offsetTop: offsetTop,
                        offsetLeft: offsetLeft,
                        initElement: initElement,
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("i", {
                            className: "icon",
                            id: `line${index}`,
                            style: {
                                '--i': colors[color_index]
                            }
                        }, void 0, false, {
                            fileName: "src/pages/Draggable/components/DraggableContent/index.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this)
                    }, index, false, {
                        fileName: "src/pages/Draggable/components/DraggableContent/index.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    setup(children)
                ]
            }, void 0, true) : null;
        });
    };
    (0, _react.useEffect)(()=>{
        initElement();
    }, []);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: "draggable-content",
        children: setup(listMap)
    }, void 0, false, {
        fileName: "src/pages/Draggable/components/DraggableContent/index.tsx",
        lineNumber: 85,
        columnNumber: 10
    }, this);
};
_s(DraggableContent, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = DraggableContent;
var _default = DraggableContent;
var _c;
$RefreshReg$(_c, "DraggableContent");
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
"src/pages/Draggable/index.tsx": function (module, exports, __mako_require__){
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
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _DraggableContent = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Draggable/components/DraggableContent/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const Draggable = ({})=>{
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.PageContainer, {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_DraggableContent.default, {}, void 0, false, {
            fileName: "src/pages/Draggable/index.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Draggable/index.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
_c = Draggable;
var _default = Draggable;
var _c;
$RefreshReg$(_c, "Draggable");
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
//# sourceMappingURL=p__Draggable__index-async.js.map