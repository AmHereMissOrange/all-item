
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation, lib;
function init() {
	createjs.Touch.enable(stage);

	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp = AdobeAn.getComposition("F3B079AC25FBC1418D719A781B294782");
	var lib = comp.getLibrary();
	createjs.MotionGuidePlugin.install();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function (evt) { handleFileLoad(evt, comp) });
	loader.addEventListener("complete", function (evt) { handleComplete(evt, comp) });
	var lib = comp.getLibrary();
	loader.loadManifest(lib.properties.manifest);

}
function handleFileLoad(evt, comp) {
	var images = comp.getImages();
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete(evt, comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib = comp.getLibrary();
	var ss = comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for (i = 0; i < ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet({ "images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames })
	}
	exportRoot = new lib.恢复_pa_zp();
	stage = new lib.Stage(canvas);
	//Registers the "tick" event listener.
	fnStartAnimation = function () {
		stage.addChild(exportRoot);
		//createjs.Ticker.setFPS(lib.properties.fps);
		 createjs.Ticker.setFPS(24);
			
		//createjs.Ticker.timingMode = createjs.Ticker.RAF;

		// console.log(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);

		//stage.stop();
		mains(evt, comp);
	}
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {
		var lastW, lastH, lastS = 1;
		window.addEventListener('resize', resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = lib.properties.width, h = lib.properties.height;
			var iw = window.innerWidth, ih = window.innerHeight;
			var pRatio = window.devicePixelRatio || 1, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
			if (isResp) {
				if ((respDim == 'width' && lastW == iw) || (respDim == 'height' && lastH == ih)) {
					sRatio = lastS;
				}
				else if (!isScale) {
					if (iw < w || ih < h)
						sRatio = Math.min(xRatio, yRatio);
				}
				else if (scaleType == 1) {
					sRatio = Math.min(xRatio, yRatio);
				}
				else if (scaleType == 2) {
					sRatio = Math.max(xRatio, yRatio);
				}
			}
			canvas.width = w * pRatio * sRatio;
			canvas.height = h * pRatio * sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width = w * sRatio + 'px';
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h * sRatio + 'px';
			stage.scaleX = pRatio * sRatio;
			stage.scaleY = pRatio * sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;
			stage.tickOnUpdate = false;
			stage.update();
			stage.tickOnUpdate = true;
		}
	}
	makeResponsive(true, 'both', true, 2);
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}

//手势滑动控制动画播放:舞台，元件，比率,贴位置
function pan(stage, targer, rate, position) {
	//hammer.js 滑动事件绑定。direction:8 为向上 ，16为向下

	const app = document.querySelector('#canvas');
	const hammertime = new Hammer(app);
	hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
	hammertime.on('pan', function (ev) {
		var direction = ev.direction;
	});
}

function mains(evt, comp) {
	createjs.Touch.enable(stage);

	//定义获取元素
	var lib = comp.getLibrary();
	var mains = new lib.mains();
	
	 mains.rotation=90;
	 mains.x=0;
	 mains.height=1600;
	// mains.setbounds(0,0,300,400);???
	//在画布上添加元素
	//影片暂停贴方法
	//var bound=mains.getbounds();       //元素的边界矩形???
	//var b_w=bound.width;              //元素的宽度???
	//var loc=new lib.locat2();
	sc_height=window.innerHeight;
	sc_width=window.innerWidth;
    console.log(innerHeight);
	stage.addChild(mains);
	stage.update();
	var loc=mains.tes;
	mains.stop();
	//canvas的点击事件，区别于movieclip的点击事件
    //每个增加一个section,必须增加1个300宽度
	slidetoplay(stage,mains,1.1,"horital",4000,8);

}
//舞台，lib目标，rate为播放速率!!必须大于1，fang_x:verital为水平，horital为垂直,摩擦系数1-10
function slidetoplay(stage,target,rate,fang_x,width,cash){
	cash=1-cash/10;
	console.log(cash);
    rate=="null"||rate==""||rate==0?1:rate;
	var count = target.duration;
	var r_pan = count / width;          //比率换算，贴数/宽度
	r_pan = r_pan.toFixed(2)*rate;
	var position = 0;                    //当前贴的位置
	var c_frame=target.currentFrame;
    //console.log(rate);
	var direction=0;                    //0为向左，1为向右

	var d_x=0;                           //鼠标单击舞台的mousedown位置
	var d_y=0;

    var startX = 0; // 初始位置
    var startY = 0; // 初始位置
    var lastY = 0; // 上一次位置
    var lastX = 0; // 上一次位置
    /**
     * 用于缓动的变量
     */
    var lastMoveTime = 0;
    var lastMoveStart = 0;
    var stopInertiaMove = false; // 是否停止缓动
	stage.addEventListener("stagemousedown",function(e){
		d_x=parseInt(e.stageX);
		d_y=parseInt(e.stageY);
	   
		lastY = startY =fang_x=="vertial"?e.stageX:e.stageY;        //lasty和lastx混用
		/**
		 * 缓动代码
		 */
		lastMoveStart = lastY;
		lastMoveTime =  Date.now();
		stopInertiaMove = true;
   });
   stage.addEventListener("stagemousemove",function(e){             //区别于pressup事件
	   var t_x=parseInt(e.stageX);
	   var t_y=parseInt(e.stageY);
	   var dex_x=(t_x-d_x)/2;               //x位移量,相对于鼠标的mousedown
	   var dex_y=(t_y-d_y)/2;               //y位移量,相对于鼠标的mousedown
	
	var nowY = fang_x=="verital"?e.stageX:e.stageY;
	var moveY = nowY - lastY;
	var contentTop = fang_x=="verital"?target.x:target.y;

	// 设置top值移动content
	move_play_bound(fang_x,direction,contentTop,moveY);

	lastY = nowY;
	//判断滑动方向
	direction=moveY>=0?1:0;
	/**
	 * 缓动代码
	 */
	var nowTime = Date.now();
	stopInertiaMove = true;
	if(nowTime - lastMoveTime > 300) {
	  lastMoveTime = nowTime;
	  lastMoveStart = nowY;
	}
    console.log("当前帧："+position);
   });

   stage.addEventListener("stagemouseup",function(e){

	   var nowY =  fang_x=="verital"?e.stageX:e.stageY;
	   var moveY = nowY - lastY;
	   var contentTop = fang_x=="verital"?target.x:target.y;
	   var contentY = (parseInt(contentTop) + moveY);
	   // 设置top值移动content

	  // fang_x=="verital"?target.x = contentY:target.y = contentY;
	   lastY = nowY;
	   /**
		* 缓动代码
		*/
	   var nowTime =  Date.now();
	   var v = (nowY - lastMoveStart) / (nowTime - lastMoveTime); //最后一段时间手指划动速度
	   stopInertiaMove = false;
	   (function(v, startTime, contentY) {
		 var dir = v > 0 ? -1 : 1; //加速度方向
		 var deceleration = dir*0.006;
		 var duration = v / deceleration; // 速度消减至0所需时间
		 var dist = v * duration / 2; //最终移动多少
		 var nowV=v;
		 function inertiaMove() {
           if(v>=-0.2&&v<=0.2) return;
		   if(stopInertiaMove) return;
		   var nowTime = Date.now();
		   var t=10;
		    nowV = nowV + deceleration*t;
		   // 速度方向变化表示速度达到0了
		   if(-dir*nowV <0) {
			 return;
		   }
		   var moveY = (v + nowV)/2 * t;
		  move_play_bound(fang_x,direction,contentY,moveY);      //缓
		  contentY=fang_x=="verital"?target.x:target.y;
		  console.log("nowV  "+nowV+"contentop "+contentTop);

		   setTimeout(inertiaMove, 10);
		 }
		 inertiaMove();
	   })(v, nowTime, contentY);

   });

  function move_play_bound(fang_x,direction,contentTop,moveY){
	if(fang_x=="verital"){      
			target.x = (parseInt(contentTop) + moveY*cash);
		     if(target.x<=-width+sc_width&&!direction){
				target.x=-width+sc_width;
				target.stop();
		     }else if(target.x>=0&&direction){
				target.x=0;
				position=0;
		     	return;
		     }else{ 
					position=-r_pan*target.x;
		     	   target.gotoAndStop(position);
				
		     }
	   }else if(fang_x=="horital"){            //等同于vertial的方法
	         target.y = (parseInt(contentTop) + moveY*cash);
		     if(target.y<=-width+sc_height&&!direction){
				target.y=-width+sc_height;
				target.stop();
		     }else if(target.y>=0&&direction){
				target.y=0;
				position=0;

		     	return;
		     }else{
					position=-r_pan*target.y;
					target.gotoAndStop(position);
					}
	   }
}
}

