"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryAgain = void 0;
function queryAgain(_callback, retry, retryDelay) {
    if (retry === void 0) { retry = 3; }
    if (retryDelay === void 0) { retryDelay = 2000; }
    console.log(retry, retryDelay);
    var timer = null;
    var currentRetry = 0;
    if (typeof retry === 'number') {
        timer = setInterval(function () {
            if (currentRetry < retry) {
                currentRetry += 1;
                _callback();
            }
            else {
                timer && clearInterval(timer);
            }
        }, retryDelay);
    }
    else {
        if (retry) {
            timer = setInterval(_callback, retryDelay);
        }
    }
    return function () {
        timer && clearInterval(timer);
    };
}
exports.queryAgain = queryAgain;
