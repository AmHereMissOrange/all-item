$(function(){
    //页面初始化+页面全局变量定义
    //var screen_h=window.screen.height;
    var screen_h=document.body.clientHeight;
    $(".load_page").hide();
    $(".index_page").hide();
    $(".page_content").hide();
    $(".dialog").hide();
    $("#ani_can").hide();
    $(".ani_bg").hide();
    $(".load_page").show();

    //page_content暂停动画
    $(".page_content").addClass("pause");
    $(".fr_img").addClass("pause");
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
                page_num=1;
            }
        
        $(".load_txt").empty();
        $(".load_txt").append(i+"%");
    }

    window.onload=function(){
        interval=setInterval(ani,50);          //在jquery内的写法
    }
    
    //2.index_page页动画
    //1)title,mouth,btn动画
    TweenMax.fromTo(".title", 1, {scale:0.9},{scale:1,yoyo:true,repeat:-1},3);
    TweenMax.fromTo(".mouth", 0.5, {top:"45%"},{top:"48%",yoyo:true,repeat:-1},3);
    TweenMax.to(".tip", 0.8,{opacity:0,yoyo:true,repeat:-1},3);

    //2)背景4个col动画
    TweenMax.to(".coll", 2,{top:"15%",yoyo:true,repeat:-1},3);
    TweenMax.to(".colr1", 1,{right:"-0.5rem",yoyo:true,repeat:-1},3);
    TweenMax.to(".colr2", 2,{top:"15%",yoyo:true,repeat:-1},3);
    TweenMax.to(".colb", 1,{left:"-5%",yoyo:true,repeat:-1},3);

    //.music音乐播放暂停动画及事件
    $(".music_icon").on("click",function(){
        console.log(page_num);

        if(played){
            $(this).addClass("pause");
            played=false;
            if(page_num>=4){
                document.getElementById("ani_can").muted =true;
            }
        }else{
            $(this).removeClass("pause");
            played=true;
            if(page_num>=4){
                console.log(page_num);
                document.getElementById("ani_can").muted =false;
            }
        }
    });
    //catch_btn点击事件,跳转至page1页。
    $(".catch_btn").click(
        function(){
        $(".catch_btn,.mouth,.title").hide();               //jq并集选择器
       // $(".index_front").css("background-image","url('../img/frame/page1_1.png')");
        //获取屏幕宽高 

        
        //使用canvas绘制图片
        var mcanvas=document.getElementById("myCanvas");
        var ctx=mcanvas.getContext("2d");
        //利用图片的宽高设置canvas的宽高
        var c_img=new Image();
        var img_p=new Image();
        var index=1;
        c_img.src="img/frame/page1_1.png";
        c_img.onload=function(){
            mcanvas.width=c_img.width;
            mcanvas.height=c_img.height;
            mcanvas.style.width = '100%';//////////重点
            mcanvas.style.height = '100%';//////////重点
        }
        //index页面大嘴动画
        function ani(){
            index++;
                if(index>100){
                    index=1;
                    clearInterval(interval);
                    $(".index_page").fadeOut();
                    $(".page_content").fadeIn();
                    page_num=2;

                }
            img_p.src="img/frame/page1_"+index+".png";
            img_p.onload=function(){
                ctx.clearRect(0, 0, mcanvas.width, mcanvas.height);                
                ctx.drawImage(img_p,0,0,mcanvas.width,mcanvas.height);
            }
        }
        var interval=setInterval(ani,60);            //在jquery内的写法
    });
    //page_content页面切换事件
    //长按切换页面事件
    var index_p=0;
    var front_p=new Array("p_content_poster","g_content_poster","x_content_poster","y_content_poster");
    var g_content=new Array("p_content_bg","g_content_bg","x_content_bg","y_content_bg");
    //****hashmap的简洁实现   
    var hashMap = {
        set : function(key,value){this[key] = value},  
        get : function(key){return this[key]},  
        Contains : function(key){return this.Get(key) == null?false:true},  
        Remove : function(key){delete this[key]}  
    }  
        hashMap.set("poster1",new Array("video1.mp4","mycai-btn-p.png","another-btn-p.png")); 
        hashMap.set("poster2",new Array("video2.mp4","mycai-btn-y.png","another-btn-y.png")); 
        hashMap.set("poster3",new Array("video3.mp4","mycai-btn-b.png","another-btn-b.png")); 
        hashMap.set("poster4",new Array("video4.mp4","mycai-btn-g.png","another-btn-g.png")); 
    
   
        //"长按抓住我的菜"事件
        $(".post_btn").on("touchstart",function(){
            $(".apple").hide();
            $(".p_right").hide();
                console.log(front_p[index_p]);
                console.log(index_p);
            //添加背景和前景过渡动画类
                $(".page_content").removeClass("pause");
                $(".fr_img").removeClass("pause");
                $(".page_content").addClass("play");
                $(".fr_img").addClass("play");
 });
        var poster="";                     //全局变量：poster
        $(".post_btn").on('touchend', function(){
            $(".page_content").addClass("pause");
            $(".fr_img").addClass("pause");
            //获取并设置背景图片
            TweenMax.to(".fr_img",1,{width:"100%",height:"100%",top:"0%",left:"0%",onComplete:function(){
                var img_data=$(".fr_img").css("background-image").split("\,");    //获取background-image的url地址
                var fade_num=parseFloat(img_data[2]);
                img_data[0]="url("+img_data[0].split("\"")[1]+")";

                var img_url=(fade_num>0.5)?img_data[1]:img_data[0];
                    poster=img_url.split("\/").length;
                    poster=img_url.split("\/")[poster-1].split("\.")[0];
                $(".ani_bg").css({"background-image":img_url});

                //设置视频播放页的地址
                 $("#ani_can").attr("src","./media/"+hashMap
                 .get(poster)[0]);

                 $(".page_content").hide();
                 $(".ani_bg").fadeIn();
                 page_num=3;
            }});
        });
    //设置front图片宽度
    var img_w=screen_h*0.6*0.88*0.65;
    console.log(img_w);

    $(".fr_img").css({
        "width":img_w+"px"
    });
    //2.page3初始化
    function pagec_init(){
        page_num=3;
        $(".dialog").hide();
        $(".video_contain").hide();
        $(".ani_bg").hide();
        $(".fr_img").css({
            "width":img_w+"px",
            "left":"-2%",
            "top":"20.5%",
            "height": "52.8%"
        });

        $(".page_content").fadeIn();
    }
    //3.page_content页面背景动画
    function pagec_ani(){
       TweenMax.to(".apple", 1.5,{left:"50%",yoyo:true,repeat:-1},1);
       TweenMax.to(".p_right", 3,{right:"-20%",yoyo:true,repeat:-1},1);
    }
    //4.page5视频页面特效+点击视频播放。
    $(".play_tip").click(
        function(){
        page_num=4;
        console.log(hashMap.get(poster)[1]);
        $(".cancel").css({
            "background-image":"url('../ani_test/img/"+hashMap.get(poster)[1]+"')"
        });
        $(".confirm").css({
            "background-image":"url('../ani_test/img/"+hashMap.get(poster)[2]+"')"
        });

        $(".ani_bg").hide();
        $(".video_contain").show();
        $("#ani_can").fadeIn();

        $('video').trigger('play');
    });

    $(".dialog .cancel").click(
        function(){
        window.location="https://evt.dianping.com/synthesislink/12557.html";
       });

    $(".dialog .confirm").click(
        function(){
            pagec_init();
            
       });
    $("#ani_can").on("ended",function(){
        $(".dialog").show();
    });
    function paged_ani(){
        TweenMax.to(".play_tip", 0.5,{opacity:0,yoyo:true,repeat:-1},1);
    }
    paged_ani();
});