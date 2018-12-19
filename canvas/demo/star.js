function star(config){
	var _this = this;
	if(!config.container){
		alert('缺少参数！');
		return;
	}
	//console.log(config.container.canvas.attributes);
	this.config = {
		container : config.container,    //画布对象
		x : config.x || config.container.canvas.clientWidth*Math.random(),  //出现的位置
		y : config.y || config.container.canvas.clientHeight*Math.random(), //出现的位置
		radius : config.radius || 20, //star的半径
		sides : config.sides||4,	//star的角数量
		pointSize : config.pointSize || 0.8, //角的曲度
		angle : config.angle || -90, //star初始角度
		circleRadius : parseInt(config.radius/5) || 4 , //默认中心圆的半径
		speed : config.speed || 2, //旋转速度
		color : config.color || '#fff' //star的颜色
	}
	this.init = function(){
		this.shape = new createjs.Shape();
		this.shape.graphics.beginFill(this.config.color);
		this.shape.graphics
		.drawPolyStar(0,0,this.config.radius,this.config.sides,this.config.pointSize,this.config.angle)
		.drawCircle(0,0,this.config.circleRadius);
		this.shape.x = this.config.x;
		this.shape.y = this.config.y;
		this.shape.scaleX = 4/this.config.sides;
		this.shape.scaleY = 4/this.config.sides;
		this.shape.shadow = new createjs.Shadow(this.config.color,0,0,this.config.radius);
		this.config.container.addChild(this.shape);
	}
	this.play = function(){
		_this.shape.rotation += _this.config.speed;
	}
	this.init();
	return this;
}
