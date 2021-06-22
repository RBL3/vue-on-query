export function isObject(val: any) {
  return val !== null && typeof val === 'object';
}

export function isEmptyObject(val: any) {
  if (typeof val !== 'object') return true;
  return JSON.stringify(val) === '{}';
}

export function refetchOnWindowFocusFn(_callback: () => any) {
  if (!(typeof window !== 'undefined' && window.addEventListener)) return;
  const cb = () => {
    if (document && document.visibilityState === 'visible') {
      _callback();
    }
  };
  window.addEventListener('visibilitychange', cb, false);
  window.addEventListener('focus', _callback, false);
  return () => {
    // 如果设置了新的处理程序，确保取消订阅
    window.removeEventListener('visibilitychange', cb);
    window.removeEventListener('focus', _callback);
  };
}
