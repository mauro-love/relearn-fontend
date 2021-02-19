// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转

function trunNum(num){
  let numStr = String(Math.abs(num));
  let result = 0;
  numStr = numStr.split('').reverse().join('');
  if(num< 0){
    result =- Number(numStr);
  } else {
    result = Number(numStr);
  }
  if(result>2147483648){
    result = 0;
  }
  console.log(result);
  return result;
}
trunNum(40000010014);

function trunNum2(num){
  let token = num<0?'-':'';
  let temNum = Math.abs(num);
  let result = 0;
  while(temNum>0){
    result = result*10 + temNum%10;
    temNum = parseInt(temNum/10);
  }
  if(token){
    result = -result;
  }
  console.log(result);
  return result;
}
trunNum2(-98808)

// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

function changeWords(s,t){
  let arrs = s.split('');
  arrs = arrs.sort();
  let arrt = t.split('');
  arrt = arrt.sort();
  let n = arrs.length;
  let result = true;
  while(n){
    if(arrt[n]!== arrs[n]){
      result = false;
      break;
    }
    console.log(n);
    n--;
  }
  console.log(s,t,result);
  return result;
}
changeWords('raewq','ewqra');


const reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    console.log(s,i,[s[i], s[s.length - 1 - i]]);
   [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }
  console.log(s);
  return s;
};
reverseString(['w','e','r']);