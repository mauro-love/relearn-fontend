// 缓存函数是指将上次的计算结果缓存起来，当下次调用时，如果遇到相同
// 当参数，就直接返回缓存中的数据；

// 原理：把参数和对应的结果数据存到一个对象中，调用时，判断参数对应的数
// 据是否存在，存在就返回对应的结果数据；

let memoize = function(func){
  let cache = {};
  return function(key){
    if(!cache[key]){
      cache[key] = func.apply(this, arguments);
    }
    return cache[key];
  }
}

let memoize_ = function(func,hasher){
  let memoize = function(key){
    let cache = memoize.cache;
    let address = ""+(hasher ? hasher.apply(this,arguments): key);
    if(!cache[address]){
      cache[address] = func.apply(this,arguments);
    }
    return cache[address];
  }
  memoize.cache = {};
  return memoize;
}

let fibi = function(n){
  if(n === 1){
    return 1;
  }
  if(n === 2){
     return 2;
  }
  return fibi(n-1)+fibi(n-2)
}
console.log('4',fibi(45));

// 柯里化函数：在数学和计数机科学中，柯里化是一种将使用多个参数的一个函数转换成
// 一系列使用一个参数的函数的技术
// f(x,y,z) => f(x)(y)(z);

// loadsh;

// 偏函数

// 柯里化是将一个多参数函数转换成多个单参数函数，也就是将一个n元函数转换成n个一元函数；
// 偏函数则是固定一个函数的一个或者多个参数，也就是将一个n元函数转换成一个n-x元函数；