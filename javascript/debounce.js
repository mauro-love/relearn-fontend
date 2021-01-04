// 函数防抖：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，
// 如果设定段时间到来之前，又一次触发了事件，就重新开始延时；
/**
 * @params 
 * delay
 * fn
 */
let debounce = function(fn,delay){
  let timer = null;
  return function(){
    console.log(timer,'999');
    if(timer){
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
    console.log(delay,'000');
      fn();
    }, delay);
  }
}

let deBounce = (fn, delay) => {
  let timer = null;
  return function (...args) {
      if (timer) {
          clearTimeout(timer);
      }
      timer = setTimeout(()=> {
          fn(...args);
      }, delay)
  }
}


let throttle = (fn, delay) => {
  let flag = true;
  return function (...args) {
      if (!flag) return;
      flag = false;
      setTimeout(() => {
          fn(...args);
          flag = true;
      }, delay)
  }
}