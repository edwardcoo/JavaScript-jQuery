/**
 * Created by Mtime on 2018/2/1.
 */

$(document).ready(function () {
    //此jquery既阻止默认行为又停止冒泡
    $("#div1").on('click',function(){
        alert("this is div1 click jquery");
        return false;
    });

    var oDiv1 = document.getElementById('div1');
    var oDiv2 = document.getElementById('div2');
    var oBody = document.getElementById('body');

    oDiv1.onclick = function (ev){
        var oEvent = ev || event;
        alert("this is div1");

        //js阻止事件冒泡
        //stopBubble(ev);

        //js阻止链接默认行为，没有停止冒泡
        oEvent.preventDefault();
        return false;
    }

    oDiv2.onclick = function (ev){
        var oEvent = ev || event;
        alert("this is div2");
        //stopBubble(ev);
    }
    // 手动添加事件
   addEvent(oDiv2,'click',function () {
       alert("this is div2 listener")
   });
   // addEvent(oDiv2,'dbclick',function () {
   //     alert("this is div2 dbclick listener")
   // });

    // 事件传递信息
    // addEvent(oBody,'click',function (event) {
    //     alert("时间："+new Date(event.timeStamp)+" 产生事件的节点：" + event.target.id +"  当前节点："+event.currentTarget.id);
    //     console.log('事件类型：'+event.type);
    //     console.log('事件触发位置，x:%s,y:%s',event.pageX,event.pageY);
    //     console.log('事件触发按键：'+event.which);
    // });

    // $("body").delegate("div",'click',function () {
    //     console.log('div delegate----'+$(this).attr("id"));
    // });
});

function addEvent(obj,ev,fn){
    if(obj.attachEvent){//针对IE浏览器
        obj.attachEvent('on'+ev,fn)
    }else{//针对FF与chrome
        obj.addEventListener(ev,fn,false)//当为true时采用事件捕获，当为false采用事件冒泡
        //程序员可以自己选择绑定事件时采用事件捕获还是事件冒泡。
    }
}

//移除监听事件
function removeEvent(target,type,fn){
    if(target.removeEventListener){
        target.removeEventListener(type,fn);
    }else{
        target.detachEvent("on"+type,fn);
    }
}


function stopBubble(ev) {
//        var e = ev || event;
//        e.stopPropagation();
//        e.cancelBubble = true;
    //如果提供了事件对象，则这是一个非IE浏览器
    if (ev && ev.stopPropagation) {
        //因此它支持W3C的stopPropagation()方法
        ev.stopPropagation();
    } else {
        //否则，我们需要使用IE的方式来取消事件冒泡
        event.cancelBubble = true;
    }
}