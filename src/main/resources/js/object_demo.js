/**
 * Created by Mtime on 2018/1/10.
 */
// 'use strict';
//定义、赋值、使用、删除、判断是否存在属性
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null,
    'test':222
};

// person["name"]=222;
// person.name=222;

console.log('name=%s,age=%s,tags=%s',person.name,person.age,person.tags[2]);
console.log('name=%s',person['name']);

// delete person.name;
// delete person.age;
// console.log('name=%s,age=%s,tags=%s',person.name,person.age,person.tags[2]);

//判断是否拥有属性
// console.log('name' in person);
// console.log('toString' in person);

console.log(person.hasOwnProperty('toString'));

// 构造函数
function Student(name) {
    this.name = name;
    this.hello = function () {
        console.log('hello,%s!',this.name);
    }
}


var ming = new Student("小明");
 ming.hello();
var hong = new Student("小红");
hong.hello();

// 用new Student()创建的对象还从原型上获得了一个constructor属性，它指向函数Student本身
// console.log(ming.constructor == Student.prototype.constructor);
// console.log(Student == Student.prototype.constructor);
// console.log(Object.getPrototypeOf(ming) == Student.prototype);
// console.log(ming instanceof Student);
console.log(ming.hello === hong.hello);

//忘记写new, strict 模式
// var ming =  Student("小明");

//在strict模式下，this.name = name将报错，因为this绑定为undefined，
// 在非strict模式下，this.name = name不报错，因为this绑定为window，
// 于是无意间创建了全局变量name，并且返回undefined，这个结果更糟糕。