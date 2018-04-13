/**
 * Created by Mtime on 2018/1/10.
 */
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var results = arr.filter(function (x) {
    return x % 2 !== 0;
});
console.log(results);
console.log(arr);

var arr = ['A', 'B', 'C'];
var results = arr.filter(function (element, index, self) {
    console.log('element=%s,index=%s,self=%s',element,index,self);
    return true;
});