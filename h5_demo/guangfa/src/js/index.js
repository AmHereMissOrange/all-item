//import createjs from 'imports-loader?this=>window!exports-loader?window.createjs';
require("./pageresponse.js");
import   $  from 'jquery';
import      '../less/index.less';                  
import      "./TweenMax.js";
import      "./flexible.js";
import      "./pageresponse.js";
import      {preload} from './szxgl.js'; 
let         source=["zi.png","xj.png","zjz.png"];
let         app=new preload();
let         queue=app.load_file(source,null);

    //监听完成事件
    queue.on("complete", function(){
        console.log("fxxk");
    });

    window.onload = window.onresize = function(){
     pageResponse({
        selectors : '.index_page,.page_content,.page_chouj',     //模块选择器，使用querySelectorAll的方法
        mode : 'contain',                                        // auto || contain || cover ，默认模式为auto 
        width : '750',                                           //输入页面的宽度，只支持输入数值，默认宽度为320px
        height : '1355',                                         //输入页面的高度，只支持输入数值，默认高度为504px
        origin : 'left center 0'
    })
    }

    document.addEventListener("DOMContentLoaded", function() {
     pageResponse({
        selectors: '.index_page,.page_content,.page_chouj',     //模块的类名，使用class来控制页面上的模块(1个或多个)
        mode : 'contain',                                       // auto || contain || cover 
        width : '750',                                          //输入页面的宽度，只支持输入数值，默认宽度为320px
        height : '1355',                                        //输入页面的高度，只支持输入数值，默认高度为504px
        origin : 'left top 0'
        })
    });  

    $(function(){
        //页面初始化+页面全局变量定义
        //var screen_h=window.screen.height;
        var screen_h=document.body.clientHeight;
        $(".load_page").hide();
        $(".index_page").hide();
        $(".page_content").hide();
        $(".page_chouj").hide();
        $(".load_page").show();
        var page_index="";
        var played=true;
        var page_num="";

        //1.loadpage页面动画,及事件
        //load_page 进度条加载数字
        //预加载图片等资源
        var i=0;
        var time = 0;//初始化起始时间
        var interval;

    function ani(){
    	i++;
        if(i>100){
            i=0;
            clearInterval(interval);
             $(".load_page").fadeOut();
            $(".index_page").fadeIn(); 
            p1_show();  
            page_num=1;
        }
        $(".load_txt").empty();
        $(".load_txt").append(i+"%");
    }

    window.onload=function(){
        interval=setInterval(ani,50);                          //在jquery内的写法
    }

    TweenMax.fromTo(".title", 2, {position:"relative",opacity:0,top:"5%"},{opacity:1,top:"10%",ease: Bounce.easeOut});

    //2.index_page页动画
    //1)title,mouth,btn动画
    function p1_show(){
        TweenMax.fromTo(".title", 2, {opacity:0,top:"5%"},{opacity:1,top:"10%",ease: Bounce.easeOut});
        TweenMax.fromTo(".title", 1, {scale:0.9},{scale:1,yoyo:true,repeat:-1},15).delay(2);
        TweenMax.fromTo(".catch_btn", 2, {opacity:0,scale:0.9},{opacity:1,scale:1,ease: Bounce.easeOut}).delay(1);
        TweenMax.fromTo(".info", 0.5, {top:"45%"},{top:"48%",yoyo:true,repeat:-1},3).delay(1);
    }

    //catch_btn点击事件,跳转至page1页。
    $(".catch_btn").click(function(){
        TweenMax.to(".title", 1, {opacity:1,top:"10%"});
        TweenMax.to(".catch_btn", 1, {opacity:1,scale:0.9});
        TweenMax.to(".index_page", 1, {opacity:1,scale:0.9,onComplete:function(){
            $(".index_page").hide();
            $(".page_content").show();
        }}).delay(1);
        p2_show();
    });

function p2_show(){
    //0-3对应ABCD,txt[i][3]为正确答案
    var txt=new Array(
        new Array("A.一堆报纸","B.穿了半年的心爱拖鞋","C.APPLE（吃的）","D.上发现精彩APP-精彩商圈专区， 抢购百货、商超代金券 购买的高级礼物",0),
        new Array("A.碰运气结帐时看能否打个骨折","B.办一张广发卡， 登录广发卡“发现精彩”APP 领百元优惠券买单","C.跪求店主给免单","D.使出魅力让朋友付",2),
        new Array("A.登录“发现精彩”APP- 精彩商圈专区， 每天抢海量优惠、周五再抢 5折代金券 拷贝","B.买100元代金券能抵99元，    无限使用","C.找个阳光进行光合作用","D.月光族还能吃饭?",3),
        new Array("A.打开微信每分每秒     监视各大群的红包走势","B.穿了半年的心爱拖鞋","C.APPLE（吃的）","D.上发现精彩APP-精彩商圈专区， 抢购百货、商超代金券 购买的高级礼物",1),
        new Array("A.登录“发现精彩”APP- 精彩商圈专区每天抢海量代金券， 赚取中间差价","B.开始热身，埋单时斗谁跑得快","C.使用丈夫威严让老婆付钱     还给钱你花","D.问老婆拿钱装去结帐，     然后从此消声匿迹",3),
        new Array("A.走遍大江南北， 看哪家商户更有优惠","B.打开“发现精彩”APP-    精彩商圈专区，抢购海量代金券 拷贝","C.先在饭店门口狂吃免费小吃     为肚子打好基础","D.准备一些家常配菜，     在饭店吃饭时能加菜",1)
    );    
    function loaddata(j){
        if(j>=0&&j<=5){
        $("#item").attr("src","./img/Q"+(j+1)+".png");
        for(var i=0;i<=3;i++){
            $($(".list").find("li")[i]).empty();
            $(".list").find("li[name='"+i+"']").append(txt[j][i]);
            // $(".list").find("li")[i].append("fuckkk!!!!");
            }
        }
    }    
    loaddata(0);
    //i为当前第几题
    var i=0;
    $(".nxt_btn").click(
        function(){
        i++;
        if(i>=0&&i<=5){
            loaddata(i);
        }else{
            i=6;
        }
    });    
    $(".list li").click(function(e){
        var li_num=$(e.currentTarget).attr("name");
        $(".c_style").removeClass("c_style");
        if(li_num==txt[i][4]){
            if(i<5){
                i++;
                loaddata(i);
            }else{
                // alert("test");
                $(".page_content").hide();
                $(".page_chouj").fadeIn();    
                page3_ani();          
                }
          }else{
                $(this).addClass("c_style");
          }});
}
    function page3_ani(){
    let img_src=
    new Set(["./img/xj.png",
        "./img/yqsw.png",
        "./img/zi.png",
        "./img/zjz.png",
        "./img/qjb.png"]);
    $("img").attr("src",Array.from(img_src)[Math.trunc(Math.random()*6)]);
    TweenMax.fromTo("img",1, {opacity:0,scale:0},{opacity:1,scale:1,ease: Bounce.easeOut});
}
});