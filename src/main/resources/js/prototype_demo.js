/**
 * Created by Mtime on 2018/1/31.
 */

function Student(props) {
    constructor()
    {
        console.log("111111111");
    }
    this.name = props.name;
}
// 原型方法
Student.prototype.hello = function () {
    console.log('helloTwo,%s!',this.name);
}

// var ming = new Student({name:'小明'});
// ming.hello();
// var hong = new Student({name:'小红'});
// hong.hello();
// console.log(ming.hello === hong.hello);

//扩展
function PrimaryStudent(props) {
    constructor()
    {
        console.log("2222222222");
    }
    Student.call(this,props);
    this.grade = props.grade;
}
// var wang = new PrimaryStudent({name:'小王',grade:3});
// console.log(wang.name);
// wang.hello();  //不是继承

//new PrimaryStudent() ----> PrimaryStudent.prototype ----> Object.prototype ----> null

//new PrimaryStudent() ----> PrimaryStudent.prototype ----> Student.prototype ----> Object.prototype ----> null

function F() {
constructor()
    {
        console.log('3333333333333');
    }
}
// 把F的原型指向Student.prototype:
F.prototype = Student.prototype;
// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
PrimaryStudent.prototype = new F();
// 把PrimaryStudent原型的构造函数修复为PrimaryStudent: constructor属性,是构造函数的引用
PrimaryStudent.prototype.constructor = PrimaryStudent.constructor;
// 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};
// var ming = new Student({name:'小明'});
// console.log(ming.getGrade());

var wang = new PrimaryStudent({name:'小王',grade:3});
// console.log(wang.name);
// console.log(wang.grade);
// console.log(wang.getGrade());
// wang.hello();
//
// console.log(wang.__proto__ === PrimaryStudent.prototype);
// console.log(wang.__proto__.__proto__ === Student.prototype);
//
// console.log(wang.constructor.toString());
//
// console.log(wang instanceof PrimaryStudent);
// console.log(wang instanceof Student);

// 封装
// function inherits(Child, Parent) {
//     var F = function () {};
//     F.prototype = Parent.prototype;
//     Child.prototype = new F();
//     Child.prototype.constructor = Child;
// }