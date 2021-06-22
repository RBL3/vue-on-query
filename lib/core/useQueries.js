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
exports.useQueries = void 0;
var useQuery_1 = require("./useQuery");
function useQueries(queriesBodyList) {
    var resList = [];
    queriesBodyList.forEach(function (_a) {
        var queryKey = _a.queryKey, queryFn = _a.queryFn;
        var result = useQuery_1.useQuery(queryKey, queryFn, {
            queries: {
                refetchOnWindowFocus: false,
            },
        });
        resList.push(__assign({}, result));
    });
    return resList;
}
exports.useQueries = useQueries;
