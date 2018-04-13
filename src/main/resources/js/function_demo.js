/**
 * Created by Mtime on 2018/1/13.
 */
// arguments ...rest
function test(x) {
    console.log("test function x=%s",x);
}

var fun = function (x) {
    console.log("sun function x=%s",x);
};

test.call(null,111,222);
fun.apply(null,[1,2,3]);

console.log(fun instanceof Function)