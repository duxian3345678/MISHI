/**
 * @authors Du Xian (286489501@qq.com)
 * @date    2018-10-22 13:29:08
 */
window.onload= function () {
    var scroll=document.querySelectorAll(".scroll")[0];//ie不兼容，换成id会成功
    var panel=document.querySelectorAll(".panel");//ie不兼容，换成id会成功

    var clientH=window.innerHeight;
    scroll.style.height=clientH+"px";
    for(var i=0;i<panel.length;i++){
        panel[i].style.height=clientH+"px";
    }
    /*下面是关于鼠标滚动*/
    var nav_li = document.querySelectorAll("ul.nav > li");
    var wheel= function (event) {
        var delta=0;
        if(!event)//for ie
            event=window.event;
        if(event.wheelDelta){//ie,opera
            delta=event.wheelDelta/120;
        }else if(event.detail){
            delta=-event.detail/3;
        }
        if(delta){
            handle(delta,nav_li);
        }
        if(event.preventDefault)
            event.preventDefault();
        event.returnValue=false;
    };
    if(window.addEventListener){
        window.addEventListener('DOMMouseScroll',wheel,false);
    }
    window.onmousewheel=wheel;
};
function handle(delta,arr) {
    var num;
    for(var i=0;i<arr.length;i++){//得到当前checked元素的下标
        if(arr[i].checked){
            num=i;
        }
    }
    if(delta>0 && num>0){//向上滚动
        num--;
        arr[num].checked=true;
    }else if(delta<0 && num<4){//向下滚动
        num++;
        arr[num].checked=true;
    }
}