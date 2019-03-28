$(function(){
    var controller = new ScrollMagic.Controller(
        {container: ".long_contain",
        vertical:false,
        loglevel: 3});
    
    // var an_titile=new TimelineMax().fromTo(".s1_title",1{left:-3},{left:100},1);
		var scene1 = new ScrollMagic.Scene({
            triggerElement: "#triger_1", 
            duration: 400, 
            offset: 100,
            reverse:true,
            loglevel:2
        })
        .setTween(".s1_title", 2, {width: "20px"}) // trigger a TweenMax.to tween
        .addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
        .addTo(controller);
    
});