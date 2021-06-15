// start
const strategies = {
    isNonEmpty:function(value,errorMsg){
        if(value===''){
            return errorMsg;
        }
    },
    minLength:function(value,length,errorMsg){
        if(value.length<length){
            return errorMsg;
        }
    },
    maxLength:function(value,length,errorMsg){
        if(value.length>length){
            return errorMsg;
        }
    },
    isMobile:function(value,errorMsg){
        if(!/(^1[3|5|8][0-9]{9}$)/.test(value)){
            return errorMsg;
        }
    }
}
class Strategy{
    constructor(){
        this.strategys = [];
        this.strategies=strategies;
    }
    add(dom,rules){
        let self = this;
        for(let i=0,rule;rule = rules[i++];){
            (function(rule){
                let strategyAry = rule.strategy.split(':');

                let errorMsg = rule.errorMsg;
                self.cache.push(function(){
                    let strategy = strategyAry.shift();
                    console.log(dom);
                    strategyAry.unshift(dom.value);
                    strategyAry.push(errorMsg);
                    return strategies[strategy].apply(dom,strategyAry);
                });
            })(rule)
        }
    }
    start(){
        for(let i=0,validatorFunc;validatorFunc = this.cache[i++];){
            let errorMsg =validatorFunc();
            if(errorMsg){
                return errorMsg;
            }
        }
    }
}
export default Strategy