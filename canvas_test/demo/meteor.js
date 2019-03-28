function meteor(config){
	var _this = this;
	this.config = {
		container : config.container,
		x : config.x || 600,  //出现的位置
		y : config.y || 100, //出现的位置
		speed : config.speed || 2,
		
		
	}
	this.init = function(){
		this.shape = new createjs.Shape();
		for(var i=0;i<20;i++){
			this.shape.graphics.beginFill("#fff");
			this.shape.shadow = new createjs.Shadow("#fff",0,0,5-i*0.1);
			this.shape.graphics.drawCircle(_this.config.x+i*2,_this.config.y-i*1,3-i*0.1);
			this.shape.graphics.endFill();
		}
		this.config.container.addChild(this.shape);
	}
	this.play = function(){
		if(this.shape.alpha<=0)return;
		this.shape.x = this.config.x - this.config.speed;
		this.shape.y = this.config.y + this.config.speed;
		this.shape.alpha -=0.005*this.config.speed; 
		this.config.x -= this.config.speed; 
		this.config.y += this.config.speed;
		
	}
	this.init();
	return this;
}
