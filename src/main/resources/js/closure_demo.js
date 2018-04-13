/**
 * Created by Mtime on 2018/1/13.
 */

//closure

var arr = [1,2,3,4,5];
// function sum(param) {
//     return param.reduce((x,y)=>{
//         return x+y;
//     });
// }
// console.log(sum(arr));
//
function lazy_sum(param) {
    var sum = function () {
        return param.reduce((x,y)=>{
            return x+y;
        });
    }
    return sum;
}

console.log("获取计算方法：%s",lazy_sum(arr));
console.log("执行计算方法()：%s",lazy_sum(arr)());
console.log("执行计算方法call：%s",lazy_sum(arr).call());
console.log("执行计算方法apply：%s",lazy_sum(arr).apply());
//
// var fun1 = lazy_sum(arr);
// arr.push(6);
// console.log(fun1())
// var fun2 = lazy_sum(arr);
// console.log("fun1===fun2:%s",fun1===fun2);

// 注意计算值
// function counter() {
//     var arr = [];
//     for (var i = 1;i<=4;i++){
//         arr.push(function () {
//             return i*i;
//         });
//     }
//     return arr;
// }
//
// var result = counter();
// console.log(result[0]());
// console.log(result[1]());
// console.log(result[2]());

// //计数器
function getCounter(start) {
    var count = start||0;
    return {
        inc:function (x) {
            count+=x||1;
            return count;
        },
        dec:function (x) {
            count-=x||1;
            return count;
        }
    };
}

var counter = getCounter();
var counter1 = getCounter();
console.log(counter.inc(4));
console.log(counter.inc(3));
console.log(counter.dec());

console.log(counter1.inc(33));
console.log(counter1.inc(5));

// // // 理解闭包
// var name = "The Window";
// var object = {
//     name : "My Object",
//     getNameFunc : function(){
//         //console.log("==="+this.name);
//         return function(){
//             return this.name;
//         };
//     }
// };
// var aa = object.getNameFunc();
// console.log(aa.call(object));
// console.log(aa.call(object));
//闭包就是能够读取其他函数内部变量的函数
//闭包就是携带状态的函数，并且它的状态可以完全对外隐藏起来
// this的指向是所在函数的调用上下文决定的，不是函数定义上下文决定的
// 变量的变化会影响闭包函数