/**
 * AnSlideToPlay
 * v 1.0.4
 * author: WaveF
 * website: minicg.com
 * qq-group: 206832025
 * 
 * @typedef  {Object} config
 * @property {Object} target 指定舞台MovieClip
 * @property {number} speed  拖动速度
 * @property {Object} direction 指定拖动方向为水平'h'或垂直'v'
 */
if("undefined"==typeof FlashAn){
    var FlashAn={};
    console.log("AnSlideToPlay.js >> FlashAn对象不存在，请在此脚本之前先调用FlashAn.js")}
    else
    (function(){
        function e(e){
            m=!0,r={
                x:stage.mouseX,y:stage.mouseY
            },createjs.Ticker.addEventListener("tick",n)}
            function t(e){
                m&&(h=!0,i={
                    x:stage.mouseX,y:stage.mouseY
                })
                }function n(){
                        if(h)
                        {var e={
                            x:i.x-r.x,y:i.y-r.y
                        };
                        "horizontal"!=d&&"h"!=d||(e.x>y&&s.gotoAndStop(s.currentFrame+c),
                        e.x<-y&&(0==s.currentFrame&&(s.currentFrame=s.totalFrames),
                        s.gotoAndStop(s.currentFrame-c))),"verticle"!=d&&"v"!=d||(e.y>y&&s.gotoAndStop(s.currentFrame+c),e.y<-y&&(0==s.currentFrame&&(s.currentFrame=s.totalFrames),s.gotoAndStop(s.currentFrame-c))),r.x=i.x,r.y=i.y
                    }}
                        function a(e){
                            return m=!1,h=!1,!1
                        }function o(e){
                            e.addEventListener("tick",function t(){
                                e.gotoAndStop(0),e.removeEventListener("tick",t)})
                            }
                            var s,r,i,c,d,u,l,g,v,m=!1,h=!1,y=3;
                            FlashAn.AnSlideToPlay=function(n){
                                var r=n.target,i=n.speed,m=n.direction;
                                return void 0!=r&&r?(createjs.Touch.enable(stage),u=stage.canvas.width,l=stage.canvas.height,g=stage.canvas.style.width.split("px")[0]/u,v=stage.canvas.style.height.split("px")[0]/l,s=r,d=m||"horizontal",d=d.toLowerCase(),c=Math.round(i)||1,o(s),stage.addEventListener("stagemousedown",e),stage.addEventListener("stagemousemove",t),void stage.addEventListener("stagemouseup",a)):void console.log("AnSlideToPlay >> 未指定或无效的MovieClip")
                            }
                        })();