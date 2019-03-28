$(function(){
    //hammer.js 滑动事件绑定。direction:2 为向左 ，4为向右
    const app = document.querySelector('.front');
    const hammertime = new Hammer(app);
    hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    hammertime.on('pan', function(ev) {
        var left=parseInt($(".bgc"   ).css("left").replace("px",""));
        var direction=ev.direction;
        if(direction==2){
            $(".bgc").css("left",left-4+"px");
        }else{
            $(".bgc").css("left",left+4+"px");
        }
        console.log(ev.deltaX+"px");

    });
});