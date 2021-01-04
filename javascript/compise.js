// 将需要嵌套执行的函数平铺
// 嵌套执行指的是，一个函数的返回值将作为另外一个函数的参数

let calcutale = x => (x + 10) *10;

let add = x => x+10;
let multiply = y => y*10;

let compose1 = (f,g)=>{
  return function(x){
    return f(g());
  }
}

let compose = function(){
  let args = [].slice.call(arguments);
  return function(x){
    return args.reduceRight(function(res,cb){
      return cb(res);
    },x)
  }
}
let resule = compose(multiply,add);
console.log('00',resule(10));

// todo pipe

let pipe = function(){
  let args = [].slice.call(arguments);
  return function(x){
    return args.reduce(function(res,cb){
      return cb(res);
    },x)
  }
}
let piperesule = pipe(multiply,add);
console.log('001',pipe()(10));
console.log('00',piperesule());