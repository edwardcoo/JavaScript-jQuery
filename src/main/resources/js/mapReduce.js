/**
 * Created by Mtime on 2018/1/10.
 */
//调用Array的map()方法，传入我们自己的函数，得到一个新的Array作为结果
// map()--计算得到一个新的数组
//计算各元素平方
var arr = [1,2,3,4,5,6,7,8,9];
var results;
function square(x) {
    return x*x;
}
//普通循环
// results = [];
// arr.forEach(function (p1, p2, p3) {
//     results.push(square(p1));
// });
// map()
var results = arr.map(square);
console.log(results);
// x：当前值，y：当前索引，z：数组对象
results = arr.map(function (x,y,z) {
    console.log('x=%d,y=%d,z=%s',x,y,z);
    return x*10+y;
});
console.log(results);
console.log(arr.map(String));

//-------------------------------reduce()--计算得出一个结果
//Array的reduce()把一个函数作用在这个Array的[x1, x2, x3...]上，这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做累积计算
/*results = arr.reduce(function (res, next, nextIndex, o) {
 //console.log('x=%s,y=%d,z=%d,o=%s',res,next,nextIndex,o);
 return res+next;
 });
 console.log(results);*/

// 写一个字符串转数字的方法，不能用parseInt、Number
/*function string2Int(str) {
    var tempArr = str.split('');
    return tempArr.map(function (p1, p2, p3) {
        return p1-0;
    }).reduce(function (p1, p2, p3, p4) {
        return p1*10+p2;
    });
}
console.log(string2Int('123456789'));*/

//规范英文字符，首字母大写，其他小写
/*var arr = ['zHangSan','LISI','wangWU'];
results = arr.map(function (p1, p2, p3) {
    return p1.split('').reverse().reduce(function (r1,r2) {
        return r1.toLowerCase()+r2.toUpperCase();
    }).split('').reverse().reduce(function (r1, r2) {
        return r1+r2;
    });
});
console.log(results);*/





