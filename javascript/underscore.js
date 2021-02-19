// 1、链式语法
// 静态方法
// _.map([],function(){})
 // 实例对象的方法
// _([]).map()
 
(function(root){
  var _ = function(){
    if(!(this instanceof _)){
      return new _();
    }
  }
  _.map = function(){

  }
  _.unique = function(){

  }
  _.each = function(arr,callback){
    var key,i = 0;
    for(; i< arr.length; i++){

    }
  }
  _.functions = function(obj){
    var result = [];
    for(var key in obj){
      result.push(key);
    }
    console.log(result);
    return result;
  }
  // 1、找到_静态属性[map,unique,...] 2:遍历数组
  _.mixin = function(obj){
    _.each(_.functions(obj),function(key){

    });
  }
  _.mixin(_);
  root._ = _;
})(this)

// 请说明数据库事务的特性，并描述脏读、不可重复读和幻读的现象
// 数据库事务特性：
// A atomicity  原子性 指的是事务包含的所有操作，要么全部成功，要么全部回滚失败
// C consistency 一致性 指的是事务必须使数据库从一个一致性状态到另一个一致性状态，即事务执行前后全部处于一致性状态
// I isolation 隔离性  指的是多个并发事物间互相隔离
// D durability 持久性 指的是事务一旦提交了，那么对数据库中数据的修改就是永久性的，即便在数据库系统遇到故障的情况下也不会丢失提交事务的操作

// 脏读：指的是 一个事物读取了另一个事务还没有提交的事务 。事务隔离级别：READ_COMMITED
// 不可重复读：指的是同一事务内，两次相同的查询返回了不同的结果 。事务隔离级别：REPEATABLE_READ
// 幻读：一个事务进行读取，分别读取到了不同的数据，与不可重复读不同的是，幻读针对的是数据条数的变化。 事务隔离级别：SERIALIZABLE_READ
// http2.0特性；

