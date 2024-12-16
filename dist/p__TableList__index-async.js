((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__TableList__index'],
{ "src/pages/TableList/components/UpdateForm.tsx": function (module, exports, __mako_require__){
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
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _max = __mako_require__("src/.umi/exports.ts");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const UpdateForm = (props)=>{
    _s();
    const intl = (0, _max.useIntl)();
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.StepsForm, {
        stepsProps: {
            size: 'small'
        },
        stepsFormRender: (dom, submitter)=>{
            return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Modal, {
                width: 640,
                styles: {
                    body: {
                        padding: '32px 40px 48px'
                    }
                },
                destroyOnClose: true,
                title: intl.formatMessage({
                    id: 'pages.searchTable.updateForm.ruleConfig',
                    defaultMessage: '规则配置'
                }),
                open: props.updateModalOpen,
                footer: submitter,
                onCancel: ()=>{
                    props.onCancel();
                },
                children: dom
            }, void 0, false, {
                fileName: "src/pages/TableList/components/UpdateForm.tsx",
                lineNumber: 37,
                columnNumber: 11
            }, void 0);
        },
        onFinish: props.onSubmit,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.StepsForm.StepForm, {
                initialValues: {
                    name: props.values.name,
                    desc: props.values.desc
                },
                title: intl.formatMessage({
                    id: 'pages.searchTable.updateForm.basicConfig',
                    defaultMessage: '基本信息'
                }),
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        name: "name",
                        label: intl.formatMessage({
                            id: 'pages.searchTable.updateForm.ruleName.nameLabel',
                            defaultMessage: '规则名称'
                        }),
                        width: "md",
                        rules: [
                            {
                                required: true,
                                message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                    id: "pages.searchTable.updateForm.ruleName.nameRules",
                                    defaultMessage: "请输入规则名称！"
                                }, void 0, false, {
                                    fileName: "src/pages/TableList/components/UpdateForm.tsx",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, void 0)
                            }
                        ]
                    }, void 0, false, {
                        fileName: "src/pages/TableList/components/UpdateForm.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                        name: "desc",
                        width: "md",
                        label: intl.formatMessage({
                            id: 'pages.searchTable.updateForm.ruleDesc.descLabel',
                            defaultMessage: '规则描述'
                        }),
                        placeholder: intl.formatMessage({
                            id: 'pages.searchTable.updateForm.ruleDesc.descPlaceholder',
                            defaultMessage: '请输入至少五个字符'
                        }),
                        rules: [
                            {
                                required: true,
                                message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                    id: "pages.searchTable.updateForm.ruleDesc.descRules",
                                    defaultMessage: "请输入至少五个字符的规则描述！"
                                }, void 0, false, {
                                    fileName: "src/pages/TableList/components/UpdateForm.tsx",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, void 0),
                                min: 5
                            }
                        ]
                    }, void 0, false, {
                        fileName: "src/pages/TableList/components/UpdateForm.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/TableList/components/UpdateForm.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.StepsForm.StepForm, {
                initialValues: {
                    target: '0',
                    template: '0'
                },
                title: intl.formatMessage({
                    id: 'pages.searchTable.updateForm.ruleProps.title',
                    defaultMessage: '配置规则属性'
                }),
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormSelect, {
                        name: "target",
                        width: "md",
                        label: intl.formatMessage({
                            id: 'pages.searchTable.updateForm.object',
                            defaultMessage: '监控对象'
                        }),
                        valueEnum: {
                            0: '表一',
                            1: '表二'
                        }
                    }, void 0, false, {
                        fileName: "src/pages/TableList/components/UpdateForm.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormSelect, {
                        name: "template",
                        width: "md",
                        label: intl.formatMessage({
                            id: 'pages.searchTable.updateForm.ruleProps.templateLabel',
                            defaultMessage: '规则模板'
                        }),
                        valueEnum: {
                            0: '规则模板一',
                            1: '规则模板二'
                        }
                    }, void 0, false, {
                        fileName: "src/pages/TableList/components/UpdateForm.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormRadio.Group, {
                        name: "type",
                        label: intl.formatMessage({
                            id: 'pages.searchTable.updateForm.ruleProps.typeLabel',
                            defaultMessage: '规则类型'
                        }),
                        options: [
                            {
                                value: '0',
                                label: '强'
                            },
                            {
                                value: '1',
                                label: '弱'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "src/pages/TableList/components/UpdateForm.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/TableList/components/UpdateForm.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.StepsForm.StepForm, {
                initialValues: {
                    type: '1',
                    frequency: 'month'
                },
                title: intl.formatMessage({
                    id: 'pages.searchTable.updateForm.schedulingPeriod.title',
                    defaultMessage: '设定调度周期'
                }),
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormDateTimePicker, {
                        name: "time",
                        width: "md",
                        label: intl.formatMessage({
                            id: 'pages.searchTable.updateForm.schedulingPeriod.timeLabel',
                            defaultMessage: '开始时间'
                        }),
                        rules: [
                            {
                                required: true,
                                message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                    id: "pages.searchTable.updateForm.schedulingPeriod.timeRules",
                                    defaultMessage: "请选择开始时间！"
                                }, void 0, false, {
                                    fileName: "src/pages/TableList/components/UpdateForm.tsx",
                                    lineNumber: 188,
                                    columnNumber: 17
                                }, void 0)
                            }
                        ]
                    }, void 0, false, {
                        fileName: "src/pages/TableList/components/UpdateForm.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormSelect, {
                        name: "frequency",
                        label: intl.formatMessage({
                            id: 'pages.searchTable.updateForm.object',
                            defaultMessage: '监控对象'
                        }),
                        width: "md",
                        valueEnum: {
                            month: '月',
                            week: '周'
                        }
                    }, void 0, false, {
                        fileName: "src/pages/TableList/components/UpdateForm.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/TableList/components/UpdateForm.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/TableList/components/UpdateForm.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
};
_s(UpdateForm, "rlSgSjbewJ1PrR/Ile8g/kr050o=", false, function() {
    return [
        _max.useIntl
    ];
});
_c = UpdateForm;
var _default = UpdateForm;
var _c;
$RefreshReg$(_c, "UpdateForm");
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
"src/pages/TableList/index.tsx": function (module, exports, __mako_require__){
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
var _api = __mako_require__("src/services/ant-design-pro/api.ts");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _procomponents = __mako_require__("node_modules/@ant-design/pro-components/es/index.js");
var _max = __mako_require__("src/.umi/exports.ts");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _UpdateForm = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/TableList/components/UpdateForm.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */ const handleAdd = async (fields)=>{
    const hide = _antd.message.loading('正在添加');
    try {
        await (0, _api.addRule)({
            ...fields
        });
        hide();
        _antd.message.success('Added successfully');
        return true;
    } catch (error) {
        hide();
        _antd.message.error('Adding failed, please try again!');
        return false;
    }
};
/**
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param fields
 */ const handleUpdate = async (fields)=>{
    const hide = _antd.message.loading('Configuring');
    try {
        await (0, _api.updateRule)({
            name: fields.name,
            desc: fields.desc,
            key: fields.key
        });
        hide();
        _antd.message.success('Configuration is successful');
        return true;
    } catch (error) {
        hide();
        _antd.message.error('Configuration failed, please try again!');
        return false;
    }
};
/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */ const handleRemove = async (selectedRows)=>{
    const hide = _antd.message.loading('正在删除');
    if (!selectedRows) return true;
    try {
        await (0, _api.removeRule)({
            key: selectedRows.map((row)=>row.key)
        });
        hide();
        _antd.message.success('Deleted successfully and will refresh soon');
        return true;
    } catch (error) {
        hide();
        _antd.message.error('Delete failed, please try again');
        return false;
    }
};
const TableList = ()=>{
    _s();
    /**
   * @en-US Pop-up window of new window
   * @zh-CN 新建窗口的弹窗
   *  */ const [createModalOpen, handleModalOpen] = (0, _react.useState)(false);
    /**
   * @en-US The pop-up window of the distribution update window
   * @zh-CN 分布更新窗口的弹窗
   * */ const [updateModalOpen, handleUpdateModalOpen] = (0, _react.useState)(false);
    const [showDetail, setShowDetail] = (0, _react.useState)(false);
    const actionRef = (0, _react.useRef)();
    const [currentRow, setCurrentRow] = (0, _react.useState)();
    const [selectedRowsState, setSelectedRows] = (0, _react.useState)([]);
    /**
   * @en-US International configuration
   * @zh-CN 国际化配置
   * */ const intl = (0, _max.useIntl)();
    const columns = [
        {
            title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                id: "pages.searchTable.updateForm.ruleName.nameLabel",
                defaultMessage: "Rule name"
            }, void 0, false, {
                fileName: "src/pages/TableList/index.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this),
            dataIndex: 'name',
            render: (dom, entity)=>{
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                    onClick: ()=>{
                        setCurrentRow(entity);
                        setShowDetail(true);
                    },
                    children: dom
                }, void 0, false, {
                    fileName: "src/pages/TableList/index.tsx",
                    lineNumber: 121,
                    columnNumber: 11
                }, this);
            }
        },
        {
            title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                id: "pages.searchTable.titleDesc",
                defaultMessage: "Description"
            }, void 0, false, {
                fileName: "src/pages/TableList/index.tsx",
                lineNumber: 133,
                columnNumber: 14
            }, this),
            dataIndex: 'desc',
            valueType: 'textarea'
        },
        {
            title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                id: "pages.searchTable.titleCallNo",
                defaultMessage: "Number of service calls"
            }, void 0, false, {
                fileName: "src/pages/TableList/index.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this),
            dataIndex: 'callNo',
            sorter: true,
            hideInForm: true,
            renderText: (val)=>`${val}${intl.formatMessage({
                    id: 'pages.searchTable.tenThousand',
                    defaultMessage: ' 万 '
                })}`
        },
        {
            title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                id: "pages.searchTable.titleStatus",
                defaultMessage: "Status"
            }, void 0, false, {
                fileName: "src/pages/TableList/index.tsx",
                lineNumber: 154,
                columnNumber: 14
            }, this),
            dataIndex: 'status',
            hideInForm: true,
            valueEnum: {
                0: {
                    text: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                        id: "pages.searchTable.nameStatus.default",
                        defaultMessage: "Shut down"
                    }, void 0, false, {
                        fileName: "src/pages/TableList/index.tsx",
                        lineNumber: 160,
                        columnNumber: 13
                    }, this),
                    status: 'Default'
                },
                1: {
                    text: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                        id: "pages.searchTable.nameStatus.running",
                        defaultMessage: "Running"
                    }, void 0, false, {
                        fileName: "src/pages/TableList/index.tsx",
                        lineNumber: 169,
                        columnNumber: 13
                    }, this),
                    status: 'Processing'
                },
                2: {
                    text: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                        id: "pages.searchTable.nameStatus.online",
                        defaultMessage: "Online"
                    }, void 0, false, {
                        fileName: "src/pages/TableList/index.tsx",
                        lineNumber: 175,
                        columnNumber: 13
                    }, this),
                    status: 'Success'
                },
                3: {
                    text: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                        id: "pages.searchTable.nameStatus.abnormal",
                        defaultMessage: "Abnormal"
                    }, void 0, false, {
                        fileName: "src/pages/TableList/index.tsx",
                        lineNumber: 181,
                        columnNumber: 13
                    }, this),
                    status: 'Error'
                }
            }
        },
        {
            title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                id: "pages.searchTable.titleUpdatedAt",
                defaultMessage: "Last scheduled time"
            }, void 0, false, {
                fileName: "src/pages/TableList/index.tsx",
                lineNumber: 192,
                columnNumber: 9
            }, this),
            sorter: true,
            dataIndex: 'updatedAt',
            valueType: 'dateTime',
            renderFormItem: (item, { defaultRender, ...rest }, form)=>{
                const status = form.getFieldValue('status');
                if (`${status}` === '0') return false;
                if (`${status}` === '3') return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Input, {
                    ...rest,
                    placeholder: intl.formatMessage({
                        id: 'pages.searchTable.exception',
                        defaultMessage: 'Please enter the reason for the exception!'
                    })
                }, void 0, false, {
                    fileName: "src/pages/TableList/index.tsx",
                    lineNumber: 207,
                    columnNumber: 13
                }, this);
                return defaultRender(item);
            }
        },
        {
            title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                id: "pages.searchTable.titleOption",
                defaultMessage: "Operating"
            }, void 0, false, {
                fileName: "src/pages/TableList/index.tsx",
                lineNumber: 220,
                columnNumber: 14
            }, this),
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record)=>[
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                        onClick: ()=>{
                            handleUpdateModalOpen(true);
                            setCurrentRow(record);
                        },
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                            id: "pages.searchTable.config",
                            defaultMessage: "Configuration"
                        }, void 0, false, {
                            fileName: "src/pages/TableList/index.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this)
                    }, "config", false, {
                        fileName: "src/pages/TableList/index.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                        href: "https://procomponents.ant.design/",
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                            id: "pages.searchTable.subscribeAlert",
                            defaultMessage: "Subscribe to alerts"
                        }, void 0, false, {
                            fileName: "src/pages/TableList/index.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this)
                    }, "subscribeAlert", false, {
                        fileName: "src/pages/TableList/index.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this)
                ]
        }
    ];
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.PageContainer, {
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProTable, {
                headerTitle: intl.formatMessage({
                    id: 'pages.searchTable.title',
                    defaultMessage: 'Enquiry form'
                }),
                actionRef: actionRef,
                rowKey: "key",
                search: {
                    labelWidth: 120
                },
                toolBarRender: ()=>[
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                            type: "primary",
                            onClick: ()=>{
                                handleModalOpen(true);
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.PlusOutlined, {}, void 0, false, {
                                    fileName: "src/pages/TableList/index.tsx",
                                    lineNumber: 263,
                                    columnNumber: 13
                                }, void 0),
                                " ",
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                    id: "pages.searchTable.new",
                                    defaultMessage: "New"
                                }, void 0, false, {
                                    fileName: "src/pages/TableList/index.tsx",
                                    lineNumber: 263,
                                    columnNumber: 30
                                }, void 0)
                            ]
                        }, "primary", true, {
                            fileName: "src/pages/TableList/index.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, void 0)
                    ],
                request: _api.rule,
                columns: columns,
                rowSelection: {
                    onChange: (_, selectedRows)=>{
                        setSelectedRows(selectedRows);
                    }
                }
            }, void 0, false, {
                fileName: "src/pages/TableList/index.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this),
            (selectedRowsState === null || selectedRowsState === void 0 ? void 0 : selectedRowsState.length) > 0 && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.FooterToolbar, {
                extra: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                            id: "pages.searchTable.chosen",
                            defaultMessage: "Chosen"
                        }, void 0, false, {
                            fileName: "src/pages/TableList/index.tsx",
                            lineNumber: 278,
                            columnNumber: 15
                        }, void 0),
                        ' ',
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                            style: {
                                fontWeight: 600
                            },
                            children: selectedRowsState.length
                        }, void 0, false, {
                            fileName: "src/pages/TableList/index.tsx",
                            lineNumber: 279,
                            columnNumber: 15
                        }, void 0),
                        ' ',
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                            id: "pages.searchTable.item",
                            defaultMessage: "项"
                        }, void 0, false, {
                            fileName: "src/pages/TableList/index.tsx",
                            lineNumber: 280,
                            columnNumber: 15
                        }, void 0),
                        "  ",
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                    id: "pages.searchTable.totalServiceCalls",
                                    defaultMessage: "Total number of service calls"
                                }, void 0, false, {
                                    fileName: "src/pages/TableList/index.tsx",
                                    lineNumber: 283,
                                    columnNumber: 17
                                }, void 0),
                                ' ',
                                selectedRowsState.reduce((pre, item)=>pre + item.callNo, 0),
                                ' ',
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                    id: "pages.searchTable.tenThousand",
                                    defaultMessage: "万"
                                }, void 0, false, {
                                    fileName: "src/pages/TableList/index.tsx",
                                    lineNumber: 288,
                                    columnNumber: 17
                                }, void 0)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/TableList/index.tsx",
                            lineNumber: 282,
                            columnNumber: 15
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/TableList/index.tsx",
                    lineNumber: 277,
                    columnNumber: 13
                }, void 0),
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                        onClick: async ()=>{
                            var _actionRef_current_reloadAndRest, _actionRef_current;
                            await handleRemove(selectedRowsState);
                            setSelectedRows([]);
                            (_actionRef_current = actionRef.current) === null || _actionRef_current === void 0 || (_actionRef_current_reloadAndRest = _actionRef_current.reloadAndRest) === null || _actionRef_current_reloadAndRest === void 0 || _actionRef_current_reloadAndRest.call(_actionRef_current);
                        },
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                            id: "pages.searchTable.batchDeletion",
                            defaultMessage: "Batch deletion"
                        }, void 0, false, {
                            fileName: "src/pages/TableList/index.tsx",
                            lineNumber: 300,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/TableList/index.tsx",
                        lineNumber: 293,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                        type: "primary",
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                            id: "pages.searchTable.batchApproval",
                            defaultMessage: "Batch approval"
                        }, void 0, false, {
                            fileName: "src/pages/TableList/index.tsx",
                            lineNumber: 306,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/TableList/index.tsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/TableList/index.tsx",
                lineNumber: 275,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ModalForm, {
                title: intl.formatMessage({
                    id: 'pages.searchTable.createForm.newRule',
                    defaultMessage: 'New rule'
                }),
                width: "400px",
                open: createModalOpen,
                onOpenChange: handleModalOpen,
                onFinish: async (value)=>{
                    const success = await handleAdd(value);
                    if (success) {
                        handleModalOpen(false);
                        if (actionRef.current) actionRef.current.reload();
                    }
                },
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormText, {
                        rules: [
                            {
                                required: true,
                                message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_max.FormattedMessage, {
                                    id: "pages.searchTable.ruleName",
                                    defaultMessage: "Rule name is required"
                                }, void 0, false, {
                                    fileName: "src/pages/TableList/index.tsx",
                                    lineNumber: 336,
                                    columnNumber: 17
                                }, void 0)
                            }
                        ],
                        width: "md",
                        name: "name"
                    }, void 0, false, {
                        fileName: "src/pages/TableList/index.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProFormTextArea, {
                        width: "md",
                        name: "desc"
                    }, void 0, false, {
                        fileName: "src/pages/TableList/index.tsx",
                        lineNumber: 346,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/TableList/index.tsx",
                lineNumber: 313,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_UpdateForm.default, {
                onSubmit: async (value)=>{
                    const success = await handleUpdate(value);
                    if (success) {
                        handleUpdateModalOpen(false);
                        setCurrentRow(undefined);
                        if (actionRef.current) actionRef.current.reload();
                    }
                },
                onCancel: ()=>{
                    handleUpdateModalOpen(false);
                    if (!showDetail) setCurrentRow(undefined);
                },
                updateModalOpen: updateModalOpen,
                values: currentRow || {}
            }, void 0, false, {
                fileName: "src/pages/TableList/index.tsx",
                lineNumber: 348,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Drawer, {
                width: 600,
                open: showDetail,
                onClose: ()=>{
                    setCurrentRow(undefined);
                    setShowDetail(false);
                },
                closable: false,
                children: (currentRow === null || currentRow === void 0 ? void 0 : currentRow.name) && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_procomponents.ProDescriptions, {
                    column: 2,
                    title: currentRow === null || currentRow === void 0 ? void 0 : currentRow.name,
                    request: async ()=>({
                            data: currentRow || {}
                        }),
                    params: {
                        id: currentRow === null || currentRow === void 0 ? void 0 : currentRow.name
                    },
                    columns: columns
                }, void 0, false, {
                    fileName: "src/pages/TableList/index.tsx",
                    lineNumber: 379,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "src/pages/TableList/index.tsx",
                lineNumber: 369,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/TableList/index.tsx",
        lineNumber: 244,
        columnNumber: 5
    }, this);
};
_s(TableList, "Mmyv036pLKelbsOXopipEObwT38=", false, function() {
    return [
        _max.useIntl
    ];
});
_c = TableList;
var _default = TableList;
var _c;
$RefreshReg$(_c, "TableList");
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
//# sourceMappingURL=p__TableList__index-async.js.map