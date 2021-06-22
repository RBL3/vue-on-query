"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var mergeOptions_1 = require("./utils/mergeOptions");
__exportStar(require("./core"), exports);
__exportStar(require("./types"), exports);
var defaultOptions = {
    queries: {
        enabled: true,
        refetchOnWindowFocus: true,
        defaultPageinationOpt: {
            pageSize: 20,
            currentPage: 1,
        },
        retry: 3,
        retryDelay: 2000,
    },
};
exports.default = {
    install: function (Vue, opt) {
        Vue.prototype.$vueQueryOpt = !utils_1.isEmptyObject(opt) ? mergeOptions_1.mergeObj({
            defaultOptions: defaultOptions,
        }, opt) : __assign({}, defaultOptions);
    },
};
