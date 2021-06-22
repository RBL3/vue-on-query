"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePageination = void 0;
var composition_api_1 = require("@vue/composition-api");
var mergeOptions_1 = require("../utils/mergeOptions");
function usePageination(defaultOpt) {
    var _a, _b;
    var ctx = composition_api_1.getCurrentInstance();
    if (!ctx) {
        throw new Error('use in vue');
    }
    var defaultOptions = mergeOptions_1.mergeObj(((_a = ctx.proxy.$vueQueryOpt) === null || _a === void 0 ? void 0 : _a.defaultOptions) || {}, defaultOpt);
    var opt = (_b = defaultOptions === null || defaultOptions === void 0 ? void 0 : defaultOptions.queries) === null || _b === void 0 ? void 0 : _b.defaultPageinationOpt;
    var pageSize = composition_api_1.ref((opt === null || opt === void 0 ? void 0 : opt.pageSize) || 20);
    var currentPage = composition_api_1.ref((opt === null || opt === void 0 ? void 0 : opt.currentPage) || 1);
    var sizeChange = function (size) { return pageSize.value = size; };
    var currentChange = function (pageNum) { return currentPage.value = pageNum; };
    return {
        pageSize: pageSize,
        sizeChange: sizeChange,
        currentPage: currentPage,
        currentChange: currentChange,
    };
}
exports.usePageination = usePageination;
