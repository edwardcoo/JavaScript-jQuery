/**
 * Created by Mtime on 2018/1/4.
 */
 //'use strict';
// a=2;
// var x=0,y=1;
var arr = [2.5,1, 2, 3.14, 'Hello', null,undefined, true];
var arr2 = new Array(1,2,3);
arr.name='testname';
// console.log(arr.length+typeof arr2);
var arr1  = arr.slice();
// arr.push(1,222,333);
// console.log(arr.pop());
// arr.unshift(111,222,333);
// console.log(arr.shift());
//splice
// 从索引2开始删除3个元素,然后再添加两个元素:
// sarr = arr.splice(2, 3, 's1', 's2');
// 只删除,不添加:
// sarr=arr.splice(2, 2);
// 只添加,不删除:
//sarr = arr.splice(2, 0, 's1', 's2');
//console.log(sarr);

// console.log(arr);
// //arr1.reverse();
// console.log(arr1);
// console.log(arr.concat(1,2,3,[11,22,33]));
// console.log(arr);
// console.log(arr.join("-"));

var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null,
    'test-key':222,
    age:30,
    address:{
        zip:'1001',
        city:"beijing"
    }
};
//
// console.log('name' in xiaoming);
// console.log('toString' in xiaoming);
// console.log(xiaoming.hasOwnProperty('name')+'-'+xiaoming.hasOwnProperty('toString'));
// console.log(xiaoming['name']+'-'+xiaoming[1]);
//
// for (var i = 0;i<arr.length;i++){
//     console.log('forlength-'+arr[i]);
// }
//
// var i = 0;
// for (;;){
//     if(i>=10){
//         break;
//     }
//     console.log(arr[i]);
//     i++;
// }
// var a =[1,2,3];
// var s = new Set(['aa','bb','cc']);
// var m = new Map([[1,'x'],[2,'y'],[3,'z']]);
// m.set(4,'xx');
// console.log(s.length);
// for(var key of a){
//     console.log('forof-'+key);
// }
// for(var key of s){
//     console.log('fors-'+key);
// }
// for (var key of m){
//     console.log('form-'+key)
// }
// a.forEach(function(value,key,arr){
//     console.log(value+'-'+key)
// });
// s.forEach(function(value,key,arr){
//     console.log(value+'-'+key)
// });
// m.forEach(function(value,key,arr){
//     console.log(value+'-'+key)
// });
// function test() {
//     //return Math.abs(x);
//     return arguments[0]+arguments[1]+arguments[3];
// }
// var test1 = function (a,b, ...aaa){
//     aaa.forEach(function (p1, p2, p3) { console.log(p1) })
//     console.log("exec function test1..."+a+b+'--'+aaa);
// };
// console.log('result=='+test('222'));
// console.log(test1(1,2,33,44,55));
// var x = 1;
// console.log(x&&222);

// function test() {
//     a = 1;
//     a++;
//     function test1() {
//         a++;
//         var b = a;
//     }
//     test1();
//     return a;
// }
// console.log(test());
var person = {
    flag:111,
    name:"person111"
};
var person2={
    flag:222,
    name:"person2222",
    testage:testfun
};
function testfun(a,b,c) {
    console.log(this.name);
    console.log(a+b+c);
}

// testfun.call(person,'1',2,3,4);
//testfun.apply(person2,['22',33,44,55]);
person2.testage(1,2,3);
person2.testage.call(person,11,22,33);

function Animal(name){
    this.name = name;
    this.showName = function(){
        console.log(this.name);
    };
}
function Action() {
    this.showAdd = function (a, b) {
        console.log(a+b);
    }
}

function Cat(name){
    Animal.call(this, name);
    Action.apply(this);
}

var cat = new Cat("Black Cat");
// cat.showName();
// cat.showAdd(1,2);

var result = [11,'22',33,44];
var [x,y,z,xx,yy,zz] = result;
// x, y, z分别被赋值为数组对应元素:
console.log('x = ' + x + ', y = ' + y + ', z = ' + z+',xx='+xx+',yy='+yy+',zz='+zz);
var {name,birth:testbirth,address,age=20} = xiaoming;
console.log('name=%s,birth=%d,address=%s,age=%d',name,testbirth,address.city,age);
[name,testbirth] = [testbirth,name];
console.log('name=%s,birth=%d,address=%s,age=%d',name,testbirth,address.city,age);

function buildDate({year, month, day, hour=0, minute=0, second=0}) {
    console.log('year=%d,month=%d,day=%d,hour=%d,minute=%d,second=%d',year,month,day,hour,minute,second);
    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}
console.log(buildDate({year:2017,month:12,day:21}));

// var count = 0;
// var oldParseInt = parseInt;
// window.parseInt=function () {
//     count++;
//     return oldParseInt.call(null,arguments);
// };
// // 测试:
// parseInt('10');
// parseInt('20');
// parseInt('30');
// console.log('count = ' + count); // 3









