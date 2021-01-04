// 浅拷贝,,对复杂对象中的一层拷贝出来；

let lightCopy = function(obj){
  let res = {};
  for(key in obj){
    if(obj.hasOwnProperty(key)){
      res[key] = obj[key];
    }
  }
  return res;
}
let student = {
  name: '张',
  age:18,
  friend:{
    name:'李'
  }
}
let other = lightCopy(student);
other.friend.name = 'wang'
console.log(student);
console.log(other);

Object.assign({})
let otherGirl = {...student};
// 深拷贝 问题时不能处理function undefine 循环引用问题
let otherBob = JSON.parse(JSON.stringify(student));

let deepCopy = function(obj){
  let newObj = Array.isArray(obj)? []:{};
  if(obj && typeof obj === 'object'){
    for (let key in obj){
      if(obj.hasOwnProperty(key)){
        if(obj[key] && typeof obj[key] === 'object'){
          newObj[key] = deepCopy(obj[key])
        } else{
          newObj[key] = obj[key];
        }
      }
    }
  }
  return newObj;
}

