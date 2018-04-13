/**
 * Created by Mtime on 2018/1/13.
 */

var arr = [1,2,"11","22","山东"];
var map = new Map([["zhangsan",11],["lisi",90],[11,"张三"]]);
var set = new Set([1,2,3,"settest","北京"]);
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null,
    'test':222
};

// ======1. for
// for(let i = 0;i<arr.length;i++){
//     console.log("arr-for,index=%d,value=%s",i,arr[i]);
// }

var i = 0;
for(;;){
    if(i === 3){
        break;
    }
    console.log("arr-for,index=%d,value=%s",i,arr[i]);
    i++;
}

// ======2. while
// var i = 0;
// while (i <= 3){
//     console.log("arr-while,index=%d,value=%s",i,arr[i]);
//     i++;
// }

// ======3. do while
// var i = 0;
// do {
//     console.log("arr-dowhile,index=%d,value=%s",i,arr[i]);
//     i++;
// }while (i < 0)

// ======4. for in  循环对象属性
// for (var pro in person){
//     console.log("person-forin,pro=%s,value=%s",pro,person[pro]);
// }
//
// for (var index in arr){
//     console.log("arr-forin,index=%d,value=%s,indextype=%s",index,arr[index],typeof index);
// }

// ======5. for of  循环集合本身元素
// for (var value of arr){
//     console.log("arr-forof,index=%d,value=%s",arr.indexOf(value),value);
// }

// for (var value of map){
//     console.log("map-forof,key=%s,value=%s",value[0],value[1]);
// }

// for (var value of set){
//     console.log("set-forof,value=%s",value);
// }

// ======6. forEach
// arr.forEach(function (value, index, obj) {
//     console.log("arr-forEach,index=%s,value=%s,obj=%s",index,value,obj);
// });
// arr.forEach((value,index,obj)=>{
//     console.log("arr-forEach,index=%s,value=%s,obj=%s",index,value,obj);
// });

// map.forEach((value,key,obj)=>{
//     console.log("map-forEach,key=%s,value=%s,obj=%s",key,value,obj.get(key));
// });

// set.forEach((value,key,obj)=>{
//     console.log("set-forEach,key=%s,value=%s,obj=%s",key,value,obj);
// });

//========================解构赋值
var [x,y,z]=arr;
console.log("赋值,x=%s,y=%s,z=%s",x,y,z);
var {name:x,age:y,city:z,xx=100,test} = person;
console.log("赋值,x=%s,y=%s,z=%s",x,y,z);
console.log("赋值,xx=%s,test=%s",xx,test);
var [x,y]=[y,x];
console.log("赋值,x=%s,y=%s,z=%s",x,y,z);
