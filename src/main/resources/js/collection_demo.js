/**
 * Created by Mtime on 2018/1/10.
 */
//定义
var arr = [2.5,1, 2, 3.14, 'Hello', null,undefined, true];
// var arr = new Array(1,2,3,4);

//改变array长度
//1.直接给length赋值，值为undefined
//增大
// console.log(arr.length);
// arr.length = 10;
// console.log(arr.length);
// console.log(arr);
// console.log(arr[9]);
// 减小
// console.log(arr[3]);
// arr.length=3;
// console.log(arr.length);
// console.log(arr[3]);

//2.通过索引赋值，超出数组大小
// arr[10]='1000';
// console.log(arr);
// console.log(arr.length);

//=====应用 方法
//indexOf
//与String类似，Array也可以通过indexOf()来搜索一个指定的元素的位置：
// console.log(arr.indexOf(2));

//slice
//slice(a,b)就是对应String的substring()版本，它截取Array的部分元素，然后返回一个新的Array
// a 开始索引，b截止索引   a <= result < b
// console.log(arr);
// var arr2 = arr.slice(1,3);
// console.log(arr2);
// console.log(arr);

//push和pop
//push()向Array的末尾添加若干元素，pop()则把Array的最后一个元素删除掉
// console.log(arr);
// arr.push(1,2,3);
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);

//unshift和shift
//如果要往Array的头部添加若干元素，使用unshift()方法，shift()方法则把Array的第一个元素删掉
// console.log(arr);
// arr.unshift('test','test1');
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

//sort
//sort()可以对当前Array进行排序，它会直接修改当前Array的元素位置，直接调用时，按照默认ascii排序,
// arr=[2,1,4,5,0,9];
// console.log(arr);
// arr.sort();
// console.log(arr);
// arr.sort(function (a,b) {
//     //console.log(a+'-'+b);
//     return b-a;
// });
// console.log(arr);

//reverse
//reverse()把整个Array的元素给掉个个，也就是反转
// console.log(arr);
// arr.reverse();
// console.log(arr);

//splice
//splice(a,b,...c)方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素,返回删除的元素
// a:开始索引，b：要删除的个数，c：从开始索引添加的元素
// console.log(arr);
// console.log(arr.splice(2,0));
// console.log(arr);

//concat
//concat()方法把当前的Array和另一个Array连接起来，并返回一个新的Array,原来array不变
// console.log(arr);
// console.log(arr.concat(1, 2, [3, 4]));
// console.log(arr);


//join
//join()把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串
// console.log(arr);
// console.log(arr.join('%'));
// console.log(typeof arr.join());
// console.log(arr);

//多维数组
//如果数组的某个元素又是一个Array，则可以形成多维数组
// console.log(arr);
// arr[8]=[1,2,3];
// arr[8][3]=[11,22,33];
// arr[8][3][3]=[111,222,333];
// arr[8][3][3][3]=[1111,2222,3333];
// console.log(arr);
// console.log(arr.toString())
// console.log(arr[1]+'-'+arr[8][1]+'-'+arr[8][3][1]+'-'+arr[8][3][3][2]+'='+arr[8][3][3][3][1]);


//console.log(arr.hasOwnProperty('Hello'));


//====================Map-ES6=================
//Map是一组键值对的结构，具有极快的查找速度
// var map = new Map([['zhangsan', 95], ['lisi', 75], ['wangwu', 85]]);
// //map = new Map();
// console.log(map);
// //赋值
// map.set("zhangsan",100);
// map.set("zhaosi","zhaosi100");
// console.log(map);
// //获取
// console.log(map.get("zhangsan"));
// //判断是否存在key
// console.log(map.has("zhangsan")+'-'+map.has("100"));
// //删除
// console.log(map.delete("zhangsan"));
// console.log(map);
//清空
// map.clear();
// console.log(map);

//大小
// console.log(map.size);

// WeakMap=============
// var wmap = new WeakMap();
// wmap.set(map,333);
// console.log(wmap.get(map));
// map = null;
// console.log(wmap.get(map));

//====================Set-ES6=================
// var test = new Set([1,2,3]);
// // test = new Set();
// console.log(test);
// // 添加
// test.add("1");
// test.add(4);
// // 大小
// console.log(test.size);
// // 是否存在
// console.log(test.has(1)+"-"+test.has(5));
// // 删除
// console.log(test.delete(1));
// console.log(test.has(1)+"-"+test.has(5));

// WeakSet
// var wset = new WeakSet();
// wset.add(arr);
// console.log(wset);
// console.log(wset.has(arr));





