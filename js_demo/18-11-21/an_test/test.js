(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.test_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006600").s().p("AAgPQQn5gVlWkJQlWkKAylFQAylEFAlZQE/lZFfg0QFeg0EyD9QEyD+ClH7QClH6lXD3Qk+DlnJAAIhLgBg");
	this.shape.setTransform(52.4,37.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-60,222.8,195.5);


// stage content:
(lib.test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s().p("AirAAIAzAAIB4AAIB6AAIAyAAg");
	this.shape.setTransform(308.2,541.2);

	this.instance = new lib.test_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(186,621.7,1,1,0,0,0,111.4,97.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(5,1,1).p("AQkgFQCmH6lYD3QlXD4n7gUQn5gVlWkJQlWkKAylFQAzlEE/lZQFAlZFeg0QFeg0EyD9QEyD+ClH7g");
	this.shape_1.setTransform(186,621.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0099CC").ss(1,1,1,3,true).p("ECUugEkIAAJJEiUtAElIAApJ");
	this.shape_2.setTransform(956.5,554.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#234DB6","#583BB8","#963779","#B3701F","#00FFFF","#0000FF","#FF00FF"],[0,0.102,0.514,1,1,1,1],-951.7,0,951.8,0).s().p("EiT+AokIgvAAMAAAhRHMEpbAAAMAAABRHg");
	this.shape_3.setTransform(951.8,265.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(207,375.1,1909.2,716.4);
// library properties:
lib.properties = {
	id: 'D1F260EB95C1AD4EA46C31AA96907224',
	width: 414,
	height: 739,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D1F260EB95C1AD4EA46C31AA96907224'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;