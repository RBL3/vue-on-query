"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refetchOnWindowFocusFn = exports.isEmptyObject = exports.isObject = void 0;
function isObject(val) {
    return val !== null && typeof val === 'object';
}
exports.isObject = isObject;
function isEmptyObject(val) {
    if (typeof val !== 'object')
        return true;
    return JSON.stringify(val) === '{}';
}
exports.isEmptyObject = isEmptyObject;
function refetchOnWindowFocusFn(_callback) {
    if (!(typeof window !== 'undefined' && window.addEventListener))
        return;
    var cb = function () {
        if (document && document.visibilityState === 'visible') {
            _callback();
        }
    };
    window.addEventListener('visibilitychange', cb, false);
    window.addEventListener('focus', _callback, false);
    return function () {
        window.removeEventListener('visibilitychange', cb);
        window.removeEventListener('focus', _callback);
    };
}
exports.refetchOnWindowFocusFn = refetchOnWindowFocusFn;
