// 查询重试
export function queryAgain(_callback: () => void, retry: number | boolean = 3, retryDelay: number = 2000) {
  console.log(retry, retryDelay);
  let timer: null | ReturnType<typeof setInterval> = null;
  let currentRetry = 0;
  if (typeof retry === 'number') {
    timer = setInterval(() => {
      if (currentRetry < retry) {
        currentRetry += 1;
        _callback();
      } else {
        timer && clearInterval(timer);
      }
    }, retryDelay);
  } else {
    if (retry) {
      timer = setInterval(_callback, retryDelay);
    }
  }
  // 清除定时器
  return () => {
    timer && clearInterval(timer);
  };
}
