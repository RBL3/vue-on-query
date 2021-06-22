"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQuery = void 0;
var composition_api_1 = require("@vue/composition-api");
var utils_1 = require("../utils");
var mergeOptions_1 = require("../utils/mergeOptions");
var queryAgain_1 = require("./queryAgain");
function useQuery(queryKey, queryFn, opt) {
    var ctx = composition_api_1.getCurrentInstance();
    if (!ctx) {
        throw new Error('use in vue');
    }
    var data = composition_api_1.ref();
    var isLoading = composition_api_1.ref(false);
    var error = composition_api_1.ref();
    var isSuccess = composition_api_1.ref(false);
    var isError = composition_api_1.ref(false);
    var isFetching = composition_api_1.ref(false);
    var isIdle = composition_api_1.ref(false);
    var status = composition_api_1.ref('loading');
    var currentOptions = mergeOptions_1.mergeObj(ctx.proxy.$vueQueryOpt || {}, opt);
    var unTimer;
    var resetData = function () {
        status.value = 'loading';
        data.value = error.value = undefined;
    };
    var resetState = function () {
        isSuccess.value = isError.value = isIdle.value = isFetching.value = false;
    };
    var queries = currentOptions.queries;
    var _a = queries || {}, enabled = _a.enabled, refetchOnWindowFocus = _a.refetchOnWindowFocus, retry = _a.retry, retryDelay = _a.retryDelay;
    var unFn = refetchOnWindowFocus ? utils_1.refetchOnWindowFocusFn(query) : query();
    function query() {
        if (!enabled) {
            resetData();
            isIdle.value = true;
            return;
        }
        resetState();
        isLoading.value = true;
        isFetching.value = true;
        queryFn().then(function (res) {
            data.value = res;
            isSuccess.value = true;
            status.value = 'success';
        }).catch(function (err) {
            error.value = err;
            isError.value = true;
            status.value = 'error';
            if (!(typeof retry === 'boolean' && !retry)) {
                !unTimer && (unTimer = queryAgain_1.queryAgain(query, retry, retryDelay));
            }
        }).finally(function () {
            isLoading.value = false;
            isFetching.value = false;
        });
    }
    composition_api_1.watch(queryKey, function () {
        query();
    }, {
        deep: true,
        immediate: true,
    });
    composition_api_1.onUnmounted(function () {
        unFn && unFn();
        unTimer && unTimer();
    });
    return {
        data: data,
        isLoading: isLoading,
        error: error,
        isSuccess: isSuccess,
        isError: isError,
        isIdle: isIdle,
        status: status,
    };
}
exports.useQuery = useQuery;
