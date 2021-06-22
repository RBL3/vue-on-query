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
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeObj = void 0;
var utils = require("./index");
function mergeObj(defaultOpt, newOpt) {
    if (utils.isEmptyObject(newOpt)) {
        return defaultOpt;
    }
    var opt = __assign({}, defaultOpt);
    Object.keys(newOpt).forEach(function (key) {
        if (utils.isObject(newOpt[key])) {
            opt[key] = mergeObj(opt[key], newOpt[key]);
        }
        else {
            opt[key] = newOpt[key];
        }
    });
    return opt;
}
exports.mergeObj = mergeObj;
