function moon(config){
	var _this = this;
	
	this.config = {
		container : config.container,  
		x : config.x || config.container.canvas.clientWidth-200,  //出现的位置
		y : config.y || 200, //出现的位置
	}
	this.init = function(){
		this.con = new createjs.Container();
		this.shape1 = new createjs.Shape();
		this.shape1.graphics.beginFill("#07a8fc");
		this.shape1.alpha = 0.6;
		this.shape1.graphics.drawCircle(_this.config.x,_this.config.y,100);
		this.shape1.shadow = new createjs.Shadow("#07a8fc",0,20,120);
		this.shape1.graphics.endFill();
		this.con.addChild(this.shape1);
		
		this.shape2 = new createjs.Shape();
		
		this.shape2.graphics.beginFill("#FBFBAA");
		this.shape2.graphics.drawCircle(_this.config.x,_this.config.y,100);
		this.shape2.shadow = new createjs.Shadow("#FBFBAA",0,10,100);
		this.shape2.alpha = 0.8;
		this.con.addChild(this.shape2);
		this.config.container.addChild(this.con);
		this.config.container.update();
	}
	this.init();
	return this;
}
