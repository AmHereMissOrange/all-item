function snow(config){
	var _this = this;
	if(!config.container){
		alert("缺少参数！");
	}
	this.config = {
		container : config.container,
		num : config.num || 60,
		speed : config.speed || 10,
		radius : [12,8,5,2]
		
	}
	this.init = function(){
		for(var i=0;i<this.config.num;i++){
			this.drawSnow();
		}
	}
	this.drawSnow = function(){
		var x = Math.random()*_this.config.container.canvas.clientWidth;
		var y = Math.random()*_this.config.container.canvas.clientHeight*0.1;
		var s = new createjs.Shape();
		s.graphics.beginFill("#fff");
		var r = parseInt(Math.random()*4);
		s.graphics.beginRadialGradientStroke(["#fff","#ccc"],[0,1],0,0,0,0,0,_this.config.radius[r]).drawCircle(0,0,_this.config.radius[r]);
		s.shadow = new createjs.Shadow("#fff",0,0,_this.config.radius[r]);
		s.x = x;
		s.y = y;
		s.alpha = 0.8;
		_this.config.container.addChild(s);
		var time = (_this.config.container.canvas.clientHeight-y)*_this.config.speed;
		createjs.Tween.get(s).to({ y : _this.config.container.canvas.clientHeight-_this.config.radius[r]-5, x : dir(s)},time).to({ alpha : 0},500);
		function dir(obj){
			var l = Math.random()*2-1<0? -Math.random()*_this.config.container.canvas.clientWidth/2 : Math.random()*_this.config.container.canvas.clientWidth/2; 
			return obj.x + l;
		}
	}
	this.init();
	return this;
}
