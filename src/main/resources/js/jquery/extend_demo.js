/**
 * Created by Mtime on 2018/2/2.
 */
// =====================extend
var student = {name:"student",grade:3,birthday:{year:2017,month:12,day:4}};
var xiaoming = {name:"xiaoming",age:19,birthday:{year:2000,month:1}};


$(function () {
    // 合并
    $("#calc_merge").click(function () {
        var result = $.extend(student,xiaoming);
        // var result = $.extend({},student,xiaoming);
        // var result = $.extend(true,{},student,xiaoming);
        console.log("student:%s",JSON.stringify(student));
        console.log("xiaoming:%s",JSON.stringify(xiaoming));
        console.log("result:%s",JSON.stringify(result));
    });
    $("#calc").click(function () {
        let a = $("#input1").val();
        let b = $("#input2").val();
        var  result = add(a,b);
        alert(result);
    });
    $("#calc_plugin").click(function () {
        // $(this).changeBgColor('red');
        // $(this).changeValue("plugin");
        let a = $("#input1").val();
        let b = $("#input2").val();
        var  result = $.add(a,b);
        alert(result);
    });
});

function add(a,b) {
    console.log("普通function add");
    return Number(a)+Number(b);
}


//===============插件
$.extend({
    add:function (a, b) {
        console.log("插件 add");
        return Number(a)+Number(b);
    }
});
// $.add = function (a, b) {
//     return Number(a)+Number(b);
// }

$.fn.extend({
    changeBgColor:function (color) {
        this.css("background",color);
        return this;
    }
});
// $.fn.changeValue=function (value) {
//     this.attr("value",value) ;
//     return this;
// }


(function ($) {

    // $.fn.dataTable = function (options) {
    //     // 初始化
    // };
    // $.fn.dataTableSelected = function () {
    //     // 获取选中
    // };
    // $.fn.dataTableLoad = function () {
    //     // 加载数据
    // };

    var methods = {
        init:function (options) {
            //初始化
            console.log(options)
        },
        load:function () {
            
        },
        selected:function () {
            
        }
    };
    $.fn.dataTable = function (method) {
        if(methods[method]){
            return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
        }else if(typeof method === 'object' || !method){
            return methods.init.apply(this,arguments);
        }else{
            $.error('Method' + method + 'does not exist on dataTable');
        }
    };
})(jQuery);

$("#calc_merge").dataTable({url:'/request/data',type:'json'});